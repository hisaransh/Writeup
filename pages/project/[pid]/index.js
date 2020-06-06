import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigationbar from "../../../Component/Navigationbar"
import { useState , useEffect} from "react";

import Headline from './headline';

const ProjectPage = ({projectData}) => {
  const router = useRouter();
  const { pid } = router.query;
  const [project,handleProjectData] = useState(projectData);

  async function UpdateData(){
    var data = {
      "pid" : pid,
    }

    console.log(data);
    let response = await fetch("http://localhost:3000/api/project/projectbyid", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    })
    let dt = await response.json();
    console.log("Updating Project Data from UPDATE DATA IN INDEXJS");
    handleProjectData(dt);
  }

  return(
        <>
          <Navigationbar/>
          <div className="continer">
            <div className="row">
              <div className="col-3">
              {project.projectName}
              </div>
              <div className="col-7">
              {project.authorName}
              </div>
              <div className="col-2">
              {(project.dateCreated)}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3" style={{borderWidth:'0.5px',borderColor:'silver',borderStyle:'solid'}}>
                <Headline projectData={project} UpdateData={UpdateData}/>
              </div>
              <div className="col-sm-7" style={{borderWidth:'0.5px',borderColor:'silver',borderStyle:'solid'}}>
                 Content
              </div>
              <div className = "col-sm-2" style={{borderWidth:'0.5px',borderColor:'silver',borderStyle:'solid'}}>
                Extra
              </div>
            </div>
          </div>
        </>
  )
}

export async function getStaticProps({params}) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  var data = {
    "pid" : params.pid,
  }
  console.log("called for get static props");
  console.log(data);
  let response = await fetch("http://localhost:3000/api/project/projectbyid", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
  })
  let dt = await response.json();

  return { props : {projectData:dt}};

}
export async function getStaticPaths() {
    let response = await fetch("http://localhost:3000/api/project");
    let data = await response.json();

    // Get the paths we want to pre-render based on posts
    const paths = data.map(d => ({
        params: {pid: d._id,"project":"project"},
    }));

    // We'll pre-render only these paths at build time.
    return {paths, fallback: false}
}

export default ProjectPage

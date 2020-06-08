/*
  author : @saransh
  --------------------------------------------------------
*/
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useState , useEffect} from "react";
import Navigationbar from "../Component/Navigationbar"
import { ToastContainer, toast } from 'react-toastify';

const url = "http://localhost:3000/api/"


export default function Home({ep}) {
  const router = useRouter();
  const [projectName,handleProjectName] = useState('');
  const [authorName,handleAuthorName] = useState('');
  const [aboutProject,handleAboutProject] = useState('');
  const [existingProjects,handleExisingProject] = useState(ep);
  const [isLoading,handleisLoading] = useState(true);
  const notifySuccess = () => toast.success("Project Created !");

  // Following function updates the edit project list
  function updateEditProjectList(){
    fetch(url+"project", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response => response.json())
    .then( (response)=>{
      console.log("Updated Edit Project List ");
      handleExisingProject(response);
      handleisLoading(false);
      return;
    })
  }

  // Function is called only once when a component is rendered on scren
  // to get all the existing project list to save in edit Projects

  // useEffect(() => {
  //   fetch(url+"project", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   }).then(response => response.json())
  //   .then( (response)=>{
  //     console.log("Get all existing Projects list");
  //     handleExisingProject(response);
  //     handleisLoading(false);
  //     return;
  //   })
  // }, []);

  // Following maps the JSON object to list
  const listItems = existingProjects.map((ep) =>
    <li key={ep._id}>
      <h6>{ep.projectName}{" "}
      <Link href="/project/[pid]" as={`/project/${ep._id}`}><a> edit </a></Link>
      </h6>
    </li>
  );

  // Handle Submission of Create Project form
  const handleSubmit = (evt) => {
      evt.preventDefault();
      if(projectName == "")
        return;
      if(authorName == "")
        return;
      var data = {
        "projectName" : projectName,
        "authorName" : authorName,
        "aboutProject" : aboutProject,
      }
      // console.log(data);

      fetch(url+"project", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(function(response) {
        console.log("New Project Created and now updating edit projects list");
        handleProjectName("");
        handleAboutProject("");
        handleAuthorName("");
        notifySuccess();
        updateEditProjectList();
        return response.text()
      }, function(error) {
        console.log(error.message) //=> String
      })
  }

  return (
    <>
    <Navigationbar />
    <div className="container">
      <div className="row">
        <div  className="col d-flex flex-column align-items-center">
            <div className="mt-2">
                <h4> Create New Project</h4>
            </div>
              <div className="mt-2">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      value={projectName}
                      onChange={(e)=>handleProjectName(e.target.value)}
                      placeholder="Project Name"
                      className="inputs"
                      >
                    </input>
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="text"
                      value={authorName}
                      onChange={(e)=>handleAuthorName(e.target.value)}
                      className="inputs"
                      placeholder="Author Name">
                    </input>
                  </div>
                  <input type="submit" className="btn btn-primary mt-2 mb-4 inputsbutton" value="Submit"></input>
                </form>
            </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div  className="col d-flex flex-column align-items-center">
            <div className="mt-2">
                <h4> Edit Existing Projects</h4>
            </div>
            <div className="mt-2">
              <ul>{listItems}</ul>
            </div>
        </div>
      </div>
    </div>
    <div>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
  
    <style jsx>{`
        input:focus {
          outline:none;
        }
        .inputs{
          background-color:'#f1e4e4';
          border-width:0px 0px 1px 0px;
          height:35px;
          width:300px;
          paddingLeft:15px;
        }
        .inputsbutton{
          height:35px;
          width:300px;
        }
        .container{
          margin-top:20px;
        }
        .title{
          color:grey;
        }
    `}</style>
    </>
  )
}

export async function getStaticProps(){
  let response = await fetch("http://localhost:3000/api/project");
  let data = await response.json();
  console.log("Get all existing Projects list");
  console.log(data);
  return { props : {ep:data}};;
}

// export async function getStaticPaths() {
//     let response = await fetch("http://localhost:3000/api/project");
//     let data = await response.json();
//
//     // Get the paths we want to pre-render based on posts
//     const paths = data.map(d => ({
//         params: {pid: d._id,"project":"project"},
//     }));
//
//     // We'll pre-render only these paths at build time.
//     return {paths, fallback: false}
// }

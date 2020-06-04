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
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-content-center">
          <div className="row justify-content-center align-content-center">
            <h6 className="title mt-2">
              Create New Project
              </h6>
          </div>
          <div className="row justify-content-center align-content-center">
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                <input
                  type="text"
                  value={projectName}
                  onChange={(e)=>handleProjectName(e.target.value)}
                  placeholder="Project Name"
                  >
                </input>
              </div>
              <div className="form-group mt-2">
                <input
                  type="text"
                  value={authorName}
                  onChange={(e)=>handleAuthorName(e.target.value)}
                  placeholder="Author Name">
                </input>
              </div>
              <div className="form-group mt-2">
                <textarea
                  type="text"
                  value={aboutProject}
                  onChange={(e)=>handleAboutProject(e.target.value)}
                  placeholder="About project">
                </textarea>
              </div>
              <input type="submit" className="btn btn-primary mt-2 mb-4" value="Submit"></input>
            </form>
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center align-content-center">
          <div className="row justify-content-center align-content-center">
            <h6 className="title mt-2">
            Edit Existing Project
            </h6>
          </div>
          <div className="row justify-content-center align-content-center">
            <ul>{listItems}</ul>
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
    </div>
    <style jsx>{`
        .container{
          margin-top:20px;
        }
        .title{
          color:grey;
        }
        .col{
          border-style:solid;
          border-width:0.5px;
          border-color:silver;
        }
    `}</style>
    </>
  )
}

export async function getStaticProps(){
  // const data = await [
  //   {
  //     _id: '5ec9542ad4f14237488f124b',
  //     projectName: 'project 1',
  //     authorName: 'author name 1',
  //     __v: 0,
  //     dateCreated: '2020-05-28T10:49:55.133Z'
  //   },
  //   {
  //     _id: '5ec95c410f71a0303471eab8',
  //     projectName: 'first project from frontend',
  //     authorName: 'saransh',
  //     __v: 0,
  //     dateCreated: '2020-05-28T10:49:55.133Z'
  //   },
  //   {
  //     _id: '5ec95cecc4246a022c99d9a7',
  //     projectName: 'second project from front end',
  //     authorName: 'saaransh',
  //     __v: 0,
  //     dateCreated: '2020-05-28T10:49:55.133Z'
  //   },
  //   {
  //     _id: '5eca71f281fb5d284825882f',
  //     projectName: 'new project here',
  //     authorName: 'saransh',
  //     __v: 0,
  //     dateCreated: '2020-05-28T10:49:55.133Z'
  //   },
  //   {
  //     _id: '5ecab70ddd85e61ea051c1fb',
  //     projectName: 'temporary',
  //     authorName: 'sara',
  //     __v: 0,
  //     dateCreated: '2020-05-28T10:49:55.133Z'
  //   },
  //   {
  //     _id: '5ecd5920808c5f21f02d9a0d',
  //     projectName: 'Date Creation added',
  //     authorName: 'saransh',
  //     dateCreated: '2020-05-26T18:00:00.143Z',
  //     __v: 0
  //   }
  // ]
  let response = await fetch("http://localhost:3000/api/project");
  let data = await response.json();
  console.log("Get all existing Projects list");
  console.log(data);
  return { props : {ep:data}};;
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

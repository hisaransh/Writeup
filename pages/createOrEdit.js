import Head from 'next/head'
import Link from 'next/link'
import { useState } from "react";
import Navigationbar from "../Component/Navigationbar"
const url = "http://localhost:3000/api"
export default function Home() {
  const [projectName,handleProjectName] = useState('');
  const [authorName,handleAuthorName] = useState('');
  const [aboutProject,handleAboutProject] = useState('');

  const handleSubmit = (evt) => {
      evt.preventDefault();
      var data = {
        "projectName" : projectName,
        "authorName" : authorName,
        "aboutProject" : aboutProject,
      }
      console.log(data);
      fetch("http://localhost:3000/api", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(function(response) {
        console.log(response.status)     //=> number 100–599
        console.log(response.statusText) //=> String
        console.log(response.headers)    //=> Headers
        console.log(response.url)        //=> String
        handleProjectName("");
        handleAboutProject("");
        handleAuthorName("");
        return response.text()
      }, function(error) {
        console.log(error.message) //=> String
      })
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault()
    // data = {
    //   "projectName" : projectName,
    //   "authorName" : authorName,
    //   "aboutProject" : aboutProject,
    // }
    // console.log(data);
    // fetch("http://localhost:3000/api", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   credentials: "same-origin"
    // }).then(function(response) {
    //   response.status     //=> number 100–599
    //   response.statusText //=> String
    //   response.headers    //=> Headers
    //   response.url        //=> String
    //
    //   return response.text()
    // }, function(error) {
    //   error.message //=> String
    // })
  // }
  return (
    <>
    <Navigationbar />
    <div className="container">
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
                  placeholder="Project Name">
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
        <div className="col">
          <h6 className="title mt-2">
            Edit Existing Project
          </h6>
        </div>
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

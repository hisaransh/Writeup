import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigationbar from "../../../Component/Navigationbar"
import { useState , useEffect} from "react";

const ProjectPage = () => {
  const router = useRouter()
  const { pid } = router.query
  useEffect(() => {
    var data = {
      "pid" : pid,
      "saransh":"saransh"
    }
    fetch("http://localhost:3000/api/project/projectbyid", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response => response.json())
    .then( (response)=>{
      console.log(response);
      return;
    })

    // .then(function(response) {
    //   console.log(response.status)     //=> number 100–599
    //   console.log(response.statusText) //=> String
    //   console.log(response.headers)    //=> Headers
    //   console.log(response.url)        //=> String
    //   handleProjectName("");
    //   handleAboutProject("");
    //   handleAuthorName("");
    //   notifySuccess();
    //   updateExistingProject();
    //   return response.text()
    // }, function(error) {
    //   console.log(error.message) //=> String
    // })

  }, []);
  return(
        <>
          <Navigationbar/>
        </>
  )
}


export default ProjectPage

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState , useEffect} from "react";
import Subhead from './subheadline';
import { ToastContainer, toast } from 'react-toastify';
const apiURL = "http://localhost:3000/api/";


const Headline = ( {projectData} ) => {
  const [project,handleProjectData] = useState(projectData);
  const [newHeadlineTitle,handleNewHeadlineTitle] = useState('');
  const notifySuccess = () => toast.success("Headline Created !");
  function ListHeadlines(){
    if(project == null || project.data == null)
      return (<div> Loading Soon </div>);
    else {
      const pd = project.data.map( (dt) =>
        <li key={dt._id}>
          {dt.headlineName}
          <Subhead sub={dt.subheadlines} />
        </li>
      )
      return pd;
    }
  }

  function addNewHeadline(){
    if(newHeadlineTitle == "")
      return;
    let data = {
      "pid" : project._id,
      "headlineTitle": newHeadlineTitle
    }
    fetch(apiURL+"project/newHeadline", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then( (response)=>{

      handleProjectData(response);
      notifySuccess();
      handleNewHeadlineTitle('');

      // handleNewHeadlineTitle(response);
    }, function(error) {
      console.log(error.message) //=> String
    })


  }
  if(project == null){
    return <div> Loading Soon </div>
  }else{
    return (
      <div>
        <ul><ListHeadlines /></ul>
        <h6>Create New Headline</h6>
        <input className="form-control form-control-sm" type="text" placeholder="Add" value={newHeadlineTitle} onChange={(e)=>handleNewHeadlineTitle(e.target.value)} ></input>
        <button type="button" onClick={addNewHeadline} className="btn btn-light mt-2">Create</button>
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
    )
  }
}

export default Headline;

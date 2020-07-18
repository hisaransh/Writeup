import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState , useEffect} from "react";
import Subhead from './subheadline';
import { ToastContainer, toast } from 'react-toastify';
const apiURL = "http://localhost:3000/api/";


const Headline = ( {projectData,UpdateData,changeSubheadline} ) => {
  const [project,handleProjectData] = useState(projectData);
  const [newHeadlineTitle,handleNewHeadlineTitle] = useState('');
  const notifySuccess = () => toast.success("Headline Created !");
  function changeSubheadlinefromheadline(para){
    changeSubheadline(para);
  }

  function ListHeadlines(){
    if(project == null || project.data == null)
      return (<div> Loading Soon </div>);
    else {
      const pd = project.data.map( (dt) =>
        <li key={dt._id}>
          <div className="border-bottom mb-2">
            <div className="d-flex align-items-center"><h6>{dt.headlineName}</h6></div>
            <Subhead changeSubheadLine={changeSubheadlinefromheadline} sub={dt.subheadlines} pid={project._id} headlineid={dt._id} UpdateData = {UpdateData} />
          </div>
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
      UpdateData();
      notifySuccess();
      handleNewHeadlineTitle('');
    }, function(error) {
      console.log(error.message) //=> String
    })
  }
  useEffect(() => {
    console.log("Use effect was triggered");
    handleProjectData(projectData);
  }, [
    projectData,
  ]);

  if(project == null){
    return <div> Loading Soon </div>
  }else{
    return (
      <div className="mt-2 ml-2 mr-3">
        <div className="border-bottom border-dark">
          <div className="d-flex flex-row">
            <div>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-folder-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"/>
                <path fill-rule="evenodd" d="M13.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M13 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
              </svg>
            </div>
            <div className="mt-1 ml-1">
              <h6> Add Headline</h6>
            </div>
          </div>
        <input className="form-control form-control-sm" type="text" placeholder="Headline Name" value={newHeadlineTitle} onChange={(e)=>handleNewHeadlineTitle(e.target.value)} ></input>
        <button type="button" onClick={addNewHeadline} className="btn btn-light mt-2 mb-2">Create</button>
      </div>
      <div className="mt-2">
        <ul style={{listStyleType:'none'}}><ListHeadlines  /></ul>
      </div>
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

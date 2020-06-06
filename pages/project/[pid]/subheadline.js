import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState , useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
const apiURL = "http://localhost:3000/api/";


const Subhead = ( {sub, UpdateData, headlineid, pid} ) => {
  const [subData,handleSubData] = useState(sub);
  const [newSubTitle,handleNewSubTitle] = useState('');
  const [projectPid,handleProjectPid] = useState(pid);
  const [headlineId,handleHeadlineId] = useState(headlineid);
  const notifySuccess = () => toast.success("Subheadline Added!");


  const pdd = subData.map( (t) =>
    <li key={t._id}>{t.subheadlineName} </li>
  )

  function addNewSubHeadline(){
    if(newSubTitle == "")
      return;
      console.log(projectPid,headlineId,newSubTitle);
      var data = {
        "pid" : projectPid,
        "headlineid":headlineId,
        "subheadlineTitle":newSubTitle
      }
      console.log("API FOR ADD NEW SUBHEADLINE");
      console.log(data);
      fetch(apiURL+"project/newSubheadline", {
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
        handleNewSubTitle('');
      }, function(error) {
        console.log(error.message) //=> String
      })
  }

  if(subData == null)
    return <div> </div>
  return (
    <ul>
      {pdd}

      <input className="form-control form-control-sm" value={newSubTitle} onChange={(e)=>handleNewSubTitle(e.target.value)} type="text" placeholder="Add" ></input>
      <button type="button" onClick={addNewSubHeadline} className="btn btn-light mt-2">Create</button>
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
    </ul>
  )
}

export default Subhead;

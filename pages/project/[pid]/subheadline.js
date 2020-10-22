import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState , useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
const apiURL = "http://localhost:3000/api/";


const Subhead = ( {sub, UpdateData, headlineid, pid ,changeSubheadLine} ) => {
  const [subData,handleSubData] = useState(sub);
  const [newSubTitle,handleNewSubTitle] = useState('');
  const [projectPid,handleProjectPid] = useState(pid);
  const [headlineId,handleHeadlineId] = useState(headlineid);
  const notifySuccess = () => toast.success("Subheadline Added!");

  function changeSub(para){
    console.log(para);
    changeSubheadLine(para);
  }
  const changeSub1 =  (e)=> {
    if(e == null)
      return;
    var data = {
      "hid": headlineId,
      "shid": e
    }
    changeSub(data);
  }


  const pdd = subData.map( (t) =>
    <li className="mt-1" key={t._id} style={{cursor:'pointer'}} onClick={() => changeSub1(t._id)}>{t.subheadlineName}</li>
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
    <ul style={{listStyleType:'none'}}>
      <div className="mb-2">
        <div>
          {pdd}
        </div>
        <div className="mt-2">
        <input className="form-control form-control-sm" value={newSubTitle} onChange={(e)=>handleNewSubTitle(e.target.value)} type="text" placeholder="Add" ></input>
        <button type="button" onClick={addNewSubHeadline} className="btn btn-light mt-2">Create</button>
        </div>
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
      <style jsx>{`

      `}</style>
    </ul>
  )
}

export default Subhead;

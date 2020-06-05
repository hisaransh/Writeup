import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState , useEffect} from "react";

const Headline = ( {projectData} ) => {
  const [project,handleProjectData] = useState(projectData);
  
  function ListHeadlines(){
    if(project == null || project.data == null)
      return (<div> Loading Soon </div>);
    else {
      function Subhead({sub}){
        const pdd = sub.map( (t) =>
          <li>{t.subheadlineName} </li>
        )
        if(sub == null)
          return <div> </div>
        return (
          <ul>
            {pdd}
            <input className="form-control form-control-sm" type="text" placeholder="Add" ></input>
            <button type="button" className="btn btn-light mt-2">Create</button>
          </ul>
        )
      }
      const pd = project.data.map( (dt) =>
        <li key={dt._id}>
          {dt.headlineName}
          <Subhead sub={dt.subheadlines} />
        </li>
      )
      return pd;
    }
  }
  if(project == null){
    return <div> Loading Soon </div>
  }else{
    return (
      <div>
        <ul><ListHeadlines /></ul>
        <h6>Create New Headline</h6>
        <input className="form-control form-control-sm" type="text" placeholder="Add" ></input>
        <button type="button" className="btn btn-light mt-2">Create</button>
      </div>
    )
  }
}

export default Headline;

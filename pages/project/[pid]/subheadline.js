import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState , useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
const apiURL = "http://localhost:3000/api/";


const Subhead = ( {sub} ) => {
  const [subData,handleSubData] = useState(sub);
  const [newSubTitle,handleNewSubTitle] = useState('');

  const pdd = subData.map( (t) =>
    <li key={t._id}>{t.subheadlineName} </li>
  )

  if(subData == null)
    return <div> </div>
  return (
    <ul>
      {pdd}
      <input className="form-control form-control-sm" type="text" placeholder="Add" ></input>
      <button type="button" className="btn btn-light mt-2">Create</button>
    </ul>
  )
}

export default Subhead;

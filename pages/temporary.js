import Head from 'next/head'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';


export default function Temp(){
   const notify = () => toast.success("Project Created !");
  return(
    <div>
      <h1>You are in temporary</h1>
      <h2>All experiments regarding frontend can be done here</h2>
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
  )
}

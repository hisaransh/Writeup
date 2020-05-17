import Head from 'next/head'
import Link from 'next/link'
import Navigationbar from "../Component/Navigationbar"

export default function Home() {
  return (
    <>
    <Navigationbar />
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-content-center">
          <div className="row justify-content-center align-content-center">
            <h6 className="title">
              Create New Project
              </h6>
          </div>
          <div className="row justify-content-center align-content-center">
            <form>
              <div className="form-group mt-2">
                <input type="text" placeholder="Project Name"></input>
              </div>
              <div className="form-group mt-2">
                <input type="text" placeholder="Author Name"></input>
              </div>
              <div className="form-group mt-2">
                <textarea type="text" placeholder="About project"></textarea>
              </div>
              <button type="button" className="btn btn-primary mt-2 mb-4">Create!</button>
            </form>
          </div>
        </div>
        <div className="col">
          <h6 className="title">
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

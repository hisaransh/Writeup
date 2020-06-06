/*
  author : @saransh
  --------------------------------------------------------
  Contains first Page that will render in front of user
  Contains Link to createpro
*/

import Head from 'next/head'
import Link from 'next/link'
import Navigationbar from "../Component/Navigationbar"

const url = '/video/indexpagevideo.mp4'

export default function Home() {
  return (
    <div className="root">
      <Navigationbar />
      <header>
        <div className="overlay"></div>
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src={url} type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <Link href="/createproject">
              <a style={{color:'white'}}>
              <h1 className="display-3">Document Everything</h1>
              </a>
              </Link>
              <p className="lead mb-0">Created by @saransh</p>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="card-body custombox">
            <h5 className="card-title">Product Documentations</h5>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-body custombox">
            <h5 className="card-title">Software Go Throughs</h5>
          </div>
        </div>
      </div>
      <div className="row  mt-3">
        <div className="col-sm-6">
          <div className="card-body custombox">
            <h5 className="card-title">Education Writeups</h5>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-body custombox">
            <h5 className="card-title">Coding solutions</h5>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="card-body custombox">
            <h5 className="card-title">Blogs</h5>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-body custombox">
            <h5 className="card-title">Custom Wiki</h5>
          </div>
        </div>
      </div>
      <Link href="/createproject">
        <a style={{color:'#212529'}}>
          <div className="row mt-3">
            <div className="col-sm-12">
            <div className="card-body custombox text-center">
              <h6 className="card-title">Create Here</h6>
            </div>
            </div>
          </div>
        </a>
      </Link>
      </div>
      <div className="mb-3">
      </div>

      <style jsx>{`
        header {
          position: relative;
          background-color: black;
          height: 80vh;
          min-height: 25rem;
          width: 100%;
          overflow: hidden;
        }

        header video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          z-index: 0;
          -ms-transform: translateX(-50%) translateY(-50%);
          -moz-transform: translateX(-50%) translateY(-50%);
          -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
        }

        header .container {
          position: relative;
          z-index: 2;
        }

        header .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: black;
          opacity: 0.5;
          z-index: 1;
        }

        @media (pointer: coarse) and (hover: none) {
          header {
            background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
          }
          header video {
            display: none;
          }
        }
        .root{
          background: #f5f5f5;
        }
        .custombox{
          border-style:solid;
          border-width:0.5px;
          border-color:#775ada;
          box-shadow: 3px 5px #775ada;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

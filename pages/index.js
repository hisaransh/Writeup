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














// <div className="container">
//   <Head>
//     <title>Create Next App</title>
//     <link rel="icon" href="/favicon.ico" />
//   </Head>
//
//   <main>
//     <h1 className="title">
//       Welcome to <a href="https://nextjs.org">Next.js!</a>
//     </h1>
//     </main>
// </div>
//
//   <footer>
//     <a
//       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Powered by{' '}
//       <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//     </a>
//   </footer>
//
  //<style jsx>{`
//     .container {
//       min-height: 100vh;
//       padding: 0 0.5rem;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }
//
//     main {
//       padding: 5rem 0;
//       flex: 1;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }
//
//     footer {
//       width: 100%;
//       height: 100px;
//       border-top: 1px solid #eaeaea;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//
//     footer img {
//       margin-left: 0.5rem;
//     }
//
//     footer a {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//
//     a {
//       color: inherit;
//       text-decoration: none;
//     }
//
//     .title a {
//       color: #0070f3;
//       text-decoration: none;
//     }
//
//     .title a:hover,
//     .title a:focus,
//     .title a:active {
//       text-decoration: underline;
//     }
//
//     .title {
//       margin: 0;
//       line-height: 1.15;
//       font-size: 4rem;
//     }
//
//     .title,
//     .description {
//       text-align: center;
//     }
//
//     .description {
//       line-height: 1.5;
//       font-size: 1.5rem;
//     }
//
//     code {
//       background: #fafafa;
//       border-radius: 5px;
//       padding: 0.75rem;
//       font-size: 1.1rem;
//       font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//         DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//     }
//
//     .grid {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-wrap: wrap;
//
//       max-width: 800px;
//       margin-top: 3rem;
//     }
//
//     .card {
//       margin: 1rem;
//       flex-basis: 45%;
//       padding: 1.5rem;
//       text-align: left;
//       color: inherit;
//       text-decoration: none;
//       border: 1px solid #eaeaea;
//       border-radius: 10px;
//       transition: color 0.15s ease, border-color 0.15s ease;
//     }
//
//     .card:hover,
//     .card:focus,
//     .card:active {
//       color: #0070f3;
//       border-color: #0070f3;
//     }
//
//     .card h3 {
//       margin: 0 0 1rem 0;
//       font-size: 1.5rem;
//     }
//
//     .card p {
//       margin: 0;
//       font-size: 1.25rem;
//       line-height: 1.5;
//     }
//
//     .logo {
//       height: 1em;
//     }
//
//     @media (max-width: 600px) {
//       .grid {
//         width: 100%;
//         flex-direction: column;
//       }
//     }
//   `}</style>
//
//   <style jsx global>{`
//     html,
//     body {
//       padding: 0;
//       margin: 0;
//       font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//         Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//         sans-serif;
//     }
//
//     * {
//       box-sizing: border-box;
//     }
//   `}</style>
// </div>
//   )
// }

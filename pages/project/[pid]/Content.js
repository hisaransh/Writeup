import Head from 'next/head'
import Link from 'next/link'

const Content = ({selected}) => {

  if(selected == null || selected.pid == null || selected.shid == null)
  {
    return <div>
      Please select Subheadline to view data
    </div>
  }
  return (
    <div>
      Contents
    </div>
  )
}

export default Content;

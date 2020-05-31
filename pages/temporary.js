import Head from 'next/head'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

export default function Temp(){
   const notify = () => toast.success("Project Created !");
   const editor = useMemo(() => withReact(createEditor()), [])
   // Keep track of state for the value of the editor.
   const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])
  return(
    <div>
        <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
          <Editable />
        </Slate>
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { Slate, Editable, ReactEditor, withReact, useSlate } from 'slate-react'
import { Editor, Transforms, Text, createEditor } from 'slate'
import { withHistory } from 'slate-history'

const Values = ({data}) =>{
  const [val,setval] = useState(data);
  console.log(val);
  useEffect( ()=> {
    setval(data);
  })
  if(val!=null)
  {
    return(
      <div>
        <h3>{val}</h3>
      </div>
    )
  }else{
    return(
      <div>
        <h3>NULL</h3>
      </div>
    )
  }

}

const App = () =>{
  const [valapp,handlevalapp] = useState(0);
  function change(){
    handlevalapp(50);
  }
  return(
    <div>
        <Values data={valapp}/>
        <button type="button" onClick={(prev)=>handle} className="btn btn-light mt-2">Change</button>
    </div>
  )
}

// const App = () => {
//
//   // const renderElement = useCallback(props => <Element {...props} />, [])
//   const [value, setValue] = useState(null)
//   const Saveit = () => {
//     var x = JSON.stringify(value)
//     localStorage.setItem('slate',x);
//   }
//   useEffect( ()=>{
//     var x = localStorage.getItem('slate');
//     if(x === null){
//       setValue(JSON.parse('[{"type":"paragraph","children":[{"text":"Start Here!!"}]}]'));
//     }else{
//       x = JSON.parse(x);
//       setValue(x);
//     }
//   },[])
//   const renderLeaf = useCallback(props => <Leaf {...props} />, [])
//   const editor = useMemo(() => withHistory(withReact(createEditor())), [])
//   if(value == null){
//     return(<div>NULL</div>)
//   }else{
//     return(
//       <div>
//       <div style={{height:'100%',width:'100%',borderStyle:'solid',borderWidth:'1px'}}>
//       <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
//         <Editable
//           renderLeaf={renderLeaf}
//           placeholder="Enter some rich text…"
//           spellCheck
//           autoFocus
//         />
//       </Slate>
//       </div>
//         <button type="button" onClick={Saveit} className="btn btn-light mt-2">Save</button>
//       </div>
//     )
//   }
//
// }
//
// const Leaf = ({ attributes, children, leaf }) => {
//   if (leaf.bold) {
//     children = <strong>{children}</strong>
//   }
//
//   if (leaf.code) {
//     children = <code>{children}</code>
//   }
//
//   if (leaf.italic) {
//     children = <em>{children}</em>
//   }
//
//   if (leaf.underline) {
//     children = <u>{children}</u>
//   }
//
//   return <span {...attributes}>{children}</span>
// }

export default App;

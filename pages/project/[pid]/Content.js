import Head from 'next/head'
import Link from 'next/link'

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { Slate, Editable, ReactEditor, withReact, useSlate } from 'slate-react'
import { Editor, Transforms, Text, createEditor } from 'slate'
import { withHistory } from 'slate-history'

const Content = ({projectData,selected}) => {

  const [projectContent,handleProjectContent] = useState(projectData);
  const [selectedState,handleSelectedState] = useState(selected);
  const [slateData,handleSlateData] = useState([]);

  const [value, setValue] = useState(null)

  useEffect( () => {
    handleSelectedState(selected);
  })
  // useEffect( ()=>{
  //   var x = localStorage.getItem('slate');
  //   if(x === null){
  //     setValue(JSON.parse('[{"type":"paragraph","children":[{"text":"Start Here!!"}]}]'));
  //   }else{
  //     x = JSON.parse(x);
  //     setValue(x);
  //   }
  // },[])

  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  // console.log("SELECTED STATE",selectedState)
  function setContent(){
    var subhead = projectContent.data.find( dt => dt._id == selectedState.hid);
    console.log("SH",subhead);
    if(subhead != null){
      var subsubhead = subhead.subheadlines.find( xt => xt._id == selectedState.shid);
      if(subsubhead != null){
          console.log("real data",JSON.parse(subsubhead.data));
          setValue(JSON.parse(subsubhead.data));
      }
    }

  }

  if(projectContent == null || selectedState == null || selectedState.pid == null || selectedState.shid == null)
  {
    return <div>
      Please select Subheadline to view data
    </div>
  }else if(value == null){
    return(<div>NULL</div>)
  }else{
      return (
        <div>
        <div style={{height:'100%',width:'100%',borderStyle:'solid',borderWidth:'1px'}}>
        <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
          <Editable
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            spellCheck
            autoFocus
          />
        </Slate>
        </div>
        </div>
      )
  }

}

const Leaf = ({ attributes, children, leaf }) => {

  if (leaf.bold) {
    children = (<strong>{children}</strong>)
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return (<span {...attributes}>{children}</span>)
}

export default Content;

import Head from 'next/head'
import Link from 'next/link'

import React, { useEffect,useCallback, useMemo, useState } from "react";

import { Editor, Transforms, createEditor } from 'slate'
import { Slate, Editable, withReact,useSlate } from 'slate-react'
import { withHistory } from 'slate-history'

const App = () => {
  // const renderElement = useCallback(props => <Element {...props} />, [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return(
    <div>
    <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
      <Editable
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
      />
    </Slate>
    </div>
  )
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
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

  return <span {...attributes}>{children}</span>
}

export default App;

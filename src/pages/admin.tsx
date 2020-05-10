import React, { useRef, useState } from "react"
import ReactDOM from "react-dom"
import JoditEditor from "jodit-react"
import { createNewPost } from "../services/postsService"
import Layout from "../components/Layout"

export default function admin() {
  const editor = useRef(null)
  const [content, setContent] = useState("")

  const config = {
    readonly: false,
    showWordsCounter: true,
    extraButtons: [
      {
        name: "insertDate",
        iconURL: "https://img.icons8.com/material/4ac144/256/phone.png",
        exec: editor => {
          editor.selection.insertHTML(
            ReactDOM.render(<Layout></Layout>, document.createElement("div"))
          )
        },
      },
    ],
  }

  const onSubmit = createNewPost({ title: "test" })

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={newContent => setContent(newContent)}
      />
    </div>
  )
}

import { useContext, useState } from "react"
import { CommentContext } from "../context/CommentContextProvider"

function Form() {
    const [data, setData] = useState('')
    const {addComment} = useContext(CommentContext)

    const handleSubmit = e => {
        e.preventDefault()
        addComment(data)
        setData('')
    }

    const handleChange = e => {
        setData(e.target.value)
    }
    return (
        <div className="form-container">

            <form onSubmit={handleSubmit} className="form">
                <textarea onChange={handleChange} className="post-input" placeholder="Type comment here..." value={data}>
                </textarea>
                <button className="post-button btn-default">Add Comment</button>
            </form>
        </div>
    )
}

export default Form
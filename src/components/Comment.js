import React, { useContext } from 'react'
import { CommentContext } from '../context/CommentContextProvider'

function CommentItem({comment}) {
    const {updateLikes} = useContext(CommentContext)
    const {id, username, body, timestamp, likes} = comment
    return (
        <div className="item-container">
            <div className="post-main">
                <span className="post-title">{username}</span>
                <span className="post-time">{timestamp}</span>
            </div>
            <div className="post-secondary">
                <p className="post-body">{body}</p>
                <button onClick={() => updateLikes({id})} className="like-button btn-default">{likes} Likes</button>
            </div>
        </div>
    )
}

export default CommentItem
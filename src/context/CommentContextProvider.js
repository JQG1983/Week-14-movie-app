import React, { createContext, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import moment from 'moment';

export const CommentContext = createContext()


function CommentContextProvider(props) {
    
    const [user, setUser] = useState('')
    
    const [comments, setComments] = useState([
        {id:uuidv4(), username: 'Leanne Graham', body: 'In my opinion Terminator 2 is the best movie ever', timestamp: moment("1209", "MMDD").fromNow(), likes: 0},
        {id:uuidv4(), username: 'Ervin Howell', body: 'I think Rush Hour is the best comedy of all time', timestamp: moment("1121", "MMDD").fromNow(), likes: 0},
    ])

    useEffect(() => {
        setUser(userName(parseInt((Math.random() * 10) + 1)))
    },[])

    const userName = index => {
        fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
        .then(res => res.json())
        .then(data => setUser(data.name))
    }

    const addComment = comment => {
        setUser(userName(parseInt((Math.random() * 10) + 1)))
        setComments([... comments,{
            id:uuidv4(), 
            username: user, 
            body: comment, 
            timestamp: moment().fromNow(), 
            likes: 0
        }])
    }
    
    const updateLikes = new_comment => {
        const index = comments.findIndex( comment => comment.id === new_comment.id )
        const copyComments = [...comments]
        copyComments[index].likes += 1;
        copyComments.sort((a, b) => b.likes-a.likes)
        setComments(copyComments)
    }
    return (
        <CommentContext.Provider value={{comments, addComment, updateLikes}}>
            {props.children}
        </CommentContext.Provider>
    )
}

export default CommentContextProvider
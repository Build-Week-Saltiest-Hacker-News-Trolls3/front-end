import React, {useContext} from 'react'

import CommentCard from './CommentCard'
import { AppContext } from '../../contexts/AppContext'

const UserFeed = () => {

const [comments, addFavorite] = useContext(AppContext)

console.log('comments', comments)

    return (
        <div className='feedContainer'>
            <h1>Hacker News</h1>
            <h3>Saltiest Troll Comments</h3>
        <div className='commentCardContainer'>
            {comments.map(comment => <CommentCard addFavorite={addFavorite} comment={comment} key={comment.id} />)}
        </div>
        </div>
    )
}

export default UserFeed

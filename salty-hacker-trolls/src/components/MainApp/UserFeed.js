import React, {useContext} from 'react'

import CommentCard from './CommentCard'
import { AppContext } from '../../contexts/AppContext'

const UserFeed = () => {

const [comments] = useContext(AppContext)

    return (
        <div>
            {comments.map((comment, index) => <CommentCard comment={comment} key={index} />)}
        </div>
    )
}

export default UserFeed

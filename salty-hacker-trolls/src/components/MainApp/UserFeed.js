import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import CommentCard from './CommentCard'
import { fetchComments } from '../../actions'

const UserFeed = ({fetchComments, ...props}) => {

    console.log('CommentsListProps', props)

    useEffect(() => {
        fetchComments()
    }, [fetchComments])
    
    if (props.isLoading) {
        return <h2>Loading Comments List...</h2>
    }

    return (
        <div className='feedContainer'>
            <h1>Hacker News</h1>
            <h3>Saltiest Troll Comments</h3>
            <div className='commentCardContainer'>
                {props.error && <p>{props.error}</p>}
                {props.comments.map(comment => <CommentCard comment={comment} key={comment.id} />)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchComments })(UserFeed)
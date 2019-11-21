import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import CommentCard from './CommentCard'
import { fetchComments } from '../../actions'

const UserFeed = ({fetchComments, ...props}) => {
    //destructured fetchComments to put in useEffect dependency array
        console.log('CommentsListProps', props)
    
        const [ showMore, setShowMore ] = useState(false)
    
        const handleClick = () => setShowMore(true)
        
        useEffect(() => {
            fetchComments()
        }, [fetchComments])
        
    
        if (props.isLoading) {
            return <h2>Loading Comments List...</h2>
        }
    
        const numberOfComments = showMore ? props.comments.length : 10
    
    
        return (
            <div className='feedContainer'>
                <div className='commentCardContainer'>
                    {props.error && <p>{props.error}</p>}
                    {props.comments.slice(0, numberOfComments).map(comment => <CommentCard comment={comment} key={comment.comment_uuid} />)}
                    {/* {props.comments.map(comment => <CommentCard comment={comment} key={comment.comment_uuid} />)} */}
                </div>
                <button onClick={()=> handleClick()}>Show more</button>
            </div>
        )
    }
    

const mapStateToProps = state => {
    return {
        comments: state.comments,
        isLoading: state.isLoading,
        error: state.error,
    }
}

export default connect(mapStateToProps, { fetchComments })(UserFeed)
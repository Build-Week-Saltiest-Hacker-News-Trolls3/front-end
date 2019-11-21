import React from 'react'
import { connect } from 'react-redux';

import CommentCard from './CommentCard'
import { fetchComments } from '../../actions'

class UserFeed extends React.component {
    //destructured fetchComments to put in useEffect dependency array
        constructor(props){
            super(props)
            
            this.state = {
                visible: 5
            }
        }
    
    
        const handleClick = () => setShowMore(true)
        
        useEffect(() => {
            fetchComments()
        }, [fetchComments])
        
    
        if (props.isLoading) {
            return <h2>Loading Comments List...</h2>
        }
    
        const updatedComments = setVisibleComments(visibleComments + 10)
        const numberOfComments = showMore ? updatedComments : visableComments
    
    
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
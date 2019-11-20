import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import CommentCard from './CommentCard'
import { fetchComments } from '../../actions'
import { PageContainer, LoadingMessage } from '../../styles/PageStyles';

const UserFeed = ({fetchComments, ...props}) => {

    console.log('CommentsListProps', props)

    useEffect(() => {
        fetchComments()
    }, [fetchComments])
    

    if (props.isLoading) {
        return (<PageContainer>
        <LoadingMessage>loading salty comments...</LoadingMessage>
        </PageContainer>
        )
    }

    return (
        <PageContainer className='feedContainer'>
            <div className='commentCardContainer'>
                {props.error && <p>{props.error}</p>}
                {props.comments.map(comment => <CommentCard comment={comment} key={comment.comment_uuid} />)}
            </div>
        </PageContainer>
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
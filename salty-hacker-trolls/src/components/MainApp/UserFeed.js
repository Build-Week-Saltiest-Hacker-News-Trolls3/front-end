import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import CommentCard from './CommentCard'
import { fetchComments } from '../../actions'
import { PageContainer, LoadingMessage, TitleContainer, PageTitle, PageSubtitle } from '../../styles/PageStyles';

const UserFeed = ({fetchComments, ...props}) => {
    //destructured fetchComments to put in useEffect dependency array
      console.log('CommentsListProps', props)

      const [ showMore, setShowMore ] = useState(false)

      const handleClick = () => setShowMore(true)

      useEffect(() => {
          fetchComments()
      }, [fetchComments])
        
    if (props.isLoading) {
        return (<PageContainer className='loading-container'>
                    <LoadingMessage className='loading-message'>Loading Comments List...</LoadingMessage>
                </PageContainer>)
    }
    
    const numberOfComments = showMore ? props.comments.length : 50

    return (
        <PageContainer className='feed-container'>
            <TitleContainer className='title-container'>
                <PageTitle className='feed-title'>salty comment feed</PageTitle>
                <PageSubtitle className='feed-subtitle'> {"\u2193"} only salty comments here{"\u2193"}</PageSubtitle>
            </TitleContainer>
            <div className='commentCardContainer'>
                {props.error && <p>{props.error}</p>}
                {props.comments.slice(0, numberOfComments).map(comment => <CommentCard comment={comment} key={comment.comment_uuid} />)}
            </div>
            <button onClick={()=> handleClick()}>Show more</button>
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
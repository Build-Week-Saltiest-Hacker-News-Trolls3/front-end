import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../../utils/AxiosWithAuth'
import { connect } from 'react-redux';
import Stars from './Stars';
import DescPanel from './DescPanel'
import { Card, ScoreContainer, Score, Button } from '../../styles/CardStyles';

const CommentCard = (props) => {
    // console.log('commentcard props', props)
    const [troll, setTroll] = useState({})

    useEffect(() => {
  
    axiosWithAuth()
        .get(`/api/trolls/${props.comment.troll_name}`)
        .then(response => { 
            // console.log(response)
            setTroll(response.data)
            })
        .catch(error => console.error('Server Error', error));
  }, []);

  const addNewFav = e => {
    e.preventDefault()
    axiosWithAuth()
        .post(`/api/users/${props.userID}/favorites/${props.comment.comment_uuid}`)
        .then(response => { 
            console.log('post newFav', response)
            alert('added to favorites')
            })
        .catch(error => console.error('Server Error', error.message));
    }

    const rank = troll.salty_rank * 10

//   console.log("Troll", troll)
    
    return (
        <Card className='commentCard'>
            <h3>{props.comment.troll_name}</h3>
            {troll ? 
            <ScoreContainer className='scoreContainer'><div><Score>saltiness:</Score></div><Stars saltyRank={rank} /></ScoreContainer> 
            : <h3>Loading...</h3>}
            <DescPanel commentContent={props.comment.comment_text} />
            <Button className='favButton' onClick={addNewFav}>
				+favorites
			</Button>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps, {})(CommentCard);
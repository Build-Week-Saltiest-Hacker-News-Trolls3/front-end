import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../../utils/AxiosWithAuth'
import { connect } from 'react-redux';
import { Card } from '../../styles/CardStyles';

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
            })
        .catch(error => console.error('Server Error', error.message));
    }

//   console.log("Troll", troll)
    
    return (
        <Card className='commentCard'>
            <h3> {props.comment.troll_name}</h3>
            {troll ? 
            <h3> saltiness score: {troll.salty_rank}</h3> 
            : <h3>Loading...</h3>}
            <p>{props.comment.comment_text}</p>
            <button onClick={addNewFav}>
				favorite
			</button>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps, {})(CommentCard);
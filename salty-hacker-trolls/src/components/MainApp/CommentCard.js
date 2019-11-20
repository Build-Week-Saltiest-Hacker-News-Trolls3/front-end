import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../../utils/AxiosWithAuth'
import { connect } from 'react-redux';

const CommentCard = ({comment}) => {
    
    const [troll, setTroll] = useState([])

    useEffect(() => {
  
    axiosWithAuth()
        .get(`/api/trolls/${comment.troll_name}`)
        .then(response => { 
            // console.log(response)
            setTroll(response.data)
            })
        .catch(error => console.error('Server Error', error));
  }, [comment.troll_name]);

//   console.log("Troll", troll)
    
    return (
        <div className='commentCard'>
            <h3>Troll Name: {comment.troll_name}</h3>
            {troll.length ? 
            <h3>Troll Salty Score: {troll[0].salty_rank}</h3> 
            : <h3>Loading...</h3>}
            <p>{comment.comment_text}</p>
            {/* <button onClick={() => addFavorite(comment)}>
				Add to Favorites
			</button> */}
        </div>
    )
}

export default CommentCard
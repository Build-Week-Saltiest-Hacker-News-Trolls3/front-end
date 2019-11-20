import React from 'react'
import { connect } from 'react-redux';

import axiosWithAuth from '../../utils/AxiosWithAuth'

const Favorite = (props) => {


    axiosWithAuth()
        .post(`/api/users/${props.userID}/favorites/${props.fav.id}`)
        .then(response => { 
            console.log(response)
            // setFavoriteComment(response.data)
            })
        .catch(error => console.error('Server Error', error));
        

    return (
        <div className='favoriteCard'>
            <h3>Troll Name: {props.fav.troll_name}</h3>
            <p>{props.fav.content}</p>
            {/* <button onClick={() => addFavorite(comment)}>
				Add to Favorites
			</button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites,
        userID: state.userID
    }
}

export default connect(mapStateToProps, {})(Favorite);
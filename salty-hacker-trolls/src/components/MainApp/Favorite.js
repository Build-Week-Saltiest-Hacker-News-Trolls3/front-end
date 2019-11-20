import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import axiosWithAuth from '../../utils/AxiosWithAuth'

const Favorite = (props) => {
    console.log('Favorite props', props)

    const deleteFav = e => {
       e.preventDefault();
        axiosWithAuth()
        .delete(`/api/users/${props.userID}/favorites/${props.fav.id}`)
        .then(response => { 
            console.log('deletefav', response)
            const newFavoritesList = props.favorites.filter(el => {
                return el.id !== response.data.id
              })
              props.setFavorites(newFavoritesList);
              history.push('/favorites')
            })
        .catch(error => console.error('Server Error', error));
    }

    let history = useHistory();

    return (
        <div className='favoriteCard'>
            <h3>Troll Name: {props.fav.troll_username}</h3>
            <p>{props.fav.troll_comment}</p>
            <button onClick={deleteFav}>
				Delete
			</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps, {})(Favorite);
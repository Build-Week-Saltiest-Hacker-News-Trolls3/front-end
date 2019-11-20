import React from 'react'
import { connect } from 'react-redux';

import axiosWithAuth from '../../utils/AxiosWithAuth'
import DescPanel from './DescPanel'

const Favorite = (props) => {
    console.log('Favorite props', props)

    const deleteFav = e => {
       e.preventDefault();
        axiosWithAuth()
        .delete(`/api/users/${props.userID}/favorites/${props.fav.id}`)
        .then(response => { 
            console.log('deletefav', response)
            const newFavoritesList = props.favorites.filter(el => {
                return el.id !== parseInt(response.data.id)
              })
              props.setFavorites(newFavoritesList);
            console.log('newFavoritesList', newFavoritesList)
            })
        .catch(error => console.error('Server Error', error));
    }

    return (
        <div className='favoriteCard'>
            <h3>Troll Name: {props.fav.troll_username}</h3>
            <DescPanel commentContent={props.fav.troll_comment} />
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
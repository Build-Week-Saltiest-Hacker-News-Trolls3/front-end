import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import Favorite from './Favorite'
import axiosWithAuth from '../../utils/AxiosWithAuth'

const FavoritesPage = (props) => {


    return (
        <div>
            {/* map over favorites */}
            {props.favorites.map(fav => <Favorite key={fav.id} fav={fav} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites,
        userID: state.userID
    }
}

export default connect(mapStateToProps, {})(FavoritesPage);
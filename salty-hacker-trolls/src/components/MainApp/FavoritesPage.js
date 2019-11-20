import React, { useContext } from 'react'

import { AppContext } from '../../contexts/AppContext'
import Favorite from './Favorite'

const FavoritesPage = () => {

    const [, , favorites] = useContext(AppContext)

    return (
        <div>
            {/* map over favorites */}
                {favorites.map(fav => <Favorite key={fav.id} fav={fav} />)} 
        </div>
    )
}

export default FavoritesPage

import React from 'react'

const Favorite = ({fav}) => {


    return (
        <div className='favoriteCard'>
            <h3>Troll Name: {fav.troll_name}</h3>
            <h3>Troll Salty Score: </h3>
            <p>{fav.content}</p>
            {/* <button onClick={() => addFavorite(comment)}>
				Add to Favorites
			</button> */}
        </div>
    )
}

export default Favorite

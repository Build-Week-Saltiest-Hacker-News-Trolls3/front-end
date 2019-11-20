import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Favorite from './Favorite'
import axiosWithAuth from '../../utils/AxiosWithAuth'
import { PageContainer, TitleContainer, PageTitle, PageSubtitle } from '../../styles/PageStyles';

const FavoritesPage = (props) => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
  
    axiosWithAuth()
        .get(`/api/users/${props.userID}/favorites`)
        .then(response => { 
            console.log(response)
            setFavorites(response.data)
            })
        .catch(error => console.error('Server Error', error));
  }, []);

    return (
        <PageContainer>
             <TitleContainer>
                <PageTitle>favorite salty comments</PageTitle>
                <PageSubtitle>your favorite salty comments</PageSubtitle>
            </TitleContainer>
            {/* map over favorites */}
            {favorites.map(fav => <Favorite key={fav.id} fav={fav} favorites={favorites} setFavorites={setFavorites}/>)}
        </PageContainer>
    )
}

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps, {})(FavoritesPage);
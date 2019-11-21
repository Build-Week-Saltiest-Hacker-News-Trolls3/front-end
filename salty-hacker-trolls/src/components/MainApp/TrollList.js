import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/AxiosWithAuth';
import TrollCard from './TrollCard'
import { PageContainer, TitleContainer, PageTitle, PageSubtitle } from '../../styles/PageStyles';

const TrollList = () => {
    const [ trolls, setTrolls] = useState([]);

    useEffect(() =>{
        axiosWithAuth()
            .get(`/api/trolls`)
            .then(response => {
                console.log(response)
                setTrolls(response.data)
            })
            .catch(error => console.error('No dice.', error));

    }, []);

    return(
        <PageContainer className='troll-page-container'>
            <TitleContainer className='troll-page-title-container'>
                <PageTitle className='troll-page-title'>saltiness leaderboard</PageTitle>
                <PageSubtitle className='troll-page-subtitle'> {"\u2193"} ranked saltiest to least salty {"\u2193"}</PageSubtitle>
            </TitleContainer>
            {trolls.map(troll => <TrollCard key={troll.id} troll={troll} />)}
        </PageContainer>
    )
}

export default TrollList;
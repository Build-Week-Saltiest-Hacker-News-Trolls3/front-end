import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/AxiosWithAuth';
import TrollCard from './TrollCard'
import { PageContainer, TitleContainer, PageTitle, PageSubtitle } from '../../styles/PageStyles';
import { Button } from '../../styles/CardStyles';

const TrollList = () => {

    const [ showMore, setShowMore ] = useState(false)
    const [ trolls, setTrolls] = useState([]);

    const handleClick = () => setShowMore(true)

    useEffect(() =>{
        axiosWithAuth()
            .get(`/api/trolls`)
            .then(response => {
                console.log(response)
                setTrolls(response.data)
            })
            .catch(error => console.error('No dice.', error));

    }, []);

    const numberOfTrolls = showMore ? trolls.length : 100

    return(
        <PageContainer className='troll-page-container'>
            <TitleContainer className='troll-page-title-container'>
                <PageTitle className='troll-page-title'>saltiness leaderboard</PageTitle>
                <PageSubtitle className='troll-page-subtitle'> {"\u2193"} ranked saltiest to least salty {"\u2193"}</PageSubtitle>
            </TitleContainer>
            {trolls.slice(0, numberOfTrolls).sort((a,b) => (a.salty_rank > b.salty_rank)? 1 : -1).map(troll => <TrollCard key={troll.id} troll={troll} />)}
            <Button onClick={()=> handleClick()}style={{backgroundColor:'grey'}}>show more</Button>
        </PageContainer>
    )
}

export default TrollList;
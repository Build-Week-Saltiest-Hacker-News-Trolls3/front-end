import React from 'react';
import Stars from './Stars';
import { Card, ScoreContainer, Score  } from '../../styles/CardStyles';

const TrollCard = (props) => {

    return (
        <Card className='troll-card'>
            <h2>{props.troll.name}</h2>
            <ScoreContainer className='scoreContainer'><div><Score>saltiness</Score></div><Stars saltyRank={props.troll.salty_rank} /></ScoreContainer> 
            <h4>salty comments:{props.troll.salty_comments} | total comments: {props.troll.comments_total}</h4>
        </Card>
    )
}

export default TrollCard;
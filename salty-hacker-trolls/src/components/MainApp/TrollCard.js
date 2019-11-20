import React from 'react';
import { Card } from '../../styles/CardStyles';

const TrollCard = (props) => {

    return (
        <Card className='troll-card'>
            <h2>{props.troll.name}</h2>
            <h3>saltiness score:{props.troll.salty_rank}</h3>
            <h4>salty comments:{props.troll.salty_comments} | total comments: {props.troll.comments_total}</h4>
        </Card>
    )
}

export default TrollCard;
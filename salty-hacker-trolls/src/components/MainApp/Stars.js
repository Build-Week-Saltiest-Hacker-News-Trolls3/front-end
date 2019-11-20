import React from 'react';
import styled from 'styled-components';

import StarRatingComponent from 'react-star-rating-component';

const Stars = ({saltyRank}) => {
    
    return (
        <StarsContainer className='starsContainer'>
           <StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={10}
          value={Math.round(saltyRank)}
          starColor={`#ec6533`} /* color of selected icons, default `#ffb400` */
          emptyStarColor={`#908c8c`}
        />
        </StarsContainer>
    )
}

export default Stars

const StarsContainer = styled.div`
    margin: 0;
    padding: 0;
`;

const styledStarsComponent = styled(StarRatingComponent)`
    margin: 0;
    padding: 0;
`;

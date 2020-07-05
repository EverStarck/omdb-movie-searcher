import React from 'react';
import Card from "./card";
import styled from "@emotion/styled";

const CardFrame = styled.main`
    margin: 30px 0;
    display: flex;
    justify-content: center;
`;

const CardGrid = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  gap: 20px;
`;

const CardContainer = ({Search}) => {
  return (
    <CardFrame>
      <CardGrid>
        {Search.map(movie => (
          <Card movie={movie} key={movie.imdbID}/>
        ))}
      </CardGrid>
    </CardFrame>
  );
};

export default CardContainer;

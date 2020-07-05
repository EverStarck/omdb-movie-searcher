import React from "react";
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const CardContainer = ({loading, errorMessage, movies }) => {
  console.log(movies);
  return (
    <CardFrame>
      <CardGrid>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Card key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}

        {/* {errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          movies.map((movie) => <Card movie={movie} key={movie.imdbID} />)
        )} */}
      </CardGrid>
    </CardFrame>
  );
};

export default CardContainer;

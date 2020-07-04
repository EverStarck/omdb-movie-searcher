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

const CardContainer = ({ movies }) => {
  return (
    <CardFrame>
      <CardGrid>
        {movies.Search.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </CardGrid>
    </CardFrame>
  );
};

export default CardContainer;

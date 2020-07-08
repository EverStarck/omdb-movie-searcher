import styled from "@emotion/styled";
import Router from "next/router";

const CardStyled = styled.article`
  cursor: pointer;
  /* transition: 0.5s ease;
  &:hover {
    filter: contrast(60%);
  } */
  h1 {
    text-align: center;
  }
  h3 {
    text-align: center;
    span {
      font-weight: normal;
      color: #ececec;
    }
  }

  .container {
    position: relative;
    width: 100%;
  }

  .image {
    display: block;
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #474350;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.2s ease;
  }

  .container:hover .overlay {
    height: 10%;
  }

  .text {
    white-space: nowrap;
    color: white;
    font-size: 20px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 600px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 50%;
      }
    }
  }
`;

const Card = ({ movie }) => {
  return (
    <CardStyled
      onClick={(e) => Router.push("/movie/[id", `/movie/${movie.imdbID}`)}
    >
      <h1>{movie.Title}</h1>
      <div className="container">
        <img
          loading="lazy"
          src={movie.Poster}
          alt={movie.Poster}
          className="image"
        />
        <div className="overlay">
          <div className="text">
            <h3>
              <span>Release: </span>
              {movie.Year}
            </h3>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;

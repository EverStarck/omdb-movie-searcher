import styled from "@emotion/styled";

const CardStyled = styled.article`
    cursor: pointer;
    transition: .5s ease;
    &:hover {
        filter: contrast(60%);
    }
    h1 {
        text-align: center;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    h3 {
        text-align: center;
        span {
            font-weight: normal;
            color: #474350;
        }
    }
`;

const Card = ({movie}) => {
    return (
        <CardStyled>
            <h1>{movie.Title}</h1>
            <img loading="lazy" src={movie.Poster} alt={movie.Poster}/>
            <h3><span>Release: </span>{movie.Year}</h3>
        </CardStyled>
    );
}

export default Card;
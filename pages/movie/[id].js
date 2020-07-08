import { useRouter } from "next/router";
import styled from "@emotion/styled";

const CardStyled = styled.article`
  cursor: pointer;
  transition: 0.5s ease;
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


const MoviePage = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const {data} = props;
  console.log(props.data);


  return (
    // <h1>Hey</h1>
    <CardStyled>
    <h1>{data.Title}</h1>
    <img loading="lazy" src={data.Poster} alt={data.Poster} />
    <h3>
      <span>Release: </span>
      {data.Year}
    </h3>
  </CardStyled>
  )
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=6e87ced2&i=${context.query.id}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
}

export default MoviePage;

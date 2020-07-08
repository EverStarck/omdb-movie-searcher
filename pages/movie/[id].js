import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styled from "@emotion/styled";

const MovieContainer = styled.main`
  padding: 0;
  margin: 0;
  background: #222831;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .movieName {
    grid-area: movieName;
    margin-bottom: 50px;
    .back {
      cursor: pointer;
      color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(10px, 10px);
    }
    h1 {
      font-size: 3rem;
      color: #fff;
      font-weight: 400;
      margin-top: 50px;
      margin-bottom: 0;
      text-align: center;
    }
    h4 {
      font-size: 1rem;
      color: #fff;
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 768px) {
    .movieName {
      h1 {
        font-size: 2.5rem;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .movieName {
     margin-bottom: 20px;
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "movieImg movieInfoT";
  column-gap: 50px;
  width: 50vw;
  /* background: green; */
  place-items: center;
  img {
    grid-area: movieImg;
    position: relative;
  }
  .movieInfo {
    grid-area: movieInfoT;
    p {
      color: #8391a6;
      margin: 3px 0 10px 0;
    }
    b {
      color: #ececec;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
  @media only screen and (max-width: 600px) {
  grid-template-areas: "movieImg"
                       "movieInfoT";
    img {
        width: 50%;
        margin-bottom: 50px;
    }
    .movieInfo {
        margin-bottom: 30px;
    }
  }
`;

const MoviePage = (props) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  const { data } = props;
  console.log(props.data);

  return (
    <>
      <Head>
        <title>{data.Title}</title>
      </Head>
      <MovieContainer>
        <div className="movieName">
          <Link href={"/"}>
            <div className="back">
              <a>&larr; Back to search</a>
            </div>
          </Link>
          <h1>{data.Title}</h1>
          <h4>Movie Details</h4>
        </div>
        <GridContainer>
          <img src={data.Poster} alt={data.Poster} />
          <article className="movieInfo">
            <b>Year</b>
            <p>{data.Year}</p>
            <b>Duration</b>
            <p>{data.Runtime}</p>
            <b>Genre</b>
            <p>{data.Genre}</p>
            <b>StoryLine</b>
            <p>{data.Plot}</p>
          </article>
          <div className="movieData"></div>
        </GridContainer>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </MovieContainer>
    </>
  );
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

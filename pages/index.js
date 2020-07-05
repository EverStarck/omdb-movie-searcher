import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import CardContainer from "../components/cardContainer";

export default function Home(props) {
  const [searchValue, setSearchValue] = useState("");
  const {movies} = props;
  const {Search} = movies;

  return (
    <>
      <Head>
        <title>Hooked!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header searchValue={searchValue} setSearchValue={setSearchValue} />

      <CardContainer Search={Search} />

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
    </>
  );
}

export async function getServerSideProps(context) {
  const url = await fetch(`http://www.omdbapi.com/?apikey=6e87ced2&s=john`);
  const movies = await url.json();
  return { props: { movies }};
}

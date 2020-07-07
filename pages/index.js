import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import CardContainer from "../components/cardContainer";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=6e87ced2&s=john`
      );
      const jsonResponse = await response.json();
      setMovies(jsonResponse.Search);
      setLoading(false);
    }
    fetchData();
  }, []);

  const search = async (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=6e87ced2&s=${searchValue}`
    );
    const jsonResponse = await response.json();
    if (jsonResponse.Response === "True") {
      setMovies(jsonResponse.Search);
      setLoading(false);
    } else {
      setErrorMessage(jsonResponse.Error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Hooked!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header search={search} />

      <CardContainer
        loading={loading}
        errorMessage={errorMessage}
        movies={movies}
      />

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

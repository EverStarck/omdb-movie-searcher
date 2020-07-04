import Head from "next/head";
import Header from "../components/header";
import CardContainer from "../components/cardContainer";

export default function Home({movies}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <CardContainer
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

export async function getServerSideProps() {
  const url = await fetch(`http://www.omdbapi.com/?apikey=6e87ced2&s=john`);
  const movies = await url.json();

  return {props: {movies}}
}

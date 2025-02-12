import React from 'react'
import "../Row/Row"
import Row from '../Row/Row'
import requests from '../../../Utils/Requests'
function RowList() {
  return (
    <>
      <Row title= "NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
            />
     <Row title="Trending"
     fetchUrl={requests.fetchTrending}
     />
     <Row title="Trending"
     fetchUrl={requests.fetchTrending}
     />
     <Row title="Trending"
     fetchUrl={requests.fetchTrending}
     />
     <Row title="Top Rated"
     fetchUrl={requests.fetchTopRatedMovies}
     />
      <Row title="Action"
     fetchUrl={requests.fetchActionMovies}
     />
      <Row title="Comedy"
     fetchUrl={requests.fetchComedyMovies}
     />
      <Row title="Horror"
     fetchUrl={requests.fetchHorrorMovies}
     />
      <Row title="Romance"
     fetchUrl={requests.fetchRomanceMovies}
     />

<Row title="Documentaries"
     fetchUrl={requests.fetchDocumentaries}
     />

<Row title="TV"
     fetchUrl={requests.fetchTvShow}
     />

    </>
  )
}

export default RowList

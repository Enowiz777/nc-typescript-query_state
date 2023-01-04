import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";

// Container

const Container = styled.div`
  padding: 0px 0px;
  margin: 0 auto;
`;

function Home() {

  // useState
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8c63e5b631f3491aa7a9db8d04c969c3");
      const json = await response.json();
      const articles = json.articles;
      for (let i = 0; i < articles.length; i++) {
       }
    })();
  }, []);

  // useEffect

    return (
      <Container>
        { 

        }
      </Container>
    );
  }
  
  export default Home;
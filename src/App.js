
import './App.css';
import axios from 'axios';
import Quote from './components/Quote';
import logo from './images/bbad-logo.png'
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Footer from './components/Footer';


const initialState = {
  text: "",
  author: "",
  series: ""
}

function App() {

  const [quote, setQuote] = useState(initialState);
  const[loading, setLoading] = useState(false)

  // ASYNC -> palabra reservada que indica que puede tener instrucciones que demorararan
  // AWAIT -> Se le coloca a la instruccion que puede demorar.

  const updateQuote = async () => {

    setLoading(true);

    // al usar axios cambiamos la palabra "fetch" por "axios.get"
    const res = await axios.get("https://www.breakingbadapi.com/api/quote/random")
    const [newQuote] = await res.data // como la respuesta ya viene en formato json solo usamos la palabra "data" para traer la info.

    const {quote: text, author, series} = newQuote;

    setQuote({
      text,
      author,
      series
    })

    setLoading(false);
  }

  useEffect(() => {
    updateQuote()
  }, [])
  

  return (
    <>
      <main className='main'>
        <img src={logo} alt="breaking bad logo"/>
        {
          loading && <Loading/>
        }
        {
          !loading && <Quote quote = {quote}/>
        }
        <button onClick={updateQuote}>new quote</button>
        <Footer/>
      </main>
    </>
  );
}

export default App;


import './App.css';
import Quote from './components/Quote';
import logo from './images/bbad-logo.png'
import { useState, useEffect } from 'react';
import Loading from './components/Loading';


const initialState = {
  text: "",
  author: "",
  series: ""
}

function App() {

  const [quote, setQuote] = useState(initialState);
  const[loading, setLoading] = useState(false)

  const updateQuote = async () => {

    setLoading(true);

    const res = await fetch("https://www.breakingbadapi.com/api/quote/random")
    const [newQuote] = await res.json()

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
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#F4D03F',
        backgroundImage: 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',

      }}>
        <img src={logo} alt="breaking bad logo" style={{
          maxWidth: '400px',
          // minWidth: '320px',
          placeItem: 'center',
          placeSelf: 'center'
        }} />
        {
          loading && <Loading/>
        }
        {
          !loading && <Quote quote = {quote}/>
        }
        {/* <Quote quote = {quote}/> */}
        <button onClick={updateQuote} style={{
              margin: 'auto',
              width: '200px',
              height: '40px',
              fontFamily: "'Solway', serif",
              border: 'solid 1px',
        }}>Nueva cita</button>
      </div>
    </>
  );
}

export default App;

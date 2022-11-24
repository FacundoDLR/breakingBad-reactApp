
import './App.css';
import logo from './images/bbad-logo.png'

function App() {
  return (
    <>
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        // justifyItems: 'center',
        backgroundColor: '#F4D03F',
        backgroundImage: 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',

      }}>
        <img src={logo} alt="breaking bad logo" style={{
          maxWidth: '400px',
          // minWidth: '320px',
          placeItem: 'center',
          placeSelf: 'center'
        }} />
        <div style={{
          backgroundColor: '#fff',
          maxWidth: '400px',
          // width: '320px',
          heigth: '300px',
          padding: '.75rem',
          borderRadius: '16px',
          boxShadow: '0px 10px 15px 5px rgb(0 0 0 / 10%)',
          margin: 'auto',

        }}>
          <h3 style={{
            textAlign: 'center',
            fontStyle: 'italic',
          }}> <span style={{
            fontSize: '30px',
            fontStyle: 'italic',

          }}>"</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sunt? <span style={{
            fontSize: '30px',
            fontStyle: 'italic',

          }}>"</span></h3>
          <p style={{
            textAlign: 'end',
            paddingRight: '2rem'
          }} >- Author</p>
        </div>
        <button style={{
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

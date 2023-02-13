import Weather from './Weather';
import './App.css';

export default App;
function App() {
    return (
      <div className='container'>
        <div className='App'>
        <Weather defaultcity="Lagos"/>
      <footer>
        This project is created by Oseyemi Dammy, is {}
        <a  href='https://github.com/Dammy36/weather3-react'>Opensourced on Github</a> and { }
        <a href='https://unrivaled-cucurucho-9ba8c8.netlify.app/'>Hosted on Netlify </a>
    </footer>
    
    </div>
    </div>
  );
}



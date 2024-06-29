import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Card from './Component/Card';

function App() {
  return (
    <div className="App">

      <div><Navbar/></div>
      <div className='containerBody'>
        <div>
          <Card/>
        </div>


      </div>
      <div> <Footer/></div>
      
    </div>
  );
}

export default App;

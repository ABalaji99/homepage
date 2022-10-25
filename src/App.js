
import './App.css';
import { Container } from 'react-bootstrap';

import Header from './Components/Header';

import Aboutus from './Components/Aboutus'
import Advise from "./Components/Advise";
import Industries from "./Components/Industries";
import Ourteam from "./Components/Ourteam";

import Requestcall from './Components/Requestcall'

import Sponsorcompany from './Components/Sponsorcompany'

import Footer from './Components/Footer';

function App() {
  return (
    <Container fluid className='px-0 mx-0'>
      <div className="App">

        <Header />
        <Aboutus />
        <Advise />
        <Industries />

        <Ourteam />

        <Requestcall />

        <Sponsorcompany />

        <Footer />


        

      </div>
    </Container>
  );
}

export default App;

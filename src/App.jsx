import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Header from './components/Header';
import Home from './components/Home';
import Vearbat from './components/quiz/Vearbat';
import Nomenat from './components/quiz/Nomenat';
import General from './components/quiz/General';
import Kappale from './components/quiz/Kappale';

import './App.css'

function App() {

  return (
    <BrowserRouter basename='/koltta'>
      <>
        <Container>
          <Row>
            <Header pageTitle="Koltansaamen sanaharjoituksia"/>
          </Row>
          <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/kappale' element = {<Kappale/>} />
        </Routes>
        </Container>
      </>
    </BrowserRouter>
  )
}

export default App

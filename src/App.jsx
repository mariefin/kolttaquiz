import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Header from './components/Header';
import Home from './components/Home';
import Vearbat from './components/quiz/Vearbat';
import Nomenat from './components/quiz/Nomenat';
import General from './components/quiz/General';

import './App.css'

function App() {

  return (
    <BrowserRouter basename='/'>
      <>
        <Container>
          <Row>
            <Header pageTitle="Sátneprográmma"/>
          </Row>
          <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/vearbat' element = {<Vearbat/>} />
            <Route path = '/nomenat' element = {<Nomenat/>} />
            <Route path = '/general' element = {<General/>} />
        </Routes>
        </Container>
      </>
    </BrowserRouter>
  )
}

export default App

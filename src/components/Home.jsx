import { Link } from 'react-router-dom';
import '../index.css';
import Col from 'react-bootstrap/Col';
function Home() { 

    return (
      <>
        <Col>
            <h2>Tiõrv pueđttem! / Tervetuloa</h2>
            <p>Sivuston tarkoituksena on auttaa koltansaamen sanojen taivutusten harjoittelussa</p>
            <h3>Tiõrv-kirjan kappalaiden sanastot</h3>
            <div><Link to="/kappale" className="btn btn-primary me-2 mb-2">Kappaleiden sanat</Link>
            <Link to="/kappale" className="btn btn-primary me-2 mb-2" state={{kappale:'kp1'}}>Kappale 1</Link>
            <Link to="/kappale" className="btn btn-primary me-2 mb-2" state={{kappale:'kp2'}}>Kappale 2</Link>
            <Link to="/kappale" className="btn btn-primary me-2 mb-2" state={{kappale:'kp3'}}>Kappale 3</Link>
            <Link to="/kappale" className="btn btn-primary me-2 mb-2" state={{kappale:'kp4'}}>Kappale 4</Link>
            <Link to="/kappale" className="btn btn-primary me-2 mb-2" state={{kappale:'kp5'}}>Kappale 5</Link>
            <Link to="/kappale" className="btn btn-primary me-2 mb-2" state={{kappale:'kp6'}}>Kappale 6</Link>
            </div>
            
        </Col>
      </>
    )
  }
  
  export default Home
  
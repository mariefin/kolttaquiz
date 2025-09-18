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
            <Link to="/kappale" className="btn btn-primary me-2 mb-2" state={{type:'kp1'}}>Kappale 1</Link>
            <Link to="/kappe" className="btn btn-primary me-2 mb-2" state={{type:'kp2'}}>Kappale 2</Link>
            </div>
            
        </Col>
      </>
    )
  }
  
  export default Home
  
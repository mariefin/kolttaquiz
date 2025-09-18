import { Link } from 'react-router-dom';
import '../index.css';
import Col from 'react-bootstrap/Col';
function Home() { 

    return (
      <>
        <Col>
            <h2>Buresboahtin / Tervetuloa</h2>
            <p>Sivuston tarkoituksena on auttaa pohjoissaamen kielen taivutusten harjoittelussa</p>
            <h3>Vearbat</h3>
            <div><Link to="/vearbat" className="btn btn-primary me-2 mb-2">Vearbat/Verbit</Link>
            <Link to="/vearbat" className="btn btn-primary me-2 mb-2" state={{type:'parillis'}}>Parilliset verbit</Link>
            <Link to="/vearbat" className="btn btn-primary me-2 mb-2" state={{type:'pariton'}}>Parittomat verbit</Link>
            <Link to="/vearbat" className="btn btn-primary me-2 mb-2" state={{type:'supistuma'}}>Supistuma verbit</Link>
            <Link to="/vearbat" className="btn btn-primary me-2 mb-2" state={{vearba:'leat'}}>Olla-verbi</Link></div>
            <h3>Nomenat</h3>
            <div>
            <Link to="/nomenat" className="btn btn-secondary me-2 mb-2">Nomenat/Nomiinit</Link>
            <Link to="/nomenat" className="btn btn-secondary me-2 mb-2" state={{type:'parillis'}}>Parilliset nominit</Link>
            <Link to="/nomenat" className="btn btn-secondary me-2 mb-2" state={{type:'pariton'}}>Parittomat nominit</Link>
            <Link to="/nomenat" className="btn btn-secondary me-2 mb-2" state={{type:'supistuma'}}>Supistuma nominit</Link>
            <Link to="/nomenat" className="btn btn-secondary me-2 mb-2" state={{teema:'perhe'}}>Perhe/bearaš nominit</Link>
            </div>
            <h3>Muut</h3>
            <Link to="/general" className="btn btn-success me-2 mb-2">Muut</Link>
            <Link to="/general" className="btn btn-success me-2 mb-2" state={{teema:'paikka'}}>Paikkasanat</Link>
            
        </Col>
      </>
    )
  }
  
  export default Home
  
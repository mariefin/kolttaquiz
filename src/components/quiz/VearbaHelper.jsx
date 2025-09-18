import { Button } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import VearbaTable from "./VearbaTable";

const VearbaHelper = ({satneLuohka, vearbaType, vearbaEnd, vearba}) => {
    let vearbaTempus;    
    const renderSatneLuohka = (satneLuohka) => {
        switch(satneLuohka) {
            case "ol1pres":
                vearbaTempus = "preesens";
                return "Mun _____ (preesens)";
            case "ol2pres":
                vearbaTempus = "preesens";
                return "Don ______ (preesens)";
            case "ol3pres":
                vearbaTempus = "preesens";
                return "Son ______ (preesens)";
            case "gl1pres":
                vearbaTempus = "preesens";
                return "Moai ______ (preesens)";
            case "gl2pres":
                vearbaTempus = "preesens";
                return "Doai ______ (preesens)";
            case "gl3pres":
                vearbaTempus = "preesens";
                return "Soai  ______ (preesens)";
            case "ml1pres":
                vearbaTempus = "preesens";
                return "Mii ______ (preesens)";
            case "ml2pres":
                vearbaTempus = "preesens";
                return "Dii ______ (preesens)";
            case "ml3pres":
                vearbaTempus = "preesens";
                return "Sii ______ (preesens)";
            case "ol1pret":
                vearbaTempus = "preteriti";
                return "Mun ______ (preteriti)";
            case "ol2pret":
                vearbaTempus = "preteriti";
                return "Don ______ (preteriti)";
            case "ol3pret":
                vearbaTempus = "preteriti";
                return "Son ______ (preteriti)";
            case "gl1pret":
                vearbaTempus = "preteriti";
                return "Moai ______ (preteriti)";
            case "gl2pret":
                vearbaTempus = "preteriti";
                return "Doai ______ (preteriti)";
            case "gl3pret":
                vearbaTempus = "preteriti";
                return "Soai ______ (preteriti)";
            case "ml1pret":
                vearbaTempus = "preteriti";
                return "Mii ______ (preteriti)";
            case "ml2pret":
                vearbaTempus = "preteriti";
                return "Dii ______ (preteriti)";
            case "ml3pret":
                vearbaTempus = "preteriti";
                return "Sii ______ (preteriti)";
            case "presKielto":
                vearbaTempus = "preesens";
                return "Preesensin kieltomuoto";
            case "pretKielto":
                vearbaTempus = "preteriti";
                return "Preteritin kieltomuoto";
            case "perfPart":
                return "Perfektin partisiippi. On/oli + verbi"
            default:
                return "";
        }
    }
    return (
        <div>
        <p> {renderSatneLuohka(satneLuohka)} </p>
        <OverlayTrigger
            trigger="click"
            key="right"
            placement="bottom"
            rootClose
            overlay={
                <Popover id="popover-positioned-right">
                <Popover.Header as="h3"><strong className="h3">{vearba}</strong><br/>{vearbaTempus} {vearbaType}</Popover.Header>
                <Popover.Body>
                    <VearbaTable vearbaEnd={vearbaEnd} vearbaTempus={vearbaTempus} vearbaType={vearbaType}/>
                </Popover.Body>
                </Popover>
            }
            >
            <Button variant="secondary mb-2">Vihje</Button>
            </OverlayTrigger>
        </div>
    )
  }

export default VearbaHelper;
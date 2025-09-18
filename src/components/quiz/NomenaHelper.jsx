import { Button } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import NomenaTable from "./NomenaTable";

const VearbaHelper = ({satneLuohka, nomenaType, nomenaEnd, nomena}) => {
    const renderSatneLuohka = (satneLuohka) => {
        switch(satneLuohka) {
            case "olgen":
                return "Yksikön genetiivi/akkusatiivi";
            case "olill":
                return "Yksikön illatiivi";
            case "ollok":
                return "Yksikön lokatiivi";
            case "olkom":
                return "Yksikön komitatiivi";
            case "mlnom":
                return "Monikon nominatiivi";
            case "mlgen":
                return "Monikon genetiivi/akkusatiivi";
            case "mlill":
                return "Monikon illatiivi";
            case "mllok":
                return "Monikon lokatiivi";
            case "mlkom":
                return "Monikon komitatiivi";
            case "ess":
                return "Essiivi";
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
                <Popover.Header as="h3"><strong className="h3">{nomena}</strong><br/> {nomenaType}</Popover.Header>
                <Popover.Body>
                    <NomenaTable nomenaEnd={nomenaEnd} nomenaType={nomenaType}/>
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
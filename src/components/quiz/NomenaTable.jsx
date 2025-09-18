
const NomenaTable = ({nomenaType, nomenaEnd}) => {
    function renderTable () {
            if(nomenaType === "parillis") {
                if (nomenaEnd === "a") {
                    return (<div>Nom.: GD + - | HD + t<br/>
                    Gen.: HD + - | HD + i + d <br/>
                    Ill.: GD + i | HD + i + de (yksikössä diftonki oikenee, a:sta i) <br/>
                    Lok.: HD + s | HD + i + n <br/>
                    Kom.: HD + in | HD + i + guin <br/>
                    Ess.: GD + n
                    </div>);
                } else if (nomenaEnd === "á") {
                    return (<div>Nom.: GD + - | HD + t<br/>
                    Gen.: HD + - | HD + i + d <br/>
                    Ill.: GD + i | HD + i + de <br/>
                    Lok.: HD + s | HD + i + n <br/>
                    Kom.: HD + in | HD + i + guin <br/>
                    Ess.: GD + n
                    </div>);
                } else if (nomenaEnd === "i") {
                    return (<div>Nom.: GD + - | HD + t<br/>
                    Gen.: HD + - | HD + i + d (monikossa diftonki oikenee)<br/>
                    Ill.: GD + i | HD + i + de (yksikössä i:stä á, monikossa diftonki oikenee) <br/>
                    Lok.: HD + s | HD + i + n (monikossa diftonki oikenee)<br/>
                    Kom.: HD + in | HD + i + guin (diftonki oikenee)<br/>
                    Ess.: GD + n
                    </div>);
                } else if (nomenaEnd === "e") {
                    return (<div>Nom.: GD + - | HD + t<br/>
                    Gen.: HD + - | HD + i + d (monikossa diftonki oikenee, e:stä i)<br/>
                    Ill.: GD + i | HD + i + de (yksikössä e:stä i, monikossa diftonki oikenee e:stä i) <br/>
                    Lok.: HD + s | HD + i + n (monikossa diftonki oikenee e:stä i)<br/>
                    Kom.: HD + in | HD + i + guin (diftonki oikenee ja e:stä i)<br/>
                    Ess.: GD + n
                    </div>);
                } else if (nomenaEnd === "u") {
                    return (<div>Nom.: GD + - | HD + t<br/>
                    Gen.: HD + - | HD + i + d <br/>
                    Ill.: GD + i | HD + i + de (yksikössä diftonki oikenee) <br/>
                    Lok.: HD + s | HD + i + n <br/>
                    Kom.: HD + in | HD + i + guin <br/>
                    Ess.: GD + n
                    </div>);
                } else if (nomenaEnd === "o") {
                    return (<div>Nom.: GD + - | HD + t<br/>
                    Gen.: HD + - | HD + i + d (monikossa diftonki oikenee o:sta u) <br/>
                    Ill.: GD + i | HD + i + de (yksikössä diftonki oikenee o:sta u) <br/>
                    Lok.: HD + s | HD + i + n (monikossa diftonki oikenee o:sta u) <br/>
                    Kom.: HD + in | HD + i + guin ( diftonki oikenee o:sta u)<br/>
                    Ess.: GD + n
                    </div>);
                }
            } else if (nomenaType === "pariton") {
                return (<div>Nom.: HD + - | GD + a + t<br/>
                    Gen.: GD + a | GD + i + id <br/>
                    Ill.: GD + i + i | GD + i + idda <br/>
                    Lok.: GD + i  + s | GD + i + in <br/>
                    Kom.: GD + i + in | GD + i + iguin <br/>
                    Ess.: HD + (i +) n
                    </div>);

            } else if (nomenaType === "supistuma") {
                return (<div>Nom.: HD + - | GD + a + t<br/>
                    Gen.: GD | GD + id <br/>
                    Ill.: GD + i | GD + ide <br/>
                    Lok.: GD + s | GD + in <br/>
                    Kom.: GD + in | GD + iguin <br/>
                    Ess.: HD + (i +) n
                    </div>);
            }
        }
    
    return (
        <div>
            <p>HD heajos dássi/heikko aste<br/>
            GD gievrras dássi/vahva aste</p>
            {renderTable()}
        </div>
    )
  }

export default NomenaTable;
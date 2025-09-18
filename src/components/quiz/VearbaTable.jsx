
const VearbaTable = ({vearbaTempus, vearbaType, vearbaEnd}) => {
    function renderTable () {
        if (vearbaTempus === "preesens") {
            if(vearbaType === "parillis") {
                if (vearbaEnd === "at") {
                    return (<div>1. mun verbin vartalo (HD) + n<br/>
                    2. don verbin vartalo (HD) + t<br/>
                    3. son verbin vartalo (GD) ei päätettä a:sta á<br/>
                    1. moai verbin vartalo (GD) ei päätettä a:sta e, diftonki oikenee<br/>
                    2. doai verbin vartalo (GD) + beahtti<br/>
                    3. soai verbin vartalo (GD) + ba <br/>
                    1. mii verbin vartalo (GD) + t <br/>
                    2. dii verbin vartalo (GD) + behtet <br/>
                    3. sii verbin vartalo (GD) + t a:sta e, diftonki oikenee
                    </div>);
                } else if (vearbaEnd === "it") {
                    return (<div>1. mun verbin vartalo (HD) + n<br/>
                    2. don verbin vartalo (HD) + t<br/>
                    3. son verbin vartalo (GD) ei päätettä<br/>
                    1. moai verbin vartalo (GD) ei päätettä i:stä e, diftonki oikenee<br/>
                    2. doai verbin vartalo (GD) + beahtti<br/>
                    3. soai verbin vartalo (GD) + ba <br/>
                    1. mii verbin vartalo (GD) + t <br/>
                    2. dii verbin vartalo (GD) + behtet <br/>
                    3. sii verbin vartalo (GD) + t i:stä e, diftonki oikenee
                    </div>);
                } else if (vearbaEnd === "ut") {
                    return (<div>1. mun verbin vartalo (HD) + n<br/>
                    2. don verbin vartalo (HD) + t<br/>
                    3. son verbin vartalo (GD) ei päätettä<br/>
                    1. moai verbin vartalo (GD) ei päätettä u:sta o, diftonki oikenee<br/>
                    2. doai verbin vartalo (GD) + beahtti<br/>
                    3. soai verbin vartalo (GD) + ba <br/>
                    1. mii verbin vartalo (GD) + t <br/>
                    2. dii verbin vartalo (GD) + behtet <br/>
                    3. sii verbin vartalo (GD) + t u:sta o, diftonki oikenee
                    </div>);
                }
            } else if (vearbaType === "pariton") {
                return (<div>1. mun verbin vartalo + an<br/>
                2. don verbin vartalo + at<br/>
                3. son verbin vartalo + a<br/>
                1. moai verbin vartalo + etne<br/>
                2. doai verbin vartalo + eahppi<br/>
                3. soai verbin vartalo + eaba<br/>
                1. mii verbin vartalo + it<br/>
                2. dii verbin vartalo + ehpet<br/>
                3. sii verbin vartalo + it
                </div>);

            } else if (vearbaType === "supistuma") {
                return (<div>1. mun verbin vartalo + n<br/>
                2. don verbin vartalo + t<br/>
                3. son verbin vartalo<br/>
                1. moai verbin vartalo + jetne<br/>
                2. doai verbin vartalo + beahtti<br/>
                3. soai verbin vartalo + ba<br/>
                1. mii verbin vartalo + t<br/>
                2. dii verbin vartalo + behtet<br/>
                3. sii verbin vartalo + jit
                </div>);
            }
        } else if (vearbaTempus === "preteriti") {
            if(vearbaType === "parillis") {
                if (vearbaEnd === "at") {
                    return (<div>1. mun verbin vartalo (GD) + n a:sta e diftonki oikenee<br/>
                    2. don verbin vartalo (GD) + t a:sta e diftonki oikenee<br/>
                    3. son verbin vartalo (HD) + i<br/>
                    1. moai verbin vartalo (HD) +ime <br/>
                    2. doai verbin vartalo (HD) +ide<br/>
                    3. soai verbin vartalo (HD) + iga <br/>
                    1. mii verbin vartalo (HD) + imet <br/>
                    2. dii verbin vartalo (HD) + idet <br/>
                    3. sii verbin vartalo (GD) + a:sta e, diftonki oikenee
                    </div>);
                } else if (vearbaEnd === "it") {
                    return (<div>1. mun verbin vartalo (GD) + n i:sta e diftonki oikenee<br/>
                    2. don verbin vartalo (GD) + t i:stä e diftonki oikenee<br/>
                    3. son verbin vartalo (HD) + i<br/>
                    1. moai verbin vartalo (HD) +ime <br/>
                    2. doai verbin vartalo (HD) +ide<br/>
                    3. soai verbin vartalo (HD) + iga <br/>
                    1. mii verbin vartalo (HD) + imet <br/>
                    2. dii verbin vartalo (HD) + idet <br/>
                    3. sii verbin vartalo (GD) + i:stä e, diftonki oikenee
                    </div>);
                } else if (vearbaEnd === "ut") {
                    return (<div>1. mun verbin vartalo (GD) + n u:sta o diftonki oikenee<br/>
                    2. don verbin vartalo (GD) + t u:sta o diftonki oikenee<br/>
                    3. son verbin vartalo (HD) + i<br/>
                    1. moai verbin vartalo (HD) +ime <br/>
                    2. doai verbin vartalo (HD) +ide<br/>
                    3. soai verbin vartalo (HD) + iga <br/>
                    1. mii verbin vartalo (HD) + imet <br/>
                    2. dii verbin vartalo (HD) + idet <br/>
                    3. sii verbin vartalo (GD) + u:sta o, diftonki oikenee
                    </div>);
                }
            } else if (vearbaType === "pariton") {
                return (<div>EI ASTEVAIHTELUA! <br/>
                1. mun verbin vartalo + in<br/>
                2. don verbin vartalo + it<br/>
                3. son verbin vartalo + ii<br/>
                1. moai verbin vartalo + eimme<br/>
                2. doai verbin vartalo + eidde<br/>
                3. soai verbin vartalo + eigga<br/>
                1. mii verbin vartalo + eimmet<br/>
                2. dii verbin vartalo + eiddet<br/>
                3. sii verbin vartalo + edje
                </div>);

            } else if (vearbaType === "supistuma") {
                return (<div>EI ASTEVAIHTELUA! <br/>
                1. mun verbin vartalo + jin<br/>
                2. don verbin vartalo + jit<br/>
                3. son verbin vartalo + i<br/>
                1. moai verbin vartalo + ime e:stä i<br/>
                2. doai verbin vartalo + ide e:stä i<br/>
                3. soai verbin vartalo + iga e:stä i<br/>
                1. mii verbin vartalo + imet e:stä i<br/>
                2. dii verbin vartalo + idet e:stä i<br/>
                3. sii verbin vartalo + jedje
                </div>);
            }
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

export default VearbaTable;
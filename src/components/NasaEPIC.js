import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;
export default function NasaEPIC(){
    var d = new Date();
    d.setDate(d.getDate() - 2);
    var day = String(d.getDate()).padStart(2, '0');
    var month = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = String(d.getFullYear());
    
    const [epicMetadata, setEpicMetadata] = useState(null);
    useEffect(() => {
        fetchMetadata();
        async function fetchMetadata(){
            const metaUrl = `https://epic.gsfc.nasa.gov/api/natural/date/${year}-${month}-${day}`;
            const res = await fetch(metaUrl);
            
            const data = await res.json();
            console.log(data);
            setEpicMetadata(data);
        }
    }, []);
    if(!epicMetadata) return <div/>
    return(
        <>
        <NavBar></NavBar>
        <div className="nasa-photo">
        <img className="photo" src={`https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${epicMetadata[0].image}.png?api_key=${apiKey}`} alt="title"/>
        <div>
                <h1>{"Imagery of the Earth collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument"}</h1>
                <p className="date">{year + '-' + month + '-' + day}</p>
                <p className="explanation">{"EPIC (Earth Polychromatic Imaging Camera) is a 10-channel spectroradiometer (317 – 780 nm) onboard NOAA’s DSCOVR (Deep Space Climate Observatory) spacecraft. EPIC provides 10 narrow band spectral images of the entire sunlit face of Earth using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope (Figure 1).The DSCOVR spacecraft is located at the Earth-Sun Lagrange-1 (L-1) point giving EPIC a unique angular perspective that will be used in science applications to measure ozone, aerosols, cloud reflectivity, cloud height, vegetation properties, and UV radiation estimates at Earth's surface."}</p>
            </div>
        </div>
       
        </>
    );
}
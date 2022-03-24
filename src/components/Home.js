import {Link} from "react-router-dom";


export default function Home(){
    return (
        <div className="home">
            <Link className="home-link" to="/nasaphoto">ASTRONOMY PICTURE OF THE DAY</Link>
            <Link className="home-link" to="/epic">NASA'S EPIC IMAGE</Link>
        </div>
    );
}
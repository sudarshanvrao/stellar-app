import {Link} from "react-router-dom";


export default function Home(){
    return (
        <div className="home">
            <Link className="home-link" to="/nasaphoto">NASA - APOD</Link>
            <Link className="home-link" to="/epic">NASA - EPIC IMAGE</Link>
        </div>
    );
}
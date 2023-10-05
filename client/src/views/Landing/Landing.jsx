import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="landing">
            <Link to="/home">
                <button className="button">a Home</button>
                <p>Este es el Landing</p>
            </Link>
        </div>
    )
};

export default Landing;

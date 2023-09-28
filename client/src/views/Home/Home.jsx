// import { useDispatch, useSelector } from "react-redux"
import Filter from "../../components/Filter/Filter";
import CardContainer from "../../components/CardsConteiner/CardsContainer";

const Home = () => {
    return (
        <div className="">
            <p>Este es el Home</p>
            <CardContainer />
            <Filter />
        </div>
    )
};

export default Home;
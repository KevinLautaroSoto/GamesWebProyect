import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getGames } from "../../redux/actions/actions";
import Filter from "../../components/Filter/Filter";
import CardContainer from "../../components/CardsConteiner/CardsContainer";

const Home = () => {
    
    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(getGames(1))
    }, [dispatch]);

        const games = useSelector((state) => state.games);

    return (
        <div className="">
            <p>Este es el Home</p>
            <CardContainer 
                games={games}         
            />
            <Filter />
        </div>
    )
};

export default Home;
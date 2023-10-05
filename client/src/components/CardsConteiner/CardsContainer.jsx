import Card from "../Card/Card";

const CardContainer = (props) => {
    return (
        <div className="container">
            <p>CardContainer</p>
            <p>{console.log(props.games)}</p>
            {props.games && props.games.map(game => {
                return <Card 
                    key={game.id}
                    id={game.id}
                    image={game.image}
                    name={game.name}
                    gender={game.gender}
                />
            })}
        </div>
    )
};

export default CardContainer;
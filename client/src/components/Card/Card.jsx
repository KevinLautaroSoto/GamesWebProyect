
const Card = (props) => {
    return(
        <div>
            <p>Card</p>
            <img src={props.img} alt="img" />
            <p  >{props.name}</p>
            <p  >{props.gender}</p>
        </div>
    )
};

export default Card;

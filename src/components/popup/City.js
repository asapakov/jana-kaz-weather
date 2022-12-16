const City = (props) => {

    return(
        <div className="city-popup">
            <p>{props.city.name}</p>
            <button onClick={() => props.remove(props.city.id)}>Remove</button>
        </div>
    )
}

export default City;
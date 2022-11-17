

function Card(props) {
    return (
        <div className="card text-white bg-dark my-3">
            {props.children}
        </div>
    );
}

export default Card;


function Input(props) {
    return (
        <div className="mb-3 row">
            <label for={props.id} className="col-sm-2 col-form-label">{props.name}</label>
            <div className="col-sm-10">
                <input name={props.var} className="form-control" id={props.id} />
            </div>
        </div>
    );
}

export default Input;
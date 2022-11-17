import Card from "../Card/Card";

function UserDisplayRow(props) {
    return (
        <Card>
            <div class="row">
                <div class="col">{props && props.id}</div>
                <div class="col">{props && props.firstName}</div>
                <div class="col">{props && props.lastName}</div>
                <div class="col">{props && props.phoneNumber}</div>
                <div class="col">{props && props.email}</div>
            </div>
        </Card>
    );
}

export default UserDisplayRow;
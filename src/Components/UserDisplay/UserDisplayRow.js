import { useContext } from "react";
import UserContext from "../../Context/userContext";
import { deleteUser } from "../../Api/userFetch";
import Card from "../Card/Card";

function UserDisplayRow({ user }) {
    return (
        <Card>
            <div className="row">
                <div className="col">{user.id}</div>
                <div className="col">{user.firstName}</div>
                <div className="col">{user.lastName}</div>
                <div className="col">{user.phoneNumber}</div>
                <div className="col">{user.email}</div>
                <div className="col">
                    <button type="button" onClick={() => deleteUser(user.id).catch(error => console.log("Este error no influye: " + error))} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </Card>
    );
}

export default UserDisplayRow;

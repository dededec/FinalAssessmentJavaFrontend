import { useContext } from "react";
import UserContext from "../../Context/userContext";
import Card from "../Card/Card";

function UserDisplayRow({ user }) {
	return (
		<Card>
			<div class="row">
				<div class="col">{user.id}</div>
				<div class="col">{user.firstName}</div>
				<div class="col">{user.lastName}</div>
				<div class="col">{user.phoneNumber}</div>
				<div class="col">{user.email}</div>
			</div>
		</Card>
	);
}

export default UserDisplayRow;

import { useContext, useEffect } from "react";
import UserContext from "../../Context/userContext";
import Card from "../Card/Card";
import UserDisplayRow from "./UserDisplayRow";

function UserDisplay() {
	const { users, setUsers } = useContext(UserContext);
	return (
		<Card>
			<div class="container">
				<div className="row">
					<span className="col">User ID</span>
					<span className="col">First Name</span>
					<span className="col">Second Name</span>
					<span className="col">Phone</span>
					<span className="col">Email</span>
					<span className="col">Actions</span>
				</div>

				{users.map(user => {
					return <UserDisplayRow user={user} />;
				})}
			</div>
		</Card>
	);
}

export default UserDisplay;

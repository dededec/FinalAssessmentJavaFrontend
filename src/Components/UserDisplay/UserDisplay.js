import { useContext, useEffect } from "react";
import UserContext from "../../Context/userContext";
import Card from "../Card/Card";
import UserDisplayRow from "./UserDisplayRow";

function UserDisplay() {
	const { users, setUsers } = useContext(UserContext);
	return (
		<Card>
			<div class="container">
				{users.map(user => {
					return <UserDisplayRow user={user} />;
				})}
			</div>
		</Card>
	);
}

export default UserDisplay;

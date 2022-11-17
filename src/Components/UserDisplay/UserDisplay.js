import { useContext, useEffect } from "react";
import UserContext from "../../Context/userContext";
import Card from "../Card/Card";
import UserDisplayRow from "./UserDisplayRow";

function UserDisplay() {
	const { users, setUsers } = useContext(UserContext);
	useEffect(() => {
		console.log(users);
	}, []);
	return (
		<Card>
			<div class="container">
				<UserDisplayRow />
				<UserDisplayRow />
				<UserDisplayRow />
				<UserDisplayRow />
			</div>
		</Card>
	);
}

export default UserDisplay;

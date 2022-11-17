import { useContext } from "react";
import Form from "../Components/Form/Form";
import UserDisplay from "../Components/UserDisplay/UserDisplay";
import UserContext from "../Context/userContext";

function MainPage() {
	const { user, setUsers } = useContext(UserContext);
	return (
		<div>
			<Form />
			<UserDisplay />
		</div>
	);
}

export default MainPage;

import { useContext } from "react";
import { postUser } from "../../Api/userFetch";
import UserContext from "../../Context/userContext";
import Card from "../Card/Card";
import Input from "./Input";

function Form() {
	const { users, setUsers } = useContext(UserContext);

	const handleSubmit = e => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target));
		console.log(data);
		postUser(data).then(response => {
			console.log(response);
		});
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<div className="card-header">New User Form</div>
				<div className="card-body">
					<Input id="inputFirstName" var="firstName" name="First Name" />
					<Input id="inputLastName" var="lastName" name="Last Name" />
					<Input id="inputPhoneNumber" var="phoneNumber" name="Phone number" />
					<Input id="inputEmail" var="email" name="Email" />
				</div>
				<button type="submit" class="btn btn-success mx-3 mb-3">
					Add user
				</button>
			</form>
		</Card>
	);
}

export default Form;

import { useContext } from "react";
import UserContext from "../../Context/userContext";
import { deleteUser, editUsers } from "../../Api/userFetch";
import Card from "../Card/Card";

function UserDisplayRow({ user }) {
	const handleSubmit = e => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target));
		console.log(data);
		editUsers(data).then(response => {
			console.log(response);
		});
	};
	return (
		<Card>
			<form onSubmit={handleSubmit} className="row">
				<input name="id" value={user.id} className="col" readOnly></input>
				<input
					contentEditable="true"
					name="firstName"
					className="col"
					defaultValue={user.firstName}
				></input>
				<input
					name="lastName"
					className="col"
					defaultValue={user.lastName}
				></input>
				<input
					name="phoneNumber"
					className="col"
					defaultValue={user.phoneNumber}
				></input>
				<input name="email" className="col" defaultValue={user.email}></input>

				<div className="col">
					<button
						type="button"
						onClick={() =>
							deleteUser(user.id).catch(error =>
								console.log("Este error no influye: " + error)
							)
						}
						className="btn btn-danger"
					>
						Delete
					</button>
					<button type="submit" class="btn btn-outline-secondary">
						Edit
					</button>
				</div>
			</form>
		</Card>
	);
}

export default UserDisplayRow;

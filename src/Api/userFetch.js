const getAllUsers = async () => {
	const data = await fetch("http://localhost:8080/users");
	const json = data.json();
	return json;
};
const postUser = async user => {
	try {
		const options = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		};
		const data = await fetch("http://localhost:8080/users");
		const json = await data.json();
		return json;
	} catch (e) {
		console.log(e);
	}
};
const editUsers = async user => {
	const options = {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	};
	const data = await fetch("http://localhost:8080/users");
	const json = await data.json();
	return json;
};
const deleteUser = async id => {
	const data = await fetch("http://localhost:8080/users/" + id, {
		method: "DELETE",
	});
	const json = await data.json();
	return json;
};

export { getAllUsers, editUsers, postUser, deleteUser };

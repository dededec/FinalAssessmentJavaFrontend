import { useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import UserContext from "./Context/userContext";
import Form from "./Form/Form";

function App() {
	const [users, setUsers] = useState();

	return (
		<UserContext.Provider value={{ users, setUsers }}>
			<Form />
			<Card />
		</UserContext.Provider>
	);
}

export default App;

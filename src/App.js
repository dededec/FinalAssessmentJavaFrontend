import { useEffect, useState } from "react";
import { getAllUsers } from "./Api/userFetch";
import "./App.css";
import UserContext from "./Context/userContext";
import MainPage from "./Pages/MainPage";

function App() {
	const [users, setUsers] = useState();

	useEffect(() => {
		getAllUsers().then(response => {
			setUsers(() => {
				return response;
			});
		});
	});
	return (
		<UserContext.Provider value={{ users, setUsers }}>
			<div className="bg-dark">{users && <MainPage />}</div>
		</UserContext.Provider>
	);
}

export default App;

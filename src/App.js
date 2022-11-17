import { useEffect, useState } from "react";
import { getAllUsers } from "./Api/userFetch";
import "./App.css";
import UserContext from "./Context/userContext";
import MainPage from "./Pages/MainPage";

function App() {
	const [users, setUsers] = useState();

	return (
		<UserContext.Provider value={{ users, setUsers }}>
			<MainPage />
		</UserContext.Provider>
	);
}

export default App;

import React,{useEffect,useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import NavBar from './components/nav';
import { User,updateUser} from './actions';
import {useDispatch,useSelector} from"react-redux";
import Landing from "./components/Landing";
import axios from "axios";

export interface postType {
	username: string;
	post: string;
}
function App() {
	// const user = useSelector((state: any) => state.user);
	const dispatch = useDispatch();
	const [posts, setposts] = useState<postType[]>([]);

	useEffect(() => {
		dispatch(updateUser());
		axios.get("/data/post.json").then((res) => {
			const data = res.data;
			setposts(data);
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="App">
			<NavBar />
			<Landing posts={posts} />
		</div>
	);
}

export default App;

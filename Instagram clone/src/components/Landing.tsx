import axios from "axios";
import React, { useEffect, useState } from "react";
import { postType } from "../App";
import Post from "./Post";
import "./Landing.css"

const Landing = ({ posts }: { posts: postType[] }) => {
	// const user = useSelector((state: any) => state.user);
	const [story, setstory] = useState([]);

	useEffect(() => {
		axios.get("/data/story.json").then((res) => {
			const data = res.data;
			setstory(data);
		});
	}, []);

	console.log(story);

	return (
		<div className="container landing">
			<div className="row">
				<div className="col-8">
					<div className="card story">
						{story.map((stori: any) => (
							<div className="story-img">
								<img src={stori.profile} alt="profile" />
							</div>
						))}
					</div>
					<div className="posts">
						{posts.length !== 0
							? posts.map((post) => <Post post={post} />)
							: null}
					</div>
				</div>
				<div className="col-4"></div>
			</div>
		</div>
	);
};

export default Landing;
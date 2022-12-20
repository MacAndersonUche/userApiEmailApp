import { useEffect, useState } from "react";
import { User } from "../../types/user";

const AllUsers = () => {
    const [data, setData] = useState<User>({
		id: "",
		createdAt: new Date(),
		username: "",
		email: "",
		password: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("http://localhost:5100/api/getallusers", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			const data = await response.json();
			console.log(data);

			setData(data);
		};
		fetchData();
	}, [data]);
    return (
        <div>
            <h1>All Users</h1>
        </div>
    )
}

export default AllUsers
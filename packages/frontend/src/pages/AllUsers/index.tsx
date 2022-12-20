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
            console.log(localStorage.getItem("token"));
            

            try {
                const response = await fetch("http://localhost:5100/api/getallusers", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });


                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                    console.log(data);
                } else {
                    console.log("error");
                }
              
            } catch (error) {
                console.log(error)
            }

			

		
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
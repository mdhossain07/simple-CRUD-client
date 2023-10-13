import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleRemove = (_id) => {
    console.log("delete item", _id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          alert("user deleted sucessfully!!!");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div className="text-center md:mt-32">
      <h2>My Registered Users: </h2>
      <div>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}: {user.email}
            <Link to={`/update/${user._id}`}>
              <button className="btn btn-neutral ml-10">Update</button>
            </Link>
            <button
              onClick={() => handleRemove(user._id)}
              className="btn btn-neutral ml-10 mt-5"
            >
              X
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Users;

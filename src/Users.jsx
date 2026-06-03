import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async () => {
    const obj = { name: name, email: email };
    const res = await axios.post("http://localhost:5000/users", obj);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete("http://localhost:5000/users/" + id);
    fetchUsers();
  };
  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addUser}>Add</button>
      </p>
      {users &&
        users.map((user) => (
          <li key={user.id}>
            <Link to={`/editUser/${user.id}`}>{user.name}</Link>-{user.email}-
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
    </div>
  );
}

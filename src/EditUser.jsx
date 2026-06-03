import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function EditUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  const handleSave = async () => {
    await axios.patch(`http://localhost:5000/users/${id}`, user);
    Navigate("/");
  };
  return (
    <div>
      EditUser
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />
      </p>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

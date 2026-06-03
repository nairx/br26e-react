import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function EditUser() {
  const [user, setUser] = useState({});
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      EditUser
      <p>
        <input type="text" value={user.name} />
      </p>
      <p>
        <input type="text" value={user.email} />
      </p>
      <button>Save</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

import React, { useEffect, useState } from "react";
import UsersTable from "./components/Userstable";
import AddUserForm from "./components/AdduserForms";
import { User } from "./components/Userstable";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect((): void => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((data: User[]) =>
        setUsers(data.sort((a, b) => a.name.localeCompare(b.name)))
      );
  }, []);

  const addUser = (user: User): void => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <>
      <h2>Users</h2>
      <UsersTable users={users} />

      <h2>Add New User</h2>
      <AddUserForm addUser={addUser} />
    </>
  );
};

export default App;

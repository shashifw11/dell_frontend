import React from "react";

/* ---------- TYPES ---------- */
export type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
};

type Props = {
  users: User[];
};

/* ---------- COMPONENT ---------- */
const UsersTable: React.FC<Props> = ({ users }) => {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Company</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user: User) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;

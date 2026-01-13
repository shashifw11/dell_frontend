import React, { useState } from "react";
import { User } from "./Userstable";

type Props = {
  addUser: (user: User) => void;
};

const AddUserForm: React.FC<Props> = ({ addUser }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    addUser({
      id: Date.now(),
      name,
      email,
      address: { city },
      company: { name: company },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <br />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br />
      <input placeholder="City" onChange={e => setCity(e.target.value)} />
      <br />
      <input placeholder="Company" onChange={e => setCompany(e.target.value)} />
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUserForm;

import {useState , useEffect} from "react";
import {useUser} from "../context/userContext"

type Sortkey = "name" | "email" | "city" | "company";

const UsersTable:React.FC = ()=>{
    const {users} = useUser();

  
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((item)=><>
            <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.company.name}</td>
            </tr>
            </>)}
        </tbody>
      </table>
    </>
  )
}

export default UsersTable
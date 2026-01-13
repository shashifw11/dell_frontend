import {createContext , useContext  , useState , useEffect} from "react";

interface Company {
    name : string;
}

interface Address{
    city : string;
}

interface user{
    id : string ; 
    name : string ; 
    email : string ; 
    address : Address ; 
    company : Company ;
}

interface UserContextType {
    users:user[];
    addUser : (user:user)=>void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider : React.FC<{children:React.ReactNode}> = ({children})=>{
    const [users , setUsers] = useState<user[]>([])

     const getData = async()=>{
       try{
         const res = await fetch("https://jsonplaceholder.typicode.com/users");
         const data = await res.json();
         setUsers(data.sort((a : any,b : any)=> a.name.localComapre(b.name)));
       }catch(err){
         console.log(err);
       }
   }
  
   useEffect(()=>{
     getData();
   },[]);

   const addUser = (user:user)=>{
    setUsers(prev => [...prev , user])
   }

   return <UserContext.Provider value = {{users ,addUser}}>
     {children}
   </UserContext.Provider>
}

export const useUser = ()=>{
    const context = useContext(UserContext);
    return context;
}





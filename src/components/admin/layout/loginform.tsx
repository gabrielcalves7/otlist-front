import {httpRequest} from "@/services/api";
import {useState} from "react";

export default function LoginForm(){
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errors,setErrors] = useState<object|any>([]);
  
  const login = async () => {
    await httpRequest('login',{email,password});
    
  }
  const handleLogin = async () => {
    console.log(email,password)
    let v_Errors = {};
    if(!email || !(email.split('@').length > 1)){
      let error = !email ? "Por favor, insira um email" : "Por favor, insira um email válido";
      v_Errors = {...v_Errors, emailError: error}
    }
    if(!password){
      
      let error = "Por favor, insira sua senha";
      v_Errors = {...v_Errors, passwordError: error}
      
    }
    setErrors(v_Errors);
    if(Object.keys(errors).length == 0) {
      login();
    }
    return;
  }

  
  return(
    <form action="http://localhost:3333/login" method="POST" className="flex flex-wrap flex-col">
      <div className="flex flex-col justify-center items-center w-full pt-3">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          className="border-2 w-1/3"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full pt-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="border-2 w-1/3"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full pt-4">
        <button type="button"
                className="bg-main text-white p-2 w-1/3 hover:text-main hover:bg-white border-main border transition duration-300 ease-in-out"
                onClick={handleLogin}
        >Submit</button>
      </div>
    
    </form>
  )
}
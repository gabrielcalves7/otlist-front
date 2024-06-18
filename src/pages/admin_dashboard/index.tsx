
import Header from "@/components/admin/layout/header";
import Footer from "@/components/admin/layout/footer";
import loginForm from "@/components/admin/layout/loginform";
import {httpRequest} from "@/services/api";
import {useEffect, useState} from "react";


export default function Dashboard() {
  // const [isLoggedIn,setIsLoggedIn] = useState(false);
  // const login = async () => {
  //   console.log('req')
  //   const req = await httpRequest('dashboard');
  //   if(req.message == 'sucesso feladaputa') {
  //     setIsLoggedIn(true)
  //   }
  //   else{
  //     console.log('req req',req)
  //   }
  // }
  // login()
  // return (
  //   <div className="max-sm:p-0">
  //     {isLoggedIn ? 'logado' : 'deslogado ne noob'}
  //   </div>
  // )
}
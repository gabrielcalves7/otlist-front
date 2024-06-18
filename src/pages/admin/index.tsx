
import Header from "@/components/admin/layout/header";
import Footer from "@/components/admin/layout/footer";
import loginForm from "@/components/admin/layout/loginform";


export default function Admin() {
  return (
    <div className="max-sm:p-2">
      {Header()}
      <div className="p-10 max-sm:p-3 min-h-screen bg-white max-sm:rounded-none rounded-3xl flex flex-col justify-between">
        {loginForm()}
        {Footer()}
      </div>
    </div>
  )
}
import Header from "@/components/public/layout/header";
import Footer from "@/components/public/layout/footer";

export default function Index() {
  return (
      <div className="bg-main p-10 max-sm:p-0">
        <div className="p-6 max-sm:p-3 min-h-screen bg-white max-sm:rounded-none rounded-3xl">
          {Header()}
          
          {Footer()}
        </div>
      </div>
    
  )
}
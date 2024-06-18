"use client"
import Footer from "@/components/public/layout/footer";
import Header from "@/components/public/layout/header";
import OtserversList from "@/pages/otserversList";

export default function Index() {
    return (
      <div className="bg-gradient-to-t from-main to-pallet-light-blue p-10 max-sm:p-0">
          <div className="p-6 max-sm:p-3 min-h-screen bg-white max-sm:rounded-none rounded-3xl">
              <Header/>
              <OtserversList/>
              {Footer()}
          </div>
      </div>
    )
}
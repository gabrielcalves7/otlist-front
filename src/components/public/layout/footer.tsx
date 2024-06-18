import Link from "next/link";

export default function Footer() {
  return <footer>
    <div className="flex justify-between p-4 mt-20 text-stone-700 items-center text-1xl border-t-2 border-slate-500 flex-wrap">
      <ul className="flex w-1/2 max-md:w-full flex-wrap max-lg:justify-between">
        <li className="me-3 max-lg:mx-0 max-md:mb-3 max-lg:w-full">
          <Link href='https://www.instagram.com'>Instagram</Link>
        </li>
        <li className="ms-3 max-lg:mx-0 max-md:mb-3 max-lg:w-full">
          <Link href='mail:contato@devgabrielalves.com'>Email: contato@devgabrielalves.com</Link>
        </li>
      </ul>
      
      <p>© 2023 All rights reserved. Made by <Link href="https://www.devgabrielalves.com" className="hover:text-main transition duration-300 ease-in-out">Gabriel Alves</Link></p>
    </div>
  </footer>
}
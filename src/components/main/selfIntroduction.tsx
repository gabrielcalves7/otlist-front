import Image from 'next/image'
import myPicture from '../../../public/images/eu.jpg'
import Stack from "@/components/stack";
export default function selfIntroduction(){
   return <div className="flex justify-between items-center pt-20 max-md:flex-wrap gap-1">
      <div className="w-1/2 max-xl:w-1/2 max-md:w-full max-md:flex max-md:flex-wrap max-md:justify-center max-md:mb-7">
        <Image
          src={myPicture}
          alt="Minha foto"
          className="rounded-full w-1/2"
        />
      </div>
      <div className="w-1/2 max-xl:w-1/2 flex-col max-md:w-full max-md:ms-0">
        <h2 className="font-bold text-8xl text-slate-700 max-md:text-5xl max-xl:text-7xl">
          Gabriel Alves
        </h2>
        <h3 className="text-gray text-4xl max-sm:text-3xl">Fullstack Developer</h3>
        {Stack()}
        <div className="border-b-amber-900 border-b-4 mt-6"></div>
      </div>
      
    </div>
    
    
}

import Image from 'next/image'
import bootstrap  from '../../public/icons/bootstrap.png'
import css  from '../../public/icons/css.png'
import html  from '../../public/icons/html.png'
import javascript  from '../../public/icons/javascript.png'
import jquery  from '../../public/icons/jquery.png'
import laravel  from '../../public/icons/laravel.png'
import php  from '../../public/icons/php.png'
import reactnative from '../../public/icons/react-native.png'
import typescript  from '../../public/icons/typescript.png'
import docker  from '../../public/icons/docker.png'
import mysql  from '../../public/icons/mysql.png'
import git  from '../../public/icons/git.png'
export default function Stack(){
  return <div className="pt-4">
      <ul className="flex justify-between">
        <li className="w-1/12 items-center flex">
          <Image
            src={javascript}
            alt="Icone JavaScript"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={php}
            alt="Icone PHP"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={laravel}
            alt="Icone Laravel"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={css}
            alt="Icone Css"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={html}
            alt="Icone Html"
            className="w-4/5"
          />
        </li>
        
        <li className="w-1/12 items-center flex">
          <Image
            src={bootstrap}
            alt="Icone Bootstrap"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={jquery}
            alt="Icone jQuery"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={reactnative}
            alt="Icone React Native"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={typescript}
            alt="Icone TypeScript"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={docker}
            alt="Icone Docker"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={git}
            alt="Icone Git"
            className="w-4/5"
          />
        </li>
        <li className="w-1/12 items-center flex">
          <Image
            src={mysql}
            alt="Icone MySQL"
            className="w-4/5"
          />
        </li>
      </ul>
    
  
  
  </div>
}

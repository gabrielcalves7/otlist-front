import Image from "next/image";
import blog from '../../../public/icons/blog.png'
import ecommerce from '../../../public/icons/e-commerce.png'
import devIcon from '../../../public/icons/dev.png'
export default function Jobs(){
  return <div className="pt-20">
    <h4 className="text-4xl text-slate-600">O que eu já desenvolvi</h4>
    <div className="border-b-4 w-1/12 mt-6 border-main"></div>
    <div className="flex mt-6 flex-wrap">
      <div className="xl:w-1/2 sm:w-full flex items-start max-md:mb-12">
        <Image
          src={blog}
          alt="Ícone Blog"
          className="w-24 me-6"
        />
        <p className="text-zinc-600 w-4/6">
          Blogs utilizando PHP/JavaScript e em alguns casos WordPress
        </p>
      </div>
      <div className="xl:w-1/2 sm:w-full flex items-start max-md:mb-12">
        <Image
          src={ecommerce}
          alt="Ícone E-Commerce"
          className="w-24 me-6"
        />
        <p className="text-zinc-600 w-4/6">
          E-commerces completos, composto por  listagem de produtos, carrinho, fluxo de checkout, área do cliente (cadastro, alteração de informações, entre outros) e pagamento, seja por plugins do WordPress ou através de APIs como a do Pagar.me, utilizando Laravel ou então PHP puro.
        </p>
      </div>
      <div className="xl:w-1/2 sm:w-full flex items-start mt-12 max-md:mt-0">
        <Image
          src={devIcon}
          alt="Ícone Desenvolvedor"
          className="w-24 me-6"
        />
        <p className="text-zinc-600 w-4/6">
          Integração com API de outras empresas (desenvolvendo aplicações para clientes que dependiam de serviços de terceiros), em REST e XML.
        </p>
      </div>
    </div>
  </div>
}

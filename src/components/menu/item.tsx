import Link from "next/link";

interface IMenuItem {
  name: string,
  link: string;
}

export default function MenuItem({ name, link }: IMenuItem) {
  return (
    <div className="">
      <li key={name}>
        <Link href={ link }>
          <h4 className="text-pallet-light-blue border-green hover:bg-white hover:border-pallet-dark-blue border-3 rounded p-2 hover:text-pallet-orange">
            { name }
          </h4>
        </Link>
      </li>
    </div>
  );
}

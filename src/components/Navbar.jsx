import Link from "next/link";

function Navbar() {
    return ( 
        <nav className=" bg-black   ">
        <ul className='grid w-full grid-cols-4 '>
         <Link href={"/"}>
         <li className="text-white cursor-pointer hover:font-bold text-center  hover:bg-gray-900 p-10  "  >Home</li>
         </Link>
        <Link  href={'/about'}>
          <li className="text-white cursor-pointer hover:font-bold text-center  hover:bg-gray-900  p-10 ">About</li>
        
        </Link> 
        <Link href={'/testapi'}>
          <li className="text-white cursor-pointer hover:font-bold text-center  hover:bg-gray-900 p-10 ">test api </li>
        </Link>
        <Link href={`/counter`}>
          <li className="text-white cursor-pointer hover:font-bold text-center  hover:bg-gray-900 p-10 ">Counter </li>
        </Link>
        </ul>
      </nav>
     );
}

export default Navbar;
import Link from "next/link";

function Navbar() {
    return ( 
        <nav className=" bg-black   ">
        <ul className='grid w-full grid-cols-4 '>
         <Link href={"/"}>
         <li className="text-white cursor-pointer hover:font-bold text-center  hover:bg-gray-900 p-10  "  >Home</li>
         </Link>
        <Link  href={'/graph'}>
          <li className="text-white cursor-pointer hover:font-bold text-center  hover:bg-gray-900  p-10 ">graph</li>
        
        </Link> 
        <Link href={'/table'}>
          <li className="text-white cursor-pointer hover:font-bold text-center  hover:bg-gray-900 p-10 "> table </li>
        </Link>
        <Link href={`/counter`}>
          <li className="text-white cursor-pointer hover:font-bold text-center  hover:bg-gray-900 p-10 ">Counter </li>
        </Link>
        </ul>
      </nav>
     );
}

export default Navbar;
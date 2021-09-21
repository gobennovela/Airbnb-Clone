import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid';



function Header() {
    return (
        <header className="sticky top-0 z-50 grid md:grid-cols-3 bg-white shadow-sm py-4 md:px-12 px-8 grid-cols-2">
            {/* Left */}
            <div className="relative flex items-center h-8 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" 
                layout="fill" 
                objectFit="contain" 
                objectPosition="left"/>
            </div>
            {/* Middle */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-smx hidden md:flex">
                <input className=" text-sm placeholder-gray-400 text-gray-600 flex-grow pl-4 bg-transparent outline-none" type="text" placeholder="Start your search" />
                <SearchIcon className="mr-2 hidden md:inline-flex text-white h-8 rounded-full p-2 bg-red-400 cursor-pointer md:mx-2"/>
            </div>
            {/* Right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer text-sm">Become a host</p>
                <GlobeAltIcon className="h-8 md:h-6"/>
                <div className="flex border-2 items-center space-x-4 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>
            </div>
        </header>
    )
}

export default Header

'use client';
import React, {useState} from "react";
import {
    BsArrowLeftShort,
    BsChevronDown,
    BsFillImageFill,
    BsPerson,
    BsReverseLayoutTextSidebarReverse,
    BsSearch
} from "react-icons/bs";
import {
    AiFillEnvironment,
    AiOutlineBarChart,
    AiOutlineFileText,
    AiOutlineLogout,
    AiOutlineSetting
} from "react-icons/ai";
import {RiDashboardFill} from "react-icons/ri";

export default function Home() {
    const [showSideNav, setShowSideNav] = useState(true)
    const [showSubSideNav, setShowSubSideNav] = useState(false)
    const [theme, setTheme] = useState("light");

    const handleThemeToggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const Menus = [
        {
            id: 1,
            title: "Dashboard"
        },
        {
            id: 2,
            title: "Pages", icon: <AiOutlineFileText/>
        },
        {
            id: 3,
            title: "Media", spacing: true,
            icon: <BsFillImageFill/>,

        },
        {
            id: 4,
            title: "Projects",
            icon: <BsReverseLayoutTextSidebarReverse/>,
            submenu: true,
            submenuItems: [
                {
                    id: 1,
                    title: "Submenu 1"
                },
                {
                    id: 2,
                    title: "Submenu 2"
                },
            ]
        },
        {
            id: 5,
            title: "Analytics",
            icon: <AiOutlineBarChart/>
        },
        {
            id: 6,
            title: "Profile",
            icon: <BsPerson/>,
            spacing: true
        },
        {
            id: 7,
            title: "Setting",
            icon: <AiOutlineSetting/>
        },
        {
            id: 8,
            title: "Logout", icon: <AiOutlineLogout/>
        }
    ];

    return (
        <main className="flex bg-white dark:bg-black">
            <div
                className={`bg-dark-purple  h-screen p-5 pt-8 ${showSideNav ? "w-72" : "w-20"} duration-300 relative`}>
                <BsArrowLeftShort className={`
                bg-white
                text-dark-purple
                text-3xl
                rounded-full
                absolute
                -right-3
                top-9
                border
                border-dark-purple
                cursor-pointer
                ${!showSideNav && "rotate-180"}`} onClick={() => setShowSideNav(!showSideNav)}
                />
                <div className="inline-flex">
                    <AiFillEnvironment
                        className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${showSideNav && "rotate-[360deg]"}`}/>
                    <h1 className={`text-white origin-left font-medium text-2xl ${!showSideNav && "scale-0"} duration-300`}>
                        Tailwind
                    </h1>
                </div>
                <div
                    className={`flex items-center rounded-md bg-light-white mt-6 ${!showSideNav ? "px-2.5" : "px-4"} py-2 h-10`}>
                    <BsSearch
                        className={`text-white text-lg block float-left cursor-pointer ${showSideNav && "mr-2"}`}/>
                    <input type="search" placeholder={"Search"}
                           className={`text-base bg-transparent w-full text-white focus:outline-none mr-2 ${!showSideNav && "hidden"}`}/>
                </div>
                <ul className="pt-2">
                    {Menus.map((menu) => (
                        <>
                            <li key={menu.id} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
                        hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                                <span className={`text-2xl block float-left`}>
                                 {menu.icon ? menu.icon : <RiDashboardFill/>}
                                </span>
                                <span
                                    className={`text-base font-medium flex-1 duration-200 ${!showSideNav && "hidden"}`}>
                                    {menu.title}
                                </span>
                                {menu.submenu && showSideNav && (
                                    <BsChevronDown className={`${showSubSideNav && "rotate-180"}`}
                                                   onClick={() => (setShowSubSideNav(!showSubSideNav))}/>
                                )}
                            </li>
                            {menu.submenu && showSideNav && showSubSideNav && (
                                <ul>
                                    {menu.submenuItems.map((submenu) => (
                                        <li key={submenu.id} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5
                        hover:bg-light-white rounded-md`}>
                                            {submenu.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ))}
                </ul>
                {/*<div className="flex items-center mt-auto">*/}
                {/*    <button*/}
                {/*        className="text-white text-lg p-2 cursor-pointer"*/}
                {/*        onClick={handleThemeToggle}*/}
                {/*    >*/}
                {/*        {theme === "light" ? <IoMoon /> : <IoSunny />}*/}
                {/*    </button>*/}
                {/*</div>*/}


            </div>

            <div className="p-7"><h1 className="text-2xl font-semibold"> Home Page </h1></div>
        </main>
    )
}

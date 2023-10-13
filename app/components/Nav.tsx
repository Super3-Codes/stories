const Nav = () =>{
    return(

        <div className="text-[#1c202b] navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown bg-white">

                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white  rounded-box w-52">
                        <li><a>Home</a></li>
                        <li>
                            <a>Teams</a>
                            <ul className="p-2 bg-white">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Success Stories</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Get Involved</a></li>
                    </ul>
                </div>
                <img className={"h-[40px]"} src={"https://a2sv.org/logos/logo-blue.png"} alt={"logo"}/>
            </div>
            <div className="navbar-center hidden lg:flex bg-white">
                <ul className="menu menu-horizontal px-1 bg-white">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>teams</summary>
                            <ul className="p-2 z-10">
                                <li><a>Board Members</a></li>
                                <li><a>Advisors</a></li>
                                <li><a>Executives</a></li>
                                <li><a>Staff</a></li>
                                <li><a>Placements</a></li>
                                <li><a>Groups</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Success Stories</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Get Involved</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-blue-600 text-white border-accent hover:border-accent hover:bg-blue-700">Donate</a>
            </div>
        </div>
    )
}
export default Nav
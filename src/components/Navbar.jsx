import {Link,NavLink} from "react-router-dom";
import "./Navbar.css"
import {motion, spring} from "framer-motion"
import { useContext, useEffect, useRef, useState } from "react";
import {height_context} from "../contexts/Header_height"

const my_variant = {
    start:{
        y:0
    },
    end:{
        y:-200      ,
        transition:{
            type:"spring",
            mass:40,
            damping:0
        }
    }
}
const fadein_variants = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
    }
}
function Navbar() {
    const {set_height , height} = useContext(height_context)
    const [width , set_width] = useState()
    useEffect(()=>{
        const H = document.querySelector("header").offsetHeight
        const W = document.querySelector("header").offsetWidth
        set_height(H)
        set_width(W)
    },[])
    const handle_resize = ()=>{
        const H = document.querySelector("header").offsetHeight
        const W = document.querySelector("header").offsetWidth
        set_height(H)
        set_width(W)
    }
    window.addEventListener("resize" , handle_resize)
    return ( 
        <header>
            <nav className="navbar">
                <Link to={"/"}>
                    <motion.h1
                     variants={fadein_variants} initial="hidden" animate="visible"
                    >خورشید<img src="muscle(1).png" alt="" />کامپلکس</motion.h1>
                </Link>
                    <ul>
                        <li>
                            <NavLink to="tarefeha"><motion.button
                            variants={fadein_variants} initial="hidden" animate="visible"
                            >تعرفه ها</motion.button></NavLink>
                        </li >
                        <li>
                            <NavLink to="/address"><motion.button
                            variants={fadein_variants} initial="hidden" animate="visible"
                            >آدرس</motion.button></NavLink>
                        </li >
                        <li>
                            <NavLink to="/reshteha"><motion.button
                            variants={fadein_variants} initial="hidden" animate="visible"
                            >رشته های ورزشی</motion.button></NavLink>
                        </li >
                        <li>
                            <NavLink to="/active-hours"><motion.button
                            variants={fadein_variants} initial="hidden" animate="visible"
                            >ساعات کاری</motion.button></NavLink>
                        </li >
                    </ul>
            </nav>
        </header>
     );
}

export default Navbar;
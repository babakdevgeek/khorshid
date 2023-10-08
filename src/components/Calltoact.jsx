import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import "./Calltoact.css"
import { useContext } from "react"
import {height_context} from "../contexts/Header_height"
const my_variant = {
    start:{
        y:0
    },
    end:{
        y:-20      ,
        transition:{
            type:"spring",
            mass:3,
            damping:4
        }
    }
}

function Calltoact() {
    const { height} = useContext(height_context)
    return ( 
        <motion.div className="call" style={{height : `calc(100vh - ${height}px)`,width:"100%"}}
       
        >
            <div className="call-to-act">
                <motion.p variants={my_variant} initial="start" animate="end">دنبال رشته ورزشی خاصی هستی؟</motion.p>
                <Link to="/reshteha" ><motion.button className="call-to-act-btn" whileHover={{textShadow:"0 0 4px #000" , boxShadow:"0 0 10px #fff"}}>رشته ها</motion.button></Link>
            </div>
        </motion.div>
     );
}

export default Calltoact;
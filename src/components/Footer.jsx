import { Link } from "react-router-dom";
import"./Footer.css"

function Footer() {
    return ( 
        <footer>
            <div className="site-map">
                <h4>نقشه سایت</h4>
                <Link to="">رشته های ورزشی</Link>
                <Link to="">قیمت ها</Link>
                <Link to="">ساعات فعالیت</Link>
                <Link to="">آدرس</Link>
            </div>
            <div className="social-medias">
                <h4>لینک شبکه های اجتماعی</h4>
                <Link to=""><img src="/instagram.png" alt="instagram" /></Link>
                <Link to=""><img src="/telegram.png" alt="telegram" /></Link>
            </div>
            <div className="privacy-policy">
                <h4>درباره ی سایت</h4>
                <Link to="">سیاست های حفظ حریم خصوصی کاربران</Link>
            </div>
        </footer>
     );
}

export default Footer;
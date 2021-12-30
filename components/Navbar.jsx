import Image from "next/image";
import Navbarcss from "../styles/Navbar.module.css";
import callimg from "../public/Images/call.png";
import cartimg from "../public/Images/cart.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={Navbarcss.navbarcontainer}>
      <div className={Navbarcss.item}>
        <div className={Navbarcss.callbutton}>
          <Image src={callimg} alt="" width="32" height="32" />
        </div>
        <div className={Navbarcss.navabartexts}>
          <div className={Navbarcss.navabartext}>Order Now</div>
          <div className={Navbarcss.navabartext}>012 3445 455</div>
        </div>
      </div>
      <div className={Navbarcss.item}>
        <ul className={Navbarcss.list}>
          <Link href="/"><a className={Navbarcss.listitem}>HomePage</a></Link>
          
          <li className={Navbarcss.listitem}>Products</li>
          <li className={Navbarcss.listitem}>Menu</li>
          <h3 className={Navbarcss.para}>SLN</h3>
          <li className={Navbarcss.listitem}>Events</li>
          <li className={Navbarcss.listitem}>Blog</li>
          <li className={Navbarcss.listitem}>Contact</li>
        </ul>
      </div>
      <div className={Navbarcss.item}>
        <Link href="/products/2">
          <a>
        <div className={Navbarcss.cart}>
          <Image src={cartimg} alt="" width="30px" height="30px" />
          <div className={Navbarcss.count}>2</div>
        </div>
        </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

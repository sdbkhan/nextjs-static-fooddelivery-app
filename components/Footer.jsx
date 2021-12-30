import Image from "next/image";
import footerstyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerstyles.container}>
    <div className={footerstyles.item}>
<Image src="/Images/bg.png" layout="fill" alt=""/>
    </div>
    <div className={footerstyles.item}>
    <div className={footerstyles.card}>
      <h2 className={footerstyles.desc}> Yes We Did the SLN Pizza, Well Baked slice of Pizza</h2>
</div>
<div className={footerstyles.card}>
  <h1 className={footerstyles.title}>Find Out Restaurent</h1>
  <p className={footerstyles.text}>
    N-31 Gomti Nagar  #304. 
    <br/>Lucknow 3422
    <br/>(91) 2300 2323
  </p>
  <p className={footerstyles.text}>
    N-3n Sector 63 #44. 
    <br/> Noida , 3422
    <br/>(91) 5666 3235
  </p>
  <p className={footerstyles.text}>
    R-23 Haneef Nagar. 
    <br/> Sultanpur, 3422
    <br/>(91)4545 7886
  </p>
</div>
<div className={footerstyles.card}>
<h1 className={footerstyles.title}>Working hours</h1>
<p className={footerstyles.text}>
  MONDAY UNTIL FRIDAY 
  <br/> 9:00 - 22:00
</p>
<p className={footerstyles.text}>
SATURDAY SUNDAY
  <br/> 12:00 - 24:00
</p>
</div>
     </div>
    </div>
  );
};

export default Footer;

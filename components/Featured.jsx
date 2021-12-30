import Image from "next/image";
import FetStyles from "../styles/Featured.module.css";
import ArrowL from "../public/Images/arrl.png";
import ArrowR from "../public/Images/arrr.png";
import featured1 from "../public/Images/featured1.png";
const Featured = () => {
  const images = [
    "Images/featured1.png",
    "Images/featured2.png",
    // "Images/featured3.jpg",
  ];
  return (
    <div className={FetStyles.container}>
      <div className={FetStyles.arrowLContainer}   layout="fill" style={{ left: 0}}>
        {/* <Image src={ArrowL} alt="" /> */}
      </div>

      <div className={FetStyles.wrapper}>
        <div className={FetStyles.imgContainer}>
          <Image src="/Images/featured1.png" width="1200px" height="700px" alt=""   />
        </div>
      </div>
      <div className={FetStyles.arrowContainer}  layout="fill" style={{ right: 0}}>
        {/* <Image src={ArrowR} alt="" /> */}
      </div>
    </div>
  );
};

export default Featured;

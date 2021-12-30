import Image from "next/image";
import PizzaCardStyles from "../styles/PizzaCard.module.css";
const PizzaCard = () => {
  return (
    <>
    <div className={PizzaCardStyles.container}>
      <Image src="/Images/featured2.png" width="500" height="500" alt="" />
      <h1 className={PizzaCardStyles.title}>SLN Zaika</h1>
      <span className={PizzaCardStyles.price}>$20.90</span>
      <p className={PizzaCardStyles.para}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada quam vel purus feugiat maximus. 
      </p>
    </div>
    <div className={PizzaCardStyles.container}>
      <Image src="/Images/featured1.png" width="500" height="500" alt="" />
      <h1 className={PizzaCardStyles.title}>LKO Zaika</h1>
      <span className={PizzaCardStyles.price}>$15.90</span>
      <p className={PizzaCardStyles.para}>
       Adipiscing elit. Praesent malesuada quam vel purus feugiat maximus Lorem ipsum dolor sit amet, consectetur. 
      </p>
    </div>
    </>
  );
};

export default PizzaCard;

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductStyle from "../../styles/Prdouct.module.css";
const Product = () => {
  const [number, setNumber] = useState(0);
  const pizza = {
    id: 1,
    img: "/Images/featured1.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    descrption:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada quam vel purus feugiat maximus.",
  };
  return (
    <div className={ProductStyle.container}>
      <div className={ProductStyle.left}>
        <div className={ProductStyle.imgContainer}>
          <Image src={pizza.img} layout="fill" objectFit="contain" alt="" />
        </div>
      </div>
      <div className={ProductStyle.right}>
        <h1 className={ProductStyle.title}>{pizza.name}</h1>
        <span className={ProductStyle.price}>${pizza.price[number]}</span>
        <p className={ProductStyle.descrption}>${pizza.descrption}</p>
        <h3 className={ProductStyle.choose}> Choose Additional ingredients</h3>
        <div className={ProductStyle.ingredients}>
          <div className={ProductStyle.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={ProductStyle.checkbox}
            />
            <label htmlFor="double">Double ingredients</label>
          </div>
          <div className={ProductStyle.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={ProductStyle.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={ProductStyle.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={ProductStyle.checkbox}
            />
            <label htmlFor="spicy">Spicy</label>
          </div>
          <div className={ProductStyle.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={ProductStyle.checkbox}
            />
            <label htmlFor="garlic">Garlic Suace</label>
          </div>
        </div>
        <div className={ProductStyle.addcart}>
            <input type="number" defaultValue={2} className={ProductStyle.additem}/>
            <Link href="/Cart"><a>
            <button className={ProductStyle.addtocart}>Add to cart</button>
            </a></Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

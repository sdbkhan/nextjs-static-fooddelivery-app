import Image from "next/image";
import Link from "next/link";
import CartSytle from "../styles/Cart.module.css";
const Cart = () => {
  return (
    <div className={CartSytle.container}>
      <div className={CartSytle.left}>
        <table className={CartSytle.table}>
          <tr className={CartSytle.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extra</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={CartSytle.imgcontainer}>
                <Image src="/Images/featured1.png" alt="" layout="fill" objectFit="cover"/>
              </div>
            </td>
            <td>
              <span className={CartSytle.name}> CORALZO</span>
            </td>
            <td>
              <span className={CartSytle.extras}> Double ngredient, spicy suace</span>
            </td>
            <td>
            <span className={CartSytle.price}>$15.90</span>
            </td>
            <td>
            <span className={CartSytle.quantity}>1</span>

            </td>
            <td>
            <span className={CartSytle.total}>$30.90</span>

            </td>
          </tr>
        
          <tr>
            <td>
              <div className={CartSytle.imgcontainer}>
                <Image src="/Images/featured1.png" alt="" layout="fill" objectFit="cover"/>
              </div>
            </td>
            <td>
              <span className={CartSytle.name}>CAPSICUM</span>
            </td>
            <td>
              <span className={CartSytle.extras}> Double ngredient, spicy suace</span>
            </td>
            <td>
            <span className={CartSytle.price}>$20.90</span>
            </td>
            <td>
            <span className={CartSytle.quantity}>1</span>

            </td>
            <td>
            <span className={CartSytle.total}>$40.90</span>

            </td>
          </tr>
        </table>
      </div>
      <div className={CartSytle.right}>
        <div className={CartSytle.wrapper}>
          <h2 className={CartSytle.title}>Cart Total</h2>
          <div className={CartSytle.totaltext}>
            <b className={CartSytle.totaltexttitle}>Subtotal:</b>$71.80
          </div>
          <div className={CartSytle.totaltext}>
            <b className={CartSytle.totaltexttitle}>Discount</b>$0.00
          </div>
          <div className={CartSytle.totaltext}>
            <b className={CartSytle.totaltexttitle}>total:</b>$71.80
          </div>
          <Link href="/products/Paid">
          <a>
          <button className={CartSytle.button}>Checkout Now</button>

            </a></Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

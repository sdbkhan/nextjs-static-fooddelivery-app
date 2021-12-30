import PaidSytle from "../../styles/PaidStyle.module.css"
const Paid = () => {
    return (
        <div>
                <div className={PaidSytle.right}>
        <div className={PaidSytle.wrapper}>
          <h2 className={PaidSytle.title}>Paid Total</h2>
          <div className={PaidSytle.totaltext}>
            <b className={PaidSytle.totaltexttitle}>Subtotal:</b>$71.80
          </div>
          <div className={PaidSytle.totaltext}>
            <b className={PaidSytle.totaltexttitle}>Discount</b>$0.00
          </div>
          <div className={PaidSytle.totaltext}>
            <b className={PaidSytle.totaltexttitle}>total:</b>$71.80
          </div>
          <button className={PaidSytle.button}>Paid Successfully</button>
        </div>
      </div>
        </div>
    )
}

export default Paid

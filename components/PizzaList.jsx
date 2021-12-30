import PizzaListstyles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"
const PizzaList = () => {
    return (
        <div className={PizzaListstyles.container}>
            <h1 className={PizzaListstyles.title}>
                The Best Pizza In Market
            </h1>
            <p className={PizzaListstyles.para}>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </p>
            <div className={PizzaListstyles.wrapper}>
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>

            </div>
        </div>
    )
}

export default PizzaList

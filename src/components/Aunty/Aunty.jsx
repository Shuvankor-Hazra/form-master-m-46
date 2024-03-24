import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPaa/GrandPaa";


const Aunty = () => {

    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex gap-5 justify-around items-center">
            <p>{money}</p>
            <button onClick={() => setMoney(money + 500)} className="btn btn-sm">Add 1000 Tk</button>
            </section>
            <section className="flex">
                <Cousin name={'Rock'}></Cousin>
                <Cousin name={'Lee'}></Cousin>
                <Cousin name={'Doe'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;
import { useContext } from "react";
import Special from "../Special/Special";
import { MoneyContext } from "../GrandPaa/GrandPaa";


const Sister = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Sister</h2>
            <section>
                <Special></Special>
                <p>{money}</p>
            </section>
        </div>
    );
};

export default Sister;
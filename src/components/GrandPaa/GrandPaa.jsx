import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPaa.css'

export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000);

const GrandPaa = () => {

    const [money, setMoney] = useState(1000);

    const asset = 'Ring';

    return (
        <div className="grandPaa border-2 border-[aqua] rounded-lg p-3 m-5 ">
            <h2>GrandPaa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="Silver">
                    <section className="flex items-center justify-between">
                        <Dad asset={asset} ></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPaa;
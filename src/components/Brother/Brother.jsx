import { useContext } from "react";
import Special from "../Special/Special";
import { AssetContext } from "../GrandPaa/GrandPaa";


const Brother = () => {
    
    const price = useContext(AssetContext);
    
    return (
        <div>
            <h2>Brother</h2>
            <section>
                <Special price={price}></Special>
            </section>
        </div>
    );
};

export default Brother;
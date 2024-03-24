import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Max'}></Cousin>
                <Cousin name={'Jon'}></Cousin>
                <Cousin name={'Pop'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
import useInputState from "../Hooks/UseInputState";


const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Shuvo');
    const emailState = useInputState('shuvo@hazra.com');

    const handleSubmit = (e) => {
        console.log('Form Data:', emailState.value)
        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold my-10">Form - 4</h1>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" className="border mb-5 w-1/3"/> */}
                <br />
                <input {...emailState} type="email" name="email" className="border mb-5 w-1/3"/>
                <br />
                <input type="password" name="password" className="border mb-5 w-1/3"/>
                <br />
                <input type="submit" value="Submit-4" className="btn" />
            </form>
        </div>
    );
};

export default HookForm;
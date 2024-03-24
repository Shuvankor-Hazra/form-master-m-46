import { useState } from "react";


const StateFulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password.length < 6) {
            setError('Password must be 6');
        } else {
            setError("");
            console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
        }


    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold my-10">Form - 2</h1>
                <input onChange={handleNameChange} type="text" name="name" className="border mb-5 w-1/3" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" className="border mb-5 w-1/3" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required className="border mb-5 w-1/3" />
                <br />
                <input type="submit" value="Submit-2" className="btn" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;
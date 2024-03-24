import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect(()=>{
        nameRef.current.focus();
        
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold my-10">Form - 3</h1>
                <input ref={nameRef} type="text" name="name" className="border mb-5 w-1/3"/>
                <br />
                <input ref={emailRef} type="email" name="email" className="border mb-5 w-1/3"/>
                <br />
                <input ref={passwordRef} type="password" name="password" className="border mb-5 w-1/3"/>
                <br />
                <input type="submit" value="Submit-3" className="btn" />
            </form>
        </div>
    );
};

export default RefForm;
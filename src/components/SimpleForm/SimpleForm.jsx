

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold my-10">Form - 1</h1>
                <input type="text" name="name" className="border mb-5 w-1/3"/>
                <br />
                <input type="email" name="email" className="border mb-5 w-1/3"/>
                <br />
                <input type="password" name="password" className="border mb-5 w-1/3"/>
                <br />
                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>
    );
};

export default SimpleForm;
import PropTypes from 'prop-types';

const ReuseableForm = ({ formTitle, handleSubmit, submitBtnText='Submit',children }) => {

    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
    }

    return (
        <div>
            <form onSubmit={handleLocalSubmit}>
                <h1 className="text-3xl font-bold my-10"> {formTitle} </h1>
                <h1 className="text-3xl font-bold my-10"> {children} </h1>
                <input type="text" name="name" className="border mb-5 w-1/3" />
                <br />
                <input type="email" name="email" className="border mb-5 w-1/3" />
                <br />
                <input type="password" name="password" className="border mb-5 w-1/3" />
                <br />
                <input type="submit" value={submitBtnText} className="btn" />
            </form>
        </div>
    );
};

ReuseableForm.propTypes = {
    formTitle: PropTypes.string,
    submitBtnText: PropTypes.string,
    handleSubmit: PropTypes.func,
    children: PropTypes.string
}

export default ReuseableForm;


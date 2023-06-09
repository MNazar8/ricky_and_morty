import { useState } from "react";
import validation from "../Validation/validation";

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ color: "white" }}>email: </label>
            <input type="email" name='email' value={userData.email}
                onChange={handleChange} />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <br />
            <label htmlFor="password" style={{ color: "white" }}> password: </label>
            <input type="password" name="password" value={userData.password}
                onChange={handleChange} />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

            <button>Submit</button>
        </form>
    )
}

export default Form;
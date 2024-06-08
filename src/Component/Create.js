import React, { useEffect, useState } from "react";
import { createUser } from "../react-crud/slice/userDetails";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Create() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state)=> state.userDetail);

    useEffect(() => {
        if(id) {
            const singleUser = user.find((d) => d.id === parseInt(id)); 
            if(singleUser) {
                setValue(singleUser);
            }
        }
    }, [id, user]); 

    const [values, setValue] = useState({
        name: "",
        email: "",
        password: "",
        id: 0
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue({ ...values, [name]: value });

        // Validation logic
        if (name === "name" && value.length < 5) {
            setErrors(prevErrors => ({ ...prevErrors, name: " * Name is required" }));
        } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
            setErrors(prevErrors => ({ ...prevErrors, email: "* Email is not valid" }));
        } else if (name === "password" && value.length < 6) {
            setErrors(prevErrors => ({ ...prevErrors, password: "* Password must be at least 6 characters long" }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
        }
    };

    const validateForm = (e) => {
        e.preventDefault();
        if (Object.values(errors).some(error => error !== "")) {
            return;
        }
        dispatch(createUser(values));
        navigate("/signup");
    };

    return (
        <div className="container" style={{marginTop:"150px"}}>
            <h2>Sign Up</h2>
            <form onSubmit={validateForm}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required autoComplete="off" onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required autoComplete="off" onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required autoComplete="new-password" onChange={handleChange} />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}

export default Create;

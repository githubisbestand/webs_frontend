import React, { useEffect, useState } from "react";
import { createUser } from "../react-crud/slice/userDetails";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Create() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state)=> state.app);

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

    const handleChange = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value }); 
    };

    const validateForm = (e) => {
        console.log("values...", values);
        e.preventDefault();
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
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required autoComplete="off" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required autoComplete="new-password" onChange={handleChange} />
                </div>
                
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}

export default Create;

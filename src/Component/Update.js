import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUser } from "../react-crud/slice/userDetails";
import { useNavigate, useParams } from "react-router-dom";


function Update()
{
    const dispatch = useDispatch();

    const {id} = useParams();

    const { user, loading } = useSelector((state) => state.app);

    useEffect(() => {
        if (id && user.length > 0) {
            const singleUser = user.find((d) => d.id === parseInt(id)); // Using find to get a single object
            if (singleUser) {
                setValue(singleUser);
            }
        }
    }, [id, user]);

    const navigate = useNavigate();

    const [values, setValue] = useState({
        name : " ",
        email : " ",
        password : " ",
        id : 0
    })

    const handelchange = (e) =>{
        setValue({...values,[e.target.name]: e.target.value});
    }

    const validateForm = (e) =>{
        console.log("values", values);
        e.preventDefault();
        dispatch(UpdateUser(values))
        navigate("/signup");
    }

    return(
        <>
        <div className="container" style={{marginTop:"150px"}}>
                <h2>Update Form</h2>
                <form action="#" method="POST" onSubmit={validateForm}>
                
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required autoComplete="off" onChange={handelchange}/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required autoComplete="off" onChange={handelchange}/>
                    </div>
                    <div className="form-group">
                        <label for="password">password</label>
                        <input type="password" id="password" name="password" required autoComplete="new-password" onChange={handelchange}/>
                    </div>
                    <input type="submit" value="Update"/>
            </form>
        </div>
        </>
    )
}
export default Update;
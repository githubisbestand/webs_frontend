import React, { useEffect } from "react";
import { Link,  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { showUser,deleteUser } from "../react-crud/slice/userDetails";
function Read()
{
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, loading} = useSelector((state)=>state.userDetail);

    useEffect(()=>{
        dispatch(showUser())
    },[dispatch])

    if(loading)
    {
        return <h2>loading</h2>
    }

    const handleDelete = (d) =>{
        dispatch(deleteUser(d.id));
        Navigate("/signup");
    }
    
    return(
        <>
        <div style={{marginTop:"150px", width:"1250", marginLeft:"150px"}}>
            <Link to={"../create"} className="btn btn-success">create +</Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {user && user.map((d, i) => {
                        return (
                            <tr key={i}> 
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>
                                <td>
                                    <div className='btn '>
                                        <Link to={`/update/${d.id}`} className="btn btn-warning" >edit</Link>
                                        <button onClick={() => handleDelete(d)} className="btn btn-danger">del</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </>
    )
}
export default Read;
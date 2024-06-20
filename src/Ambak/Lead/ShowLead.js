import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ShowLead() {
    const [lead, setLead] = useState([]); 


    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/show-lead")
            .then(res => setLead(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id)=>{
        const confirm = window.confirm('Are you sure want delete ths item');
        const token = localStorage.getItem('token');
        if(confirm){
           try {
                const response = axios.delete('http://localhost:5000/deletelead/'+id,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setLead(prevLead => prevLead.filter(lead => lead.id !== id))
                console.log('response====', response);
                navigate('/ShowLead')
           } catch (error) {
                console.log(error);
           }
        }
    }
    

    return (
        <>
            <table style={{marginTop: "100px", marginBottom:"50px"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {lead.map((data, i) => (
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.mobile}</td>
                            <td >
                                <button className="btn" style={{margin:"5px"}}><i class="fa-solid fa-pen-to-square"></i></button>
                                <button className="delet" onClick={()=>handleDelete(data.id)}><i class="fa-solid fa-circle-minus"></i></button>
                            </td>
                        </tr>
                   ))}
                </tbody>
            </table>
        </>
    );
}
export default ShowLead;

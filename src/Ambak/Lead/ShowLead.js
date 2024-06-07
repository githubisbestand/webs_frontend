import axios from "axios";
import React, { useEffect, useState } from "react";

function ShowLead() {
    const [lead, setLead] = useState([]); 


    useEffect(() => {
        axios.get("http://localhost:5000/show-lead")
            .then(res => setLead(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id)=>{
        const confirm = window.confirm('Are you sure want delete ths item');
        if(confirm){
            axios.delete('http://localhost:5000/deletelead/'+id)
            .then(res => {
            window.location.reload();
            })
            .catch(err => console.log("delete error", err));
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
                                <button className="btn btn-warning" style={{margin:"5px"}}>edit</button>
                                <button className="btn btn-danger" onClick={()=>handleDelete(data.id)}>del</button>
                            </td>
                        </tr>
                   ))}
                </tbody>
            </table>
        </>
    );
}
export default ShowLead;

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const CreateLead = () => {

    const { id } = useSelector((state) => state.userDetail.firstName);
    console.log(id);

    const[values, setValues] = useState({
        name : " ",
        email : " ",
        mobile : " "
    })
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setValues({...values,[e.target.name] : e.target.value});
    }

    const handleSubmitForm = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/create-lead",values)
        .then(res=>{
            console.log(res);
            setValues({
                name: "",
                email: "",
                mobile: ""
            });
            navigate("/HomeFile");
        }).catch(err=>{
            console.log(err);
        })
    }

  return (
   <>
        <div className='form_cretae_lead'>
                <form onSubmit={handleSubmitForm} >
                    <div className='form_control_one'>
                        <div>
                            <label className='mb-2'>Name</label> <br/>
                            <input type='text' placeholder='TextName' name='name' value={values.name} required className='input_lead' onChange={handleChange} />
                        </div>
                        <div>
                            <label className='mb-2'>Email</label><br/>
                            <input type='text' placeholder='Email' required name='email' value={values.email} className='input_lead' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='form_control_two mb-4'>
                        <div>
                            <label className='mb-2'>AgentID</label><br/>
                            <label className='daynamic_data_agentid'>{id}</label>
                        </div>
                        <div>
                            <label className='mb-2'>Mobile</label><br/>
                            <input type='text' placeholder='Mobile' required name='mobile' className='input_lead' value={values.mobile} onChange={handleChange} />
                        </div>
                    </div>
                    <button className='btn btn-primary'>create</button>
                </form>
        </div>
   </>
  )
}

export default CreateLead;

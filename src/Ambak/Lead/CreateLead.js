import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const CreateLead = () => {

    const { id } = useSelector((state) => state.userDetail.firstName);
    
    const[values, setValues] = useState({
        name : " ",
        email : " ",
        mobile : " "
    })


    const [Errors, setErrors] = useState({
        name : " ",           
        email : " ",
        mobile : " "
    })



const navigate = useNavigate();


const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    
    if(name === 'name', value.length < 2){
        setErrors(prevesError => ({...prevesError, name : 'name is required'}))
    }else if(name === 'email' && !/\S+@\S+\.\S+/.test(value)){
        setErrors(prevesError => ({...prevesError, email : "email is required"}))
    }else if(name === 'mobile' && value.length !==10){
        setErrors(prevesError =>({...prevesError, mobile : 'mobile number not vailed'}))
    }else{
        setErrors(prevesError => ({...prevesError, [name] : ''}))
    }
   
};
const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (Object.values(Errors).some(error => error !== '')) {
        return;
    } 
       
    const token = localStorage.getItem('token');
    try {
         await axios.post("http://localhost:5000/create-lead", values, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        navigate("/HomeFile");
        toast.success('Lead created successfully');
    } catch (error) {
        console.log("Error creating Lead", error);
        toast.error('Error creating Lead');
    }
};

  return (
   <>
        <div className='form_cretae_lead'>
                <form onSubmit={handleSubmitForm} >
                    <div className='form_control_one'>
                        <div>
                            <label className='mb-2'>Name</label> <br/>
                            <input type='text' required placeholder='TextName' name='name' value={values.name}   className='input_lead' onChange={handleChange} /><br/>
                            {Errors && <span className='error'>{Errors.name}</span>}
                        </div>
                        <div>
                            <label className='mb-2'>Email</label><br/>
                            <input type='text' required placeholder='Email'   name='email' value={values.email} className='input_lead' onChange={handleChange}/> <br/>
                            {Errors && <span className='error'>{Errors.email}</span>}
                        </div>
                    </div>

                    <div className='form_control_two mb-4'>
                        <div>
                            <label className='mb-2'>AgentID</label><br/>
                            <input type='text' disabled value={id} style={{width:"80px", textAlign:"center", padding:"5px"}}/>
                           
                        </div>
                        <div>
                            <label className='mb-2'>Mobile</label><br/>
                            <input type='number' required placeholder='Mobile'   name='mobile' className='input_lead' value={values.mobile} onChange={handleChange} /><br/>
                            {Errors && <span className='error'>{Errors.mobile}</span>}
                        </div>
                    </div>
                    <input type='submit' value="Create" style={{width:"90px", fontSize:"15px"}} />
                </form>
        </div>
   </>
  )
}

export default CreateLead;

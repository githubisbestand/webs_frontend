import React from 'react'

const CreateLead = () => {
  return (
   <>
        <div className='form_cretae_lead'>
                <form >
                    <div className='form_control_one'>
                        <div>
                            <label className='mb-2'>Name</label> <br/>
                            <input type='text' placeholder='TextName' required className='input_lead' />
                        </div>
                        <div>
                            <label className='mb-2'>Email</label><br/>
                            <input type='text' placeholder='Email' required  className='input_lead'/>
                        </div>
                    </div>

                    <div className='form_control_two mb-4'>
                        <div>
                            <label className='mb-2'>AgentID</label><br/>
                            <input type='text' placeholder='AgentID' required  style={{width:"100px", borderRadius:"5px", border:"1px solid gray", padding:"5px"}} disabled  />
                        </div>
                        <div>
                            <label className='mb-2'>Mobile</label><br/>
                            <input type='text' placeholder='Mobile' required className='input_lead' />
                        </div>
                    </div>
                    <button className='btn btn-primary'>create</button>
                </form>
        </div>
   </>
  )
}

export default CreateLead;
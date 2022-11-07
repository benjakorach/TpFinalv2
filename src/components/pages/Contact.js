import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className=''>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Contacto</h5>
                        <form>
                            <div className='form-group'>
                                <label for='exampleInputEmail1'>Email address</label>
                                <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                                <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                            </div>
                            <div className='form-group'>
                                <label for='exampleInputPassword1'>Name</label>
                                <input type='name' className='form-control' id='Name' />
                            </div>
                            <div className='form-group'>
                                <label for='exampleInputPassword1'>Subject</label>
                                <input type='subject' className='form-control' id='Subject' />
                            </div>
                            <div className='form-group'>
                                <label for='exampleInputPassword1'>Message</label>
                                <input type='message' className='form-control' id='Message' />
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


  )
}

export default Contact
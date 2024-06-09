import React, {useEffect, useState} from 'react'
import { Form, Input, message } from 'antd'
import { Link } from 'react-router-dom'
import axios from '../Services/instance'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const submitHandler = async (values) => {
        try {
            const {name, email, password} = values
            console.log(name, email, password)
            setLoading(true);
            await axios.post('/users/register', {name, email, password});
            message.success('Registration Successfull!');
            setLoading(false);
            navigate('/login')
        } catch (error) {
            setLoading(false);
            message.error('Something went wrong');
        }
    }

    // prevent for login user 
    useEffect(() => {
        if(localStorage.getItem("user")) {
            navigate('/')
        } 
    }, [navigate]);

    return (
        <>
            <div className="register-page ">
                <Form layout='vertical' onFinish={submitHandler}>
                    <h1>Registration Form</h1>
                    <Form.Item label="Name" name='name'>
                        <Input required/>
                    </Form.Item>

                    <Form.Item label="Email" name='email'>
                        <Input type='email' required/>
                    </Form.Item>

                    <Form.Item label="Password" name='password'>
                        <Input type='password' required/>
                    </Form.Item>
                    {loading && <Spinner />}
                    <div className="d-flex justify-content-between">
                        <Link to='/login'>Have an account? Click here to Login</Link>
                    </div>
                    <button className='btn btn-primary m-2'> Register</button>
                </Form>
            </div>
        </>
    )
}

export default Register
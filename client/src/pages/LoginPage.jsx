/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { Form, Input, message } from 'antd'
import { Link , useNavigate} from 'react-router-dom'
import axios from '../Services/instance'
import Spinner from '../components/Spinner'
const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (values) => {
        try {
            setLoading(true);
            const {data} =await axios.post('/users/login', values);
            setLoading(false);
            message.success('Login Successful');
            localStorage.setItem('user', JSON.stringify({...data.user, password:""}));
            navigate('/')
        } catch (error) {
            message.error('Something went wrong');
            setLoading(false);
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
                    <h1>Login Page</h1>

                    <Form.Item label="Email" name='email'>
                        <Input type='email' />
                    </Form.Item>

                    <Form.Item label="Password" name='password'>
                        <Input type='password' />
                    </Form.Item>

                    {loading && <Spinner/>}

                    <div className="d-flex justify-content-between">
                        <Link to='/register'>Dont have an account? Register Here</Link>
                    </div>
                    <button className='btn btn-primary m-2'> Login</button>
                </Form>
            </div>
        </>
    )
}

export default LoginPage
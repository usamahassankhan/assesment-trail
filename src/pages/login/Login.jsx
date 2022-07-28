import { Button, Form, Input, notification } from 'antd'
import React, { useState } from 'react'
import "./login.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actons/authAction";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  // const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();
  let user = useSelector((state) => state);
  const [loadState, setLoadState] = useState(false);
  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
      description: "",
    });
  };
console.log(loadState,"ss")

  const onFinish = (values) => {
    axios.post('https://reqres.in/api/login', {
      email: values.email,
      password: values.password
    })
      .then(response => {
        dispatch(setUser({
          ...response.data,
          email: values.email,
          auth: true
        }));
        setLoadState(true)
        openNotificationWithIcon('success', "Login Successfully")
         navigate('/dashboard');
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", values.email);


      })
      .catch(err => {
        openNotificationWithIcon('error', err.message)
        console.log("er", err.message)
        alert(err.message)
      })
  };
  console.log(user.user.token, "fetchfromreduc");
  console.log(user.user.auth, "auth");
  const onFinishFailed = (errorInfo) => {
    openNotificationWithIcon('error', errorInfo)
    console.log("errpor", errorInfo)
  };
  const validatePassword = (rule, value, callback) => {

    if (value && value.length < 8) {
      callback("password can't be less than 8 character");
    } else {
      callback();
    }
  };
  return (

    <div className='login-wrapper'>
      <div className='login-content'>
        <h1>LOGIN</h1>
        <Form
          name="basic"

          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              { validator: validatePassword }
            ]}
          >
            <Input.Password />
          </Form.Item>



          <Form.Item

          >
            <Button type="primary" htmlType="submit" loading={loadState || false}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import Link from '../../link';

const Login = ({linkAfterAxios, heading, navlink, navlinkVal, axiosLink, emailHolder, passwordHolder, pre}) => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios.post(`${Link}${axiosLink}`,
      values
    ).then(function (res) {
    if(pre == 'Admin'){
        localStorage.setItem("Admin_ID", res.data.message._id)
      Swal.fire({
        title: "Good job!",
        text: "Successfully Login",
        icon: "success"
      });
      navigate('/student')
    }
    else if(pre == 'Student'){
      localStorage.setItem("Studen_ID", res.data.message._id)
      Swal.fire({
        title: "Good job!",
        text: "Successfully Login",
        icon: "success"
      });
      navigate('/AttendanceApp/StudentDetails')
    }
      
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
        footer: 'Something went wrong!'
      });
    })
  };
  const onFinishFailed = (errorInfo) => {

  };
  return (
    <div className="login">
    <div className='frame'>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>{heading}</h1>
      <hr style={{ margin: "1rem 1.2rem" }} />
      <Form
        name="basic"
        style={{
          justifyContent: "center",
          textAlign: "center"
        }}
        initialValues={{
          remember: true,
        }}
        
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"

          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },

          ]}
          style={{ margin: "2rem auto"}}
        >
          <Input placeholder={emailHolder} type='email' />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          style={{ width: "21rem", margin: "2rem auto"}}
        >
          <Input.Password placeholder={passwordHolder} />
        </Form.Item>
        <Form.Item
        >
          <Button htmlType="submit">
            Log In
          </Button>
        </Form.Item>
        <Form.Item
        >
            <a style={{margin:"0 1rem", color: "#5C92F7"}}>{navlinkVal}</a>
          <NavLink to={navlink}><Button>
            Login
          </Button></NavLink>
        </Form.Item>
      </Form>
    </div>
    </div>
  )
};
export default Login;
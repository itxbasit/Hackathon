import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import '../../../App.css'

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const form = () => {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState();
    const [form] = Form.useForm();
    const [check, setCheck] = useState(0);
    const [textCheck, setTectCheck] = useState("Check in")
    console.log(textCheck, check)
    const onFinish = (values) => {
        const update = { ...values, "url": imageUrl ? imageUrl : null }
        setImageUrl("")
        form.resetFields();

        if (check == 0) {
            setCheck(1)
            setTectCheck("check out")
        }
        else {
            setCheck(2)
            setTectCheck("Congratulation")
        }
        // axios.post("http://localhost:9000/changePass",
        //     update
        // ).then(function (res) {
        //     Swal.fire({
        //         title: "Good job!",
        //         text: "Profile Update Sucessfully",
        //         icon: "success"
        //     });
        //     navigate('/')
        // }).catch((err) => {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: `${err.message}`,
        //         footer: 'Something went wrong!'
        //     });
        // })

    };
    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo)
    };
    const handleClear = () => {
        form.resetFields();
    };
    const [loading, setLoading] = useState(false);

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const hundleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(imageUrl);
    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                    borderRadius: "50%"
                }}
            >
                Upload
            </div>
        </div>
    );
    const currentDate = new Date();

    // Get day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = currentDate.getDay();

    // Define an array of alphabet representations for each day
    const daysInAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    // Get current time in HH:mm:ss format
    const currentTime = currentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    const date = currentDate.toDateString() + " " + currentTime;
    console.log(`Day in Alphabet: ${daysInAlphabet[dayOfWeek]}`);

    return (
        <div className='login'>
            <div className='frame'>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Update Profile</h1>
                <hr style={{ margin: "1rem 1.2rem" }} />
                
                <Form
                    name="basic"
                    form={form}
                    style={{
                        alignItems: "center",
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
                        name="picture"
                        rules={[
                            {
                                required: true,
                                message: 'Please Upload your Picture',
                            },

                        ]}>
                        <Upload
                            name="avatar"
                            listType="picture-circle"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                            value={imageUrl}

                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                        height: "100%",
                                        borderRadius: "50%",
                                        objectFit: "contain"
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </Form.Item>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <Form.Item
                        name="email"
                    >
                        <Input className='inp' placeholder='Your Email' type='email' readOnly />
                    </Form.Item>
                    <Form.Item
                        name="name"
                    >
                        <Input className='inp' placeholder='Your name' type='text' readOnly />
                    </Form.Item>

                    <Form.Item
                        name="course_Name"
                    >
                        <Input className='inp' placeholder='Your course name' readOnly />
                    </Form.Item>
                    <Form.Item
                        name="Check in time"
                    >
                        <Input className='inp' placeholder={check === 0 ? 'check In' : date} readOnly />
                    </Form.Item>
                    <Form.Item
                        name="Check out time"
                    >
                        <Input className='inp' placeholder={check === 2 ? date : 'check Out'} readOnly />
                    </Form.Item>
                    </div>
                    <Form.Item
                    >
                        {
                            check === 2 ?
                                <div style={{ backgroundColor: "#D4F7DC" }}>
                                    <p>Congratulation</p>
                                    <p>Your attendation is marked for today.</p>
                                </div>
                                :
                                <Button htmlType="submit">
                                    {textCheck}
                                </Button>
                        }

                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};
export default form;
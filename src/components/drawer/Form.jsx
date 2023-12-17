import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from './Image';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from 'axios';
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


export default function Form() {
  const [loading, setLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState();
  const handleChange1 = (info) => {
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
          borderRadius: "50%",

        }}
      >
        Upload
      </div>
    </div>
  );
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    course: '',
    password: '',
    email: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    if (imageUrl) {
      console.log('Form Data:', formData);
      const update = { ...formData, url: imageUrl }
      await axios.post('http://localhost:9000/addStudent', update)
        .then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        })
    }

  };

  return (
    <div>
      <div className="flex justify-center ">
        <div >
          <Upload

            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            beforeUpload={beforeUpload}
            onChange={handleChange1}
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
        </div>
      </div>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="name"
            label="Full Name"
            defaultValue=""
            onChange={handleChange}
          />
          <TextField
            required
            id="course"
            label="Course"
            defaultValue=""
            onChange={handleChange}
          />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <TextField
            required
            type="email"
            id="email"
            label="Email"
            defaultValue=""
            onChange={handleChange}
          />
          {/* You can use a button to trigger form submission */}
          <div style={{ margin: '10px 50%', color: "#fff", textAlign: "center", fontWeight: "700", padding: "1rem", backgroundColor: "blue", width: "5rem", borderRadius: "1rem" }}>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
}

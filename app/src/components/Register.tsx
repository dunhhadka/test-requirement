import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/action";

interface Props {
  onSubmit: (data: { 
    firstName: string; 
    lastName: string; 
    age: string; 
    fullName: string; 
    email: string; 
    password: string 
  }) => void;
}

const RegisterForm = ({ onSubmit }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    age: string;
    fullName: string;
    email: string;
    password: string;
  }>({
    firstName: "",
    lastName: "",
    age: "",
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Kiểm tra hợp lệ đơn giản
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      alert("Vui lòng điền tất cả các trường bắt buộc.");
      return;
    }

    await dispatch(
      createUser(formData)
    );

    // Chuyển hướng đến trang đăng nhập hoặc trang khác sau khi đăng ký thành công
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 2 }}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
          required
        />
        <TextField
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
          required
        />
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password" // Thay đổi loại nhập để bảo mật hơn
          value={formData.password}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;

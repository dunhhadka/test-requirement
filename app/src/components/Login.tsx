import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../redux/action";
import {AppDispatch} from "../redux/store";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultAction = await dispatch(
     login({ email: formData.email, password: formData.password })
   );
   if (login.fulfilled.match(resultAction)) {
     setTimeout(() => {
          navigate('/home'); 
        }, 1000);
   }
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 400, mx: "auto" }}
      >
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
          fullWidth
          size="small"
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({
              ...formData,
              password: e.target.value,
            });
          }}
          fullWidth
          size="small"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </div>
  );
};

export default RegisterForm;

import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "./client";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id?: string,
  name?: string,
  firstName?: string,
  lastName?: string,
  fullName?: string,
  age?: string,
  email?: string
  password?: string
}

export interface LoginResponse {
  user: User;
  token: string | null; 
}

export interface FilterRequest {
  name?: string;
  size: number;
  number: number
}

export const login = createAsyncThunk(
  "user/login",
  async (request: LoginRequest, { rejectWithValue }) => {
    try {
      const res = await client.request<{user: User, token: string | null }>({
        url: "/admin/users/login",
        method: "POST",
        data: request,
      });

      console.log(res);

      if (res.status !== 200) {
        return rejectWithValue(res.data);
      }

      return res.data; 
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }

      return rejectWithValue("Something went wrong");
    }
  }
);

export interface UserResponse {
  users: User[]
}

export const getAllUser = createAsyncThunk(
  'user/getAll',
  async (request: FilterRequest, { rejectWithValue }) => {
    try {
      const res = await client.get<UserResponse>(
        `/admin/users/search`, {
          params: {
            name: request.name,
            size: request.size,
            number: request.number,
          },
        }
      );

      return res.data; 
    } catch (error) {
      console.error('Error fetching users:', error); 
      return rejectWithValue('Something went wrong');
    }
  }
);

export const createUser = createAsyncThunk(
  "user/create",
  async (request: User, { rejectWithValue }) => {
    try {
      const res = await client.request<any>({
        url: "/admin/users/register",
        method: "POST",
        data: request,
      });

      console.log(res);

      if (res.status !== 200) {
        return rejectWithValue(res.data);
      }

      return res.data; 
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }

      return rejectWithValue("Something went wrong");
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (request: string, { rejectWithValue }) => {
    try {
      const res = await client.request<void>({
        url: "/admin/users/logout",
        method: "POST",
        params:{
          id: request
        }
      });

      console.log(res);

      if (res.status !== 200) {
        return rejectWithValue(res.data);
      }

      return res.data; 
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }

      return rejectWithValue("Something went wrong");
    }
  }
);
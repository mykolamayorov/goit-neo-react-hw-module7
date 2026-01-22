import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://6971ec6232c6bacb12c5084c.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

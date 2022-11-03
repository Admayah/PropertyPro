import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { addUser } from "../../features/properties/userSlice";



export const register = async (person) => {
    // const [isDisable, setIsDisable] = useState(true).

// console.log(isDisable, 'disable state')
};

export const login = async (person) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASEURL}/login`, { ...person });
        console.log(response.data)
        const { token } = response.data;
        localStorage.setItem("tokengit", token);
        // setTimeout(navigate("/dashboard"), 10000)
        toast('User logged in successfully')
        // setDisabled(false);
    } catch (error) {
        console.log(error)
        // setDisabled(false);
        toast.error(`${error.response.data.messages}`)
    }
}
import { useState, useEffect } from "react";
import paginate from "./utils";
import axios from "axios";
import { toast } from "react-toastify";

export const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [datas, setDatas] = useState([]);
    const [allData, setAllData] = useState([])
    const getProperties = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
            const { data } = response
            console.log(data)
            setAllData(data)
            setDatas(paginate(data))
            setLoading(false)
    }

    useEffect(() => {
        getProperties()
    }, [])
    console.log(datas)
    return { loading, datas, allData }
}
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export const useFetch = () => {
//     const [post, setPost] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);

//     useEffect(() => {
//         const getProperties = async () => {
//             const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
//             const { data } = response
//             console.log(data)
//             setPost(data)
//             // setDatas(paginate(data))
//             setLoading(false)
//         }

//         getProperties();
//     }, [])
//     console.log(post)
// }


 const Egister =  async (person) => {
    // const [isable, setIsable] = useState(true)
    const [a, setA] = useState(true)
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASEURL}/signup`, { ...person });
        console.log(response.data)
        const { token } = response.data;
        localStorage.setItem("token", token);
        toast('Account successfully created')
        
    } catch (error) {
        // setIsable(false)
        toast.error(`${error.response.data.message}`)
    }
// console.log(isable, 'disable state')
};
export default Egister;
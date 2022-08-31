import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomFetch = () => {
    const [post, setPost] = useState([]);
    const [loadings, setLoadings] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoadings(true)
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
                const { data } = response
                console.log(data)
                setPost(data)
                // setDatas(paginate(data))
                setLoadings(false)
            } catch (error) {
                setLoadings(false)
                console.log(error)
            }


        }

        fetchData();
    }, [])

    console.log({ post })
    return { loadings, post }
    // return {loadings, post};
}

export default CustomFetch;
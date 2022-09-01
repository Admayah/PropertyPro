import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const CustomFetch = () => {
    const [post, setPost] = useState([]);
    const [loadings, setLoadings] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6)

    useEffect(() => {
        const fetchData = async () => {
            setLoadings(true)
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
                const { data } = response
                console.log(data)
                const check = Pagination(postPerPage, data.length)
                console.log('pagination check', check)
                setPost()      
                // setDatas(paginate(data))
                setLoadings(false)
            } catch (error) {
                setLoadings(false)
                console.log(error)
            }


        }

        fetchData();
    }, []);

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPage = indexOfLastPost - postPerPage
    const currentPost = post.slice(indexOfFirstPage, indexOfLastPost)

    console.log({ post, currentPost })
    return { loadings, currentPost }
    // return {loadings, post};
}

export default CustomFetch;
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CustomFetch = () => {
    const [post, setPost] = useState([]);
    const [loadings, setLoadings] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
            const { data } = response
            console.log(data)
            setPost(data)
            // setDatas(paginate(data))
            setLoadings(false)
        }

        fetchData();
    }, [])

    console.log(post)
    return {loadings, post};
}

export default CustomFetch;
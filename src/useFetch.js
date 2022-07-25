import { useState, useEffect } from "react";
import paginate from "./utils";
import axios from "axios";

export const useFetch = () => {
const [loading, setLoading] = useState(true)
    const [datas, setDatas] = useState();
    const getProperties = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
        console.log(response)
        const {data} = response
        setDatas(paginate(data))
        setLoading(false)
    }

    useEffect(() => {
        getProperties()
    }, [])
    console.log(datas)
return {loading, datas}

}
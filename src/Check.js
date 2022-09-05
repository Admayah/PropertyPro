import React, {useState, useEffect} from 'react'
import axios from "axios";

const Check = () => {
    const [abcd, setABC] = useState([])
    const getAgents = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASEURL}/abc`)
            const { data } = response
            setABC(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAgents()
    }, [])
    console.log(abcd)
  return (
    <div>Check</div>
  )
}

export default Check
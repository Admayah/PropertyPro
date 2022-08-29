import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Avatar from 'react-avatar';
import { useNavigate } from 'react-router-dom';

const Agents = () => {
    
    const navigate = useNavigate();
    const [agents, setAgents] = useState([])
    const getAgents = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASEURL}/agents`)
            const { data } = response
            setAgents(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAgents()
    }, [])
    return (
        <div>
            {agents.map((agent) =>
            (
                <div style={{
                    boxShadow: "0 12px 15px rgba(0, 0, 0, 0.1), 0 17px 50px rgba(0, 0, 0, 0.1)", width: "90%", margin: "0 auto", padding: "5px", marginTop: "5px", border: "1px solid black"
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", fontWeight: "bold" }}>
                            <Avatar name={agent.first_name + " " + agent.last_name} maxInitials={2} size="80" round={true} />
                            <div className='agent-profile' style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingLeft: "10px", textTransform: "capitalize" }}>
                                <span style={{ fontSize: "18px", }}>{agent.first_name + " " + agent.last_name}</span>
                                <span>Agent</span>
                            </div>
                        </div>
                        <div onClick={() => navigate(`/agents/${agent.id}`)} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px" }}>
                            <button style={{ backgroundColor: "#000", color: "#fff", width: "100px", height: "50px", cursor: "pointer", borderRadius: "10px" }}>View Agent</button>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default Agents;
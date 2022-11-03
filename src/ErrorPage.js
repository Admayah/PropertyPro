import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function ErrorPage() {

  const navigate = useNavigate();

  return (
    <div style={{  display:'flex', justifyContent: 'center',
    backgroundColor: '#1C3988',
      alignItems: 'center',
      height: '100vh',
      color: 'white'}}
     >
  <div style={
    {textAlign: 'center'}
  }>
    <h1 style={{ fontSize: '8em',
      borderBottom: '1px dashed white', letterSpacing: '.5rem'}}>
      <span>4</span>
      <span style={{color: '#d97e22'}}>0</span>
      <span>4</span>
    </h1>
    <h3 style={{marginTop: '1rem'}}>PAGE NOT FOUND</h3>
    <button type="button" name="button"
    style={{ border: '1px solid white', marginTop: '1rem',
      background: 'transparent',
      outline: 'none',
      padding: '10px 20px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }}
    onClick={() => navigate(-1)}

    >Return To Home</button>
  </div>
</div>
  )
  //   <div 
  //   style={{width:'100%', height:'100vh', display: 'flex', justifyContent: 'center',
  //   alignItems:'center'}}
  //   >
  //   404 - Not Found
  //   </div>
  // )
}

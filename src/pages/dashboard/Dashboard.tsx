import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Dashboard(){
    const [dateTime, setDateTime] = useState<string>(new Date().toLocaleString());
    useEffect(()=>{
        const timer = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(timer)
    }, [])

    const navigate = useNavigate();
    return(
    <>
     <Cont>
      <DashboardCreate>
        <h1>Dashboard</h1>
        <button
        onClick={()=>{navigate("/dashboard/create")}}
        >+ Creat</button>
      </DashboardCreate>
      <p>{dateTime}</p>
      <EventInfo>
            <Box>
                <p>1</p>
                <p>Total Events Added</p>
            </Box>
            <Box>
                <p>0</p>
                <p>Private Events Added</p>
            </Box>
            <Box>
                <p>1</p>
                <p>Public Events Added</p>
            </Box>
            <Box>
                <p>1</p>
                <p>Offline Events Added</p>
            </Box>
            <Box>
                <p>0</p>
                <p>Online Events Added</p>
            </Box>
      </EventInfo>

     </Cont>
    </>
    )
}

const Cont = styled.nav`

background-color: rgb(243 244 246);
    min-width: 80%;
    padding: 50px 20px 20px 20px;
    p{
        font-size: 20px;
    }
`
const DashboardCreate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 30px;
    }
    button{
        width: 100px;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        background-color:  #63b6bd;
        padding: 10px 5px;
        font-size: 20px
    }
    :hover {
    background-color: #3da680;
    box-shadow: 0 1px 5px;
    font-weight: 600;
  }
   
`
const EventInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    float: left;
    margin-top: 30px;
    
    @media (min-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`
const Box = styled.div`
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid grey;
    @media (min-width: 1000px){
        border-right: 1px solid grey;
        border-bottom: none;
        margin-top: 50px;
    }
`
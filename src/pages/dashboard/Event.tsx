import React from "react";
import styled from "styled-components";
import data from "../../data.json"
import { Context } from "../../Context/PageProvider"
import { useParams } from "react-router-dom";


export default function Event(){
    const {id} = useParams()
    const {newevent, setNewEvent} = Context()
    
    const eventId = newevent.find((el: { title: string | undefined; })=>el.title==id)
    console.log(eventId)
    return(
        <Cont>
            <EventDescr>
                <Couple>
                    <ContImg>
                        <img src={eventId.UploadImage} alt="" />
                    </ContImg>
                    <ContAddress>
                        <p>{eventId.LocationName}</p>
                        <p>free</p>
                        <p>No Members</p>
                        <p>{eventId.maxParticipants}</p>
                    </ContAddress>
                </Couple>

                <ContDescr>
                    <p>{eventId.title}</p>
                    <p>{eventId.description}</p>
                </ContDescr>
            </EventDescr>
          
           
        </Cont>
    )
}

const Cont = styled.div`
    background-color: rgb(243 244 246);
    width: 100%;
    padding: 20px 20px 20px 20px;
    font-size: 20px ;
`
const EventDescr = styled.div`
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    border: 1px solid black;
`
const Couple = styled.div`
   display: flex;
   flex-direction: column;
   gap: 15px;
   /* height: 50vh; */
   @media (min-width: 1000px){
        flex-direction: row;
        justify-content: space-between;
    }

`
const ContImg = styled.div`
width: 100%;
img{
    width: 100%;
    border-radius: 10px;
    height: 50vh;
}
    
`
const ContAddress = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: yellow;
    
`
const ContDescr = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
background-color: yellow;
border-radius: 10px;
padding: 20px;
    
`
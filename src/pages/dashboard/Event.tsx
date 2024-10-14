import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AddMembers from "./AddMembers"
import { UseNewEvent } from "../../Context/EventProvider";
import { UseShowMembers } from "../../Context/ShowMembersProvider";


export default function Event(){
    const {id} = useParams()
    const {newEvent} = UseNewEvent()
    const {showMembers, setShowMembers} = UseShowMembers()
    console.log(newEvent)
    console.log(showMembers)
    
    
    const eventId = newEvent.find((el: { title: string | undefined; })=>el.title==id)

    return(
        <Cont>
            <EventDescr>
                <Couple>
                    <ContImg>
                        <img src={eventId?.UploadImage} alt="" />
                    </ContImg>

                    <ContMapAddress>
                        <h1 className="map">MAP</h1> 
                        
                        <ContAddress> 
                            <div className="logoText">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="192" r="32"></circle><path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path></svg>  
                                <p> {eventId?.LocationName}</p>
                            </div> 
                            <div className="logoText">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="416" height="288" x="48" y="144" fill="none" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></rect><path fill="none" stroke-linejoin="round" stroke-width="32" d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"></path><path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path></svg>
                                <p>free</p>
                            </div>
                            <div 
                            onClick={()=>{setShowMembers(true)}} 
                            className="logoText">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path></svg>
                                {eventId?.Members ? <p>{eventId.Members}</p> : <p>No Members</p>}
                            </div>
                            <div className="logoText">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"></path></svg>
                                {eventId?.maxParticipants ? <p>{eventId.maxParticipants}</p> : <p>No max parcipation limit</p>}
                            </div>
                        </ContAddress>
                    </ContMapAddress>
                </Couple>

                <ContDescr>
                    <p className="title">{eventId?.title}</p>
                    <p className="description">{eventId?.description}</p>
                </ContDescr>
            </EventDescr>
          {showMembers ? <AddMembers /> : null}
        </Cont>
    )
}

const Cont = styled.div`
    background-color: rgb(243 244 246);
    width: 100%;
    font-size: 20px ;
    height: 100vh;
    overflow-y: auto;
      &::-webkit-scrollbar {
      display: none;
      }
`
const EventDescr = styled.div`
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    width: 100%;
    border: 1px solid black;
`
const Couple = styled.div`
   display: flex;
   flex-direction: column;
   gap: 15px;
   @media (min-width: 800px){
        flex-direction: row;
        justify-content: space-between;
    }

`
const ContImg = styled.div`
width: 100%;
img{
    width: 100%;
    border-radius: 10px;
    height: 100%;
}
    
`
const ContMapAddress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #d4d0d0;
    .map{
        padding: 50px;
        border: 1px solid black;
    }
    .logoText{
        display: flex;
        align-items: center;
        gap: 5px;
    }
`
const ContAddress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ContDescr = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #d4d0d0;
    border-radius: 10px;
    padding: 20px;

    .title{
        font-size: 28px;
        font-weight: 600;
    }
    .description{
        font-size: 14px;
        opacity: 0.6;
    }
    
`

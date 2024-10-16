import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";
import { UseNewEvent } from "../../Context/EventProvider";




export default function Events(){
    const navigate = useNavigate()
    const selectPrivacy = data.data[1].privacy
    const {newEvent, setNewEvent} = UseNewEvent()
    const [value, setValue] = useState("")
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    } 
    console.log(value)


    return(
        <>
        <Cont>
        <YourEvent>
         <GoBack
         onClick={()=>{navigate("/dashboard")}}
         >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className=" rounded-full  group-hover:p-1 group-hover:text-black" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
          <p>Go back</p>
         </GoBack>
         <YourEventCreate>
          <h1>Your Events</h1>
          <button
            onClick={()=>{navigate("/dashboard/create")}}
          >+ Creat</button>
        </YourEventCreate>
        </YourEvent>

        <SearchEvent>
        <input 
            type="text" 
            placeholder="Search"
            onChange={inputHandler}
            onKeyDown={(e) => {
                if (e.key === "Enter" && value.length >= 3){
                    localStorage.setItem("searchValue", JSON.stringify(value));
                }
            }}
            />
        <select >
        {selectPrivacy?.map((item, index)=>(
            <option key={index} value="ToTal" selected>{item}</option>
            ))}
        </select>
        </SearchEvent>

        <AllEvents>
        {newEvent.map((items, index)=>(
            <Event 
                key={index}
                onClick={()=>{navigate(`/dashboard/event/${items.title}`)}}
                >
                <TopCont>
                    <div style={{position: "relative"}}>
                        <img src={items.UploadImage} alt="" style={{width: "220px", height: "220px", borderRadius: "0 20px 0 20px"}}/>
                        <span style={{position: "absolute", left: "0px", top: "0px", color: "black", fontSize: "20px", backgroundColor: "#fff", borderRadius: "0 0 12px 0", width: "100px"}}>
                        {items.category}
                        </span>
                        <span style={{position: "absolute", bottom: "0px", right: "0px", color: "black", fontSize: "20px", backgroundColor: "#fff", borderRadius: "12px 0 0 0", width: "100px"}}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="5em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="192" r="32"></circle><path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path></svg>
                        </span>
                    </div>    
                </TopCont>

                <BottomCont>
                    <div className="titleDescrInCard">
                    <p>{items.title}</p>
                    <p>{items.description}</p>
                    </div>

                    <div className="startEndInCard">
                    <p>{items.startDate}</p>
                    <p>{items.endDate}</p>
                    </div>
                </BottomCont>
            </Event>
            ))}
        </AllEvents>


        </Cont>
        </>
    )
}

const Cont = styled.nav`
    background-color: rgb(243 244 246);
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px 20px 40px 20px;
    gap: 50px;
    height: 100vh;
    overflow-y: auto;
      &::-webkit-scrollbar {
      display: none;
      }
    & > p{
        font-size: 18px;
    }
    .createButton{
      padding: 10px 5px;
      font-size: 18px;
    }
    `
  const YourEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  gap: 10px;
`
const GoBack = styled.div`
display: flex;
gap: 20px; 
cursor: pointer;
opacity: 0.7;
p:hover{
  font-weight: 600;
  opacity: 1;
}
`
const YourEventCreate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > h1{
        font-size: 20px;
        @media (min-width: 1000px){
            font-size: 30px;
        }  
    }
    & > button{
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
const SearchEvent = styled.div`
    display: flex;
    align-items: center;
    width: 97%;
    & > input{
        width: 100%;
        padding: 15px 15px;
        border-radius: 12px 0 0 12px;
        border: solid 1px gray;
        background-color: #edebeb;
        font-size: 18px;
        opacity: 0.8;
    }
    & > select{
        width: 150px;
        padding: 14.6px 7px;
        border-radius:  0 12px 12px 0;
        border: solid 1px gray;
        font-size: 18px;
        background-color: #edebeb;
        opacity: 0.8;
    }
    & > option{
        font-size: 15px;
    }
    
`
const AllEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Event = styled.div`
    padding: 8px;
    width: 236px;
    border-radius: 10px;
`
const TopCont = styled.div`
    background-color: #fff;
    border-radius: 0 20px 0 0;

`
const BottomCont = styled.div`
    
    padding: 10px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    gap: 10px;
    background-color: #fff;
    .titleDescrInCard{
        display: flex;
        flex-direction: column
    }
    .startEndInCard{
        width: 100px;
        display: flex;
        flex-direction: column;
    }
`

function Usercontext(): { users: any; setUsers: any; } {
    throw new Error("Function not implemented.");
}

function neweventcontext(): { newEvent: any; setNewEvent: any; } {
    throw new Error("Function not implemented.");
}


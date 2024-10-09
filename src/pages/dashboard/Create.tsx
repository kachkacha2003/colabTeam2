import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import data from "../../data.json"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaEvent } from "../../schema/createEvent";

export default function Create(){
  const navigate = useNavigate();
  const cateroriesArray = data.data[0].categories;
  const [newEvent, setnewEvent] = useState({
    id: 0,
    tatle: "",
    description: "",
    privacy: "",
    medium: "",
    startDate: "",
    endDate: "",
    duration: 0,
    language: "",
    maxParticipants: 0,
    category: "",
    terms: "",
    LocationName: "",
    latitude: 0,
    longtude: 0,
    acceptingRSVPs: "",
    UploadImage: ""
  })

  const [privacy, setPrivacy] = useState<string>("")
  const [medium, setMedium] = useState<string>("")
  const [acceptingRSVPs, setAcceptingRSVPs] = useState<string>("")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const choosePrivacy = (item: string)=>{
    setPrivacy(item)
    console.log(item)
  }
  const chooseMedium = (item: string)=>{
    setMedium(item)
    console.log(item)
  }
  const chooseAcceptingRSVPs = (item: string)=>{
    setAcceptingRSVPs(item)
    console.log(item)
  }
  

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({ resolver: yupResolver(schemaEvent)})

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setnewEvent((prew) => ({
      ...prew,
      [name]: value,
    }))
  }

  console.log(data.data[2].events)

  async function PostEvent() {
    const response = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
          "content-Type": "application-json",
        },
        body: JSON.stringify(newEvent)
      });
      if (!response.ok) {
        console.error("Failed to post event");
        return;
      }
    const data = await response.json()
    console.log(data)
  }
  
    return(
        <Cont>
        <CreateEvent>
         <GoBack
         onClick={()=>{navigate("/dashboard")}}
         >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className=" rounded-full  group-hover:p-1 group-hover:text-black" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
          <p>Go back</p>
         </GoBack>
          <h1>Create Event</h1>
        </CreateEvent>
        
        <InputField onSubmit={handleSubmit(PostEvent)}>
          <Couple>
            <label htmlFor="title">Title <span>*</span></label>
            <input
            type="text"
            {...register("title")}
          />
            {errors.title && 
              <ErrorMessage>
              {errors.title.message}
            </ErrorMessage>}
          </Couple>
          <Couple>
            <label htmlFor="">Description <span>*</span></label>
            <input 
            type="text" 
            className="nonFix"
            {...register("description")}
            />
            {errors.description ? (
              <ErrorMessage>
              {errors?.description?.message as ReactNode}
            </ErrorMessage>
          ) : null}
          </Couple>
          <Couple>
            <label htmlFor="">Privacy <span>*</span></label>
            <div className="chooseButton">
              <p onClick={()=>{choosePrivacy("Private")}} 
                style={privacy==="Private" ? {backgroundColor: "#63b6bd"} : {backgroundColor: "#fff"}}
                >Private</p>
              <p onClick={()=>{choosePrivacy("Public")}} 
                style={privacy==="Public" ? {backgroundColor: "#63b6bd"} : {backgroundColor: "#fff"}}
                >Public</p>
            </div>
            <ErrorButtonMessage style={privacy ? {display: "none"} : {display: "flex"}}>Choose one of them</ErrorButtonMessage>
          </Couple>
          <Couple>
            <label htmlFor="">Medium <span>*</span></label>
            <div  className="chooseButton">
              <p onClick={()=>{chooseMedium("online")}}
                style={medium==="online" ? {backgroundColor: "#63b6bd"} : {backgroundColor: "#fff"}}
                >Online</p>
              <p onClick={()=>{chooseMedium("InPerson")}}
                style={medium==="InPerson" ? {backgroundColor: "#63b6bd"} : {backgroundColor: "#fff"}}
                >InPerson</p>
            </div>
            <ErrorButtonMessage style={medium ? {display: "none"} : {display: "flex"}}>Choose one of them</ErrorButtonMessage>
          </Couple>
          <Couple>
            <label htmlFor="">Start Date-Time <span>*</span></label>
            <input 
            type="datetime-local" 
            className="fix"
            {...register("startDate")}
            />
            {errors.startDate ? (
              <ErrorMessage>
              {errors?.startDate?.message as ReactNode}
            </ErrorMessage>
          ) : null}
          </Couple>
          <Couple>
            <label htmlFor="">End Date-Time <span>*</span></label>
            <input 
            type="datetime-local" 
            className="fix"
            {...register("endDate")}
            />
            {errors.endDate ? (
              <ErrorMessage>
              {errors?.endDate?.message as ReactNode}
            </ErrorMessage>
          ) : null}
          </Couple>
          <Couple>
            <label htmlFor="">Duration</label>
            <input 
            type="number" 
            className="fix"
            />
          </Couple>
          <Couple>
            <label htmlFor="">Language</label>
            <input 
            type="text" 
            className="fix"
            />
          </Couple>
          <Couple>
            <label htmlFor="">Max Participants (i.e. RSVPs)<span>*</span></label>
            <input 
            type="number" 
            className="fix"
            {...register("maxParticipants")}
            />
            {errors.maxParticipants ? (
              <ErrorMessage>
                {errors?.maxParticipants?.message as ReactNode}
              </ErrorMessage>
            ): null}
          </Couple>
          <Couple>
            <label htmlFor="">Category<span>*</span></label>
            <div className="chooseButton" style={{flexWrap: "wrap"}}>
            {cateroriesArray.map((item, index) =>(
              <div key ={index}>
              <p onClick={()=>{console.log(selectedIndex); setSelectedIndex(index)}}
              style={selectedIndex === index ? {backgroundColor: "#63b6bd"} : {backgroundColor: "#fff"}}
              >{item}</p>
            </div>
            ))}
            </div>
            <ErrorButtonMessage style={selectedIndex ? {display: "none"} : {display: "flex"}}>Choose one of them</ErrorButtonMessage>
          </Couple>
          <Couple>
            <label htmlFor="">Terms and Conditions</label>
            <input 
            type="text" 
            className="nonFix"
            {...register("terms")}
            />
            {errors.terms ? (
              <ErrorMessage>
                {errors?.terms?.message as ReactNode}
              </ErrorMessage>
            ) : null}
          </Couple>
          <Couple>
            <label htmlFor="">Location Name<span>*</span></label>
            <input 
            type="text" 
            className="fix"
            {...register("LocationName")}
            />
            {errors.LocationName ? (
              <ErrorMessage>
                {errors?.LocationName?.message as ReactNode}
              </ErrorMessage>
            ) : null}
          </Couple>
          <Couple>
            <label htmlFor="">Latitede<span>*</span></label>
            <input 
            type="text" 
            className="fix"
            {...register("latitude")}
            />
            {errors.latitude ? (
              <ErrorMessage>
                {errors?.latitude?.message as ReactNode}
              </ErrorMessage>
            ) : null}
          </Couple>
          <Couple>
            <label htmlFor="">Longitude<span>*</span></label>
            <input 
            type="text" 
            className="fix"
            {...register("longtude")}
            />
            {errors.longtude ? (
              <ErrorMessage>
                {errors?.longtude?.message as ReactNode}
              </ErrorMessage>
            ) : null}
          </Couple>
          <Couple>
            <label htmlFor="">Accepting RSVPs<span>*</span></label>
            <div  className="chooseButton">
            <p onClick={()=>{chooseAcceptingRSVPs("Yes")}} 
              style={acceptingRSVPs==="Yes" ? {backgroundColor: "#63b6bd"} : {backgroundColor: "#fff"}}
              >Yes</p>
            <p onClick={()=>{chooseAcceptingRSVPs("No")}} 
              style={acceptingRSVPs==="No" ? {backgroundColor: "#63b6bd"} : {backgroundColor: "#fff"}}
              >No</p>
            </div>
            <ErrorButtonMessage style={acceptingRSVPs ? {display: "none"} : {display: "flex"}}>Choose one of them</ErrorButtonMessage>
          </Couple>
          <Couple>
            <label htmlFor="">Upload Image</label>
            <input 
            type="file"
            />
          </Couple>
          <button 
          type = "submit"
          className="createButton"
          >Create Event</button>
        </InputField>
       </Cont>
      
      )
  }
  
  const Cont = styled.nav`
  background-color: rgb(243 244 246);
      width: 100%;
      padding: 20px 20px 40px 20px;
      p{
          font-size: 18px;
      }
      .createButton{
        padding: 10px 5px;
        font-size: 18px;
      }
  `
  const CreateEvent = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: left;
      gap: 10px;
      h1{
          font-size: 30px;
      }
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
    
  const InputField = styled.form`
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      gap: 50px;
      height: 700px;
      overflow-y: auto;
  `
  const Couple = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    label{
        font-size: 18px;
        opacity: 0.7;
    }
    .chooseButton{
      display: flex;
      gap: 5px;
      p{
        width: 150px;
        text-align: center;
        padding: 2px 10px;
        border: 1px solid #63b6bd;
        border-radius: 5px;
      }
    }
    &>p,
    input{
        font-size: 18px;
        opacity: 0.7;
        padding: 10px;
        height: 40px;
        border-radius: 10px;
    }
    &>p{
        border: none;
        cursor: pointer;
    }
    p:hover{
            background-color: #63b6bd;
        }
     span{
        color: red;
      }
  `

  const ErrorMessage = styled.span`
    width: 100%;
    color: red;
    font-size: 12px;
    margin: 0.1px 0;
`;
const ErrorButtonMessage = styled.h4`
    width: 100%;
    color: #63b6db;
    margin-top: 1px;
`


 
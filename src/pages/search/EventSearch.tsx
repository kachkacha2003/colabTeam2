import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IEvent } from "../../types/Events";
import styled from "styled-components";



export default function EventSearch() {
    const navigate = useNavigate
    const [check, setcheck] = useState(false)
    let inputValue: string | null = localStorage.getItem("searvhValue");
    if (inputValue) {
        inputValue = JSON.parse(inputValue);
    }
    console.log(inputValue)

    useEffect(() => {
        
    }, [inputValue])

    const [searched, setSearched] = useState<IEvent[]>([{
        id: 0,
        title: "",
        description: "",
        privacy: "",
        medium: "",
        startDate: "",
        endDate: "",
        duration: 30,
        language: "",
        maxParticipants: 0,
        category: "",
        terms: "",
        LocationName: "",
        latitude: 14,
        longtude: 45,
        acceptingRSVPs: "",
        UploadImage: "",
        "Members": 5
    }])
    return(
        <>
        {!check ? (
            <LoadingCon>
                <h1 style={{ fontSize: "32px", color: "#121212" }}>Loading</h1>
            </LoadingCon>
        ) : (
            <div>
            {searched.map((items, index) => {
                return (
                    <Event key={index}>
                    <TopCont>
                        <div style={{position: "relative"}}>
                            <img 
                            src={items.UploadImage} alt="" style={{width: "220px", height: "220px", borderRadius: "0 20px 0 20px"}}
                            onClick={()=>navigate("/aaa")}
                            />
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
                );
                })} 
                </div>
        )
    
    }
        </>
    )
}

const LoadingCon = styled.div`
  margin: 0 auto;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #121212; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
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
  
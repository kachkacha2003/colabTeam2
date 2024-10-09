import React from "react";
import EventHubLogo from "/image/EventHubLogo.svg"
import styled from "styled-components";

export default function NavBar() {
  return (
    <MainCont>
    <img src={EventHubLogo} />
    <Navbar>
      <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
      
        <div className="navbar">
          <a href="/">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path></svg>
          Home</a>
        </div>
        <div className="navbar">
          <a href="events"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="416" height="384" x="48" y="80" fill="none" stroke-linejoin="round" stroke-width="32" rx="48"></rect><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32m256-32v32m80 80H48"></path></svg>
          Events</a>
        </div>
        <div className="navbar">
          <a href="invities"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M366.05 146a46.7 46.7 0 01-2.42-63.42 3.87 3.87 0 00-.22-5.26l-44.13-44.18a3.89 3.89 0 00-5.5 0l-70.34 70.34a23.62 23.62 0 00-5.71 9.24h0a23.66 23.66 0 01-14.95 15h0a23.7 23.7 0 00-9.25 5.71L33.14 313.78a3.89 3.89 0 000 5.5l44.13 44.13a3.87 3.87 0 005.26.22 46.69 46.69 0 0165.84 65.84 3.87 3.87 0 00.22 5.26l44.13 44.13a3.89 3.89 0 005.5 0l180.4-180.39a23.7 23.7 0 005.71-9.25h0a23.66 23.66 0 0114.95-15h0a23.62 23.62 0 009.24-5.71l70.34-70.34a3.89 3.89 0 000-5.5l-44.13-44.13a3.87 3.87 0 00-5.26-.22 46.7 46.7 0 01-63.42-2.32z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"></path></svg>
          Invities</a>
        </div>
        <div className="navbar">
          <a href="RSVPs"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"></path></svg>
          RSVPs</a>
        </div>
        <div className="navbar">
          <a href="notifications"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"></path></svg>
          Notifications</a>
        </div>
      </div>

      <div>
        <div className="navbar">
          <a href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path></svg>
          UserName</a>
        </div>
        <div className="navbar">
          <a href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"></path></svg>
          Logout</a>
        </div>
      </div>
    </Navbar>
    </MainCont>
  );
}

const MainCont = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  width: 200px;
  @media (min-width: 1000px){
    width: 300px;
  }
  img {
  width: 150px;
  height: 150px;
  @media (min-width: 1000px){
    width: 180px;
    height: 180px;
  }
}
`
const Navbar = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
gap: 180px;
@media (min-width: 1000px){
  gap: 100px;
  }

.navbar{
  opacity: 0.7;
  padding: 10px 0;
   :hover {
    background-color: #63b6bd;
    border-radius: 5px;
    box-shadow: 0 1px 5px;
    font-weight: 600;
  }
  @media (min-width: 1000px){
    /* padding: 18px; */
  }
  
}
svg {
  width: 20px;
  height: 20px;
}
a {
  width: 200px;
  padding: 3px 16px;
  display: flex;
  gap: 16px;
  text-decoration: none;
  font-size: 20px;
  color: black;
  @media (min-width: 1000px){
    gap: 20px;
    padding: 5px 18px;
  }
}
`
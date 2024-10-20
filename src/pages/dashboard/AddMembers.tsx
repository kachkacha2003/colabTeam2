import styled from "styled-components"
import { Context } from "../../Context/PageProvider"


export default function AddMembers(){
    const {users} = Context()
    const {showMembers, setShowMembers} = Context()
    console.log(showMembers)
    return(
        <MemberCont>
            <SearchUser>
                <h2>Search Users</h2>
                <svg 
                onClick={()=>{setShowMembers(false)}}
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
            </SearchUser>
            <SearchInputField>
                <input type="text" placeholder="Search name or email or role"/>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
            </SearchInputField>

            {users?.map((items, index)=>(
            <Members key={index}>
                <div className="user">
                    <img src={items.photo} alt="" />
                        <div className="nameEmail">
                            <p>{items.userName}</p>
                            <p>{items.email}</p>
                        </div>
                </div>
                <p>Invite</p>
            </Members>))}
        </MemberCont>
    )
}
const MemberCont = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e9eceb;
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    border-radius: 10px;
    padding: 10px ;
    gap: 10px;
`
const SearchUser = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    align-items: center;
    padding: 10px 0;
`
const SearchInputField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    input{
        width: 80%;
        border-radius: 30px;
        border: none;
        padding: 10px
    }
`
const Members = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    .user{
        display: flex;
        align-items: center;
        gap: 5px
    }
    .nameEmail{
        display: flex;
        flex-direction: column;
        gap: 3px;
        
    }
    img{
        width: 50px;
        border-radius: 50%;
    }
`





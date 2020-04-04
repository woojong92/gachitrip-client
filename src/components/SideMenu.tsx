import React from "react";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

const SideMene = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    width: 300px;
    min-height: 860px;
    margin: 20px;
`;

const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 15px;
`;

const UserName = styled.a`
    text-align: left;
    font-weight: bold;
    font-size: 25px;
    color: #000;
`

const BoxTitle = styled.div``;

const BoxContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    background-color: yellowgreen;
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 20px;
`;


export default function () {
    return (
        <SideMene>
            <BoxContainer />
            <BoxContainer />
        </SideMene>
    )
}

// <Image src="https://avatars1.githubusercontent.com/u/35809358?s=460&u=2bb4df1e0b41b03ebb046bb459113cacbb053b62&v=4" />
// <UserName>Woody</UserName>
// <BoxTitle>😁즐겨찾는 게시판</BoxTitle>
// <BoxContainer>
//     <ul style={{
//         marginTop: "10px"
//     }}>
//         <li style={{ marginBottom: "5px" }}><Link href="#"><a>#유럽</a></Link></li>
//         <li style={{ marginBottom: "5px" }}><Link href="#"><a>#국내</a></Link></li>
//         <li style={{ marginBottom: "5px" }}><Link href="#"><a>#스쿠버다이빙</a></Link></li>
//         <li style={{ marginBottom: "5px" }}><Link href="#"><a>#서핑</a></Link></li>
//     </ul>
// </BoxContainer>
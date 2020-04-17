/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import styled from "@emotion/styled";

import Link from 'next/link';
import Button from "./Button";
import { media } from '../lib/style-utils';
import Router from 'next/router';

import { MenuOutlined } from '@ant-design/icons';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeaderWrapper = styled.header`
    /* height: 60px; */
    width: 100%;
    flex: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: auto;
    /* background-color: #5dade2; */
`;

const MainWrapper = styled.div`
    width: 600px;
    /* height: 60px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    /* background-color: purple; */
`;

const HeaderRightWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
`;

const HeaderLeftWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const Logo = styled.div`
    font-family: 'Baloo', cursive;
    font-size: 30px;
    margin-left: 20px;
    margin-right:50px;
    line-height: 1;
    cursor: pointer;
`;

const Nav = styled.nav`
    display: flex;
    flex: 0 0 auto;
    justify-content: space-around;
    align-items: center;

    &.bottom {
        flex-direction: column;
        padding: 10px;
        border-bottom: 1px solid #e5e5e5;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }

    /* &.mainNav {
        background-color: red;
      
        ${media.tablet`
            display: none;
        `}
    } */
`;

const NavItem = styled.nav`
    flex: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px 20px;
`;

const LinkStyle = styled.a`
    font-family: 'Noto', cursive;
    font-size: 18px;
    /* font-weight: bold; */
    text-decoration: none;
    color: black;
    &:hover {
        color: skyblue;
    }
`;

const ButtonGroup = styled.div`
    flex: none;
    display: flex;
    justify-content: space-around;
    margin-right: 20px;


    ${media.tablet`
        display: none;
    `}

    ${media.mobile`
    background-color: purple;
        /* margin-top: 0.5rem;
        width: calc(100% - 1rem);         */
    `}
`;

const ToggleButton = styled(MenuOutlined)`
    display: none;
    cursor: pointer;
    margin-right: 20px;
    font-size: 25px;

    ${media.desktop`
        display: none;
    `}
    ${media.tablet`
        display: block;
    `}
`;


export default function Header() {

    const onClick = (path: string) => { Router.push(path) };
    const [toggleBtn, setToggleBtn] = useState(false);

    return (
        <Wrapper>
            <HeaderWrapper>
                <MainWrapper>
                    <HeaderLeftWrapper>
                        <Link href="/" passHref><Logo>GachiTrip</Logo></Link>
                        {
                            // <Nav className="mainNav">

                            //     <NavItem><Link href="/Community" passHref><LinkStyle>커뮤니티</LinkStyle></Link></NavItem>
                            //         <NavItem><Link href="/With" passHref><LinkStyle>같이여행?</LinkStyle></Link></NavItem>
                            //         <NavItem><Link href="/Contents" passHref><LinkStyle>콘텐츠</LinkStyle></Link></NavItem>
                            //         <NavItem><Link href="#" passHref><LinkStyle>ㅋㅋㅋ</LinkStyle></Link></NavItem>
                            // </Nav>
                        }
                    </HeaderLeftWrapper>

                    <HeaderRightWrapper>
                        <ButtonGroup>
                            <Button theme="primary" onClick={() => onClick("/SignUp")}>회원가입하기</Button>
                            <div style={{ width: "10px" }} />
                            <Button theme="secondary" onClick={() => onClick("/SignIn")}>로그인하기</Button>
                        </ButtonGroup>
                        <ToggleButton onClick={() => setToggleBtn(!toggleBtn)} />
                    </HeaderRightWrapper>
                </MainWrapper>

            </HeaderWrapper>
            {
                toggleBtn && (
                    <Nav className="bottom">
                        <NavItem><Link href="/Community" passHref><LinkStyle>커뮤니티</LinkStyle></Link></NavItem>
                        <NavItem><Link href="/With" passHref><LinkStyle>같이여행?</LinkStyle></Link></NavItem>
                        <NavItem><Link href="/Contents" passHref><LinkStyle>콘텐츠</LinkStyle></Link></NavItem>
                        <NavItem><Link href="#" passHref><LinkStyle>ㅋㅋㅋ</LinkStyle></Link></NavItem>

                        {
                            <div style={{ display: "flex" }}>
                                <Button theme="primary" onClick={() => onClick("/SignUp")}>회원가입하기</Button>
                                <div style={{ width: "15px" }} />
                                <Button theme="secondary" onClick={() => onClick("/SignIn")}>로그인하기</Button>
                            </div>

                        }

                    </Nav>
                )
            }
        </Wrapper>
    )
}

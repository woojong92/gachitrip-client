/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import Link from 'next/link';
import Button from "./Button";

import Router from 'next/router';

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000080;
    margin-bottom: auto;
`

const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex: auto;
    align-items: center;
    justify-content: space-between;
`;

const HeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 20px;
`;

const HeaderRight = styled.div`
    display: inline-flex;
    flex-direction: row;
    text-align: center;
    padding-right: 20px;
`;

const HeaderTitle = styled.div`
    margin-right: 50px;
`;

const HeaderTitleStyle = styled.a`
    color: #111;
    font-size: 30px;
    text-decoration: none;
`;

const HeaderNav = styled.ul`
    display: flex;
    flex-direction: row;
`;

const HeaderNavItem = styled.li`
    margin-right: 10px;
    margin-left: 10px;
    box-sizing: border-box;
    white-space: nowrap;
`;

const LinkStyle = styled.a`
    color: black;
    font-style: normal;
    text-decoration: none;
`;

const ButtonContainer = styled.div`
    margin-right: 20px;
`;

export default function Container() {

    const onClick = (path: string) => { Router.push(path) };

    return (
        <Header>
            <HeaderWrapper>
                <HeaderLeft>
                    <HeaderTitle><Link href="/" passHref><HeaderTitleStyle>GachiTrip</HeaderTitleStyle></Link></HeaderTitle>
                    <HeaderNav>
                        <HeaderNavItem><Link href="/Community" passHref><LinkStyle>커뮤니티</LinkStyle></Link></HeaderNavItem>
                        <HeaderNavItem><Link href="/With" passHref><LinkStyle>같이여행?</LinkStyle></Link></HeaderNavItem>
                        <HeaderNavItem><Link href="/Contents" passHref><LinkStyle>콘텐츠</LinkStyle></Link></HeaderNavItem>
                        <HeaderNavItem><Link href="#" passHref><LinkStyle>ㅋㅋㅋ</LinkStyle></Link></HeaderNavItem>
                    </HeaderNav>
                </HeaderLeft>

                <HeaderRight>
                    <Button theme="primary" onClick={() => onClick("/SignUp")}>회원등록하기</Button>
                    <div style={{ width: "10px" }} />
                    <Button theme="secondary" onClick={() => onClick("/SignIn")}>로그인하기</Button>
                </HeaderRight>
            </HeaderWrapper>
        </Header>
    )
}
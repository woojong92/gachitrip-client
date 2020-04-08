/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import Link from 'next/link';
import Button from "./Button";

import Router from 'next/router';

const Wrapper = styled.header`
    height: 60px;
    width: 100%;
    flex: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000080;
    margin-bottom: auto;
`;

const HeaderRightWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const HeaderLeftWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
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
`;

const NavItem = styled.nav`
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
`;

const LinkStyle = styled.a`
    font-family: 'Noto', cursive;
    font-size: 15px;
    text-decoration: none;
    color: black;
`;

const ButtonGroup = styled.div`
    flex: none;
    display: flex;
    justify-content: space-around;
    margin-right: 20px;
`;

export default function Header() {

    const onClick = (path: string) => { Router.push(path) };

    return (
        <Wrapper>

            <HeaderRightWrapper>
                <Link href="/" passHref><Logo>GachiTrip</Logo></Link>
                <Nav>
                    <NavItem><Link href="/Community" passHref><LinkStyle>커뮤니티</LinkStyle></Link></NavItem>
                    <NavItem><Link href="/With" passHref><LinkStyle>같이여행?</LinkStyle></Link></NavItem>
                    <NavItem><Link href="/Contents" passHref><LinkStyle>콘텐츠</LinkStyle></Link></NavItem>
                    <NavItem><Link href="#" passHref><LinkStyle>ㅋㅋㅋ</LinkStyle></Link></NavItem>
                </Nav>
            </HeaderRightWrapper>

            <HeaderLeftWrapper>
                <ButtonGroup>
                    <Button theme="primary" onClick={() => onClick("/SignUp")}>회원가입하기</Button>
                    <div style={{ width: "10px" }} />
                    <Button theme="secondary" onClick={() => onClick("/SignIn")}>로그인하기</Button>
                </ButtonGroup>
            </HeaderLeftWrapper>

        </Wrapper>
    )
}

// <HeaderWrapper>
// <HeaderLeft>
//     <HeaderTitle><Link href="/" passHref><HeaderTitleStyle>GachiTrip</HeaderTitleStyle></Link></HeaderTitle>
//     <HeaderNav>
//         <HeaderNavItem><Link href="/Community" passHref><LinkStyle>커뮤니티</LinkStyle></Link></HeaderNavItem>
//         <HeaderNavItem><Link href="/With" passHref><LinkStyle>같이여행?</LinkStyle></Link></HeaderNavItem>
//         <HeaderNavItem><Link href="/Contents" passHref><LinkStyle>콘텐츠</LinkStyle></Link></HeaderNavItem>
//         <HeaderNavItem><Link href="#" passHref><LinkStyle>ㅋㅋㅋ</LinkStyle></Link></HeaderNavItem>
//     </HeaderNav>
// </HeaderLeft>

// <HeaderRight>
//     <Button theme="primary" onClick={() => onClick("/SignUp")}>회원등록하기</Button>
//     <div style={{ width: "10px" }} />
//     <Button theme="secondary" onClick={() => onClick("/SignIn")}>로그인하기</Button>
// </HeaderRight>
// </HeaderWrapper>
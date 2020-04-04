/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import Link from 'next/link';
import Button from "./Button";
import { red } from "color-name";

const Header = styled.header`
    border-bottom: 1px solid #000080;

    background: #fff;
    padding-right: 150px;
    padding-left: 150px;
`

const HeaderWrapper = styled.div`
    height: 50px;
    display: flex;
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
    display: flex;
    flex-direction: row;
    text-align: center;
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
`;

const LinkStyle = styled.a`
    color: black;
    font-style: normal;
    text-decoration: none;
`;

const ButtonContainer = styled.div`
    width: 100px;
    margin-right: 20px;
`;

export default function Container() {
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

                    <ButtonContainer>
                        <Button text="로그인" />
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button text="회원가입" />
                    </ButtonContainer>
                </HeaderRight>

            </HeaderWrapper>
        </Header>
    )
}
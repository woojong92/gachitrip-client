import React from "react";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const SignInPresenterWrapper = styled.div`
    height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Form = styled.form`
    width: 500px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    border: 1px solid #e5e5e5;
`

const FormWrapper = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
`

const FormColumn1 = styled.div`
    width: 250px;
    height: 90x;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
`;

const LoginButton = styled.button`
    outline: none;
    border: none;
    box-sizing: border-box;
    width: 90px;
    height: 90px;
    background-color: #5dade2  ;
    border-radius: 0.25rem;;
    text-align: center;
    color: #fff;
    font-size: 15px;
    &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:hover {
        background-color: #9acced;
    }
    &:active {
        background-color: #3498db
    }
`;

const Title = styled.div`
    font-size: 35px;
    margin-top: 30px;
    margin-bottom: 30px;
    color: #2e2e2e;
    box-sizing: border-box;
    white-space: nowrap;
`;

const Description = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const P1 = styled.p`
    color: #454545;
    margin-bottom: 5px;
    box-sizing: border-box;
    white-space: nowrap;
`;

const Input = styled.input`
    outline: none;
    border: none;
    box-sizing: border-box;
    border: ${props => props.theme.boxBorder};
    background-color: white;
    height: 40px;
    font-size: 12px;
    padding: 0px 15px;
`;

const Explain = styled.ul`
    width: 350px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px 40px 0 40px;
`;

const Li = styled.li`
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`;

const P2 = styled.p`
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #454545;
`;

const DefaultButton = styled.button`
    outline: none;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    width: 120px;
    height: 30px;
    background-color: #fafafa;
    border-radius: 5px;
    text-align: center;
    color: #454545;
    font-size: 10px;
    &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:hover {
        border-color: #a0a0a0	;
    }
    &:active {
        background-color: #a0a0a0
    }
`;

export default function SignInPresenter() {
    return (
        <Layout>
            <SignInPresenterWrapper>
                <Title>로그인</Title>
                <Description>
                    <P1>GachiTrip의 회원이 되시면 보다 다양한 서비스를 제공 받으실 수 있습니다.</P1>
                    <P1>회원님께서 가입하신 아이디와 비밀번호를 입력해 주세요.</P1>
                </Description>
                <Form>
                    <FormWrapper>
                        <FormColumn1>
                            <Input type="text" placeholder="이메일 형식으로 입력해 주세요." />
                            <div style={{ height: "10px" }} />
                            <Input type="password" placeholder="비밀번호를 입력해 주세요." id="" />
                        </FormColumn1>
                        <LoginButton>로그인</LoginButton>
                    </FormWrapper>
                </Form>
                <Explain>
                    <Li><P2>아이디/비밀번호가 생각나지 않으세요?</P2> <DefaultButton>아이디/비밀번호 찾기</DefaultButton></Li>
                    <Li><P2>아직 회원이 아니세요?</P2> <DefaultButton>회원가입하기</DefaultButton></Li>
                </Explain>



            </SignInPresenterWrapper>
        </Layout >
    )
}
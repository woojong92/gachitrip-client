import React from "react";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

const SignUpPresenterWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 20px auto;
`;

const Form = styled.form`
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 auto;
    margin: 0 auto;
`

const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 40px 20px 40px;
    background: #fafafa;
    border: 1px solid #e5e5e5;
`


const SignUpButton = styled.button`
    outline: none;
    border: none;
    box-sizing: border-box;
    width: 120px;
    height: 45px;
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
`;

const Description = styled.div`
    margin-bottom: 10px;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const P1 = styled.p`
    color: #454545;
    margin-bottom: 5px;
`;

const InputBox = styled.div`
    width: 350px;
`;

const Input = styled.input`
    outline: none;
    box-sizing: border-box;
    border: ${props => props.theme.boxBorder};
    background-color: white;
    height: 40px;
    width: 100%;
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
    align-items: center;
    margin: 10px;
`;

const P2 = styled.p`
    font-size: 12px;
    display: flex;
    box-sizing: border-box;
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

export default function SignUpPresenter() {
    return (
        <Layout>
            <SignUpPresenterWrapper>
                <Title>회원가입</Title>
                <Description>
                    <P1>GachiTrip의 회원이 되시면 보다 다양한 서비스를 제공 받으실 수 있습니다.</P1>
                </Description>
                <Description>
                    <br />
                    • 회원가입을 위해서는 이메일 인증이 필요합니다.<br />
                    • 아래 정보를 입력한 후 가입하기 버튼을 클릭하면 인증 메일이 발송됩니다.<br />
                    • 본인 이메일로 접속하여 인증한 후 로그인하면 GachiTrip 회원 가입이 완료됩니다.<br /><br />
                </Description>

                <Form>

                    <FormWrapper>
                        <Li><P2>이메일</P2><InputBox><Input type="text" placeholder="이메일 형식(주로 이용하는 이메일 사용을 권장)." /></InputBox></Li>
                        <Li><P2>이름</P2><InputBox><Input type="text" placeholder="이름" /></InputBox></Li>
                        <Li><P2>생년월일</P2><InputBox><Input type="text" placeholder="1992/04/29" /></InputBox></Li>
                        <Li><P2>성별</P2><InputBox><input type="checkbox" />남자<input type="checkbox" />여자</InputBox></Li>
                        <Li><P2>닉네임</P2><InputBox><Input type="text" placeholder="한글 10자 이내, 영문 20자 이내" /></InputBox></Li>
                        <Li><P2>비밀번호</P2><InputBox><Input type="text" placeholder="영문자/숫자/특수문자 혼용 8자이상 16자 이하" /></InputBox></Li>
                        <Li><P2>비밀번호 확인</P2><InputBox><Input type="text" placeholder="영문자/숫자/특수문자 혼용 8자이상 16자 이하" /></InputBox></Li>
                    </FormWrapper><br />

                    <div>
                        <input type="checkbox" /> 전체동의<br />
                        <input type="checkbox" /> 이용약관 동의(필수)
                        <input type="checkbox" /> 개인정보 수집, 이용에 대한 동의(필수)
                        <input type="checkbox" /> 이메일을 통한 여행 안내 동의(선택)
                        <input type="checkbox" /> 이메일을 통한 여행 안내 동의(선택)
                        <div style={{ margin: "20px" }}></div>
                    </div>
                    <SignUpButton>회원가입</SignUpButton>


                </Form>


            </SignUpPresenterWrapper>
        </Layout >
    )
}
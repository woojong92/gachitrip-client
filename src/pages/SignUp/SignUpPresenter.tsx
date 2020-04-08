import React from "react";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import Button from "../../components/Button";


const Wrapper = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Title = styled.div`
    flex: none;
    font-size: 35px;
    margin: 30px auto;
    color: #2e2e2e;
    box-sizing: border-box;
`;

const Description = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DescriptionItem = styled.div`
    flex: none;
    color: #454545;
    margin-bottom: 5px;
    box-sizing: border-box;
    /* white-space: nowrap; */
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    border: 1px solid #e5e5e5;
    padding: 20px 80px;
`;

const FormBoxRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const FormBoxCol = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const FormBoxItem = styled.div`
    flex: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 50px;
    margin: 5px auto;
`;

const FormBoxItemTitle = styled.div`
    flex: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Noto', cursive;
    font-size: 13px;
    color: #2e2e2e;
`;

const FormBoxItemInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 350px;
    height: 40px;
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
    width: 100%;
    font-size: 12px;
    padding: 0px 15px;
`;

const Asterisk = styled.div`
    font-size: 13px;
    color: red;
    margin: 2px;
`;

const TermsWrapper = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
`;

const TermsRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 5px 0;
`;

const TermsRowItem = styled.div`
    margin-right: 10px;
`;

const TermsText = styled.text`
    font-size: 12px;
    color: #454545;
`;

export default function SignUpPresenter() {
    return (
        <Layout>
            <Wrapper>
                <Title>회원가입</Title>
                <Description>
                    <DescriptionItem>GachiTrip의 회원이 되시면 보다 다양한 서비스를 제공 받으실 수 있습니다.</DescriptionItem>
                </Description>
                <div style={{width: "650px", borderBottom: "1px solid #e5e5e5"}} />
                <Description>
                    <br />
                    • 회원가입을 위해서는 이메일 인증이 필요합니다.<br />
                    • 아래 정보를 입력한 후 가입하기 버튼을 클릭하면 인증 메일이 발송됩니다.<br />
                    • 본인 이메일로 접속하여 인증한 후 로그인하면 GachiTrip 회원 가입이 완료됩니다.<br /><br />
                </Description>
                <FormWrapper>
                    <FormBox>
                        <FormBoxItem>
                            <FormBoxItemTitle>이메일<Asterisk>*</Asterisk></FormBoxItemTitle>
                            <FormBoxItemInputWrapper>
                                <Input type="text" placeholder="이메일 형식(주로 이용하는 이메일 사용을 권장)으로 입력해 주세요." />
                            </FormBoxItemInputWrapper>
                        </FormBoxItem>
                        <FormBoxItem>
                            <FormBoxItemTitle>닉네임<Asterisk>*</Asterisk></FormBoxItemTitle>
                            <FormBoxItemInputWrapper>
                                <Input type="password" placeholder="한글 10자 이내, 영문 20자 이내" />
                            </FormBoxItemInputWrapper>
                        </FormBoxItem>
                        <FormBoxItem>
                            <FormBoxItemTitle>비밀번호<Asterisk>*</Asterisk></FormBoxItemTitle>
                            <FormBoxItemInputWrapper>
                                <Input type="password" placeholder="영문자/숫자/특수문자 혼용 8자이상 16자 이하" />
                            </FormBoxItemInputWrapper>
                        </FormBoxItem>
                        <FormBoxItem>
                            <FormBoxItemTitle>비밀번호 확인<Asterisk>*</Asterisk></FormBoxItemTitle>
                            <FormBoxItemInputWrapper>
                                <Input type="password" placeholder="영문자/숫자/특수문자 혼용 8자이상 16자 이하" />
                            </FormBoxItemInputWrapper>
                        </FormBoxItem>
                    </FormBox>
                    
                    <TermsWrapper>

                    <TermsRow>
                        <input type="checkbox" /> <TermsText>전체동의</TermsText><br />
                    </TermsRow>
                    <div style={{width: "600px", borderBottom: "1px solid #e5e5e5", margin: "10px auto"}} />

                    <TermsRow>
                       <TermsRowItem> <input type="checkbox" /> <TermsText>이용약관 동의(필수)</TermsText> </TermsRowItem>
                        <TermsRowItem><input type="checkbox" /> <TermsText>개인정보 수집, 이용에 대한 동의(필수)</TermsText></TermsRowItem><br/>
                    </TermsRow>

                    <TermsRow>
                        <input type="checkbox" /> <TermsText>이메일을 통한 여행 안내 동의(선택)</TermsText>
                    </TermsRow>

                    </TermsWrapper>

                    <Button>회원가입</Button>
                    <div style={{ margin: "20px" }}></div>

                </FormWrapper>
            </Wrapper>
        </Layout >

    )
}

// <SignUpPresenterWrapper>
// <Title>회원가입</Title>
// <Description>
//     <P1>GachiTrip의 회원이 되시면 보다 다양한 서비스를 제공 받으실 수 있습니다.</P1>
// </Description>
// <Description>
//     <br />
//     • 회원가입을 위해서는 이메일 인증이 필요합니다.<br />
//     • 아래 정보를 입력한 후 가입하기 버튼을 클릭하면 인증 메일이 발송됩니다.<br />
//     • 본인 이메일로 접속하여 인증한 후 로그인하면 GachiTrip 회원 가입이 완료됩니다.<br /><br />
// </Description>

// <Form>

//     <FormWrapper>
//         <Li><P2>이메일</P2><InputBox><Input type="text" placeholder="이메일 형식(주로 이용하는 이메일 사용을 권장)." /></InputBox></Li>
//         <Li><P2>이름</P2><InputBox><Input type="text" placeholder="이름" /></InputBox></Li>
//         <Li><P2>생년월일</P2><InputBox><Input type="text" placeholder="1992/04/29" /></InputBox></Li>
//         <Li><P2>성별</P2><InputBox><input type="checkbox" />남자<input type="checkbox" />여자</InputBox></Li>
//         <Li><P2>닉네임</P2><InputBox><Input type="text" placeholder="한글 10자 이내, 영문 20자 이내" /></InputBox></Li>
//         <Li><P2>비밀번호</P2><InputBox><Input type="text" placeholder="영문자/숫자/특수문자 혼용 8자이상 16자 이하" /></InputBox></Li>
//         <Li><P2>비밀번호 확인</P2><InputBox><Input type="text" placeholder="영문자/숫자/특수문자 혼용 8자이상 16자 이하" /></InputBox></Li>
//     </FormWrapper><br />

//     <div>
//         <input type="checkbox" /> 전체동의<br />
//         <input type="checkbox" /> 이용약관 동의(필수)
//         <input type="checkbox" /> 개인정보 수집, 이용에 대한 동의(필수)
//         <input type="checkbox" /> 이메일을 통한 여행 안내 동의(선택)
//         <input type="checkbox" /> 이메일을 통한 여행 안내 동의(선택)
//         <div style={{ margin: "20px" }}></div>
//     </div>
//     <SignUpButton>회원가입</SignUpButton>


// </Form>


// </SignUpPresenterWrapper>

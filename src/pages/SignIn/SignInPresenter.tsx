import React from "react";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import { css } from "@emotion/core";


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
    padding: 20px 40px;
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
    width: 350px;
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
    width: 280px;
    height: 40px;
`;

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
    width: 100px;
    height: 100px;
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
    /* &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    } */
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
            <Wrapper>
                <Title>로그인</Title>
                <Description>
                    <DescriptionItem>GachiTrip의 회원이 되시면 보다 다양한 서비스를 제공 받으실 수 있습니다.</DescriptionItem>
                    <DescriptionItem>회원님께서 가입하신 아이디와 비밀번호를 입력해 주세요.</DescriptionItem>
                </Description>
                <FormWrapper>
                    <FormBox>
                        <FormBoxRow>

                            <FormBoxCol>
                                <FormBoxItem>
                                    <FormBoxItemTitle>이메일</FormBoxItemTitle>
                                    <FormBoxItemInputWrapper>
                                        <Input type="text" placeholder="이메일 형식으로 입력해 주세요." />
                                    </FormBoxItemInputWrapper>
                                </FormBoxItem>
                                <FormBoxItem>
                                    <FormBoxItemTitle>비밀번호</FormBoxItemTitle>
                                    <FormBoxItemInputWrapper>
                                        <Input type="password" placeholder="비밀번호를 입력해 주세요." />
                                    </FormBoxItemInputWrapper>
                                </FormBoxItem>
                            </FormBoxCol>

                            <FormBoxCol>
                                <LoginButton>로그인</LoginButton>
                            </FormBoxCol>

                        </FormBoxRow>
                    </FormBox>
                </FormWrapper>

                <Explain>
                    <Li><P2>아이디/비밀번호가 생각나지 않으세요?</P2> <DefaultButton>아이디/비밀번호 찾기</DefaultButton></Li>
                    <Li><P2>아직 회원이 아니세요?</P2> <DefaultButton>회원가입하기</DefaultButton></Li>
                </Explain>
            </Wrapper>
        </Layout >
    )
}

// <SignInPresenterWrapper>
// <Title>로그인</Title>
// <Description>
//     <P1>GachiTrip의 회원이 되시면 보다 다양한 서비스를 제공 받으실 수 있습니다.</P1>
//     <P1>회원님께서 가입하신 아이디와 비밀번호를 입력해 주세요.</P1>
// </Description>
// <Form>
//     <FormWrapper>
//         <FormColumn1>
//             <Input type="text" placeholder="이메일 형식으로 입력해 주세요." />
//             <div style={{ height: "10px" }} />
//             <Input type="password" placeholder="비밀번호를 입력해 주세요." id="" />
//         </FormColumn1>
//         <LoginButton>로그인</LoginButton>
//     </FormWrapper>
// </Form>
// <Explain>
//     <Li><P2>아이디/비밀번호가 생각나지 않으세요?</P2> <DefaultButton>아이디/비밀번호 찾기</DefaultButton></Li>
//     <Li><P2>아직 회원이 아니세요?</P2> <DefaultButton>회원가입하기</DefaultButton></Li>
// </Explain>



// </SignInPresenterWrapper>
// import Layout from "../../components/Layout";
import styled from "@emotion/styled";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: blue;
    overflow: auto;
`;

const Header = styled.header`
    display: flex;
    flex-direction: row;
    height: 65px;
    background-color: green;
`;

const HeaderItem = styled.div`
    flex: none;
`;

const HeaderLeft = styled.div`
    margin-left: auto;
    background-color: yellowgreen;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: red;
`;

const Aside = styled.div`
  width: 400px;
  height: 100%;
  background-color: blue;  
`;

const AsideItem = styled.div`
    height: 600px;
    padding : 10px;
    background-color: brown;
`;

const Main = styled.div`
    flex: 1;
    background-color: pink ;
`;

const Footer = styled.footer`
    height: 100px;
    background-color: yellow;
    margin-top: auto;
`;

export default function () {
    return (
        <Layout>
            <Header>
                <HeaderItem>로고 </HeaderItem>
                <HeaderItem>서치바</HeaderItem>
                <HeaderLeft><HeaderItem>로그인</HeaderItem></HeaderLeft>
            </Header>

            <Content>
                <Aside></Aside>
                <Main></Main>
            </Content>

            <Footer>ggg</Footer>
        </Layout>
    )
}




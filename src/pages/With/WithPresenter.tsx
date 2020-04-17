/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react"
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ItemsCarousel from 'react-items-carousel';
import Router from 'next/router'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    background-color: #fafafa;
`;

const MainWrapper = styled.div`
    width: 992px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;
    background-color: red;
`;

const ItemTitle = styled.div`
    font-size: 20px;
    margin: 15px;
`;

const CarouselWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const CarouselItem = styled.div`
    height: 160px;
    background-color: #EEE; 
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 20px auto;
`;

const SearchInput = styled.input`
    outline: none;
    border: none;
    box-sizing: border-box;
    border: ${props => props.theme.boxBorder};
    background-color: white;
    height: 40px;
    font-size: 12px;
    padding: 0px 15px;
    margin: auto 10px;
`;

const SeachButton = styled.button`
  outline: none;
  border: none;
  box-sizing: border-box;
  white-space: nowrap;
  height: 40px;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: skyblue;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
   &:hover {
    background: #1a1a8d;
  }
  &:active {
    background: #000066;
  } 
`;

const SearchBoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color: yellow;
`;

const Input = styled.input`
    outline: none;
    border: none;
    box-sizing: border-box;
    border: ${props => props.theme.boxBorder};
    border-radius: 0.25rem;
    background-color: white;
    height: 40px;
    width: 500px;
    font-size: 12px;
    padding: 0px 15px;
`;

const LeftCircleButton = styled(LeftOutlined)`
    color: #5c5c5c;
    font-size: 25px;
`;

const RightCircleButton = styled(RightOutlined)`
    color: #5c5c5c;
    font-size: 25px;
`;

// const WithSerchBox = () => {
//     return (


//     )
// }

type SubInfoArgs = {
    username: string,
    createdAt: any,
}

const SubInfo = ({ username }) => {
    return (
        <>
            <p>{username}</p>

        </>
    )
}

const Tags = ({ tags }) => {
    //const tags = ["태그1", "태그2", "태그3"];
    return (
        <div>
            {
                tags.map(tag => (
                    <div onClick={() => (Router.push(`/?tag=${tag}`))} key={tag}>
                        #{tag}
                    </div>
                ))
            }
        </div>
    )
}

const WithList = () => {
    return (
        <div>
            <h2>제목</h2>
            <SubInfo username={"gggg"} />
            <Tags tags={["a", "b", "c"]} />
            <p>글 내용의 일부분</p>
        </div>
    )
}

export default function () {

    return (
        <Layout>
            <Wrapper>
                <MainWrapper>

                    <ItemsWrapper>
                        <SearchBoxWrapper>
                            <SearchBox></SearchBox>
                        </SearchBoxWrapper>
                    </ItemsWrapper>

                    <ItemsWrapper>
                        <WithList />
                        <WithList />
                        <WithList />
                    </ItemsWrapper>


                </MainWrapper>
            </Wrapper>
        </Layout >
    )
}



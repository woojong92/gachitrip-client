/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react"
import Layout from "../../components/Layout";
import styled from "@emotion/styled";

import ItemsCarousel from 'react-items-carousel';


const FollwingContent = styled.div`
    width: 300px;
    height: 400px;
    background-color: green;
`;



const ItemCarousel = styled.div`
 height: 100px;
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


export default function () {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    const onClick = () => {
        console.log('onclick');
    }
    return (
        <Layout>
            <SearchContainer>
                어디 가고 싶나요? <SearchInput type="text" /><SeachButton>검색</SeachButton>
            </SearchContainer>

            <div style={{
                padding: "0 40px",
                maxWidth: "400px",
                margin: "0 auto",
            }}>
                <ItemsCarousel
                    infiniteLoop
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={'<'}
                    rightChevron={'>'}
                    outsideChevron
                    chevronWidth={60}
                >
                    <ItemCarousel onClick={onClick}>1 card</ItemCarousel>
                    <ItemCarousel>2 card</ItemCarousel>
                    <ItemCarousel>3 card</ItemCarousel>
                    <ItemCarousel>4 card</ItemCarousel>
                    <ItemCarousel>5 card</ItemCarousel>
                </ItemsCarousel>
            </div>

            <div>나의 관심 게시판</div>

            <div style={{
                borderRadius: "15px",
                height: "270px",
                border: "1px solid #e5e5e5",
                padding: "10px",
            }}>
                <ul style={{
                    width: "300px",
                    height: "100%",
                }}>
                    <li style={{
                        width: "300px",
                        display: "inline-flex",
                        boxSizing: "border-box",
                        maxWidth: "100%"
                    }}>
                        <div style={{
                            display: "inline-flex",
                            boxSizing: "border-box",
                            backgroundColor: "white",
                            whiteSpace: "nowrap",
                            marginRight: "10px"
                        }}> 국내여행 </div>
                        <div style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }}> 코로나 때문에 어디 나가질.sdfasfdsfdassdfasdfasdfdfasdfsdfsfㅁㄴ</div>
                    </li>
                </ul>
            </div>

            <div>인기 게시판</div>



            <div>최신글</div>
            <br />
            <div> 댓글 | 좋아요 | 글제목 </div>
            <div>  1 | 30 | 이번 ........  </div>
            <div> #유럽여행 #파리 #몽마르트언덕 </div>

        </Layout >
    )
}
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react"
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ItemsCarousel from 'react-items-carousel';
import Router from 'next/router'
import CommunityHeader from "../../components/community/CommunityHeader";
import ListItem from "../../components/community/ListItem";
import { media } from '../../lib/style-utils';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    background-color: #fafafa;
`;


const MainWrapper = styled.div`
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const ItemsWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin: 20px 0; */
    /* background-color: red; */
`;

const ItemTitle = styled.div`
    /* width: 100%; */
    font-size: 20px;
    margin: 15px;
    text-align: left;
`;

const CarouselWrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 20px auto;
`;

const CarouselItem = styled.div`
    height:90%;
    width: 90%;
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
    const [activeItemIndexA, setActiveItemIndexA] = useState(0);
    const [activeItemIndexB, setActiveItemIndexB] = useState(0);
    const [activeItemIndexC, setActiveItemIndexC] = useState(0);
    const chevronWidth = 40;
    const onClick = () => {
        console.log('gggg')
        const tag = '유럽';
        Router.push(
            {
                pathname: '/Community/CommunityTags',
                query: { tags: tag },
            }
            // '/Community/[CommunityTags]'
            , `/Community/#${tag}`
        )
    }

    const [selected, setSelected] = useState("국내")
    return (
        <Layout>
            <Wrapper>
                <MainWrapper>
                    <CommunityHeader />

                    <Box>
                        <BoxItemList><BoxItem><Item>태그1</Item></BoxItem></BoxItemList>
                        <BoxItemList><BoxItem><Item>태그2</Item></BoxItem></BoxItemList>
                        <BoxItemList><BoxItem><Item>태그3</Item></BoxItem></BoxItemList>
                        <BoxItemList><BoxItem><Item>태그4</Item></BoxItem></BoxItemList>
                    </Box>

                    <ListItem onClick={onClick} />
                    <ListItem onClick={onClick} />
                </MainWrapper>
            </Wrapper>
        </Layout >
    )
}

const Box = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 5px;
`;

const BoxItemList = styled.div`
    flex-basis: 33.33%;
    display: flex;
    ${media.mobile`
        flex-basis: 50%;
    `}
`;

const BoxItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    display: flex;
    flex: auto;
    padding: 5px;
`;

const Item = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
`;



// <ItemsWrapper>
// <ItemTitle>인기 국내 게시판</ItemTitle>
// <CarouselWrapper>
//     <ItemsCarousel
//         infiniteLoop
//         requestToChangeActive={setActiveItemIndexA}
//         activeItemIndex={activeItemIndexA}
//         activePosition={"center"}
//         numberOfCards={5}
//         gutter={20}
//         leftChevron={<LeftCircleButton />}
//         rightChevron={<RightCircleButton />}
//         // outsideChevron
//         chevronWidth={40}
//     >
//         <CarouselItem onClick={() => (Router.push(`/?tag=gg`))}>#서울</CarouselItem>
//         <CarouselItem>#제주</CarouselItem>
//         <CarouselItem>#강릉</CarouselItem>
//         <CarouselItem>#부산</CarouselItem>
//         <CarouselItem>#경주</CarouselItem>
//     </ItemsCarousel>
// </CarouselWrapper>
// </ItemsWrapper>

// <ItemsWrapper>
// <ItemTitle>인기 해외 게시판</ItemTitle>
// <CarouselWrapper>
//     <ItemsCarousel
//         infiniteLoop
//         requestToChangeActive={setActiveItemIndexB}
//         activeItemIndex={activeItemIndexB}
//         activePosition={"center"}
//         numberOfCards={5}
//         gutter={20}
//         leftChevron={<LeftCircleButton />}
//         rightChevron={<RightCircleButton />}
//         // outsideChevron
//         chevronWidth={40}
//     >
//         <CarouselItem onClick={onClick}>#파리</CarouselItem>
//         <CarouselItem>#런던</CarouselItem>
//         <CarouselItem>#세부</CarouselItem>
//         <CarouselItem>#몽골</CarouselItem>
//         <CarouselItem>#아이슬란드</CarouselItem>
//     </ItemsCarousel>
// </CarouselWrapper>
// </ItemsWrapper>

// <ItemsWrapper>
// <ItemTitle>인기 레저 게시판</ItemTitle>
// <CarouselWrapper>
//     <ItemsCarousel
//         infiniteLoop
//         requestToChangeActive={setActiveItemIndexC}
//         activeItemIndex={activeItemIndexC}
//         activePosition={"center"}
//         numberOfCards={5}
//         gutter={20}
//         leftChevron={<LeftCircleButton />}
//         rightChevron={<RightCircleButton />}
//         // outsideChevron
//         chevronWidth={40}
//     >
//         <CarouselItem onClick={onClick}>#스쿠버다이빙</CarouselItem>
//         <CarouselItem>#프리다이빙</CarouselItem>
//         <CarouselItem>#서핑</CarouselItem>
//         <CarouselItem>#스노우보드</CarouselItem>
//         <CarouselItem>#패러글라이딩</CarouselItem>
//     </ItemsCarousel>
// </CarouselWrapper>
// </ItemsWrapper>
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from 'next/link';

import React from "react";
import styled from "@emotion/styled";
import Layout from "../../components/Layout";

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
    /* background-color: purple; */
`;

const MainBannerWrapper = styled.div`
    width: 90%;
    /* min-Width: 780px; */
    height: 250px;
    margin-top: 20px;
`;

const MainItemsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    /* min-Width: 780px; */
    margin-top: 20px;
    /* background-color: yellow; */
    justify-content: space-between;
    align-content: space-between;
`;

const MainItemWrapper = styled.div`
    border-radius: 15px;
    width: 100%;
    height: 350px;
    border: 1px solid #e5e5e5;
    margin-bottom: 20px;
    background-color: #fff;
`;

const MainItemTitle = styled.div`
    font-size: 20px;
    margin: 15px;
`;

const MainItemList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
`;

const MainItemListRow = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    margin: 3px;
`;

const MainItemListContent = styled.div`
  font-size: 15px;
  color: #000;
`;

const MainItmeListTime = styled.div`
    font-size: 10px;
    color: red;
`;


export default function HomePresenter() {
    return (
        <Layout>
            <Wrapper>
                <MainWrapper>
                    <MainBannerWrapper>
                        <img className="banner"
                            src="https://tourimage.interpark.com/Sites/Tour/Event/Main/637115075182884588.jpg"
                            css={{
                                borderRadius: "15px",
                                backgroundColor: "teal",
                                width: "100%",
                                height: "250px",
                                marginBottom: "15px",
                            }}
                        />
                    </MainBannerWrapper>

                    <MainItemsWrapper>

                        <MainItemWrapper>

                            <MainItemTitle>🚀최신 게시글</MainItemTitle>

                            <MainItemList>
                                <MainItemListRow>
                                    <MainItemListContent>aaaa</MainItemListContent>
                                    <MainItmeListTime>지금</MainItmeListTime>
                                </MainItemListRow>
                                <MainItemListRow>
                                    <MainItemListContent>aaaa</MainItemListContent>
                                    <MainItmeListTime>지금</MainItmeListTime>
                                </MainItemListRow>
                                <MainItemListRow>
                                    <MainItemListContent>aaaa</MainItemListContent>
                                    <MainItmeListTime>지금</MainItmeListTime>
                                </MainItemListRow>
                                <MainItemListRow>
                                    <MainItemListContent>aaaa</MainItemListContent>
                                    <MainItmeListTime>지금</MainItmeListTime>
                                </MainItemListRow>
                            </MainItemList>
                        </MainItemWrapper>

                        <MainItemWrapper>
                            <MainItemTitle>🔥인기 게시글</MainItemTitle>
                        </MainItemWrapper>

                        <MainItemWrapper>
                            <MainItemTitle>🤩같이 여행 갈래?</MainItemTitle>
                        </MainItemWrapper>

                        <MainItemWrapper>
                            <MainItemTitle>👑인기 여행후기</MainItemTitle>
                        </MainItemWrapper>

                    </MainItemsWrapper>

                    <MainItemsWrapper></MainItemsWrapper>
                </MainWrapper>
            </Wrapper>
        </Layout>
    )
}

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from 'next/link';

import React from "react";
import styled from "@emotion/styled";

const DashBoard = styled.div`
    width: 100%;
    min-height: 860px;
`;

const DashBoardWrapper = styled.div`
    padding-top: 20px;
`;

const DashBoardItem = styled.div`
    margin-bottom: 20px;
`;


export default function Container() {
    return (
        <DashBoard>
            <DashBoardWrapper>
                <DashBoardItem>
                    <img className="banner"
                        src="https://tourimage.interpark.com/Sites/Tour/Event/Main/637115075182884588.jpg"
                        css={{
                            borderRadius: "15px",
                            backgroundColor: "teal",
                            width: "100%",
                            height: "250px",
                            marginBottom: "15px",
                        }} />
                </DashBoardItem>
                <div css={{ display: "flex", flexDirection: "row", justifyContent: "between-space" }}>
                    <div className="contentSession" css={{ marginBottom: "15px", width: "50%", marginRight: "10px" }}>
                        <div css={{
                            fontSize: "20px",
                            marginBottom: "15px",
                        }}>🚀최신글</div>

                        <div css={{
                            borderRadius: "15px",
                            height: "250px",
                            border: "1px solid #e5e5e5"
                        }}>
                            <ul>
                                <li css={{ display: "flex", flexDirection: "row" }}><div>#자유게시판  </div><div>11111111111</div></li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                            </ul>
                        </div>
                    </div>

                    <div className="contentSession" css={{ marginBottom: "15px", width: "50%" }}>
                        <div css={{
                            fontSize: "20px",
                            marginBottom: "15px",
                        }}>🔥인기글</div>

                        <div css={{
                            borderRadius: "15px",
                            height: "250px",
                            border: "1px solid #e5e5e5"
                        }}>
                        </div>
                    </div>
                </div>

                <div css={{ display: "flex", flexDirection: "row", justifyContent: "between-space" }}>
                    <div className="contentSession" css={{ marginBottom: "15px", width: "50%", marginRight: "10px" }}>
                        <div css={{
                            fontSize: "20px",
                            marginBottom: "15px",
                        }}>🤩같이 여행 갈래?</div>

                        <div css={{
                            borderRadius: "15px",
                            height: "250px",
                            border: "1px solid #e5e5e5"
                        }}>
                        </div>
                    </div>

                    <div className="contentSession" css={{ marginBottom: "15px", width: "50%" }}>
                        <div css={{
                            fontSize: "20px",
                            marginBottom: "15px",
                        }}>👑인기 트래블러</div>

                        <div css={{
                            borderRadius: "15px",
                            height: "250px",
                            border: "1px solid #e5e5e5"
                        }}>
                        </div>
                    </div>
                </div>



                <div className="contentSession" css={{ marginBottom: "15px", width: "100%" }}>
                    <div css={{
                        fontSize: "20px",
                        marginBottom: "15px",
                    }}>컨텐츠</div>
                    <div css={{ display: "flex", flexDirection: "row" }}>
                        <div css={{
                            borderRadius: "15px",
                            height: "200px",
                            width: "200px",
                            border: "1px solid #e5e5e5",
                            marginRight: "15px"
                        }} />
                        <div css={{
                            borderRadius: "15px",
                            height: "200px",
                            width: "200px",
                            border: "1px solid #e5e5e5",
                            marginRight: "15px"
                        }} />
                        <div css={{
                            borderRadius: "15px",
                            height: "200px",
                            width: "200px",
                            border: "1px solid #e5e5e5",
                            marginRight: "15px"
                        }} />
                    </div>
                </div>
            </DashBoardWrapper>
        </DashBoard>
    )
}


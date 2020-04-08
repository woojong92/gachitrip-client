/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from 'next/link';

import React from "react";
import styled from "@emotion/styled";
import Layout from "../../components/Layout";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: green;
`;

const LeftSideWrapper = styled.div`
    flex: 1;
    background-color: pink;
`;
const MainWrapper = styled.div`
    flex: 0 1 auto;
    width: 700px;
    background-color: purple;
`;
const RightSideWrapper = styled.div`
    flex: 1;
    background-color: yellow;
`;

export default function HomePresenter() {
    return (
        <Layout>
            <Wrapper>

            </Wrapper>
        </Layout>
    )
}

// <DashBoard>
// <DashBoardWrapper>
//     <DashBoardItem>
//         <img className="banner"
//             src="https://tourimage.interpark.com/Sites/Tour/Event/Main/637115075182884588.jpg"
//             css={{
//                 borderRadius: "15px",
//                 backgroundColor: "teal",
//                 width: "100%",
//                 height: "250px",
//                 marginBottom: "15px",
//             }} />
//     </DashBoardItem>

//     <div css={{ display: "flex", flexDirection: "row", justifyContent: "between-space" }}>
//         <div className="contentSession" css={{ marginBottom: "15px", width: "50%", marginRight: "10px" }}>
//             <div css={{
//                 fontSize: "20px",
//                 marginBottom: "15px",
//             }}>🚀최신글</div>

//             <div css={{
//                 borderRadius: "15px",
//                 height: "270px",
//                 border: "1px solid #e5e5e5",
//                 padding: "10px",
//             }}>
//                 <ul css={{
//                     width: "300px",
//                     height: "100%",
//                 }}>
//                     <li css={{
//                         width: "300px",
//                         display: "inline-flex",
//                         boxSizing: "border-box",
//                         maxWidth: "100%"
//                     }}>
//                         <div css={{
//                             display: "inline-flex",
//                             boxSizing: "border-box",
//                             backgroundColor: "white",
//                             whiteSpace: "nowrap",
//                             marginRight: "10px"
//                         }}> 국내여행 </div>
//                         <div css={{
//                             overflow: "hidden",
//                             textOverflow: "ellipsis",
//                             whiteSpace: "nowrap"
//                         }}> 코로나 때문에 어디 나가질.sdfasfdsfdassdfasdfasdfdfasdfsdfsfㅁㄴ</div>
//                     </li>

//                 </ul>
//             </div>
//         </div>

//         <div className="contentSession" css={{ marginBottom: "15px", width: "50%" }}>
//             <div css={{
//                 fontSize: "20px",
//                 marginBottom: "15px",
//             }}>🔥인기글</div>

//             <div css={{
//                 borderRadius: "15px",
//                 height: "250px",
//                 border: "1px solid #e5e5e5"
//             }}>
//             </div>
//         </div>
//     </div>

//     <div css={{ display: "flex", flexDirection: "row", justifyContent: "between-space" }}>
//         <div className="contentSession" css={{ marginBottom: "15px", width: "50%", marginRight: "10px" }}>
//             <div css={{
//                 fontSize: "20px",
//                 marginBottom: "15px",
//             }}>🤩같이 여행 갈래?</div>

//             <div css={{
//                 borderRadius: "15px",
//                 height: "250px",
//                 border: "1px solid #e5e5e5"
//             }}>
//             </div>
//         </div>

//         <div className="contentSession" css={{ marginBottom: "15px", width: "50%" }}>
//             <div css={{
//                 fontSize: "20px",
//                 marginBottom: "15px",
//             }}>👑인기 트래블러</div>

//             <div css={{
//                 borderRadius: "15px",
//                 height: "250px",
//                 border: "1px solid #e5e5e5"
//             }}>
//             </div>
//         </div>
//     </div>



//     <div className="contentSession" css={{ marginBottom: "15px", width: "100%" }}>
//         <div css={{
//             fontSize: "20px",
//             marginBottom: "15px",
//         }}>컨텐츠</div>
//         <div css={{ display: "flex", flexDirection: "row" }}>
//             <div css={{
//                 borderRadius: "15px",
//                 height: "200px",
//                 width: "200px",
//                 border: "1px solid #e5e5e5",
//                 marginRight: "15px"
//             }} />
//             <div css={{
//                 borderRadius: "15px",
//                 height: "200px",
//                 width: "200px",
//                 border: "1px solid #e5e5e5",
//                 marginRight: "15px"
//             }} />
//             <div css={{
//                 borderRadius: "15px",
//                 height: "200px",
//                 width: "200px",
//                 border: "1px solid #e5e5e5",
//                 marginRight: "15px"
//             }} />
//         </div>
//     </div>
// </DashBoardWrapper>
// </DashBoard>
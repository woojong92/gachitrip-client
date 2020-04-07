/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Layout from "../../components/Layout";
import styled from "@emotion/styled";


const FollwingContent = styled.div`
    width: 300px;
    height: 400px;
    background-color: green;
`;

export default function () {
    return (
        <Layout>
            <div>
                <input type="text" /><button>검색</button>
                태그 검색?
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{
                    borderRadius: "15px",
                    height: "200px",
                    width: "200px",
                    border: "1px solid #e5e5e5",
                    marginRight: "15px"
                }} />
                <div style={{
                    borderRadius: "15px",
                    height: "200px",
                    width: "200px",
                    border: "1px solid #e5e5e5",
                    marginRight: "15px",
                }} />
                <div style={{
                    borderRadius: "15px",
                    height: "200px",
                    width: "200px",
                    border: "1px solid #e5e5e5",
                    marginRight: "15px"
                }} />
            </div>

            <div>#유럽 #국내 #파리 #세부일정</div>
            <div>이웃 새글</div>
            <FollwingContent>s</FollwingContent>

            <div>인기글</div>



            <div>최신글</div>
            <br />
            <div> 댓글 | 좋아요 | 글제목 </div>
            <div>  1 | 30 | 이번 ........  </div>
            <div> #유럽여행 #파리 #몽마르트언덕 </div>

        </Layout>
    )
}
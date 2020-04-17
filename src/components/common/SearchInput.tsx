import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

const SearchBoxWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

const SearchBox = styled.div`
    /* padding: 10px auto; */
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
`;


const Input = styled.input`
    outline: none;
    border: none;
    box-sizing: border-box;
    border: ${props => props.theme.boxBorder};
    border-radius: 10px;
    background-color: white;
    flex: auto;
    /* height: 50px;
    width: 100%; */
    font-size: 15px;
    padding: 0px 15px;
`;

function SearchInput() {
    return (
        <SearchBoxWrapper>
            <SearchBox>
                <Input placeholder="검색어를 입력해주세요." />
            </SearchBox>
        </SearchBoxWrapper>
    )
}

export default SearchInput;
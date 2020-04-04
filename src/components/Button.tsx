/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// import React from "react";
// import styled from "@emotion/styled";

// const Container = styled.button`
//     width: 100%;
//     border: 1px solid #fff;
//     border-radius: 15px;
//     color: #fff;
//     font-weight: 6000;
//     background-color: #000080;
//     text-align: center;
//     padding: 7px 0px;
//     font-size: 14px;
//     cursor: pointer;
// `;


export type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 버튼의 생김새를 설정 */
    theme: "primary" | "secondary" | "tertiary";
    /** 버튼의 크기 */
    size: "small" | "medium" | "big";
    /**  버튼의 길이 */
    width?: string | number;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, theme, size, width, onClick }: ButtonProps) {
    return (
        <button css={[style, themes[theme], sizes[size], { width }]} onClick={onClick}>
            {children}
        </button>
    )
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #000080;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  /* &:hover {
    background: #1a1a8d;
  }
  &:active {
    background: #000066;
  } */
`;

const themes = {
    primary: css`
        background-color: #000080;
        color: #fff;
        &:hover {
            background-color: #8080c0;
        }
        &:active {
            background-color: #000066;
        }
    `,
    secondary: css`
        background-color: #fff;
        color: #000080;
        border: 1.5px solid #000080;
        &:hover {
            color: #8080c0;
            border: 1.5px solid #8080c0;
        }
        &:active {
            color: #000066;
            border: 1.5px solid #000066
        }
    `,
    tertiary: css`

    `
};

const sizes = {
    small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
    medium: css`
    height: 2.0rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
    big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `
};


Button.defaultProps = {
    theme: "primary",
    size: "medium",
    onClick: () => console.log("click")
}

export default Button;

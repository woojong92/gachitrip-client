import React from "react";
import styled from "@emotion/styled";

const Container = styled.button`
    width: 100%;
    border: 1px solid #fff;
    border-radius: 15px;
    color: #fff;
    font-weight: 6000;
    background-color: #000080;
    text-align: center;
    padding: 7px 0px;
    font-size: 14px;
    cursor: pointer;
`;

type ButtonProps = {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => (
    <Container onClick={onClick} >{text}</Container>
);

Button.defaultProps = {
    text: "Button",
    onClick: () => console.log("click")
}

export default Button;

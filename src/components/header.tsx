/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Link from 'next/link';

const Header = styled.header`
    border-bottom: 1px solid rgba(0.0,0,0.75);
    box-shadow: 0 0 5px rgba(0,0,0,0.75);
    background: #fff;
`


export default function Container() {
    return (
        <Header>
            <div
                className="inner"
                css={{
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingRight: "20px",
                    paddingLeft: "20px"
                }}
            >
                <div className="left-group">left</div>
                <div className="center-group">center</div>
                <div className="rigth-group">right</div>
            </div>
        </Header>
    )
}
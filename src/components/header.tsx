/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from 'next/link';


function Header() {
    return (
        <header
            css={{
                borderBottom: "1px solid rgba(0.0,0,0.75)",
                boxShadow: "0 0 5px rgba(0,0,0,0.75)",
                background: "#fff"
            }}
        >
            <div
                className="inner"
                css={{
                    height: "50px",
                    backgroundColor: "skyblue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div>logo</div>
                <div>search</div>
                <ul css={{
                    display: "flex",
                    flexDirection: "row",

                }}>
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
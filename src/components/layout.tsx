import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import SideMenu from "./SideMenu";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from 'next/link';

import { ThemeProvider } from 'emotion-theming'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>GachiTrip</title>
            </Head>

            <Header />

            <main className="main" css={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                height: "100%",
                paddingLeft: "150px",
                paddingRight: "150px"
            }}>
                {children}
            </main>
            <Footer />
        </>
    )
}

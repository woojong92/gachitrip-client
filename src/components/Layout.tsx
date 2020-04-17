import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import SideMenu from "./SideMenu";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from 'next/link';

import { ThemeProvider } from 'emotion-theming'

const Warpper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

const Main = styled.div`
    display: flex;
    flex: 1;
`;

export default function Layout({ children }) {
    return (
        <Warpper>
            <Head>
                <title>GachiTrip</title>
            </Head>

            <Header />

            <Main>
                {children}
            </Main>

        </Warpper>
    )
}

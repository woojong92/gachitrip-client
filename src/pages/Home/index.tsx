import Link from "next/link";
import Head from 'next/head'
import * as React from "react";
import { withApollo } from '../../../lib/apollo'
import Layout from '../../components/Layout'
import { css } from '@emotion/core'
import SideMenu from "../../components/SideMenu";
import Dashboard from "../../components/Dashborad";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

function Home() {
    return (
        <Layout>
            <HomeWrapper>
                <Dashboard />
                <SideMenu />
            </HomeWrapper>
        </Layout>
    )
}

export default withApollo({ ssr: true })(Home);
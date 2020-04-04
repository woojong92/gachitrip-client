import Link from "next/link";
import Head from 'next/head'
import * as React from "react";
import { withApollo } from '../../../lib/apollo'
import Layout from '../../components/layout'
import { css } from '@emotion/core'
import SideMenu from "../../components/SideMenu";
import Dashboard from "../../components/Dashborad";

function Home() {
    return (
        <>
            <Layout>

                <Dashboard />
                <SideMenu />
            </Layout>
        </>
    )
}

export default withApollo({ ssr: true })(Home);
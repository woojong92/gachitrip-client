import Link from "next/link";
import Head from 'next/head'
import * as React from "react";
import { withApollo } from '../../lib/apollo'
import Layout from 'components/layout'
import { css } from '@emotion/core'


function Home() {
    return (
        <>
            <Layout>
                Hello
            </Layout>
        </>
    )
}

export default withApollo({ ssr: true })(Home);
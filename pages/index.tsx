import Link from "next/link";
import * as React from "react";
import { withApollo } from '../lib/apollo'

function Home() {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
        </ul>
    )
}

export default withApollo({ ssr: true })(Home);
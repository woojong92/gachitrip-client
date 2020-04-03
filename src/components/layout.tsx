import Head from 'next/head'
import Header from './header'

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>GachiTrip</title>
            </Head>
            <Header />


            <main>
                <div className="container">{children}</div>
            </main>

            <style jsx>{`
                header {
                    border-bottom: 1px solid rgba(0.0,0,0.75);    
                    box-shadow: 0 0 5px rgba(0,0,0,0.75);
                    background: #fff;
                }
                header .inner {
                    height: 78px;
                }

                .container {
                max-width: 42rem;
                margin: 1.5rem auto;
                }
            `}</style>
        </>
    )
}

export default Layout
import { SessionProvider } from "next-auth/react"
import "global.styles.css";
export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <div>
            <h1>Example</h1>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </div>
    )
}
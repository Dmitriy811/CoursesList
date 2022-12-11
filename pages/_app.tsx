import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Some title</title>
				<link rel='icon' href='favicon.ico' />
				<meta property='og:locale' content='ru_RU' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

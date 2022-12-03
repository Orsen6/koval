import '../styles/global.scss'
// import { Mulish } from '@next/font/google'

// const mulish = Mulish({
//   weight: ['300', '400', '500', '600', '700', '800'],
//   style: ['normal'],
//   subsets: ['latin']
// })

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}
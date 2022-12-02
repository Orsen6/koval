import Head from "next/head"
import A from "./A"

function MainContainer({children}) {
  return (
    <div>
         <Head>
            <meta keywords="koval, salt, nextjs"></meta>
            <title>SaltKoval</title>
        </Head>
        <nav>
            <A text='Main' href="/">
                Main
            </A>
            <A text='Users' href="/users">
                Users
            </A>
        </nav>
        <div>
            {children}
        </div>
    </div>
  )
}

export default MainContainer
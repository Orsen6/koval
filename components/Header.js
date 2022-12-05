import React, { useState } from 'react'
import A from './A'
import Image from 'next/image'
import { Head } from 'next/document'
import Link from 'next/link'
import MyButton from './UI/MyButton/MyButton'

function header({avtive, setActive}) {

    const [navs, setNavs] = useState([
        {
            title: 'Місцезнаходження',
            path: '/users'
        },
        {
            title: 'Про нас',
            path: '/about'
        },
        {
            title: 'Контакти',
            path: '/contacts'
        },
        {
            title: 'Блог',
            path: '/blog'
        },
    ])

  return (
        <header className='header'>
            <div className='container'>
                <div className='header_inner'>
                    <Link className="logo" href="/users">
                        <Image src="/logo.svg" alt='logo' width="150" height="50"/>
                    </Link>
                    <navbar className="header_nav">
                        <ul className='header_ul'>
                            {navs.map(nav => 
                                <li key={nav.title} className='header_li'>
                                    <A className="header_link" href={nav.path}>{nav.title}</A>
                                </li>   
                            )}
                        </ul>
                    </navbar>
                    <MyButton onClick={() => setActive(true)}> Зворотній зв'язок </MyButton>       
                </div>
            </div>
        </header>
  )
}

export default header
import React, { use, useState } from 'react'
import A from './A'
import Image from 'next/image'
import { Head } from 'next/document'
import MyButton from './UI/MyButton/MyButton'
import linkClasses from '../styles/A.module.scss'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"

function header({enableBurger, disableBurger, enableModal, disableModal}) {

    const [navs, setNavs] = useState([
        {
            title: 'Місцезнаходження',
            path: '#section1',
            offset: -40
        },
        {
            title: 'Про нас',
            path: '#section2',
            offset: 100
        },
        {
            title: 'Тип місця',
            path: '#section3',
            offset: -40
        },
        {
            title: 'Блог',
            path: '#section4',
            offset: 50
        },
    ]);

    
    const dispatch = useDispatch()
    const burgerState = useSelector(state => state.burg)
    const modalState = useSelector(state => state.modal)

  return (
        <header className='header'>
            <div className='container'>
                <div className='header_inner'>
                    <a className="logo" href="/users">
                        <Image src="/logo.svg" alt='logo' width="50" height="50"/>
                    </a>
                    <nav className={burgerState ? 'header_nav active' : 'header_nav'}>
                        <ul className='header_ul'>
                            {navs.map(nav => 
                                <li key={nav.title}>
                                    <Link
                                        href={nav.path}
                                        className={linkClasses.link}
                                        onClick={() => disableBurger()}
                                    >
                                        {nav.title}
                                    </Link>
                                </li>
                            )}
                            <li className='header_li-adaptive'>
                                <MyButton onClick={() => enableModal()}> Зворотній зв'язок </MyButton> 
                            </li>
                        </ul>
                    </nav>
                    <button
                        onClick={burgerState ? () => {disableBurger()} : () => {enableBurger()} }
                        className={burgerState ? 'header_burgerBtn active' : 'header_burgerBtn'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className='header_modalBtn'>
                        <MyButton onClick={() => enableModal()}> Зворотній зв'язок </MyButton>  
                    </div>     
                </div>
            </div>
        </header>
  )
}

export default header
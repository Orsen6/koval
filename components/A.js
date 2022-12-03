import Link from "next/link";
import classes from '../styles/A.module.scss'

export default function A({children, href}) {
    return(
        <Link className={classes.link} href={href}>
             {children}
        </Link>
    )
}
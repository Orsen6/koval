import Link from "next/link";
import classes from '../styles/A.module.scss'

export default function A({text, href}) {
    return(
        <Link className={classes.link} href={href}>
             {text}
        </Link>
    )
}
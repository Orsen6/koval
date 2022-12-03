import classes from './MyInput.module.css'

function MyInput({placeholder, type}) {
  return (
    <input placeholder={placeholder} type={type} className={classes.myInput}/>
  )
}

export default MyInput
import classes from './MyInput.module.css'

function MyInput({placeholder, type, pattern}) {
  return (
    <input placeholder={placeholder} type={type} className={classes.myInput} pattern={pattern}/>
  )
}

export default MyInput
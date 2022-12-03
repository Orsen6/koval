import classes from './MyButton.module.css';

function MyButton(props) {
  return (
        <button {...props} className={classes.myButton}>
            {props.children}
        </button>
    )
}

export default MyButton
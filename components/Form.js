
function Form({children}, props) {
  return (
    <form {...props} className="myForm">
        {children}
    </form>
  )
}

export default Form
import '../styles/global.scss'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  const defaultState = {
    burg: false,
    modal: false
  }

  const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ACTIVE":
        return {...state, burg: true}
      case "DISABLED": 
        return {...state, burg: false}
        case "ACTIVE_MODAL":
        return {...state, modal: true}
      case "DISABLED_MODAL": 
        return {...state, modal: false}
      default: return state
    }
  }

  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
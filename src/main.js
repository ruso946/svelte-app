import './app.css'
import App from './App.svelte'
import "toastify-js/src/toastify.css"
import "bootswatch/dist/lux/bootstrap.min.css"
// import 'bootstrap'

const app = new App({
  target: document.getElementById('app'),
})

export default app

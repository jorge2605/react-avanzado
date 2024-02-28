import logo from './assets/react.svg'
import './App.css'

function App() {
  
  return (
    <>
    <div className="login">
      <div className="login-container">
        <img src={logo} alt="logo de fondo" />
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name='email'
        id='email'
        placeholder='Correo@correo.com'/>
        <label htmlFor="password">Password</label>
        <input 
        type="password"
        name='password'
        id='password' 
        />
        <button type='submit'>Iniciar sesion</button>
      </div>
    </div>
    </>
  )
}

export default App

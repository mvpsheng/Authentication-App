import github from '../assets/Gihub.svg'
import twitter from '../assets/Twitter.svg'
import google from '../assets/Google.svg'
import facebook from '../assets/Facebook.svg'
import devchalogo from '../assets/devchallenges.svg'


export default function Login(props) {

  const goRegister = () => {
    const data = 'register';
    props.onData(data);
  }

  return (
    <div className="loginarea">
      <div>
        <img src={devchalogo} alt="devchallengeslogo" />
      </div>
      <h2>Login</h2>

      <form action="" className="loginform">
        <input className='emailinput'  type="text" placeholder="Email" />

        <input className='passwordinput' type="text" placeholder="Password" />

        <input id="loginButton" type="submit" value="Login" />
      </form>

      <div>
        <p>or continue with these social profile</p>
        <div className='svgs'>
          <img className='svg' src={github} alt="github" />
          <img className='svg' src={twitter} alt="twitter" />
          <img className='svg' src={google} alt="google" />
          <img className='svg' src={facebook} alt="facebook" />
        </div>
        <div>
          Don't have an account yet?<button className="switchForm" onClick={goRegister}>Register</button>
        </div>
      </div>
    </div>
  )
}
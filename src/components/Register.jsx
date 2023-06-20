import github from '../assets/Gihub.svg'
import twitter from '../assets/Twitter.svg'
import google from '../assets/Google.svg'
import facebook from '../assets/Facebook.svg'
import devchalogo from '../assets/devchallenges.svg'


export default function Register(props) {


  const goLogin = () => {
    const data = 'login';
    props.onData(data);
  }

  const goInfomation = () => {
    const data = 'personalinfo';
    props.onData(data);
  }

  return (
    <div className="registerarea">
      <div>
      <img src={devchalogo} alt="devchallengeslogo" />
      </div>

      <h2>Join thousands of learners from around the world</h2>

      <p>Master web development by making real-life projects. There are mutiple paths for you to chose</p>

      <form action="" className="registerform">
        <input className='emailinput' type="text" placeholder="Email" />

        <input className='passwordinput' type="text" placeholder="Password" />

        <input id="registerButton"
          type="submit"
          onClick={goInfomation}
          value="Start coding now" />
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
          Already a member?
          <button className="switchForm" onClick={goLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}
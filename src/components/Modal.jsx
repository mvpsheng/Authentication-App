import mypic from '../assets/mypic.jpg'
import back from '../assets/arrowback.svg'
import photocam from '../assets/photocamera.svg'
export default function Modal(props) {

    const mode = "edit"

    return (
        <div className="overlay">
            <div className="modal">
                <div className="form-title-container">
                    <img src={back}  onClick={props.switchtoTable} alt="back" />
                    Back
                </div>

                <form>
                    <div>
                        <p><span>Change Info</span>Changes will be reflected to every services</p>
                    </div>
                    <div className="photochange">
                        <img className="personalpic" src={mypic} alt="personalpic" />
                        <img className="photocamlogo" src={photocam} alt="photocamlogo" />
                        <button >CHANGE PHOTO</button>
                    </div>
                    <div className='forminputs'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter your name...' />
                    </div>
                    <div className='forminputs'>
                        <label htmlFor="">Bio</label>
                        <input type="text" placeholder='Enter your bio...' />
                    </div>
                    <div className='forminputs'>
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder='Enter your phone...' />
                    </div>
                    <div className='forminputs'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter your email...' />
                    </div>
                    <div className='forminputs'>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='Enter your password...' />
                    </div>
                    <input type="submit" value='Save'/>
                </form>

            </div>

        </div>
    )
}
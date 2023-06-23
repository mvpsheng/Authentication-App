import devchalogo from '../assets/devchallenges.svg'
import mypic from '../assets/mypic.jpg'
import { useState } from 'react'
import Modal from './Modal'

export default function PersonalInfo() {

    const [showDiv1, setShowDiv1] = useState(true);

    function handleSwitch() {
        setShowDiv1(!showDiv1);
    }
    const [showMenu, setShowMenu] = useState(false);

    function openMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <div className="personalInfoarea">

            <div className="personalinfoheader">
                <img src={devchalogo} alt="devchalogo" />
                <div>
                    <img src={mypic} alt="personalPic" />
                    <p>Name</p>
                    <button onClick={openMenu}></button>
                </div>
            </div>
            {showMenu && <div className='menu'>
                <div className='myprofile'>
                    My Profile
                </div>
                <div className='groupchat'>
                    Group Chat
                </div>
                <hr className='hrinmenu'></hr>
                <div className='logout'>
                    Logout
                </div>
            </div>}
            {showDiv1 ? (
                <div className="infotitleandtable">
                    <h1>Personal info</h1>
                    <p>Basic info, like your name and photo</p>

                    <table className="infoTable">
                        <thead>
                            <tr>
                                <div>
                                    <h2>Profile</h2>
                                    <p>some info may be visible to other people</p>
                                </div>
                                <button onClick={handleSwitch}>Edit</button>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            <tr>
                                <td>
                                    <div className='divintd'>
                                        <label>PHOTO</label>
                                        <img className='personalpic' src={mypic} alt="personalpic" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='divintd'>
                                        <label>NAME</label>
                                        <p>George Wilson</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='divintd'>
                                        <label>BIO</label>
                                        <p>I am a software engineer.</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='divintd'>
                                        <label>PHONE</label>
                                        <p>I am a software engineer.</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='divintd'>
                                        <label>EMAIL</label>
                                        <p>Softwareengineer.com</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='divintd'>
                                        <label>PASSWORD</label>
                                        <p>I am a software engineer.</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) :
                (
                    <div className='onchangingform'>
                        <Modal switchtoTable={handleSwitch}></Modal>
                    </div>
                )}
        </div>
    )
}
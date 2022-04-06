import './user.css';
import {
    CalendarToday, 
    LocationSearching, 
    MailOutline, 
    PermIdentity, 
    PhoneAndroid, 
    Publish
} from '@material-ui/icons';
import {Link} from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newUser'>
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                    src="https://i.pinimg.com/originals/43/a7/80/43a780faad9868f25610b3edea16d628.png" 
                    className="userShowImg" alt=""
                />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Becker</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">anna29</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">24.02.1998</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+61 234 5678</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">anna29@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">Sydney | NSW</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder='anna29' 
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                placeholder='Anna Becker' 
                                className='userUpdateInput'
                            />
                        </div> 
                        <div className="userUpdateItem">
                            <label>Phone No.</label>
                            <input 
                                type="text" 
                                placeholder='+61 234 5678' 
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder='anna29@gmail.com' 
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                                type="text" 
                                placeholder='Sydney | NSW' 
                                className='userUpdateInput'
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img 
                                src="https://i.pinimg.com/originals/43/a7/80/43a780faad9868f25610b3edea16d628.png" 
                                className="userUpdateImg" alt=""
                            />
                            <label htmlFor='file'>
                                <Publish className='userUpdateIcon'/>
                            </label>
                            <input type='file' id='file' style={{ display: 'none'}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

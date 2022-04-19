import './newUser.css';

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder='Username' />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder='Full Name' />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder='Password' />
            </div>
            <div className="newUserItem">
                <label>Phone No.</label>
                <input type="text" placeholder='Phone No.' />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder='Email' />
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder='Address' />
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label for="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className= "newUserItem">
                <label htmlFor='file'>
                   Image: 
                </label>
                <input type="file" id='file' style={{display: "none"}} />
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  );
}

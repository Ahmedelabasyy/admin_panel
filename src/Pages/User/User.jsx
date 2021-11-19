import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User </h1>
                <Link to="/createUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userInfo">
                    <div className="userInfoTop">
                        <img src="https://evolveum.com/wp-content/uploads/photo-gallery/thumb/veronika-latkova_800_800.jpg" alt="userpic" className="userInfoImg" />
                        <div className="userInfoTopTitle">
                            <span className="userInfoUsername">Scottie Adam</span>
                            <span className="userInfoJob">javaScript developer</span>
                        </div>
                    </div>
                    <div className="userInfoBottom">
                        <span className="userInfoBottomTitle">Account details</span>
                        <div className="userInfoDetails">
                            <PermIdentity className="userInfoBottomIcon" />
                            <span className="userInfButtommail">scottie99</span>
                        </div>
                        <div className="userInfoDetails">
                            <CalendarToday className="userInfoBottomIcon" />
                            <span className="userInfButtommail">10.12.1998</span>
                        </div>
                        <span className="userInfoBottomTitle">Contact details</span>
                        <div className="userInfoDetails">
                            <PhoneAndroid className="userInfoBottomIcon" />
                            <span className="userInfButtommail">+1 123 456 7</span>
                        </div>
                        <div className="userInfoDetails">
                            <MailOutline className="userInfoBottomIcon" />
                            <span className="userInfButtommail">scottie99@gmail.com</span>
                        </div>
                        <div className="userInfoDetails">
                            <LocationSearching className="userInfoBottomIcon" />
                            <span className="userInfButtommail">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <h2 className="userUpdateTitle">Edit info..</h2>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="scottie99" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full name</label>
                                <input type="text" placeholder="Scottie Adam" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder="scottie99@gmail.com" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+1 123 456 7" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Adress</label>
                                <input type="text" placeholder="New York | USA" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateUploadImg" src="https://evolveum.com/wp-content/uploads/photo-gallery/thumb/veronika-latkova_800_800.jpg" alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateUploadIcon" />
                                </label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUploadButton">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

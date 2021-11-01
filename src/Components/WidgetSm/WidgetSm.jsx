import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

function WidgetLg({users}) {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New join users</span>
            <ul className="widgetSmList">
                {users.map(user => (
                    <li className="widgetSmListItem" key={user.id}>
                        <img src={user.img} alt="user" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUserName">{user.name}</span>
                            <span className="widgetSmUserJob">{user.job}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetLg

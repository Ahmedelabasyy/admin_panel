import { useEffect, useState } from 'react';
import Charts from '../../Components/Charts/Charts';
import Featured from '../../Components/FeaturedInfo/Featured';
import './home.css';
import { userData } from '../../Dummydata';
import WidgetLg from '../../Components/WidgetLg/WidgetLg';
import WidgetSm from '../../Components/WidgetSm/WidgetSm';

const Home = () => {
    const[users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Ahmedelabasyy/admin_panel/master/users.json')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);
    console.log(users);
    return (
        <div className="home">
            <Featured />
            <Charts data={userData} title="Users Analytics" grid dataKey="Active User" />
            <div className="widget">
                <WidgetSm users={users} />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;

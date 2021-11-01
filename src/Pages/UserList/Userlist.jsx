import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {userRows} from '../../Dummydata';
import './usrlist.css';


function Userlist() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'userName', headerName: 'User Name', width: 240, renderCell: (params) => {
            return (
                <div className="userList">
                    <img className="userListImg" src={params.row.avatar} alt="userImage" />
                    {params.row.userName}
                </div>
            )
        }
            
        },
        {
            field: 'Email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'status',
            width: 150,
        },
        {
            field: 'transaction',
            headerName: 'transaction volume',
            width: 240,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit Info</button>
                        </Link>
                        <DeleteOutlineOutlined className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
        
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default Userlist;

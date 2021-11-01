import './productlist.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {productRows} from '../../Dummydata';

function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 240, renderCell: (params) => {
            return (
                <div className="productListItem">
                    <img className="productImage" src={params.row.image} alt="productImage" />
                    {params.row.name}
                </div>
            )
        }
            
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'status',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 240,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit Info</button>
                        </Link>
                        <DeleteOutlineOutlined className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
        
    ];


    return (
        <div className="productList">
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

export default ProductList;

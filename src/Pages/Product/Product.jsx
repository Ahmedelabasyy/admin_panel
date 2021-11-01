import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../Components/Charts/Charts';
import { productData } from '../../Dummydata';
import { Publish } from '@material-ui/icons';

function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="createProduct">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img className="productInfoImg" src="https://m.media-amazon.com/images/I/71oqx0xkNhL._AC_UY327_FMwebp_QL65_.jpg" alt="ProductImage"/>
                        <span className="productInfoName">Apple 12pro</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">1</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <div className="productForm">
                    <div className="productFormLeft">
                        <label>Product name</label>
                        <input type="text" placeholder="Iphone 12pro"/>
                        <label>In stock</label>
                        <select name="instock" id="idstock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://m.media-amazon.com/images/I/71oqx0xkNhL._AC_UY327_FMwebp_QL65_.jpg" alt="upImg" className="productUploadImg" />
                            <label for="file">
                                <Publish className="productIcon" />
                            </label>
                            <input type="file" id="file" style={{display: 'none'}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;

import './widgetLg.css'

function WidgetLg() {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">latest transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://evolveum.com/wp-content/uploads/photo-gallery/thumb/veronika-latkova_800_800.jpg" alt="user" className="widgetLgImg"/>
                        <span className="widgetLgName">Anna Keller</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2021</td>
                    <td className="widgetLgAmount">$122.20</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Andrzej_Person_Kancelaria_Senatu_2005.jpg" alt="user" className="widgetLgImg"/>
                        <span className="widgetLgName">Madonna Beter</span>
                    </td>
                    <td className="widgetLgDate">3 May 2021</td>
                    <td className="widgetLgAmount">$432.20</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.bni.com/wp-content/uploads/2020/12/Dr.-Ivan-Misner_bni.com-headshot.jpg" alt="user" className="widgetLgImg"/>
                        <span className="widgetLgName">Johnee Doe</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2021</td>
                    <td className="widgetLgAmount">$153.20</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517" alt="user" className="widgetLgImg"/>
                        <span className="widgetLgName">Murad abelardo</span>
                    </td>
                    <td className="widgetLgDate">2 junc2021</td>
                    <td className="widgetLgAmount">$232.20</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg

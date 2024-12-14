import State from "./State";

export default function StatusList(){
    return(
    <div className="status">
        <div className="my-status">
            <div className="state">
                <div className="photo">
                    <img src="images/users/customer-5.jpg" alt="" /></div>
                <div className="content">
                <div className="name-time">
                    <p className="name">My status</p>
                    <p className="time">No updates</p>
                </div>
                </div>
            </div>
        </div>
        <p className="status-label">Recent updates</p>
        <State />                
                 
    </div>
    );
}
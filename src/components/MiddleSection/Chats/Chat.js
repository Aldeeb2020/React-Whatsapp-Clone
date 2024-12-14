export default function Chat(){
    return(
        <div className="people">
            <div className="photo">
                <div className="online"></div>
                <img src="images/users/ben.jpg" alt="" />
            </div>
            <div className="content">
                <div className="name-time">
                    <p className="name">C Ahmed Bogy</p>
                    <p className="time">06:00 AM</p>
                </div>
                <div className="last-message-and-count">
                    <p className="last-message">I will go today to my gym lesson with two param and </p>
                </div>
            </div>
        </div>
    );
}
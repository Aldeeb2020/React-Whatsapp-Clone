export default function ContentSection(){
    return(
        <div class="content-section">
        <div class="content-section-header">
            <div class="photo-name">
                <div class="photo">
                    <img src="images/users/ben.jpg" alt="" />
                </div>
                <p class="name">C Ahmed Bogy</p>
            </div>
            <div class="options">
                <div class="btn-group">
                    <a href="#e"><img src="icons/phone-flip.png" alt="" /></a>
                    <a href="#e"><img src="icons/video.png" alt=""/></a>                    
                </div>
                <a href="#e"><img src="icons/search.png" alt="" /></a>
            </div>
        </div>
        <div class="chat-content">
            <div class="sender">
                Hello
                <p class="time">9:14 AM</p>
            </div>
            <div class="sender">
                and how are you?
                <p class="time">9:14 AM</p>
            </div>
            <div class="sender">
                I need to meet you in comming summer
                <p class="time">9:14 AM</p>
            </div>
            <div class="reciver">
                ok man.
                <p class="time">9:14 AM</p>
            </div>
            <div class="sender">
                ok meet at 5 am
                <p class="time">9:14 AM</p>
            </div>
            <div class="sender">
                bey
                <p class="time">9:14 AM</p>
            </div>
            <div class="reciver">
                done
                <p class="time">9:14 AM</p>
            </div>
        </div>
        <div class="chat-controlls">
            <a href="#e" class="emoji"><img src="icons/smile.png" alt="" /></a>
            <a href="#e" class="attachment"><img src="icons/attachment.png" alt="" /></a>
            <div class="message-box">
                <input type="text" placeholder="Type a message" />
            </div>
            <a href="#e" class="voice-message"><img src="icons/send.png" alt="" /></a>
        </div>
    </div>
    );
}
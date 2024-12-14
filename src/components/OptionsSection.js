export default function OptionsSection({onSetOpenedOptions}){
    return(
    <div class="options-nav">
        <div class="top-options">
            <button onClick={() => onSetOpenedOptions("Chats")} class="chats-btn back active"><img src="icons/chat.png" alt=""/></button>
            <button onClick={() => onSetOpenedOptions("Calls")} class="calls-btn"><img src="icons/phone-flip.png" alt=""/></button>
            <button onClick={() => onSetOpenedOptions("Status")} class="status-btn"><img src="icons/updates.png" alt=""/></button>
        </div>
        <div class="bottom-options">
            <button onClick={() => onSetOpenedOptions("Chats")} href=""><img src="icons/shape.png" alt=""/></button>
            <button onClick={() => onSetOpenedOptions("Chats")} href=""><img src="icons/archive.png" alt=""/></button>
            <button onClick={() => onSetOpenedOptions("Chats")} href=""><img src="icons/setting.png" alt=""/></button>
        </div>
    </div>
    );
}
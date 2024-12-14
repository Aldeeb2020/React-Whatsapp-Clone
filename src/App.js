
import './style.css';
import Main from './components/Main';
import OptionsSection from './components/OptionsSection';
import MiddleSection from './components/MiddleSection/MiddleSection';
import MiddleSectionHeader from './components/MiddleSection/MiddleSectionHeader';
import ContentSection from './components/ContentSection/ContentSection';
import Search from './components/MiddleSection/Search';
import ChatsList from './components/MiddleSection/Chats/ChatsList';
import CallsList from './components/MiddleSection/Calls/CallsList';
import StatusList from './components/MiddleSection/StatusList/StatusList';

import { useState } from 'react';

export default function App(){
    // Current Opened State
    let [OpenedOption, setOpenedOption] = useState("Chats");
    return(
        <Main>
            {/* Options Section */}
            <OptionsSection onSetOpenedOptions={setOpenedOption}/>
            {/* Middle Section */}
            <MiddleSection>
                <MiddleSectionHeader title={OpenedOption}/>
                {(OpenedOption === "Chats" || OpenedOption === "Calls") &&  <Search />}
                {OpenedOption === "Chats" && <ChatsList />}
                {OpenedOption === "Calls" && <CallsList />}
                {OpenedOption === "Status" && <StatusList />}
            </MiddleSection>
            {/* Content Section */}
            <ContentSection />
        </Main>
    );
}
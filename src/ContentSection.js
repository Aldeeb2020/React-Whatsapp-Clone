import { useState } from "react";

export default function ContentSection({children}){
    return(
        <div className="content-section">
            {children}
        </div>
    );
}
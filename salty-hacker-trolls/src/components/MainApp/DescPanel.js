import React, { useState } from "react";

import { Panel, PanelBar, DescTitle, PanelButton, ButtonImage, PanelText } from "../../styles/DescPanelStyles"



export default function DescPanel({commentContent}) {

    const [showText, setShowText] = useState(false);

    return (
           <Panel className="Panel">
               <PanelBar className="PanelBar">
                        <PanelButton className="PanelButton" onClick={() => setShowText(!showText)}><DescTitle>Salty comment</DescTitle>
                            <ButtonImage className="ButtonImage" src={ require('../images/icons8-ellipsis-50-orange.png')} alt="ellipse" />
                        </PanelButton>
                    <div className="PanelContent">
                        {showText && <PanelText>{commentContent}</PanelText>}
                    </div>
                </PanelBar>
           </Panel>
    );
}

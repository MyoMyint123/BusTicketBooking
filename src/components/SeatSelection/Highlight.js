import React from 'react';


const Highlight = (props) => {

    const { status } = props
    return(        
        <div className="highlightItem">
            <span className={'highlight '+ status.value}  ></span><span>{status.name}</span>
        </div>

    )
}

export default Highlight;
import React from 'react';
import Name from './StyleComponets/StyledComponents'

const Entry = props => {
    const { data } = props;
    console.log("EntryData is =>", data)

    return (
        <Name>{data.name}</Name>  
    )
}


export default Entry;
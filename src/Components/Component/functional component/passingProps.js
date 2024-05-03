import React from 'react'
import Card from '../functional component/props';
import Data from './Data.json';

//data mapping and pass to the component
let element = Data.map((item) => <Card title= {item.Title} Desc = {item.Desc}/>)

function PassingProps() {
    return <div>
        {
            // use  here element variable or
            Data.map((item, index)=><Card key = {index} title= {item.Title} Desc = {item.Desc}/>)
        }
    </div>
}

export default PassingProps;
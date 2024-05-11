import React, {Component} from 'react';
import style from '../style.module.css';

class Card extends Component{
    render(){
        //props distructuring
        const {title} = this.props
        return <div className={style.center}>
            <h1>{title}</h1>
            <p>{this.props.desc}</p>
        </div>
    }
};

export default Card;
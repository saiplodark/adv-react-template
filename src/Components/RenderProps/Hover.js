import React, { Component } from 'react'

export default class Hover extends Component{
    constructor(props){
        super(props)
        this.state={
            hovering:false
        }
    }

    render(){
        return(
            <div className='hover-comp hover-holder'
            onMouseOver={()=> this.setState({hovering:true})}
            onMouseOut={()=> this.setState({hovering: false})}
            >
                {this.props.render(this.state.hovering)}
            </div>
        )
    }
}
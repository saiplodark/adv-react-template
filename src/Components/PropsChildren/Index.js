import React from 'react'
import Hover from './Hover'
import Box from '../RenderProps/Box'

export default function Index(props) {
    return (
        <div>
            <h1>Props.Children</h1>

            <Hover>
                {hovering=> <div>{hovering? 'hovering': 'no, no, no'}</div>}
            </Hover>

            <Hover>
                {hovering => <Box isHovered={hovering} title='Props.Children.box' text='testing cool'/>}
            </Hover>
        </div>
    )
}   

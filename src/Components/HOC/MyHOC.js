import React from 'react'
import axios from 'axios'

export default function myHOC(MyComponent, url){
    return class extends React.Component {
        constructor(props){
            super(props)

            this.state={
                data:null
            }
        }

        getData = ( ) =>{
            axios.get(url).then(res => {
                this.setState({data: res.data})
            })
        }

        render(){
            return(
                <>
                {
                    this.state.data
                    ?
                    <MyComponent
                        {...this.props}
                        data={this.state.data}
                    />
                    :
                    this.getData()
                }
                </>
            )
        }
    }
}
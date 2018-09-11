import React, {Component} from 'react'

import './loader.scss'
import If from '../if'
import load from './load.gif'

// export default class loader extends Component {
//     constructor(props){
//         super(props)
//         this.state = {xhr: props.loading}
//     }

//     componentWillReceiveProps(nextProps){
//         debugger
//         this.setState(state => ({
//             xhr: nextProps.loading
//         }))
//     }

//     render(){
//         return (
//             <If show={this.state.xhr}>
//                 <img src={load}  alt="loader" className="load" />
//             </If>    
//         )    
//     }
// }

//};
 
export default (props) => {
  return (
        <If show={props.loading}>
            <img src={load}  alt="loader" className="load" />
        </If>    
    ) 
}

    

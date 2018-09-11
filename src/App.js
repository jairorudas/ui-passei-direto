import React, { Component } from 'react';
import axios from 'axios';
import lt from 'localStorage'

import Form from './utils/form/Form'
import  TabContent from './utils/tabContent/TabContent'
import Tabs from './utils/tabs/Tabs'
import Loader from './utils/loader/load' 


class App extends Component {
    constructor(props){
        super(props)
        this.state = { 
            active: 'Buscar', 
            dataServer: [], 
            input: '',
            xhr: false
        }
        this.tabActive = this.tabActive.bind(this);
        this.searchString = this.searchString.bind(this)
        this.changeString = this.changeString.bind(this)
    }        

    tabActive(id){
        this.setState(state => ({
            active: id
        }))
    }

    changeString(e){
       this.setState({...this.state, input: e.target.value })
       
    }

    searchString(e){
        e.preventDefault();
        this.setState({...this.state, xhr: true, dataServer: []})
        const url = `https://passei-direto.herokuapp.com/${this.state.input}`;
        axios.get(url)
          .then( data => {
            this.setState({...this.state, dataServer: data.data.Results})
            this.setState({...this.state, xhr: false})

          })
          .catch(err => {
            this.setState({...this.state, xhr: false})
            console.log(err)
          }) 
    }

    componentWillMount(){
        lt.setItem('likes', JSON.stringify([]))
    }

  render() {
    return (
     <div className="container">
        <div className="row">
            <Tabs titulos={["Buscar", "Favoritos"]} onClick={this.tabActive} col="column column-25" active={this.state.active}/>      
        </div>
        <div className="row">
            
            <TabContent id="Buscar" 
                        active={this.state.active} 
                        data={this.state.dataServer}
                        col="column">
                <Form search={this.searchString} changeString={this.changeString} value={this.state.input}/>
                <Loader loading={this.state.xhr} />
            </TabContent>

        <TabContent id="Favoritos" col="flex" active={this.state.active} />  
        </div>
     </div>

    );
  }
}

export default App;

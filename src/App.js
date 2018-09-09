import React, { Component } from 'react';
import axios from 'axios';
import data from './data.json'
import  TabContent from './utils/tabContent/TabContent'
import Tabs from './utils/tabs/Tabs'


class App extends Component {
    constructor(props){
        super(props)
        this.state = { 
            active: 'Buscar', 
            dataServer: data, 
            input: '', 
            favoritos: []
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
        const params = this.state.input
        //const url = 'https://search-api.passeidireto.com/api/Search/GlobalSearch?Query=teste&ContentTypeIds%5B%5D=1&PageNumber=0&PageSize=20&Order=2​'
        // axios.get('./data.json')
        //   .then( data => console.log(data))
        //   .catch(err => console.log(err)) 
        console.log(params);

    }

  render() {
    return (
     <div className="container">
        <div className="row">
            <Tabs titulos={["Buscar", "Favoritos"]} onClick={this.tabActive} col="column column-25" active={this.state.active}/>      
        </div>
        <div className="row">
            <TabContent id="Buscar" col="column" active={this.state.active}>

                <form className="column" onSubmit={this.searchString}>
                    <label>Digite o material que deseja: </label>
                    <div className="row">
                        <input className="column column-67"
                                type="text"
                                onChange={this.changeString}
                                name="buscar" 
                                placeholder="Digite o material que deseja." />
                        <input className="button column-25" type="submit" value="Buscar!"  />
                    </div>
                </form> 

        </TabContent>
        <TabContent id="Favoritos" col="column" active={this.state.active}/>  
        </div>
     </div>

    );
  }
}

export default App;

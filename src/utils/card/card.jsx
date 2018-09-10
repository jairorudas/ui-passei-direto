import React, {Component} from 'react'
import lt from 'localStorage';

import './card.scss'
import If from '../if'

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state = {data: props.data || []}
    }

    like(item){
        let newLikes = (JSON.parse(lt.getItem('likes'))).concat([item]);
        lt.setItem('likes', JSON.stringify(newLikes))
    }

    deleteItem(item){
        let newLikes = (JSON.parse(lt.getItem('likes'))).filter(x => x.Id !== item.Id)
        lt.setItem('likes', JSON.stringify(newLikes))

        this.setState(state => ({
            data: JSON.parse(lt.getItem('likes'))
        }))
    }

    componentWillMount(){
        if(this.props.id === 'Favoritos'){
            this.setState(state => ({
                data: JSON.parse(lt.getItem('likes'))
            }))
        }
    }
    
    renderCards = () => {
        return this.state.data.map((item, i) => (
            <div key={i} className="card column">
                <input className="card-icon-check" type="checkbox" 
                        onClick={() => this.like(item)} />
                
                <If show={this.props.id !== "Favoritos"}>
                    <i className="card-icon animated">❤</i>
                </If>

                <If show={this.props.id === "Favoritos"}>
                    <button type="button" className="btn" onClick={() => this.deleteItem(item)}> 
                        <span role="img" aria-label="danger">🚫 </span>
                        Apagar
                    </button>
                </If>

                <p className="card-titulo">{item.SubjectName}</p>
                <p className="card-content">
                    {item.Name}
                </p>
                <p className="card-content -tag">
                    {item.UniversityName}
                </p>
            </div>
        ))
    }


    render(){
        return (
        <div className="row">
            {this.renderCards()}
        </div>
    )}
}
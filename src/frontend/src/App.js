import React, {Component} from "react"

export default class extends Component{
    state = {
        src : null
    }
    getSrc = e => {
        let test = new RegExp("\\.(jpe?g|gif|png|svg)$")
        if(!test.test(e.target.value)){
            return;
        }
            
        this.setState({
            src: e.target.value
        })
    }
    render(){
        let props = this.state
        return(
            <div> 
                <input 
                    placeholder='введите адрес'
                    onChange = {this.getSrc}
                />
                
                {
                    props.src 
                    ? (<img src={props.src}/>)
                    : (<p> Неправильный адрес </p>)
                }
                
            </div>
        )
    }
}

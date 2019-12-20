var ReactDOM = require('react-dom');
var React = require('react');
import axios from 'axios';
import * as exp from './component/ItemsList.js';
class GET extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           id:""
        };
       this.getId=this.getId.bind(this);
       this.getdata=this.getdata.bind(this);
    }
    getId(event){
        let val = event.target.value;
        this.setState({id: val});
    }
    getdata(){
        let id = this.state.id;
     exp.GetRecuest(id);
    }
    render(){
        return(
            <div>
                 <input type="text" onChange={this.getId}></input>
                <input type="button" value="получить" onClick={this.getdata}></input>
                <div id="ower"></div>
            </div>
        );
    }
}
module.exports = get;
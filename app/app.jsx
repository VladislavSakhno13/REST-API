var ReactDOM = require('react-dom');
var React = require('react');
import axios from 'axios';
import Assessment from './component/ItemsList.jsx';
let assess = new Assessment;
class POST extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            reviews: "",
            place: "",
            assessment:""
        };
        this.submitName = this.submitName.bind(this);
        this.submitReviews = this.submitReviews.bind(this);
        this.submitPlace = this.submitPlace.bind(this);
        this.submitAssessment = this.submitAssessment.bind(this);
        this.showData = this.showData.bind(this);
    }
    submitName(event){
        let val = event.target.value;
         this.setState({name: val});
     }
     submitReviews(event){
         let val = event.target.value;
         this.setState({reviews: val});
      }
      submitPlace(event){
         let val = event.target.value;
         this.setState({place: val});
      }
      submitAssessment(event){
         let val = event.target.value;
         this.setState({assessment: val}); 
      }
      showData(){
         let AssessmentData = {
             assessment: this.state.assessment,
             person_id:"",
             place_id:"",
             assessment_id:""
         }
         const strA = JSON.stringify(AssessmentData);
        assess.PostRecuest(strA);
    }

render () {
    
    return (
        <div>
            <form>
               <label >Имя:</label><br/>
                <input  type="text"  value={this.state.name} onChange={this.submitName}/><br/>
                <label>Оценка:</label>
                <select  value={this.state.reviews} onChange={this.submitReviews}>
                <option value="" selected disabled hidden>Выберите число</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select><br/>
                <label>Место:</label>
                <select value={this.state.place} onChange={this.submitPlace} >
                <option value="" selected disabled hidden>Выберите место</option>
                    <option value="Mакдональдс">Mакдональдс</option>
                    <option value="KFC">KFC</option>
                    <option value="BurgerKing">BurgerKing</option>
                </select><br/>
                <textarea value={this.state.assessment} cols="40" rows="10" onChange={this.submitAssessment}  cols="40" rows="10" ></textarea><br/>
                <input type="button" value="Отправить" onClick={this.showData}/>
               </form>
        </div>
    );
 }
}

ReactDOM.render(<POST/>,document.getElementById('app'));
class GET extends React.Component {
    getdata(){
     assess.GetRecuest();
    }
    render(){
        return(
            <div>
                <input type="button" value="получить" onClick={this.getdata}></input>
            </div>
        );
    }
}
ReactDOM.render(<GET/>,document.getElementById('get'));

var React = require('react');
import axios from 'axios';
export default class Assessment{
    GetRecuest(){
        axios.get('http://restapi/api/assessment')
        .then(function(response){
            console.log(response.data);
        })
    }
    PostRecuest(arrayData){
        axios.get('http://restapi/api/customers')//person
        .then(function(response){
            let newAssessment = response.data;
            let mainiArr = newAssessment[newAssessment.length-1];
            //arrayData.person_id;
            console.log(mainiArr.id);
            
        })
        axios.get('http://restapi/api/reviews')//rewievs
        .then(function(response){
            let newAssessment = response.data;
            let mainiArr = newAssessment[newAssessment.length-1];
            //arrayData.assessment_id
            console.log(mainiArr.id);
        })
        axios.get('http://restapi/api/place')//place
        .then(function(response){
            let newAssessment = response.data;
            let mainiArr = newAssessment[newAssessment.length-1];
            //arrayData.place_id
            console.log(mainiArr.id);
        })
        const strA = JSON.stringify(arrayData);
        axios.post('http://restapi/api/assessment',arrayData)
        .then(function(response){
            console.log(response.data);
           
        })
    }
    PutRecuest(arrayData,id){
        if(id != ""){
            axios.put('http://restapi/api/assessment/id',arrayData)
        .then(function(response){
            console.log(response.data);
        })
        }
    }
    DeleteRecuest(arrayData,id){
        if(id != ""){
            axios.put('http://restapi/api/assessment/id',arrayData)
        .then(function(response){
            console.log(response.data);
        })
        }
    }
}

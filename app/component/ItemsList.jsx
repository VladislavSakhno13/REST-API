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
        axios.post('http://restapi/api/assessment',arrayData)
        .then(function(response){
            console.log(response.data);
        })
    }
    PutRecuest(arrayData,id){
        if(id != ""){
            axios.post('http://restapi/api/assessment/id',arrayData)
        .then(function(response){
            console.log(response.data);
        })
        }
    }
}
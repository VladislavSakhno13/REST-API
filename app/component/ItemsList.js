import axios from 'axios';

 export  function  GetRecuest(id){
        if(id == ""){
            axios.get(`/api/assessment`)
            .then(function(response){
            console.log(response.data);
        })
        }else{
            axios.get(`/api/assessment/${id}`)
            .then(function(response){
            
        })
        }
        
    }
    export function PostRecuest(arrayData,customersD,reviewsD,placeD){
        function addAsessment(){
            const strA = JSON.stringify(this.arrayData);
            axios.post(`/api/assessment`,strA)
            .then(function(response){
            console.log("good");
           
        })
        }
        function setTable(fun){
            const strCust = JSON.stringify(this.customersD);
        axios.post(`/api/customers`,strCust)
        .then(function(response){
            axios.get(`/api/customers`)//person
        .then(function(response){
            let newAssessment = response.data;
            let mainiArr = newAssessment[newAssessment.length-1];
            arrayData.person_id = mainiArr.id;
        })
        })
        const strRev = JSON.stringify(this.reviewsD);
        axios.post(`/api/reviews`,strRev)
        .then(function(response){
            axios.get(`/api/reviews`)//rewievs
        .then(function(response){
            let newAssessment = response.data;
            let mainiArr = newAssessment[newAssessment.length-1];
            arrayData.assessment_id = mainiArr.id;
        })
        })
        const strPle = JSON.stringify(this.placeD);
        axios.post(`/api/place`,strPle)
        .then(function(response){
           axios.get(`/api/place`)//place
        .then(function(response){
            let newAssessment = response.data;
            let mainiArr = newAssessment[newAssessment.length-1];
            arrayData.place_id = mainiArr.id;
        })

            
        })
        fun();
        }
        setTable(addAsessment);
        /*axios.get('http://restapi/api/customers')//person
        .then(function(response){
            let newAssessment = response.data;
            let mainiArr = newAssessment[newAssessment.length-1];
            arrayData.person_id = mainiArr.id;
        })
        axios.get('http://restapi/api/reviews')//rewievs
        .then(function(response){
            let newAssessment = response.data;
            let mainiArr = newAssessment[newAssessment.length-1];
            arrayData.assessment_id = mainiArr.id;
        })
        axios.get('http://restapi/api/place')//place
        .then(function(response){
            let newAssessment = response.data;
            let mainiArr = newAssessment[newAssessment.length-1];
            arrayData.place_id = mainiArr.id;
        })*/
        
        
           
        
        
        /*const strA = JSON.stringify(arrayData);
        console.log(strA);
        axios.post('http://restapi/api/assessment',strA)
        .then(function(response){
            console.log(response.data);
           
        })*/
    }
    export function PutRecuest(arrayData,id){
        if(id != ""){
            axios.put(`/api/assessment/id`,arrayData)
        .then(function(response){
            console.log(response.data);
        })
        }
    }
    export function  DeleteRecuest(arrayData,id){
        if(id != ""){
            axios.put(`/api/assessment/${id}`,arrayData)
        .then(function(response){
            console.log(response.data);
        })
        }
    }


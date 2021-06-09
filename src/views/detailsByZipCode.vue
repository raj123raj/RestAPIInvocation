<style scoped>

.addmargin {
    margin-top: 10px;
    margin-bottom: 10px;
}

.vue-logo-back {
    background-color: black;
}

</style>

<template>

<div class="home">
    <div class="vue-logo-back">
        <img src="../assets/logo.png" width="100px" height="100px">
    </div>
    <div class="col-md-6 centeralign">
        <p>This Page Displays Country details by Zip Code. Example : 600 028</p>
        <div class="card-body">
            <h5 class="card-title">{{countrydetails["post code"]}}</h5>
            <p class="card-text">Zip Code : {{countrydetails["post code"]}}</p>            <!--  -->
            <p class="card-text">Country : {{countrydetails.country}}</p>  
            <p class="card-text">Country Short Form : {{countrydetails["country abbreviation"]}}</p> 

            <ul>
            <li v-for="place in countrydetails.places" :key="place.longitude">
                <p class="card-text">Place Name : {{place["place name"]}}</p>          
                <p class="card-text">Longitude : {{place["longitude"]}}</p> 
                <p class="card-text">Latitude : {{place["latitude"]}}</p>         
                <p class="card-text">State : {{place["state"]}}</p>          
                <p class="card-text">State Short Form : {{place["state abbreviation"]}}</p>  
            </li>  
            </ul>     
        </div>
    </div>
</div>


</template>

<script>


import axios from 'axios'

export default {
    name: 'countrydetails',
    mounted(){
        axios.get(`https://api.zippopotam.us/in/600028`)
        .then(response => { 
            console.log(response);
            this.countrydetails = response.data;
        }).catch(error => { 
            console.log(error);
        })

    },
    data() {
        return {
            countrydetails: {}
        }
    }
}

</script>

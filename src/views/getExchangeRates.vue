<style scoped>

.addmargin {
    margin-top: 10px;
    margin-bottom: 10px;
}

.vue-logo-back {
    background-color: black;
}
#data {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#data td, #data th {
  border: 1px solid #ddd;
  padding: 8px;
}

#data tr:nth-child(even){background-color: #f2f2f2;}

#data tr:hover {background-color: #ddd;}

#data th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}


</style>

<template>

<div class="home">
    <div class="vue-logo-back">
        <img src="../assets/exchangerate.png" width="100px" height="100px">
    </div>
    <div class="col-md-6 centeralign">
        <p>This Page Displays Exchange Rates by Currency Code. Example : INR</p>
        <input type="text" v-model="input.currencycode" placeholder="Currency Code" />
        <button v-on:click="getExchangeRates()">Get Exchange Rates</button>
        <div class="card-body">
            <h5 class="card-title">{{currencydetails["base"]}} TO OTHER CURRENCIES</h5>
            <table id="data">
                <tr>
                    <td>Base Currency</td>
                    <td>{{currencydetails["base"]}}</td>
                </tr>
                <tr>
                    <td>As on Date </td>
                    <td>{{currencydetails["date"]}}</td>
                </tr>
                <tr>
                    <td>USD Rate</td>
                    <td>{{currencydetails.rates.USD}}</td>
                </tr>                
                <tr>
                    <td>INR Rate</td>
                    <td>{{currencydetails.rates.INR}}</td>
                </tr>
                <tr>
                    <td>GBP Rate </td>
                    <td>{{currencydetails.rates.GBP}}</td>
                </tr>

            </table>
             
        </div>
    </div>
</div>


</template>

<script>


import axios from 'axios'

export default {
    name: 'currencydetails',
    mounted(){
        axios.get(`https://api.exchangerate-api.com/v4/latest/INR`)
        .then(response => { 
            //console.log(response);
            this.currencydetails = response.data;
        }).catch(error => { 
            //console.log(error);
        })

    },
    data() {
        return {
            input: {
                currencycode: ""
            },            
            currencydetails: {}
        }
    },

    methods: {
        getExchangeRates() {
            axios.get(`https://api.exchangerate-api.com/v4/latest/`+this.input.currencycode)
            .then(function(response)  { 
                this.currencydetails = response.data;
            }.bind(this)).catch(error => { 
                //console.log(error);
            })            
        }
    }
}

        
    
    
    


</script>

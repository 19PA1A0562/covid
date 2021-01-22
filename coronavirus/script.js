$(document).ready(function(){
    var url="https://api.covid19india.org/data.json"
    $.getJSON(url,function(data){
        var  total_active,total_recovered,total_deaths,total_confirmed;

        console.log(data);

        var state=[]
        var confirmed=[]
        var recovered=[]
        var deaths=[]
        var active =[]

        $.each(data.statewise,function(id,obj){
            state.push(obj.state);
            confirmed.push(obj.confirmed);
            recovered.push(obj.recovered);
            deaths.push(obj.deaths);
            active.push(obj.active);
        })
        state.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        active.shift()

        total_active = data.statewise[0].active;
        total_confirmed = data.statewise[0].confirmed;
        total_recovered = data.statewise[0].recovered;
        total_deaths = data.statewise[0].deaths;

       
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)
        $("#active").append(total_active)
        var myChart = document.getElementById("myChart").getContext('2d');
        var chart = new Chart(myChart,{
            type : 'line',
            data :{
                labels:state,
                datasets:[
                    {
                        label : "confirmed",
                        data : confirmed,
                        backgroundColor : "#f1c40f",
                        minBarLength :100
                    },
                ]
            },
            options:{}
        })
        var myChart = document.getElementById("myChart1").getContext('2d');
        var chart = new Chart(myChart,{
            type : 'line',
            data :{
                labels:state,
                datasets:[
                    {
                        label : "Recovered",
                        data : recovered,
                        backgroundColor : "green",
                        minBarLength :100
                    },
                ]
            },
            options:{}
        })
        
        var myChart = document.getElementById("myChart2").getContext('2d');
        var chart = new Chart(myChart,{
            type : 'line',
            data :{
                labels:state,
                datasets:[
                    {
                        label : "Active",
                        data : active,
                        backgroundColor : "blue",
                        minBarLength :100
                    },
                ]
            },
            options:{}
        })
        var myChart = document.getElementById("myChart3").getContext('2d');
        var chart = new Chart(myChart,{
            type : 'line',
            data :{
                labels:state,
                datasets:[
                    {
                        label : "Deceased",
                        data : deaths,
                        backgroundColor : "red",
                        minBarLength :100
                    },
                ]
            },
            options:{}
        })
        



    })
})
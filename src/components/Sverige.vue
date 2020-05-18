<template>
  <div class="sverige" v-if="$route.params.test === undefined">
  
        <div id="region">
        <h3 class="title">{{region}}</h3>
        <p>{{regionInfected}}</p>
        <p>{{regionDeceased}}</p>
        <p>{{regionIntensive}}</p>
        </div>

        <ul :key="region.region" v-for="region in covidData.infectedByRegion">
        <router-link :to="'sverige/' + region.region"> {{region.region}}</router-link>
        </ul>
        </div>

        <div v-else>
        <p class="title">{{$route.params.test}}</p>
        <input type="button" value="Uppdatera data" @click="fetchCity()">
        <p>{{cityInfected}}</p>
        <p>{{cityDeceased}}</p>
        <p>{{cityIntensive}}</p>
        
        </div>
</template>

<script>
export default {
  name: 'Sverige',
  beforeMount() {
        fetch('https://api.apify.com/v2/key-value-stores/8mRFdwyukavRNCr42/records/LATEST?disableRedirect=true')
            .then(response => response.json())
            .then(result => {
                console.log(result)
                
                this.covidData = result
                this.region = 'Sverige'
                this.regionInfected = 'Totalt smittade: ' + result.infected
                this.regionDeceased = 'Totalt avlidna: ' + result.deceased
                this.regionIntensive = 'Totalt intensivvårdade: ' + result.intensiveCare
            })
  },
  data() {
        return {
            covidData : {},
            cityInfected: undefined,
            cityDeceased: undefined,
            cityIntensive: undefined,
            region : undefined,
            regionInfected : undefined,
            regionDeceased : undefined,
            regionIntensive : undefined
        }
  },
  methods: {
        fetchCity(){
            fetch('https://api.apify.com/v2/key-value-stores/8mRFdwyukavRNCr42/records/LATEST?disableRedirect=true')
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                   
                    
                    for (let i = 0; i < result.infectedByRegion.length; i++ ){
                        if (result.infectedByRegion[i].region === this.$route.params.test) {
            

                            this.cityInfected = 'Smittade: ' + result.infectedByRegion[i].infectedCount
                            this.cityDeceased = 'Avlidna: ' + result.infectedByRegion[i].deathCount
                            this.cityIntensive = 'Intensivvårdade: ' + result.infectedByRegion[i].intensiveCareCount
                            
                        }    
                    }    
                })
            }   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

#region {
  position: absolute;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
  position: relative;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}

.title{
  font-size: 35px;
}
</style>

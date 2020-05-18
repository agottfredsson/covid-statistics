<template>

    <div class="world" id="advanced">Visa utökad statistik<input type="checkbox" v-model="someValue">
    <div id="world" v-if="someValue">
    <h1>World</h1>
    <p>Totalt avlidna: {{covidData.TotalDeaths}}</p>
    <p>Nya bekräftade: {{covidData.NewConfirmed}}</p>
    <p>Totalt smittade: {{covidData.TotalConfirmed}}</p>
    <p>Nya dödsfall: {{covidData.NewDeaths}}</p>
    <p>Nya återställda: {{covidData.NewRecovered}}</p>
    <p>Totalt återställda: {{covidData.TotalRecovered}}</p>
    </div>
    
    <div id="world" v-else>
    <h1>World</h1>
    <p>Totalt avlidna: {{covidData.TotalDeaths}}</p>
    <p>Nya smittade: {{covidData.NewConfirmed}}</p>
   
    </div>
    </div>
</template>

<script>
export default {
  name: 'World',
  computed: {
        someValue: {
            get() {
                return this.$store.state.someValue
            },
            set(someValue) {
                this.$store.commit('setBoolean', someValue)
            }
        }
    },
    created() {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(result => {
                console.log(result)

                this.covidData = result.Global
                this.loaded = true

            })
    },

    data() {
        return {  
            loaded: false, 
            covidData: {}
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

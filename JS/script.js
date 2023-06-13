const { createApp } = Vue;

createApp({
  data() {
    return {
      userEmail : '',
      
  }
},
  methods: {

    


  },

  created(){
    // ? this hook is executed at the creation of this Vue instance
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( (response) => {
        // § se e quando il server risponde
        const result = response.data;

        console.log(result.response);
        
        this.userEmail = result.response;

    });

}

}).mount('#app');
const { createApp } = Vue

createApp({
    data() {
        return {
            risultati: [],
        }
    },
    methods:{
        getNEmails: function(numero){
            for(let i = 0; i < numero; i++){
                //Prendi dall'indirizzo i dati.
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                // Ritornami...
                .then((response) => {
                    let risultato = response.data.response;
                    //Per poter chiamare l'array risultati, il this non funzionava perchè la function del then mi cambiava scoop del this. Invece grazie all'arrow function ho potuto prenderlo. 
                    this.risultati.push(risultato);
                })
            }
        },
    },
    created(){
        this.getNEmails(10)
    }
}).mount('#app')
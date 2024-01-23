// CHECK
console.log('JS VUE OK', Vue);

// ESTRAPOLO FUNZIONE DA VUE
const {createApp} = Vue;

// CREO VARIBILE E RICHIAMO LA FUNZIONE
const app = createApp ({
    name: 'shoppingList',
    // USO DATA CON ALL'INTENRO IL RETURN 
    data() {
        return {
            // DATE ARRAY OGGETTI
            date: arrayExpense,
        }
    },

    // METODO FUNZIONI PER ELIMINARE
    methods: {
        productFound(id) {
            const newDate = this.date.filter((element) => {
                if(id !== element.id){
                    return true;
                } else {
                    return false;
                }
            })

            this.date = newDate;
        }
    },



});

// COLLEGO ID 
app.mount('#root');

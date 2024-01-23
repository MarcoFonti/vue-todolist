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

   // METODO FUNZIONI
   methods: {
    productFound() {
        
    }
},
})

// COLLEGO ID 
app.mount('#root');

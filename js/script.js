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
            date: arrayExpense,
        }
    }
})

// COLLEGO ID 
app.mount('#root');
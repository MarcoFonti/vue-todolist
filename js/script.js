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
            // COLLEGAMENTO CON INPUT 
            newProduct: '',
        }
    },

    // METODO FUNZIONI PER ELIMINARE
    methods: {

        // FUNZIONE CON PARAMETRO ID CLICCATA
        productFound(id) {
            // METODO FILTER TOGLIERE ELEMENTI 
            const newDate = this.date.filter((element) => {
                // VERIFICO ID CLICCATO CON ID DELL'ELEMENTO
                if(id !== element.id){
                    // SE NON SONO UGUALI
                    return true;
                } else {
                    // SE SONO UGUALI
                    return false;
                }
            })

            // RIASSEGNO DATE CON NEWDATE
            this.date = newDate;
        },

        // FUNZIONE PER AGGIUNGERE ELEMENTO
        addProduct() {
            // CREO NUOVO OGETTO
            const addText = {
                id: new Date().toISOString(),
                done: false,
                text: this.newProduct,
            }

            // LO METTO DENTRO A DATE
            this.date.push(addText);

            // OGNI VOLTA SVOTO INPUT
            this.newProduct = '';
        },
    },
    
});

// COLLEGO ID 
app.mount('#root');

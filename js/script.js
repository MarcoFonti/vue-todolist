// CHECK
console.log('JS VUE OK', Vue);


/* ESTRAPOLO FUNZIONE DA VUE */
const { createApp } = Vue;


/* CREO VARIBILE E RICHIAMO LA FUNZIONE */
const app = createApp({


    /* NOME PAGINA */
    name: 'shoppingList',


    /* DATI DI BASE DA UTILIZZARE */
    data() {
        return {


            /* DATI ARRAY */
            date: arrayExpense,


            /* COLLEGAMNETO INPUT */
            newProduct: '',
        }
    },


    /* CREO FUNZIONI */
    methods: {


        /* FUNZIONE PER ELIMINARE GLI ELEMENTI PASSANDO COME ARGOMENTO ID */
        productFound(id) {


            /* RECUPERO I DATI DELL'ARRAY NELLA FUNZIONE DATA() E USO IL METODO FILTER PER SELEZIONARE SOLO ALCUNI ELEMENTI */
            const newDate = this.date.filter((element) => {


                /* SE ID DEL ELEMENTO DENTRO ARRAY NON E' IDENTICO ALL'ID SELEZIONATO DALL'UTENTE */
                if (id !== element.id) {


                    /* RESTITUISCO TRUE(INCLUSO) */
                    return true;


                    /* ALTRIMENTI */
                } else {


                    /* RESTITUISCO FALSE(ESCLUSO) */
                    return false;
                }
            })


            /* RIASSEGNO L'ARRAY PRINCIPALE CON L'ARRAY FILTRATO (SOLO GLI ELEMENTI INCLUSI) */
            this.date = newDate;
        },


        /* FUNZIONE PER AGGIUNGERE ELEMENTI */
        addProduct() {


            /* CREO UN NUOVO OGGETTO CON LE CHIAVI CHE MI SERVONO */
            const addText = {
                id: new Date().toISOString(),
                done: false,
                text: this.newProduct,
            }


            /* RECUPERO I DATI E GLI METTODO DENTRO IL NUOVO OGETTO */
            this.date.push(addText);


            /* AD OGNI INVIO SVUTO INPUT */
            this.newProduct = '';
        },
    },

});


/* COLLEGO ID HTML */
app.mount('#root');

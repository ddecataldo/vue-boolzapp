/* 
Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto
*/

Vue.config.devtools = true;

new Vue({
    el: "#main",
    data: {
        userList: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        statusPopUp: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        statusPopUp: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        statusPopUp: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        statusPopUp: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        statusPopUp: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        statusPopUp: false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        statusPopUp: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        statusPopUp: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        statusPopUp: false,
                    }
                ],
            },
            {
                name: 'Bea',
                avatar: 'img/avatar_6.jpg',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        statusPopUp: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        statusPopUp: false,
                    }
                ],
            },
        ],
        userText: "",
        textSearch: "",
        activeChat: {},
    },
    methods: {
        onChatClick(chatDaAttivare) {
            // assegno a activeChat l'elemento dell'oggetto appena cliccato (l'argomento della funziona assegna l'elemento appena cliccato)
            this.activeChat = chatDaAttivare;
        },
        onSubmitClick(){

            // Controllo se l'utente ha inserito del testo, se non lo ha fatto esco dalla funzione
            if (this.userText === "") {
                return;
            }

            // All'elemento dell'oggetto corrisponte alla chat attiva pusho i dati: "date", "text", "status"
            this.activeChat.messages.push(
                {
                    date: "04/11/2021 17:40:00",
                    text: this.userText,
                    status: "sent"
                }
            );

            // Resetto il campo compilato dall'utente
            this.userText = "";

            // Imposto un intervallo per la risposta dell'utente
            setTimeout(() => {
                // Dopo 1 secondo pusho il messaggio
                this.activeChat.messages.push(
                    {
                        date: "04/11/2021 19:00:00",
                        text: "Ho ricevuto il messaggio",
                        status: "received"
                    }
                );
            }, 1000);
            
        },
        getFilteredData(){

            // Controllo se textSearch esiste, quindi se è stato inserito un valore
            if(!this.textSearch){
                // Se non è stato inserito alcun valore mi ritorna l'array di oggetti userList
                return this.userList;
            }

            // Il metodo filter() mi permette di filtrare gli elementi tramite una funzione
            // Ritorna un array contenente tutti i valori che ritornano true
            return this.userList.filter((contact) => { // (contact fa riferimento all'elemento corrente del ciclo)

                // Con il metodo includes() ottengo true se l’array contiene il valore indicato, altrimenti false.
                // Con la risposta ritornata dal metodo includes(), il metodo filter() crea l'array
                return contact.name.toLowerCase().includes(this.textSearch.toLowerCase().trim());
            }
        )},
        deleteMessages(elemento){
            this.activeChat.messages.splice(elemento, 1)
        },
        shoPopUp(){
            
        }

    },
    beforeMount(){
        this.activeChat = this.userList[0];
    }
});
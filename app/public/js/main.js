// const Person = {
//     data() {
//       return {
//         //"person": {},
//         "books":[]
//       }
//     },
//     created() {
//      // this.refreshUser();
//       this.fetchBookData();
//       console.log("B");
//     },
//     computed: {
//       /*pretty() {
//         return dayjs(this.person.dob.date)
//           .format('D MMM YYYY');

//       }
//       */
//     },
//     methods: {
//       refreshUser() {
//         fetch('https://randomuser.me/api/')
//         .then(response => response.json())
//         .then((parsedJson) => {
//           console.log(parsedJson);
//           this.person = parsedJson.results[0]
//           this.picture = this.person.picture.large
//           this.address = this.person.location.street.number + this.person.location.street.name
//           console.log("C");
//         })
//         .catch(err => {
//           console.error(err)
//         })
//       },
//       fetchBookData(){
//         fetch('/api/books/')
//         .then( response => response.json() )
//         .then( (responseJson) => {
//             console.log(responseJson);
//             this.books = responseJson;
//             console.log(this.books);
//             console.log(books);
//         })
//         .catch( (err) => {
//             console.log(this.books);
//             console.error(err);
//         })
//     }
//     }
//   }
// Vue.createApp(Person).mount('#personApp');

const Offer = {
    data() {
        
            return {
                books: [],
                bookForm: {},
                selectedBook: null
            }
        },
        computed: {
            // prettyBirthday() {
            //     return dayjs(this.person.dob.date)
            //     .format('D MMM YYYY');
            // }
        },
        methods: {
            /*selectStudent(s) {
                console.log("Clicked", s);
                if (this.selectedStudent == s) {
                    return;
                }
      
                this.selectedStudent = s;
                this.offers = [];
                this.fetchOfferData(s);
            },
           /* fetchStudentData() {
                fetch('/api/student/')
                .then(response => response.json())
                .then((parsedJson) => {
                    console.log(parsedJson);
                    this.students = parsedJson
                })
                .catch( err => {
                    console.error(err)
                })
            },*/
            fetchBooksData() {
                fetch('/api/books/')
                    .then(response => response.json())
                    .then((parsedJson) => {
                        console.log(parsedJson);
                        this.books = parsedJson
                    })
                    .catch(err => {
                        console.error(err)
                    })
            },

            postNewBook(evt) {
                //this.bookForm.bookId = this.selectedBook.id;        
               // console.log("Posting:", this.bookForm);
                // alert("Posting!");
        
                fetch('api/books/create.php', {
                    method:'POST',
                    body: JSON.stringify(this.bookForm),
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    }
                  })
                .then( response => response.json() )
                .then( json => {
                    console.log("Returned from post:", json);
                    // TODO: test a result was returned!
                    this.books = json;
                    
                    // reset the form
                    this.bookForm = {};
                  });
            }, 
            // handleResetBook(){
            //     this.selectedBook = null;
            //     this.bookForm = {};
            // }   
        },
        created() {
            this.fetchBooksData();
        }
    }

Vue.createApp(Offer).mount('#offerApp');



const Person = {
    data() {
      return {
        "person": {},
        "books":[]
      }
    },
    created() {
      this.refreshUser();
      console.log("B");
    },
    computed: {
      pretty() {
        return dayjs(this.person.dob.date)
          .format('D MMM YYYY');
  
      }
    },
    methods: {
      refreshUser() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((parsedJson) => {
          console.log(parsedJson);
          this.person = parsedJson.results[0]
          this.picture = this.person.picture.large
          this.address = this.person.location.street.number + this.person.location.street.name
          console.log("C");
        })
        .catch(err => {
          console.error(err)
        })
      }
    }
  }
  
  Vue.createApp(Person).mount('#personApp');

  fetchBookData(){
    fetch('/api/books/')
    .then( response => response.json() )
    .then( (responseJson) => {
        console.log(responseJson);
        this.books = responseJson;
        console.log(this.books);
        console.log(books);
    })
    .catch( (err) => {
        console.log(this.books);
        console.error(err);
    })
}
},
created() {
this.fetchBookData();
}

}

Vue.createApp(App).mount('#bookApp');

console.log("Z");
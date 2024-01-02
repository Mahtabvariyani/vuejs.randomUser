const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName:"Amar",
      email:"Jogn@amar.com",
      gender:"male",
      Picture:"https://www.verywellfamily.com/thmb/gR2eF_5vnQnnyWha-_KrOi_Py8Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RyanMcVay-1c03185833044907a057ece30aa5b62b.jpg"
    };
  },
  methods:{
    async getUser(){
        const res = await fetch('https://randomuser.me/api')
        const {results} = await res.json()
        console.log(results)
        this.firstName= results[0].name.first,
        this.lastName=results[0].name.last,
        this.email=results[0].email,
        this.gender=results[0].gender,
        this.Picture=results[0].picture.large
     
    }
  }
});

app.mount("#app");

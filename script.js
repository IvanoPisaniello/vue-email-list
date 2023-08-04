
const app = Vue.createApp({

    data() {

        return {
            randomMail: [],

        }
    },

    methods: {

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((axiosResp) => {
                    this.randomMail.push(...axiosResp.data.response)
                    console.log(axiosResp)
                })
        }

    }

})

app.mount("#app")

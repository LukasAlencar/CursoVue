const MyNameAPP = {
    data() {
        return{
            name: "",
            input_name: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            console.log(this.input_name);
            this.name = this.input_name;
        }
    }

}

Vue.createApp(MyNameAPP).mount("#app");
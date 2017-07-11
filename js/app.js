new Vue({
    el: "#vue-app",
    data: {
        name: "Vijay Chaudhari",
        job: "Developer"
    },
    methods: {
        greet: function (time) {
            return "Good " + time + ", " + this.name;
        }
    }
});
new Vue({
    el: "#vue-app",
    data: {
        name: "Vijay Chaudhari",
        score: 55
    },
    methods: {
        greet: function (time) {
            return "Good " + time + ", " + this.name;
        }
    }
});
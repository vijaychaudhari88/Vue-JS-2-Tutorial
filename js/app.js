new Vue({
    el: "#vue-app",
    data: {
        name: "Vijay Chaudhari",
        score: 55
    },
    methods: {
        add: function () {
            this.score++
        },
        subtract: function () {
            this.score--;
        }
    }
});
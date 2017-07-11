new Vue({
    el: "#vue-app",
    data: {
        name: "Vijay Chaudhari",
        score: 55
    },
    methods: {
        add: function (num) {
            this.score += num;
        },
        subtract: function (num) {
            this.score -= num;
        }
    }
});
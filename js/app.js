new Vue({
    el: "#vue-app",
    data: {
        name: "Vijay Chaudhari",
        score: 55,
        x: 0,
        y: 0
    },
    methods: {
        add: function (num) {
            this.score += num;
        },
        subtract: function (num) {
            this.score -= num;
        },
        updateXY: function (events) {
            this.x = events.offsetX;
            this.y = events.offsetY;
        }
    }
});
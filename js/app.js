new Vue({
    el: "#vue-app",
    data: {

    },
    methods: {
        logName: function (event) {
            console.log(event.target.value);
        },
        logAge: function (event) {
            console.log(event.target.value);
        }
    }
});
new Vue({
    el: "#vue-app",
    data: {
        name: "Vijay Chaudhari",
        job: "Developer",
        website: "https://vuejs.org/v2/guide/",
        websiteTag: '<a href="https://vuejs.org/v2/guide/">Vue.js Guide</a>'
    },
    methods: {
        greet: function (time) {
            return "Good " + time + ", " + this.name;
        }
    }
});
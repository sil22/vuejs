new Vue({
    el: '#app',
    data: {
        greeting: 'Hello World!',
        link: 'http://google.com',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeGreeting: function(event) {
            this.greeting = event.target.value;
        },
        increase: function(step, event) {
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert("alert!");
        }
    }
})
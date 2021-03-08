const app = new Vue({
    el:'#app',
    data() {
        return {
            title: "Contador App Vue",
            count: 0,
        }
    },

    methods: {
        modCount(ins ="add", limit = 1){
            if (ins === "dis")  this.count -= limit;    
            else this.count +=limit;
        },

      
    },
})
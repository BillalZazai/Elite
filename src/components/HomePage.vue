<template> 
    <div>
        <h1>{{login}}</h1>
        
        <b-button variant="success" @click='toggleTrue' >True</b-button>

        <b-button @click='toggleFalse'>False </b-button>
     
    </div>

</template>

<script> 
export default {
    name: "HomePage",
    computed : {
        login:function () { return this.$store.getters.getLoginStatus}
    }
    ,
    methods:{
        toggleTrue:function () { this.$store.commit('toggleLoginStatusTrue')},
        toggleFalse:function () { this.$store.commit('toggleLoginStatusFalse')}
    } 
}


</script>

<style scoped>

.btn {
    margin: 30px;
}




</style>
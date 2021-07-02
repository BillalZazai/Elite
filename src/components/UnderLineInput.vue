<template>
  <input
    :type="type"
    :value="value"
    :placeholder="inputPlaceholder"
    @input="handleChange($event.target.value)"
    
  />
</template>

<script>
export default {
  name: "UnderLineInput",
  props: { value: {type:String,required:true}, inputPlaceholder: {type:String,required:true},type:{type:String, default:"text"} },
  methods: {
    handleChange(text) {
      this.$emit("input", text);
    },
  },
};
</script>>


<style scoped>
input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid white;
  color: white;
  width: 40vw;
  
}
input:focus {
  outline: none;
}
</style>






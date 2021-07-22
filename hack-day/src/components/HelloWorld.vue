<template>
  <div class="hello">
    <h1 style="font-size:15vw">{{ msg }}</h1>
    <p>
      <br><br>
      <font size="10">Welcome, Justworker! Here's your starter pack! </font>
    </p>

    <img alt="Vue logo" src="../assets/alexis.png" style="width: 350px; height: 500px;">
    <img alt="Vue logo" src="../assets/mario.png" style="width: 350px; height: 500px;">
    <img alt="Vue logo" src="../assets/Ritu.png" style="width: 350px; height: 500px;">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

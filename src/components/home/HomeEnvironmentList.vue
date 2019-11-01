<template>
  <ul>
    <li v-for="app in apps" :key="app" @click="selectedItem(app)">
      <a href="javascript:void(0);">
        <div id="title">{{app.environment}}</div>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "HomeEnvironmentList",
  props: {
    apps: {
      default: null
    }
  },
  methods: {
    selectedItem(app) {
      this.$emit("selectedItem", app);
    }
  }
};
</script>
<style scoped>
ul {
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  text-align: left;
}
li a {
  display: block;
  text-decoration: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
li a:hover {
  background-color: rgb(234, 234, 234);
}
#title {
    font-size: 1.5rem;
    color: #333333;
}
</style>
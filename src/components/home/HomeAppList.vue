<template>
  <ul>
    <li v-for="app in apps" :key="app" @click="selectedItem(app)">
      <a href="javascript:void(0);">
        <div id="title">{{app.displayName}}</div>
        <div id="detail">{{formatCreateDate(app.createdDate)}}</div>
      </a>
    </li>
  </ul>
</template>
<script>
import dateFormat from 'dateformat'
export default {
  name: "HomeAppList",
  props: {
    apps: {
      default: null
    }
  },
  methods: {
    formatCreateDate(createDate) {
      var date = new Date(createDate)
      return dateFormat(date, "yyyy年mm月dd日 HH时MM分ss秒")
    },
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
  color: #333333;
  font-size: 1.2rem;
}
#detail {
  color: #666666;
  font-size: 0.8rem;
}
</style>
<template>
  <download-excel class="button" :data="jsonData">
    Download Excel
  </download-excel>
</template>

<script>
import JsonExcel from "vue-json-excel3";

export default {
  components: {downloadExcel:JsonExcel},
  data() {
    return {
      jsonData: [],
      json_data: [
              {
                id: "1",
                title: "iphone9",
                description: "best phone ever",
                price: "1000$",
                discountPercentage: "0",
                rating: "4,9",
                stock: "314",
                brand: "mapple",
                category: "smartphone",
                thumbnail: "none",
              },
      ],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch('https://dummyjson.com/products/1');
      const data = await response.json();
      this.jsonData = data;
      this.jsonData = JSON.parse(JSON.stringify(this.json_data));
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>

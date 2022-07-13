<script setup lang="ts">
import {getCurrentInstance, ComponentInternalInstance} from 'vue'
const { proxy } = getCurrentInstance() as ComponentInternalInstance as any;
proxy.$axios.get('www/baidu.com')
proxy.$axiosAuth.get('www1/baidu.com')
const projectName = import.meta.env.VITE_PRO_TITLE
</script>

<template>
  <h1>{{projectName}}</h1>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

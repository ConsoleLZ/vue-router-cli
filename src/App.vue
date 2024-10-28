<template>
  <div id="app">
    <ThemeSwitchComp />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import ThemeSwitchComp from "@/components/theme-switch/index.vue";

export default defineComponent({
  components: {
    ThemeSwitchComp,
  },
  setup() {
    onMounted(() => {
      const html = document.querySelector("html");
      const theme = localStorage.getItem("theme");
      html.dataset.theme = theme || "light";
    });
  },
});
</script>

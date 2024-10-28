import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const methods = {
      onChangeTheme(e) {
        const html = document.querySelector("html");
        const theme = e.target.checked ? "light" : "dark";
        html.dataset.theme = theme;
        localStorage.setItem("theme", theme);
      },
      // 设置开关
      setSwitch() {
        const themeToggle = document.querySelector("#themeToggle");
        const theme = localStorage.getItem("theme");
        if (theme) {
          themeToggle.checked = theme === "light";
        }
      },
    };

    onMounted(() => {
      methods.setSwitch();
    });
    return {
      ...methods,
    };
  },
});

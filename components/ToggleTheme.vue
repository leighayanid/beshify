<template>
  <div>
    <button @click="toggle">
      <div v-if="colorMode.value === 'dark'">
        <IconDark />
      </div>
      <div v-else>
        <IconLight />
      </div>
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

import IconDark from "./IconDark.vue";
import IconLight from "./IconLight.vue";

const toggle = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};
</script>

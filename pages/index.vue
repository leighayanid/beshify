<template>
  <div
    class="w-full dark:bg-zinc-800 dark:text-slate-100 bg-slate-100 text-zinc-800 md:h-screen h-fit grid place-items-center md:p-0 p-5 transition-colors"
  >
    <div class="card space-y-5 md:w-1/2 w-full">
      <div class="flex justify-between items-center">
        <h1 class="text-5xl font-lobster">🤸 Beshify 🤸</h1>
        <ToggleTheme />
      </div>
      <input
        type="text"
        class="w-full input input-primary input-lg"
        v-model="beshy"
        placeholder="type mo na yan beshy.."
        @input="addCartWheelEmoji"
      />
      <transition name="fade">
        <div
          class="dark:border-2 border dark:border-zinc-100 border-zinc-800 w-full"
          v-if="beshy"
        >
          <h1 class="bg-pink-500 text-md p-3 flex justify-between">
            Generated text 💅
            <span
              @click="copyToClipboard"
              class="cursor-pointer bg-pink-800 px-3 rounded-lg text-sm grid place-items-center"
              >{{ copied && beshy ? "Copied!" : "Copy" }}</span
            >
          </h1>
          <div class="px-8 py-12 bg-base-200">
            <p class="font-lobster text-3xl">{{ beshified }}</p>
          </div>
          <span></span>
        </div>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const beshy = ref<string>("");
const beshified = ref<string>("");
const copied = ref<boolean>(false);

useSeoMeta({
  title: "Beshify mo na yan.. UWU",
});

definePageMeta({
  colorMode: "dark",
});

function addCartWheelEmoji() {
  const cleanedInput = beshy.value.replace(/\s+/g, " ");
  const words = cleanedInput.split(" ");
  const beshifiedText = words.join(" 🤸 ");
  beshified.value = beshifiedText;
}

function copyToClipboard() {
  navigator.clipboard
    .writeText(beshified.value)
    .then(() => {
      copied.value = true;
    })
    .catch((error) => {
      console.error("Error copying text to clipboard:", error);
    });
}

watch(beshy, () => {
  copied.value = false;
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

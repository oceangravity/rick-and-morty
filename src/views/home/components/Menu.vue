<template>
  <div class="bg-[#F2F2F2]">
    <div class="container mx-auto flex max-w-screen-xl">
      <div class="flex min-h-[80px] w-full items-center justify-center">
        <div class="relative grid h-full w-full grid-cols-5 flex-row items-center justify-center">
          <div
            v-for="(item, index) in store.menu.items"
            :key="index"
            :class="[
              index === store.menu.active ? 'after:bg-orange-600' : 'after:transparent',
              { 'font-bold': index === store.menu.active },
            ]"
            class="relative flex h-full cursor-pointer select-none items-center justify-center text-black after:absolute after:bottom-0 after:h-1 after:w-full"
            @mousedown="activeMenu(index)"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useStore();
const activeMenu = (index: MenuActive) => {
  store.showFavorites = false
  store.currentPage = 1
  store.menu.active = index
}
</script>
<style scoped></style>

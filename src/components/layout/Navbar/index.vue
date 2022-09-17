<template>
  <div
    class="header-image relative flex flex-col items-center justify-center gap-4 bg-opacity-50 bg-cover bg-center bg-no-repeat p-4 xl:min-h-[455px]"
  >
    <img
      class="ricky-and-morty-glow-animation"
      :src="RickAndMortyLogo"
      height="122"
      width="347"
      alt=""
    />

    <div class="relative w-full max-w-[500px] text-[#F2F2F2] focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-4">
        <button type="submit" class="focus:shadow-outline focus:outline-none">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            class="overflow-visible"
          >
            <path
              d="M27.8072 26.3362L20.7529 19.2819C20.6271 19.1561 20.4631 19.0905 20.2881 19.0905H19.7248C21.6005 17.0617 22.7489 14.3548 22.7489 11.3744C22.7489 5.09116 17.6577 0 11.3744 0C5.09116 0 0 5.09116 0 11.3744C0 17.6577 5.09116 22.7489 11.3744 22.7489C14.3548 22.7489 17.0617 21.6005 19.0905 19.7303V20.2881C19.0905 20.4631 19.1616 20.6271 19.2819 20.7529L26.3362 27.8072C26.5932 28.0643 27.0088 28.0643 27.2659 27.8072L27.8072 27.2659C28.0643 27.0088 28.0643 26.5932 27.8072 26.3362ZM11.3744 20.999C6.05361 20.999 1.74991 16.6953 1.74991 11.3744C1.74991 6.05361 6.05361 1.74991 11.3744 1.74991C16.6953 1.74991 20.999 6.05361 20.999 11.3744C20.999 16.6953 16.6953 20.999 11.3744 20.999Z"
              fill="#F2F2F2"
            />
          </svg>
        </button>
      </span>
      <input
        v-model="store.queryString"
        type="search"
        name="q"
        class="min-h-[60px] w-full rounded-md border-2 border-[#F2F2F2] bg-gray-900 py-2 pl-14 pr-4 text-[18px] text-white placeholder-white focus:bg-white focus:text-gray-900 focus:placeholder-transparent focus:outline-none"
        placeholder="Buscar personaje"
        autocomplete="off"
        @input="debouncedSearch"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import RickAndMortyLogo from "@/assets/rnm-logo.png";
import { useDebounceFn } from '@vueuse/core'
const store = useStore()
const debouncedSearch = useDebounceFn(() => {
  store.fetchCharacters()
}, 1000)
</script>

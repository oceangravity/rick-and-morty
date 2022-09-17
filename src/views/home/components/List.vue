<template>
  <div class="min-h-screen bg-white py-12 px-6">
    <div class="container mx-auto flex max-w-screen-xl">
      <div class="flex min-h-full w-full flex-col items-center justify-center gap-6">
        <div
          v-if="!store.error" class="flex w-full cursor-pointer items-center gap-2"
          @mousedown="store.showFavorites = !store.showFavorites">
          <span class="text-[14px] font-normal text-black">Mostrar favoritos</span>
          <img
            class="" width="30" height="30" :src="`@/assets/favorite-${store.showFavorites ? 'on' : 'off'}.svg`"
            alt="" />
        </div>

        <template v-if="store.showFavorites">
          <div v-if="!store.favorites.length" class="flex justify-center items-center gap-4 flex-col text-center">
            <h1 class="text-4xl font-medium text-[#5E5E5E]">¿En serio?</h1>
            <span class="text-2xl text-[#5E5E5E]">¡Aún no agregas un favorito!</span>
            <button
              class="flex items-center justify-center rounded-3xl bg-gray-600 px-6 py-3 text-white font-medium"
              @mousedown="clear">
              Agregar
            </button>
          </div>
          <div
            class="grid h-full w-full grid-cols-1 flex-row items-center justify-center gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            <CharacterCard
              v-for="(item, index) in store.favorites"
              :key="index"
              :item="item"
              @mousedown="openModal(item)"
            />
          </div>
        </template>


        <template v-else>
          <div v-if="store.error" class="flex justify-center items-center gap-4 flex-col text-center">
            <h1 class="text-4xl font-medium text-[#5E5E5E]">Uh, oh!</h1>
            <span class="text-2xl text-[#5E5E5E]">¡Pareces perdido en tu viaje!</span>
            <button class="flex items-center justify-center rounded-3xl bg-gray-600 px-6 py-3 text-white font-medium"
                    @mousedown="clear">
              Eliminar Filtros
            </button>
          </div>
          <div
            v-else
            class="grid h-full w-full grid-cols-1 flex-row items-center justify-center gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            <template v-if="store.loading">
              <SkeletonCard
                v-for="index in 20"
                :key="index"
              />
            </template>

            <template v-else>
              <CharacterCard
                v-for="(item, index) in store.characters"
                :key="index"
                :item="item"
                @mousedown="openModal(item)"
              />
            </template>
          </div>

        </template>
      </div>
    </div>
    <pagination
      v-if="!store.error && store.info && !store.showFavorites"
      :max-visible-buttons="3" :total-pages="store.info.pages" :total="store.info.count" :per-page="20"
      :current-page="store.currentPage" @pagechanged="onPageChange"></pagination>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue"

const store = useStore()

onMounted(async () => {
  await store.fetchCharacters()
})

const onPageChange = async (page: number) => {
  store.currentPage = page
}

const clear = () => {
  store.currentPage = 1
  store.queryString = ""
  store.menu.active = "all"
  store.fetchCharacters()
}

const openModal = (data: Character) => {
  store.modal.active = true
  store.currentCharacter = data
}

watch([() => store.menu.active, () => store.currentPage], async () => {
  await store.fetchCharacters()
})
</script>

<template>
  <div class="flex h-full w-full select-none overflow-hidden rounded-xl border text-black" data-character-card>
    <div class="flex flex-1">
      <div class="relative flex h-[140px] w-[140px] items-center justify-center">
        <img class="" width="140" height="140" :src="props.item.image" alt=""  decoding="async" loading="lazy" />
        <div class="absolute flex h-full w-full cursor-pointer items-end justify-end p-2">
          <img v-if="chekcFavorite" class="" width="30" height="30" src="@/assets/favorite-on.svg" alt="" @mousedown.prevent.stop="removeFromFavorites"/>
          <img v-else class="" width="30" height="30" src="@/assets/favorite-off.svg" alt="" @mousedown.prevent.stop="addToFavorites"/>
        </div>
      </div>
      <div class="flex w-full flex-1 flex-col justify-between px-4 py-3">
        <div>
          <div class="flex items-center gap-1">
            <div
              class="flex h-1.5 w-1.5 items-center justify-center rounded-full bg-[#27AE60]"
            ></div>
            <span class="text-[10px]">{{ props.item.status }} - {{ props.item.species }}</span>
          </div>
          <div class="leading-3">{{ props.item.name }}</div>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-[10px]">Last known location:</span>
          </div>
          <div class="text-[12px] leading-3">
            {{ props.item.location ? props.item.location?.name : "Unkown" }}
          </div>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-[10px]">First seen in:</span>
          </div>
          <div class="text-[12px] leading-3">
            {{ item.episodesFetched && item.episodesFetched.length && item.episodesFetched[0].name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  item: Character;
}

const props = defineProps<IProps>();
const store = useStore()

const addToFavorites = () => {
  store.favorites.push(props.item)
}

const removeFromFavorites = () => {
  store.favorites.splice(store.favorites.findIndex(item => item.id === props.item.id), 1)
}

const chekcFavorite = computed(() => store.favorites.findIndex(item => item.id === props.item.id) > -1)
</script>

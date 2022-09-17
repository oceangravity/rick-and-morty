<template>
  <Teleport to="body">
    <div class="relative" :class="[store.modal.active ? 'z-10' : '-z-10']">
      <div
        :class="[store.modal.active ? 'opacity-1' : 'opacity-0']"
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          ref="modal"
          class="flex min-h-full items-start justify-center p-4 text-center sm:items-center"
        >
          <div
            :class="[store.modal.active ? 'opacity-1' : 'opacity-0']"
            class="relative max-h-[calc(100vh-50px)] w-full transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all duration-700 sm:max-w-[740px]"
          >
            <div>
              <div>
                <div
                  class="modal-header-image relative flex h-[100px] items-start justify-end bg-cover bg-center bg-no-repeat p-4 xl:h-[220px]"
                >
                  <img
                    class="cursor-pointer"
                    width="29"
                    height="29"
                    src="src/assets/close.svg"
                    alt=""
                    @mousedown="store.modal.active = false"
                  />
                </div>
                <div
                  class="flex h-[179px] flex-col items-center justify-end gap-1 bg-[#F2F2F2] pb-3"
                >
                  <div class="relative flex w-full -translate-y-[.8rem] items-end justify-center">
                    <div
                      class="absolute flex h-[155px] min-h-[155px] w-[155px] min-w-[155px] items-center justify-center overflow-hidden rounded-full border-4 border-white"
                    >
                      <img class="" :src="store.currentCharacter.image" alt="" />
                    </div>
                    <div
                      class="fixed w-[29px] w-[29px] translate-y-[40%] overflow-hidden rounded-full border-[3px] border-white bg-white"
                    >
                      <img
                        class=""
                        width="26"
                        height="26"
                        src="src/assets/favorite-on.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="text-[12px] font-medium text-[#4F4F4F] uppercase">{{ store.currentCharacter.status }}</div>
                  <div class="text-[20px] font-semibold text-[#081F32]">{{ store.currentCharacter.name }}</div>
                  <div class="text-[12px] font-medium text-[#4F4F4F] uppercase">{{ store.currentCharacter.species }}</div>
                </div>
              </div>
            </div>

            <div
              ref="modalScroll"
              class="max-h-[calc(100vh-329px)] overflow-y-scroll xl:max-h-[calc(100vh-449px)]"
            >
              <div class="flex flex-col gap-2 px-6 py-4">
                <span class="text-[20px] font-semibold text-[#081F32]">Información</span>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
                  <div
                    class="flex w-full flex-col justify-between gap-2 rounded border border-[#E0E0E0] p-4"
                  >
                    <div class="flex items-center gap-2">
                      <img src="src/assets/info.svg" alt="" />
                      <span class="flex items-center text-xs leading-3">Gender</span>
                    </div>
                    <div class="text-[17px] font-semibold leading-3 text-[#081F32]">{{ store.currentCharacter.gender }}</div>
                  </div>
                  <div
                    class="flex w-full flex-col justify-between gap-2 rounded border border-[#E0E0E0] p-4"
                  >
                    <div class="flex items-center gap-2">
                      <img src="src/assets/info.svg" alt="" />
                      <span class="flex items-center text-xs leading-3">Origin</span>
                    </div>
                    <div class="text-[17px] font-semibold leading-3 text-[#081F32] leading-4">{{ store.currentCharacter.origin?.name }}</div>
                  </div>
                  <div
                    class="flex w-full flex-col justify-between gap-2 rounded border border-[#E0E0E0] p-4"
                  >
                    <div class="flex items-center gap-2">
                      <img src="src/assets/info.svg" alt="" />
                      <span class="flex items-center text-xs leading-3">Type</span>
                    </div>
                    <div class="text-[17px] font-semibold leading-3 text-[#081F32]">{{ store.currentCharacter.type || 'Unknown' }}</div>
                  </div>
                </div>
              </div>

              <div class="px-6 py-2">
                <hr class="border" />
              </div>

              <div class="flex flex-col gap-2 px-6 py-4">
                <span class="text-[20px] font-semibold text-[#081F32]">Episodios</span>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
                  <div
                    v-for="(item, index) in store.currentCharacter.episodesFetched"
                    :key="index"
                    class="flex w-full flex-col justify-center gap-2 rounded border border-[#E0E0E0] px-2.5 py-2"
                  >
                    <div class="text-[11px] font-normal leading-3 text-[#081F32]">{{ item.episode }}</div>
                    <div class="text-[14px] leading-4 font-semibold leading-3 text-[#081F32] flex-1">{{ item.name }}</div>
                    <div class="text-[11px] font-normal leading-3 text-[#081F32]">
                      {{ item.air_date }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-6 py-2">
                <hr class="border" />
              </div>

              <div class="flex flex-col gap-2 px-6 pt-4 pb-6">
                <span class="text-[20px] font-semibold text-[#081F32]"
                  >Personajes interesantes</span
                >
                <div class="grid grid-cols-1 justify-between gap-6 md:grid-cols-2">
                  <CharacterCard v-for="(item, index) in store.randomCharacters" :key="index" :item="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { onMounted, watch, nextTick, ref, computed } from "vue";

const store = useStore();
const modalScroll = ref();
const modal = ref();

onMounted(() => {
  modal.value.addEventListener(
    "wheel",
    (event: WheelEvent) => {
      if (!store.modal.pass) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    },
    { passive: false }
  );

  modalScroll.value.addEventListener(
    "wheel",
    (event: WheelEvent) => {
      if (store.modal.active && event.deltaY < 0 && modalScroll.value.scrollTop !== 0) {
        store.modal.pass = true;
        return true;
      }

      if (
        store.modal.active &&
        event.deltaY > 0 &&
        modalScroll.value.scrollTop !==
          modalScroll.value.scrollHeight - modalScroll.value.offsetHeight
      ) {
        store.modal.pass = true;
        return true;
      }

      event.preventDefault();
      event.stopPropagation();
      return false;
    },
    { passive: false }
  );

  const app = document.querySelector("body") as HTMLElement;

  app.addEventListener(
    "wheel",
    (event) => {
      if (store.modal.active && !store.modal.pass) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
      store.modal.pass = false;
    },
    { passive: false }
  );
});

const modalStatus = computed(() => store.modal.active);

watch(modalStatus, async (active) => {
  if (active) {
    const modal = document.querySelector("[data-modal-scroll]") as HTMLElement;

    if (modal) {
      await nextTick(() => {
        modal.focus();
      });
    }

    await store.fetchRandomCharacters()
  }
});
</script>

<template>
  <div class="flex justify-center py-5">
    <nav aria-label="Page navigation example">
      <ul class="flex list-style-none gap-2">
        <li>
          <button
            type="button"
            aria-label="Go to first page"
            :disabled="isInFirstPage"
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
            @click="onClickFirstPage"
          >
            First
          </button>
        </li>

        <li>
          <button
            type="button"
            aria-label="Go to previous page"
            :disabled="isInFirstPage"
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
            @click="onClickPreviousPage"
          >
            Previous
          </button>
        </li>

        <li v-for="(page, index) in pages" :key="index">
          <button
            type="button"
            :aria-label="`Go to page number ${page.name}`"
            :class="{ 'text-gray-800': isPageActive(page.name), 'bg-gray-200': isPageActive(page.name) }"
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            :disabled="page.isDisabled"
            @click="onClickPage(page.name)"
          >{{ page.name }}
          </button>
        </li>

        <li>
          <button
            type="button"
            aria-label="Go to next page"
            :disabled="isInLastPage"
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
            @click="onClickNextPage"
          >
            Next
          </button>
        </li>

        <li>
          <button
            type="button"
            :disabled="isInLastPage"
            aria-label="Go to last page"
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
            @click="onClickLastPage"
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  maxVisibleButtons: number,
  totalPages: number,
  total: number,
  perPage: number,
  currentPage: number
}

const props = defineProps<IProps>()

const emit = defineEmits<{
  (event: "pagechanged", page: number): void
}>()

const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1
  }

  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons + 1
  }

  return props.currentPage - 1
})

const endPage = computed(() => Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages))

const pages = computed(() => {
  const range = []

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage
    })
  }

  return range
})

const isInFirstPage = computed(() => props.currentPage === 1)

const isInLastPage = computed(() => props.currentPage === props.totalPages)

const onClickFirstPage = () => emit("pagechanged", 1)

const onClickPreviousPage = () => emit("pagechanged", props.currentPage - 1)

const onClickPage = (page: number) => emit("pagechanged", page)

const onClickNextPage = () => emit("pagechanged", props.currentPage + 1)

const onClickLastPage = () => emit("pagechanged", props.totalPages)

const isPageActive = (page: number) => props.currentPage === page
</script>

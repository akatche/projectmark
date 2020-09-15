<template>
  <div v-bind:class="classObject">
    <template v-for="(link, key) in links">
      <div v-if="link.url === null"
           :key="key"
           class="mr-1 mb-1 px-4 py-3 text-sm border-2 rounded text-gray-400"
           :class="{ 'ml-auto': link.label === 'Next' }"
      >
        {{ link.label }}
      </div>
      <inertia-link v-else
                    :key="key"
                    class="mr-1 mb-1 px-4 py-3 text-sm border-2 rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500"
                    :class="{ 'bg-white': link.active, 'ml-auto': link.label === 'Next' }"
                    :href="link.url"
      >
        {{ link.label }}
      </inertia-link>
    </template>
  </div>
</template>

<script>
export default {
    props: {
        links: Array,
    },
    computed: {
        classObject: function () {
            //pt-1 pl-1 flex flex-wrap bg-white overflow-hidden shadow-xl border-b-2 border-r-2 border-l-2 border-gray-200 rounded-b-lg
            return 'pt-1 pl-1 flex flex-wrap bg-white overflow-hidden';
        }
    }
}
</script>

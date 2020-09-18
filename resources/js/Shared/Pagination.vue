<template>
  <div v-bind:class="classObject">
    <template v-for="(link, key) in links">
      <div v-if="link.url === null"
           :key="key"
           class="mr-1 mb-1 px-4 py-3 text-sm border-2 rounded text-gray-400"
           :class="{ 'ml-auto': link.label === 'Next' }"
           :data-cy="'paginator-'+link.label"
      >
        {{ link.label }}
      </div>
      <inertia-link v-else
                    :key="key"
                    class="mr-1 mb-1 px-4 py-3 text-sm border-2 rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500"
                    :class="{ 'bg-white': link.active, 'ml-auto': link.label === 'Next' }"
                    @click.prevent="goToLink(link.url)"
                    :href="''"
                    :data-cy="'paginator-'+key"
      >
        {{ link.label }}
      </inertia-link>
    </template>
  </div>
</template>

<script>
  import EventBus from './../eventbus'

  export default {
      props: {
          links: Array,
          params: Object
      },
      computed: {
          classObject: function () {
              return 'pt-1 pl-1 flex flex-wrap bg-white overflow-hidden';
          }
      },
      methods: {
          goToLink(url) {

              if(typeof this.params == 'undefined'){
                  this.$inertia.visit(url, {
                      method: 'get',
                  });
              }else{
                  let urlWithParams = this.correctedUrl(url);

                  this.$inertia.visit(urlWithParams, {
                      method: 'get',
                  }).then(() => {
                      const queryString = require('query-string');
                      const parsed = queryString.parse(location.search);
                      EventBus.$emit('new_page_value', parsed);
                  })
              }


          },
          correctedUrl(url) {
              return url + '&'+this.params.column+'=' + this.params.order;
          },
      },
  }
</script>

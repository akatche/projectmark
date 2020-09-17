<template>
    <button class="text-xs leading-4 font-medium text-gray-500 uppercase focus:outline-none hover:underline" @click="changeColumn">
        <slot></slot>
        <svg class="w-6 h-6 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</template>

<script>
    import Button from "../Jetstream/Button";
    import EventBus from "../eventbus";
    export default {
        components: {Button},
        props: {
            params: {
                type: Object
            },
            column: {
                type: String
            },
        },
        methods: {
            changeColumn() {
                const newOrder = this.params.order === 'desc' ? 'asc' : 'desc';

                this.$inertia.replace(route(route().current(), route().params), {
                    method: 'get',
                    data: {
                        [this.column]: newOrder,
                        page: this.params.page
                    },
                    replace: false,
                    preserveState: true,
                    preserveScroll: true,
                    only: ['posts'],
                }).then(() => {
                    EventBus.$emit('new_sort_value', {
                        order:newOrder,
                        column: this.column
                    });
                })
            }
        }
    }
</script>

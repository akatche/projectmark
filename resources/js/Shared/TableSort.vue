<template>
    <button class="focus:outline-none" @click="changeOrdering">
        <sort-icon :order="urlParams.publication_date"/>
    </button>
</template>

<script>
import SortIcon from "./SortIcon";

export default {
    components: {
        SortIcon
    },

    methods: {
        changeOrdering() {
            // this.urlParams.publication_date = this.urlParams.publication_date === 'desc' ? 'asc' : 'desc';
            //
            // this.$inertia.replace(route(route().current(), route().params), {
            //     method: 'get',
            //     data: {
            //         publication_date: this.urlParams.publication_date,
            //         page: this.urlParams.page
            //     },
            //     replace: false,
            //     preserveState: true,
            //     preserveScroll: true,
            //     only: ['posts'],
            // })
        }
    }
}
</script>

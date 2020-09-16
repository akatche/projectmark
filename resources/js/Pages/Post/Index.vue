<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Posts
            </h2>
        </template>

        <flash-messages />

        <div class="py-12 bg-gray-100">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <posts :posts="posts.data" />
                <pagination :links="posts.links" class="shadow-xl border-b-2 border-r-2 border-l-2 border-gray-200 rounded-b-lg" />
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from './../../Layouts/AppLayout'
    import Posts from './Table'
    import Pagination from "../../Shared/Pagination";
    import FlashMessages from "../../Shared/FlashMessages";

    export default {
        components: {
            AppLayout,
            Posts,
            Pagination,
            FlashMessages
        },
        props: {
            posts: Object,
        },
    }
</script>

<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Posts
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <posts :posts="posts.data" />
                <pagination :links="posts.links" />
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from './../../Layouts/AppLayout'
    import Posts from './Table'
    import Pagination from "../../Shared/Pagination";

    export default {
        components: {
            AppLayout,
            Posts,
            Pagination
        },
        props: {
            posts: Array,
        },
    }
</script>

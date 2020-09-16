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
                <posts :posts="posts" />
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from './../../Layouts/AppLayout'
    import Posts from './Table'
    import FlashMessages from "../../Shared/FlashMessages";

    export default {
        components: {
            AppLayout,
            Posts,
            FlashMessages
        },
        props: {
            posts: Object
        },
    }
</script>

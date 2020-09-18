<template>
    <home-page-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="pt-2">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden">
                    <div class="divide-y divide-gray-200">
                        <div class="pt-6 pb-8 space-y-2 md:space-y-5 pl-4">
                            <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest posts</h1>
                        </div>
                        <ul class="divide-y divide-gray-200">
                            <post v-for="(post, index) in posts.data" :key="post.id" :post="post" :index="index"></post>
                        </ul>

                        <pagination :links="posts.links" class="shadow-xl border-gray-200 rounded-b-lg"/>
                    </div>
                </div>
            </div>
        </div>
    </home-page-layout>
</template>

<script>
    import HomePageLayout from './../Layouts/HomePageLayout'
    import Post from './Homepage/Post'
    import Pagination from "./../Shared/Pagination";

    export default {
        components: {
            HomePageLayout,
            Post,
            Pagination
        },
        props: {
            posts: Object,
        },
    }
</script>

<template>
    <home-page-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <h2>hola</h2>
                </div>
            </div>
        </div>
    </home-page-layout>
</template>

<script>
    import HomePageLayout from './../Layouts/HomePageLayout'

    export default {
        components: {
            HomePageLayout,
        },
    }
</script>

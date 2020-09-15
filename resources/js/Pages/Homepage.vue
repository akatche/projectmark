<template>
    <home-page-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden">
                    <div class="divide-y divide-gray-200">
                        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
                            <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest posts</h1>
                        </div>
                        <ul class="divide-y divide-gray-200">
                            <li class="py-12">
                                <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                                    <dl>
                                        <dt class="sr-only">Published on</dt>
                                        <dd class="text-base leading-6 font-medium text-gray-500">
                                            <time datetime="2020-09-04T20:15:00.000Z">September 4, 2020</time>
                                        </dd>
                                    </dl>
                                    <div class="space-y-5 xl:col-span-3">
                                        <div class="space-y-6">
                                            <h2 class="text-2xl leading-8 font-bold tracking-tight">
                                                <a class="text-gray-900" href="/tailwindcss-1-8">Tailwind CSS v1.8.0</a>
                                            </h2>
                                            <div class="prose max-w-none text-gray-500">
                                                <p>Tailwind CSS v1.8 is now available with a handful of new utilities, a couple new features, and an exciting new experiment!</p>
                                            </div>
                                        </div>
                                        <div class="text-base leading-6 font-medium">
                                            <a class="text-teal-500 hover:text-teal-600" aria-label="Read &quot;Tailwind CSS v1.8.0&quot;" href="/tailwindcss-1-8">Read more →</a>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li class="py-12">
                                <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                                    <dl>
                                        <dt class="sr-only">Published on</dt>
                                        <dd class="text-base leading-6 font-medium text-gray-500">
                                            <time datetime="2020-09-04T20:15:00.000Z">September 4, 2020</time>
                                        </dd>
                                    </dl>
                                    <div class="space-y-5 xl:col-span-3">
                                        <div class="space-y-6">
                                            <h2 class="text-2xl leading-8 font-bold tracking-tight">
                                                <a class="text-gray-900" href="/tailwindcss-1-8">Tailwind CSS v1.8.0</a>
                                            </h2>
                                            <div class="prose max-w-none text-gray-500">
                                                <p>Tailwind CSS v1.8 is now available with a handful of new utilities, a couple new features, and an exciting new experiment!</p>
                                            </div>
                                        </div>
                                        <div class="text-base leading-6 font-medium">
                                            <a class="text-teal-500 hover:text-teal-600" aria-label="Read &quot;Tailwind CSS v1.8.0&quot;" href="/tailwindcss-1-8">Read more →</a>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li class="py-12">
                                <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                                    <dl>
                                        <dt class="sr-only">Published on</dt>
                                        <dd class="text-base leading-6 font-medium text-gray-500">
                                            <time datetime="2020-09-04T20:15:00.000Z">September 4, 2020</time>
                                        </dd>
                                    </dl>
                                    <div class="space-y-5 xl:col-span-3">
                                        <div class="space-y-6">
                                            <h2 class="text-2xl leading-8 font-bold tracking-tight">
                                                <a class="text-gray-900" href="/tailwindcss-1-8">Tailwind CSS v1.8.0</a>
                                            </h2>
                                            <div class="prose max-w-none text-gray-500">
                                                <p>Tailwind CSS v1.8 is now available with a handful of new utilities, a couple new features, and an exciting new experiment!</p>
                                            </div>
                                        </div>
                                        <div class="text-base leading-6 font-medium">
                                            <a class="text-teal-500 hover:text-teal-600" aria-label="Read &quot;Tailwind CSS v1.8.0&quot;" href="/tailwindcss-1-8">Read more →</a>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
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

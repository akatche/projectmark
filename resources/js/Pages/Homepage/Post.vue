<template>
    <li class="py-12 px-4">
        <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <dl>
                <dt class="sr-only">Published on</dt>
                <dd class="text-base leading-6 font-medium text-gray-500">
                    <time :datetime="post.datetime">{{post.date}}</time>
                </dd>
                <dt class="sr-only">Author</dt>
                <dd class="text-base leading-6 font-medium text-gray-500">
                    {{post.author}}
                </dd>
            </dl>
            <div class="space-y-5 xl:col-span-3">
                <div class="space-y-6">
                    <h2 class="text-2xl leading-8 font-bold tracking-tight">
                        <inertia-link class="text-gray-900" :href="post.url" :aria-label="'Read' + post.title">
                          {{post.title}}
                        </inertia-link>
                    </h2>
                    <div class="prose max-w-none text-gray-500" v-html="post.description">
                    </div>
                </div>
                <div class="text-base leading-6 font-medium">
                    <inertia-link class="text-teal-500 hover:text-teal-600" :href="post.url" :aria-label="'Read' + post.title">
                        Read more →
                    </inertia-link>
                </div>
            </div>
        </article>
    </li>
</template>

<script>
    export default {
        props: {
            post: Object,
        },
    }
</script>

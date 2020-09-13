<template>
    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">

            <inertia-link class="btn-indigo" :href="route('posts.create')">
                <span>Create</span>
                <span class="hidden md:inline">Organization</span>
            </inertia-link>

            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Publication Date
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Views
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="post in posts" :key="post.id">
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                            {{ post.title }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                            {{ post.publication_date }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap">
                            {{ post.views }}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import AppLayout from './../../Layouts/AppLayout'
    import JetButton from './../../Jetstream/Button'

    export default {
        components: {
            AppLayout,
            JetButton
        },
        props: {
            posts: Object,
        },
    }
</script>

<template>
    <div>
        <jet-button class="mb-2">
            <inertia-link :href="route('posts.create')">
                <span>Create</span>
                <span class="hidden md:inline">Post</span>
            </inertia-link>
        </jet-button>

        <div class="bg-white overflow-hidden">
            <div class="shadow overflow-hidden border-2 border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <sort-icon
                                :params="urlParams"
                                :column="'publication_date'"
                            >
                                Publication Date
                            </sort-icon>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <sort-icon
                                :params="urlParams"
                                :column="'views'"
                            >
                                Views
                            </sort-icon>
                        </th>
                        <th class="px-6 py-3 bg-gray-50">
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="post in posts.data" :key="post.id">
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                            {{ post.title }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                            {{ post.publication_date }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap">
                            {{ post.views }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap">
                            <jet-button>
                                <inertia-link :href="route('post.show', post.url)">
                                    <span>See Post</span>
                                </inertia-link>
                            </jet-button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <pagination
            :links="posts.links"
            :params="urlParams"
            class="shadow-xl border-b-2 border-r-2 border-l-2 border-gray-200 rounded-b-lg"
        />
    </div>
</template>

<script>
    import AppLayout from './../../Layouts/AppLayout'
    import JetButton from './../../Jetstream/Button'
    import SortIcon from './../../Shared/SortIcon'
    import Pagination from "../../Shared/Pagination";
    import EventBus from './../../eventbus'

    export default {
        components: {
            AppLayout,
            JetButton,
            SortIcon,
            Pagination
        },
        props: {
            posts: Object
        },
        mounted() {
            const queryString = require('query-string');
            const parsedUrl = queryString.parse(location.search);
            const columns = ['publication_date','views'];

            columns.forEach(column => {
                if(column in parsedUrl){
                    this.urlParams.column = column;
                    this.urlParams.order = parsedUrl[column];
                }
            });

            if('page' in parsedUrl){
                this.urlParams.page = parsedUrl.page;
            }
        },
        created () {
            EventBus.$on('new_page_value', (payload) => {
                this.urlParams.page = payload.page;
            });
            EventBus.$on('new_sort_value', (payload) => {
                this.urlParams.order = payload.order;
                this.urlParams.column = payload.column;
            });
        },
        data() {
            return {
                urlParams:{
                    page : 1,
                    column: 'publication_date',
                    order: 'desc'
                }
            }
        }
    }
</script>

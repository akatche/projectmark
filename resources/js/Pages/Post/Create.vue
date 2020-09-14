<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <inertia-link class="text-indigo-500" :href="route('posts.index')">Posts</inertia-link> / Create
            </h2>
        </template>

        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <jet-form-section @submitted="createNewPost">
                <template #title>
                    Create new Post
                </template>

                <template #description>
                    It will be published once saved
                </template>

                <template #form>
                    <!-- Title -->
                    <li v-for="error in form.errors()">
                        {{ error }}
                    </li>

                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="title" value="Title" />
                        <jet-input id="title" type="text" class="mt-1 block w-full" v-model="form.title"/>
                        <jet-input-error :message="form.error('title')" class="mt-2" />
                    </div>

                    <!-- Email -->
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="description" value="Description" />
                        <jet-input id="description" type="description" class="mt-1 block w-full" v-model="form.description" />
                        <jet-input-error :message="form.error('description')" class="mt-2" />
                    </div>
                </template>

                <template #actions>
                    <jet-action-message :on="form.recentlySuccessful" class="mr-3">
                        Published
                    </jet-action-message>

                    <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Publish Post
                    </jet-button>
                </template>
            </jet-form-section>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from './../../Layouts/AppLayout'
    import JetFormSection from './../../Jetstream/FormSection'
    import JetInput from './../../Jetstream/Input'
    import JetInputError from './../../Jetstream/InputError'
    import JetButton from './../../Jetstream/Button'
    import JetLabel from './../../Jetstream/Label'
    import JetActionMessage from './../../Jetstream/ActionMessage'

    export default {
        components: {
            AppLayout,
            JetFormSection,
            JetInput,
            JetInputError,
            JetButton,
            JetLabel,
            JetActionMessage
        },

        data() {
            return {
                form: this.$inertia.form({
                    title: this.title,
                    description: this.description,
                }, {
                    bag: 'createNewPost'
                })
            }
        },

        methods: {
            createNewPost() {
                this.form.post('/dashboard/posts', {
                    preserveScroll: true
                });
            },
        },
    }
</script>

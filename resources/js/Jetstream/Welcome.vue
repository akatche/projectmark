<template>
    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
            <div class="mt-8 text-2xl">
                Welcome to the Blog platform!
            </div>

            <div class="mt-6 text-gray-500">
                The stack used to build the blog was the following:
                <ul class="list-disc">
                    <li>Laravel</li>
                    <li>Laravel Jetstream (as application scaffold) with Inertia.js</li>
                    <li>Cypress (for E2E testing)</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import JetApplicationLogo from './../Jetstream/ApplicationLogo'

    export default {
        components: {
            JetApplicationLogo,
        },
    }
</script>

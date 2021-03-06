<template>
    <div class="flex flex-col h-screen">
        <nav class="bg-white border-b border-gray-100">
            <!-- Primary Navigation Menu -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="flex-shrink-0 flex items-center">
                            <a href="/" data-cy="logo">
                                <jet-application-mark class="h-20" />
                            </a>
                        </div>

                        <!-- Navigation Links -->
                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <jet-nav-link href="/" :active="$page.currentRouteName == 'homepage'" data-cy="home-link">
                                Home
                            </jet-nav-link>
                        </div>
                    </div>

                    <!-- Settings Dropdown -->
                    <div class="hidden sm:flex sm:items-center sm:ml-6">
                        <div class="ml-3 relative">
                            <jet-dropdown align="right" width="48" v-if="$page.auth.user!=null">
                                <template #trigger>
                                    <button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                                        <img class="h-8 w-8 rounded-full object-cover" :src="$page.user.profile_photo_url" :alt="$page.user.name" />
                                    </button>
                                </template>

                                <template #content>
                                    <!-- Account Management -->
                                    <div class="block px-4 py-2 text-xs text-gray-400" data-cy="dropdown-link">
                                        Manage Account
                                    </div>

                                    <jet-dropdown-link href="/dashboard" data-cy="dropdown-link">
                                        Dashboard
                                    </jet-dropdown-link>

                                    <jet-dropdown-link href="/dashboard/posts" data-cy="dropdown-link">
                                        Posts
                                    </jet-dropdown-link>

                                    <jet-dropdown-link href="/user/profile" data-cy="dropdown-link">
                                        Profile
                                    </jet-dropdown-link>

                                    <div class="border-t border-gray-100"></div>

                                    <!-- Authentication -->
                                    <form @submit.prevent="logout">
                                        <jet-dropdown-link as="button" data-cy="dropdown-link">
                                            Logout
                                        </jet-dropdown-link>
                                    </form>
                                </template>
                            </jet-dropdown>
                            <div v-else>
                                <a href="/login" class="px-1 pt-1 text-sm font-medium leading-5 text-gray-900 hover:underline" data-cy="login">Login</a>
                                <a href="/register" class="text-sm font-medium leading-5 text-gray-900 hover:underline" data-cy="register">Register</a>
                            </div>
                        </div>
                    </div>

                    <!-- Hamburger -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Responsive Navigation Menu -->
            <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">

                <!-- Responsive Settings Options -->
                <div class="pt-4 pb-1 border-t border-gray-200 bg-gray-100" v-if="$page.auth.user!=null">
                    <div class="flex items-center px-4">
                        <div class="flex-shrink-0">
                            <img class="h-10 w-10 rounded-full" :src="$page.user.profile_photo_url" :alt="$page.user.name" />
                        </div>

                        <div class="ml-3">
                            <div class="font-medium text-base text-gray-800">{{ $page.user.name }}</div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.user.email }}</div>
                        </div>
                    </div>

                    <div class="mt-3 space-y-1">
                        <jet-responsive-nav-link href="/dashboard" :active="$page.currentRouteName == 'dashboard'">
                            Dashboard
                        </jet-responsive-nav-link>

                        <jet-responsive-nav-link href="/dashboard/posts" :active="$page.currentRouteName == 'posts.index'">
                            Posts
                        </jet-responsive-nav-link>

                        <jet-responsive-nav-link href="/user/profile" :active="$page.currentRouteName == 'profile.show'">
                            Profile
                        </jet-responsive-nav-link>

                        <!-- Authentication -->
                        <form method="POST" @submit.prevent="logout">
                            <jet-responsive-nav-link as="button">
                                Logout
                            </jet-responsive-nav-link>
                        </form>
                    </div>
                </div>

                <div class="pt-4 pb-4 border-t border-b border-gray-200 bg-gray-100" v-else>
                    <div class="mt-3 space-y-1">
                        <jet-responsive-nav-link as="button">
                            <a href="/login" class="px-1 pt-1 text-sm font-medium leading-5 text-gray-900 hover:underline">Login</a>
                        </jet-responsive-nav-link>
                        <jet-responsive-nav-link as="button">
                            <a href="/register" class="text-sm font-medium leading-5 text-gray-900 hover:underline">Register</a>
                        </jet-responsive-nav-link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Page Content -->
        <main class="flex-grow">
            <slot></slot>
        </main>

        <footer class="p-4 text-sm font-medium leading-5 text-gray-500 hover:text-indigo-400 text-center">
            Created by Alejandro Katcheroff
        </footer>
    </div>
</template>

<script>
    import JetApplicationLogo from './../Jetstream/ApplicationLogo'
    import JetApplicationMark from './../Jetstream/ApplicationMark'
    import JetDropdown from './../Jetstream/Dropdown'
    import JetDropdownLink from './../Jetstream/DropdownLink'
    import JetNavLink from './../Jetstream/NavLink'
    import JetResponsiveNavLink from './../Jetstream/ResponsiveNavLink'
    import FlashMessages from "../Shared/FlashMessages";

    export default {
        components: {
            JetApplicationLogo,
            JetApplicationMark,
            JetDropdown,
            JetDropdownLink,
            JetNavLink,
            JetResponsiveNavLink,
            FlashMessages
        },

        data() {
            return {
                showingNavigationDropdown: false,
            }
        },

        methods: {
            logout() {
                axios.post('/logout').then(response => {
                    window.location = '/';
                })
            },
        },

        computed: {
            path() {
                return window.location.pathname
            }
        }
    }
</script>

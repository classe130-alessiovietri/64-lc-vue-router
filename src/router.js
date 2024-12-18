import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import PostsPage from './pages/PostsPage.vue';
import PostPage from './pages/PostPage.vue';
import CreatePostPage from './pages/CreatePostPage.vue';
import ContactPage from './pages/ContactPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/blog',
            name: 'posts-index',
            component: PostsPage
        },
        {
            path: '/blog/:slug',
            name: 'posts-show',
            component: PostPage
        },
        {
            path: '/blog/nuovo-articolo',
            name: 'posts-create',
            component: CreatePostPage
        },
        {
            path: '/contatti',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };
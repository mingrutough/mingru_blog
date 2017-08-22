/*
 * @Author: mingru 
 * @Date: 2017-08-08 16:07:46 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-08-16 10:28:01
 */
import MainPage from '@/pages/mainPage/mainPage';
import About from '@/pages/about/about';
import Poppin from '@/pages/poppin/poppin';
import Tags from '@/pages/tags/tags';
import MyFavoriteArticles from '@/pages/myFavoriteArticles/myFavoriteArticles';
import BlogItem from './blogItem';

export default [
    {
        path: 'home',
        name: '主页',
        component: MainPage,
    },
    {
        path: 'about-me',
        name: '关于我',
        component: About,
    },
    {
        path: 'tags',
        name: '标签',
        component: Tags,
    },
    {
        path: 'about-poppin',
        name: 'Poppin',
        component: Poppin,
    },
    {
        path: 'useful-articles',
        name: '有用文章',
        component: MyFavoriteArticles,
    },
    BlogItem,
];

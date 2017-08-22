/*
 * @Author: mingru 
 * @Date: 2017-08-09 15:56:48 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-08-10 16:02:31
 */
import ManageIndex from '@/pages/manage/manageIndex';
import NewBlog from '@/pages/manage/manageChildPages/newBlog';
import BlogList from '@/pages/manage/manageChildPages/blogList';
import NewTag from '@/pages/manage/manageChildPages/newTag';
import TagList from '@/pages/manage/manageChildPages/tagList';
import NewArticle from '@/pages/manage/manageChildPages/newArticle';
import ArticleList from '@/pages/manage/manageChildPages/articleList';
import SelfSetting from '@/pages/manage/manageChildPages/selfSetting';
import CommentManage from '@/pages/manage/manageChildPages/commentManage';

export default [
    {
        path: 'home',
        name: '后台管理主页',
        component: ManageIndex,
    },
    {
        path: 'new-blog',
        name: '新建文章',
        component: NewBlog,
    },
    {
        path: 'blog-list',
        name: '已发表文章',
        component: BlogList,
    },
    {
        path: 'new-tag',
        name: '新建标签',
        component: NewTag,
    },
    {
        path: 'tag-list',
        name: '已建立标签',
        component: BlogList,
    },
    {
        path: 'new-article',
        name: '新建外链',
        component: NewArticle,
    },
    {
        path: 'article-list',
        name: '已发布外链',
        component: ArticleList,
    },
    {
        path: 'setting',
        name: '个人设置',
        component: SelfSetting,
    },
    {
        path: 'comment',
        name: '评论管理',
        component: CommentManage,
    },
];

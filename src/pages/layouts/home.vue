/*
 * @Author: mingru 
 * @Date: 2017-08-04 16:24:56 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-08-08 16:02:45
 */
<template>
    <div class="home">
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="javascript:void(0);" @click="menuChange('/home', 0)">
                        Mingru's Blog
                        <span class="glyphicon glyphicon-send" aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbar" class="navbar-collapse collapse " aria-expanded="false">
                    <ul class="nav navbar-nav visible-xs-block">
                        <li :class="{active: index === defalutIndex}" v-for="(item, index) in menuData" @click="menuChange(item.path, index)">
                            <a role="button" data-toggle="collapse" href="#navbar">{{item.name}}</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav hidden-xs">
                        <li :class="{active: index === defalutIndex}" v-for="(item, index) in menuData" @click="menuChange(item.path, index)">
                            <a href="javascript:void(0);">{{item.name}}</a>
                        </li>
                        <li class="direct-to-manage">
                            <a href="javascript:void(0);" @click="openNewWindow">Manage
                                <span class="glyphicon glyphicon-flag" aria-hidden="true"></span>
                            </a>
                        </li>
                    </ul>
                    <!--<form class="navbar-form navbar-right">
                                                                            <div class="form-group">
                                                                                <input type="text" placeholder="Email" class="form-control">
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <input type="password" placeholder="Password" class="form-control">
                                                                            </div>
                                                                            <button type="submit" class="btn btn-success">Sign in</button>
                                                                        </form>-->
                </div>
                <!-- /.nav-collapse -->
            </div>
            <!-- /.container -->
        </nav>
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <footer class="blog-footer">
            <p>Copyright ©
                <a href="">Mingru's Blog</a> 2017</p>
            <a href="">Back to top</a>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      menuData: [
        { name: 'Home', path: '/home' },
        { name: 'About', path: '/about-me' },
        { name: 'Tags', path: '/tags' },
        { name: 'Useful Articles', path: '/useful-articles' },
        // { name: 'Poppin', path: '/about-poppin' },           
      ],
      defalutIndex: 0,
      defalutPath: '/home',
    };
  },
  methods: {
    menuChange(path1, index) {
        this.defalutIndex = index;
        this.$router.push({ path: path1 });
    },
    openNewWindow() {
        // const domain = document.domain;
        // console.log(domain);
        window.open('/manage');
    },
  },
};
</script>

<style lang="less">
.home {
    .glyphicon {
        top: 3px;
    }
    .direct-to-manage {
        position: absolute;
        right: 0;
    }
    .blog-footer {
        padding: 40px 0;
        color: #999;
        text-align: center;
        background-color: #f9f9f9;
        border-top: 1px solid #e5e5e5;
        a {
            color: #337ab7;
            text-decoration: none;
        }
    }
}
</style>
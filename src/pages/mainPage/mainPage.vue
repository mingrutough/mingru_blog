/*
 * @Author: mingru 
 * @Date: 2017-08-04 11:42:14 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-08-16 10:51:58
 */

<template>
  <div class="mainPage">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8">
          <div class="my-blogs-wrap">
            <blogcomment />
            <div class="my-blogs-item" v-for="(item, index) in blogsData">
              <div class="blog-item-header cursor" @click="goToBlogItem">后浪推前浪</div>
              <div class="blog-item-pre">好无聊啊，加油搞起来</div>
              <div class="post-time">Posted by mingrutough on July 12, 2017</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-3 col-md-offset-1">
          <div class="home-about-me-wrap">
            <div class="center-block person-info">
              <div class="circle-wrap center-block">
                <img src="../../assets/mingru.jpg" alt="">
              </div>
              <div class="h4">夏明儒</div>
              <div class="location ">
                <span class="glyphicon glyphicon-map-marker"></span>上海
              </div>
            </div>
            <div class="nums-wrap">
              <div class="posts">
                <div class="h5">88</div>
                <div class="des h5">Posts</div>
              </div>
              <div class="tags">
                <div class="h5">88</div>
                <div class="des h5">Tags</div>
              </div>
            </div>
            <div class="tags-item-container ">
              <div class="h4">Tags</div>
              <div class="item-wrap">
                <div class="tags-item" v-for="(item, index) in tagsData" @click="selectTags(index)" :class="{'choosen': index === tagChoosen}">
                  {{item}}
                </div>
              </div>
            </div>
            <div class="readings-item-containner">
              <div class="h4">Recently Reading</div>
              <div class="readings-item" v-for="(item, index) in readingsData" @click="selectReadings(index+tagsData.length)" :class="{'choosen': (index+tagsData.length)=== tagChoosen}">
                <span class="readings-name">{{item.name}}</span>
                <span class="badge">{{item.nums}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogcomment from '@/components/blogs-comment';

export default {
  name: 'mainPage',
  data() {
    return {
      tagsData: [
        'xiamingru',
        'heiheihei',
        'xiamingru',
        'ffffffffffffffffff',
        'xiamingru',
        'heiheihei',
        'xiamingru',
        'heiheiheigfgsfdssf',
      ],
      blogsData: [
        'xiamingru',
        'heiheihei',
        'xiamingru',
        'ffffffffffffffffff',
        'xiamingru',
        'heiheihei',
        'xiamingru',
        'heiheiheigfgsfdssf',
      ],
      readingsData: [
        {
          name: 'xixi',
          nums: 2,
        },
        {
          name: 'xixi',
          nums: 2,
        },
        {
          name: 'xixi',
          nums: 2,
        },
        {
          name: 'xixi',
          nums: 2,
        },
        {
          name: 'xixi',
          nums: 2,
        },
        {
          name: 'xixi',
          nums: 2,
        },
      ],
      tagChoosen: -1,
    };
  },
  components: {
    blogcomment,
  },
  methods: {
    selectTags(index) {
      this.tagChoosen = index;
    },
    selectReadings(index) {
      this.tagChoosen = index;
    },
    goToBlogItem() {
      this.$router.push('/blog/1');
    },
  },
};
</script>

<style lang="less">
.mainPage {
  .cursor {
    cursor: pointer;
  }
  .my-blogs-wrap {
    padding-bottom: 60px;
    .my-blogs-item {
      border-bottom: 1px solid #f0f0f0;
      .blog-item-header {
        font-weight: 500;
        font-size: 20px;
        line-height: 2em;
        height: 2em;
        &:hover {
          color: #111;
        }
      }
      .blog-item-pre {
        font-size: 16px;
        color: #999;
      }
      .post-time {
        font-size: 12px;
        font-family: Lora, 'Times New Roman', serif;
        color: gray;
        line-height: 2em;
        height: 2em;
      }
    }
  }
  .home-about-me-wrap {
    background-color: #eee;
    border-radius: 6px;
    padding-top: 40px;
    .person-info {
      width: 100%;
      border-bottom: 1px solid rgba(5, 5, 5, 0.1);
      padding-bottom: 20px;
      .circle-wrap {
        background-color: rgba(243, 246, 248, .94);
        border: 4px solid #fff;
        box-shadow: inset 0 1.5px 3px 0 rgba(0, 0, 0, .15), 0 1.5px 3px 0 rgba(0, 0, 0, .15);
        box-sizing: content-box;
        width: 128px;
        height: 128px;
        border-radius: 50%;
        position: relative;
        img {
          width: 128px;
          height: 128px;
          border-radius: 50%;
        }
      }
      .h4 {
        text-align: center;
      }
      .location {
        text-align: center;
      }
    }
    .nums-wrap {
      height: 60px;
      display: flex;
      border-bottom: 1px solid rgba(5, 5, 5, 0.1);
      .h5 {
        text-align: center;
      }
      .posts {
        flex: 1;
        border-right: 1px solid rgba(5, 5, 5, 0.1);
      }
      .tags {
        flex: 1;
      }
    }
    .tags-item-container {
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(5, 5, 5, 0.1);
      .h4 {
        text-align: center;
      }
      .item-wrap {
        display: flex;
        flex-wrap: wrap;
        padding: 0px 10px;
        .tags-item {
          border: 1px solid rgba(0, 0, 0, .2);
          border-radius: 17px;
          padding: 0 10px;
          color: #000;
          line-height: 34px;
          height: 34px;
          font-size: 12px;
          margin-right: 2px;
          margin-bottom: 4px;
          cursor: pointer;

          &:hover {
            color: #fff;
            background: #222;
          }
        }
        .choosen {
          color: #fff;
          background: #222;
        }
      }
    }
    .readings-item-containner {
      padding: 0px 20px;
      padding-bottom: 20px;
      .h4 {
        text-align: center;
      }
      .readings-item {
        border-radius: 6px;
        padding: 5px 10px;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        &:hover {
          background: rgba(0, 0, 0, .1);
        }
      }
      .choosen {
        background: rgba(0, 0, 0, .1);
      }
    }
  }
}
</style>
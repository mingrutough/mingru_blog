/*
 * @Author: mingru
 * @Date: 2017-08-15 14:30:56
 * @Last Modified by: mingru
 * @Last Modified time: 2017-08-21 17:33:59
 */

import ajax from './ajax'; // 为每个子组件注入ajax对象，其包含get以及post方法

const publicPlugin = {};

publicPlugin.install = (Vue, options) => {
    Vue.mixin({
        methods: {

        },
        data() {
            return {
                ajax,
            };
        },
    });
};
export { publicPlugin };

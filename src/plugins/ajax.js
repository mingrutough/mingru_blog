
import axios from 'axios';

export default {
  get: function get(url, opt) {
    let tempOpt = opt;
    if (typeof tempOpt !== 'undefined') {
      if (typeof tempOpt.params !== 'undefined') {
        if (typeof tempOpt.params._ === 'undefined') {
          tempOpt.params._ = Date.parse(new Date()) / 1000;
        }
        // if (typeof tempOpt.params.client === 'undefined') {
        //   tempOpt.params.client = 2; // client渠道字段 2: web, 1: app
        // }
      }
    } else {
      tempOpt = {};
      tempOpt.params = {
        _: Date.parse(new Date()) / 1000,
        // client: 2,
      };
    }
    return axios.get(url, tempOpt);
  },
  post: function post(url, opt) {
    const tempOpt = opt;
    if (typeof tempOpt !== 'undefined') {
      if (typeof tempOpt._ === 'undefined') {
        tempOpt._ = Date.parse(new Date()) / 1000;
      }
    //   if (typeof tempOpt.client === 'undefined') {
    //     tempOpt.client = 2; // client渠道字段 2: web, 1: app
    //   }
    }
    return axios.post(url, tempOpt);
  },
  put(url, opt) { 
    return axios.put(url, opt);
  },
  delete(url, opt) { 
    return axios.delete(url, opt);
  },
};

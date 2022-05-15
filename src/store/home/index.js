import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";
// home模块的小仓库
const state = {
  //state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组。【根据接口返回值初始化的】
  categoryList:[],
  banners: [], // 轮播图数据
  floors: [], 
};
const mutations = {
  CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList;
  },
  BANNERLIST(state, banners) {
    state.banners = banners
  },
  FLOORLIST(state, floors) {
    state.floors = floors
  },
};
const actions = {
  //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList({commit}){
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST",result.data);
    }
    console.log(result);
  },
   // 请求 banners 数据
   async bannerList ({commit}) {
    const result = await reqBannerList()
    if(result.code === 200) {
      commit('BANNERLIST', result.data)
    }
  },
  // 请求 floorList 数据
  async floorList ({commit}) {
    const result = await reqFloorList()
    if(result.code === 200) {
      commit('FLOORLIST', result.data)
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
}
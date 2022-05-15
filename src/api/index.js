// 当前这个模块：API进行统一管理
import requests from './request';
import mockRequest from './mockRequest';

//三级联动接口

export const reqCategoryList = ()=>{
  // 发请求：axios发请求返回结果Promise对象
  return requests({url:'/product/getBaseCategoryList',method:'get'});
}

/*
 banner轮播
 */
export const reqBannerList = ()=>{
  // 发请求：axios发请求返回结果Promise对象
  return mockRequest({url:'banner',method:'get'});
}

/*
 floor
 */
 export const reqFloorList = ()=>{
  // 发请求：axios发请求返回结果Promise对象
  return mockRequest({url:'floor',method:'get'});
}
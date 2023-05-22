/*
 * @Author: bishang 1063352967@qq.com
 * @Date: 2022-11-06 16:34:42
 * @LastEditors: bishang 1063352967@qq.com
 * @LastEditTime: 2022-12-01 14:13:26
 * @FilePath: \demo\src\component\ImageTest.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
const imgSrc=require('../assets/img/jd.jpg')



const app =function(props){
  console.log(props,'props');
return <div className="image_wraper">
  <div className="content">
  <img src={imgSrc} alt="ff" />
  </div>
</div>

}
export default app

<template>
  <div class="demo">
    <el-container class="demoContainer">
      <el-header>
        <div class="bk-head">
<!--          <a style="float:left;" class="tooher" >统计</a>-->
<!--          <a style="float:left;margin-left: 10px;" class="tooher" >|</a>-->
<!--          <a style="float:left;margin-left: 10px;" class="tooher">管理</a>-->
<!--          <a style="float:left;margin-left: 10px;" class="tooher">|</a>-->
          <a class="jumptitle">快速工具</a>

        </div>
      </el-header>
      <el-main>
        <div class="demoMain">
<!--          <div class="bk-top">-->
<!--            <el-card>-->

<!--            </el-card>-->
<!--          </div>-->
          <div class="bk-main">
            <el-card style=" margin-top: 5px;">
              <div slot="header" class="clearfix">
                <i class="el-icon-star-on" style="color: orange"></i>
                <span class="bk-font">快速计数</span>
              </div>
              <div>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" style="width:100%"></el-input-number>
              </div>
            </el-card>

<!--            <el-card style=" margin-top: 5px;">-->
<!--            </el-card>-->
<!--            <el-card style=" margin-top: 5px;">-->
<!--            </el-card>-->
          </div>
<!--          <div class="bk-foot">-->
<!--            <el-card style=" margin-top: 5px;">-->
<!--              <div slot="header" class="clearfix">-->
<!--                <i class="el-icon-shopping-bag-2" style="color: orange"></i>-->
<!--                <span class="bk-font">今日消费明细</span>-->
<!--              </div>-->
<!--            </el-card>-->
<!--          </div>-->

        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
const qs = require('qs') //引入序列化功能
// import {FB_TYPE,FB_TAGS,APP_LIST} from './fb'
export default {
  name: 'tools',
  components: {},
  props: {},
  data() {
    return {
      num: 1
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  },
}
</script>
<style lang="css" scoped>
.bk-head{

}
.bk-top{

}
.bk-main{
  margin-top: 5px;
}
.bk-foot{
  margin-top: 5px;
}
.bk-font{
  font-family: '微软雅黑';
  color: #333;
  font-weight: bold;
}
.bk-message{
  width: 50%;
  margin: 10px;
}
/deep/ .el-message-box{
  width: 220px;
}
.userinfo{
  float:right;
  /*margin-top: 1px;*/
  font-family: '微软雅黑';
  color: #333;
  font-size: larger;
  font-weight: 800;
}
.demo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.demoContainer {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #9148ee;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}
.demoMain {
  /*margin-left: 200px;*/
  width: 100%;

}
.tooher{
  font-family: '微软雅黑';
  color: #333;
  font-weight: bold;
  font-size: large;
}
.demoOperation {
  margin-bottom: 10px;
}
.jumptitle {
  font-family: '微软雅黑';
  color: #333;
  font-size: larger;
  font-weight: 800;
}
</style>
<style>
.el-message-box{
  width: 220px;
}
</style>

<template>
  <div class="TNET_home">
    <Carousel/>
    <!-- <TelescopicBlock/> -->
    <div class="TelescopicBlock tab-home">
        <Iot v-if="Cur_Product == '物联网云服务'"/>
        <Hardware v-if="Cur_Product == '联网硬件'"/>
        <Software v-if="Cur_Product == '软件开发'"/>
        <HR v-if="Cur_Product == 'HR服务'"/>
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" :class="{'active':Cur_Product == Tab.name}" v-for="(Tab,Idx) in TabMenu_Product" @click="ChangeTab_Product(Tab.name)"><a data-element-name="news" data-element-type="tab" href="#1" aria-controls="1" role="tab" data-toggle="tab" name="&amp;lpos=content_home : 213"><i class="fa fa-comments-o"></i>{{Tab.name}}</a></li>
            <!-- <i class="fa fa-comments-o"></i> -->
        </ul>
    </div>
    <!-- <div class="TextCenter OneBlock">
            <h1>我们的产品</h1>
            <div class="marginTB_40">
              <Row class="TextCenter">
                  <Col v-for="(Tab,Idx) in TabMenu_Product" span="6" :class="{'Active':Cur_Product == Tab.name}">
                    <span class="CursorPointer Padding_10"  @click="ChangeTab_Product(Tab.name)">
                      <Icon :size="24" :class="{'ActiveIcon':Cur_Product == Tab.name}" :type="Tab.icon"></Icon>
                      <p :class="{'TabP':true,'ActiveP':Cur_Product == Tab.name}">{{Tab.name}}</p>
                    </span>
                  </Col>
              </Row>
            </div>
            <div class="marginTB_40">
              <Iot v-if="Cur_Product == '物联网云服务'"/>
              <Hardware v-if="Cur_Product == '联网硬件'"/>
              <Software v-if="Cur_Product == '软件开发'"/>
              <HR v-if="Cur_Product == 'HR服务'"/>
            </div>
    </div> -->
    <TabCarousel/>
    <div class="OneBlock" style="margin-top: 0px; overflow: hidden">
      <Row type="flex"  justify="center"  class="code-row-bg TextCenter" :gutter="16">
        <Col class="marginB_10 PaddingTB_40 colorWhite"  style="background-color: #262c60;" :xs="24" :sm="12" :md="12"  :lg="12">
          <Row>
            <Col span="12" class="TextLeft">
              <h2 class="marginTB_10 colorWhite">RFID仓储快速出入库管理系统现已发布</h2>
              <p class="marginTB_10 colorWhite">最新版本支持Windows 10 ，并适用于Windows Server 2016。</p>
              <!-- <a class="marginTB_10">了解更多>></a> -->
            </Col>
            <Col span="12">
              <img src="http://139.196.232.21/images/vmw-workstation-pro12-5-boxshot.jpg.png">
            </Col>
          </Row>
        </Col>
        <Col class="marginB_10 PaddingTB_40 colorWhite" style="background-color: #e6281a;" :xs="24" :sm="12" :md="12"  :lg="12">
          <Row>
            <Col span="12" class="TextLeft">
              <h2 class="marginTB_10 colorWhite">RFID仓储快速出入库管理系统现已发布</h2>
              <p class="marginTB_10 colorWhite">最新版本支持Windows 10 ，并适用于Windows Server 2016。</p>
              <!-- <a class="marginTB_10">了解更多>></a> -->
            </Col>
            <Col span="12">
              <img src="http://139.196.232.21/images/vmw-fusion8-5-boxshot.jpg.png">
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
     
  </div>
</template>
<script>
import Carousel from '../components/Carousel/Carousel'
import TabCarousel from '../components/TabCarousel/TabCarousel'
import TelescopicBlock from '../components/TelescopicBlock/TelescopicBlock'
import Iot from '../components/TNET/Tab/Home/Iot'
import Hardware from '../components/TNET/Tab/Home/Hardware'
import Software from '../components/TNET/Tab/Home/Software'
import HR from '../components/TNET/Tab/Home/HR'
  export default{
    data: function () {
      return {
        Cur_Product:'物联网云服务',
        TabMenu_Product:[{'name':'物联网云服务','icon':'fa fa-comments-o'},{'name':'联网硬件','icon':'fa fa-comments-o'},{'name':'软件开发','icon':'fa fa-comments-o'},{'name':'HR服务','icon':'fa fa-comments-o'}],
      }
    },
    mounted: function () {
      
    },
    created: function () {
      
    },
    computed: {
      open:{
          get: function () {
            return this.$store.state.open
          },
          set: function (newValue) {
            this.$store.state.open = newValue
          }
      }
      
    },
    watch: {
      
    },
    components: {
      Carousel,
      TabCarousel,
      TelescopicBlock,
      Iot,
      Hardware,
      Software,
      HR
      

    },
    methods: {
      ChangeTab_Product(Menu){
        this.Cur_Product = Menu
      }
     

    }
  }
</script>
<style lang="scss">
.TNET_home{
  .Active{
      border-bottom:2px solid #F58733 !important;
      color: #F58733;
  }
  .ActiveIcon{
    color: #F58733;
  }
  .ActiveP{
    color: #F58733;
  }
  img{
    max-width: 100%;
  }

}
</style>

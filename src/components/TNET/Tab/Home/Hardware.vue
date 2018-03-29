<template>
  <div class="Hardware">
        <Row type="flex" justify="space-between" class="code-row-bg" :gutter="16">
            <Col :xs="24" :sm="24" :md="12" :lg="12" v-for="(Block,Idx) in BlockInfo" class="marginB_10">
                <div class="thumb-container  singleLineEllipse">
                    <div class="thumb-img"  :style="{'background-image':'url(' + Block.img +')'}">
                    </div>
                    <div class="thumb-details showHam" >
                        <div class="col-xs-1 col-md-1 col-sm-1" style="height: 86px;">
                            <i :class="[Block.icon]"></i>
                        </div>
                        <div class="col-xs-10 col-md-10 col-sm-10" style="height: 86px;">
                            <div class="detail-content clamp">
                                <h3 class="clampingDetail" data-id="randomId7643" style="">
                                <span class="asianLang" style="width: 100%">{{Block.title}}</span>
                                </h3>
                                <p class="clampingDetail" data-id="randomId9455" style="">
                                <span class="asianLang" style="width: 200px">{{Block.content}}</span>
                                </p>
                            </div>
                            <!-- <div class="cta_module">
                                    <a class="learn_more" title="立即购买！" href="javascript:void(0)" target="_self">立即购买！ <i class="fa fa-angle-double-right inline"></i></a>
                            </div> -->
                        </div>
                        <div class="col-xs-1 col-md-1 col-sm-1 cntClk" style="height: 86px;">   <i class="fa fa-bars detail-toggle"></i>
                        </div>
                        <div class="social-block">
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        BlockInfo:[
          {'title':'智能硬件产品','content':'物联网 (IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的 IoT 解决方案。我们提供如下产品','img':'static/img/TNET/picture/smartHardWare.jpg','icon':'fa fa-cubes'},
          {'title':'ODM','content':'为你的传统电器，插上智能的“翅膀”','img':'static/img/TNET/picture/SmartHox_Products_icon13.png','icon':'fa fa-paper-plane-o'}
        ]
      }
    },
    mounted: function () {
      
    },
    created: function () {
      
    },
    computed: {
    },
    watch: {
      
    },
    components: {
    },
    methods: {
     

    }
  }
</script>
<style lang="scss">
.Hardware{
  .BlockOuter{
      padding: 20px 20px;
      .mu-tabs{
          background-color: #fff !important;
      }
      .mu-tab-text{
          color: #000;
      }
      .mu-icon{
          color: #000;
      }
  }

}
</style>

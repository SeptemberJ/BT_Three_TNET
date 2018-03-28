<template>
  <div class="Hardware">
        <Row type="flex" justify="space-between" class="code-row-bg" :gutter="16">
            <Col :xs="24" :sm="24" :md="12" :lg="12">
                <div class="thumb-container  singleLineEllipse">
                    <div class="thumb-img"  style="background-image:url('http://139.196.232.21/images/hp-promo-emea-whatsnew.jpg')">
                                </div>
                    <div class="thumb-details showHam" >
                        <div class="col-xs-1 col-md-1 col-sm-1" style="height: 86px;">
                            <i class="fa fa-gift"></i>
                        </div>
                        <div class="col-xs-10 col-md-10 col-sm-10" style="height: 86px;">
                            <div class="detail-content clamp">
                                <h3 class="clampingDetail" data-id="randomId7643" style="">
                                <span class="asianLang" style="width: 100%">智能硬件产品</span>
                                </h3>
                                <p class="clampingDetail" data-id="randomId9455" style="">
                                <span class="asianLang" style="width: 200px">物联网 (IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的 IoT 解决方案。我们提供如下产品</span>
                                </p>
                            </div>
                            <div class="cta_module">
                                    <a class="learn_more" title="立即购买！" href="javascript:void(0)" target="_self">立即购买！ <i class="fa fa-angle-double-right inline"></i></a>
                            </div>
                        </div>


                        <div class="col-xs-1 col-md-1 col-sm-1 cntClk" style="height: 86px;"><i class="fa fa-bars detail-toggle"></i></div>
                        <div class="social-block">
                        </div>
                    </div>
                </div>

            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
                <div class="thumb-container  singleLineEllipse">
                    <div class="thumb-img"  style="background-image:url('http://139.196.232.21/images/blackfriday-cybermonday-edu-estore-promo.jpg')">
                                </div>
                    <div class="thumb-details showHam" >
                        <div class="col-xs-1 col-md-1 col-sm-1" style="height: 86px;">
                            <i class="fa fa-gift"></i>
                        </div>
                        <div class="col-xs-10 col-md-10 col-sm-10" style="height: 86px;">
                            <div class="detail-content clamp">
                                <h3 class="clampingDetail" data-id="randomId7643" style="">
                                <span class="asianLang" style="width: 100%">ODM</span>
                                </h3>
                                <p class="clampingDetail" data-id="randomId9455" style="">
                                <span class="asianLang" style="width: 200px">为你的传统电器，插上智能的“翅膀”</span>
                                </p>
                            </div>
                            <div class="cta_module">
                                    <a class="learn_more" title="立即购买！" href="javascript:void(0)" target="_self">立即购买！ <i class="fa fa-angle-double-right inline"></i></a>
                            </div>
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
        HardwareList:[
            {'name':'智能网关','img':'static/img/Icon/SmartHox_Products_icon7.png'},
            {'name':'智能电箱','img':'static/img/Icon/SmartHox_Products_icon8.png'},
            {'name':'协议转换器','img':'static/img/Icon/SmartHox_Products_icon9.png'},
            {'name':'无源开关','img':'static/img/Icon/SmartHox_Products_icon10.png'},
            {'name':'随意智能音箱','img':'static/img/Icon/SmartHox_Products_icon11.png'},
            {'name':'传感设备','img':'static/img/Icon/SmartHox_Products_icon12.png'}
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

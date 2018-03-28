<template>
  <div class="HR">
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
                                <span class="asianLang" style="width: 100%">社保代缴，为何选“安保云”？</span>
                                </h3>
                                <p class="clampingDetail" data-id="randomId9455" style="">
                                <span class="asianLang" style="width: 200px">安保云，是一个专为个人提供社保和公积金服务的网络平台，它依托于合盟人力资源（上海）有限公司和Ztnet IT信息背景的资源优势，系统与互联网相结合，实现了个人在家异地社保办理。在轻松保网络平台缴纳社保，操作流程简单快捷、缴费清单明晰可见，而且在这里您可以选择参保、续缴、补缴、补差、公积金缴纳等服务项目，套餐灵活性强，价格合理。</span>
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
                                <span class="asianLang" style="width: 100%">4档缴纳模式，最低只要20元</span>
                                </h3>
                                <p class="clampingDetail" data-id="randomId9455" style="">
                                <span class="asianLang" style="width: 200px">由于各地社保政策不同，下列费用只作为参考，具体费用以实际情况为准</span>
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
    <!-- <div class="BlockOuter TextCenter TabContent" style="min-height: 300px;background-image: url(static/img/TNET/bg/TNET_Product1.svg)">
      <h3 class="marginTB_20">社保代缴，为何选“安保云”？</h3>
      <p>安保云，是一个专为个人提供社保和公积金服务的网络平台，它依托于合盟人力资源（上海）有限公司和Ztnet IT信息背景的资源优势，系统与互联网相结合，实现了个人在家异地社保办理。在轻松保网络平台缴纳社保，操作流程简单快捷、缴费清单明晰可见，而且在这里您可以选择参保、续缴、补缴、补差、公积金缴纳等服务项目，套餐灵活性强，价格合理。</p>
      <div>
        <h3 class="PaddingT_40">4档缴纳模式，最低只要20元</h3>
        <p class="marginTB_20">由于各地社保政策不同，下列费用只作为参考，具体费用以实际情况为准</p>
        <Button class="marginTB_20" type="warning" shape="" @click="ToSBY()">立即参保</Button>
      </div>
    </div> -->
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
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
      ToSBY(){
        window.open('http://220.248.107.62:8089/ztnetsby')
      }
     

    }
  }
</script>
<style lang="scss">
.HR{
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
  img{
        max-width: 100% !important;
  }

}
</style>

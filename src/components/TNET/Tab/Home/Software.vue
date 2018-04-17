<template>
  <div class="SoftWare">
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
                          <div class="cta_module">
                                  <a class="learn_more" title="立即购买！" href="javascript:void(0)" target="_self">
                                    <router-link :to="{ path: Block.link }">了解详细<i class="fa fa-angle-double-right inline"></i></router-link>
                                  </a>
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
        BlockInfo:[
          {'title':'殡葬管理云平台','content':'助力民政殡葬信息化建设','img':'static/img/TNET/picture/wdjm-img1.jpg','icon':'fa fa-share-alt-square','link':'Production'},
          {'title':'软件定制','content':'Ztnet&Btzoon可根据企业的需求，定制更贴合您的业务，让系统更高效更便捷','img':'static/img/TNET/picture/ros-img1.jpg','icon':'fa fa-shield','link':'Production'}
        ],
        ProductList:[
          {'name':'数字化殡仪业务管理系统','link':''},
          {'name':'数字化陵园业务管理系统','link':''},
          {'name':'数字化殡仪IC卡管理系统','link':''},
          {'name':'数字化陵园工程管理系统','link':''},
          {'name':'数字化骨灰寄存管理系统','link':''},
          {'name':'数字化陵园档案管理系统','link':''},
          {'name':'数字化殡仪协同OA系统','link':''},
          {'name':'陵园业务移动应用APP','link':''},
          {'name':'数字化档案管理系统','link':''},
          {'name':'网站信息发布系统','link':''},
          {'name':'殡仪业务移动应用APP','link':''},
          {'name':'统计分析及决策系统','link':''},
          {'name':'电子商务平台（O2O)','link':''},
          {'name':'殡葬管理绩效考核系统','link':''},
          {'name':'场馆预约管理系统','link':''},
        ],
        Customization:[
          {'name':'行业软件定制','link':'http://139.196.232.21/customization.jsp'},
          {'name':'APP应用开发','link':'http://139.196.232.21/inventory.jsp'},
          {'name':'小程序定制','link':'http://139.196.232.21/weChat.jsp'},
          {'name':'金蝶二次开发','link':'http://139.196.232.21/eckf.jsp'}
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
      GoLink(LINK){
        window.open(LINK)
      }
     

    }
  }
</script>
<style lang="scss">
.SoftWare{
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
      .Green{
        background-color: #37ba7e;
      }
      .Blue{
        background-color: #16a6e9;
      }
      .Orange{
        background-color: #fb9a00;
      }
      .Puple{
        background-color: #b448ff;
      }
  }

}
</style>

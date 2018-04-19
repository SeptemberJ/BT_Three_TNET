<template>
  <div class="Product">
    <!-- second nav -->
        <div class="pageHeader pageheadercta">
            <div class="secondary-nav">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-9 col-lg-9 snav_left">
                          <h2 class="colorBlack">{{ProductionInfo.Name}}</h2>
                          <ul>
                              <li v-for="(Menu,Idx) in ProductionInfo.OverviewList">
                              <a  :data-element-name="Menu.name" data-element-type="tab" :href="Menu.tabNo">{{Menu.name}}</a>
                              </li>
                          </ul>
                      </div>
                      
                  </div>
              </div>
            </div>
        </div>
        <!-- content -->
        <div class="content-container" style="padding-top: 0px;">
          <!--概述-->
          <div class="anchortarget section">
            <a id="overview" class="navSelecter"></a>
          </div>
          <div class="OneBlock PaddingLR_20">
              <h2 class="marginTB_20">{{ProductionInfo.Summary.title}}</h2>
              <P v-for="(SummaryContent,Idx) in ProductionInfo.Summary.content" class="marginT_10">{{SummaryContent}}</P>
              <!-- <P class="marginT_10">{{ProductionInfo.Summary.content[0]}}</P> -->
              <!-- 图片 -->
              <Row type="flex" justify="space-between" class="code-row-bg marginTB_20" :gutter="16">
                <Col :xs="24" :sm="24" :md="12" :lg="12" v-for="(ImgBlock,Idx) in ProductionInfo.Summary.imgBlock" class="marginB_10">
                    <div class="thumb-container  singleLineEllipse">
                        <div class="thumb-img"  :style="{'background-image':'url(' + ImgBlock.img +')'}">
                        </div>
                        <div class="thumb-details showHam" >
                            <div class="col-xs-1 col-md-1 col-sm-1" style="height: 86px;">
                                <i :class="[ImgBlock.icon]"></i>
                            </div>
                            <div class="col-xs-10 col-md-10 col-sm-10" style="height: 86px;">
                                <div class="detail-content clamp">
                                    <h3 class="clampingDetail" data-id="randomId7643" style="">
                                    <span class="asianLang" style="width: 100%">{{ImgBlock.title}}</span>
                                    </h3>
                                    <p class="clampingDetail" data-id="randomId9455" style="">
                                    <span class="asianLang" style="width: 200px">{{ImgBlock.content}}</span>
                                    </p>
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
              <!-- /.图片 -->
          </div>
          <div v-if="ProductionInfo.Summary.title || ProductionInfo.Summary.content" class="LineBlock"></div>

          <!-- 功能特性 -->
          <div class="anchortarget section">
            <a id="functionCharacter" class="navSelecter"></a>
          </div>
          <!-- 内容、大图 -->
          <div v-if="ProductionInfo.FunctionCharacters && ProductionInfo.FunctionCharacters.length>0">
            <div  class="OneBlock PaddingLR_20" v-for="(FunctionCharacter,Idx) in ProductionInfo.FunctionCharacters">
                <h2 class="">{{FunctionCharacter.title}}</h2>
                <p class="marginT_10" v-for="(HorizontalText,Idx) in FunctionCharacter.horizontalText">{{HorizontalText}}</p>
                <div class="container-fluid marginTB_40">
                  <div class="row">
                      <div class="col-md-12">
                        <img class="imgAtuo" :src="FunctionCharacter.picture">
                      </div>
                  </div>
                </div>
                <div v-if="Idx != ProductionInfo.FunctionCharacters.length - 1" class="LineBlock"></div>
            </div>
          </div>
          <!-- /.内容、大图 -->

          <!-- 两侧模块 -->
          <div v-if="ProductionInfo.TwoColumnBlock && ProductionInfo.TwoColumnBlock.length>0">
            <div class="OneBlock PaddingLR_20" v-for="(BlockItem,Idx) in ProductionInfo.TwoColumnBlock">
              <div class="TelescopicBlock SectionBlock">
                <h2 class="">{{BlockItem.title}}</h2>
                <Row type="flex" justify="space-between" class="code-row-bg marginTB_40" :gutter="16">
                    <Col class="marginB_10" :xs="24" :sm="12" :md="12" :lg="12" v-for="(Block,Idx) in BlockItem.Blocks">
                        <div style="min-height: 100px;" class="Padding_10">
                            <h3><i class="fa fa-tags marginR_10"></i>{{Block.title}}</h3>
                            <p class="marginTB_20">{{Block.content}}</p>
                        </div>
                    </Col>
                    <div style="clear: both;"></div>
                </Row>
              </div>
              <div v-if="Idx != ProductionInfo.TwoColumnBlock.length - 1" class="LineBlock"></div>
            </div>
          </div>
          <!-- /.两侧模块 -->

          <!-- 文字图片左右排列 -->
          <div v-if="ProductionInfo.TextImgBlock && ProductionInfo.TextImgBlock.length>0">
            <div class="OneBlock PaddingLR_20" v-for="(TextImg,Idx) in ProductionInfo.TextImgBlock">
              <div class="TelescopicBlock SectionBlock">
                <h2 class="">{{TextImg.title}}</h2>
                  <div class="container-fluid marginT_10">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="module_container ">
                          <div class="col-md-7 no-padding-left">
                            <div class="img-left">
                              <img style="width: 100%;" :src="TextImg.picture" alt="系统功能3"></div>
                          </div>
                          <div class="col-md-5 content-wrapper">
                            <div class="text cq-dd-image marginT_10">
                              <div v-for="(ListItem,Idx) in TextImg.list">
                                <h3>{{ListItem.title}}</h3>
                                <p>{{ListItem.content}}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div v-if="Idx != ProductionInfo.TextImgBlock.length - 1" class="LineBlock"></div>
            </div>
          </div>
          <!--/.文字图片左右排列  -->


          <!-- 资源下载 -->
          <div v-if="!IfHaveSame" class="OneBlock PaddingLR_20">
            <h2 class="">资源下载</h2>
            <Row type="flex" justify="space-around" class="code-row-bg marginTB_40" :gutter="16">
              <Col :xs="24" :sm="12" :md="12" :lg="12" class="marginTB_20">
                <Card dis-hover>
                    <p slot="title" class="TitBar">
                        <Icon class="marginL_10" type="android-download"></Icon>
                        手册
                    </p>
                    <ul> 
                         <li v-for="(ManualItem,Idx) in DownloadInfo.manual" class="marginB_10"><a :href="ManualItem.source"> <i :title="ManualItem.name" class="fa fa-download "></i><span class="marginL_10">{{ManualItem.name}}</span> </a></li>
                        </ul>
                </Card>
              </Col>
              <Col :xs="24" :sm="12" :md="12" :lg="12" class="marginTB_20">
                <Card dis-hover>
                    <p slot="title" class="TitBar">
                        <Icon class="marginL_10" type="android-download"></Icon>
                        解决方案
                    </p>
                    <ul> 
                      <li v-for="(SolutionItem,Idx) in DownloadInfo.solution" class="marginB_10"><a :href="SolutionItem.source"> <i :title="SolutionItem.name" class="fa fa-download"></i><span class="marginL_10">{{SolutionItem.name}}</span> </a></li>
                    </ul>
                </Card>
              </Col>
            </Row>
          </div>


        </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
  export default{
    data: function () {
      return {
        IfHaveSame:false,
        ProductionInfo:'',
        DownloadInfo:{
          manual:[{"name":"二维码app","source":"static/Download/二维码app.pptx"},{"name":"跨境电商","source":"static/Download/跨境电商.pptx"},{"name":"物流","source":"static/Download/物流.ppt"},{"name":"移动端采购单审批","source":"static/Download/移动端采购单审批.pptx"}],
          solution:[{"name":"远程下单方案","source":"static/Download/远程下单方案.ppt"},{"name":"K3ERP一般进销存业务流程","source":"static/Download/K3ERP一般进销存业务流程.pptx"},{"name":"生产工序","source":"static/Download/生产工序.pptx"},{"name":"RFID","source":"static/Download/RFID.ppt"}]
        },
        LeaderInfo:{
          Name:'柏田定制化软件',
          OverviewList:[
            // {'name':'概述','tabNo':'#overview'},
            {'name':'概述','tabNo':'#functionCharacter'},
          ],
          Summary:{
            'title':'',
            'content':[]
          },
          FunctionCharacters:[
            {"title":"柏田软件为您量身定制的管理软件","horizontalText":[],"picture":"static/img/TNET/picture/xitong.png"}
          ]
        }
        
      }
    },
    mounted: function () {
      
    },
    created() {
      let ProductionName = this.$router.history.current.query.production
      axios.get(PRE_URL+'static/json/productionInfo.json'
      ).then((res)=> {
        console.log(res)
        res.data.productionInfoList.map((Product,Idx)=>{
          if(Product.Name == ProductionName){
            this.IfHaveSame = true
            this.ProductionInfo = Product
          }
        })

        if(!this.IfHaveSame){
          this.ProductionInfo = this.LeaderInfo
        }
          
      }).catch((error)=> {
        console.log(error)
      })
      
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
<style  lang="scss">
.ivu-card-head{
  padding: 0 !important;
}
.TitBar{
  background-color: #0094d2 !important;
  height: 40px !important; 
  line-height: 40px !important; 
  color: #fff !important;
}
.SectionBlock{
  margin-bottom: 25px !important;
}
.imgAtuo{
  max-width: 100%;
  margin: 0 auto;
  display: block !important;
}
</style>
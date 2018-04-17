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
              <P>{{ProductionInfo.Summary.content}}</P>
          </div>
          <div class="LineBlock"></div>

          <!-- 功能特性 -->
          <div class="anchortarget section">
            <a id="functionCharacter" class="navSelecter"></a>
          </div>
          <div class="OneBlock PaddingLR_20" v-for="(FunctionCharacter,Idx) in ProductionInfo.FunctionCharacters">
              <h2 class="">{{FunctionCharacter.title}}</h2>
              <div class="container-fluid marginTB_40">
                <div class="row">
                    <div class="col-md-12">
                      <img class="imgAtuo" :src="FunctionCharacter.picture">
                    </div>
                </div>
              </div>
              <div class="LineBlock"></div>
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
        ProductionInfo:'',
        ProductionInfo2:{
          Name:'进销存系统',
          OverviewList:[
            {'name':'概述','tabNo':'#overview'},
            {'name':'功能特性','tabNo':'#functionCharacter'},
          ],
          Summary:{
            'title':'ZTNET-ERP综合管理系统-进销存系统',
            'content':'Ztnet进销存不同于传统进销存，它以提升企业效益为导向通过“订单”协同+进销存管理打通企业外部生意协作与内部管理覆盖企业供应链全业务场景，实时数据决策，让生意更简单！从进销存开始，打造企业专属的全渠道营销互动平台。'
          },
          FunctionCharacters:[
            {'title':'采购管理','picture':'http://139.196.232.21/images/inventory-1.png'},
            {'title':'采购管理','picture':'http://139.196.232.21/images/inventory-2.png'},
            {'title':'委外加工','picture':'http://139.196.232.21/images/inventory-3.png'},
            {'title':'销售管理','picture':'http://139.196.232.21/images/inventory-4.png'},
            {'title':'仓存管理','picture':'http://139.196.232.21/images/inventory-5.png'},
            {'title':'委外核算','picture':'http://139.196.232.21/images/inventory-6.png'},
            {'title':'PDA扫描出、入库系统','picture':'http://139.196.232.21/images/inventory-7.png'},
            {'title':'生产任务管理','picture':'http://139.196.232.21/images/inventory-8.png'},
            {'title':'生产任务管理','picture':'http://139.196.232.21/images/inventory-9.png'},
            {'title':'生产看板系统','picture':'http://139.196.232.21/images/inventory-10.png'},
            {'title':'生产看板系统','picture':'http://139.196.232.21/images/inventory-11.png'},
            {'title':'邮件管理系统','picture':'http://139.196.232.21/images/inventory-12.png'},
            {'title':'邮件管理系统','picture':'http://139.196.232.21/images/inventory-13.png'},
            {'title':'样品管理下单系统','picture':'http://139.196.232.21/images/inventory-14.png'}
          ]
        }
        
      }
    },
    mounted: function () {
      
    },
    created() {
      let ProductionName = this.$router.history.current.query.production
      console.log(ProductionName)
      axios.get(PRE_URL+'static/json/productionInfo.json'
      ).then((res)=> {
        console.log(res)
        res.data.productionInfoList.map((Product,Idx)=>{
          if(Product.Name == ProductionName){
            this.ProductionInfo = Product
          }
        })
          
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
.SectionBlock{
  margin-bottom: 25px !important;
}
.imgAtuo{
  width: 100%;
  margin: 0 auto;
  display: block !important;
}
</style>
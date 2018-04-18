<template>
  <div class="Product">
    <!-- second nav -->
        <div class="pageHeader pageheadercta">
            <div class="secondary-nav">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-9 col-lg-9 snav_left">
                          <h2 class="colorBlack">产品</h2>
                          <ul>
                              <li v-for="(Menu,Idx) in OverviewList">
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
            <div class="parcontainer parsys container-fluid">
                <!--概述-->
                <div class="anchortarget section">
                  <a id="overview" class="navSelecter"></a>
                </div>
                <div class="OneBlock PaddingLR_20">
                    <h2 class="marginTB_20">TNET产品介绍</h2>
                    <P>Ztnet基于十多年的企业级信息系统开发经验，逐步研发了一系列专业化产品，并不断提升产品的成熟度和应用价值，以此来保障客户服务水平和产品卓越品质!</P>
                </div>
                <div class="LineBlock"></div>

                <!--金蝶软件-->
                <div class="anchortarget section">
                  <a id="kingdee" class="navSelecter"></a>
                </div>
                <div class="OneBlock PaddingLR_20">
                  <div class="TelescopicBlock SectionBlock">
                    <h2 class="marginTB_40 colorBlack">金蝶软件</h2>
                    <Row type="flex" justify="space-between" class="code-row-bg marginTB_40" :gutter="16">
                        <Col class="marginB_10" :xs="24" :sm="12" :md="12" :lg="12" v-for="(Production,Idx) in ProductionList_K3">
                            <div style="min-height: 100px;" class="Padding_10">
                                <h3 class="colorBlue"><router-link :to="{ path: 'ProductDetail',query: { production: Production.title }}">{{Production.title}}<i class="fa fa-angle-double-right marginL_10"></i></router-link></h3>
                                <p class="marginTB_20">{{Production.content}}</p>
                            </div>
                        </Col>
                        <div style="clear: both;"></div>
                    </Row>
                  </div>
                </div>
                <div class="LineBlock"></div>

                <!--定制化软件-->
                <div class="anchortarget section">
                  <a id="customization" class="navSelecter"></a>
                </div>
                <div class="OneBlock PaddingLR_20">
                  <div class="TelescopicBlock SectionBlock">
                    <h2 class="marginTB_40 colorBlack">定制化软件</h2>
                    <Row type="flex" justify="space-between" class="code-row-bg marginTB_40" :gutter="16">
                        <Col class="marginB_10" :xs="24" :sm="12" :md="12" :lg="12" v-for="(Production,Idx) in ProductionList_C">
                            <div style="min-height: 100px;" class="Padding_10">
                                <h3 class="colorBlue"><router-link :to="{ path: 'ProductDetail',query: { production: Production.title }}">{{Production.title}}<i class="fa fa-angle-double-right marginL_10"></i></router-link></h3>
                                <p class="marginTB_20">{{Production.content}}</p>
                            </div>
                        </Col>
                        <div style="clear: both;"></div>
                    </Row>
                  </div>
                </div>
                <div class="LineBlock"></div>



            </div>
        </div>
  </div>
</template>
<script>

  export default{
    data: function () {
      return {
        CurTab:'公司',
        TabHeadList:['概述'],
        OverviewList:[
          {'name':'概述','tabNo':'#overview'},
          {'name':'金蝶软件','tabNo':'#kingdee'},
          {'name':'定制化软件','tabNo':'#customization'}
        ],
        ProductionList_K3:[
            {'title':'金蝶二次开发','content':'从 “尊重用户企业文化，彰显个性管理”的角度出发，Ztnet专门推出金蝶二次开发平台，与金蝶ERP管理软件系统一起打造企业的个性化ERP，实现企业的个性化管理。','kind':'K3EK'},
            {'title':'金蝶K/3 Cloud','content':'聚焦多组织、多利润中心的大中型企业，全面支持多组织财务管理、业务协同、精细管控，借助平台实现全网资源聚合，通过云平台实现敏捷协同，最终成就敏捷企业的“随需而制”。','kind':'K3Cloud'},
            {'title':'金蝶EAS','content':'EAS为集团企业提供全面覆盖财务共享、供应链、销售、采购电商、多工厂制造等解决方案；满足集团企业创新与发展需求，为其提供最适合中国企业管理特质的开放平台','kind':'K3EAS'},
            {'title':'金蝶KIS','content':'金蝶KIS融合社交网络、移动互联网和云计算三大新兴技术，让您实现轻松、高效经营，赢得更多商机。','kind':'K3KIS'},
            {'title':'金蝶/K3 WISE','content':'设计创新力、整合销售力、敏捷制造力、协同运营力4个方面打造企业“智造力”，实现企业的卓越价值和基业常青。','kind':'K3WISE'},
        ],
        ProductionList_C:[
            {'title':'微订货系统(小程序)','content':'Ztnet微订货系统（小程序）：对工作数据要求精确，数据量大，迫切需要提高生产力和工作效率，需要严格控制工作流程的企业。跟传统系统相比，优势如下：小程序端，用户使用方便，直接从微信登录，方便，便捷。','kind':'Order'},
            {'title':'柏田CRM系统','content':'客户信息跟踪,挖掘商机,数据分析,图表自动生成.励销crm客户关系管理系统客户关系管理系统,专为中小企业设计。','kind':'Order'},
            {'title':'进销存系统','content':'Ztnet进销存不同于传统进销存，它以提升企业效益为导向通过“订单”协同+进销存管理打通企业外部生意协作与内部管理覆盖企业供应链全业务场景，实时数据决策，让生意更简单！从进销存开始，打造企业专属的全渠道营销互动平台。','kind':'Order'},
            {'title':'生产系统','content':'Ztnet-MES构建于中国自有知识产权的基础业务平台之上，符合MESA/ISA-S95标准，基于批次过程控制，以及企业建模技术，是企业内部物流、生产体系、品质部门的保障系统，为企业实现JIT拉动模式、Lean精益生产、6 Sigma-TQM全面质量管理、为企业迈进 “工业4.0/中国制造2025” 打下坚实的基础。','kind':'Order'},
            {'title':'二维码出入库管理系统','content':'适用企业：对库存数据要求精确，迫切需要提高生产力和物流效率，需要严格控制产品出入库的企业 涉及行业有：制造业、电商行业、租赁、零售（批发）业、物流仓储。跟传统进销存系统相比，从开单方面说，PDA开单可以不受电脑限制，可以进行移动式的操作；从盘点方面说，PDA可以扫描进行，移动式的进行，不受电脑，不受网络限制，大大减轻了企业的盘点工作量；PDA上程序又可以提供出入库的验货操作，提高出入库的正确率。','kind':'Order'},
            {'title':'厂房租赁管理系统','content':'Ztnet厂房租赁管理系统是一款针对厂房出租行业开发的专业化管理软件，用户可以通过本款管理软件轻松地对厂房出租进行管理，适用于普遍的厂房租赁公司。','kind':'Order'},
            {'title':'RFID仓储自动化系统','content':'满足电商精细化的库存管理需求，全面提升仓储作业工作效率。产品定位于服务大中型客户群体，覆盖第三方仓储业务领域。提供具有多行业特性、最专业解决方案。','kind':'Order'},
            {'title':'微信审批系统','content':'Ztnet微信审批系统适用企业：对工作数据要求精确，数据量大，迫切需要提高生产力和工作效率，需要严格控制工作流程的企业。跟传统系统相比，优势如下：小程序端，用户使用方便，直接从微信登录，方便，便捷；企业微信端，企业内部的员工，可以按照工作流程，还能推送消息。','kind':'Order'},
            {'title':'第三方物流管理系统','content':'Ztnet 物流管理套件eLOG Enterprise Suite基于供应链网络设计，集成行业最佳的实践业务模型，帮助企业解决在物流作业过程中所面临的种种挑战。','kind':'Order'},
            {'title':'微信小程序开发','content':'微信有海量用户，而且粘性很高，在微信里开发产品更容易触达客户，推广app或者公众号的成本太高，而小程序“无需下载”的优势能够使用户减少心理负担，推广效率更高。推广小程序只需要用户扫码即可，不管是流量环境还是WIFF环境都不是问题，最大限度的减少了用户的耐心损耗。','kind':'Order'},
            {'title':'售后服务系统','content':'售后服务本身同时也是一种促销手段。在追踪跟进阶段，推销人员要采取各种形式的配合步骤，通过售后服务来提高企业的信誉，扩大产品的市场占有率，提高推销工作的效率及效益。','kind':'Order'},
            {'title':'殡仪馆业务系统','content':'从信息高度统一管理原则出发，建设殡仪业务管理系统，包括系统开发、系统测试、项目部署、员工培训等，使殡仪馆在业务流程控制、员工绩效考评、员工任务安排及提醒、库存控制等方面实现信息化、现代化的管理。','kind':'Order'},
            {'title':'柏田车辆监控平台','content':'经过将近一年的奋斗改版，柏田车辆监控平台正式上线多定位终端支持：北斗终端、GPS终端、手机客户端。七大核心功能体系，规范车辆行为，提高业务效率，增强服务质量，降低车载物品安全风险。','kind':'Order'},
            {'title':'融资租业务赁管理系统','content':'融资租赁信息管理平台涵盖了业务审批子系统、授信管理子系统、金融市场管理子系统、租赁管理子系统、运营统计分析子系统等五个子系统。通过平台可以进行直接租赁、售后回租、转租赁、委托租赁等多种融资租赁业务的全生命周期管理，实时监管资金流向，加强业务的风险控制能力。','kind':'Order'}
        ]
      }
    },
    mounted: function () {
      
    },
    created() {
      
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
.Product{
  .colorBlue{
    color: #006990;
  }
}
</style>

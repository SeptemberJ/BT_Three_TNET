<template>
  <div>
    <div class="desktop">
      <Menu :theme="theme3" :active-name="CurSiderMenu" @on-select="ChangeSiderMenu">
          <MenuGroup title="">
              <!-- <MenuItem name="首页" class="marginB_20">
                  <Icon size="22" type="home"></Icon>
                  <h5>首页</h5>
              </MenuItem> -->
              <MenuItem name="IoT智能" class="marginB_20">
                  <Icon size="22" type="social-buffer"></Icon>
                  <h5>IoT智能</h5>
              </MenuItem>
              <MenuItem name="软件开发" class="marginB_20">
                  <Icon size="22" type="social-windows"></Icon>
                  <h5>软件开发</h5>
              </MenuItem>
              <MenuItem name="HR服务" class="marginB_20">
                  <Icon size="22" type="ios-infinite"></Icon>
                  <h5>HR服务</h5>
              </MenuItem>
              <MenuItem name="公司" class="marginB_20">
                  <i class="F_24 fa fa-building" aria-hidden="true"></i>
                  <h5>公司</h5>
              </MenuItem>
          </MenuGroup>
      </Menu>
    </div>
    <div class="tablet">
      <Menu :theme="theme3" :active-name="CurSiderMenu" @on-select="ChangeSiderMenu2">
          <MenuGroup title="">
              <!-- <MenuItem name="首页" class="marginB_20">
                  <Icon size="22" type="home"></Icon>
                  <h5>首页</h5>
              </MenuItem> -->
              <MenuItem name="IoT智能" class="marginB_20">
                  <Icon size="22" type="social-buffer"></Icon>
                  <h5>IoT智能</h5>
              </MenuItem>
              <MenuItem name="软件开发" class="marginB_20">
                  <Icon size="22" type="social-windows"></Icon>
                  <h5>软件开发</h5>
              </MenuItem>
              <MenuItem name="HR服务" class="marginB_20">
                  <Icon size="22" type="ios-infinite"></Icon>
                  <h5>HR服务</h5>
              </MenuItem>
              <MenuItem name="公司" class="marginB_20">
                  <i class="F_24 fa fa-building" aria-hidden="true"></i>
                  <h5>公司</h5>
              </MenuItem>
              <MenuItem name="Close" class="marginB_20">
                  <Icon size="22" type="chevron-left"></Icon>
              </MenuItem>
          </MenuGroup>
      </Menu>
    </div>
  </div>
</template>
<script>

  export default{
    data: function () {
      return {
        theme3: 'light'
      }
    },
    mounted: function () {
      
    },
    created() {
      
    },
    computed: {
      CurSiderMenu(){
        return this.$store.state.CurSiderMenu
      }
      
    },
    watch: {
      
    },
    components: {
      

    },
    methods: {
      ChangeSiderMenu(Menu){
        switch(Menu){
          case 'IoT智能':
          window.open('http://www.btzoon.com/SmartHox/')  //Smart Hox
          break
          case 'HR服务':
          window.open('http://www.btzoon.com/HER/')  //SBY
          break
          default:
          this.$store.state.CurSiderMenu = Menu
          this.$router.push({name:Menu})
        }
      },
      ChangeSiderMenu2(Menu){
        if(Menu != 'Close'){
          this.ChangeSiderMenu(Menu)
          // this.$store.state.CurSiderMenu = Menu
          // this.$router.push({name:Menu})
        }
        this.ToggleSider()
      },
      ToggleSider (flag) {
          this.$store.state.open = !this.$store.state.open
      },
     

    }
  }
</script>
<style lang="scss">
.F_24{
  font-size: 22px;
}
.desktop{
  display: none;
}
.tablet{
  display: inline-block;
}
@media (min-width: 769px) {
  .desktop{
    display: inline-block;
  }
  .tablet{
    display: none !important;
  }

}
.ivu-menu-item h5{
  margin-top: 8px;
}
.ivu-menu-item-group-title{
  background-repeat: no-repeat;
  background-position-x: center;
  background-image: url('http://139.196.232.21/images/logo.png');
  background-size: contain;
  padding: 0 5px;
}
.ivu-menu-light{
  width: 95px !important;
  background-color: #464547 !important;
}
.ivu-menu{
  color: #fff !important; 
}
</style>

<template>
<div class="template-container a-bg-content">
<div class="a-header a-hfn-header-container d-flex align-items-center justify-content-between a-px-20">
            <div class="d-flex align-items-center">
                <div class="a-pwc-logo-grid a-md"></div>
                <span class="divider a-mx-20"></span>
                <div class="font-weight-medium a-nowrap">{{$route.name}}</div>
                
                  <span class="divider a-mx-20"></span>
                <div class="a-dropdown a-dropdown-one down header-dropdown" data-arrangecontext=".a-header">
                    <button class="a-dropdown-toggle with-outline no-outline" aria-expanded="false">
                        <div class="a-choosen-text text-truncate">Page menu two</div>
                        <span class="a-icon appkiticon icon-down-chevron-fill"> </span>
                    </button>
                </div>
            </div>
            <div class="d-flex align-items-center a-pl-10">
                <div class="d-none d-sm-flex">
                    <span class="link-icon" tabindex="0">
                        <span class="appkiticon icon-help-question-outline"></span>
                    </span>
                    <span class="link-icon" tabindex="0">
                        <span class="appkiticon icon-survey-outline"></span>
                    </span>
                    <span class="link-icon" tabindex="0">
                        <span class="appkiticon icon-grid-view-outline"></span>
                    </span>
                </div>
                <div class="a-logout">
                    <button aria-expanded="true" aria-haspopup="true" class="user-name a-bg-primary size-24" data-toggle="dropdown">FL</button>
                    <div class="dropdown-menu dropdown-menu-right a-shadow-sm border-0 a-user-setting-panel-one">
                        <div class="dropdown-title">
                            WELCOME FIRST LASTNAME
                        </div>
                        <ul class="user-infor-list">
                            <li class="user-infor-list-item">My Profile</li>
                            <li class="user-infor-list-item">Notification Settings</li>
                            <li class="user-infor-list-item">Manage Following Items</li>
                            <li class="user-infor-list-item">Manage User Groups</li>
                            <li class="user-infor-list-item">View Reported Issues</li>
                        </ul>
                        <div class="user-logout">
                            <button class="sign-out-btn a-btn a-btn-primary a-btn-lg">SIGN OUT</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>

</template>
<script>
export default {
  name:'Header',
  
}

</script>
<style>
.logo {
    float: left;
    width:auto;
    height:2em;
    margin: 0px 50px 0px 10px;

}
.loginn {
   float: right;
        
}


.nav {
    background-color: #FFF;
    overflow: hidden;
    height: 2.8vh;
    padding-top:10px;
    padding-bottom:12px;
    margin-bottom:3px;
    box-shadow: 0px 2px 5px 0px grey;
    
}
.nav a {
  
    text-decoration: none;
    color:rgba(8, 8, 7, 0.712);

  
}


 .a-header {
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 15%);
    background-color: var(--theme-color-navheader);
    height: 3.125rem;
    position: relative;
    text-align: left;
    width: 100%;
    font-size: .875rem;
     text-decoration: none;
}

#btn {
      cursor: pointer;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    text-align: center;
    line-height: 0.5rem;
    font-weight: 400;
    color: #fff;
    padding: 2px;
}


</style>
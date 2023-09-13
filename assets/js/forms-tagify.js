"use strict";!function(){var a=document.querySelector("#TagifyBasic"),a=(new Tagify(a),document.querySelector("#TagifyReadonly")),a=(new Tagify(a),document.querySelector("#TagifyCustomInlineSuggestion")),e=document.querySelector("#TagifyCustomListSuggestion"),t=["SIGNUP","LANDING","PAYMENT","HOME", "SIGNIN", "ABOUT","DASHBOARD", "EMAIL", 'CONTACT', "SHOP", "ECOMMERCE", "CRM", "FINANCE", "FOOD", "KANBAN", "LOGISTICS", "PROFILE", "SETTING", "PRICING", "FAQ", "DOCUMENTATION", "HELP", "FEED", "SEARCH", "EDUCATION"],a=(new Tagify(a,{whitelist:t,maxTags:20,dropdown:{maxItems:20,classname:"tags-inline",enabled:0,closeOnSelect:!1}}),new Tagify(e,{whitelist:t,maxTags:20,dropdown:{maxItems:20,classname:"",enabled:0,closeOnSelect:!1}}),document.querySelector("#TagifyUserList"));let i=new Tagify(a,{tagTextProp:"name",enforceWhitelist:!0,skipInvalid:!0,dropdown:{closeOnSelect:!1,enabled:0,classname:"users-list",searchKeys:["name","email"]},templates:{tag:function(a){return`
    <tag title="${a.title||a.email}"
      contenteditable='false'
      spellcheck='false'
      tabIndex="-1"
      class="${this.settings.classNames.tag} ${a.class||""}"
      ${this.getAttributes(a)}
    >
      <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
      <div>
        <div class='tagify__tag__avatar-wrap'>
          <img onerror="this.style.visibility='hidden'" src="${a.avatar}">
        </div>
        <span class='tagify__tag-text'>${a.name}</span>
      </div>
    </tag>
  `},dropdownItem:function(a){return`
    <div ${this.getAttributes(a)}
      class='tagify__dropdown__item align-items-center ${a.class||""}'
      tabindex="0"
      role="option"
    >
      ${a.avatar?`<div class='tagify__dropdown__item__avatar-wrap'>
          <img onerror="this.style.visibility='hidden'" src="${a.avatar}">
        </div>`:""}
      <div class="fw-medium">${a.name}</div>
      <span>${a.email}</span>
    </div>
  `}},whitelist:[{value:1,name:"Justinian Hattersley",avatar:"https://i.pravatar.cc/80?img=1",email:"jhattersley0@ucsd.edu"},{value:2,name:"Antons Esson",avatar:"https://i.pravatar.cc/80?img=2",email:"aesson1@ning.com"},{value:3,name:"Ardeen Batisse",avatar:"https://i.pravatar.cc/80?img=3",email:"abatisse2@nih.gov"},{value:4,name:"Graeme Yellowley",avatar:"https://i.pravatar.cc/80?img=4",email:"gyellowley3@behance.net"},{value:5,name:"Dido Wilford",avatar:"https://i.pravatar.cc/80?img=5",email:"dwilford4@jugem.jp"},{value:6,name:"Celesta Orwin",avatar:"https://i.pravatar.cc/80?img=6",email:"corwin5@meetup.com"},{value:7,name:"Sally Main",avatar:"https://i.pravatar.cc/80?img=7",email:"smain6@techcrunch.com"},{value:8,name:"Grethel Haysman",avatar:"https://i.pravatar.cc/80?img=8",email:"ghaysman7@mashable.com"},{value:9,name:"Marvin Mandrake",avatar:"https://i.pravatar.cc/80?img=9",email:"mmandrake8@sourceforge.net"},{value:10,name:"Corrie Tidey",avatar:"https://i.pravatar.cc/80?img=10",email:"ctidey9@youtube.com"}]});i.on("dropdown:show dropdown:updated",function(a){a=a.detail.tagify.DOM.dropdown.content;1<i.suggestedListItems.length&&(n=i.parseTemplate("dropdownItem",[{class:"addAll",name:"Add all",email:i.settings.whitelist.reduce(function(a,e){return i.isTagDuplicate(e.value)?a:a+1},0)+" Members"}]),a.insertBefore(n,a.firstChild))}),i.on("dropdown:select",function(a){a.detail.elm==n&&i.dropdown.selectAll.call(i)});let n;e=Array.apply(null,Array(100)).map(function(){return Array.apply(null,Array(~~(10*Math.random()+3))).map(function(){return String.fromCharCode(26*Math.random()+97)}).join("")+"@gmail.com"});const l=document.querySelector("#TagifyEmailList"),s=new Tagify(l,{pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,whitelist:e,callbacks:{invalid:function(a){console.log("invalid",a.detail)}},dropdown:{position:"text",enabled:1}}),r=l.nextElementSibling;r.addEventListener("click",function(){s.addEmptyTag()})}();
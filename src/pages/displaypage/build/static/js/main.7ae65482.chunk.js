(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,a,t){e.exports=t(34)},23:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),l=t(12),s=t.n(l),o=(t(22),t(13)),n=t(14),m=t(16),u=t(15),i=(t(23),t(7)),d=t.n(i),f={apiKey:"AIzaSyCEiedFABGSwzvvxXyaWKpV8KFPBP8MST4",authDomain:"landlord-profile.firebaseapp.com",databaseURL:"https://landlord-profile.firebaseio.com",projectId:"landlord-profile",storageBucket:"landlord-profile.appspot.com",messagingSenderId:"1047741868106",appId:"1:1047741868106:web:fd2e4b4a75ecbf9d1fdeb3",measurementId:"G-TN5QRYVG7H"},p=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).writeUserData=function(){d.a.database().ref("/").set(r.state),console.log("DATA SAVED")},r.getUserData=function(){d.a.database().ref("/").on("value",(function(e){var a=e.val();r.setState(a)}))},r.handleSubmit=function(e){e.preventDefault();var a=r.refs.uid.value,t=r.refs.name.value,c=r.refs.age.value,l=r.refs.aboutMe.value,s=r.refs.price.value,o=r.refs.gender.value,n=r.refs.housemates.value,m=r.refs.bed.value,u=r.refs.bath.value,i=r.refs.garage.value,d=r.refs.hasPets.checked,f=r.refs.route10.checked,p=r.refs.route15.checked,E=r.refs.route16.checked,b=r.refs.route19.checked,h=r.refs.route20.checked,v=r.refs.route22.checked,N=r.refs.beach.checked,g=r.refs.downtown.checked,x=r.refs.campus.checked;if(a&&t&&c){var k=r.state.developers,y=k.findIndex((function(e){return e.uid===a}));k[y].name=t,k[y].age=c,k[y].garage=i,k[y].aboutMe=l,k[y].hasPets=d,k[y].price=s,k[y].route10=f,k[y].gender=o,k[y].route15=p,k[y].housemates=n,k[y].route16=E,k[y].bed=m,k[y].route19=b,k[y].bath=u,k[y].route20=h,k[y].campus=x,k[y].route22=v,k[y].beach=N,k[y].downtown=g,r.setState({developers:k})}else if(t&&c){var w=(new Date).getTime().toString(),_=r.state.developers;_.push({uid:w,name:t,age:c}),r.setState({developers:_})}r.refs.name.value="",r.refs.uid.value="",r.refs.age.value="",r.state.aboutMe="",r.state.price="",r.state.gender="",r.state.housemates="",r.state.bed="",r.state.bath="",r.state.garage="",r.state.hasPets=!1,r.state.route10=!1,r.state.route15=!1,r.state.route16=!1,r.state.route19=!1,r.state.route20=!1,r.state.route22=!1,r.state.beach=!1,r.state.downtown=!1,r.state.campus=!1},r.removeData=function(e){var a=r.state.developers.filter((function(a){return a.uid!==e.uid}));r.setState({developers:a})},r.updateData=function(e){r.refs.uid.value=e.uid,r.refs.name.value=e.name,r.refs.age.value=e.age,r.refs.gender.value=e.gender,r.refs.price.value=e.price,r.refs.aboutMe.value=e.aboutMe,r.refs.housemates.value=e.housemates,r.refs.bed.value=e.bed,r.refs.bath.value=e.bath,r.refs.garage.value=e.garage,r.refs.hasPets.value=e.hasPets,r.refs.route10.value=e.route10,r.refs.route15.value=e.route15,r.refs.route16.value=e.route16,r.refs.route19.value=e.route19,r.refs.route20.value=e.route20,r.refs.route22.value=e.route22,r.refs.campus.value=e.campus,r.refs.downtown.value=e.downtown,r.refs.beach.value=e.beach},d.a.initializeApp(f),r.state={developers:[]},r}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"componentDidUpdate",value:function(e,a){a!==this.state&&this.writeUserData()}},{key:"render",value:function(){var e=this.state.developers;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"bg flex-center"},c.a.createElement("h1",null,"Treehouse"),c.a.createElement("p",null,"Find your best housing options in Santa Cruz")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("h1",null,c.a.createElement("a",{href:"#"},"Treehouse Listings")),c.a.createElement("p",{className:"lead"},"Please submit your information here."))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},"\u4eba\u3001",e.map((function(e){return c.a.createElement("div",{key:e.uid,className:"card float-left",style:{width:"18rem",margin:"1rem"}},c.a.createElement("div",{className:"card-body card-margin"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-center"},"title"),c.a.createElement("p",{className:"card-text text-center"},"Name",":",e.name),c.a.createElement("p",{className:"card-text text-center"},"Age",":",e.age),c.a.createElement("p",{className:"card-text text-center"},"Gender",":",e.gender),c.a.createElement("p",{className:"card-text text-center"},"Aboutme",":",e.aboutMe),c.a.createElement("p",{className:"card-text text-center"},"Price",":",e.price),c.a.createElement("p",{className:"card-text text-center"},e.bed," beds",",",e.bath," bath",",",e.garage," parking spaces",","),c.a.createElement("p",{className:"card-text text-center"},e.bed," housemates",",",e.hasPets," pets"),c.a.createElement("p",{className:"card-text text-center"},e.route10,"route10",",",e.route15,"route15",",",e.route16,"route16",",",e.route19,"route19",",","route20","route22"),c.a.createElement("p",{className:"card-text text-center"},"beach",",","downtown",",","campus"))))})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"row header"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("input",{type:"hidden",ref:"uid"}),c.a.createElement("h1",null,c.a.createElement("a",{href:"#"},"Treehouse User Signup")),c.a.createElement("p",{className:"lead"},"Please submit your information here."))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h3",null,"Identity"),c.a.createElement("div",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_sender"},"Select Your Identity:"),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1",checked:!0}),c.a.createElement("label",{className:"form-check-label",for:"exampleRadios1"},"landlord")),"\xa0 \xa0 \xa0",c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"option2"}),c.a.createElement("label",{className:"form-check-label",for:"exampleRadios2"},"renter"))))),c.a.createElement("h3",null,"House information"),c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{for:"id_subject"},"Number of Bedrooms:"),c.a.createElement("input",{maxlength:"100",type:"text",name:"subject",className:"form-control",id:"id_subject",ref:"bed"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_message"},"Number of Bathrooms:"),c.a.createElement("input",{type:"text",name:"message",className:"form-control",id:"id_message",ref:"bath"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_sender"},"Number of Parking Lots:"),c.a.createElement("input",{type:"text",name:"sender",className:"form-control",id:"id_sender",ref:"garage"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_sender"},"Number of Housemates:"),c.a.createElement("input",{type:"text",name:"sender",className:"form-control",id:"id_sender",ref:"housemates"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_sender"},"Price:"),c.a.createElement("input",{type:"text",name:"sender",className:"form-control",id:"id_sender",ref:"price"})))))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h3",null,"Personal information"),c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{for:"id_subject"},"Name:"),c.a.createElement("input",{maxlength:"100",type:"text",name:"subject",className:"form-control",id:"id_subject",ref:"name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_message"},"Age:"),c.a.createElement("input",{type:"text",name:"message",className:"form-control",id:"id_message",ref:"age"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_sender"},"gender:"),c.a.createElement("input",{type:"text",name:"sender",className:"form-control",id:"id_sender",ref:"gender"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_sender"},"AboutMe:"),c.a.createElement("input",{type:"text",name:"sender",className:"form-control",id:"id_sender",ref:"aboutMe"}))))),c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_sender"},"Pets:"),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1",checked:!0,ref:"hasPets"}),c.a.createElement("label",{className:"form-check-label",for:"exampleRadios1"},"Yes")),"\xa0 \xa0 \xa0",c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"option2"}),c.a.createElement("label",{className:"form-check-label",for:"exampleRadios2"},"No")))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_sender"},"Nearby Bus Routes:"),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{class:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"customCheck10",ref:"route10"}),c.a.createElement("label",{class:"custom-control-label",for:"customCheck10"},"10")),"\xa0\xa0\xa0",c.a.createElement("div",{class:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"customCheck15",ref:"route15"}),c.a.createElement("label",{class:"custom-control-label",for:"customCheck15"},"15")),"\xa0\xa0\xa0",c.a.createElement("div",{class:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"customCheck16",ref:"route16"}),c.a.createElement("label",{class:"custom-control-label",for:"customCheck16"},"16")),"\xa0\xa0\xa0",c.a.createElement("div",{class:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"customCheck19",ref:"route19"}),c.a.createElement("label",{class:"custom-control-label",for:"customCheck19"},"19")),"\xa0\xa0\xa0",c.a.createElement("div",{class:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"customCheck20",ref:"route20"}),c.a.createElement("label",{class:"custom-control-label",for:"customCheck20"},"20")),"\xa0\xa0\xa0",c.a.createElement("div",{class:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"customCheck22",ref:"route22"}),c.a.createElement("label",{class:"custom-control-label",for:"customCheck22"},"22")))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"id_sender"},"Location:"),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{class:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"Beach",ref:"beach"}),c.a.createElement("label",{class:"custom-control-label",for:"Beach"},"Near the Beach")),"\xa0\xa0\xa0",c.a.createElement("div",{class:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"Downtown",ref:"downtown"}),c.a.createElement("label",{class:"custom-control-label",for:"Downtown"},"Near Downtown")),"\xa0\xa0\xa0",c.a.createElement("div",{class:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"Campus",ref:"campus"}),c.a.createElement("label",{class:"custom-control-label",for:"Campus"},"Near Campus"))))))),c.a.createElement("button",{className:"btn btn-primary center-btn"},"Submit"))))),c.a.createElement("div",{className:"footer"})))}}]),t}(c.a.Component);s.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7ae65482.chunk.js.map
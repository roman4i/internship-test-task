(()=>{"use strict";const e={"/calendar":function(){!function(){const e=document.createElement("div");e.id="calendarContainer",e.classList="headStyle";const t=document.createElement("div");t.innerText="Calendar",t.classList="headText",e.append(t);const n=document.createElement("div");n.classList="eventContainer",e.append(n);const c=document.createElement("select");c.id="personSelect",c.classList="personSelect",n.append(c);const a=document.createElement("input");a.type="button",a.value="New event +",a.classList="newEvent",n.append(a),document.getElementById("root").append(e)}(),function(){const e=document.createElement("div");e.id="tableCont",e.classList="tableContainer";const t=document.createElement("table"),n=document.createElement("tr");["Name","Mon","Tue","Wed","Thu","Fri"].forEach(((e,t)=>{const c=document.createElement("td");c.id=`cell${t}`,c.classList="headColorise tabCell",c.innerText=e,n.append(c)})),t.append(n);let c=7;for(let e=1;e<10;e++){const e=document.createElement("tr");for(let t=0;t<6;t++){const t=document.createElement("td");t.id=`cell${c}`,t.classList="tabCell",c++,e.append(t)}t.append(e)}e.append(t),document.getElementById("root").append(e);let a=10;for(let e=7;e<56;e+=6)document.getElementById(`cell${e}`).innerText=`${a}:00`,a+=1}()}};document.body.onload=()=>{var t,n;t="/calendar",n=e,window.history.pushState({},t,window.location.origin+t),n[t]()}})();
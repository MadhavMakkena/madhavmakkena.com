(()=>{var h=0,i=0;function m(c,s){return Math.floor(Math.random()*(s-c)+c)}(function(){function c(t,o){let n=document.querySelector(`#photo-${o} .active`);console.log(n),n.classList.remove("active"),setTimeout(()=>{document.getElementById(`pet-${t}-${o}`).classList.add("active")},m(.5,1)*1e3)}function s(t){console.log(t),c(m(0,h-1),t)}fetch("/photos.txt").then(t=>t.text()).then(t=>{let o=t.split(`
`);o.pop(),h=o.length;let n=document.getElementsByClassName("photos-container");i=n.length,o.forEach((e,r)=>{for(let l=0;l<i;l++){let a=document.createElement("img");a.src=`/photos/${e}`,a.id=`pet-${r}-${l}`,r===0&&(a.className="active"),n[l].appendChild(a)}});for(let e=0;e<i;e++)s(e),setInterval(()=>s(e),m(2e3,1e4))})})();})();
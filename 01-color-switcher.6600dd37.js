!function(){var t=document.querySelector("body"),n={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};n.stopBtn.disabled=!0,console.log(n);var e=null;n.startBtn.addEventListener("click",(function(o){e=setInterval((function(){t.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),500),n.startBtn.disabled=!0,n.stopBtn.disabled=!1})),n.stopBtn.addEventListener("click",(function(t){clearInterval(e),n.stopBtn.disabled=!0,n.startBtn.disabled=!1})),console.log(n)}();
//# sourceMappingURL=01-color-switcher.6600dd37.js.map

!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");document.querySelectorAll('[type="button"]').forEach((function(t){t.style="margin: 10px; padding: 12px 24px; border-radius: 12px; font-size: 20px"}));var n=null;e.disabled=!0,t.addEventListener("click",(function(t){t.target.disabled=!0,e.disabled=!1,n=setInterval((function(){a.style="background-color: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3)})),e.addEventListener("click",(function(e){e.target.disabled=!0,t.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.b48889ea.js.map

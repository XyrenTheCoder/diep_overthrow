// ==UserScript==
// @name         Background Overwrite
// @namespace    http://tampermonkey.net/
// @version      2025-03-27
// @description  Overthrow
// @author       anuryx. (Xyren/ A-76)
// @match        https://diep.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diep.io
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    setTimeout( () => {
        const nodeList= document.querySelectorAll("img");
        nodeList[2].src = "https://cdn.discordapp.com/attachments/1354692423686557773/1354692424592523284/IMG_6089.png?ex=67e63722&is=67e4e5a2&hm=369b3d519c402be1f161a496ff3417d97c4ed88d5695e3f812b8409144b0ba4e&";
        document.getElementById("backdrop-asset").src = "https://cdn.discordapp.com/attachments/1354692423686557773/1354692424592523284/IMG_6089.png?ex=67e63722&is=67e4e5a2&hm=369b3d519c402be1f161a496ff3417d97c4ed88d5695e3f812b8409144b0ba4e&";
    }, 2000);

});

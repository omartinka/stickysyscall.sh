// ==UserScript==
// @name         stickysyscall.sh
// @namespace    oma/stickysyscall
// @version      2024-05-20
// @description  make syscall.sh topbar sticky
// @author       You
// @match        *://*.syscall.sh
// @icon         https://i.imgur.com/PYpkDba.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let style = document.createElement('style');
    style.type = 'text/css'
    style.innerHTML = `
    thead {
        position: sticky;
        top: -1px;
        background: rgb(29, 33, 44);
    }`;
    document.head.appendChild(style);

})();

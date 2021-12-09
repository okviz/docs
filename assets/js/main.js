/*!
 * OKVIZ Documentation
 * Copyright (c) OKVIZ corp. - All rights reserved.
 * https://docs.okviz.com
*/

// Navigation
let treeToggleEls = document.querySelectorAll(".tree-toggle");
treeToggleEls.forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        let parent = e.currentTarget.parentNode;
        if (parent.classList.contains("expanded")) 
            parent.classList.remove("expanded");
        else
            parent.classList.add("expanded");
    });
});

// Search (requires Fuse.js)
let minSearchLen = 3;
let maxPreviewLen = 140;
let lastTerm = "";
let searchEl = document.querySelector(".search input");
searchEl.addEventListener("change", e => {
    search(e.currentTarget.value);
});
searchEl.addEventListener("keyup", e => {
    search(e.currentTarget.value);
});
searchEl.addEventListener("click", e => {
    search(e.currentTarget.value);
});

function toggleResults(toggle, html = false) {
    let resultsEl = document.querySelector(".search-results");
    let catcherEl = document.querySelector(".search-catcher");
    if (html !== false)
        resultsEl.innerHTML = html;

    if (toggle) {
        
        resultsEl.classList.remove("hidden");
        if (!catcherEl) {
            catcherEl = document.createElement("div");
            catcherEl.classList.add("search-catcher");
            document.body.append(catcherEl);

            catcherEl.addEventListener("click", e => {
                e.preventDefault();
                toggleResults(false);
            });
        }
    } else {
        resultsEl.classList.add("hidden");
        
        if (catcherEl) catcherEl.remove();
    }
}

function search(term) {

    if (term.length >= minSearchLen) {
        if (term != lastTerm) {
            let fuse = new Fuse(searchIndex, {
                includeMatches: true,
                minMatchCharLength: term.length,
                threshold: 0,
                //location: 0,
                //distance: 5000,
                ignoreLocation: true,
                keys: [
                    "title", 
                    "content"
                ]
            });

            let html = "<ul>";
            let results = fuse.search(term);
            if (results.length) {
                results.forEach(result => {
                    let h = highlight(result);
                    html += `
                        <li>
                            <a href="${result.item.url}" class="unseen"><div class="title">${result.item.title}</div>${h}</a>
                            
                        </li>
                    `;
                });

            } else {
                html += `<li class="no-results">No results. Try another keyword.</li>`;
            }
            html += "</ul>";

            toggleResults(true, html);
            lastTerm = term;

        } else {
            toggleResults(true);
        }
    } else {
        toggleResults(false);
    }
}

function highlight(resultItem){

    let result = "";
    for (let i = 0; i < resultItem.matches.length; i++) {
        let matchItem = resultItem.matches[i];
        if (matchItem.key == "content") {
            let text = resultItem.item[matchItem.key];
            
            let matches = [].concat(matchItem.indices);
            let pair = matches.shift();
            let begin = pair[0];
            if (begin <= maxPreviewLen) {
                begin = 0;
            } else {
                for (let ii = begin - Math.ceil(maxPreviewLen / 3); ii < begin; ii++) {
                    let char = text.charAt(ii);
                    if (char == " ") {
                        result += "&hellip;";
                        begin = ii;
                        break;
                    }
                }
            }

            for (let ii = begin; ii < text.length; ii++) {
                let char = text.charAt(ii);
                if (pair && ii == pair[0]) {
                    result += "<b>";
                }
                result += char;
                if (pair && ii == pair[1]) {
                    result += "</b>";
                    pair = matches.shift();
                }
                if (result.length >= maxPreviewLen && (char == "." || char == " " || char == ";")) {
                    if (char == " ") result += "&hellip;";
                    break;
                }
            }
            break;
        }
    }
    return result;
}
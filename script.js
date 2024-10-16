// JavaScript function to toggle the collapsible sections and dropdowns
function toggleCollapse(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// Generate Table of Contents dynamically
function generateTOC() {
    const tocList = document.getElementById('toc-list');
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const heading = section.querySelector('.heading').innerText;
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#section-${heading.toLowerCase().replace(/ /g, '-')}`;
        a.innerText = heading;
        li.appendChild(a);
        tocList.appendChild(li);
    });
}

// Call TOC generation on page load
window.onload = generateTOC;

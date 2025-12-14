function loadComponent(selector, file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.querySelector(selector).innerHTML = html;
        })
        .catch(err => console.error(err));
}

loadComponent("nav", "nav.html");
loadComponent("footer", "footer.html");
function search_repo() {
    let input = document.getElementById('searcher-repo').value
    input = input.toLowerCase();
    let x = document.querySelectorAll('.projects-list-item');
    for (i = 0; i < x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "flex";
        }
    }
}
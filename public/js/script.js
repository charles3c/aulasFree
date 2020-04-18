const links = document.querySelectorAll('.link'),
        pageId = document.querySelector('section').getAttribute('id')

for (let link of links) {

    if (link.classList.contains(pageId)) {
        link.classList.add('active')
    }

}

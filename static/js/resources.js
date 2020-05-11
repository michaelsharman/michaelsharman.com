var downloadLinks = document.getElementsByClassName('download');
for (var i = 0; i < downloadLinks.length; i++) {
    downloadLinks[i].addEventListener('click', download);
}

function download (el) {
    try {
        var ahref = el.srcElement.href;
        var label = ahref.substring(ahref.lastIndexOf('/') + 1);
    } catch (e) {
        label = 'error';
    }
    ga('send', {
        hitType: 'event',
        eventCategory: 'resources',
        eventAction: 'download',
        eventLabel: label
    });
}

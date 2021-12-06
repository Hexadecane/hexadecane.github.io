let footerTextLeft = document.getElementById('footerTextLeft');
footerTextLeft.innerHTML = '<h5>&copy; Hxdce</h5>';

let footerTextRight = document.getElementById('footerTextRight');
let year = new Date().getFullYear();
footerTextRight.innerHTML = '<h5>' + year + '</h5>';
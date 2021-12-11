let footerTextLeft = document.getElementById('footerTextLeft');
footerTextLeft.innerHTML = '<p>&copy; Hxdce</p>';

let footerTextRight = document.getElementById('footerTextRight');
let year = new Date().getFullYear();
footerTextRight.innerHTML = '<p>' + year + '</p>';
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.product').forEach(product => {
    const name = product.querySelector('h3').textContent;
    const price = product.querySelector('.price').textContent;
    const description = product.querySelector('p:not(.price)').textContent;
    const imageUrl = product.querySelector('img').src;
    const buyLink = product.querySelector('.buy-now');

    // Update the WhatsApp link with product details and image URL
    const message = `I'm interested in purchasing:
    
    *${name}*
    Price: ${price}
    Description: ${description}
    
    Check the product image here: ${imageUrl}`;
    
    buyLink.href = `https://wa.me/270818097878?text=${encodeURIComponent(message)}`;
});
// Get the modal element
var modal = document.getElementById('modal');

// Get the link that opens the modal
var ptyLtdLink = document.getElementById('pty-ltd-link');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('close-btn')[0];

// When the user clicks on the link, open the modal
ptyLtdLink.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

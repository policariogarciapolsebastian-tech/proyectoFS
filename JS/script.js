document.addEventListener('DOMContentLoaded', function() {
    
    // --- CARRITO ---
    var cartBtn = document.querySelector('.cart-btn');
    var cartCount = 0;
    
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            cartCount++;
            cartBtn.innerHTML = 'Carrito (' + cartCount + ') <span class="dots">...</span>';
        });
    }
    
    // --- BÚSQUEDA ---
    var searchBox = document.querySelector('.search-box');
    
    if (searchBox) {
        searchBox.addEventListener('focus', function() {
            searchBox.style.borderColor = '#3b82f6';
        });
        searchBox.addEventListener('blur', function() {
            searchBox.style.borderColor = '#374151';
        });
    }
    
    // --- CUENTA REGRESIVA ---
    var totalSeconds = (8 * 3600) + (32 * 60) + 4;
    
    var hoursEl = document.getElementById('hours');
    var minutesEl = document.getElementById('minutes');
    var secondsEl = document.getElementById('seconds');
    
    function updateCountdown() {
        if (totalSeconds <= 0) {
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
            return;
        }
        
        totalSeconds--;
        
        var hours = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds % 3600) / 60);
        var seconds = totalSeconds % 60;
        
        // Agrega el 0 adelante si es menor a 10
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    }
    
    // Ejecutar cada 1 segundo
    setInterval(updateCountdown, 1000);
});

var cards = document.querySelectorAll('.laptop-card');
var grid = document.getElementById('catalog-grid');

function filterLaptops(category, btn) {
    // Cambiar botón activo
    document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    // Filtrar tarjetas
    cards.forEach(function(card) {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            if (card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}
//MARCAS DE LATOPS
function sortLaptops(order, btn) {
    // Cambiar botón activo
    document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    // Convertir NodeList a Array
    var cardsArray = Array.from(cards);
    
    // Filtrar solo las visibles (o todas si quieres ordenar todas)
    var visibleCards = cardsArray.filter(function(c) {
        return !c.classList.contains('hidden');
    });

    // Ordenar por precio
    visibleCards.sort(function(a, b) {
        var priceA = parseInt(a.getAttribute('data-price'));
        var priceB = parseInt(b.getAttribute('data-price'));
        if (order === 'asc') {
            return priceA - priceB; // Menor a mayor
        } else {
            return priceB - priceA; // Mayor a menor
        }
    });

    // Reordenar en el DOM
    visibleCards.forEach(function(card) {
        grid.appendChild(card);
    });
}
//LAPTOPS PARA TRABAJO, ESTUDIO.ETC
var cards = document.querySelectorAll('.laptop-card');
var grid = document.getElementById('catalog-grid');

function filterLaptops(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    cards.forEach(function(card) {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            if (card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

function sortLaptops(order, btn) {
    document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    var cardsArray = Array.from(cards);
    var visibleCards = cardsArray.filter(function(c) {
        return !c.classList.contains('hidden');
    });

    visibleCards.sort(function(a, b) {
        var priceA = parseInt(a.getAttribute('data-price'));
        var priceB = parseInt(b.getAttribute('data-price'));
        if (order === 'asc') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    visibleCards.forEach(function(card) {
        grid.appendChild(card);
    });
}

function openModal(name, price, image) {
    document.getElementById('modal-overlay').classList.add('active');
    document.getElementById('modal-buy').classList.add('active');
    document.getElementById('modal-title').textContent = name;
    document.getElementById('modal-price').textContent = '$' + price.toLocaleString();
    document.getElementById('modal-img').src = image;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.getElementById('modal-buy').classList.remove('active');
}

function confirmBuy() {
    alert('¡Pedido confirmado! Te contactaremos pronto.');
    closeModal();
}
//PARA OFERTAS DEL PRINCIPIO DE LA PAG
function openOffers() {
    document.getElementById('offers-overlay').classList.add('active');
    document.getElementById('modal-offers').classList.add('active');
}

function closeOffers() {
    document.getElementById('offers-overlay').classList.remove('active');
    document.getElementById('modal-offers').classList.remove('active');
}




/* ===== BÚSQUEDA EN TIEMPO REAL ===== */
var laptopsData = [
    { name: 'ThinkPad X1 Carbon Gen 11', price: 10687, category: 'Trabajo', brand: 'Lenovo', img: '/IMG/ThinkPad_X1_Carbon_Gen.png' },
    { name: 'Legion 5 Pro Gen 8', price: 9653, category: 'Gaming', brand: 'Lenovo', img: '/IMG/Legion%205%20Pro%20Gen%208.png' },
    { name: 'IdeaPad Slim 5 Gen 8', price: 4487, category: 'Estudio', brand: 'Lenovo', img: '/IMG/IdeaPad%20Slim%205%20Gen%208.png' },
    { name: 'IdeaPad Gaming 3 Gen 7', price: 5519, category: 'Gaming', brand: 'Lenovo', img: '/IMG/IdeaPad%20Gaming%203%20Gen%207.png' },
    { name: 'ThinkPad E14 Gen 5', price: 6203, category: 'Trabajo', brand: 'Lenovo', img: '/IMG/ThinkPad%20E14%20Gen%205.png' },
    { name: 'ThinkPad P1 Gen 6', price: 15527, category: 'Diseño', brand: 'Lenovo', img: '/IMG/ThinkPad%20P1%20Gen%206.png' },
    { name: 'Legion 7i Gen 8', price: 13127, category: 'Gaming', brand: 'Lenovo', img: '/IMG/Legion%207i%20Gen%208.png' },
    { name: 'Yoga 7 Gen 8', price: 8279, category: 'Estudio', brand: 'Lenovo', img: '/IMG/Yoga%207%20Gen%208.png' },
    { name: 'HP Pavilion 15-eg3000', price: 5100, category: 'Estudio', brand: 'HP', img: '/IMG/HP%20Pavillion%2015-eg3000.png' },
    { name: 'HP Omen 16-wd0000', price: 8900, category: 'Gaming', brand: 'HP', img: '/IMG/HP%20Omen%2016-wd0000.png' },
    { name: 'HP Victus 15-fb2000', price: 4800, category: 'Gaming', brand: 'HP', img: '/IMG/HP%20Victus%2015-fb2000.png' },
    { name: 'HP Envy 17-da0000', price: 8200, category: 'Trabajo', brand: 'HP', img: '/IMG/HP%20Envy%2017-da0000.png' },
    { name: 'HP Pavilion x360 14-ek1000', price: 4450, category: 'Estudio', brand: 'HP', img: '/IMG/HP%Pavilion%15-eg3000.png' },
    { name: 'HP Omen Transcend 14-fb0000', price: 11500, category: 'Gaming', brand: 'HP', img: '/IMG/HP%20Omen%20Transcend%2014-fb0000.png' },
    { name: 'Dell XPS 13 Plus 9320', price: 9600, category: 'Trabajo', brand: 'Dell', img: '/IMG/Dell%20XPS%2013%20Plus%209320.png' },
    { name: 'Dell Alienware m16 R2', price: 17000, category: 'Gaming', brand: 'Dell', img: '/IMG/Dell%20Alienware%20m16%20R2.png' },
    { name: 'Dell Inspiron 15 3535', price: 3950, category: 'Estudio', brand: 'Dell', img: '/IMG/Dell%20Inspiron%2015%203535.png' },
    { name: 'Dell Latitude 7430', price: 8500, category: 'Trabajo', brand: 'Dell', img: '/IMG/Dell%20Latitude%207430.png' },
    { name: 'Dell G15 5530', price: 6100, category: 'Gaming', brand: 'Dell', img: '/IMG/Dell%20G15%205530.png' },
    { name: 'Dell XPS 15 9530', price: 12500, category: 'Diseño', brand: 'Dell', img: '/IMG/Dell%20XPS%2015%209530.png' },
    { name: 'Dell Inspiron 16 Plus 7630', price: 6800, category: 'Estudio', brand: 'Dell', img: '/IMG/Dell%20Inspiron%2016%20Plus%207630.png' },
    { name: 'Asus ROG Zephyrus G14 2024', price: 11000, category: 'Gaming', brand: 'Asus', img: '/IMG/Asus%20ROG%20Zephyrus%20G14%202024.png' },
    { name: 'Asus ZenBook 14 UX3405', price: 7500, category: 'Trabajo', brand: 'Asus', img: '/IMG/Asus%20ZenBook%2014%20UX3405.png' },
    { name: 'Asus VivoBook 15 X1504', price: 3700, category: 'Estudio', brand: 'Asus', img: '/IMG/Asus%20VivoBook%2015%20X1504.png' },
    { name: 'Asus TUF Gaming A15 2024', price: 5400, category: 'Gaming', brand: 'Asus', img: '/IMG/Asus%20TUF%20Gaming%20A15%202024.png' },
    { name: 'Asus ROG Strix Scar 16 2024', price: 8700, category: 'Gaming', brand: 'Asus', img: '/IMG/Asus%20ROG%20Strix%20Scar%2016%202024.png' },
    { name: 'Asus ProArt Studiobook 16 OLED', price: 15100, category: 'Diseño', brand: 'Asus', img: '/IMG/Asus%20ProArt%20Studiobook%2016%20OLED.png' },
    { name: 'Asus ZenBook Duo 14 UX8406', price: 11600, category: 'Diseño', brand: 'Asus', img: '/IMG/Asus%20ZenBook%20Duo%2014%20UX8406.png' },
    { name: 'Asus VivoBook Pro 16 K6604', price: 6100, category: 'Estudio', brand: 'Asus', img: '/IMG/Asus%20VivoBook%20Pro%2016%20K6604.png' },
    { name: 'MacBook Air 13" M3', price: 7500, category: 'Estudio', brand: 'Apple', img: '/IMG/MacBook%20Air%2013%20M3.png' },
    { name: 'MacBook Air 15" M3', price: 8900, category: 'Estudio', brand: 'Apple', img: '/IMG/MacBook%20Air%2015%20M3.png' },
    { name: 'MacBook Pro 14" M3', price: 11000, category: 'Diseño', brand: 'Apple', img: '/IMG/MacBook%20Pro%2014%20M3.png' },
    { name: 'MacBook Pro 14" M3 Pro', price: 13700, category: 'Diseño', brand: 'Apple', img: '/IMG/MacBook%20Pro%2014%20M3%20Pro.png' },
    { name: 'MacBook Pro 16" M3 Max', price: 23000, category: 'Diseño', brand: 'Apple', img: '/IMG/MacBook%20Pro%2016%20M3%20Max.png' }
];

function searchLaptops() {
    var input = document.getElementById('live-search');
    var resultsDiv = document.getElementById('search-results');
    var query = input.value.toLowerCase().trim();
    
    if (query.length === 0) {
        resultsDiv.classList.remove('active');
        return;
    }
    
    var filtered = laptopsData.filter(function(laptop) {
        return laptop.name.toLowerCase().includes(query) ||laptop.brand.toLowerCase().includes(query) ||laptop.category.toLowerCase().includes(query) ||laptop.price.toString().includes(query);
    });
    
    var html = '';
    
    if (filtered.length === 0) {
        html = '<div class="no-results">No se encontraron resultados</div>';
    } else {
        filtered.forEach(function(laptop) {
            html += '<div class="search-item" onclick="alert(\'Redirigiendo a: ' + laptop.name + '\')">' +
                '<img src="' + laptop.img + '" alt="' + laptop.name + '">' +
                '<div class="search-item-info">' +
                    '<h4>' + laptop.name + '</h4>' +
                    '<p>Bs ' + laptop.price.toLocaleString() + '</p>' +
                    '<span>' + laptop.brand + ' · ' + laptop.category + '</span>' +
                '</div>' +
            '</div>';
        });
    }
    
    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('active');
}

// Cerrar resultados al hacer clic fuera
document.addEventListener('click', function(e) {
    var searchWrapper = document.querySelector('.search-wrapper');
    var resultsDiv = document.getElementById('search-results');
    
    if (searchWrapper && !searchWrapper.contains(e.target)) {
        resultsDiv.classList.remove('active');
    }
});
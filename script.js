// JavaScript untuk Fungsionalitas
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Es Kopi Susu', price: 10000, quantity: 0 },
        { id: 2, name: 'Es Teh Leci', price: 10000, quantity: 0 },
        { id: 3, name: 'Jus Alpukat', price: 10000, quantity: 0 }
    ];

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productId = parseInt(card.dataset.id);
        const plusBtn = card.querySelector('.btn-plus');
        const minusBtn = card.querySelector('.btn-minus');
        const quantitySpan = card.querySelector('.quantity');

        plusBtn.addEventListener('click', () => {
            const product = products.find(p => p.id === productId);
            product.quantity++;
            updateUI();
        });

        minusBtn.addEventListener('click', () => {
            const product = products.find(p => p.id === productId);
            if (product.quantity > 0) {
                product.quantity--;
                updateUI();
            }
        });
    });

    function updateUI() {
        let totalItems = 0;
        let totalPrice = 0;

        products.forEach(product => {
            // Update tampilan kuantitas di setiap kartu produk
            const card = document.querySelector(`.product-card[data-id='${product.id}']`);
            if (card) {
                const quantitySpan = card.querySelector('.quantity');
                quantitySpan.textContent = product.quantity;
            }

            // Hitung total
            totalItems += product.quantity;
            totalPrice += product.quantity * product.price;
        });

        // Update ringkasan pesanan di bagian bawah
        document.getElementById('total-items').textContent = totalItems;
        document.getElementById('total-price').textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    }
    
    // Logika Tombol Pesan Sekarang
    const orderButton = document.getElementById('order-now');
    orderButton.addEventListener('click', () => {
        const customerName = document.getElementById('customer-name').value;
        if (!customerName) {
            alert('Mohon masukkan nama Anda.');
            return;
        }
        
        let orderDetails = '';
        let totalItems = 0;
        products.forEach(product => {
            if (product.quantity > 0) {
                orderDetails += `- ${product.name}: ${product.quantity}\n`;
                totalItems += product.quantity;
            }
        });

        if (totalItems === 0) {
            alert('Anda belum memilih produk.');
            return;
        }

        const totalPrice = totalItems * 10000;
        
        // --- GANTI NOMOR WHATSAPP DI SINI ---
        const sellerWhatsAppNumber = '6285655702694'; // Contoh: 6281234567890 (gunakan format internasional)

        const message = `
Halo, saya mau pesan:
${orderDetails}
*Total Pesanan: ${totalItems} item*
*Total Harga: Rp ${totalPrice.toLocaleString('id-ID')}*

Nama Pemesan: *${customerName}*

Terima kasih.
        `;
        
        // Meng-encode pesan agar sesuai format URL
        const encodedMessage = encodeURIComponent(message.trim());
        
        // Membuat link WhatsApp
        const whatsappURL = `https://api.whatsapp.com/send?phone=${sellerWhatsAppNumber}&text=${encodedMessage}`;
        
        // Membuka link di tab baru
        window.open(whatsappURL, '_blank');
    });
});

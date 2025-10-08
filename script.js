document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Jellicious Choco', price: 6000, quantity: 0 },
        { id: 2, name: 'SummerMix Tea', price: 6000, quantity: 0 },
        { id: 3, name: 'Sparkly Bliss', price: 6000, quantity: 0 }
    ];

    const productCards = document.querySelectorAll('.product-card');

    
    productCards.forEach(card => {
        const productId = parseInt(card.dataset.id);
        const plusBtn = card.querySelector('.btn-plus');
        const minusBtn = card.querySelector('.btn-minus');
        const quantitySpan = card.querySelector('.quantity');

        plusBtn.addEventListener('click', () => {
            const product = products.find(p => p.id === productId);
            
            
            if (product.quantity < 10) { 
                product.quantity++;
                updateUI();
            } else {
                alert(`Maksimal pesanan untuk ${product.name} adalah 10 item.`);
            }
            
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
           
            const card = document.querySelector(`.product-card[data-id='${product.id}']`);
            if (card) {
                const quantitySpan = card.querySelector('.quantity');
                quantitySpan.textContent = product.quantity;
            }

            
            totalItems += product.quantity;
            totalPrice += product.quantity * product.price;
        });

      
        document.getElementById('total-items').textContent = totalItems;
        document.getElementById('total-price').textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    }
    
    
    const orderButton = document.getElementById('order-now');
    orderButton.addEventListener('click', () => {
        const customerName = document.getElementById('customer-name').value;
        if (!customerName) {
            alert('Mohon masukkan nama_kelas_jurusan anda.');
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

        const totalPrice = totalItems * 6000;
        
        
        const sellerWhatsAppNumber = '6285655702694'; 
        const message = `
Halo, saya mau pesan:
${orderDetails}
*Total Pesanan: ${totalItems} item*
*Total Harga: Rp ${totalPrice.toLocaleString('id-ID')}*

Nama Pemesan: *${customerName}*

Terima kasih.
        `;
        
       
        const encodedMessage = encodeURIComponent(message.trim());
        
        
        const whatsappURL = `https://api.whatsapp.com/send?phone=${sellerWhatsAppNumber}&text=${encodedMessage}`;
        
        
        window.open(whatsappURL, '_blank');
    });
});


            

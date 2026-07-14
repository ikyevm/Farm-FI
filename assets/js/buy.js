// =========================================
// FARM-FI : BUY / CHECKOUT LOGIC
// =========================================

function calculateTotal() {
    const qty = document.getElementById('qty').value;
    const pricePerHead = 1500; // Misal harga 1 sapi = 1500 OPN
    const total = qty * pricePerHead;
    
    document.getElementById('totalPrice').innerText = total + " OPN";
}

function confirmPurchase(event) {
    event.preventDefault(); // Biar web nggak refresh otomatis
    alert("Menunggu konfirmasi MetaMask di jaringan OPN Testnet...\n\nMembeli aset Real World Asset (Livestock).");
}

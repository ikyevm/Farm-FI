// =========================================
// FARM-FI : INVEST & STAKING LOGIC
// =========================================

function stakeFund(event) {
    event.preventDefault();
    const amount = document.getElementById('stakeAmount').value;
    
    if(amount > 0) {
        alert("Berhasil! Anda melakukan Staking sebesar " + amount + " OPN.\n\nMenghasilkan estimasi yield 12% APY.");
    } else {
        alert("Masukkan jumlah OPN yang valid!");
    }
}

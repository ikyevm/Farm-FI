// =========================================
// FARM-FI : WEB3 WALLET CONNECTION (OPN TESTNET)
// =========================================

// Data Jaringan OPN Testnet (Chain ID 984 = 0x3d8 dalam Hex)
const opnTestnet = {
    chainId: '0x3d8', 
    chainName: 'OPN Testnet',
    nativeCurrency: {
        name: 'OPN',
        symbol: 'OPN',
        decimals: 18 // Standar koin EVM
    },
    rpcUrls: ['https://testnet.rpc.iopn.tech'] // Pakai RPC utama dari Abang
};

async function connectWallet() {
    const btn = document.getElementById('wallet-btn');

    // 1. Cek apakah user punya MetaMask / Dompet Web3
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Minta izin koneksi dompet
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];

            // 2. Cek apakah jaringannya udah OPN Testnet
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            
            if (chainId !== opnTestnet.chainId) {
                try {
                    // Kalau beda, minta MetaMask pindah ke OPN Testnet
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: opnTestnet.chainId }],
                    });
                } catch (switchError) {
                    // Kalau jaringan belum ada di MetaMask, tambahkan otomatis
                    if (switchError.code === 4902) {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [opnTestnet],
                        });
                    } else {
                        throw switchError;
                    }
                }
            }

            // 3. Ubah Tampilan Tombol kalau berhasil
            const shortAddress = account.substring(0, 5) + "..." + account.substring(account.length - 4);
            
            if (btn) {
                btn.innerText = shortAddress;
                btn.style.background = "#163022";
                btn.style.border = "1px solid #18a558";
            }
            
            alert("Berhasil terhubung ke OPN Testnet! 🚀");

        } catch (error) {
            console.error(error);
            alert("Koneksi dibatalkan atau terjadi kesalahan.");
        }
    } else {
        // Kalau nggak ada MetaMask
        alert("MetaMask tidak terdeteksi! Silakan install extension dompet Web3 terlebih dahulu.");
    }
}

    // Harga laminating
    const hargaLaminate = {
        'A2': 477000,
        'A6': 557000,
        'B2': 392000,
        'B6': 477000,
        'A': 362000,
        'B': 297000
    };
    
    // Pengurangan ukuran berdasarkan tipe kusen (lebar, tinggi)
    const penguranganKusen = {
        'DJD': { lebar: 4.5, tinggi: 2.5 },
        'DJE': { lebar: 7.1, tinggi: 3.8 },
        'DJA': { lebar: 4.5, tinggi: 2.5 },
        'DJC': { lebar: 7.5, tinggi: 4 },
        'DJF': { lebar: 8.1, tinggi: 4.3 },
        'DJG': { lebar: 8.5, tinggi: 4.5 }
    };
    

function getHargaKusen(frameType, lebarOpening, tinggiOpening) {
    // CONVERT KE NUMBER DULU
    console.log('DEBUG - lebarOpening:', lebarOpening, 'tipe:', typeof lebarOpening);
    console.log('DEBUG - tinggiOpening:', tinggiOpening, 'tipe:', typeof tinggiOpening);
    
    const lebar = Number(lebarOpening);
    const tinggi = Number(tinggiOpening);
    
    console.log('DEBUG - lebar (number):', lebar);
    console.log('DEBUG - tinggi (number):', tinggi);
    console.log('DEBUG - kondisi kecil:', lebar <= 90 && tinggi <= 220);
    console.log('DEBUG - kondisi besar:', lebar <= 90 && tinggi <= 260);
    console.log('DEBUG - kondisi sedang:', lebar <= 100 && tinggi <= 240);
    console.log('DEBUG - kondisi extrabesar:', lebar <= 100 && tinggi <= 280);

    
    if (lebar <= 90 && tinggi <= 220) {
        // Ukuran kecil
        const hargaKusenKecil = {
            'DJD': { harga: 331500, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJE': { harga: 400500, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJA': { harga: 666500, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJC': { harga: 426000, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJF': { harga: 447000, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJG': { harga: 534000, keterangan: 'Kusen 230 x1 + 310 x1' }
        };
        return hargaKusenKecil[frameType] || { harga: 0, keterangan: 'Tipe kusen tidak valid' };
    } else if (lebar <= 100 && tinggi <= 240) {
        // Ukuran sedang 
        const hargaKusenSedang = {
            'DJD': { harga: 369000, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJE': { harga: 447000, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJA': { harga: 749500, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJC': { harga: 476500, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJF': { harga: 497000, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJG': { harga: 596500, keterangan: 'Kusen 250 x1 + 350 x1' }
        };
        return hargaKusenSedang[frameType] || { harga: 0, keterangan: 'Tipe kusen tidak valid' };
    } else if (lebar <=90 && tinggi <=260) {
        // Ukuran besar
        const hargaKusenBesar = {
            'DJD': { harga: 369000, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJE': { harga: 447000, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJA': { harga: 749500, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJC': { harga: 476500, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJF': { harga: 497000, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJG': { harga: 596500, keterangan: 'Kusen 250 x1 + 350 x1' }
        };
        return hargaKusenBesar[frameType] || { harga: 0, keterangan: 'Tipe kusen tidak valid' };
    } else if (lebar <=100 && tinggi <=280 ) {
        // Ukuran extra besar
        const hargaKusenExtraBesar = {
            'DJD': { harga: 522000, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJE': { harga: 634000, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJA': { harga: 1052000, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJC': { harga: 670000, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJF': { harga: 703500, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJG': { harga: 840500, keterangan: 'Kusen 230 x1 + 310 x2' }
};
        return hargaKusenExtraBesar[frameType] || { harga: 0, keterangan: 'Tipe kusen tidak valid' };
    }
        // Ukuran extraaaaa
    return { harga: 0, keterangan: 'Ukuran opening tidak valid' };
}
    
    // Harga daun pintu berdasarkan tipe dan ukuran
    const hargaPintu = {
        'economy': {
            '60x190': 796000,
            '60x210': 893000,
            '72x210': 943500,
            '72x220': 1001000,
            '72x240': 1109000
        },
        'standard': {
            '60x190': 943500,
            '60x210': 1044000,
            '72x210': 1116000,
            '72x220': 1178000,
            '72x240': 1292000,
            '82x210': 1242000,
            '82x220': 1306500,
            '82x240': 1440000,
            '82x280': 1706500,
            '92x210': 1426000,
            '92x220': 1490500,
            '92x240': 1624000,
            '92x280': 1912000
        },
        'deluxe': {
            '82x210': 1508000,
            '82x220': 1580000,
            '82x240': 1714000,
            '82x280': 1980000,
            '92x210': 1807500,
            '92x220': 1872000,
            '92x240': 2005000,
            '92x280': 2304000
        }
    };
    
    // Daftar ukuran yang tersedia untuk setiap tipe pintu
    const ukuranTersedia = {
        'economy': [
            { lebar: 60, tinggi: 190 },
            { lebar: 60, tinggi: 210 },
            { lebar: 72, tinggi: 210 },
            { lebar: 72, tinggi: 220 },
            { lebar: 72, tinggi: 240 }
        ],
        'standard': [
            { lebar: 60, tinggi: 190 },
            { lebar: 60, tinggi: 210 },
            { lebar: 72, tinggi: 210 },
            { lebar: 72, tinggi: 220 },
            { lebar: 72, tinggi: 240 },
            { lebar: 82, tinggi: 210 },
            { lebar: 82, tinggi: 220 },
            { lebar: 82, tinggi: 240 },
            { lebar: 82, tinggi: 280 },
            { lebar: 92, tinggi: 210 },
            { lebar: 92, tinggi: 220 },
            { lebar: 92, tinggi: 240 },
            { lebar: 92, tinggi: 280 }
        ],
        'deluxe': [
            { lebar: 82, tinggi: 210 },
            { lebar: 82, tinggi: 220 },
            { lebar: 82, tinggi: 240 },
            { lebar: 82, tinggi: 280 },
            { lebar: 92, tinggi: 210 },
            { lebar: 92, tinggi: 220 },
            { lebar: 92, tinggi: 240 },
            { lebar: 92, tinggi: 280 }
        ]
    };
    
    // Fungsi untuk memformat angka sebagai Rupiah
    function formatRupiah(angka) {
        return new Intl.NumberFormat('id-ID', { 
            style: 'currency', 
            currency: 'IDR',
            minimumFractionDigits: 0 
        }).format(angka);
    }
    
    // Fungsi untuk mencari ukuran terdekat yang sesuai
    function cariUkuranTerdekat(tipe, lebar, tinggi) {
        const ukuranList = ukuranTersedia[tipe];
        let ukuranTerdekat = null;
        
        // Cari ukuran yang sesuai dengan lebar dan tinggi
        for (const ukuran of ukuranList) {
            // Jika ukuran sesuai, langsung kembalikan
            if (ukuran.lebar >= lebar && ukuran.tinggi >= tinggi) {
                return `${ukuran.lebar}x${ukuran.tinggi}`;
            }
            
            // Simpan ukuran terdekat jika belum ada yang sesuai
            if (!ukuranTerdekat) {
                ukuranTerdekat = `${ukuran.lebar}x${ukuran.tinggi}`;
            }
        }
        
        // Jika tidak ada yang sesuai, kembalikan ukuran terbesar
        return ukuranTerdekat || null;
    }
    
    // Fungsi untuk memvalidasi ukuran opening berdasarkan tipe pintu
    function validasiUkuranOpening(tipe, lebarOpening, tinggiOpening) {
        const frameType = document.getElementById('frameType').value;
        if (frameType === 'none') {
            return { valid: true };
        }
        
        const pengurangan = penguranganKusen[frameType];
        const lebarDaun = lebarOpening - pengurangan.lebar;
        const tinggiDaun = tinggiOpening - pengurangan.tinggi;
        
        // Validasi untuk tipe economy
        if (tipe === 'economy') {
            if (lebarDaun > 72 || tinggiDaun > 240) {
                return {
                    valid: false,
                    message: `Tipe Economy Ukuran Daun Max 72x240 cm.<br>Ganti Tipe Standard Atau Deluxe.<br>Ukuran Daun ${lebarDaun.toFixed(1)}x${tinggiDaun.toFixed(1)} cm.`
                };
            }
        }

        if (tipe === 'standard') {
            if (lebarDaun > 92) {
                return {
                    valid: false,
                    message: `<br>TERLALU LEBAR!!!<br>GANTI KE KUSEN "DJF"<br>Ukuran Daun ${lebarDaun.toFixed(1)}x${tinggiDaun.toFixed(1)} cm.`
                };
            }
        }

        if (tipe === 'deluxe') {
            if (lebarDaun >92) {
                return {
                    valid: false,
                    message: `<br>TERLALU LEBAR!!!<br>GANTI KE KUSEN "DJF"<br>Ukuran Daun ${lebarDaun.toFixed(1)}x${tinggiDaun.toFixed(1)} cm.`
                };
            }
        }
        
        return { valid: true };
    }
    
    // Fungsi untuk menghitung harga
    function hitungHarga() {
        // Sembunyikan pesan error dan hasil sebelumnya
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        document.getElementById('totalWithoutKusen').style.display = 'none';
        
        // Ambil nilai dari input
        const doorType = document.getElementById('doorType').value;
        const width = parseFloat(document.getElementById('width').value) || 0;
        const height = parseFloat(document.getElementById('height').value) || 0;
        const frameType = document.getElementById('frameType').value;
        
        // Validasi input dasar
        if (width <= 0 || height <= 0) {
            document.getElementById('errorMessage').innerHTML = 'Masukkan ukuran yang valid!';
            document.getElementById('errorMessage').style.display = 'block';
            return;
        }
        
        // Validasi ukuran opening berdasarkan tipe pintu
        const validasi = validasiUkuranOpening(doorType, width, height);
        if (!validasi.valid) {
            document.getElementById('errorMessage').innerHTML = validasi.message;
            document.getElementById('errorMessage').style.display = 'block';
            return;
        }
        
        // Lanjutkan dengan perhitungan jika validasi berhasil
        const doorLaminate = document.getElementById('doorLaminate').value;
        const frameLaminate = document.getElementById('frameLaminate').value;
        
        // Hitung ukuran daun pintu setelah dikurangi kusen
        let lebarDaun = width;
        let tinggiDaun = height;
        
        if (frameType !== 'none') {
            const pengurangan = penguranganKusen[frameType];
            lebarDaun = width - pengurangan.lebar;
            tinggiDaun = height - pengurangan.tinggi;
            
            // Tampilkan informasi perhitungan
            document.getElementById('calculationInfo').innerHTML = `
                <strong><center> ( CEK ULANG SAYA BUKAN NABI BOY) </strong></center><br>
                <strong>Perhitungan Ukuran Daun Pintu :</strong><br>
                Lebar Opening : ${width} cm - ${pengurangan.lebar} cm = <strong>${lebarDaun.toFixed(1)} cm</strong><br>
                Tinggi Opening : ${height} cm - ${pengurangan.tinggi} cm = <strong>${tinggiDaun.toFixed(1)} cm</strong><br>
                DAUN PINTU DI POTONG JADI = <strong>${lebarDaun.toFixed(1)} x ${tinggiDaun.toFixed(1)}</strong>
            `;
            document.getElementById('calculationInfo').style.display = 'block';
        } else {
            document.getElementById('calculationInfo').innerHTML = `
                <strong>Perhitungan Ukuran Daun Pintu:</strong><br>
                Tidak menggunakan kusen, menggunakan ukuran opening langsung<br>
                Lebar: <strong>${lebarDaun.toFixed(1)} cm</strong>, Tinggi: <strong>${tinggiDaun.toFixed(1)} cm</strong>
            `;
            document.getElementById('calculationInfo').style.display = 'block';
        }
        
        // Cari ukuran terdekat yang sesuai
        const ukuranTerdekat = cariUkuranTerdekat(doorType, lebarDaun, tinggiDaun);
        
        if (!ukuranTerdekat) {
            document.getElementById('errorMessage').innerHTML = 'Ukuran pintu tidak tersedia untuk tipe ini!';
            document.getElementById('errorMessage').style.display = 'block';
            return;
        }
        
        // Tampilkan pesan jika menggunakan ukuran terdekat
        const [lebarTerdekat, tinggiTerdekat] = ukuranTerdekat.split('x').map(Number);
        document.getElementById('infoMessage').textContent = `PAKE DAUN PINTU : ${lebarTerdekat} x ${tinggiTerdekat} cm`;
        document.getElementById('infoMessage').style.display = 'block';
        
        // Hitung harga daun pintu
        const hargaDaunPintu = hargaPintu[doorType][ukuranTerdekat];
        const labelDaunPintu = `Daun Pintu ${lebarTerdekat} x ${tinggiTerdekat}`;
        
        // Ongkos potong
        const ongkosPotong = 45000;
        
        // Hitung harga kusen
        let hargaKusenValue = 0;
        let keteranganKusen = '';
        if (frameType !== 'none') {
            const kusenInfo = getHargaKusen(frameType, width, height);
            hargaKusenValue = kusenInfo.harga;
            keteranganKusen = kusenInfo.keterangan;
        }
        
        // Hitung harga laminating daun pintu
        let hargaLamDaun = 0;
        let labelLamDaun = 'Laminating Daun Pintu: ';
        
        if (doorLaminate !== 'none') {
            hargaLamDaun = hargaLaminate[doorLaminate];
            const sisi = doorLaminate.includes('2') ? '2 Sisi' : '6 Sisi';
            const warna = doorLaminate.includes('A') ? 'A' : 'B';
            
            // JIKA PINTU >240 MAKA LAMINATE KUSEN + SEKIAN


            // JIKA PINTU >240 MAKA LAMINATE X2
            const tinggiDaun = parseFloat(document.getElementById('height').value);
            if (tinggiDaun > 240 ) {
                hargaLamDaun = Math.round(hargaLamDaun * 2);
                labelLamDaun = `Laminating Daun Pintu (${warna}) ${sisi} - ( >240 * 2 ) `;
            } else {
                labelLamDaun = `Laminating Daun Pintu (${warna}) ${sisi} `;
            }
          
        }
        
        // Hitung harga laminating kusen
        let hargaLamKusen = 0;
        let labelLamKusen = 'Laminating Kusen ';
        
        if (frameLaminate !== 'none' && frameType !== 'none') {
            if (height > 260) {
                const hargaKhusus = {
                    'A':543000,
                    'B':445500
                };
                hargaLamKusen = hargaKhusus[frameLaminate];
                labelLamKusen = `Laminating Kusen (${frameLaminate}) - (3 PCS)` ;
            } else {
                hargaLamKusen = hargaLaminate[frameLaminate];
                labelLamKusen = `Laminating Kusen (${frameLaminate})`;
            }

        }
        
        // Hitung total tanpa kusen
        const totalWithoutKusen = hargaDaunPintu + ongkosPotong ;
        
        // Hitung total unfinished
        const totalUnfinished = totalWithoutKusen + hargaKusenValue;
        
        // Hitung total finished Daun Pintu
        const totalFinishedWithoutKusen = totalWithoutKusen + hargaLamDaun;

        // Hitung total finished Daun Pintu + Kusen
        const totalFinished = totalUnfinished + hargaLamKusen + hargaLamDaun;

        
        // Tampilkan hasil
        document.getElementById('labelDoorType').textContent = 'Tipe Pintu :';
        document.getElementById('doorTypeName').textContent = document.getElementById('doorType').options[document.getElementById('doorType').selectedIndex].text;
        
        document.getElementById('labelDaunPintu').textContent = labelDaunPintu + ' :';
        document.getElementById('hargaDaunPintu').textContent = formatRupiah(hargaDaunPintu);
        document.getElementById('ongkosPotong').textContent = formatRupiah(ongkosPotong);
        
        if (frameType !== 'none') {
            document.getElementById('labelFrameType').textContent = 'Tipe Kusen :';
            document.getElementById('frameTypeName').textContent = `${frameType} (${keteranganKusen})`;
            
            document.getElementById('labelKusen').textContent = 'Kusen :';
            document.getElementById('hargaKusen').textContent = formatRupiah(hargaKusenValue);
        } else {
            document.getElementById('labelFrameType').textContent = 'Kusen :';
            document.getElementById('frameTypeName').textContent = 'Tidak Ada';
            
            document.getElementById('labelKusen').textContent = '';
            document.getElementById('hargaKusen').textContent = '';
        }
        
        document.getElementById('totalUnfinished').textContent = formatRupiah(totalUnfinished);
        
        document.getElementById('labelLamDaun').textContent = labelLamDaun + ':';
        document.getElementById('hargaLamDaun').textContent = formatRupiah(hargaLamDaun);
        
        if (frameType !== 'none') {
            document.getElementById('labelLamKusen').textContent = labelLamKusen + ':';
            document.getElementById('hargaLamKusen').textContent = formatRupiah(hargaLamKusen);
        } else {
            document.getElementById('labelLamKusen').textContent = '';
            document.getElementById('hargaLamKusen').textContent = '';
        }
        
        // Tampilkan Total Tanpa Kusen
        document.getElementById('totalWithoutKusen').textContent = formatRupiah(totalWithoutKusen);
        document.getElementById('totalWithoutKusen').style.display = 'flex';
        
        document.getElementById('totalFinished').textContent = formatRupiah(totalFinished);
        document.getElementById('totalFinishedWithoutKusen').textContent = formatRupiah(totalFinishedWithoutKusen);
        
        // Tampilkan hasil
        document.getElementById('result').style.display = 'block';
    }
    
    // Tambahkan event listener untuk tombol enter
    document.addEventListener('DOMContentLoaded', function() {
        const inputs = [
            document.getElementById('doorType'),
            document.getElementById('width'),
            document.getElementById('height'),
            document.getElementById('frameType'),
            document.getElementById('doorLaminate'),
            document.getElementById('frameLaminate')
        ];
        
        inputs.forEach(input => {
            input.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    hitungHarga();
                }
            });
        });
    });

// SCRIPT SIDEBAR

 // Modern Sidebar Functions
let sidebarVisible = false;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const mainContent = document.getElementById('mainContent');
    
    sidebarVisible = !sidebarVisible;
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (window.innerWidth < 768) {
        mainContent.classList.toggle('active');
    }
}

function showSection(sectionName) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Activate current nav item
    document.querySelector(`.nav-link[href="#${sectionName}"]`).parentElement.classList.add('active');
    
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName + '-section').classList.add('active');
    
    // Close sidebar on mobile
    if (window.innerWidth < 768 && sidebarVisible) {
        toggleSidebar();
    }
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.floating-menu-btn');
    
    if (window.innerWidth < 768 && sidebarVisible && 
        !sidebar.contains(event.target) && 
        !menuBtn.contains(event.target)) {
        toggleSidebar();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (window.innerWidth >= 768) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        sidebarVisible = false;
    }
});

// Theme toggle function (tetap sama)
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupThemeToggle();
    // ... kode event listener existing lainnya ...
});
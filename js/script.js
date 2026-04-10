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
            'DJD': { harga: 348000, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJE': { harga: 422500, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJA': { harga: 700000, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJC': { harga: 448000, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJF': { harga: 469500, keterangan: 'Kusen 230 x1 + 310 x1' },
            'DJG': { harga: 561000, keterangan: 'Kusen 230 x1 + 310 x1' }
        };
        return hargaKusenKecil[frameType] || { harga: 0, keterangan: 'Tipe kusen tidak valid' };
    } else if (lebar <= 100 && tinggi <= 240) {
        // Ukuran sedang 
        const hargaKusenSedang = {
            'DJD': { harga: 388000, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJE': { harga: 469500, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJA': { harga: 787000, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJC': { harga: 500500, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJF': { harga: 522000, keterangan: 'Kusen 250 x1 + 350 x1' },
            'DJG': { harga: 626500, keterangan: 'Kusen 250 x1 + 350 x1' }
        };
        return hargaKusenSedang[frameType] || { harga: 0, keterangan: 'Tipe kusen tidak valid' };
    } else if (lebar <=90 && tinggi <=260) {
        // Ukuran besar
        const hargaKusenBesar = {
            'DJD': { harga: 426500, keterangan: 'Kusen 310 x1 + 350 x1' },
            'DJE': { harga: 517500, keterangan: 'Kusen 310 x1 + 350 x1' },
            'DJA': { harga: 866500, keterangan: 'Kusen 310 x1 + 350 x1' },
            'DJC': { harga: 548000, keterangan: 'Kusen 310 x1 + 350 x1' },
            'DJF': { harga: 574000, keterangan: 'Kusen 310 x1 + 350 x1' },
            'DJG': { harga: 687500, keterangan: 'Kusen 310 x1 + 350 x1' }
        };
        return hargaKusenBesar[frameType] || { harga: 0, keterangan: 'Tipe kusen tidak valid' };
    } else if (lebar <=100 && tinggi <=280 ) {
        // Ukuran extra besar
const hargaKusenExtraBesar = {
            'DJD': { harga: 548000, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJE': { harga: 666500, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJA': { harga: 1105000, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJC': { harga: 704500, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJF': { harga: 739000, keterangan: 'Kusen 230 x1 + 310 x2' },
            'DJG': { harga: 883000, keterangan: 'Kusen 230 x1 + 310 x2' }
        };
        return hargaKusenExtraBesar[frameType] || { harga: 0, keterangan: 'Tipe kusen tidak valid' };
    }
        // Ukuran extraaaaa
    return { harga: 0, keterangan: 'Ukuran opening tidak valid' };
}
    
 // Harga daun pintu berdasarkan tipe dan ukuran (Update April 2026)
    const hargaPintu = {
        'economy': {
            '60x190': 836000,
            '60x210': 938000,
            '72x210': 991000,
            '72x220': 1051000,
            '72x240': 1164500
        },
        'standard': {
            '60x190': 991000,
            '60x210': 1096500,
            '72x210': 1172000,
            '72x220': 1237000,
            '72x240': 1357000,
            '82x210': 1304500,
            '82x220': 1372000,
            '82x240': 1512000,
            '82x280': 1792000,
            '92x210': 1497500,
            '92x220': 1565000,
            '92x240': 1705500,
            '92x280': 2008000
        },
        'deluxe': {
            '82x210': 1583500,
            '82x220': 1659000,
            '82x240': 1800000,
            '82x280': 2079000,
            '92x210': 1898000,
            '92x220': 1966000,
            '92x240': 2105500,
            '92x280': 2419500
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
    
   function hitungHarga() {
    // 1. Reset tampilan awal
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('infoMessage').style.display = 'none';

    // 2. Ambil nilai Input
    const doorType = document.getElementById('doorType').value;
    const width = parseFloat(document.getElementById('width').value) || 0;
    const height = parseFloat(document.getElementById('height').value) || 0;
    const frameType = document.getElementById('frameType').value;
    const doorLaminate = document.getElementById('doorLaminate').value;
    const frameLaminate = document.getElementById('frameLaminate').value;
    
    // Input Add-ons & Diskon
    const addonVerstek = document.getElementById('addonVerstek');
    const addonAlumini = document.getElementById('addonAlumini');
    const discPersen = parseFloat(document.getElementById('discountPersen').value) || 0;
    const multiplier = (100 - discPersen) / 100;

    // 3. Validasi Ukuran
    if (width <= 0 || height <= 0) {
        document.getElementById('errorMessage').innerHTML = 'Masukkan ukuran yang valid!';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    const validasi = validasiUkuranOpening(doorType, width, height);
    if (!validasi.valid) {
        document.getElementById('errorMessage').innerHTML = validasi.message;
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    // 4. Hitung Ukuran Daun & Cari Ukuran Terdekat
    let lebarDaun = width;
    let tinggiDaun = height;
    let infoHTML = '';

    if (frameType !== 'none') {
        const pengurangan = penguranganKusen[frameType];
        lebarDaun = width - pengurangan.lebar;
        tinggiDaun = height - pengurangan.tinggi;
        infoHTML = `<strong><center>( CEK ULANG SAYA BUKAN NABI BOY )</center></strong><br>
                    Lebar Opening : ${width} - ${pengurangan.lebar} = <strong>${lebarDaun.toFixed(1)} cm</strong><br>
                    Tinggi Opening : ${height} - ${pengurangan.tinggi} = <strong>${tinggiDaun.toFixed(1)} cm</strong>`;
    } else {
        infoHTML = `<strong>Perhitungan Daun Pintu Saja:</strong><br>Ukuran Aktual: ${width} x ${height} cm`;
    }

    const ukuranTerdekatString = cariUkuranTerdekat(doorType, lebarDaun, tinggiDaun);
    const [lebarTerdekat, tinggiTerdekat] = ukuranTerdekatString.split('x').map(Number);
    document.getElementById('infoMessage').textContent = `PAKE DAUN PINTU : ${lebarTerdekat} x ${tinggiTerdekat} cm`;
    document.getElementById('infoMessage').style.display = 'block';

    // 5. Kalkulasi Harga Dasar & Jasa (NETT)
    const hargaDaunPintuAsli = hargaPintu[doorType][ukuranTerdekatString];
    const ongkosPotong = 45000;
    
    let hargaKusenAsli = 0;
    let keteranganKusen = '';
    if (frameType !== 'none') {
        const kusenInfo = getHargaKusen(frameType, width, height);
        hargaKusenAsli = kusenInfo.harga;
        keteranganKusen = kusenInfo.keterangan;
    }

    // Hitung Add-ons (NETT)
    let valVerstek = (addonVerstek && addonVerstek.checked) ? parseFloat(addonVerstek.value) : 0;
    let valAlumini = (addonAlumini && addonAlumini.checked) ? parseFloat(addonAlumini.value) : 0;
    const totalAddonsNETT = valVerstek + valAlumini;

    // Hitung Laminating (NETT)
    let hargaLamDaun = 0;
    if (doorLaminate !== 'none') {
        hargaLamDaun = hargaLaminate[doorLaminate];
        if (tinggiDaun > 240) hargaLamDaun = Math.round(hargaLamDaun * 1.5);
    }

    let hargaLamKusen = 0;
    if (frameLaminate !== 'none' && frameType !== 'none') {
        if (height > 260) {
            const hargaKhusus = { 'A': 543000, 'B': 445500 };
            hargaLamKusen = hargaKhusus[frameLaminate];
        } else {
            hargaLamKusen = hargaLaminate[frameLaminate];
        }
    }

    // 6. TERAPKAN DISKON (Hanya pada Daun & Kusen)
    const hargaDaunFinal = hargaDaunPintuAsli * multiplier;
    const hargaKusenFinal = hargaKusenAsli * multiplier;

    // 7. HITUNG TOTAL AKHIR
    const totalWithoutKusenUnfinished = hargaDaunFinal + ongkosPotong + totalAddonsNETT;
    const totalWithKusenUnfinished = totalWithoutKusenUnfinished + hargaKusenFinal;
    
    const totalWithoutKusenFinished = totalWithoutKusenUnfinished + hargaLamDaun;
    const totalWithKusenFinished = totalWithKusenUnfinished + hargaLamDaun + hargaLamKusen;

    // 8. TAMPILKAN KE TABEL RINCIAN
    document.getElementById('doorTypeName').textContent = document.getElementById('doorType').options[document.getElementById('doorType').selectedIndex].text;
    
    // Rincian Daun (Tampilkan coret jika diskon)
    const labelDaun = `Daun Pintu ${lebarTerdekat} x ${tinggiTerdekat} :`;
    document.getElementById('labelDaunPintu').textContent = labelDaun;
    if (discPersen > 0) {
        document.getElementById('hargaDaunPintu').innerHTML = `<del>${formatRupiah(hargaDaunPintuAsli)}</del> <span style="color:red">(-${discPersen}%)</span><br><strong>${formatRupiah(hargaDaunFinal)}</strong>`;
    } else {
        document.getElementById('hargaDaunPintu').textContent = formatRupiah(hargaDaunPintuAsli);
    }

    document.getElementById('ongkosPotong').textContent = formatRupiah(ongkosPotong);

    // Rincian Add-ons (Per Item)
    const rowVerstek = document.getElementById('rowVerstek');
    if (valVerstek > 0) {
        rowVerstek.style.display = 'flex';
        document.getElementById('hargaVerstek').textContent = formatRupiah(valVerstek);
    } else { rowVerstek.style.display = 'none'; }

    const rowAlumini = document.getElementById('rowAlumini');
    if (valAlumini > 0) {
        rowAlumini.style.display = 'flex';
        document.getElementById('hargaAlumini').textContent = formatRupiah(valAlumini);
    } else { rowAlumini.style.display = 'none'; }

    // Rincian Kusen
    if (frameType !== 'none') {
        document.getElementById('frameTypeName').textContent = `${frameType} (${keteranganKusen})`;
        if (discPersen > 0) {
            document.getElementById('hargaKusen').innerHTML = `<del>${formatRupiah(hargaKusenAsli)}</del> <span style="color:red">(-${discPersen}%)</span><br><strong>${formatRupiah(hargaKusenFinal)}</strong>`;
        } else {
            document.getElementById('hargaKusen').textContent = formatRupiah(hargaKusenAsli);
        }
        document.getElementById('totalUnfinished').parentElement.style.display = 'flex';
        document.getElementById('totalFinished').parentElement.style.display = 'flex';
    } else {
        document.getElementById('frameTypeName').textContent = 'Tidak Ada';
        document.getElementById('hargaKusen').textContent = '';
        document.getElementById('totalUnfinished').parentElement.style.display = 'none';
        document.getElementById('totalFinished').parentElement.style.display = 'none';
    }

    // Rincian Laminating
    document.getElementById('hargaLamDaun').textContent = formatRupiah(hargaLamDaun);
    document.getElementById('hargaLamKusen').textContent = (frameType !== 'none') ? formatRupiah(hargaLamKusen) : '';

    // TOTAL RESULT AKHIR
    document.getElementById('totalWithoutKusen').textContent = formatRupiah(totalWithoutKusenUnfinished);
    document.getElementById('totalUnfinished').textContent = formatRupiah(totalWithKusenUnfinished);
    document.getElementById('totalFinishedWithoutKusen').textContent = formatRupiah(totalWithoutKusenFinished);
    document.getElementById('totalFinished').textContent = formatRupiah(totalWithKusenFinished);

    document.getElementById('calculationInfo').innerHTML = infoHTML;
    document.getElementById('calculationInfo').style.display = 'block';
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
            document.getElementById('frameLaminate'),
            setupThemeToggle()
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


function resetForm() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
    document.getElementById('result').style.display = 'none';
    document.getElementById('calculationInfo').style.display = 'none';
    document.getElementById('infoMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
}

function copyToClipboard() {
    const resultDiv = document.getElementById('result');
    const text = resultDiv.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Rincian harga berhasil disalin!");
    });
}
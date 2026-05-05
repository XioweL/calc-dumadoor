// Harga laminating
    const hargaLaminate = {
        '2s': 525000,
        '6s': 612500,
        'LK': 400000
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
    const addonRouterS = document.getElementById('addonRouterS');
    const addonRouterC = document.getElementById('addonRouterC');
    const addonLubangS = document.getElementById('addonLubangS');
    const addonLubangC = document.getElementById('addonLubangC');
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
                    <strong>Perhitungan Ukuran Daun Pintu :</strong><br>
                    Lebar Opening : ${width} - ${pengurangan.lebar} = <strong>${lebarDaun.toFixed(1)} cm</strong><br>
                    Tinggi Opening : ${height} - ${pengurangan.tinggi} = <strong>${tinggiDaun.toFixed(1)} cm</strong><br>
                    DAUN PINTU DI POTONG JADI = <strong>${lebarDaun.toFixed(1)} x ${tinggiDaun.toFixed(1)}</strong>`
                    ;
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
    let valRouterS = (addonRouterS && addonRouterS.checked) ? parseFloat(addonRouterS.value) : 0;
    let valRouterC = (addonRouterC && addonRouterC.checked) ? parseFloat(addonRouterC.value) : 0;
    let valLubangS = (addonLubangS && addonLubangS.checked) ? parseFloat(addonLubangS.value) : 0;
    let valLubangC = (addonLubangC && addonLubangC.checked) ? parseFloat(addonLubangC.value) : 0;
    const totalAddonsNETT = valVerstek + valAlumini + valRouterS + valRouterC + valLubangC + valLubangS;

    // Hitung Laminating (NETT)
    let hargaLamDaun = 0;
    if (doorLaminate !== 'none') {
        hargaLamDaun = hargaLaminate[doorLaminate];
        if (tinggiDaun > 240) hargaLamDaun = Math.round(hargaLamDaun * 1.5);
    }

    let hargaLamKusen = 0;
    if (frameLaminate !== 'none' && frameType !== 'none') {
        if (height > 260) {
            const hargaKhusus = { 'LK': 600000 };
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

    const rowRouterS = document.getElementById('rowRouterS');
    if (valRouterS > 0) {
        rowRouterS.style.display = 'flex';
        document.getElementById('hargaRouterS').textContent = formatRupiah(valRouterS);
    } else { rowRouterS.style.display = 'none'; }

    const rowRouterC = document.getElementById('rowRouterC');
    if (valRouterC > 0) {
        rowRouterC.style.display = 'flex';
        document.getElementById('hargaRouterC').textContent = formatRupiah(valRouterC);
    } else { rowRouterC.style.display = 'none'; }  

    const rowLubangS = document.getElementById('rowLubangS');     
    if (valLubangS > 0) {
        rowLubangS.style.display = 'flex';
        document.getElementById('hargaLubangS').textContent = formatRupiah(valLubangS);
    } else { rowLubangS.style.display = 'none'; }   

    const rowLubangC = document.getElementById('rowLubangC');     
    if (valLubangC > 0) {
        rowLubangC.style.display = 'flex';
        document.getElementById('hargaLubangC').textContent = formatRupiah(valLubangC);
    } else { rowLubangC.style.display = 'none'; }      

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
        setupThemeToggle();
        const inputs = [
            document.getElementById('doorType'),
            document.getElementById('width'),
            document.getElementById('height'),
            document.getElementById('frameType'),
            document.getElementById('doorLaminate'),
            document.getElementById('frameLaminate'),
            document.getElementById('discountPersen'),
            document.getElementById('addonVerstek'),
            document.getElementById('addonRouterS'),
            document.getElementById('addonRouterC'),
            document.getElementById('addonLubangS'),
            document.getElementById('addonLubangC'),
            document.getElementById('addonAlumini')
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
    const menuBtn = document.querySelector('.floating-menu-btn');
    
    sidebarVisible = !sidebarVisible;
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    if (menuBtn) {
        menuBtn.style.display = sidebarVisible ? 'none' : 'flex';
    }
    
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
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
    document.getElementById('result').style.display = 'none';
    document.getElementById('calculationInfo').style.display = 'none';
    document.getElementById('infoMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('hitungApa').value = 'openAN';
}

function copyToClipboard() {
    const doorTypeName = document.getElementById('doorTypeName').textContent;
    const frameTypeName = document.getElementById('frameTypeName').textContent;

    const totalWithoutKusen = document.getElementById('totalWithoutKusen').textContent;
    const totalUnfinished = document.getElementById('totalUnfinished').textContent;
    const totalFinishedWithoutKusen = document.getElementById('totalFinishedWithoutKusen').textContent;
    const totalFinished = document.getElementById('totalFinished').textContent;

    const frameType = document.getElementById('frameType').value;

    let text = '';
    text += `Tipe Pintu : ${doorTypeName}\n`;
    text += `Tipe Kusen : ${frameTypeName}\n`;
    text += `\n`
    text += `UNFINISHED\n`;
    text += `🔹 Daun Pintu         : ${totalWithoutKusen}\n`;
    if (frameType !== 'none') {
        text += `🔹 Daun Pintu + Kusen : ${totalUnfinished}\n`;
    }
    text += `\nFINISHED\n`;
    text += `🔸 Daun Pintu         : ${totalFinishedWithoutKusen}\n`;
    if (frameType !== 'none') {
        text += `🔸 Daun Pintu + Kusen : ${totalFinished}\n`;
    }

    navigator.clipboard.writeText(text).then(() => {
        alert("Rincian harga berhasil disalin!");
    });
}
// ===== DUMA DECK CALCULATOR =====

const hargaDeck = {
    '3m': 450000,
    '4m': 600000,
    '5m': 750000
};

const hargaBase = {
    '3m': 120000,
    '4m': 160000,
    '5m': 200000
};

const hargaJointClip = 5200;
const hargaEdgeClip = 5200;

// Cari kombinasi batang paling efisien untuk 1 baris
// Return: { kombinasi: [{label, jumlah}], totalBatangPerBaris, saranPerBaris, wasteCm, hargaPerBaris }
function cariEfisienBatang(panjangCm, hargaPerPanjang, bisaDipotong = true) {
    const pilihan = [
        { panjang: 300, label: '3m' },
        { panjang: 400, label: '4m' },
        { panjang: 500, label: '5m' }
    ];

    // Kasus panjang <= 500cm: cari 1 batang atau potong dari 1 batang
    if (panjangCm <= 500) {
        let hasil = null;
        let bestWaste = Infinity;
        let bestSaran = '';
        let bestKombinasi = [];
        let bestHargaPerBaris = 0;

        for (const p of pilihan) {
            const potonganPer1Batang = Math.floor(p.panjang / panjangCm);
            if (potonganPer1Batang >= 1) {
                const waste = p.panjang - (potonganPer1Batang * panjangCm);
                if (waste < bestWaste || (waste === bestWaste && hargaPerPanjang[p.label] < bestHargaPerBaris)) {
                    bestWaste = waste;
                    hasil = p;
                    bestHargaPerBaris = hargaPerPanjang[p.label];
                    bestKombinasi = [{ label: p.label, jumlah: 1 }];
                    if (potonganPer1Batang > 1) {
                        bestSaran = `Pakai ${p.label}, 1 batang dipotong jadi ${potonganPer1Batang}x${panjangCm}cm (sisa ${waste}cm)`;
                    } else {
                        bestSaran = `Pakai ${p.label}, sisa ${waste}cm`;
                    }
                }
            }
        }
        return {
            kombinasi: bestKombinasi,
            potonganPer1Batang: Math.floor(hasil.panjang / panjangCm),
            saranPerBaris: bestSaran,
            wasteCm: bestWaste,
            hargaPerBaris: bestHargaPerBaris
        };
    }

    // Kasus panjang > 500cm: pakai sambungan
    // Selalu pakai 5m sebagai batang utama, sisa dicari yang paling efisien
    const sisaCm = panjangCm - 500;
    let bestSisa = null;
    let bestWasteSisa = Infinity;
    let bestPotonganSisa = 1;

    for (const p of pilihan) {
        if (bisaDipotong) {
            // Deck/deckbase: sisa bisa dipotong, cari yang paling efisien
            const potongan = Math.floor(p.panjang / sisaCm);
            if (potongan >= 1) {
                const waste = p.panjang - (potongan * sisaCm);
                if (waste < bestWasteSisa || (waste === bestWasteSisa && hargaPerPanjang[p.label] < hargaPerPanjang[bestSisa ? bestSisa.label : p.label])) {
                    bestWasteSisa = waste;
                    bestSisa = p;
                    bestPotonganSisa = potongan;
                }
            }
        } else {
            // Fascia: panjang kontinyu, cari batang terkecil yang cukup untuk sisaCm
            if (p.panjang >= sisaCm) {
                const waste = p.panjang - sisaCm;
                if (waste < bestWasteSisa || (waste === bestWasteSisa && hargaPerPanjang[p.label] < hargaPerPanjang[bestSisa.label])) {
                    bestWasteSisa = waste;
                    bestSisa = p;
                    bestPotonganSisa = 1;
                }
            }
        }
    }

    if (!bestSisa) {
        bestSisa = { panjang: 500, label: '5m' };
        bestWasteSisa = 0;
        bestPotonganSisa = 1;
    }

    // Berapa btg sisa yang dibutuhkan per jumlahBaris (diperhitungkan di hitungTotalBatangDanHarga)
    const kombinasi = [
        { label: '5m', jumlah: 1, potonganPer1: 1 },
        { label: bestSisa.label, jumlah: 1, potonganPer1: bestPotonganSisa }
    ];
    const saranPerBaris = `Sambungan: 1 btg 5m + 1 btg ${bestSisa.label} (waste ${bestWasteSisa}cm per potongan)`;
    const hargaPerBaris = hargaPerPanjang['5m'] + hargaPerPanjang[bestSisa.label];

    return {
        kombinasi,
        potonganPer1Batang: 1,
        saranPerBaris,
        wasteCm: bestWasteSisa,
        hargaPerBaris
    };
}

// Hitung total batang dari kombinasi x jumlahBaris, dan harga total
function hitungTotalBatangDanHarga(efisien, jumlahBaris, hargaPerPanjang, multiplier) {
    const { kombinasi, potonganPer1Batang } = efisien;

    // Kasus bisa dipotong jadi beberapa baris dari 1 batang (panjang <= 500cm)
    if (kombinasi.length === 1 && potonganPer1Batang > 1) {
        const totalBatang = Math.ceil(jumlahBaris / potonganPer1Batang);
        const hargaAsli = totalBatang * hargaPerPanjang[kombinasi[0].label];
        return {
            totalBatang,
            labelBatang: `${totalBatang} btg ${kombinasi[0].label}`,
            hargaAsli,
            harga: hargaAsli * multiplier
        };
    }

    // Kasus sambungan (panjang > 500cm)
    // Batang utama (5m): 1 per baris
    // Batang sisa: 1 batang bisa untuk beberapa baris jika potonganPer1 > 1
    let totalBatang = 0;
    let labelParts = [];
    let hargaAsli = 0;

    for (const k of kombinasi) {
        const potonganPer1 = k.potonganPer1 || 1;
        const jml = Math.ceil(jumlahBaris / potonganPer1);
        totalBatang += jml;
        labelParts.push(`${jml} btg ${k.label}`);
        hargaAsli += jml * hargaPerPanjang[k.label];
    }

    return {
        totalBatang,
        labelBatang: labelParts.join(' + '),
        hargaAsli,
        harga: hargaAsli * multiplier
    };
}

function hitungDeck() {
    document.getElementById('deckErrorMessage').style.display = 'none';
    document.getElementById('deckResult').style.display = 'none';
    document.getElementById('deckActionButtons').style.display = 'none';

    const panjang = parseFloat(document.getElementById('deckPanjang').value) || 0;
    const lebar = parseFloat(document.getElementById('deckLebar').value) || 0;
    const arah = document.getElementById('deckArah').value;

    const discPersen = parseFloat(document.getElementById('deckDiskon').value) || 0;
    const multiplier = (100 - discPersen) / 100;

    if (panjang <= 0 || lebar <= 0) {
        document.getElementById('deckErrorMessage').innerHTML = 'Masukkan ukuran area yang valid!';
        document.getElementById('deckErrorMessage').style.display = 'block';
        return;
    }

    // Tentukan dimensi berdasarkan arah pasang
    // arahPasang = panjang batang deck searah dengan ini
    // arahBaris = tegak lurus, dibagi 14.7 untuk jumlah baris
    let panjangDeck, lebarBaris, panjangBase, jarakBase;
    if (arah === 'panjang') {
        panjangDeck = panjang; // batang deck memanjang ke panjang
        lebarBaris = lebar;   // jumlah baris = lebar / 14.5
        panjangBase = lebar;  // panjang batang deckbase = lebar (tegak lurus deck)
        jarakBase = panjang;  // jarak antar baris base = sepanjang panjang
    } else {
        panjangDeck = lebar;  // batang deck memanjang ke lebar
        lebarBaris = panjang; // jumlah baris = panjang / 14.5
        panjangBase = panjang; // panjang batang deckbase = panjang (tegak lurus deck)
        jarakBase = lebar;    // jarak antar baris base = sepanjang lebar
    }

    // === HITUNG DECK ===
    const jumlahBaris = Math.ceil(lebarBaris / 14.7);
    const efisienDeck = cariEfisienBatang(panjangDeck, hargaDeck);
    const hasilDeck = hitungTotalBatangDanHarga(efisienDeck, jumlahBaris, hargaDeck, multiplier);

    // === HITUNG DECK BASE ===
    const jumlahBaseRaw = Math.ceil(jarakBase / 25);
    const jumlahBase = jumlahBaseRaw + 2;
    const efisienBase = cariEfisienBatang(panjangBase, hargaBase);
    const hasilBase = hitungTotalBatangDanHarga(efisienBase, jumlahBase, hargaBase, multiplier);

    // === HITUNG CLIP ===
    const jumlahJoint = (jumlahBaris - 1) * jumlahBase;
    const jumlahEdge = jumlahBase * 2;
    const hargaTotalJoint = jumlahJoint * hargaJointClip * multiplier;
    const hargaTotalEdge = jumlahEdge * hargaEdgeClip * multiplier;

    // === TOTAL ===
    const grandTotal = hasilDeck.harga + hasilBase.harga + hargaTotalJoint + hargaTotalEdge;

    // === TAMPILKAN ===
    const luas = (panjang * lebar / 10000).toFixed(2);
    document.getElementById('deckLuasArea').textContent = `${luas} m² (${panjang} x ${lebar} cm)`;

    document.getElementById('deckLabelDeck').textContent = `Duma Deck:`;
    document.getElementById('deckJumlahDeck').textContent = hasilDeck.labelBatang;
    document.getElementById('deckSaranDeck').textContent = `${jumlahBaris} baris. ${efisienDeck.saranPerBaris}`;
    document.getElementById('deckHargaDeck').textContent = formatRupiah(hasilDeck.harga);

    document.getElementById('deckLabelBase').textContent = `Deck Base 45:`;
    document.getElementById('deckJumlahBase').textContent = `${hasilBase.labelBatang} (${jumlahBase} baris)`;
    document.getElementById('deckSaranBase').textContent = `${jumlahBase} baris base. ${efisienBase.saranPerBaris}`;
    document.getElementById('deckHargaBase').textContent = formatRupiah(hasilBase.harga);

    document.getElementById('deckJumlahJoint').textContent = `${jumlahJoint} pcs`;
    document.getElementById('deckHargaJoint').textContent = formatRupiah(hargaTotalJoint);
    document.getElementById('deckJumlahEdge').textContent = `${jumlahEdge} pcs`;
    document.getElementById('deckHargaEdge').textContent = formatRupiah(hargaTotalEdge);

    const grandTotalAsli = hasilDeck.hargaAsli + hasilBase.hargaAsli + (jumlahJoint * hargaJointClip) + (jumlahEdge * hargaEdgeClip);
    if (discPersen > 0) {
        document.getElementById('deckTotal').innerHTML = `<del>${formatRupiah(grandTotalAsli)}</del> <span style="color:red">(-${discPersen}%)</span><br><strong>${formatRupiah(grandTotal)}</strong>`;
    } else {
        document.getElementById('deckTotal').textContent = formatRupiah(grandTotal);
    }

    document.getElementById('deckResult').style.display = 'block';
    document.getElementById('deckTotalSection').style.display = 'block';
    document.getElementById('deckActionButtons').style.display = 'block';
}

function resetDeck() {
    document.getElementById('deckPanjang').value = '';
    document.getElementById('deckLebar').value = '';
    document.getElementById('deckDiskon').value = '';
    document.getElementById('deckArah').selectedIndex = 0;
    document.getElementById('deckResult').style.display = 'none';
    document.getElementById('deckTotalSection').style.display = 'none';
    document.getElementById('deckActionButtons').style.display = 'none';
    document.getElementById('deckErrorMessage').style.display = 'none';
}

function copyDeckKebutuhan() {
    const deckLabel = document.getElementById('deckLabelDeck').textContent;
    const panjangBatangDeck = deckLabel.match(/\((\d+m)\)/)?.[1] || '';
    const jumlahDeck = document.getElementById('deckJumlahDeck').textContent.replace(' batang', '');

    const baseLabel = document.getElementById('deckLabelBase').textContent;
    const panjangBatangBase = baseLabel.match(/\((\d+m)\)/)?.[1] || '';
    const jumlahBaseText = document.getElementById('deckJumlahBase').textContent;
    const jumlahBase = jumlahBaseText.match(/^(\d+)/)?.[1] || '';

    const jumlahJoint = document.getElementById('deckJumlahJoint').textContent.replace(' pcs', '');
    const jumlahEdge = document.getElementById('deckJumlahEdge').textContent.replace(' pcs', '');

    const panjang = document.getElementById('deckPanjang').value;
    const lebar = document.getElementById('deckLebar').value;
    const garis = '━━━━━━━━━━━━━━━━━━━━';

    let text = '';
    text += `*KEBUTUHAN DUMA DECK*\n`;
    text += `*(${panjang}cm x ${lebar}cm)*\n`;
    text += `- *Deck* ${panjangBatangDeck} → ${jumlahDeck} btg\n`;
    text += `- *Deck Base* ${panjangBatangBase} → ${jumlahBase} btg\n`;
    text += `- *Joint Clip* → ${jumlahJoint} pcs\n`;
    text += `- *Edge Clip* → ${jumlahEdge} pcs\n`;

    navigator.clipboard.writeText(text).then(() => {
        alert("Kebutuhan material berhasil disalin!");
    });
}
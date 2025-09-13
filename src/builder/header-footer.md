# Header & Footer

Laravel WordTemplate mendukung penambahan **header** dan **footer** ke dokumen Word.  
Anda bisa menambahkan teks, gambar, page number, bahkan kombinasi keduanya.

## 1️⃣ Header Sederhana

```php
use Novay\Word\Facades\Word;

Word::builder()
    ->addHeader('Laporan Penjualan 2025')
    ->addTitle('Isi Dokumen', 1)
    ->addText('Halaman ini memiliki header.')
    ->download('header.docx');
````

👉 Header akan muncul di semua halaman.

## 2️⃣ Footer Sederhana

```php
Word::builder()
    ->addFooter('Dokumen Rahasia – PT Maju Jaya')
    ->addText('Konten halaman dengan footer.')
    ->download('footer.docx');
```

## 3️⃣ Header & Footer Bersamaan

```php
Word::builder()
    ->addHeader('PT Maju Jaya – Laporan Tahunan')
    ->addFooter('Confidential • 2025')
    ->addTitle('Halaman Utama', 1)
    ->addText('Isi laporan dengan header & footer.')
    ->download('header-footer.docx');
```

## 4️⃣ Header dengan Gambar

```php
Word::builder()
    ->addHeaderImage(public_path('logo.png'), [
        'width' => 80,
        'alignment' => 'left',
    ])
    ->addTitle('Dokumen dengan Logo di Header', 1)
    ->download('header-image.docx');
```

## 5️⃣ Footer dengan Nomor Halaman

```php
Word::builder()
    ->addFooterPageNumber('center') // left, center, right
    ->addTitle('Laporan dengan Page Number', 1)
    ->addText('Halaman 1 akan otomatis diberi nomor.')
    ->addPageBreak()
    ->addText('Ini halaman kedua.')
    ->download('footer-page.docx');
```

👉 Nomor halaman akan muncul otomatis di semua halaman.

## 6️⃣ Custom Layout Header & Footer

Anda juga bisa membuat layout lebih kompleks (misalnya logo di kiri, teks di kanan).

```php
Word::builder()
    ->addHeaderTable([
        [
            ['text' => 'PT Maju Jaya', 'bold' => true],
            ['image' => public_path('logo.png'), 'width' => 60, 'alignment' => 'right'],
        ],
    ])
    ->addFooterTable([
        [
            ['text' => 'Confidential – 2025', 'alignment' => 'left'],
            ['text' => 'Halaman {PAGE} dari {NUMPAGES}', 'alignment' => 'right'],
        ],
    ])
    ->addTitle('Isi Dokumen', 1)
    ->download('custom-header-footer.docx');
```

## 📌 Tips

* `addHeader()` dan `addFooter()` mendukung teks sederhana.
* Gunakan `addHeaderImage()` dan `addFooterPageNumber()` untuk logo & page number.
* Gunakan tabel (`addHeaderTable`, `addFooterTable`) untuk layout lebih kompleks.
* Placeholder `{PAGE}` dan `{NUMPAGES}` otomatis diganti dengan nomor halaman.
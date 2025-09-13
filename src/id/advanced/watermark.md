# Watermark

Laravel WordTemplate mendukung **watermark** berupa teks maupun gambar.  
Fitur ini cocok untuk dokumen **draft**, **confidential**, atau **official copy**.

## 1️⃣ Watermark Teks Sederhana

```php
use Novay\Word\Facades\Word;

Word::builder()
    ->addWatermarkText('CONFIDENTIAL')
    ->addTitle('Laporan Keuangan', 1)
    ->addText('Isi laporan dengan watermark teks.')
    ->download('watermark-text.docx');
````

👉 Watermark teks akan muncul miring (diagonal) pada semua halaman.

## 2️⃣ Watermark Teks dengan Opsi

```php
Word::builder()
    ->addWatermarkText('DRAFT ONLY', [
        'font' => 'Arial',
        'size' => 50,
        'color' => 'FF0000', // merah
        'rotation' => -30,
    ])
    ->addTitle('Dokumen Draft', 1)
    ->download('watermark-text-options.docx');
```

👉 Hasil watermark lebih besar, warna merah, miring ke kiri.

## 3️⃣ Watermark Gambar

```php
Word::builder()
    ->addWatermarkImage(public_path('logo.png'), [
        'width' => 200,
        'height' => 200,
        'marginTop' => 150,
        'marginLeft' => 150,
    ])
    ->addTitle('Dokumen dengan Watermark Gambar', 1)
    ->download('watermark-image.docx');
```

👉 Gambar akan ditempatkan di background halaman.

## 4️⃣ Kombinasi Watermark Teks + Gambar

```php
Word::builder()
    ->addWatermarkText('INTERNAL USE ONLY', [
        'size' => 40,
        'color' => '888888',
    ])
    ->addWatermarkImage(public_path('logo.png'), [
        'width' => 120,
        'marginTop' => 100,
        'marginLeft' => 100,
    ])
    ->addTitle('Dokumen Rahasia', 1)
    ->download('watermark-mixed.docx');
```

## 5️⃣ Watermark pada Template

Anda juga bisa menambahkan watermark meskipun dokumen berasal dari template.

```php
Word::template('templates/invoice.docx')
    ->replace([
        'customer' => 'Budi',
        'amount' => 'Rp 5.000.000',
    ])
    ->addWatermarkText('PAID')
    ->download('invoice-watermarked.docx');
```

## 📌 Tips

* `addWatermarkText()` untuk teks watermark.
* `addWatermarkImage()` untuk gambar watermark.
* Watermark otomatis muncul di semua halaman.
* Gunakan opsi `rotation`, `size`, `color` untuk teks.
* Gunakan `marginTop` & `marginLeft` untuk mengatur posisi gambar.
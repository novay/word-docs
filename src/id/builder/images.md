# 🖼️ Builder Mode – Images

Builder Mode mendukung penambahan gambar dari file lokal, storage, atau URL.  
Anda bisa mengatur ukuran, alignment, dan style gambar sesuai kebutuhan.

## 1️⃣ Menambahkan Gambar Sederhana

```php
use Novay\Word\Facades\Word;

Word::builder()
    ->addTitle('Contoh Gambar', 1)
    ->addImage(public_path('logo.png'))
    ->download('image.docx');
````

👉 Gambar akan ditambahkan dengan ukuran asli.

## 2️⃣ Resize Gambar

```php
Word::builder()
    ->addImage(public_path('logo.png'), [
        'width' => 150,
        'height' => 150,
    ])
    ->download('image-resized.docx');
```

👉 Ukuran gambar dipaksa menjadi **150x150 px**.

## 3️⃣ Alignment Gambar

```php
Word::builder()
    ->addImage(public_path('logo.png'), [
        'width' => 100,
        'alignment' => 'center', // left, right, center
    ])
    ->download('image-align.docx');
```

## 4️⃣ Gambar dari Storage atau URL

```php
Word::builder()
    ->addImage(storage_path('app/public/photos/user.jpg'), [
        'width' => 120,
        'alignment' => 'left',
    ])
    ->addImage('https://example.com/logo.png', [
        'width' => 100,
        'alignment' => 'right',
    ])
    ->download('image-mixed.docx');
```

## 5️⃣ Gambar dengan Caption

```php
Word::builder()
    ->addImage(public_path('chart.png'), [
        'width' => 300,
        'alignment' => 'center',
    ])
    ->addText('Gambar 1. Grafik Penjualan Bulanan', [
        'italic' => true,
        'alignment' => 'center',
    ])
    ->download('image-caption.docx');
```

## 6️⃣ Background Image (Watermark)

Anda juga bisa menggunakan gambar sebagai watermark atau background.

```php
Word::builder()
    ->addWatermark(public_path('watermark.png'), [
        'marginTop' => 200,
        'marginLeft' => 150,
    ])
    ->addTitle('Dokumen dengan Watermark', 1)
    ->addText('Teks ini memiliki background watermark.')
    ->download('watermark.docx');
```

## 📌 Tips

* Gunakan `width` dan `height` untuk mengatur ukuran gambar.
* Alignment mendukung: `left`, `right`, `center`.
* Bisa load gambar dari: `public/`, `storage/`, atau langsung dari **URL**.
* Gunakan `addWatermark()` untuk watermark/background.
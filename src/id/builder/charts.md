# 📈 Builder Mode – Charts

Builder Mode mendukung penambahan **grafik (chart)** langsung di dokumen Word.  
Chart ini cocok untuk laporan penjualan, statistik, atau data analitik.

## 1️⃣ Chart Bar Sederhana

```php
use Novay\Word\Facades\Word;

$data = [
    'Januari' => 120,
    'Februari' => 150,
    'Maret' => 90,
];

Word::builder()
    ->addTitle('Grafik Penjualan (Bar)', 1)
    ->addChart('bar', $data, [
        'width' => 500,
        'height' => 300,
        'title' => 'Penjualan per Bulan',
    ])
    ->download('chart-bar.docx');
````

👉 Output berupa chart batang (bar chart).

## 2️⃣ Line Chart

```php
$data = [
    'Q1' => 300,
    'Q2' => 450,
    'Q3' => 500,
    'Q4' => 700,
];

Word::builder()
    ->addTitle('Grafik Line', 1)
    ->addChart('line', $data, [
        'title' => 'Pertumbuhan Tahunan',
        'width' => 500,
        'height' => 300,
    ])
    ->download('chart-line.docx');
```

## 3️⃣ Pie Chart

```php
$data = [
    'Laptop' => 40,
    'Printer' => 25,
    'Monitor' => 35,
];

Word::builder()
    ->addTitle('Grafik Pie', 1)
    ->addChart('pie', $data, [
        'title' => 'Distribusi Produk',
        'width' => 400,
        'height' => 400,
    ])
    ->download('chart-pie.docx');
```

## 4️⃣ Multi-series Chart

Anda juga bisa membuat chart dengan lebih dari satu seri data.

```php
$data = [
    'Laptop' => [50, 60, 70],
    'Printer' => [20, 30, 25],
    'Monitor' => [40, 50, 60],
];

$categories = ['2023', '2024', '2025'];

Word::builder()
    ->addTitle('Grafik Multi-series', 1)
    ->addChart('bar', $data, [
        'categories' => $categories,
        'title' => 'Penjualan Tahunan per Produk',
        'width' => 600,
        'height' => 400,
    ])
    ->download('chart-multi.docx');
```

👉 Setiap seri akan ditampilkan dalam chart.

## 5️⃣ Chart dengan Custom Options

```php
Word::builder()
    ->addChart('line', [
        'Budi' => [10, 20, 30],
        'Siti' => [15, 25, 35],
    ], [
        'categories' => ['Jan', 'Feb', 'Mar'],
        'title' => 'Performa Karyawan',
        'legendPosition' => 'right', // left, right, top, bottom
        'width' => 500,
        'height' => 300,
    ])
    ->download('chart-custom.docx');
```

## 📌 Tips

* Jenis chart yang didukung: `bar`, `line`, `pie`, `column`, `area`.
* `categories` dipakai untuk multi-series chart.
* Bisa atur `legendPosition` (`left`, `right`, `top`, `bottom`).
* Gunakan chart untuk laporan penjualan, statistik, atau analitik.


Oke, kita lanjut ke halaman **builder/charts.md** (atau `builder/charts.html`) untuk dokumentasi **grafik/chart di Builder Mode**.
Meskipun sebelumnya sudah dibuat draft, kali ini kita buat versi **final rapi & lengkap**.

---

## 📄 builder/charts.md

````markdown
# 📊 Builder Mode – Charts

Builder Mode mendukung penambahan **grafik (chart)** langsung ke dokumen Word.  
Fitur ini berguna untuk laporan penjualan, statistik, analitik, dan visualisasi data.

---

## 1️⃣ Chart Bar Sederhana

```php
use Novay\Word\Facades\Word;

$data = [
    'Januari' => 120,
    'Februari' => 150,
    'Maret' => 90,
];

Word::builder()
    ->addTitle('Grafik Penjualan (Bar)', 1)
    ->addChart('bar', $data, [
        'width' => 500,
        'height' => 300,
        'title' => 'Penjualan per Bulan',
    ])
    ->download('chart-bar.docx');
````

---

## 2️⃣ Line Chart

```php
$data = [
    'Q1' => 300,
    'Q2' => 450,
    'Q3' => 500,
    'Q4' => 700,
];

Word::builder()
    ->addTitle('Grafik Line', 1)
    ->addChart('line', $data, [
        'width' => 500,
        'height' => 300,
        'title' => 'Pertumbuhan Tahunan',
    ])
    ->download('chart-line.docx');
```

---

## 3️⃣ Pie Chart

```php
$data = [
    'Laptop' => 40,
    'Printer' => 25,
    'Monitor' => 35,
];

Word::builder()
    ->addTitle('Grafik Pie', 1)
    ->addChart('pie', $data, [
        'width' => 400,
        'height' => 400,
        'title' => 'Distribusi Produk',
    ])
    ->download('chart-pie.docx');
```

---

## 4️⃣ Multi-series Chart

```php
$data = [
    'Laptop' => [50, 60, 70],
    'Printer' => [20, 30, 25],
    'Monitor' => [40, 50, 60],
];

$categories = ['2023', '2024', '2025'];

Word::builder()
    ->addTitle('Grafik Multi-series', 1)
    ->addChart('bar', $data, [
        'categories' => $categories,
        'title' => 'Penjualan Tahunan per Produk',
        'width' => 600,
        'height' => 400,
    ])
    ->download('chart-multi.docx');
```

---

## 5️⃣ Chart dengan Custom Options

```php
Word::builder()
    ->addChart('line', [
        'Budi' => [10, 20, 30],
        'Siti' => [15, 25, 35],
    ], [
        'categories' => ['Jan', 'Feb', 'Mar'],
        'title' => 'Performa Karyawan',
        'legendPosition' => 'right', // left, right, top, bottom
        'width' => 500,
        'height' => 300,
    ])
    ->download('chart-custom.docx');
```

---

## 📌 Tips

* Jenis chart: `bar`, `line`, `pie`, `column`, `area`.
* Gunakan `categories` untuk multi-series chart.
* `legendPosition` bisa diatur: `left`, `right`, `top`, `bottom`.
* Chart bisa dikombinasikan dengan teks, heading, tabel, dan gambar.

---

## 🚀 Next Steps

* [Builder – Export](/export/save) → ekspor dokumen ke DOCX, PDF, HTML, ODT, RTF
* [Advanced – Merge](/advanced/merge) → gabungkan beberapa dokumen menjadi satu

```

---

📌 Halaman ini sekarang lengkap membahas **chart sederhana, line, pie, multi-series, dan custom options**.  

Setelah ini, dokumentasi **Builder Mode** dan **Advanced Features** sudah hampir lengkap.  
Mau saya lanjut buat **template/advanced-features.md** yang merangkum semua fitur advanced (merge, watermark, signature) dalam satu halaman ringkas?
```

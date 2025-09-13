# 📊 Builder Mode – Tables

Builder Mode memungkinkan Anda membuat **tabel dinamis** langsung dari Laravel.  
Anda bisa membuat tabel sederhana maupun tabel kompleks dengan border, alignment, dan merge cell.

## 1️⃣ Tabel Sederhana

```php
use Novay\Word\Facades\Word;

Word::builder()
    ->addTable([
        ['Produk', 'Jumlah', 'Harga'],
        ['Laptop', '5', 'Rp 50.000.000'],
        ['Printer', '2', 'Rp 6.000.000'],
    ])
    ->download('table.docx');
````

👉 Output berupa tabel 3 kolom dengan border default.

## 2️⃣ Menambahkan Style ke Tabel

```php
Word::builder()
    ->addTable(
        [
            ['Produk', 'Jumlah', 'Harga'],
            ['Laptop', '5', 'Rp 50.000.000'],
            ['Printer', '2', 'Rp 6.000.000'],
        ],
        [
            'borderSize' => 6,
            'borderColor' => '000000',
            'cellMargin' => 80,
            'alignment' => 'center',
        ]
    )
    ->download('styled-table.docx');
```

## 3️⃣ Header Row dengan Style

```php
Word::builder()
    ->addTable(
        [
            [
                ['text' => 'Produk', 'bold' => true],
                ['text' => 'Jumlah', 'bold' => true],
                ['text' => 'Harga', 'bold' => true],
            ],
            ['Laptop', '5', 'Rp 50.000.000'],
            ['Printer', '2', 'Rp 6.000.000'],
        ]
    )
    ->download('header-table.docx');
```

## 4️⃣ Merge Cell (Colspan & Rowspan)

```php
Word::builder()
    ->addTable([
        [
            ['text' => 'Produk', 'gridSpan' => 2, 'alignment' => 'center'],
            'Harga'
        ],
        ['Laptop', '5 unit', 'Rp 50.000.000'],
        ['Printer', '2 unit', 'Rp 6.000.000'],
    ])
    ->download('merged-table.docx');
```

👉 `gridSpan` digunakan untuk **colspan**.
👉 Untuk rowspan, gunakan `vMerge`:

```php
Word::builder()
    ->addTable([
        [
            ['text' => 'Produk', 'vMerge' => 'restart'],
            'Jumlah',
            'Harga'
        ],
        [
            ['text' => 'Laptop', 'vMerge' => 'continue'],
            '5 unit',
            'Rp 50.000.000'
        ],
    ])
    ->download('rowspan-table.docx');
```

## 5️⃣ Alignment Cell

```php
Word::builder()
    ->addTable(
        [
            [
                ['text' => 'Produk', 'alignment' => 'center'],
                ['text' => 'Jumlah', 'alignment' => 'right'],
                ['text' => 'Harga', 'alignment' => 'right'],
            ],
            ['Laptop', '5', 'Rp 50.000.000'],
            ['Printer', '2', 'Rp 6.000.000'],
        ]
    )
    ->download('aligned-table.docx');
```

## 6️⃣ Table Complex Example

```php
Word::builder()
    ->addTitle('Laporan Penjualan', 1)
    ->addTable(
        [
            [
                ['text' => 'Produk', 'bold' => true, 'color' => 'FFFFFF', 'alignment' => 'center'],
                ['text' => 'Jumlah', 'bold' => true, 'color' => 'FFFFFF', 'alignment' => 'center'],
                ['text' => 'Harga', 'bold' => true, 'color' => 'FFFFFF', 'alignment' => 'center'],
            ],
            ['Laptop', '5', 'Rp 50.000.000'],
            ['Printer', '2', 'Rp 6.000.000'],
            ['Monitor', '7', 'Rp 14.000.000'],
        ],
        [
            'borderSize' => 6,
            'borderColor' => '000000',
            'cellMargin' => 80,
            'alignment' => 'center',
        ]
    )
    ->download('laporan-table.docx');
```

## 📌 Tips

* Gunakan `gridSpan` untuk **colspan**.
* Gunakan `vMerge` (`restart` / `continue`) untuk **rowspan**.
* Gunakan array `[ 'text' => ..., 'bold' => true ]` untuk styling cell.
* Style tabel bisa diatur default di `config/word.php`.
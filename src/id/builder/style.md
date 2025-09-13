# 🎨 Builder Mode – Style & Formatting

Builder Mode mendukung **pengaturan style teks, paragraf, list, tabel, dan heading**.  
Dengan style, Anda bisa membuat dokumen yang lebih rapi dan profesional.

## 1️⃣ Style Teks Dasar

```php
use Novay\Word\Facades\Word;

Word::builder()
    ->addText('Teks normal.')
    ->addText('Teks tebal.', ['bold' => true])
    ->addText('Teks miring.', ['italic' => true])
    ->addText('Teks bergaris bawah.', ['underline' => 'single'])
    ->addText('Teks merah.', ['color' => 'FF0000'])
    ->addText('Ukuran besar.', ['size' => 18])
    ->download('styled-text.docx');
````

## 2️⃣ Heading / Title

```php
Word::builder()
    ->addTitle('Judul Utama', 1) // Heading 1
    ->addTitle('Sub Judul', 2)   // Heading 2
    ->addTitle('Sub Sub Judul', 3) // Heading 3
    ->download('heading.docx');
```

👉 Heading otomatis mengikuti style bawaan Word.

## 3️⃣ Paragraph Style

Anda bisa menambahkan style ke paragraf, seperti alignment, spacing, dan indentation.

```php
Word::builder()
    ->addText(
        'Paragraf rata kiri (default).'
    )
    ->addText(
        'Paragraf rata kanan.',
        [],
        ['alignment' => 'right']
    )
    ->addText(
        'Paragraf rata tengah.',
        [],
        ['alignment' => 'center']
    )
    ->addText(
        'Paragraf justify (rata kiri-kanan).',
        [],
        ['alignment' => 'both', 'spaceBefore' => 200, 'spaceAfter' => 200]
    )
    ->download('paragraph.docx');
```

## 4️⃣ List dengan Style

```php
Word::builder()
    ->addList('Item 1') // default bullet
    ->addList('Item 2', 0, ['listType' => 'number']) // numbered list
    ->addList('Item 2.1', 1, ['listType' => 'number']) // nested
    ->download('list-style.docx');
```

## 5️⃣ Table dengan Style

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

## 6️⃣ Custom Named Styles

Anda juga bisa membuat style kustom lewat config atau langsung definisi:

```php
Word::builder()
    ->addText('Judul dengan style custom.', [
        'name' => 'Arial',
        'size' => 20,
        'bold' => true,
        'color' => '1E90FF',
    ])
    ->download('custom-style.docx');
```

## 📌 Tips

* Gunakan kombinasi **textStyle** dan **paragraphStyle** untuk hasil maksimal.
* Alignment mendukung: `left`, `right`, `center`, `both` (justify).
* List mendukung: `bullet` dan `number`.
* Style tabel bisa dibuat default di `config/word.php`.
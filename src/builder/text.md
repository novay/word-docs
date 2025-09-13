# Text, Headings & Paragraphs

Builder Mode memudahkan Anda menambahkan teks, heading, dan paragraf dengan kontrol penuh atas style dan layout. Selain itu, Anda juga bisa membuat **page break** untuk memisahkan halaman.

## 1️⃣ Menambahkan Teks Sederhana

```php
use Novay\Word\Facades\Word;

Word::builder()
    ->addText('Halo dunia!') // teks biasa
    ->addText('Ini teks tebal.', ['bold' => true])
    ->addText('Ini teks merah.', ['color' => 'FF0000'])
    ->download('text.docx');
````

## 2️⃣ Heading / Title

```php
Word::builder()
    ->addTitle('Judul Utama', 1)   // Heading 1
    ->addTitle('Sub Judul', 2)     // Heading 2
    ->addTitle('Sub Sub Judul', 3) // Heading 3
    ->download('heading.docx');
```

👉 Heading mengikuti style bawaan Word.

## 3️⃣ Paragraf dengan Style

Anda bisa mengatur **alignment**, **spacing**, dan **indentation**.

```php
Word::builder()
    ->addText('Paragraf normal (rata kiri).')
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

## 4️⃣ Multiple Paragraphs

```php
Word::builder()
    ->addText("Ini paragraf pertama.\n\nIni paragraf kedua.")
    ->download('multi-paragraph.docx');
```

## 5️⃣ Page Break / New Page

Untuk memulai halaman baru gunakan `addPageBreak()`.

```php
Word::builder()
    ->addTitle('Halaman Pertama', 1)
    ->addText('Konten halaman pertama.')
    ->addPageBreak() // pindah halaman
    ->addTitle('Halaman Kedua', 1)
    ->addText('Konten halaman kedua.')
    ->download('page-break.docx');
```

👉 Output: dokumen akan memiliki **2 halaman**.

## 📌 Tips

* Gunakan `\n\n` untuk membuat line break sederhana dalam teks.
* Gunakan `addPageBreak()` untuk membuat halaman baru.
* Heading 1–3 cocok untuk laporan atau dokumen resmi.
* Style paragraf bisa dikombinasikan dengan spacing dan alignment.
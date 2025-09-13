# Merge Documents (BETA)

Laravel WordTemplate mendukung penggabungan beberapa file **Word (DOCX)** menjadi **satu dokumen**. Fitur ini berguna untuk **laporan gabungan**, **append dokumen**, atau **arsip kontrak**.

## Merge Beberapa File DOCX

```php
use Novay\Word\Facades\Word;

Word::merge([
    storage_path('app/reports/january.docx'),
    storage_path('app/reports/february.docx'),
    storage_path('app/reports/march.docx'),
])->save(storage_path('app/reports/q1.docx'));
````

👉 File `january.docx`, `february.docx`, dan `march.docx` akan digabung jadi `q1.docx`.

## Merge dengan Download Langsung

```php
return Word::merge([
    public_path('docs/intro.docx'),
    public_path('docs/chapter1.docx'),
    public_path('docs/chapter2.docx'),
])->download('book.docx');
```

## Merge dari Builder + Template

Anda juga bisa menggabungkan hasil dari builder dengan template yang sudah ada.

```php
$tempDoc = Word::builder()
    ->addTitle('Appendix', 1)
    ->addText('Ini adalah lampiran tambahan.')
    ->toTempFile();

Word::merge([
    'templates/main.docx',
    $tempDoc,
])->download('final.docx');
```

👉 `main.docx` akan digabung dengan hasil builder di `final.docx`.

## Merge dengan Pemisah Halaman

Secara default, setiap dokumen akan digabung langsung.
Jika ingin memaksa **page break** antar dokumen:

```php
Word::merge([
    'templates/cover.docx',
    'templates/content.docx',
], ['pageBreak' => true])
->download('merged.docx');
```

👉 Cover akan diikuti oleh konten pada halaman baru.

## Merge + Multi-format Export

```php
Word::merge([
    'templates/part1.docx',
    'templates/part2.docx',
])
->export(storage_path('app/final/combined'), ['docx', 'pdf']);
```

👉 Hasil:

* `combined.docx`
* `combined.pdf`

## 📌 Tips

* Gunakan `merge([...])` untuk menggabungkan banyak file.
* Bisa gabung **template**, **builder result**, atau campuran keduanya.
* Opsi `pageBreak => true` menambahkan halaman baru antar file.
* Hasil merge bisa di-**save**, **download**, atau **export ke multi-format**.
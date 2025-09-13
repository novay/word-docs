# 🌍 Export – Multi-format

Laravel WordTemplate mendukung **multi-format export**, sehingga Anda bisa mengekspor dokumen ke berbagai format hanya dengan satu perintah.

---

## 1️⃣ Ekspor ke Beberapa Format

```php
use Novay\Word\Facades\Word;

Word::builder()
    ->addTitle('Multi Format Export', 1)
    ->addText('Satu dokumen, banyak format.')
    ->export(storage_path('app/reports/multi'), [
        'docx', 'pdf', 'html', 'odt', 'rtf', 'txt'
    ]);
````

👉 Hasilnya:

* `multi.docx`
* `multi.pdf`
* `multi.html`
* `multi.odt`
* `multi.rtf`
* `multi.txt`

---

## 2️⃣ Export dari Template

```php
Word::template('templates/report.docx')
    ->replace([
        'year' => 2025,
        'total' => 'Rp 10.000.000',
    ])
    ->export(storage_path('app/reports/report'), ['docx', 'pdf']);
```

---

## 3️⃣ Download Multi-format (Zip)

Anda juga bisa download beberapa format sekaligus dalam bentuk **ZIP**:

```php
return Word::builder()
    ->addTitle('Multi Export', 1)
    ->addText('Download dalam ZIP.')
    ->downloadAsZip('export.zip', ['docx', 'pdf']);
```

👉 Browser akan mengunduh file `export.zip` yang berisi `export.docx` dan `export.pdf`.

---

## 📌 Tips

* Format yang didukung: **DOCX, PDF, HTML, ODT, RTF, TXT**.
* Untuk **PDF**, pastikan install:

  ```bash
  composer require dompdf/dompdf
  ```
* Untuk **ODT** dan **RTF**, sudah tersedia secara default via PHPWord.

```

---

📌 Dengan ini, dokumentasi bagian **Export** sudah lengkap: save, download, multi-format.  

Mau saya lanjutkan ke **export/as-collection.md** (misalnya: ekspor beberapa dokumen sekaligus dalam loop)?
```

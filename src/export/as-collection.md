Sip 🚀, kita lanjut ke halaman **export/as-collection.md** (atau `export/as-collection.html`) untuk dokumentasi **ekspor banyak dokumen sekaligus (collection/batch export)**.

---

## 📄 export/as-collection.md

````markdown
# 📚 Export – As Collection

Laravel WordTemplate mendukung **batch export** untuk membuat banyak dokumen sekaligus, baik dari **builder** maupun **template**.  
Fitur ini sangat berguna untuk kasus **invoice massal**, **sertifikat**, atau **laporan bulanan per-user**.

---

## 1️⃣ Export Banyak Dokumen dari Template

Misalkan kita punya template `certificate.docx`:

```php
use Novay\Word\Facades\Word;

$participants = [
    ['name' => 'Budi Santoso', 'event' => 'Workshop Laravel'],
    ['name' => 'Siti Aminah', 'event' => 'Workshop Laravel'],
    ['name' => 'Andi Wijaya', 'event' => 'Workshop Laravel'],
];

Word::collection('templates/certificate.docx')
    ->replaceEach($participants)
    ->save(storage_path('app/certificates'));
````

👉 Akan menghasilkan file:

* `certificates/0.docx`
* `certificates/1.docx`
* `certificates/2.docx`

---

## 2️⃣ Export dengan Nama File Dinamis

Anda bisa menambahkan **callback** untuk mengatur nama file.

```php
Word::collection('templates/certificate.docx')
    ->replaceEach($participants, function ($data) {
        return $data['name'] . '.docx';
    })
    ->save(storage_path('app/certificates'));
```

👉 Akan menghasilkan file:

* `Budi Santoso.docx`
* `Siti Aminah.docx`
* `Andi Wijaya.docx`

---

## 3️⃣ Batch Export dari Builder

```php
$reports = [
    ['name' => 'Laporan Januari', 'content' => 'Isi laporan bulan Januari'],
    ['name' => 'Laporan Februari', 'content' => 'Isi laporan bulan Februari'],
];

Word::collection()
    ->buildEach($reports, function ($doc, $data) {
        $doc->addTitle($data['name'], 1);
        $doc->addText($data['content']);
    })
    ->save(storage_path('app/reports'));
```

👉 Akan menghasilkan:

* `reports/Laporan Januari.docx`
* `reports/Laporan Februari.docx`

---

## 4️⃣ Download Banyak File Sekaligus (ZIP)

```php
return Word::collection('templates/certificate.docx')
    ->replaceEach($participants, fn($data) => $data['name'] . '.docx')
    ->downloadAsZip('certificates.zip');
```

👉 Browser akan mengunduh **certificates.zip** yang berisi semua dokumen.

---

## 5️⃣ Export ke Multi-format (Batch)

```php
Word::collection('templates/invoice.docx')
    ->replaceEach([
        ['customer' => 'Budi', 'amount' => '1.000.000'],
        ['customer' => 'Siti', 'amount' => '750.000'],
    ], fn($data) => 'Invoice-' . $data['customer'])
    ->export(storage_path('app/invoices'), ['docx', 'pdf']);
```

👉 Akan menghasilkan:

* `Invoice-Budi.docx`, `Invoice-Budi.pdf`
* `Invoice-Siti.docx`, `Invoice-Siti.pdf`

---

## 📌 Tips

* Gunakan `replaceEach()` untuk template.
* Gunakan `buildEach()` untuk builder.
* `downloadAsZip()` cocok untuk hasil massal.
* Callback untuk nama file memudahkan membuat file dengan nama dinamis.

```

---

📌 Dengan ini, bagian **Export – As Collection** sudah beres ✅ (save banyak file, nama dinamis, builder, template, ZIP, multi-format).  

Mau saya lanjutkan ke bagian **Advanced → merge.html** (menggabungkan beberapa dokumen Word jadi satu file)?
```

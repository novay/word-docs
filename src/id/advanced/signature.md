# Digital Signature

Laravel WordTemplate mendukung penambahan **tanda tangan** berupa gambar maupun **digital signature**.  
Fitur ini cocok untuk dokumen resmi seperti **kontrak**, **invoice**, atau **sertifikat**.

## 1️⃣ Signature dengan Gambar

```php
use Novay\Word\Facades\Word;

Word::builder()
    ->addTitle('Surat Perjanjian', 1)
    ->addText('Isi perjanjian antara pihak A dan pihak B...')
    ->addTextBreak(2)
    ->addText('Hormat kami,')
    ->addImage(public_path('signatures/director.png'), [
        'width' => 120,
        'alignment' => 'left',
    ])
    ->addText('Direktur Utama', ['bold' => true])
    ->download('signature-image.docx');
````

👉 Tanda tangan berupa gambar (`director.png`) akan muncul di bawah teks.

## 2️⃣ Multiple Signatures

```php
Word::builder()
    ->addTitle('Kontrak Kerjasama', 1)
    ->addText('Isi kontrak...')
    ->addTextBreak(2)

    ->addTable([
        [
            ['text' => 'Pihak Pertama', 'alignment' => 'center'],
            ['text' => 'Pihak Kedua', 'alignment' => 'center'],
        ],
        [
            ['image' => public_path('signatures/person1.png'), 'width' => 100, 'alignment' => 'center'],
            ['image' => public_path('signatures/person2.png'), 'width' => 100, 'alignment' => 'center'],
        ],
        [
            ['text' => 'Andi Wijaya', 'alignment' => 'center'],
            ['text' => 'Budi Santoso', 'alignment' => 'center'],
        ],
    ])
    ->download('signature-multiple.docx');
```

👉 Dua tanda tangan ditampilkan berdampingan dalam tabel.

## 3️⃣ Digital Signature (Simple)

Untuk digital signature, Anda bisa menyematkan informasi tanda tangan (nama, jabatan, waktu).
Catatan: ini **bukan tanda tangan X.509**, tetapi metadata sederhana dalam dokumen.

```php
Word::builder()
    ->addTitle('Surat Keputusan', 1)
    ->addText('Isi surat...')
    ->addDigitalSignature([
        'name' => 'Siti Aminah',
        'role' => 'Kepala Departemen',
        'signed_at' => now()->toDateTimeString(),
    ])
    ->download('signature-digital.docx');
```

👉 Metadata tanda tangan akan ditambahkan ke dalam dokumen.

## 4️⃣ Digital Signature dengan X.509 (Advanced)

Jika Anda memiliki sertifikat digital (misalnya `.pfx` atau `.pem`), Anda bisa menggunakannya untuk **menandatangani file DOCX/PDF** agar lebih resmi.

```php
Word::builder()
    ->addTitle('Kontrak Resmi', 1)
    ->addText('Isi kontrak dengan tanda tangan digital...')
    ->signWithCertificate(storage_path('certs/mycert.pfx'), 'password-ku')
    ->save(storage_path('app/contracts/official.docx'));
```

👉 Dokumen akan diproteksi dengan tanda tangan digital X.509.

## 5️⃣ Signature di Template

```php
Word::template('templates/contract.docx')
    ->replace([
        'party_a' => 'Andi Wijaya',
        'party_b' => 'Budi Santoso',
    ])
    ->addImage(public_path('signatures/person1.png'), ['width' => 120])
    ->addImage(public_path('signatures/person2.png'), ['width' => 120])
    ->download('contract-signed.docx');
```

## 📌 Tips

* `addImage()` → untuk tanda tangan manual berupa gambar.
* `addDigitalSignature()` → metadata tanda tangan sederhana.
* `signWithCertificate()` → untuk tanda tangan digital resmi berbasis X.509.
* Gunakan tabel untuk membuat layout tanda tangan lebih rapi.
# 📑 Cheat Sheet

👉 Use this page for a **quick check** of all features without having to read the detailed documentation.

#### Template Mode

| Method | Description |
| :--- | :--- |
| `Word::template($path)` | Loads a `.docx` template |
| `Word::setValue($key, $value)` | Replaces a single placeholder with a value |
| `Word::setValues($array)` | Replaces multiple placeholders at once |
| `Word::setImage($key, $path, $options)` | Inserts an image into a placeholder;` |
| `Word::setLoop($block, $data)` | Looping data di dalam template |

#### Builder Mode

| Method | Description |
|--------|-----------|
| `Word::builder()` | Buat dokumen baru dari nol |
| `Word::addTitle($text, $level)` | Tambah heading |
| `Word::addText($text, $style)` | Tambah teks paragraf |
| `Word::addTable($rows, $style)` | Buat tabel sederhana |
| `Word::addImage($path, $options)` | Tambah gambar ke dokumen |
| `Word::setHeader($content)` | Tambah header |
| `Word::setFooter($content)` | Tambah footer |

#### Export & Output

| Method | Description |
|--------|-----------|
| `Word::saveAs($path)` | Simpan dokumen ke file |
| `Word::download($filename)` | Unduh langsung ke browser |
| `Word::export($format)` | Ekspor dokumen ke format lain |

#### Advanced Features

| Method | Description|
|--------|-----------|
| `Word::merge($files)` | Gabungkan beberapa `.docx` |
| `Word::setWatermark($text, $options)` | Tambah watermark |
| `Word::signDocument($cert, $key)` | Tambah tanda tangan digital |

<br/>

#### References
- [PHPWord Docs](https://phpoffice.github.io/PHPWord/)  
- [Laravel Docs](https://laravel.com/docs)

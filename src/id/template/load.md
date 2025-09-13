# **Template Mode: Getting Started**

The **Template Mode** feature lets you use your existing Word (`.docx`) files as a base for generating new documents. This is the fastest way to create professional files by **replacing text, images, and data loops** directly from your Laravel application.

## **Loading a Template**

To load a template, use the `template($file)` function. This function accepts various file paths, including from your application's public or storage directories, or even a remote URL.

Here's a simple example:

```php
use Novay\Word\Facades\Word;

Word::template('template.docx');
```

You can specify the location using standard Laravel helpers:

  * **Public directory:** `$filePath = public_path('template.docx');`
  * **Storage directory:** `$filePath = storage_path('app/templates/template.docx');`
  * **URL:** `$urlDocument = 'https://example.com/templates/document.docx';`

A common practice is to store templates in the `storage/app/templates/` folder.
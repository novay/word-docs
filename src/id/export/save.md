# **Saving & Exporting**

The `save()` method lets you store a generated document directly on your server, which is useful for archiving or background tasks.

## **Saving to a Specific Location**

To save a document, just pass the full file path to the `save()` method. The `storage_path()` helper is recommended for saving files that shouldn't be publicly accessible.

**Example:**

```php
use Novay\Word\Facades\Word;

Word::builder()
    ->addTitle('Report', 1)
    ->addText('This document is saved to storage.')
    ->save(storage_path('app/public/report.docx'));
```

The file `report.docx` will be saved to `storage/app/public/`.

## **Saving to the Public Folder**

You can also save files to the `public/` folder, making them directly accessible via a URL.

**Example:**

```php
Word::builder()
    ->addTitle('Invoice', 1)
    ->addText('The latest invoice document.')
    ->save(public_path('invoice.docx'));
```

This saves the file to `public/invoice.docx`, which can be accessed at `/invoice.docx`.
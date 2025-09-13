# **Downloading Files**

The `download()` method makes it simple to send your generated documents directly to the user's browser.

## **Default Filename**

When you call `download()` without a filename, the package automatically generates a unique name that includes a timestamp.

```php
use Novay\Word\Facades\Word;

return Word::builder()
    ->addTitle('Financial Report', 1)
    ->addText('This file will be downloaded directly.')
    ->download(); // Result: document_20250914_022830.docx
```

## **Custom Filename**

To use a specific filename, pass it as the first argument.

```php
return Word::builder()
    ->addTitle('Invoice #2025', 1)
    ->addText('The document is using custom filename.')
    ->download('invoice.docx');
```
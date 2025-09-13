# **Quick Start**

This page provides the fastest way to get started with **Laravel WordTemplate**. Follow the steps below to create your first Word document.

## **Template Mode**

If you want to use a pre-existing template, it's simple. Let's say you have an `invoice.docx` file with placeholders like this:

```
Name: ${name}
Date: ${date}
```

You can use the following code in your controller to fill it with data:

```php
use Novay\Word\Facades\Word;

class InvoiceController extends Controller
{
    public function generate()
    {
        return Word::template(storage_path('templates/invoice.docx'))
            ->setValues([
                'name' => 'Novianto Rahmadi',
                'date' => now()->format('d M Y'),
            ])
            ->download('invoice.docx');
    }
}
```

**The Result:** Your user will immediately download the `invoice.docx` file with all the data filled in automatically.

## **Builder Mode**

If you need to create a new document from scratch, you can use **Builder Mode**.

```php
use Novay\Word\Facades\Word;

class ReportController extends Controller
{
    public function build()
    {
        return Word::builder()
            ->addTitle('Monthly Report', 1)
            ->addText('This is a monthly report generated automatically.')
            ->addTable([
                ['No', 'Name', 'Total'],
                [1, 'Product A', 120],
                [2, 'Product B', 80],
            ])
            ->download('report.docx');
    }
}
```
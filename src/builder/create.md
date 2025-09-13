# **Building Documents from Scratch**

Beyond using templates, **Laravel WordTemplate** also supports creating Word documents **from scratch** using **Builder Mode**.

Builder Mode is perfect for:

  * Generating completely dynamic reports or official documents.
  * Creating documents directly from a controller.
  * Building layouts with text, tables, images, and custom styling.

## **1. Creating a Blank Document**

You can start with an empty document and add content using a fluent, chainable syntax.

```php
use Novay\Word\Facades\Word;

Route::get('/builder', function () {
    return Word::builder()
        ->addTitle('Sales Report', 1) // Heading 1
        ->addText('This report was automatically created using Laravel WordTemplate.')
        ->download('report.docx');
});
```

This code will generate a Word document containing a title and a paragraph.

![01](/images/01.png)

## **2. Adding Paragraphs and Styling**

The `addText()` method lets you add paragraphs, and you can pass an array of options to style them.

```php
Word::builder()
    ->addText('Hello, this is the first paragraph.')
    ->addText('This is the second paragraph with custom styling.', [
        'bold' => true,
        'italic' => true,
        'size' => 14,
        'color' => 'FF0000',
    ])
    ->download('styled_paragraph.docx');
```

![02](/images/02.png)

**Available style options:**

  * `bold` → bold text
  * `italic` → italic text
  * `underline` → underlined text
  * `size` → font size
  * `color` → hexadecimal color (e.g., `FF0000` for red)

## **3. Adding Lists**

You can create bulleted or numbered lists with `addList()`. The optional second argument controls the nesting level.

```php
Word::builder()
    ->addTitle('To-do List', 2)
    ->addList('Buy office supplies')
    ->addList('Team meeting', 0) // level 0 (top-level)
    ->addList('Prepare the report', 1) // level 1 (nested)
    ->download('list.docx');
```

## **4. Creating Tables**

The `addTable()` method accepts a two-dimensional array to generate a table.

```php
Word::builder()
    ->addTitle('Sales Report', 2)
    ->addTable([
        ['Product', 'Quantity', 'Price'],
        ['Laptop', '5', '$50,000,000'],
        ['Printer', '2', '$6,000,000'],
    ])
    ->download('table.docx');
```

## **5. Adding Images**

You can easily insert images from a local path and control their size and alignment.

```php
Word::builder()
    ->addTitle('Image Example', 2)
    ->addImage(public_path('logo.png'), [
        'width' => 120,
        'height' => 120,
        'alignment' => 'center',
    ])
    ->download('image.docx');
```

## **6. A Full Example**

You can chain multiple builder methods to create a complete, complex document with a single fluid call.

```php
Word::builder()
    ->addTitle('Monthly Report', 1)
    ->addText('This document was created using Builder Mode.', ['italic' => true])
    ->addList('Sales Summary')
    ->addTable([
        ['Product', 'Quantity', 'Price'],
        ['Laptop', '5', '$50,000,000'],
        ['Printer', '2', '$6,000,000'],
    ])
    ->addImage(public_path('signature.png'), [
        'width' => 100,
        'alignment' => 'right',
    ])
    ->save(storage_path('app/monthly-report.docx'));
```

## **📌 Tips**

  * Use **Builder Mode** when your document's structure is fully dynamic and changes with the data.
  * Use **Template Mode** when you have a pre-designed document with a static layout.
  * You can even combine them\! Load a template, then use builder methods to add extra content.
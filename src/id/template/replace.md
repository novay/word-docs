# **Replacing Values**

The **Replace Values** feature lets you fill Word documents with dynamic data from your Laravel application. This works by replacing **placeholders**, typically formatted like `${variable}`, with the values you provide.

### **One by One**

To replace a few placeholders individually, use the `setValue()` method. For example, if your document has text like this:

```
Hello ${name},
Welcome to ${app}!
```

You can replace them with this:

```php
use Novay\Word\Facades\Word;

// ...
return Word::template($filePath)
    ->setValue('name', 'Novay') 
    ->setValue('app', 'Automatic Documents') 
    ->download('result.docx');
```

Your document will be instantly populated with the data you provided:

```
Hello Novay,
Welcome to Automatic Documents!
```

### **Batch Replacing Values**

For documents with many placeholders, it's more efficient to use the `setValues()` method with an **associative array**.

For example, your contract document might contain many details like this:

```
Work contract for ${client} related to the ${project} project.
Project deadline: ${deadline}.
```

Instead of calling `setValue()` multiple times, you can do it in a single call with `setValues()`:

```php
use Novay\Word\Facades\Word;

// ...
return Word::template('contract.docx')
    ->setValues([
        'client' => 'PT Jaya Abadi',
        'project' => 'Website Redesign',
        'deadline' => 'September 30, 2025',
    ])
    ->download('final-contract.docx');
```

This way, all the data from your array will be inserted directly into the document. Pretty handy, right?
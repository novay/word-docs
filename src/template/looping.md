# **Looping Data**

The **Looping Data** feature is for repeating a block of content in your Word template. With this, you can generate dynamic **tables and lists** from a single template, saving you a lot of time.

## **Basic Looping**

Currently, looping only works if the placeholders are placed inside a table. Please refer to the sample file `storage/app/templates/basic-loop.docx` which is included when you publish the config.

For example, your template's table might contain a single row with the following text:

```
List of Employees:
${i}. ${name} (${email})
```

Now, in your controller, you can loop through an array of data and populate the document.

```php
$users = [
    ['i' => 1, 'name' => 'Novianto Rahmadi', 'email' => 'novay@btekno.id'],
    ['i' => 2, 'name' => 'Melani Malik', 'email' => 'melan@btekno.id'],
];

return Word::template(storage_path('app/templates/basic-loop.docx'))
    ->setLoop('i', $users)
    ->download('basic-loop-final.docx');
```

Then, you'll see this within your document:
```
List of Employees:
1. Novianto Rahmadi (novay@btekno.id)
2. Melani Malik (melan@btekno.id)
```

## **Table Looping**

You can also create dynamic tables. First, set up your template with a table like this:

![01](/images/looping-data-1.png)

Now, prepare the necessary data. Make sure the placeholder for each column is included, as shown in the red box.

```php
$experience = [
    [
        'no' => 1, 
        'client' => 'Diskominfo Samarinda', 
        'job' => 'Samarinda AI', 
        'position' => 'Data Analyst'
    ],
    [
        'no' => 2, 
        'client' => 'Disdik Berau', 
        'job' => 'Education Data Unification System', 
        'position' => 'Programmer'
    ],
    [
        'no' => 3, 
        'client' => 'BPKAD Kutai Kartanegara', 
        'job' => 'Amanda', 
        'position' => 'Programmer'
    ],
];

return Word::template(storage_path('app/templates/template.docx'))
    ->setLoop('no', $experience)
    ->download('output.docx');
```

If successful, the result will look like this:

![01](/images/looping-data-2.png)
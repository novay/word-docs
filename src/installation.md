# **Installation**

Get started by installing and configuring the Laravel WordTemplate package in your project.

## **Requirements**

Ensure your environment meets these criteria:

  * **PHP:** 8.1+
  * **Laravel:** 10.x+
  * **Composer:** v2
  * **PHP Extensions:** `ext-zip`, `ext-xml`, and `ext-gd` (optional for images).

To verify the extensions, run:

```bash
php -m | grep -E "zip|xml|gd"
```

## **Install the Package**

Run this Composer command in your project's root directory:

```bash
composer require novay/laravel-word-template
```

## **Configuration & Samples**

Publish the configuration file to customize the package and access sample templates.

```bash
php artisan vendor:publish --provider="Novay\Word\Providers\WordServiceProvider"
```

This command creates `config/word.php` and publishes several sample `.docx` files to `storage/app/templates` that you can use as a reference.

## **Verify Your Installation**

Confirm the package is working by creating a test document with Laravel Tinker.

1.  Start Tinker:

    ```bash
    php artisan tinker
    ```

2.  Run the command to create a file:

    ```php
    Word::builder()->addText('Hello World')->save(storage_path('app/test.docx'));
    ```

If successful, you will find `test.docx` in your `storage/app` folder. 🎉
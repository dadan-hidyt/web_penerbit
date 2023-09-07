<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    @if (request()->route()->getName() == 'buku.detail')
    <!-- FOR SEO -->
        @php
            $author = json_decode($page['props']['detail_buku']['penulis']);
        @endphp
        <meta property="og:site_name" content="{{ config('app.name') }}">
        <meta property="og:locale" content="{{ app()->getLocale() }}">
        <meta property="og:url" content="{{ asset($_SERVER['REQUEST_URI']) }}">
        <meta property="og:image" content="{{ $page['props']['detail_buku']['cover'] ?? ''  }}">
        <meta property="og:title" content="{{ $page['props']['detail_buku']['judul'] ?? '' }}" />
        <meta property="og:description" content="{{ $page['props']['detail_buku']['deskripsi'] ?? '' }}" />
        <meta property="og:type" content="book" />
        <meta property="book:author" content="{{ ($author ?? false) ? implode(',',$author) : 'Anonim' }}" />
        <meta property="book:isbn" content="{{ $page['props']['detail_buku']['isbn'] ?? '-' }}" />
        <meta property="book:release_date" content="{{ $page['props']['detail_buku']['tahun_terbit'] ?? '' }}" />
        <!-- FOR NOT SEO -->
    @endif

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>

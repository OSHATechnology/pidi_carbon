<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    @include('components-new.link')
</head>

<body id="body-pd">
    @include('components-new.header')

    <div class="content">
        @yield('content')
    </div>

    @include('components-new.script')
</body>

</html>

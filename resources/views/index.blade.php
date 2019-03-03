<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Vue Material Admin Template</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons' rel="stylesheet">
    <script src="https://cdn.bootcss.com/echarts/4.0.4/echarts-en.min.js"></script>
    <link rel="shortcut icon" href="/static/m.png" type="image/x-icon">
    <meta name="description" content="Vue Material Admin Template is a
    Google Material Design  inspired admin dashboard template built with Vue  andVuetify.">
    <meta name="keywords"
          content="admin, dashboard, webapp, template, responsive, material, bootstrap, crm, uikit, framework, backend, app, widgets, premium, file manamger, mail, vue, vuetify, echarts">
    <link rel="stylesheet" href="{{ mix('/css/default.css') }}">
</head>
<body>
<div id="app"></div>

<script src="{{ mix('js/app.js') }}"></script>
{{--<script src="/0.js"></script>--}}
{{--<script src="/1.js"></script>--}}
<script src="{{ mix('/routes.js') }}"></script>
<script src="{{ mix('/vendors~routes.js') }}"></script>
</body>
</html>

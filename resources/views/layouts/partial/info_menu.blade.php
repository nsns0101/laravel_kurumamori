@extends('layouts.app')

<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
<link
    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet">

<!-- Custom styles for this template-->
<link href="css/sb-admin-2.min.css" rel="stylesheet">

<!-- Custom scripts for all pages-->
<script src="/js/sb-admin-2.min.js"></script>



<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<!-- 차트 링크 -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>


<ul class="navbar-nav info_menu sidebar sidebar-dark accordion" id="accordionSidebar">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <br />
        <div class="sidebar-brand-text mx-3">내 정보</div>
    </a>

    <!-- hr -->
    <hr class="sidebar-divider">

    <!-- 개인정보-->
    <li class="nav-item">
        <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
            aria-controls="collapseTwo">
            <i class="fas fa-fw fa-wrench"></i>
            <span style="font-size:14px">개인정보</span>
        </a>
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
            aria-controls="collapseTwo">
            <i class="fas fa-fw fa-wrench"></i>
            <span style="font-size:14px">문의정보</span>
        </a>
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
            aria-controls="collapseTwo">
            <i class="fas fa-fw fa-wrench"></i>
            <span style="font-size:14px">제품정보</span>
        </a>
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
            aria-controls="collapseTwo">
            <i class="fas fa-fw fa-wrench"></i>
            <span style="font-size:14px">의료정보</span>
        </a>
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
            aria-controls="collapseTwo">
            <i class="fas fa-fw fa-wrench"></i>
            <span style="font-size:14px">운점점수</span>
        </a>
    </li>

</ul>
<style>
    .sidebar-brand-text {
        font-size: 22px;
    }

    a {
        color: white;
        font-size: 20px;
    }

    .middle_title {
        color: #4e73df;
        font-size: 20px;
        margin-left: 20px;
    }

    .sidebar hr.sidebar-divider {
        margin: 0 1rem 1rem;
    }

    @media (min-width: 768px) .sidebar {
        width: 14rem !important;
    }

    .sidebar {
        width: 6.5rem;
        min-height: 100vh;
    }

    .info_menu {
        background-image: linear-gradient(180deg, #51595e 10%, black 100%);
        background-size: cover;
        width: 200px;
    }

    .navbar-nav {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }

    *,
    ::after,
    ::before {
        box-sizing: border-box;
    }



    body {
        margin: 0;
        font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: black;
        text-align: left;
        background-color: #d5dfe5;
    }

    :root {
        --blue: #4e73df;
        --indigo: #6610f2;
        --purple: #6f42c1;
        --pink: #e83e8c;
        --red: #e74a3b;
        --orange: #fd7e14;
        --yellow: #f6c23e;
        --green: #1cc88a;
        --teal: #20c9a6;
        --cyan: #36b9cc;
        --white: #fff;
        --gray: #858796;
        --gray-dark: #5a5c69;
        --primary: #4e73df;
        --secondary: #858796;
        --success: #1cc88a;
        --info: #36b9cc;
        --warning: #f6c23e;
        --danger: #e74a3b;
        --light: #f8f9fc;
        --dark: #5a5c69;
        --breakpoint-xs: 0;
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
        --font-family-sans-serif: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    /* 차트 */
    .container,
    .container-fluid {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    body {
        margin: 0;
        font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #858796;
        text-align: left;
        background-color: #fff;
    }
</style>
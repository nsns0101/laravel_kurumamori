<!-- Custom styles for this template-->
<link href="/css/sb-admin-2.min.css" rel="stylesheet">
{{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" /> --}}

<div class="col-md-3" style="padding-left:0px;">

    <ul class="navbar-nav info_menu sidebar sidebar-dark accordion" id="accordionSidebar">
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
            <a class="nav-link" href="/info/index">
                <i class="fas fa-fw fa-wrench"></i>
                <span style="font-size:20px">개인정보</span>
            </a>

            <a class="nav-link" href="/info/medical_info">
                <i class="fas fa-fw fa-wrench"></i>
                <span style="font-size:20px">의료정보</span>
            </a>
            <a class="nav-link" href="/info/drive_score">
                <i class="fas fa-fw fa-wrench"></i>
                <span style="font-size:20px">운전점수</span>
            </a>
        </li>

    </ul>
</div>

<style>
    .info_menu {
        background-image: linear-gradient(1800deg, #51595e 10%, black 100%);
    }
</style>
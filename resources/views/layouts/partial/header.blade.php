<section id="main-navigation">
    <header id="header" style="background-color:black;">
        <div class="header-content clearfix">
            <a class="logo" href="/" style="padding-bottom:0px">
                <image src="/icon/logo_curumamori.png" width="170px"></image>
            </a>
            <nav class="navigation" role="navigation">
                <ul class="primary-nav">
                    <li><a style="font-size:20px;" href="/products">제품 소개</a></li>
                    <li><a style="font-size:20px;" href="#">고객 문의</a></li>
                    @if(auth()->user())
                    <li><a style="font-size:20px; margin-left:80px; margin-right:20px" href="/info/index">내정보</a> </li>
                    <li><a style="font-size:20px; margin-left:80px; margin-right:20px" href="/logout">로그아웃</a> </li>
                    @else
                    <li><a style="font-size:20px; margin-left:80px; margin-right:20px" href="/auth/login">로그인</a> </li>

                    @endif
                </ul>
            </nav> <a href="#" class="nav-toggle">Menu<span></span></a>
        </div>
    </header>
</section>
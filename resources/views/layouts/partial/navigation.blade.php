<section id="main-navigation">
    <nav class="navbar fixed-top navbar-expand-lg" style="background-color:#002ef0; opacity:1;">
        <a class="navbar-brand" href="/"><img class="img" src="/icon/logo_curumamori.png" alt="logo" style="width:100px;"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav mr-auto col-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/products" style="color:white">제품</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/bigdata" style="margin: 0 8px; color:white">빅데이터 자료실</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/boards/questions" style="margin: 0 8px; color:white">고객 문의</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/boards/reviews" style="margin: 0 8px; color:white">고객 리뷰</a>
                </li>
            </ul>

            <ul class="navbar-nav col-auto">
                @if(Auth::user())
                <li class="nav-item">
                    <a class="nav-link " href="/info/index" style="margin: 0 8px; color:white">내정보</a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/logout" style="margin: 0 8px; color:white">로그아웃</a> 
                </li>
                @else
                <li class="nav-item">
                    <a class="nav-link " href="/auth/login" style="margin: 0 8px; color:white">로그인</a>
                </li> 
                <li class="nav-item">
                <a class="nav-link " href="/auth/signup" style="margin: 0 8px; color:white">회원가입</a>
                </li> 
                @endif
            </ul>
        <div>
    </nav>    
</section>
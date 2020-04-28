<section id="main-navigation">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/"><img class="img" src="/icon/logo_curumamori.png" alt="logo" style="width:100px;"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav mr-auto col-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/products">제품 소개</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/questions">고객 문의</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/reviews">고객 리뷰</a>
                </li>
            </ul>

            <ul class="navbar-nav col-auto">
                @if(Auth::user())
                <li class="nav-item">
                    <a class="nav-link" href="/info/index">내정보</a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logout">로그아웃</a> 
                </li>
                @else
                <li class="nav-item">
                    <a class="nav-link" href="/auth/login">로그인</a>
                </li> 
                <li class="nav-item">
                <a class="nav-link" href="/auth/signup">회원가입</a>
                </li> 
                @endif
            </ul>
        <div>
    </nav>    
</section>
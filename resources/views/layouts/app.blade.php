<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:500&display=swap" rel="stylesheet">

    {{-- Scripts --}}
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
</head>
<body>
    <header style="position: sticky; top: 0;">
        <nav class="navbar navbar-light navbar-expand bg-dark d-flex justify-content-between">
            <div class="d-flex align-items-center">
                @if(Auth::check())
                <i><a href="{{ route('profile.index', ['user_id' => Auth::user()->id]) }}"><img src="{{Auth::user()->profile->picture_path}}" alt="img" class="pt-2 profile-img rounded-circle"></a></i>
                @endif
                <span>
                    <a class="navbar-brand text-white px-3" href="{{ route('idea.index') }}"><i class="far fa-lightbulb h3"></i>  アイデア村</a>
                </span>
            </div>
          <div class="row">
                <div id="menu" class="collapse">
                    <ul class="navbar-nav d-flex align-items-center">
                        @if(Auth::check())
                        <li class="nav-item">
                            <a class="nav-link text-white" href="{{ route('idea.index') }}">{{ __('ホーム') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="{{ route('profile.index',['user_id' => Auth::user()->id]) }}">{{ __('マイページ') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="{{ route('about_us') }}">{{ __('お問い合わせ') }}</a>
                        </li>
                        <li class="nav-item">
                            <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                <a class="nav-link text-white" href="{{ route('logout') }}" onclick="event.preventDefault();
                                 document.getElementById('logout-form').submit();"
                                 style="margin-top: 0.9rem;">
                                {{ __('ログアウト') }} 
                                </a>
                            @csrf
                            </form>
                        </li>
                        @endif
                        <!-- Authentication Links -->
                        @guest
                        <li class="nav-item">
                            <a class="nav-link text-white" href="{{ route('login') }}">{{ __('ログイン') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="{{ route('register') }}">{{ __('新規登録') }}</a>
                        </li>
                        </li>
                        @endguest
                    </ul>     
                </div>            
                <button class="navbar-toggler-right mx-3" type="button" data-toggle="collapse" data-target="#menu">
                    <span class="navbar-toggler-icon"></span>
                </button>          
            </div>              
            </nav>       
    </header>
    <main class="py-4 container">
    @yield('content')
    </main>
    @if(Auth::check())
    <div>
        <div>
            <a href="{{ route('idea.create') }}" class="btn-real-dent">
                <i class="far fa-paper-plane"></i>
            </a>
        </div>
        <div>
            <a href="{{ route('chat.index', ['user_id' => Auth::user()->id]) }}" class="btn-real-dent-chat">
                <i class="far fa-comment-dots"></i>
            </a>
        </div>
    </div>
    @endif
    <!-- ここからフッター -->
    <footer class="text-center text-muted pb-4">
        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2019 Ideathon.com
        </div>
    </footer>
</body>
</html>
    <title>マイページ</title>
    {{-- jquery-ui.cssの呼び出し --}}
    <link rel="stylesheet" href="/css/jquery-ui.min.css" type="text/css">
    {{-- photopile.cssの呼び出し --}}
    <link rel="stylesheet" href="/css/photopile_profile.css">
    {{-- lightbox.cssの呼び出し --}}
    <link href="/css/lightbox.css" rel="stylesheet">
    {{-- profile.cssの呼び出し --}}
    <link rel="stylesheet" href="/css/profile.css">

    </head>

    <body>
        @extends('layouts.app')
        @section('content')
        @if($user->profile->gender == 0)
        <div class="wrapper-default">
            @elseif($user->profile->gender == 1)
            <div class="wrapper-male">
                @elseif($user->profile->gender == 2)
                <div class="wrapper-female">
                    @endif
                    <div class="container">
                        <div class="main">
                            <div class="content">

                                <div class=left>
                                    <!-- ここにプロフィール写真入ります(class="profile") -->
                                    @if($user->profile->picture_path)
                                    <a href="{{asset($user->profile->picture_path)}}" data-lightbox="abc" data-title="">
                                        <img src="{{asset($user->profile->picture_path)}}" alt="プロフィール画像"
                                            class="profile">
                                    </a>
                                    @else
                                        @if(\App::environment('heroku'))
                                        <img src="https://ideathon.s3-ap-northeast-1.amazonaws.com/images/profilePicture/defaultPicture.jpg"
                                        alt="プロフィール画像" class="profile">
                                        @else
                                    <img src="{{asset('storage/images/profilePicture/defaultPicture.jpg')}}"
                                        alt="プロフィール画像" class="profile">
                                        @endif
                                    @endif
                                    @if(Auth::check() && Auth::user()->id == $user->id)
                                    <a href="{{route('profile.edit',['user_id' => $user->profile->user_id])}}"
                                        class="edit mt-2 pl-1">編集</a>
                                    @endif
                                </div>

                                <div class="right">
                                    <div class="top">
                                        <!-- 居住地を表示 -->
                                        <p class="place h4">{{$user->profile->locate}}</p>
                                        <!-- 職業を表示 -->
                                        <p class="job h4">{{$user->profile->job}}</p>

                                    </div>
                                    <div class="middle">
                                        <!-- ニックネーム表示 -->
                                        <p class="name">{{$user->profile->nickname}}</p>
                                        <!-- 性別を表示 -->
                                        @if ($user->profile->gender == 0)
                                        <!-- genderが1だった場合は未設定 -->
                                        <p class="gender">未設定  <i class="far fa-question-circle h5"></i></p>
                                        @elseif ($user->profile->gender == 1)
                                        <!-- genderが2だった場合は男 -->
                                        <p class="gender">男性  <i class="fas fa-male h5"></i></p>
                                        @elseif ($user->profile->gender == 2)
                                        <!-- genderが2だった場合は女 -->
                                        <p class="gender">女性  <i class="fas fa-female h5"></i></p>
                                        @endif
                                        <!-- 年齢表示 -->
                                        <p class="age">( {{ $user->profile->age }} )</p>
                                    </div>
                                    <div class="bottom">
                                        <!-- フリーコメント表示 -->
                                        <p class="comment mt-3 ml-2">{{$user->profile->comment}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <ul class="nav nav-tabs mx-5">
                            <li class="nav-item border">
                                <a href="#idea_post" class="nav-link active" data-toggle="tab">投稿したアイデア</a>
                            </li>
                            <li class="nav-item border">
                                <a href="#idea_fav" class="nav-link" data-toggle="tab">いいねしたアイデア</a>
                            </li>
                        </ul>
                        <div class="tab-content mx-5">
                            <div id="idea_post" class="tab-pane active">
                                {{-- 投稿したアイデアの表示 --}}
                                <div id="content" class="container mt-3">
                                    <div class="photopile_wrapper">
                                        <ul class="photopile">
                                            @foreach($user->ideas as $idea)
                                            <li class="ideas my-3">
                                                <a href="#"
                                                    class="idea {{ $idea->color_name['bg'] }} {{ $idea->color_name['text'] }}"
                                                    style="color:white" data-toggle="modal" data-target="#modalPost"
                                                    nickname="{{ $idea->user->profile->nickname }}" id="{{ $idea->id }}"
                                                    user-id="{{ $idea->user_id }}" job-id="{{ $idea->job_id }}"
                                                    title="{{ $idea->title }}" body="{{ $idea->body }}"
                                                    created-at="{{ $idea->created_at }}"
                                                    picture-path="{{ $idea->user->profile->picture_path }}"
                                                    user="{{ $idea->user }}"" profile="{{ $idea->user->profile }}">
                                                    <div style="position:relative">
                                                        <p
                                                            style="position:absolute; top:50%; left:50%; transform : translate(-50%, -50%);">
                                                            {{$idea->title}}</p><img src="/images/frame.png" alt="">
                                                    </div>
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>
                                        <div class="modal fade" id="modalPost" tabindex="-1" role="dialog"
                                            aria-labelledby="modalPostTitle" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content" id="modalBack">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="modalLongTitle"></h5>
                                                        <button type="button" class="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        ...
                                                    </div>
                                                    <div class="modal-footer">
                                                        @if (Auth::check() && Auth::user()->id == $user->id)
                                                        <button type="button" class="btn btn-secondary"
                                                            id="button-edit">編集する</button>
                                                        @else
                                                        <a class="btn btn-secondary button-chat" href="javascript:;" id="button-chat2">チャットする</a>

                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{-- jqueryの呼び出し --}}
                                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
                                    </script>
                                    {{-- <script src="/js/app.js"></script> --}}
                                    {{-- jquery-uiの呼び出し --}}
                                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
                                        integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
                                        crossorigin="anonymous"></script>
                                    {{-- photopileの呼び出し --}}
                                    <script src="/js/photopile_wo_main.js"></script>
                                    {{-- wo_main.jsの呼び出し --}}
                                    <script src="/js/wo_main.js"></script>
                                </div>
                                {{-- /投稿したアイデアの表示   --}}
                            </div>
                            <div id="idea_fav" class="tab-pane">
                                {{-- いいねしたアイデアの表示 --}}
                                <div id="content" class="container mt-3">
                                    <div class="photopile_wrapper">
                                        <ul class="photopile">
                                            @foreach($user->favorites as $idea)
                                            <li class="ideas my-3">
                                                <a href="#"
                                                    class="idea2 {{ $idea->color_name['bg'] }} {{ $idea->color_name['text'] }}"
                                                    style="color:white" data-toggle="modal"
                                                    data-target="#modalFav-{{ $idea->id }}"
                                                    nickname="{{ $idea->user->profile->nickname }}" id="{{ $idea->id }}"
                                                    user-id="{{ $idea->user_id }}" job-id="{{ $idea->job_id }}"
                                                    title="{{ $idea->title }}" body="{{ $idea->body }}"
                                                    created-at="{{ $idea->created_at }}"
                                                    picture-path="{{ $idea->user->profile->picture_path }}"
                                                    user="{{ $idea->user }}"" profile="{{ $idea->user->profile }}">
                                                    <div style="position:relative">
                                                        <p
                                                            style="position:absolute; top:50%; left:50%; transform : translate(-50%, -50%);">
                                                            {{$idea->title}}</p><img src="/images/frame.png" alt="">
                                                    </div>
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>
                                        @foreach($user->favorites as $idea)
                                        <div class="modal fade" id="modalFav-{{ $idea->id }}" tabindex="-1"
                                            role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content modalBackfav" id="modalBackfav">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="modalLongTitle"></h5>
                                                        <button type="button" class="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        ...
                                                    </div>
                                                    <div class="modal-footer">
                                                        <a class="btn btn-secondary button-chat" id="button-chat" href="javascript:;"">チャットする</a>
                                                        <div class=" mt-3 ml-3">
                                                            @if (Auth::check() && $idea->favorites->contains(function
                                                            ($user) {
                                                            return $user->id === Auth::user()->id;
                                                            }))
                                                            <i
                                                                class="favorite fas fa-heart fa-lg text-danger js-dislike"></i>
                                                            @else
                                                            <i
                                                                class="favorite far fa-heart fa-lg text-danger js-like"></i>
                                                            @endif
                                                            <input class="idea-id" type="hidden" value="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                    {{-- jquery-uiの呼び出し --}}
                                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
                                        integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
                                        crossorigin="anonymous"></script>
                                    {{-- photopileの呼び出し --}}
                                    <script src="/js/photopile_wo_main.js"></script>
                                    {{-- main.jsの呼び出し --}}
                                    <script src="/js/wo_main2.js"></script>
                                </div>
                                {{-- /いいねしたアイデアの表示 --}}
                            </div>
                        </div>

                        {{-- lightbox.jsの呼び出し --}}
                        <script src="/js/lightbox.js"></script>
                        <script src="https://code.jquery.com/jquery-1.12.4.min.js" type="text/javascript"></script>
                        {{-- profile.jsの呼び出し --}}
                        <script src="/js/profile.js"></script>
                        @endsection

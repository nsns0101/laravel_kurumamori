@extends('layouts.app')
{{-- @extends('layouts.partial.info_menu') --}}

@section('content')

<br />
<br />

<!-- intro section -->
<section id="intro" class="section intro">
    <div class="row">
        <div class="col-md-2">
            @include('layouts.partial.info_menu')
        </div>
        <div class="col-md-8">
            <br />
            <br />
            <h3 style="color:forestgreen">의료 정보</h3>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="text-center card-header" style="background-color:green; color:white">
                            질병 사항
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="true">
                                Dropdown
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a href="#" data-value="action">Action</a></li>
                                <li><a href="#" data-value="another action">Another action</a></li>
                                <li><a href="#" data-value="something else here">Something else here</a></li>
                                <li><a href="#" data-value="separated link">Separated link</a></li>
                            </ul>
                        </div>


                        {{-- <div class="card-footer text-muted">
                            2 days ago
                        </div> --}}
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

@stop

@section('script')
<script>
    $(".dropdown-menu li a").click(function(){
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });


</script>
@stop
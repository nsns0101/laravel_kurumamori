@extends('layouts.app')

@section('content')
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

<section id="intro" class="section intro" style="padding: 50px 0px 0px 0px;">
<!-- Content Row -->
<div class="row">
    <!-- Page Heading -->
    <div class="col-md-2">
        @include('layouts.partial.info_menu')
    </div>
    <div class="col-md-10">
        <br />
        <br />
        <br />
        <h3> 운전 점수 확인</h3>
        <div class="row">
            <div class="col-md-6"></div>

            <div class="col-md-2 text-center">
                <p style="font-size:24px;margin-top:13px; margin-right:15px;color:blue;font-weight:800;">
                보험 만기일
                </p>
            </div>
            <br/>
            <div class="col-md-2">
                <div class="form-group {{ $errors->has('drive_date') ? 'has-error' : '' }}">
                    <!-- 시작시 기본 날짜 설정은 value를 이용 -->
                    <input type="text" name="drive_date" class="form-control datePicker"  readonly>
                    <p style="color:red">
                        {!! $errors->first('drive_date', '<span class="form-error">:message</span>') !!}
                    </p>
                </div>
            </div>
            <div class="col-md-1"></div>

            <div class="col-xl-5 col-lg-5 col-md-4">

                <!-- Area Chart -->
                <div class="card shadow" style="width:600px">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                    <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                    <div class=""></div>
                                </div>
                            </div>
                            <canvas id="myAreaChart" width="693" height="320" class="chartjs-render-monitor"
                                style="display: block; width: 693px; height: 320px;"></canvas>
                        </div>
                        <hr>
                        Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code> file.
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4">

                <!-- Bar Chart -->
                <div class="card shadow" style="width:600px">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
                    </div>
                    <div class="card-body">
                        <div class="chart-bar">
                            <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                    <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                    <div class=""></div>
                                </div>
                            </div>
                            <canvas id="myBarChart" width="693" height="320" class="chartjs-render-monitor"
                                style="display: block; width: 693px; height: 320px;"></canvas>
                        </div>
                        <hr>
                        Styling for the bar chart can be found in the <code>/js/demo/chart-bar-demo.js</code> file.
                    </div>
                </div>
            </div>
            <div class="col-xl-8 col-lg-7 col-md-4">

                <!-- Donut Chart -->
                <div class="col-xl-4 col-lg-5">
                    <div class="card shadow mb-4">
                        <!-- Card Header - Dropdown -->
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="chart-pie pt-4">
                                <div class="chartjs-size-monitor">
                                    <div class="chartjs-size-monitor-expand">
                                        <div class=""></div>
                                    </div>
                                    <div class="chartjs-size-monitor-shrink">
                                        <div class=""></div>
                                    </div>
                                </div>
                                <canvas id="myPieChart" width="313" height="253" class="chartjs-render-monitor"
                                    style="display: block; width: 313px; height: 253px;"></canvas>
                            </div>
                            <hr>
                            Styling for the donut chart can be found in the <code>/js/demo/chart-pie-demo.js</code>
                            file.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    @endsection

    @section('script')
    <script src="/js/demo/chart-area-demo.js"></script>
    <script src="/js/demo/chart-bar-demo.js"></script>
    <script src="/js/demo/chart-pie-demo.js"></script>

    @stop
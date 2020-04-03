@extends('layouts.partial.info_menu')

@section('content')

<br />
<br />
<br />
<br />
<br />

<div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800" style="margin-left:20px;">Charts</h1>
    <p style="color:black"> 운점점수를 확인하는 공간입니다.

        <!-- Content Row -->
        <div class="row">

            <div class="col-xl-8 col-lg-7">

                <!-- Area Chart -->
                <div class="card shadow mb-4">
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

                <!-- Bar Chart -->
                <div class="card shadow mb-4">
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
                        Styling for the donut chart can be found in the <code>/js/demo/chart-pie-demo.js</code> file.
                    </div>
                </div>
            </div>
        </div>

</div>
@endsection

@section('script')
<script src="/js/demo/chart-area-demo.js"></script>
<script src="/js/demo/chart-bar-demo.js"></script>
<script src="/js/demo/chart-pie-demo.js"></script>

@stop
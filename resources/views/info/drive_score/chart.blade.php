<div class="row">
    <!-- Area Chart -->
    <div class="col-xl-4 col-lg-4 col-md-4">
        <div class="card shadow" style="width:600px">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">위험 카운트</h6>
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
                {{-- Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code> file. --}}
                <p>최근 5일간의 급 가속, 급 감속, 졸음, 신고 데이터입니다.</p>
            </div>
        </div>
    </div>
    <!-- Bar Chart -->
    <div class="col-xl-4 col-lg-4 col-md-4">
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
    <!-- Donut Chart -->
    <div class="col-xl-4 col-lg-4 col-md-4">
            <div class="card shadow" style="width:600px">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">최근 5일동안 위험요소 빈도</h6>
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
                    <p>일별 위험요소를 %로 나타낸 데이터입니다.</p>

                </div>
            </div>
    </div>
</div>
<br/>
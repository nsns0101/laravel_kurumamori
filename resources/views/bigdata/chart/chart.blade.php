<!-- 그래프 메뉴 -->
<div class="chart-container">
    <!-- 조회 옵션 버튼 -->
    <div class="search-option-btn">
        <button class="btn btn-primary">통합</button>
        <button class="btn btn-info">졸음운전</button>
        <button class="btn btn-info">급정거 · 가속</button>
        <button class="btn btn-info">사고</button>
    </div>
    <br>
    <!-- 그래프 -->
    <div class="row">
        <div class="col-md-4 col-3">
            <!-- 연령대 그래프 -->
            <div class="card">
                <div class="card-header">
                    연령대 그래프
                </div>
                <div class="card-body">
                    <h6 class="card-title">어이어이 제대로 작동하라구?</h6>
                    <div class="age-chart-container">
                        <canvas id="bigDataAgeChart" width="313" height="253" class="agePieChart" style="display: block; width: 313px; height: 253px;"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <!-- 시간대 그래프 -->
        <div class="col-md-4 col-3">
            <div class="card">
                <div class="card-header">
                    시간대 그래프
                </div>
                <div class="card-body">
                    <h6 class="card-title">어이어이 제대로 작동하라구?</h6>
                    <div class="age-chart-container">
                        <canvas id="bigDataTimeChart" width="313" height="253" class="timePieChart" style="display: block; width: 313px; height: 253px; "></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
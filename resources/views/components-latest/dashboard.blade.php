@extends('layouts-latest.index')
@section('content')
    <div class="container-fluid">
        <div class="dashboard-header">
            <h3 class="fw-bold ps-1 dashboard-title">Dashboard</h3>
        </div>

        {{-- ROW 1 --}}

        {{--  --}}
        <div class="row my-3">

            {{-- Emission vs Target --}}
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between card-title-container">
                            <h5 class="card-title mb-0">Emission vs Target</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm bg-dark">
                                    <option value="all">All</option>
                                    <option value="plant1">Plant 1</option>
                                    <option value="plant2">Plant 2</option>
                                    <option value="plant3">Plant 3</option>
                                    <option value="plant4">Plant 4</option>
                                    <option value="plant5">Plant 5</option>
                                </select>
                            </div>
                        </div>
                        <p>daily</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                                aria-valuemin="0" aria-valuemax="100" style="width:40%">
                                40% Complete (success)
                            </div>
                        </div>
                        <p class="justify-content-end">1000/7800</p>
                        <p>monthly</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50"
                                aria-valuemin="0" aria-valuemax="100" style="width:50%">
                                50% Complete (info)
                            </div>
                        </div>
                        <p class="justify-content-end">1000/7800</p>
                        <p>yearly</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                aria-valuemin="0" aria-valuemax="100" style="width:60%">
                                60% Complete (warning)
                            </div>
                        </div>
                        <p class="justify-content-end">1000/7800</p>
                    </div>
                </div>
            </div>

            {{-- Carbon Footprint --}}
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between card-title-container">
                            <h5 class="card-title">Carbon Footprint</h5>
                            <div class="d-flex gap-1">
                                <div>
                                    <select name="" id="" class="form-select form-select-sm bg-dark">
                                        <option value="plant">Plant</option>
                                        <option value="plant1">Plant 1</option>
                                        <option value="plant2">Plant 2</option>
                                        <option value="plant3">Plant 3</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="" id="" class="form-select form-select-sm bg-dark">
                                        <option value="area">Area</option>
                                        <option value="area1">Area 1</option>
                                        <option value="area2">Area 2</option>
                                        <option value="area3">Area 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div id="chart2"></div>
                    </div>
                </div>
            </div>

            {{-- Emissions by Category --}}
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between card-title-container">
                            <h5 class="card-title mb-0">Emmissions by Category</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm bg-dark">
                                    <option value="plant">Plant</option>
                                    <option value="plant1">Plant 1</option>
                                    <option value="plant2">Plant 2</option>
                                    <option value="plant3">Plant 3</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart3"></div>
                        <div class="d-flex flex-column mx-4 mt-5">
                            <div class="d-flex justify-content-between custom-legend-1">
                                <div class="apexcharts-legend-series custom" style="margin: 5px 0;" rel="1"
                                    seriesname="manufacturing" data:collapsed="false">
                                    <span class="apexcharts-legend-marker"
                                        style="background: rgb(0, 143, 251) !important; color: rgb(0, 143, 251)height: 30px; width: 30px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"
                                        rel="1" data:collapsed="false">
                                    </span>
                                    <span class="apexcharts-legend-text"
                                        style="color: rgb(226, 232, 240); font-size: 40px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                        rel="1" i="0" data:default-text="manufacturing"
                                        data:collapsed="false"> Manufacturing
                                    </span>
                                </div>
                                <p class='chart3-value' id="manufacturing-value">123</p>
                            </div>
                            <div class="d-flex justify-content-between custom-legend-1">
                                <div class="apexcharts-legend-series custom" style="margin: 5px 0;" rel="2"
                                    seriesname="building" data:collapsed="false">
                                    <span class="apexcharts-legend-marker"
                                        style="background: rgb(0, 227, 150) !important; color: rgb(0, 227, 150); height: 30px; width: 30px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"
                                        rel="2" data:collapsed="false">
                                    </span>
                                    <span class="apexcharts-legend-text"
                                        style="color: rgb(226, 232, 240); font-size: 40px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                        rel="2" i="1" data:default-text="building"
                                        data:collapsed="false"> Building
                                    </span>
                                </div>

                                <p class='chart3-value' id="building-value">123</p>
                            </div>
                            <div class="d-flex justify-content-between custom-legend-1">
                                <div class="apexcharts-legend-series custom" style="margin: 5px 0;" rel="3"
                                    seriesname="utility" data:collapsed="false">
                                    <span class="apexcharts-legend-marker"
                                        style="background: rgb(254, 176, 25) !important; color: rgb(254, 176, 25); height: 30px; width: 30px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"
                                        rel="3" data:collapsed="false">
                                    </span>
                                    <span class="apexcharts-legend-text"
                                        style="color: rgb(226, 232, 240); font-size: 40px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                        rel="3" i="2" data:default-text="utility"
                                        data:collapsed="false"> Utility
                                    </span>
                                </div>
                                <p class='chart3-value' id="utility-value">123</p>
                            </div>
                            <div class="d-flex justify-content-between custom-legend-1">
                                <div class="apexcharts-legend-series custom" style="margin: 5px 0;" rel="4"
                                    seriesname="vehicles" data:collapsed="false">
                                    <span class="apexcharts-legend-marker"
                                        style="background: rgb(255, 69, 96) !important; color: rgb(255, 69, 96); height: 30px; width: 30px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"
                                        rel="4" data:collapsed="false">
                                    </span>
                                    <span class="apexcharts-legend-text"
                                        style="color: rgb(226, 232, 240); font-size: 40px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                        rel="4" i="3" data:default-text="vehicles"
                                        data:collapsed="false"> Vehicles
                                    </span>
                                </div>
                                <p class='chart3-value' id="vehicles-value">123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {{-- Total Emission Graph --}}
        <div class="row my-3">
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between card-title-container">
                            <h5 class="card-title mb-0">Total Emission Graph</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm bg-dark">
                                    <option value="all">All</option>
                                    <option value="plant1">Plant 1</option>
                                    <option value="plant2">Plant 2</option>
                                    <option value="plant3">Plant 3</option>
                                    <option value="plant4">Plant 4</option>
                                    <option value="plant5">Plant 5</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart4"></div>
                    </div>
                </div>
            </div>

            {{-- Total Emission/Offset --}}
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between card-title-container">
                            <h5 class="card-title mb-0">Total Emission/Offset</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm bg-dark">
                                    <option value="all">All</option>
                                    <option value="plant1">Plant 1</option>
                                    <option value="plant2">Plant 2</option>
                                    <option value="plant3">Plant 3</option>
                                    <option value="plant4">Plant 4</option>
                                    <option value="plant5">Plant 5</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart5"></div>
                    </div>
                </div>
            </div>

            {{-- CO2 Tax --}}
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between card-title-container">
                            <h5 class="card-title mb-0">CO2 Tax</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm bg-dark">
                                    <option value="all">All</option>
                                    <option value="plant1">Plant 1</option>
                                    <option value="plant2">Plant 2</option>
                                    <option value="plant3">Plant 3</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart6" class="mt-large"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        window.Promise ||
            document.write(
                '<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"><\/script>'
            )
        window.Promise ||
            document.write(
                '<script src="https://cdn.jsdelivr.net/npm/eligrey-classlist-js-polyfill@1.2.20171210/classList.min.js"><\/script>'
            )
        window.Promise ||
            document.write(
                '<script src="https://cdn.jsdelivr.net/npm/findindex_polyfill_mdn"><\/script>'
            )
    </script>

    <script></script>
@endsection

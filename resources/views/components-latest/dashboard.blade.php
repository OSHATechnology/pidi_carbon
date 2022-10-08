@extends('layouts-latest.index')
@section('content')
    <div class="container-fluid">
        <div class="dashboard-header">
            <h3 class="fw-bold ps-1 dashboard-title">Dashboard</h3>
        </div>
        <div class="row my-3">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <h5 class="card-title mb-0">Realtime Emission</h5>
                            <div class="d-flex gap-1">
                                <select name="" id="" class="form-select bg-dark form-select-sm">
                                    <option value="karawang1">Karawang1</option>
                                    <option value="karawang2">Karawang2</option>
                                    <option value="karawang3">Karawang3</option>
                                    <option value="sunter1">Sunter1</option>
                                    <option value="sunter2">Sunter2</option>
                                </select>
                                <select name="" id="" class="form-select bg-dark form-select-sm">
                                    <option value="daily">Daily</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart4"></div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <h5 class="card-title">Carbon Footprint</h5>
                            <div class="d-flex gap-1">
                                <select name="" id="select-plant-chart2" class="form-select bg-dark form-select-sm">
                                    <option value="karawang1">Karawang1</option>
                                    <option value="karawang2">Karawang2</option>
                                    <option value="karawang3">Karawang3</option>
                                    <option value="sunter1">Sunter1</option>
                                    <option value="sunter2">Sunter2</option>
                                </select>
                                <select name="" id="" class="form-select bg-dark form-select-sm">
                                    <option value="daily">Daily</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                                <select name="" id="" class="form-select bg-dark form-select-sm">
                                    <option value="manufacturing">Manufacturing</option>
                                    <option value="building">Building</option>
                                    <option value="utility">Utility</option>
                                    <option value="digital">Digital</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart2"></div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center card-title-container">
                                <h5 class="card-title mb-0">Total Emission</h5>
                                <div>
                                    <select name="" id="select-chart1" class="form-select bg-dark form-select-sm">
                                        <option value="daily">Daily</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>
                            </div>
                            <div id="chart1" class="mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <h5 class="card-title mb-0">Emission Accumulation</h5>
                            <div>
                                <select name="" id="select-chart6" class="form-select bg-dark form-select-sm">
                                    <option value="daily">Daily</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                        </div>
                        <div class="row2-height">
                            <div id="chart6"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <h5 class="card-title mb-0">Total Emission/Offset</h5>
                            <div>
                                <select name="" id="select-chart5" class="form-select bg-dark form-select-sm">
                                    {{-- <option value="karawang1">Karawang1</option>
                                    <option value="karawang2">Karawang2</option>
                                    <option value="karawang3">Karawang3</option>
                                    <option value="sunter1">Sunter1</option>
                                    <option value="sunter2">Sunter2</option> --}}
                                </select>
                            </div>
                        </div>
                        <div class="row2-height">
                            <div id="chart5"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <h5 class="card-title">Top Emmissions by Area</h5>
                            <div>
                                <select name="" id="select-chart3" class="form-select bg-dark form-select-sm">
                                    <option value="karawang1">Karawang1</option>
                                    <option value="karawang2">Karawang2</option>
                                    <option value="karawang3">Karawang3</option>
                                    <option value="sunter1">Sunter1</option>
                                    <option value="sunter2">Sunter2</option>
                                </select>
                            </div>
                        </div>
                        <div class="row2-height">
                            <div id="chart3">
                            </div>
                        </div>
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
    <script src="/assets/data/data.js"></script>
@endsection

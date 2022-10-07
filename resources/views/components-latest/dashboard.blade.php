@extends('layouts-latest.index')
@section('content')
    <div class="container-fluid">
        <div class="dashboard-header">
            <h3 class="fw-bold ps-1 text-white">Dashboard</h3>
        </div>
        <div class="row my-3">
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Emission Accumulation</h5>
                            <div>
                                <select name="" id="select-chart6" class="form-select form-select-sm">
                                    <option value="daily">Daily</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart6"></div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">Carbon Footprint</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    <option value="karawang1">Karawang1</option>
                                    <option value="karawang2">Karawang2</option>
                                    <option value="karawang3">Karawang3</option>
                                    <option value="sunter1">Sunter1</option>
                                    <option value="sunter2">Sunter2</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    <option value="daily">Daily</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
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
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">Top Emmissions by Area</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    <option value="karawang1">Karawang1</option>
                                    <option value="karawang2">Karawang2</option>
                                    <option value="karawang3">Karawang3</option>
                                    <option value="sunter1">Sunter1</option>
                                    <option value="sunter2">Sunter2</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Total Emission/Offset</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    <option value="karawang1">Karawang1</option>
                                    <option value="karawang2">Karawang2</option>
                                    <option value="karawang3">Karawang3</option>
                                    <option value="sunter1">Sunter1</option>
                                    <option value="sunter2">Sunter2</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart5"></div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Realtime Emission</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    <option value="karawang1">Karawang1</option>
                                    <option value="karawang2">Karawang2</option>
                                    <option value="karawang3">Karawang3</option>
                                    <option value="sunter1">Sunter1</option>
                                    <option value="sunter2">Sunter2</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
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
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Total Emission</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    <option value="daily">Daily</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

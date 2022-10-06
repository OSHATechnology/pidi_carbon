@extends('layouts-latest.index')
@section('content')
    <div class="container-fluid">
        <div class="dashboard-header">
            <h3 class="fw-bold ps-1 text-white">Dashboard</h3>
        </div>

        {{-- ROW 1 --}}

        {{--  --}}
        <div class="row my-3">
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Emission vs Target</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
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
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">Carbon Footprint</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    <option value="plant">Plant</option>
                                    <option value="plant1">Plant 1</option>
                                    <option value="plant2">Plant 2</option>
                                    <option value="plant3">Plant 3</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    <option value="area">Area</option>
                                    <option value="area1">Area 1</option>
                                    <option value="area2">Area 2</option>
                                    <option value="area3">Area 3</option>
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
                            <h5 class="card-title">Emmissions by Category</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    <option value="plant">Plant</option>
                                    <option value="plant1">Plant 1</option>
                                    <option value="plant2">Plant 2</option>
                                    <option value="plant3">Plant 3</option>
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
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Total Emission Graph</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
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
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Total Emission/Offset</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
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
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">CO2 Tax</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
                                    All
                                    <option value="plant1">Plant 1</option>
                                    <option value="plant2">Plant 2</option>
                                    <option value="plant3">Plant 3</option>
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

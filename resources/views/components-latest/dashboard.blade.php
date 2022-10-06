@extends('layouts-latest.index')
@section('content')
    <div class="container-fluid">
        <div class="dashboard-header">
            <h3 class="fw-bold ps-1 text-white">Dashboard</h3>
        </div>

        {{-- ROW 1 --}}

        {{--  --}}
        <div class="row my-3">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Emission Accumulation</h5>
                            <div>
                                <select name="" id="" class="form-select form-select-sm">
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
            <div class="col-4">
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
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">Top Emmissions by Category</h5>
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
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Realtime Emmision</h5>
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
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">CO2 Tax</h5>
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
                        <div id="chart1"></div>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">Emission Mapping</h5>
                            <div>
                                <iframe usemap="workmap" width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Bandung+(TMMIN)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                <map name="workmap">
                                    <area shape="circle" coords="337,300,44" style="background-color:#000" alt="Cup of coffee">
                                </map>
                            </div>
                        </div>
                        <div id="chart7"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

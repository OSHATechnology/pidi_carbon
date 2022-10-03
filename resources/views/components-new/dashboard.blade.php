@extends('layouts-new.index')
@section('content')
    <div class="container-fluid">
        <div class="dashboard-header">
            <h1>Carbon Footprint Dashboard</h1>
        </div>

        {{--  --}}
        <div class="row my-3">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="w-40">
                                <h5 class="card-title">Total Emission</h5>
                                <div class="d-flex flex-column justify-content-center">
                                    <p class="large text-center">114,739.14</p>
                                    <p class="lighter text-center">kg CO2e</p>
                                </div>
                            </div>
                            <div class="w-60 d-flex justify-content-end">
                                <div class="w-70 d-flex flex-column">
                                    <h5 class="card-title">Yesterday's Total Emission</h5>
                                    <p class="large text-center text-danger">10.10%</p>
                                    <p class="lighter text-center">110,901.56 kg</p>
                                    <p class="lighter text-center">kg CO2e</p>
                                </div>
                                <div class="w-30 d-flex justify-content-center align-items-center">
                                    <div class="icon-container">
                                        <i class="bi bi-car-front large"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row h-100">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Emission Generated (in Total)</h5>
                                <div id="chart1"></div>
                                <h5 class="text-center text-success">Good</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title mb-3">Plant</h5>
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                                        <label class="form-check-label" for="flexCheckDefault">Sunter 1</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                        <label class="form-check-label" for="flexCheckChecked">Sunter 2</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                        <label class="form-check-label" for="flexCheckChecked">Karawang 1</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                        <label class="form-check-label" for="flexCheckChecked">Karawang 2</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {{--  --}}
        <div class="row my-3">
            <div class="col">
                <div class="card with-border">
                    <div class="card-body">
                        <div class="card-title d-flex justify-content-between">
                            <p class="small normal lighter">CO2 Emission</p>
                            <p class="small normal">Data per 1 October 2022</p>
                        </div>
                        <div id="chart2"></div>
                        <h5 class="text-center text-success">Painting</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card with-border">
                    <div class="card-body">
                        <div class="card-title d-flex justify-content-between">
                            <p class="small normal lighter">CO2 Emission</p>
                            <p class="small normal">Data per 1 October 2022</p>
                        </div>
                        <div id="chart3"></div>
                        <h5 class="text-center text-success">Welding</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card with-border">
                    <div class="card-body">
                        <div class="card-title d-flex justify-content-between">
                            <p class="small normal lighter">CO2 Emission</p>
                            <p class="small normal">Data per 1 October 2022</p>
                        </div>
                        <div id="chart4"></div>
                        <h5 class="text-center text-success">Press</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card with-border">
                    <div class="card-body">
                        <div class="card-title d-flex justify-content-between">
                            <p class="small normal lighter">CO2 Emission</p>
                            <p class="small normal">Data per 1 October 2022</p>
                        </div>
                        <div id="chart5"></div>
                        <h5 class="text-center text-success">Assy</h5>
                    </div>
                </div>
            </div>
        </div>


        {{--  --}}
        <div class="row my-3">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Emission Breakdown</h5>
                        <div id="chart6"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row h-100">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Total Carbon in Energy</h5>
                                <div class="mt-5">
                                    <div id="chart7"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Emission Metrics</h5>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>BREAKDOWN</th>
                                            <th class="text-center">THIS PERIOD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PAINTING</td>
                                            <td class="d-flex flex-column align-items-center">
                                                <p class="text-success">- 2%</p>
                                                <p><small>16.200 TON</small></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>WELDING</td>
                                            <td class="d-flex flex-column align-items-center">
                                                <p class="text-danger">+ 14%</p>
                                                <p><small>16.200 TON</small></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>PRESS</td>
                                            <td class="d-flex flex-column align-items-center">
                                                <p class="text-success">- 3%</p>
                                                <p><small>16.200 TON</small></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ASSY</td>
                                            <td class="d-flex flex-column align-items-center">
                                                <p class="text-danger">+ 20%</p>
                                                <p><small>16.200 TON</small></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {{--  --}}
        <div class="row my-3">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Average Emission Generated in Percentace</h5>
                        <div id="chart8"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Average Emission Generated</h5>
                        <div id="chart9"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row my-3">
            <div class="card">
                <div class="card-body">
                    <div class="col-12">
                        <div id="chart10"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

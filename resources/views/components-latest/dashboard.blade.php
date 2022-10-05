@extends('layouts-latest.index')
@section('content')
    <div class="container-fluid">
        <div class="dashboard-header">
            <h1>Dashboard Carbon Footprint</h1>
        </div>

        {{-- ROW 1 --}}

        {{--  --}}
        <div class="row my-3">
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">CO2 Tax</h5>
                        <div id="chart1"></div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">Carbon Footprint</h5>
                            <h5>2,412,314t CO2e</h5>
                        </div>
                        <div id="chart2"></div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div id="chart3"></div>
                    </div>
                </div>
            </div>
        </div>



        {{-- ROW 2 --}}
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
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Emission/Offset</h5>
                        <div id="chart4"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Emission Graph</h5>
                        <div id="chart5"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Emission vs Target</h5>
                        <p>daily</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                                aria-valuemin="0" aria-valuemax="100" style="width:40%">
                                40% Complete (success)
                            </div>
                        </div>
                        <p>monthly</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50"
                                aria-valuemin="0" aria-valuemax="100" style="width:50%">
                                50% Complete (info)
                            </div>
                        </div>
                        <p>yearly</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                aria-valuemin="0" aria-valuemax="100" style="width:60%">
                                60% Complete (warning)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

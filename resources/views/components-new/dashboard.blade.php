@extends('layouts-new.index')
@section('content')
    <div class="container-fluid">
        <div class="dashboard-header">
            <h1>The Dashboard</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo.</p>
        </div>


        {{--  --}}
        <div class="row my-3">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="w-40">
                                <h5 class="card-title">Title</h5>
                                <div class="d-flex flex-column justify-content-center">
                                    <p class="large text-center">115,739.15</p>
                                    <p class="lighter text-center">kg CO2e</p>
                                </div>
                            </div>
                            <div class="w-60 d-flex justify-content-end">
                                <div class="w-70 d-flex flex-column">
                                    <h5 class="card-title">Title</h5>
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
                                <h5 class="card-title">Title</h5>
                                <div id="chart1"></div>
                                <h5 class="text-center text-success">
                                    Good
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title mb-3">Title</h5>
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Checked checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Checked checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Checked checkbox
                                        </label>
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
                            <p class="small normal lighter">CO2 abc</p>
                            <p class="small normal">Data per 1 October 2022</p>
                        </div>
                        <div id="chart2"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card with-border">
                    <div class="card-body">
                        <div class="card-title d-flex justify-content-between">
                            <p class="small normal lighter">CO2 abc</p>
                            <p class="small normal">Data per 1 October 2022</p>
                        </div>
                        <div id="chart3"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card with-border">
                    <div class="card-body">
                        <div class="card-title d-flex justify-content-between">
                            <p class="small normal lighter">CO2 abc</p>
                            <p class="small normal">Data per 1 October 2022</p>
                        </div>
                        <div id="chart4"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card with-border">
                    <div class="card-body">
                        <div class="card-title d-flex justify-content-between">
                            <p class="small normal lighter">CO2 abc</p>
                            <p class="small normal">Data per 1 October 2022</p>
                        </div>
                        <div id="chart5"></div>
                    </div>
                </div>
            </div>
        </div>


        {{--  --}}
        <div class="row my-3">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <div id="chart6"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row h-100">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <div class="mt-5">
                                    <div id="chart7"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
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
                                                <p class="text-danger">- 2%</p>
                                                <p><small>16.200 TON</small></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>WELDING</td>
                                            <td class="d-flex flex-column align-items-center">
                                                <p class="text-success">+ 14%</p>
                                                <p><small>16.200 TON</small></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>PRESS</td>
                                            <td class="d-flex flex-column align-items-center">
                                                <p class="text-danger">-3%</p>
                                                <p><small>16.200 TON</small></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ASSY</td>
                                            <td class="d-flex flex-column align-items-center">
                                                <p class="text-success">+ 20%</p>
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
                        <h5 class="card-title">Title</h5>
                        <div id="chart8"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
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

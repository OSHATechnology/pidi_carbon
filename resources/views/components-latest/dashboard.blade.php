@extends('layouts-latest.index')
@section('content')
    <div class="container-fluid">
        <div class="row my-3">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <h5 class="card-title" data-bs-toggle="tooltip" data-bs-placement="right"
                                data-bs-title="Menampilkan total emisi untuk setiap area">
                                Emission Accumulation <i class="bi bi-info-circle text-white"></i>
                            </h5>
                            <div>
                                <select name="" id="select-chart6" class="form-select bg-dark form-select-sm">
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
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <h5 class="card-title" data-bs-toggle="tooltip" data-bs-placement="right"
                                data-bs-title="Menampilkan nilai emisi setiap plant berdasarkan detail nilai emisi maing-masing area">
                                Top Emmissions by Area <i class="bi bi-info-circle text-white"></i></h5>
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
                        <div id="chart3"></div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <h5 class="card-title" data-bs-toggle="tooltip" data-bs-placement="right"
                                data-bs-title="Menampilkan total emisi berbanding dengan target emisi yang sudah ditentukan">
                                Total Emission/Offset <i class="bi bi-info-circle text-white"></i></h5>
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
                        <div id="chart5"></div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Row 2 --}}
        <div class="row my-3">
            <div class="col-6">
                <div class="row row-cols-1 gap-3">
                    <div class="col h-50">
                        <div class="card smaller">
                            <div class="card-body">
                                <div
                                    class="d-flex justify-content-between align-items-center card-title-container with-date">
                                    <div class="d-flex flex-column">
                                        <h5 class="card-title" data-bs-toggle="tooltip"
                                            data-bs-custom-class="custom-tooltip" data-bs-placement="right"
                                            data-bs-title="Menampilkan nilai emisi setiap area pada masing-masing plantnya">
                                            Carbon Footprint <i class="bi bi-info-circle text-white"></i></h5>
                                        <p id="chart2Time" class="small-date"></p>
                                    </div>
                                    <div class="d-flex gap-1">
                                        <select name="" id="select-plant-chart2"
                                            class="form-select bg-dark form-select-sm">
                                            <option value="karawang1">Karawang1</option>
                                            <option value="karawang2">Karawang2</option>
                                            <option value="karawang3">Karawang3</option>
                                            <option value="sunter1">Sunter1</option>
                                            <option value="sunter2">Sunter2</option>
                                        </select>
                                        <select name="" id="select-time-chart2"
                                            class="form-select bg-dark form-select-sm">
                                            <option value="daily">Daily</option>
                                            <option value="monthly">Monthly</option>
                                            <option value="yearly">Yearly</option>
                                        </select>
                                        <select name="" id="select-area-chart2"
                                            class="form-select bg-dark form-select-sm">
                                            <option value="all">All</option>
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
                    <div class="col h-50">
                        <div class="card smaller">
                            <div class="card-body">
                                <div
                                    class="d-flex justify-content-between align-items-center card-title-container with-date">
                                    <div class="d-flex flex-column">
                                        <h5 class="card-title" data-bs-toggle="tooltip" data-bs-placement="right"
                                            data-bs-title="Menampilkan nilai emisi berbanding dengan jumlah produksi mobil">
                                            Total Emission <i class="bi bi-info-circle text-white"></i></h5>
                                        <p id="chart1Time" class="small-date"></p>
                                    </div>
                                    <div>
                                        <select name="" id="select-chart1"
                                            class="form-select bg-dark form-select-sm">
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
            <div class="col-6">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container with-date">
                            <div class="d-flex flex-column">
                                <h5 class="card-title" data-bs-toggle="tooltip" data-bs-placement="right"
                                    data-bs-title="Menampilkan data total emisi secara realtime pada setiap plantnya">
                                    Realtime Emission <i class="bi bi-info-circle text-white"></i></h5>
                                <p id="chart4Time" class="small-date"></p>
                            </div>
                            <div class="d-flex gap-1">
                                <select name="" id="select-plant-chart4"
                                    class="form-select bg-dark form-select-sm">
                                    <option value="karawang1">Karawang1</option>
                                    <option value="karawang2">Karawang2</option>
                                    <option value="karawang3">Karawang3</option>
                                    <option value="sunter1">Sunter1</option>
                                    <option value="sunter2">Sunter2</option>
                                </select>
                                <select name="" id="select-time-chart4"
                                    class="form-select bg-dark form-select-sm">
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

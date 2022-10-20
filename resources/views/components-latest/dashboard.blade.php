@extends('layouts-latest.index')
@section('content')
    <div class="container-fluid">
        <header class="header d-flex justify-content-between align-items-center">
            <div class="d-flex flex w-50 align-items-center">
                <img src="/assets/img/logopidi.png" class="logo" width="210" />
                <p class="title text-center"><b>Carbon Footprint Dashboard</b></p>
            </div>
            <div class="d-flex flex-column w-50">
                <div class="datetime">
                    <div id="date" class="date text-end" onload="showTime()"></div>
                    <div id="time" class="time text-end" onload="showTime()"></div>
                </div>
            </div>
        </header>
        <div class="row modification my-2">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <div class="d-flex flex-column">
                                <h5 class="card-title">
                                    Total Emission By Area
                                </h5>
                                <p class="small-description">Menampilkan total emisi yang dihasilkan setiap area</p>
                            </div>

                            <div>
                                <select name="" id="select-chart6" class="form-select bg-dark form-select-sm">
                                    <option value="daily">Daily</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart6"></div>
                        <div class="total-chart6-container">
                            <p id="totalChart6" class=""></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center card-title-container">
                            <div class="d-flex flex-column w-75">
                                <h5 class="card-title">
                                    Emission By Plant</h5>
                                <p class="small-description">Menampilkan emisi yang dihasilkan setiap area berdasarkan
                                    plantnya
                                </p>
                            </div>
                            <div>
                                <select name="" id="select-chart3" class="form-select bg-dark form-select-sm">
                                    <option value="karawang1">Plant1</option>
                                    <option value="karawang2">Plant2</option>
                                    <option value="karawang3">Plant3</option>
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
                            <div class="d-flex flex-column w-75">
                                <h5 class="card-title">
                                    Total Emission/Offset </h5>
                                <p class="small-description">Menampilkan total emisi yang dihasilkan berbanding batas emisi
                                </p>
                            </div>
                            <div>
                                <select name="" id="select-chart5" class="form-select bg-dark form-select-sm">
                                    {{-- <option value="karawang1">Plant1</option>
                                    <option value="karawang2">Plant2</option>
                                    <option value="karawang3">Plant3</option> --}}
                                </select>
                            </div>
                        </div>
                        <div id="chart5"></div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Row 2 --}}
        <div class="row modification my-1">
            <div class="col-6">
                <div class="row row-cols-1 gap-2">
                    <div class="col h-50">
                        <div class="card smaller">
                            <div class="card-body">
                                <div
                                    class="d-flex justify-content-between align-items-center card-title-container with-date">
                                    <div class="d-flex flex-column w-50">
                                        <h5 class="card-title" data-bs-toggle="tooltip"
                                            data-bs-custom-class="custom-tooltip" data-bs-placement="right">
                                            Carbon Footprint </h5>
                                        <p class="small-description">Menampilkan emisi yang dihasilkan dari setiap plant
                                        </p>
                                    </div>
                                    <div class="d-flex gap-1">
                                        <select name="" id="select-plant-chart2"
                                            class="form-select bg-dark form-select-sm">
                                            <option value="karawang1">Plant1</option>
                                            <option value="karawang2">Plant2</option>
                                            <option value="karawang3">Plant3</option>
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
                                        <h5 class="card-title">
                                            Total Emission </h5>
                                        <p class="small-description">Menampilkan total emisi yang dihasilkan berbanding
                                            dengan jumlah produksi mobil
                                        </p>
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
                                <h5 class="card-title">
                                    Real-time Emission </h5>
                                <p class="small-description">Menampilkan data Real-Time emisi yang dihasilkan setiap plant
                                </p>
                            </div>
                            <div class="d-flex gap-1">
                                <select name="" id="select-plant-chart4"
                                    class="form-select bg-dark form-select-sm">
                                    <option value="karawang1">Plant1</option>
                                    <option value="karawang2">Plant2</option>
                                    <option value="karawang3">Plant3</option>
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

        // Date and Time
        function showTime() {
            var date = new Date();
            var h = date.getHours(); // 0 - 23
            var m = date.getMinutes(); // 0 - 59
            var s = date.getSeconds(); // 0 - 59
            var session = "AM";

            if (h == 0) {
                h = 12;
            }

            if (h == 12) {
                session = "PM";
            }

            if (h > 12) {
                h = h - 12;
                session = "PM";
            }

            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;

            var time = h + ":" + m + session;

            var dateTime = date.toLocaleDateString("en-US", {
                weekday: 'long',
                year: 'numeric',
                day: 'numeric',
                month: 'long'
            })

            document.getElementById("date").innerHTML = dateTime;
            document.getElementById("time").innerText =
                time;
            document.getElementById("time").textContent = time;

            setTimeout(showTime, 1000);
        }
        showTime();
    </script>
    <script src="/assets/data/data.js"></script>
@endsection

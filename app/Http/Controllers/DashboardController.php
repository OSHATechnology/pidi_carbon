<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\FlareClient\View;
use App\Models\Product;
use App\Models\KonsumsiEnergi;
use DB;


class DashboardController extends Controller
{
    public function index(){
        return view('components.content');
    }
    public function countKonversiEnergi()
    {
        $date = date('Y-m-d');
        $variableKonversiEnergi = [
            'batuBara' => 23060,
            'bensin'   => 33025,
            'solar'    => 36645,
            'minyakTanah' => 34800,
            'biomassa'  => 14444,
            'ethanol'   => 22351,
            'biodessel' => 33344,
            'lpg'       => 24121,
            'kayuBakar' => 14666
        ];

        $dataKonsumsiEnergi = KonsumsiEnergi::where('tanggal', '=', '2019-09-30')
                                ->orderBy('jam', 'asc')->get();
        $totalArray = [];
        $x = 0;
        foreach($dataKonsumsiEnergi as $d) {
            $totalArray[$x]['batuBara'] = $d->total_energi / $variableKonversiEnergi['batuBara'];
            $totalArray[$x]['bensin'] = $d->total_energi / $variableKonversiEnergi['bensin'];
            $totalArray[$x]['solar'] = $d->total_energi / $variableKonversiEnergi['solar'];
            $totalArray[$x]['minyakTanah'] = $d->total_energi / $variableKonversiEnergi['minyakTanah'];
            $totalArray[$x]['biomassa'] = $d->total_energi / $variableKonversiEnergi['biomassa'];
            $totalArray[$x]['ethanol'] = $d->total_energi / $variableKonversiEnergi['ethanol'];
            $totalArray[$x]['biodessel'] = $d->total_energi / $variableKonversiEnergi['biodessel'];
            $totalArray[$x]['lpg'] = $d->total_energi / $variableKonversiEnergi['lpg'];
            $totalArray[$x]['kayuBakar'] = $d->total_energi / $variableKonversiEnergi['kayuBakar'];
            $x++;
        }

        return $totalArray;
    }

    public function countKonversiEmisi($data)
    {
        $variableKonversiEmisi = [
            'batuBara'  => 2.9,
            'bensin'    => 2.35,
            'solar'     => 2.7,
            'minyakTanah' =>	2.6,
            'biomassa'  => 0,
            'ethanol'   => 1.51,
            'biodessel' => 2.524,
            'lpg'       => 1.5,
            'kayuBakar' => 1.835
        ];

        $resultArray = [];
        for($i = 0; $i < count($variableKonversiEmisi); $i++) {
            $resultArray[$i]['batuBara'] = $variableKonversiEmisi['batuBara'] * $data[$i]['batuBara'];
            $resultArray[$i]['bensin'] = $variableKonversiEmisi['bensin'] * $data[$i]['bensin'];
            $resultArray[$i]['solar'] = $variableKonversiEmisi['solar'] * $data[$i]['solar'];
            $resultArray[$i]['minyakTanah'] = $variableKonversiEmisi['minyakTanah'] * $data[$i]['minyakTanah'];
            $resultArray[$i]['biomassa'] = $variableKonversiEmisi['biomassa'] * $data[$i]['biomassa'];
            $resultArray[$i]['ethanol'] = $variableKonversiEmisi['ethanol'] * $data[$i]['ethanol'];
            $resultArray[$i]['biodessel'] = $variableKonversiEmisi['biodessel'] * $data[$i]['biodessel'];
            $resultArray[$i]['lpg'] = $variableKonversiEmisi['lpg'] * $data[$i]['lpg'];
            $resultArray[$i]['kayuBakar'] = $variableKonversiEmisi['kayuBakar'] * $data[$i]['kayuBakar'];
        }
        return $resultArray;
    }

    public function countEmisi()
    {
        $resultArray = [];
        $x = 0;
        $data = $this->countKonversiEnergi();
        $konversiEmisi = $this->countKonversiEmisi($data);

        $dataProduct = Product::where('id_emisi', '=', '1')
                        ->where( DB::raw('DATE_FORMAT(created_at, "%Y-%m-%d")'), '=', '2022-09-30' )
                        ->orderBy('created_at', 'asc')->get();

                        
        foreach($dataProduct as $dp) {
            for($i=0; $i < count($konversiEmisi); $i++) {

                $resultArray[$x]['welding']['batuBara'] = ($dp->welding * $konversiEmisi[$i]['batuBara'])/1000;
                $resultArray[$x]['welding']['bensin'] = ($dp->welding * $konversiEmisi[$i]['bensin'])/1000;
                $resultArray[$x]['welding']['solar'] = ($dp->welding * $konversiEmisi[$i]['solar'])/1000;
                $resultArray[$x]['welding']['minyakTanah'] = ($dp->welding * $konversiEmisi[$i]['minyakTanah'])/1000;
                $resultArray[$x]['welding']['biomassa'] = ($dp->welding * $konversiEmisi[$i]['biomassa'])/1000;
                $resultArray[$x]['welding']['ethanol'] = ($dp->welding * $konversiEmisi[$i]['ethanol'])/1000;
                $resultArray[$x]['welding']['biodessel'] = ($dp->welding * $konversiEmisi[$i]['biodessel'])/1000;
                $resultArray[$x]['welding']['lpg'] = ($dp->welding * $konversiEmisi[$i]['lpg'])/1000;
                $resultArray[$x]['welding']['kayuBakar'] = ($dp->welding * $konversiEmisi[$i]['kayuBakar'])/1000;

                $resultArray[$x]['painting']['batuBara'] = ($dp->painting * $konversiEmisi[$i]['batuBara'])/1000;
                $resultArray[$x]['painting']['bensin'] = ($dp->painting * $konversiEmisi[$i]['bensin'])/1000;
                $resultArray[$x]['painting']['solar'] = ($dp->painting * $konversiEmisi[$i]['solar'])/1000;
                $resultArray[$x]['painting']['minyakTanah'] = ($dp->painting * $konversiEmisi[$i]['minyakTanah'])/1000;
                $resultArray[$x]['painting']['biomassa'] = ($dp->painting * $konversiEmisi[$i]['biomassa'])/1000;
                $resultArray[$x]['painting']['ethanol'] = ($dp->painting * $konversiEmisi[$i]['ethanol'])/1000;
                $resultArray[$x]['painting']['biodessel'] = ($dp->painting * $konversiEmisi[$i]['biodessel'])/1000;
                $resultArray[$x]['painting']['lpg'] = ($dp->painting * $konversiEmisi[$i]['lpg'])/1000;
                $resultArray[$x]['painting']['kayuBakar'] = ($dp->painting * $konversiEmisi[$i]['kayuBakar'])/1000;

                $resultArray[$x]['assy']['batuBara'] = ($dp->painting * $konversiEmisi[$i]['batuBara'])/1000;
                $resultArray[$x]['assy']['bensin'] = ($dp->painting * $konversiEmisi[$i]['bensin'])/1000;
                $resultArray[$x]['assy']['solar'] = ($dp->painting * $konversiEmisi[$i]['solar'])/1000;
                $resultArray[$x]['assy']['minyakTanah'] = ($dp->painting * $konversiEmisi[$i]['minyakTanah'])/1000;
                $resultArray[$x]['assy']['biomassa'] = ($dp->painting * $konversiEmisi[$i]['biomassa'])/1000;
                $resultArray[$x]['assy']['ethanol'] = ($dp->painting * $konversiEmisi[$i]['ethanol'])/1000;
                $resultArray[$x]['assy']['biodessel'] = ($dp->painting * $konversiEmisi[$i]['biodessel'])/1000;
                $resultArray[$x]['assy']['lpg'] = ($dp->painting * $konversiEmisi[$i]['lpg'])/1000;
                $resultArray[$x]['assy']['kayuBakar'] = ($dp->painting * $konversiEmisi[$i]['kayuBakar'])/1000;

                $resultArray[$x]['press']['batuBara'] = ($dp->painting * $konversiEmisi[$i]['batuBara'])/1000;
                $resultArray[$x]['press']['bensin'] = ($dp->painting * $konversiEmisi[$i]['bensin'])/1000;
                $resultArray[$x]['press']['solar'] = ($dp->painting * $konversiEmisi[$i]['solar'])/1000;
                $resultArray[$x]['press']['minyakTanah'] = ($dp->painting * $konversiEmisi[$i]['minyakTanah'])/1000;
                $resultArray[$x]['press']['biomassa'] = ($dp->painting * $konversiEmisi[$i]['biomassa'])/1000;
                $resultArray[$x]['press']['ethanol'] = ($dp->painting * $konversiEmisi[$i]['ethanol'])/1000;
                $resultArray[$x]['press']['biodessel'] = ($dp->painting * $konversiEmisi[$i]['biodessel'])/1000;
                $resultArray[$x]['press']['lpg'] = ($dp->painting * $konversiEmisi[$i]['lpg'])/1000;
                $resultArray[$x]['press']['kayuBakar'] = ($dp->painting * $konversiEmisi[$i]['kayuBakar'])/1000;
            }
            $x++;
        }

        $countAllActivity = $this->countAllActivity($resultArray);        
        echo json_encode($countAllActivity);
    }

    public function countAllActivity($data)
    {
        $result = 0;
        $resultPainting = 0;
        $resultPress = 0;
        $resultAssy = 0;

        $resultArray = [];
        for($i = 0; $i < count($data); $i++) {
            $result = $result + $data[$i]['welding']['batuBara'];
            $result = $result + $data[$i]['welding']['bensin'];
            $result = $result + $data[$i]['welding']['solar'];
            $result = $result + $data[$i]['welding']['minyakTanah'];
            $result = $result + $data[$i]['welding']['biomassa'];
            $result = $result + $data[$i]['welding']['ethanol'];
            $result = $result + $data[$i]['welding']['biodessel'];
            $result = $result + $data[$i]['welding']['lpg'];
            $result = $result + $data[$i]['welding']['kayuBakar'];

            $resultPainting = $resultPainting + $data[$i]['painting']['batuBara'];
            $resultPainting = $resultPainting + $data[$i]['painting']['bensin'];
            $resultPainting = $resultPainting + $data[$i]['painting']['solar'];
            $resultPainting = $resultPainting + $data[$i]['painting']['minyakTanah'];
            $resultPainting = $resultPainting + $data[$i]['painting']['biomassa'];
            $resultPainting = $resultPainting + $data[$i]['painting']['ethanol'];
            $resultPainting = $resultPainting + $data[$i]['painting']['biodessel'];
            $resultPainting = $resultPainting + $data[$i]['painting']['lpg'];
            $resultPainting = $resultPainting + $data[$i]['painting']['kayuBakar'];

            $resultPress = $resultPress + $data[$i]['press']['batuBara'];
            $resultPress = $resultPress + $data[$i]['press']['bensin'];
            $resultPress = $resultPress + $data[$i]['press']['solar'];
            $resultPress = $resultPress + $data[$i]['press']['minyakTanah'];
            $resultPress = $resultPress + $data[$i]['press']['biomassa'];
            $resultPress = $resultPress + $data[$i]['press']['ethanol'];
            $resultPress = $resultPress + $data[$i]['press']['biodessel'];
            $resultPress = $resultPress + $data[$i]['press']['lpg'];
            $resultPress = $resultPress + $data[$i]['press']['kayuBakar'];

            $resultAssy = $resultAssy + $data[$i]['assy']['batuBara'];
            $resultAssy = $resultAssy + $data[$i]['assy']['bensin'];
            $resultAssy = $resultAssy + $data[$i]['assy']['solar'];
            $resultAssy = $resultAssy + $data[$i]['assy']['minyakTanah'];
            $resultAssy = $resultAssy + $data[$i]['assy']['biomassa'];
            $resultAssy = $resultAssy + $data[$i]['assy']['ethanol'];
            $resultAssy = $resultAssy + $data[$i]['assy']['biodessel'];
            $resultAssy = $resultAssy + $data[$i]['assy']['lpg'];
            $resultAssy = $resultAssy + $data[$i]['assy']['kayuBakar'];
        }

        $resultArray = [
            'welding' => $result,
            'painting' => $resultPainting,
            'assy' => $resultAssy,
            'press' => $resultPress
        ];
        return $resultArray;
    }
}

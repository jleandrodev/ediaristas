<?php

namespace App\Http\Controllers;

use App\Models\Diarista;
use Illuminate\Http\Request;

class DiaristaController extends Controller
{
    public function index()
    {
        $diaristas = Diarista::get();


        return view('index', [
            'diaristas' => $diaristas
        ]);
    }

    public function create()
    {
        return view('create');
    }

    public function store(Request $request)
    {
        $data = $request->except('__token');
        $data['foto_usuario'] = $request->foto_usuario->store('public');

        Diarista::create($data);

        return redirect()->route('diaristas.index');
    }
}

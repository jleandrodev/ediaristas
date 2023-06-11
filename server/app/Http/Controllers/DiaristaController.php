<?php

namespace App\Http\Controllers;

use App\Http\Requests\DiaristaRequest;
use App\Models\Diarista;
use App\Services\ViaCEP;
use Illuminate\Http\Request;

class DiaristaController extends Controller
{
    public function __construct(
        protected ViaCEP $viaCep
    ) {
    }
    /**
     * Lista as diaristas
     *
     * @return string
     */
    public function index()
    {
        $diaristas = Diarista::get();


        return view('index', [
            'diaristas' => $diaristas
        ]);
    }

    /**
     *  Mostra o formulario de criação
     *
     * @return string
     */
    public function create()
    {
        return view('create');
    }

    /**
     * Salva uma diarista no banco de dados
     *
     * @param Request $request
     * @return void
     */
    public function store(DiaristaRequest $request)
    {
        $data = $request->except('__token');
        $data['foto_usuario'] = $request->foto_usuario->store('public');

        $data['cpf'] = str_replace(['.', '-'], '', $data['cpf']);
        $data['telefone'] = str_replace(['(', ')', '-', ' '], '', $data['telefone']);
        $data['cep'] = str_replace('-', '', $data['cep']);
        $data['codigo_ibge'] = $this->viaCep->buscar($data['cep'])['ibge'];

        Diarista::create($data);

        return redirect()->route('diaristas.index');
    }

    /**
     * Mostra o formulario de edição populado
     *
     * @param integer $id
     * @return string
     */
    public function edit(int $id)
    {

        $diarista = Diarista::findOrFail($id);

        return view('edit', ['diarista' => $diarista]);
    }


    /**
     * Atualiza o cadastro de uma diarista no banco de dados
     *
     * @param integer $id
     * @param Request $request
     * @return void
     */
    public function update(int $id, DiaristaRequest $request)
    {
        $diarista = Diarista::findOrFail($id);

        $data = $request->except('_token', '_method');

        $data['cpf'] = str_replace(['.', '-'], '', $data['cpf']);
        $data['telefone'] = str_replace(['(', ')', '-', ' '], '', $data['telefone']);
        $data['cep'] = str_replace('-', '', $data['cep']);
        $data['codigo_ibge'] = $this->viaCep->buscar($data['cep'])['ibge'];

        if ($request->hasFile('foto_usuario')) {
            $data['foto_usuario'] = $request->foto_usuario->store('public');
        }

        $diarista->update($data);

        return redirect()->route('diaristas.index');
    }


    /**
     * Remove uma diarista do banco de dados
     *
     * @param integer $id
     * @return void
     */
    public function destroy(int $id)
    {
        $diarista = Diarista::findOrFail($id);

        $diarista->delete();

        return redirect()->route('diaristas.index');
    }
}

@extends('app')

@section('titulo', 'Lista de Diaristas')
@section('conteudo')
    <h1>Lista de Diaristas</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($diaristas as $diarista)
                <tr>
                    <th scope="row">{{ $diarista->id }}</th>
                    <td>{{ $diarista->nome_completo }}</td>
                    <td>{{ $diarista->telefone }}</td>
                    <td></td>
                </tr>
            @empty
                <tr>
                    <th scope="row"></th>
                    <td>Nenhum registro cadastrado</td>
                    <td></td>
                    <td></td>
                </tr>
            @endforelse
        </tbody>
    </table>
    <a href={{ route('diaristas.create') }} style="margin-bottom: 200px" class="btn btn-success">Nova Diarista</a>
@endsection

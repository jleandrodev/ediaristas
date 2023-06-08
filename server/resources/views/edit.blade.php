@extends('app')

@section('titulo', 'Editar Cadastro de Diarista')

@section('conteudo')
    <h1>Atualizar Cadastro de Diarista</h1>
    <form action={{ route('diaristas.update', $diarista) }} method="POST" enctype="multipart/form-data">
        @method('PUT')
        @include('_form')
    @endsection

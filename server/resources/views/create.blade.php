@extends('app')

@section('titulo', 'Cadastro de Diarista')

@section('conteudo')
    <h1>Cadastrar Diarista</h1>
    <form action={{ route('diaristas.store') }} method="POST" enctype="multipart/form-data">
        @include('_form')

    @endsection

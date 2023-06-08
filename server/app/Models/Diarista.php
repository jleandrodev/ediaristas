<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diarista extends Model
{
    use HasFactory;

    protected $fillable = ['nome_completo', 'cpf', 'email', 'telefone', 'cidade', 'logradouro', 'numero', 'bairro', 'complemento', 'cep', 'estado', 'codigo_ibge', 'foto_usuario'];
}

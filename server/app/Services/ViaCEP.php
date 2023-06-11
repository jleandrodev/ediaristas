<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ViaCEP
{
    public function buscar(string $cep)
    {
        $url = sprintf('https://viacep.com.br/ws/%s/json/', $cep);

        $response = Http::withoutVerifying()->get($url);

        if ($response->failed()) {
            return false;
        }

        $data = $response->json();

        if (isset($data['erro']) && $data['erro'] == true) {
            return false;
        }


        return $data;
    }
}

<?php

return [

    'secret' => env('JWT_SECRET'),
    'ttl' => 60*24*30*6,
    'refresh_ttl' => 20160,
    'algo' => 'HS256',
    'user' => env('JWT_AUTH_TABLE', 'App\User'),
    'identifier' => 'id',
    'required_claims' => ['iss', 'iat', 'exp', 'nbf', 'sub', 'jti'],
    'blacklist_enabled' => env('JWT_BLACKLIST_ENABLED', false),
    'providers' => [

        'user' => 'Tymon\JWTAuth\Providers\User\EloquentUserAdapter',
        'jwt' => 'Tymon\JWTAuth\Providers\JWT\Namshi',
        'auth' => 'Tymon\JWTAuth\Providers\Auth\Illuminate',
        'storage' => 'Tymon\JWTAuth\Providers\Storage\Illuminate',

    ],

];
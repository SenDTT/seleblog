<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', [
            'title' => "Sele Blog - Homepage"
        ]);
    }
}

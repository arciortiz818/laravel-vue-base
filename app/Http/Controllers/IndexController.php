<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{

    public function __construct(){
        $this->middleware('auth:api');
    }

    public function index(){
        return response()->json(['success'=>true,'message'=>'Estás en el Dashboard']);
    }
}

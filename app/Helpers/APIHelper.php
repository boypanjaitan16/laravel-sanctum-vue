<?php


namespace App\Helpers;


class APIHelper
{
    public static function responseFailed($msg, $statusCode = 200){
        return response([
            'status'    => 'failed',
            'code'      => $statusCode,
            'message'   => $msg
        ], $statusCode);
    }

    public static function responseSuccess($data = []){
        return response([
            'status'    => 'success',
            'code'      => 200,
            'data'      => $data
        ]);
    }

    public static function responseWarning($message, $data = [], $code = 200){
        return response([
            'status'    => 'warning',
            'message'   => $message,
            'code'      => $code,
            'data'      => $data
        ]);
    }
}

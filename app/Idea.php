<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Idea extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    
    public function favorites()
    {
        return $this->belongsToMany('App\User', 'favorites')->withTimestamps();
    }

    public function getColorNameAttribute()
    {
        $colorName = [
            [
                'bg'=> 'bg-primary',
                'text'=> 'text-light',
                'heart'=> 'color:red;'
            ],
            [
                'bg'=> 'bg-secondary',
                'text'=> 'text-light',
                'heart'=> 'color:red;'
            ],
            [
                'bg'=> 'bg-success',
                'text'=> 'text-light',
                'heart'=> 'color:red;'
            ],
            [
                'bg'=> 'bg-danger',
                'text'=> 'text-light',
                'heart'=> 'color:yellow;'
            ],
            [
                'bg'=> 'bg-warning',
                'text'=> 'text-dark',
                'heart'=> 'color:red;'
            ],
            [
                'bg'=> 'bg-info',
                'text'=> 'text-light',
                'heart'=> 'color:red;'
            ],
            [
                'bg'=> 'bg-light',
                'text'=> 'text-dark',
                'heart'=> 'color:red;'
            ],
            [
                'bg'=> 'bg-dark',
                'text'=> 'text-light',
                'heart'=> 'color:red;'
            ],
        ];
        if (\App::environment('heroku')) {
            $color_name = $colorName[($this->job_id-1)/10];
        }else {
            $color_name = $colorName[$this->job_id - 1];
        }
        return $color_name;
    }
}

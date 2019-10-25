<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditProfile;
use Illuminate\Http\Request;

use App\Profile;
use App\Job;
use App\User;
use \Auth;
use Carbon\Carbon;

class ProfileController extends Controller
{
    public function index(User $user)
    {   
        $user->load('ideas', 'profile', 'favorites');
        $user->favorites->load('favorites');
        $bod = $this->calcAge(intval($user->profile->birth_of_date));
        $user->profile->age = $bod;

        return view('profiles.profile', [
            'user' => $user,
        ]);
    }

    private function calcAge(Int $bod)
    {
        $currentDate = Carbon::now()->format('Ymd');
        $subDate = (int)$currentDate - $bod;
        $subDate = strval($subDate);
        $age = substr($subDate, 0, 2);
        $age = intval($age);
        if($age < 15) {
            return '15歳未満';
        }elseif($age >= 15 && $age < 20) {
            return '10代';
        }elseif($age >= 20 && $age < 30) {
            return '20代';
        }elseif($age >= 30 && $age < 40) {
            return '30代';
        }elseif($age >= 40 && $age < 50) {
            return '40代';
        }elseif($age >= 50 && $age < 60) {
            return '50代';
        }elseif($age >= 60 && $age < 70) {
            return '60代';
        }elseif($age == 0) {
            return '未設定';
        }else {
            return '70歳以上';
        }
    }

    public function create()
    {
        return view('profiles.create');
    }

    public function store(Request $request)
     {
        $profile = new Profile();

         $profile->nickname = $request->nickname;
         $profile->job = $request->job;
         $profile->skills = $request->skills;
         $profile->locate = $request->locate;
         $profile->comment = $request->comment;
         $profile->gender = $request->gender;
         $profile->save();
         return redirect()->route('profiles.index');
     }
          
    public function edit(User $user)
    {
        if(Auth::user()->id != $user->id) {
            abort(403);
        }
        $jobs = Job::all();
        return view('profiles.edit',[
            'jobs' => $jobs,
            'user' => $user
        ]);
    }

    public function update(EditProfile $request)
    {
        $filtered_bod = strval($request->year) . str_pad(strval($request->month), 2, '0', STR_PAD_LEFT) . str_pad(strval($request->day), 2, '0', STR_PAD_LEFT);
        $profile = Profile::find(Auth::user()->id);
        $profile->nickname = $request->nickname;
        $profile->birth_of_date = $filtered_bod;
        $profile->job = $request->job;
        $profile->locate = $request->locate;
        $profile->comment = $request->comment;
        $profile->gender = $request->gender;
        if($request->picture) {
            $imgPath = $this->saveProfilePicture($request->file('picture'));
            $profile->picture_path = $imgPath;
        // }else {
        //     $profile->picture_path = 'storage/images/profilePicture/defaultPicture.jpg';
        }
        $profile->save();

        return redirect()->route('profile.index',[
            'user_id' => $profile->user_id
        ]);
    }

    private function saveProfilePicture($image)
    {

        if (\App::environment('heroku')) {
            $imgPath = \Storage::disk('s3')->putFile('images/profilePicture/', $image, 'public');
            return \Storage::disk('s3')->url($imgPath);
        }

        $imgPath = $image->store('images/profilePicture', 'public');

        return 'storage/' . $imgPath;

    }
}

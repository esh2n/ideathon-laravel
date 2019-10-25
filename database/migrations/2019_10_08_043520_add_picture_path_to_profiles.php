<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPicturePathToProfiles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::table('profiles', function (Blueprint $table) {
            $table->string('picture_path')
                  ->after('gender')
                  ->default('https://ideathon.s3-ap-northeast-1.amazonaws.com/images/profilePicture/defaultPicture.jpg');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn('picture_path'); 
        });
    }
}

# Ideathon

## INTRODUCTION

1. クローン
2. プロジェクトを vscode で開く
3. `composer install` # composer.lock ファイルがあれば削除
4. `cp .env.example .env`
5. `php artisan key:generate`
6. `php artisan serve`
7. localhost:8000 にアクセス
8. Laravel のホームページが写れば ok

## DB 設定

1. .env ファイルを編集
   ・データベース名
   ・ユーザー名
   ・パスワード
   ・(XAMPP を使う場合はソケットのパス設定)
2. `php artisan migrate:fresh`
3. `php artisan db:seed --class=JobsTableSeeder`
4. データベースを確認して jobs テーブルにシードが入っていれば ok

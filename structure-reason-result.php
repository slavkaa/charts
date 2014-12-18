<!DOCTYPE html>
<html>
<head>
    <?php require_once('inc/html-header.inc') ?>
    <title></title>
</head>
<body>
<div class="container">
    <br/>
    <?php $url = [1 => '/', 2 => 'text.php'] ?>
    <?php $currentStep = 3; require_once('inc/progress.inc') ?>

    <br/>
    <br/>
    <br/>

    <div class="jumbotron" style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;">
        <h4>"Ви маєте текстові данні. Елементи мають (лінійно) слідувати один за одним,"</h4>
        <h2>і ви бажаєте зробити акцент на ...</h2>
    </div>

    <div class="row">
        <div class="col-md-4">
            <?php
            $minHeight = '130px';
            $title = 'зменшенні параметру';
            // ---
            $text1 = [];
            $text1[] = '';
            // ---
            $images = [];
            $images[] = 'chart_illustrations/voronka.png';
            // ---
            $nextUrl = 'structure-voronka.php';

            require('inc/cell.inc');
            ?>
        </div>
        <div class="col-md-4">
            <?php
            $title = 'послідовносі дій';
            // ---
            $text1 = [];
            $text1[] = '';
            // ---
            $images = [];
            $images[] = 'chart_illustrations/algorithm-linear.png';
            // ---
            $nextUrl = 'structure-linear.php';

            require('inc/cell.inc');
            ?>
        </div>
        <div class="col-md-4">
            <?php
            $title = 'тривалість у часі';
            // ---
            $text1 = [];
            $text1[] = '';
            // ---
            $images = [];
            $images[] = 'chart_illustrations/timeing.png';
            // ---
            $nextUrl = 'structure-timeing.php';

            require('inc/cell.inc');
            ?>
        </div>
    </div>
</div>
</body>
</html>

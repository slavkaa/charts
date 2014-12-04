<!DOCTYPE html>
<html>
<head>
    <?php require_once('inc/html-header.inc') ?>
    <title></title>
</head>
<body>
<div class="container">
    <br/>
    <?php $url = [1 => '/', 2 => 'text.php', 3 => 'structure.php'] ?>
    <?php $currentStep = 4; require_once('inc/progress.inc') ?>

    <br/>
    <br/>
    <br/>

    <div class="jumbotron" style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;">
        <h4>"Ви маєте текстові данні і хочете підкреслити відносини підпорядкування між елементами."</h4>
        <h2>Підпорядкованість проста?</h2>
    </div>

    <div class="row">
        <div class="col-md-6">
            <?php
                $minHeight = '130px';
                $title = 'Так, проста.';
                // ---
                $text1 = [];
                $text1[] = 'Лінійна.';
                $text1[] = 'Піраміда.';
                // ---
                $images = [];
                $images[] = 'chart_illustrations/piramid.png';
                $images[] = 'chart_illustrations/summarizing-histogramm.png';
                // ---
                $nextUrl = 'structure-hierarchy-simple.php';

                require('inc/cell.inc');
            ?>
        </div>
        <div class="col-md-6">
            <?php
                $minHeight = '130px';
                $title = 'Ні, складна.';
                // ---
                $text1 = [];
                $text1[] = 'Структура.';
                // ---
                $images = [];
                $images[] = 'chart_illustrations/schema.png';
                // ---
                $nextUrl = 'structure-schema.php';

                require('inc/cell.inc');
            ?>
        </div>
    </div>
</div>

</body>
</html>

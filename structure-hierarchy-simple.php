<!DOCTYPE html>
<html>
<head>
    <?php require_once('inc/html-header.inc') ?>
    <title></title>
</head>
<body>
<div class="container">
    <br/>
    <?php $url = [1 => '/', 2 => 'text.php', 3 => 'structure.php', 4 => 'structure-hierarchy.php'] ?>
    <?php $currentStep = 5; require_once('inc/progress.inc') ?>

    <br/>
    <br/>
    <br/>

    <div class="jumbotron" style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;">
        <h4>"Ви маєте текстові данні і хочете підкреслити відносини підпорядкування між елементами."</h4>
        <h2>Вам потрібно показати співвідношення між різними шарами діаграмми?</h2>
    </div>

    <div class="row">
        <div class="col-md-6">
            <?php
            $minHeight = '130px';
            $title = 'Так, співвідношення важливе';
            // ---
            $text1 = [];
            $text1[] = '';
            // ---
            $images = [];
            $images[] = 'chart_illustrations/summarizing-histogramm.png';
            // ---
            $nextUrl = 'structure-summarizing-histogramm.php';

            require('inc/cell.inc');
            ?>
        </div>
        <div class="col-md-6">
            <?php
            $minHeight = '130px';
            $title = 'Ні, в мене ж нема цифр';
            // ---
            $text1 = [];
            $text1[] = '';
            // ---
            $images = [];
            $images[] = 'chart_illustrations/piramid.png';
            // ---
            $nextUrl = 'structure-piramid.php';

            require('inc/cell.inc');
            ?>
        </div>
    </div>
</div>

</body>
</html>

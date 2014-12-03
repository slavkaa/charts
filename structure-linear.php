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
        <h4>"Ви маєте текстові данні. Елементи мають (лінійно) слідувати один за одним, важливо показати що це послідовність."</h4>
        <h2>Якої ширини ваші тексти?</h2>
    </div>

    <div class="row">
        <div class="col-md-6">
            <?php
                $minHeight = '130px';
                $title = 'Широкі';
                // ---
                $text1 = [];
                $text1[] = 'Написи широкі або ви хочете зобразити більше 3-х елементів.';
                $text1[] = 'Є написси з 4-х і більше слів, 50-ти і більше літер.';
                $text1[] = 'Для того щоб напис було гарно видно, його треба розмістити у декількох рядках чи,';
                $text1[] = 'при наймі, на всю ширину одного рядка.';
                // ---
                $images = [];
                $images[] = 'chart_illustrations/algorithm.png';
                // ---
                $nextUrl = 'structure-linear-vertical.php';

                require('inc/cell.inc');
            ?>
        </div>
        <div class="col-md-6">
            <?php
                $minHeight = '130px';
                $title = 'Вузькі';
                // ---
                $text1 = [];
                $text1[] = 'Написи вузькі і елементів не більше 3-х.';
                $text1[] = 'Найбільший напис складається з 3-х і менше слів, менше 50-ти літер.';
                // ---
                $images = [];
                $images[] = 'chart_illustrations/algorithm-linear.png';
                // ---
                $nextUrl = 'structure-linear-horizontal.php';

                require('inc/cell.inc');
            ?>
        </div>
    </div>
</div>

</body>
</html>

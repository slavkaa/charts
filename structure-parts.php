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
        <h4>"Ви маєте текстові данні і хочете підкреслити, що елементи складають одне ціле."</h4>
        <h2>Скільки у вас елементів?</h2>
    </div>

    <div class="row">
        <div class="col-md-6">
            <?php
            $minHeight = '130px';
            $title = 'Рівно 4, 6, 9.';
            // ---
            $text1 = [];
            $text1[] = '';
            // ---
            $images = [];
            $images[] = 'chart_illustrations/puzzle.png';
            // ---
            $nextUrl = 'structure-parts-puzzle.php';

            require('inc/cell.inc');
            ?>
        </div>
        <div class="col-md-6">
            <?php
            $minHeight = '130px';
            $title = 'Від 2 до 8.';
            // ---
            $text1 = [];
            $text1[] = 'Якщо більше теж обирайте цей варіант.';
            $text1[] = 'Далі дубе порада, що робити з зайвим.';
            // ---
            $images = [];
            $images[] = 'chart_illustrations/pie.png';
            // ---
            $nextUrl = 'structure-parts-pie-equal.php';

            require('inc/cell.inc');
            ?>
        </div>
    </div>
</div>

</body>
</html>

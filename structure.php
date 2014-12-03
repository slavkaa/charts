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
            <h2>головним є те що елементи э ...</h2>
        </div>

        <div class="row">
            <div class="col-md-4">
                <?php
                    $minHeight = '130px';
                    $title = 'Послідовністтю';
                    // ---
                    $text1 = [];
                    $text1[] = 'Треба акцентувати увагу на послідовності елементів.';
                    $text1[] = 'Ви хочете проіллюструвати, що єтап Б слідує за етапом А.';
                    // ---
                    $images = [];
                    $images[] = 'chart_illustrations/algorithm.png';
                    $images[] = 'chart_illustrations/algorithm-linear.png';
                    // ---
                    $nextUrl = 'structure-linear.php';

                    require('inc/cell.inc');
                ?>
            </div>
            <div class="col-md-4">
                <?php
                    $title = 'Ієрархією';
                    // ---
                    $text1 = [];
                    $text1[] = 'Вам треба акцентувати увагу на тому, що всі елементи діаграмми складають одне ціле.';
                    $text1[] = 'Частини одного цілого.';
                    // ---
                    $images = [];
                    $images[] = 'chart_illustrations/piramid.png';
                    // ---
                    $nextUrl = 'structure-hierarchy.php';

                    require('inc/cell.inc');
                ?>
            </div>
            <div class="col-md-4">
                <?php
                    $title = 'Частини одного цілого';
                    // ---
                    $text1 = [];
                    $text1[] = 'Вам треба акцентувати увагу на тому, що всі елементи діаграмми складають одне ціле.';
                    $text1[] = 'Частини одного цілого.';
                    // ---
                    $images = [];
                    $images[] = 'chart_illustrations/puzzle.png';
                    $images[] = 'chart_illustrations/pie.png';
                    // ---
                    $nextUrl = 'structure-puzzle.php';

                    require('inc/cell.inc');
                ?>
            </div>
        </div>
    </div>
</body>
</html>

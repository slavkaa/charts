<!DOCTYPE html>
<html>
<head>
    <title></title>
    <?php require_once('inc/html-header.inc') ?>
</head>
<body>
    <div class="container">
        <br/>
        <?php $url = [1 => '/'] ?>
        <?php $currentStep = 2; require_once('inc/progress.inc') ?>

        <br/>
        <br/>
        <br/>

        <div class="jumbotron" style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;">
            <h4>"Ви маєте текстові данні."</h4>
            <h2>Що ви хочете показати графіком?</h2>
        </div>

        <div class="row">
            <div class="col-md-4">
                <?php
                    $minHeight = '130px';
                    $title = 'Структура';
                    // ---
                    $text1 = [];
                    $text1[] = 'Ієрархія.';
                    $text1[] = 'Вам важливо показати підпорядкованість елементів один одному.';
                    // ---
                    $images = [];
                    $images[] = 'chart_illustrations/piramid.png';
                    $images[] = 'chart_illustrations/schema.png';
                    // ---
                    $nextUrl = 'structure.php';

                    require('inc/cell.inc');
                ?>
            </div>

            <div class="col-md-4">
                <?php
                    $title = 'Причина-наслідок';
                    // ---
                    $text1 = [];
                    $text1[] = 'Ви хочете акцентувати увагу глядача на тому, що об’екти на сайді є єтапами первного процессу.';
                    $text1[] = 'Головна думка не ієрархія, а причинно-наслідковий зв’язок між обьектами.';
                    // ---
                    $images = [];
                    $images[] = 'chart_illustrations/algorithm.png';
                    $images[] = 'chart_illustrations/timeing.png';
                    $images[] = 'chart_illustrations/voronka.png';
                    // ---
                    $nextUrl = 'structure-reason-result.php';

                    require('inc/cell.inc');
                ?>
            </div>

            <div class="col-md-4">
                <?php
                    $title = 'Перелік';
                    // ---
                    $text1 = [];
                    $text1[] = 'Вам просто потрібно показати що дані елементи існують.';
                    $text1[] = 'Немає ніяких акцентів, ні послідовності, ні структури.';
                    // ---
                    $images = [];
                    $images[] = 'chart_illustrations/list.png"';
                    // ---
                    $nextUrl = 'structure-list.php';

                    require('inc/cell.inc');
                ?>
            </div>
        </div>
    </div>

</body>
</html>

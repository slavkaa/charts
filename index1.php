<!DOCTYPE html>
<html>
<head>
    <?php require_once('inc/html-header.inc') ?>
</head>
<body>
    <div class="container">
        <br/>

        <?php
            $currentStep = 1;
            require_once('inc/progress.inc');
        ?>

        <br/>
        <br/>
        <br/>

        <div class="jumbotron" style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;">
            <h2>Помічник вибору діаграмм.
                <br/>
                <br/>
                У вашій діаграммі переважають?
            </h2>
        </div>

        <div class="row">
            <div class="col-md-6">
                <?php
                    $minHeight = '100px';
                    $title = 'Цифри';
                    // ---
                    $text1 = [];
                    $text1[] = 'Тексти є просто підписами колонок.';
                    $text1[] = 'Ви хочете показати порівнняння двох або декількох величин,'
                        .' співвіднощення між частинами цілого.';
                    // ---
                    $images = [];
                    $images[] = 'chart_illustrations/histogramm.png';
                    $images[] = 'chart_illustrations/linear.png';
                    $images[] = 'chart_illustrations/pie.png';
                    $images[] = 'chart_illustrations/summarizing-histogramm.png';
                    $images[] = 'chart_illustrations/voronka.png';
                    // ---
                    $nextUrl = 'numbers.php';

                    require('inc/cell.inc');
                ?>
            </div>

            <div class="col-md-6">
                <?php
                    $title = 'Тексти';
                    // ---
                    $text1 = [];
                    $text1[] = 'Цифр немає взагалі.';
                    $text1[] = 'Ви хочете показати порівнняння двох або декількох величин,'
                        .' співвіднощення між частинами цілого.';
                    // ---
                    $images = [];
                    $images[] = 'chart_illustrations/algorithm.png';
                    $images[] = 'chart_illustrations/piramid.png';
                    $images[] = 'chart_illustrations/schema.png';
                    $images[] = 'chart_illustrations/timeing.png';
                    // ---
                    $nextUrl = 'text.php';

                    require('inc/cell.inc');
                ?>
            </div>
        </div>

        <br/>
    </div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <?php require_once('inc/html-header.inc') ?>
</head>
<body>
    <div class="container">
        <br/>
        <br/>
        <div class="row">
            <div class="col-md-12" style="font-size: 24px; font-weight: bold; text-align: center;">
                Не знаеш яку діаграмму вибрати? --
                Видихни! Тут тобі допоможуть друже :)<br/>
                Дай відповідь на 5 наступних питань, і прямуй до своєї ідеальної діаграмми!<br/>
            </div>
        </div>
        <!--br/>
        <!--div class="row">
            <div class="col-md-8" style="font-style: italic; font-size: 17px;">
                Не знаеш яку діаграмму вибрати?<br/>
                Видихни - тут тобі допоможуть.<br/>
                Дай відповідь на 5 настпних питань<br/>
                - і прямуй до своєї ідеальної діаграмми!<br/>
            </div>
        </div-->
        <!--br/-->
        <!--div class="row">
            <div class="col-md-8" style="font-size: 20px;">
                Крок перший:
            </div>
        </div-->

        <br/>
        <br/>

        <?php $currentStep = 1; require_once('inc/progress.inc') ?>

        <br/>
        <br/>

        <div class="row" style="text-align: center;">
            <div class="col-md-12">
                <h1>Дані якого типу головні на вашій діаграммі?</h1>
            </div>
        </div>

        <br/>

        <div class="row">
            <div class="col-md-6">
                <h2>1. Головними є цифри, <br/>тексти є просто підписами колонок</h2>

                Я хочу показати порівнняння двох або декількох величин,
                співвіднощення між частинами цілого.<br/>
                <a href="numbers.php"><h3>Переходьте далі тут</h3></a>

                <img src="img/chart_illustrations/alghoritm.png" style="width: 80px;" />
                <img src="img/chart_illustrations/piramid.png" style="width: 80px;" />
                <img src="img/chart_illustrations/schema.png" style="width: 80px;" />
                <img src="img/chart_illustrations/timeing.png" style="width: 80px;" />
            </div>

            <div class="col-md-6">
                <h2>2. Головними є тексти, <br/>цифр немає взагалі</h2>

                <br/>
                <br/>

                <a href="text.php"><h3>Переходьте далі тут</h3></a>

                <img src="img/chart_illustrations/histogramm.png" style="width: 80px;" />
                <img src="img/chart_illustrations/linear.png" style="width: 80px;" />
                <img src="img/chart_illustrations/pie.png" style="width: 80px;" />
                <img src="img/chart_illustrations/summarizing-histogramm.png" style="width: 80px;" />
                <img src="img/chart_illustrations/voronka.png" style="width: 80px;" />
            </div>
        </div>

        <br/>
    </div>
</body>
</html>

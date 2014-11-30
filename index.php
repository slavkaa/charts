<!DOCTYPE html>
<html>
<head>
    <?php require_once('inc/html-header.inc') ?>
</head>
<body>
    <div class="container">
        <br/>
        <div class="row">
            <div class="col-md-8" style="font-size: 20px;">
                Данний сервіс допоможе вам підібрати найбільш вдалу діаграмму<br/>
                базуючись на ваших данних <br/>
                і тому, на чому ви хочете акцентуваи увагу найбільше.
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-md-8" style="font-style: italic; font-size: 17px;">
                Одні і тіж діаграмми підходять іноді для декількох варіантів відповідей.<br/>
                Нехай вас це не бентежить - у діаграммі головне те, який зміст ви хочете донести.<br/>
                Тож, будь ласка, обирайте найбільш точну для вашого випадку відповідь <br/>
                - і прямуйте далі, до своєї ідеальної діаграмми.<br/>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-md-8" style="font-size: 20px;">
                Крок перший:
            </div>
        </div>

        <br/>
        <?php $currentStep = 1; require_once('inc/progress.inc') ?>

        <br/>
        <div class="row">
            <div class="col-md-8">
                <h1>Дані якого типу головні на вашій діаграммі?</h1>
            </div>
            <div class="col-md-4"></div>
        </div>

        <br/>

        <div class="row">
            <div class="col-md-8">
                <h2>1. Головними є цифри, тексти є просто підписами колонок.</h2>
                Я хочу показати порівнняння двох або декількох величин,
                співвіднощення між частинами цілого.<br/>
                <a href="numbers.php"><h3>Переходьте далі тут.</h3></a>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="row">
            <div class="row">
                <div class="col-md-12">
                    <img src="img/chart_illustrations/alghoritm.png" style="width: 80px;" />
                    <img src="img/chart_illustrations/piramid.png" style="width: 80px;" />
                    <img src="img/chart_illustrations/schema.png" style="width: 80px;" />
                    <img src="img/chart_illustrations/timeing.png" style="width: 80px;" />
                </div>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <div class="row">
            <div class="col-md-8">
                <h2>2. Головними є тексти, цифр немає взагалі.</h2>
                <a href="text.php"><h3>Переходьте далі тут.</h3></a>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="col-md-12">
            <img src="img/chart_illustrations/histogramm.png" style="width: 80px;" />
            <img src="img/chart_illustrations/linear.png" style="width: 80px;" />
            <img src="img/chart_illustrations/pie.png" style="width: 80px;" />
            <img src="img/chart_illustrations/summarizing-histogramm.png" style="width: 80px;" />
            <img src="img/chart_illustrations/voronka.png" style="width: 80px;" />
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
</body>
</html>

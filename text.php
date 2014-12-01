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
        <div class="row" style="text-align: center;">
            <div class="col-md-12">
                <h1>Оберіть вірант, шо найбільш відповідає думці,<br/>
                    яку ви хочете показати графіком?</h1>
            </div>
        </div>
        <br/>

        <div class="row">
            <div class="col-md-4">
                <h2>Структура</h2>
                1. Вам важливо показати підпорядкованість елементів один одному.<br/>
                <br/>
                <br/>
                <br/>
                <a href="structure.php">Ієрархія (структура)(структура)</a>
                <br/>
                <br/>
                <img src="img/chart_illustrations/piramid.png" style="width: 80px;" />
                <img src="img/chart_illustrations/schema.png" style="width: 80px;" />
            </div>

            <div class="col-md-4">
                <h2>Причина-наслідок</h2>
                2. Ви хочете акцентувати увагу глядача на тому, що обьекти на сайді є єтапами первного процессу.<br/>
                Головна думка не ієрархія, а причинно-наслідковий зв’язок між обьектами.<br/>
                <br/>
                <a href="cause-effect.php">Причинно наслідковий зв’зок</a>

                <br/>
                <br/>

                <img src="img/chart_illustrations/alghoritm.png" style="width: 80px;" />
                <img src="img/chart_illustrations/timeing.png" style="width: 80px;" />
                <img src="img/chart_illustrations/voronka.png" style="width: 80px;" />
            </div>

            <div class="col-md-4">
                <h2>Перелік</h2>
                3. Вам просто потрібно показати що дані елементи існують.<br/>
                Немає ніяких акцентів, ні послідовності, ні структури.<br/>
                <br/>
                <br/>
                Перелік
                <br/>
                <br/>
                <img src="img/chart_illustrations/list.png" style="width: 80px;" />
            </div>
        </div>
    </div>

</body>
</html>

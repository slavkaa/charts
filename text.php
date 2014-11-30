<!DOCTYPE html>
<html>
<head>
    <title></title>
    <?php require_once('inc/html-header.inc') ?>
</head>
<body>
    <div class="container">
        <?php $currentStep = 2; require_once('inc/progress.inc') ?>
        <br/>
        <div class="row">
            <div class="col-md-8">
                1. Вам важливо показати підпорядкованість елементів один одному.<br/>
                <a href="structure.php">Ієрархія (структура)(структура)</a>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="row">
            <div class="row">
                <div class="col-md-12">
                    <img src="img/chart_illustrations/piramid.png" style="width: 80px;" />
                    <img src="img/chart_illustrations/schema.png" style="width: 80px;" />
                </div>
            </div>
        </div>

        <br/>
        <div class="row">
            <div class="col-md-8">
                2. Вам просто потрібно показати що дані елементи існують.
                Перелік
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="row">
            <div class="row">
                <div class="col-md-12">
                    <img src="img/chart_illustrations/list.png" style="width: 80px;" />
                </div>
            </div>
        </div>

        <br/>
        <div class="row">
            <div class="col-md-8">
                3. Ви хочете акцентувати увагу глядача на тому, що обьекти на сайді є єтапами первного процессу.
                Головна думка не ієрархія, а причинно-наслідковий зв’язок між обьектами.
                <a href="cause-effect.php">Причинно наслідковий зв’зок</a>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="row">
            <div class="row">
                <div class="col-md-12">
                    <img src="img/chart_illustrations/alghoritm.png" style="width: 80px;" />
                    <img src="img/chart_illustrations/timeing.png" style="width: 80px;" />
                    <img src="img/chart_illustrations/voronka.png" style="width: 80px;" />
                </div>
            </div>
        </div>
        <br/>

        <!--div class="row">
            <div class="col-md-8">
                <a href="contrasting.php">4. Протиставлення об’єктів</a>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="row">
            <div class="row">
                <div class="col-md-12">
                    Не можу вигадати просту діаграмму.
                </div>
            </div>
        </div-->
    </div>

<!--
Ієрархія
-- Лінійна
- Піраміда
- Воронка
- Проста послідовність

-- Не лінійна
- Схема

-- Частини одного цілого
-->

</body>
</html>

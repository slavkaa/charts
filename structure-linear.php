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
    <div class="row" style="text-align: center;">
        <div class="col-md-12">
            <p>"Елементи мають (лінійно) слідувати один за одним, важливо показати що це послідовність."</p>
            <h1>Якої ширини тести, що миють бути у комірках діаграмми?</h1>
        </div>
    </div>


    <div class="row">
        <div class="col-md-6">
            <h2>Написи широкі або ви хочете зобразити більше 3-х елементів</h2>
            1. Є написси з 4-х і більше слів, 50-ти і більше літер.<br/>
            Для того щоб напис було гарно видно, його треба розмістити у декількох рядках чи,
            при наймі, на всю ширину одного рядка.<br/>
            <br/>
            <a href="structure-linear-vertical.php">Вертикальна послідовність</a><br/>
            <br/>
            <img src="img/chart_illustrations/alghoritm.png" style="width: 80px;" />
        </div>
        <div class="col-md-6">
            <h2>Написи вузькі і елементів не більше 3-х</h2>
            2. Найбільший напис складається з 3-х і менше слів, менше 50-ти літер.<br/>
            <br/>
            <br/>
            <br/>
            <a href="structure-linear-horizontal.php">Горизонтальна послідовніть</a><br/>
            <br/>
            <img src="img/chart_illustrations/alghoritm-linear.png" style="width: 80px;" />
        </div>
    </div>
</div>

</body>
</html>

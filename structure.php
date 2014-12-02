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
        <div class="row" style="text-align: center;">
            <div class="col-md-12">
                <p>"Елементи мають (лінійно) слідувати один за одним, а також"</p>
                <h1>головним є те що елементи э ...</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <h2>Послідовністтю</h2>
                1. Треба акцентувати увагу на послідовності елементів.
                Ви хочете проіллюструвати, що єтап Б слідує за етапом А.<br/>
                <br/>
                <a href="structure-linear.php">Послідовність</a><br/>
                <br/>
                <img src="img/chart_illustrations/alghoritm.png" style="width: 80px;" />
                <img src="img/chart_illustrations/alghoritm-linear.png" style="width: 80px;" />
            </div>
            <!--div class="col-md-4">
                <h2></h2>
                Ви хочете акцентувати увагу на розгалудженності зв’язків між елементами.
                Наочно показати не лінійну підпорядкованість елементів діаграмми.<br/>
                <a href="structure-schema.php">Схема</a><br/>
                <img src="img/chart_illustrations/schema.png" style="width: 80px;" />
            </div-->
            <div class="col-md-4">
                <h2>Ієрархією</h2>
                2. Вам треба акцентувати увагу на тому, що всі елементи діаграмми складають одне ціле.<br/>
                Частини одного цілого <br/>
                <br/>
                <!-- коло теж гарно, але з’їдає багато місця.-->
                <a href="structure-pazzle.php">Ієрархія</a><br/>
                <br/>
                <img src="img/chart_illustrations/piramid.png" style="width: 80px;" />
            </div>
            <div class="col-md-4">
                <h2>Частиною одного цілого</h2>
                3. Вам треба акцентувати увагу на тому, що всі елементи діаграмми складають одне ціле.<br/>
                Частини одного цілого <br/>
                <br/>
                <!-- коло теж гарно, але з’їдає багато місця.-->
                <a href="structure-puzzle.php">Одне ціле</a><br/>
                <br/>
                <img src="img/chart_illustrations/puzzle.png" style="width: 80px;" />
                <img src="img/chart_illustrations/pie.png" style="width: 80px;" />
            </div>
        </div>
    </div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <?php require_once('inc/html-header.inc') ?>
    <title></title>
</head>
<body>
<div class="container">
    <br/>
    <?php $url = [1 => '/', 2 => 'text.php', 3 => 'structure.php',
        4 => 'structure-hierarchy.php', 5 => 'structure-hierarchy-simple.php'] ?>
    <?php
        $currentStep = 6;
        require_once('inc/progress.inc');
    ?>

    <br/>
    <br/>
    <br/>

    <div class="jumbotron" style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;">
        <h4>"Елементи мають (лінійно) слідувати один за одним, <br/> важливо показати підпорядкованість."</h4>
        <h2>Піраміда</h2>
        <div style="text-align: center; width: 100%;">
            <img src="img/chart_illustrations/piramid.png" style="width: 200px;" />
        </div>
    </div>

    <div class="jumbotron col-md-12" style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;">
        <h3>Поради при оформленні діаграмми:</h3>
        <br/>
        <?php
            $advices = [
                [
                    'label' => 'Висоти шарів мають бути однакові',
                    'texts' => [
                        'Піраміда спотворює пропорції.',
                        'Використовуйте прямокутну діаграмму, '.
                        'якщо ви хочете крім ієрархії, показати співвідношення елементів - то Вам потрібна '.
                        '<a href="http://loc.charts.com/structure-summarizing-histogramm.php">стовпчата діаграмма з накопиченням</a>'
                    ]
                ], [
                    'label' => 'Не робіть більше 8 шарів',
                    'texts' => [
                        '',
                    ]
                ], [
                    'label' => 'Зробіть виноски',
                    'texts' => [
                        '',
                    ]
                ], [
                    'label' => 'Сусідні секції мають мати контрастні кольори.',
                    'texts' => [
                        '',
                    ]
                ]
            ];
            require_once('inc/advices.inc');
        ?>
    </div>
</div>

<br/>
<br/>
<br/>

</body>
</html>

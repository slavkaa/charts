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
    <?php
    $currentStep = 3;
    require_once('inc/progress.inc');
    ?>

    <br/>
    <br/>
    <br/>

    <div class="jumbotron" style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;">
        <h4>"Ви маєте текстові данні, що є простим переліком."</h4>
        <h2>Перелік</h2>
        <div style="text-align: center; width: 100%;">
            <img src="img/chart_illustrations/list.png" style="width: 200px;" />
        </div>
    </div>

    <div class="jumbotron col-md-12" style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;">
        <h3>Поради при оформленні діаграмми:</h3>
        <br/>
        <?php
        $advices = [
            [
                'label' => 'Залиште тільки важливе',
                'texts' => [
                    'Зробіть діаграмму.',
                    'Потім подивіться на неї - може є зайва інформація?',
                    'Якісь елементи які є на схемі але про які ви не збираєьась говорити.',
                    'зайва інформація має декалька недоліків:',
                    '- вона займають місце',
                    '- ви витрачаєте час на те щоб знайти,назвати, розмістити її,',
                    '- вона обьв’язково викличє питання уважного слухача (людина буде певна що допомагає вам, бо ви нічого не сказали який елемент - забули?)',
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


<?php
if (false == isset($minHeight)) {
    $minHeight = '100px';
}
if (false == isset($headerMinHeight)) {
    $headerMinHeight = '70px';
}
?>

<div class="panel panel-default">
    <div class="panel-heading" style="text-align: center; min-height: <?= $headerMinHeight ?>;">
        <h3 class="panel-title">
            <h2><?= $title ?></h2>
        </h3>
    </div>
    <div class="panel-body" style="min-height: <?= $minHeight ?>;">
        <?php foreach ($text1 as $text): ?>
            <?= $text ?><br/>
        <?php endforeach ?>
    </div>
    <div class="panel-body" style="text-align: center;">
        <?php foreach ($images as $image): ?>
            <img src="img/<?= $image ?>" style="width: 80px;" />
        <?php endforeach ?>
    </div>
    <div class="panel-footer">
        <a class="btn btn-primary" href="<?= $nextUrl ?>" style="width: 100%;">
            Далі
        </a>
    </div>
</div>

<?php
if (false == isset($firstCellWidth)) {
    $firstCellWidth = '320px';
}
?>

<table class="table table-bordered">
    <tbody>
        <?php foreach ($advices as $line): ?>
            <tr>
                <td style="text-align: left; font-weight: bold; width: <?= $firstCellWidth ?>;">
                    <?= $line['label'] ?>
                </td>
                <td style="text-align: justify;">
                    <?php foreach ($line['texts'] as $text): ?>
                        <?= $text ?> <br/>
                    <?php endforeach ?>
                </td>
            </tr>
        <?php endforeach ?>
    </tbody>
</table>

<?php if (false == isset($url)) { $url = []; }; ?>

<div style="text-align: center; class="row">
    <div class="col-md-12">
        <?php foreach ([1,2,3,4,5] as $step): ?>
            <?php $class = 'label-default'; ?>
            <?php if ($currentStep == $step): ?>
                <?php $class = 'label-info'; ?>
            <?php endif ?>
            <?php if (isset($url[$step])) : ?>
                <a href="<?= $url[$step] ?>" class="label <?= $class ?>"
                     style="display: inline-block; font-size: 12px; text-align: center;">
                    <?= $step ?>
                </a>
            <?php else: ?>
                <span class="label <?= $class ?>" style="display: inline-block; font-size: 12px; text-align: center;">
                    <?= $step ?>
                </span>
            <?php endif; ?>
            &nbsp;
        <?php endforeach ?>
    </div>
</div>
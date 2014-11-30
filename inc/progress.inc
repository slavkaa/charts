<div>
    <h1>
        <?php foreach ([1,2,3] as $step): ?>
            <?php $class = 'label-default'; ?>
            <?php if ($currentStep == $step): ?>
                <?php $class = 'label-info'; ?>
            <?php endif ?>
            <span class="label <?= $class ?>" style="display: inline-block; text-align: center;">
                <?= $step ?>
            </span>
            &nbsp;
        <?php endforeach ?>
    </h1>
</div>
<!DOCTYPE html>
<html>
<head>
    <?php require_once('inc/html-header.inc') ?>
</head>
<body class="iw-charts">

    <div class="container">
        <!-- -- -->

        <div style="text-align: center; margin-top: 25px; margin-bottom: 25px;" class="row">
            <div class="col-md-12 locator-progress-steps">
                <h4>
                    <strong style="margin-right: 20px;">Кроки:</strong>

                    <?php foreach ([1,2,3,4,5,6,7] as $step): ?>
                        <span style="display: inline-block; text-align: center;"
                              data-id="<?= $step ?>"
                              class="label label-default locator-progress-step-number action-go-to">
                        <?= $step ?>
                    </span>
                        &nbsp;
                    <?php endforeach ?>
                </h4>
            </div>
        </div>

        <div style="background-color: #fefefe; border: 1px solid #ddd;text-align: center;"
             class="jumbotron locator-title">
            <h4 class="locator-title-small-text"></h4>
            <h2 class="locator-title-big-text"></h2>
        </div>

        <div class="row">
            <?php foreach ([1,2,3,4] as $step): ?>
                <div class="locator-choice-box locator-choice-box-<?= $step ?>
                    locator-hide-for-diagram locator-show-for-home locator-show-for-step">
                    <div class="panel panel-default css-hover-border-highlighter action-next interactive">
                        <div style="text-align: center; min-height: 70px;" class="panel-heading">
                            <h2 class="locator-choice-big-text"></h2>
                        </div>
                        <div class="panel-body">
                            <div class="locator-choice-small-text"></div>
                            <div style="text-align: center;" class="locator-choice-images"></div>
                        </div>
                        <!--div class="panel-footer">
                            <span style="width: 100%;" class="btn btn-primary">
                                Далі
                            </span>
                        </div-->
                    </div>
                </div>
            <?php endforeach ?>
        </div>

        <div style="background-color: #fefefe; border: 1px solid #ddd; text-align: center;"
             class="jumbotron col-md-12 locator-suggestions-box locator-hide-for-home locator-hide-for-step locator-show-for-diagram">
            <h3>Поради при оформленні діаграмми:</h3>
            <br>
            <table class="table table-bordered">
                <tbody>
                    <?php foreach ([1,2,3,4,5,6,7,8,9,10,11,12] as $step): ?>
                    <tr>
                        <td class="locator-suggestion-label" style="text-align: left; font-weight: bold; width: 320px;"></td>
                        <td class="locator-suggestion-text" style="text-align: justify;"></td>
                    </tr>
                    <?php endforeach ?>
                </tbody>
            </table>
        </div>
    </div>

    <br/>
    <div class="row">
        <center>v.0.003</center>
    </div>
    <br/>
</body>
</html>

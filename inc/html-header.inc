<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
<script src="js/jquery-2.1.1.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>

<script src="js/data.js"></script>
<script src="js/IW_Manager.js"></script>

<style>
    body {
        background-image: url('img/paper-2.jpg');
        background-repeat: repeat;
        background-position: center center;
        background-size: 100%;
    }

    .iw-charts .jumbotron {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .small-diagram {
        margin-bottom: 5px;
        margin-right: 10px;
        width: 80px;
    }

    .full-diagram {
        width: 200px;
    }

    .interactive {
        cursor: pointer;
    }

    .css-hover-border-highlighter:hover {
        border-color: #999;
    }

    .css-hover-border-highlighter:hover .panel-heading {
        background-color: #ddd;
        border-color: #999;
    }
</style>

<?php
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
?>

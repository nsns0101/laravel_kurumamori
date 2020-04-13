### index.html ###



<!DOCTYPE html>

<html>

<head>

    <title>Bootstrap datepicket demo</title>

    <script src="https://code.jquery.com/jquery-3.2.1.js"></script>

	<link rel="stylesheet" href="/css/jquery-ui.min.css">


 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"/>

    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>

    <script type='text/javascript' src='//code.jquery.com/jquery-1.8.3.js'></script>



    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/css/bootstrap-datepicker3.min.css">


 
    <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/js/bootstrap-datepicker.min.js"></script>

    <script src="/js/bootstrap-datepicker.kr.js" charset="UTF-8"></script>



    <script type='text/javascript'>

    $(function(){

        $('.input-group.date').datepicker({

            calendarWeeks: false,

            todayHighlight: true,

            autoclose: true,

            format: "yyyy/mm/dd",

            language: "kr"

        });

    });

    </script>

</head>



<body>

    <div class="container">

        <h1>Bootstrap datepicker</h1>

        <div class="input-group date">

            <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>

        </div>

    </div>

</body>

</html>


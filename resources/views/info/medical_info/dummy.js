
    $("#add__past_sickness").click(function(){
        // console.log($('#insurance_bool_no').val());
        $('#insurance_table').css("display","none");
    });
    function add_past_sickness(){
        // 0,1 총 두번 추가가능
        if(past_sickness_count < 2){
            // console.log(past_sickness_count);
            const add = `@include('info.medical_info.past_sickness')`;
            // $(".abcde").text("aa");
            // console.log( $(".abcde")[0]);
            $("#form__past_sickness").append(add);

            $(".add__past_sickness")[past_sickness_count].innerHTML = `과거 질환${past_sickness_count + 1}`;
            $(".past_sickness")[past_sickness_count].name = `past_sickness${past_sickness_count + 1}`;
            $(".past_sickness_supplementation")[past_sickness_count].name = `past_sickness${past_sickness_count + 1}`;
            //처음에만 실행
            if(past_sickness_count == 0){
                $(".past_sickness_btn")[1].innerHTML = "선택";
                $(".past_sickness_btn")[0].className = `btn btn-default dropdown-toggle past_sickness_btn${past_sickness_count + 1} dropdown_btn`;
                $(".dropdown-past_sickness")[0].className = `dropdown-past_sickness${past_sickness_count + 1}`;
                $(`.past_sickness`)[0].className = `past_sickness${past_sickness_count + 1}`;
                console.log( $(".dropdown-past_sickness").length);
                var leng = $(".dropdown-past_sickness").length;    //해당 클래스 명을 가진 개수
                //위에 append해서 x2배가 됐으니 처음의 것만 클래스명 변경(dropdown-past_sickness1로)
                for(var i=0; i < leng /2 - 1; i++){
                    $(".dropdown-past_sickness")[0].className = `dropdown-past_sickness${past_sickness_count + 1}`;
                }
            }
            else{
                $(".past_sickness_btn")[0].innerHTML = "선택";
            }

            // console.log($(".past_sickness_btn")[0]);
            // $(".abcde")[past_sickness_count].
            // console.log(add.$("#abcde").text());
            past_sickness_count++;
            $(".past_sickness_btn")[0].className = `btn btn-default dropdown-toggle past_sickness_btn${past_sickness_count + 1} dropdown_btn`;
            $(".add__past_sickness")[past_sickness_count].innerHTML = `과거 질환${past_sickness_count + 1}`;
            $(".past_sickness")[past_sickness_count].name = `past_sickness${past_sickness_count + 1}`;
            $(".past_sickness_supplementation")[past_sickness_count].name = `past_sickness${past_sickness_count + 1}`;
            $(".past_sickness_supplementation")[past_sickness_count].value = null;
            $(`.past_sickness`)[0].className = `past_sickness${past_sickness_count + 1}`;
            // console.log( $(".past_sickness_btn"));

            var leng = $(".dropdown-past_sickness").length;    //해당 클래스 명을 가진 개수
            for(var i=0; i < leng; i++){
                $(".dropdown-past_sickness")[0].className = `dropdown-past_sickness${past_sickness_count + 1}`;
            }
            // $(".past_sickness_btn")[0].className = `btn btn-default dropdown-toggle past_sickness_btn${past_sickness_count + 1} dropdown_btn`;
        }
    }
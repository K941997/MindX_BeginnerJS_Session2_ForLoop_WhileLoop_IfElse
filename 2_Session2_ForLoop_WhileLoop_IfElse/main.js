
//Dùng while khi số vòng chạy không xác định, thuật toán phức tạp
//Dùng for phổ biến hơn while


    //////////////////!1. Vòng lặp while:

    let str = 'abcd';

    //1. while true - vòng lặp chạy vĩnh viễn:
    while(true){

        console.log(str);
    }

    //2. while false - vòng lặp ko chạy:
    while(false){

        console.log(str);
    }

    //3. while bình thường:
    let i = 0;
    while (i < 5){

        console.log(`${i}`, str);
        i++;
    }



    //////////////////!2. Vòng lặp for:

    //for (khởi tạo; điều kiện; cập nhật giá trị) {code};

    let vongLapFor = 'Vòng lặp for';

    for (let i = 0; i < 5; i = i + 1){

        console.log('i = ' +i);
        console.log(vongLapFor);
    }




    //////////////////!3. If - else:

    let tuoi = 17;

    if (tuoi < 18){
        console.log('Dưới 18 tuổi ');
    }
    else if ( tuoi >= 18 && tuoi <= 25){
        console.log(` Từ 18 đến 25 tuổi `);
    }
    else {
        console.log(` Trên 25 tuổi `);
    }

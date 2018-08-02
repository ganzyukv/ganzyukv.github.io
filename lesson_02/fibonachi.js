//Обычная рекурсия
    function f(x){
        if(x > 1){
            return x * f(x-1);
        }else{
            return x;
        }
    }

    //Обычная рекурсия
    const ff = x => {
        return (x > 0) ? x * ff(x-1) : 1;
    };

    const S = (n, s = 0) => {
    //Хвостовая рекурсия
        return (n > 0) ? S(n - 1, s + n) : s;
    };
console.log(ff(4));

    console.log(S(5));

    console.log(f(5));

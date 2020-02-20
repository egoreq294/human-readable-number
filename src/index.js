module.exports = function toReadable (number) {
    let obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    let n = String(number).split('');
    if(n.length === 1) return obj[n];
    else if(n.length===2){
        if(number%10===0) return obj[number];
        else if(number<=20) return obj[n[0]+n[1]];
        else{
            return obj[n[0]+`${0}`]+' '+obj[n[1]];
        }
    }
    else if(n.length===3){
        if(number%100===0)
        return obj[n[0]]+' hundred';
        else if((n[1]+n[2])%10===0)
        return obj[n[0]]+' hundred '+obj[n[1]+`${0}`];
        else if(Number(n[1])===0)
        return obj[n[0]]+' hundred '+obj[n[2]];
        else if(n[1]+n[2]<=20)
        return obj[n[0]]+' hundred '+obj[`${n[1]}`+`${n[2]}`];
        else
        return obj[n[0]]+' hundred '+obj[n[1]+`${0}`]+' '+obj[n[2]];
        
    }

}

export const configPaged =(countries) =>{
    let [array, array2] = [[] , []]
    let pages = Math.ceil(countries.length/10)
    for(let i = 1; i < pages ; i++) {
        array.push(i);
        if(array.length > 1 && (i)%5 == 0){
            array2.push(array)
            array=[]
        }
        i === pages - 1 && array.length>0 ? array2.push(array): array2 = array2;
    }
    return array2
}
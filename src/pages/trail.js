// function printSeries(n,k){
//     let arr = [];
//     if(n-k >= 0){ //5-2 , 3-2, 1-2
//         for(let i = n; i >= k; i--){
//             arr.push(i);
//         }
//         console.log(arr);
//     }
//     if(!n+k === n){
//     arr.push(printSeries(n+k,n))}
//     return arr;
// }

// let a = 5
// let b = 2
// console.log(printSeries(a,b))

// function alphabet(m,arr,n){
// 	let lexico = arr;
//     console.log(lexico);
// 	for(let i=0;i<m;i++){
// 		for(j=0;j<m;j++){
// 			let value = lexico[i]+lexico[j]
//             console.log(value)
// 			lexico.push(value)
// 			console.log(lexico)
// 		}
//     }

//     console.log(lexico)
//     return lexico[n-1];
// }

// console.log(alphabet(3,['a','b','c'], 10))



// function virus(n,arr){ // 4, [4,3,5,1]
//     let viruses = arr;
//     let total=0
//     for(let i=0;i<n;i++){
// 		for(let j=0;j<n;j++){
//        if(i==j){
//            continue;
//        }
//             let value = viruses[i] * viruses[j]
//           //  console.log('value  ' + value + '  ' + viruses[i] + '  ' + viruses[j])
//           total += value;
//         //  console.log(total)
//        }
//           // console.log(total)
// 	}
//     return total;
// }

// let str = 'abbas'


// console.log(str.charAt(4))

// console.log(virus(4, [4,3,5,1]));
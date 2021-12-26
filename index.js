function findWord(arr){
	let kataPanjang = '';
	let kataPendek = '';
	if (arr === null || arr === undefined) {
		return `Invalid input`
	}else if(arr.length === 0){
		return `Tidak Ada Kata Yang Terdaftar`
	}else{
		let max = arr[0].length
		let min = arr[0].length

		for (let i = 0; i < arr.length; i++) {
			let arrElement = arr[i]
			if (min >= arrElement.length) {
				min = arrElement.length
				kataPendek = arrElement
			}
			if (max <= arrElement.length) {
				max = arrElement.length
				kataPanjang = arrElement
			}
		}

		return `Angka Maximal ${max}, Kata ${kataPanjang}, Angka Minimal ${min}, Kata ${kataPendek}`

	}
}	

console.log(findWord(['Wahyu','Rahmana','WiraAdePutra','Neva','Nurliana']))
/*console.log(findWord())
console.log(findWord([]))*/
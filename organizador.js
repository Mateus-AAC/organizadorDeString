//nivel 1
module.exports.organizar = (trs) => {
	if (typeof trs !== 'string') {
		return ''
	}
	return trs[0].toUpperCase() + trs.slice(1).toLowerCase()
}

//nivel 2
module.exports.organizarArray = palavras => {
	let resultado = palavras.map(function (trs) {
		return trs[0].toUpperCase() + trs.slice(1).toLowerCase()
	})
	return resultado
}

//nivel 3
module.exports.organizarMaiusculo = text => {
   let words = text.toLowerCase().split(" ")
       for (let a = 0; a < words.length; a++) {
	    let w = words[a]
	    words[a] = w[0].toUpperCase() + w.slice(1)
       }
    return words.join(" ")
}    

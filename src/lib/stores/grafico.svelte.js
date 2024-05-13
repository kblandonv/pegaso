let storeElement = $state(null);
let StoreCodigo = $state(null);

let elementRecomendado = $state(null);
let codigoRecomendado = $state(null);

let elementDocente = $state(null);
let codigoDocente = $state(null);

export function getStoreGrafico() {
	return {
		get codigo() {
			return StoreCodigo;
		},
        set codigo(v) {
            StoreCodigo = v;
        },
        get element() {
            return storeElement;
        },
        set element(e) {
            storeElement = e;
        },
	};
}

export function getStoreRecomendado() {
    return {
		get codigo() {
			return codigoRecomendado;
		},
        set codigo(v) {
            codigoRecomendado = v;
        },
        get element() {
            return elementRecomendado;
        },
        set element(e) {
            elementRecomendado = e;
        },
	};
}

export function getStoreDocente() {
    return {
		get codigo() {
			return codigoDocente;
		},
        set codigo(v) {
            codigoDocente = v;
        },
        get element() {
            return elementDocente;
        },
        set element(e) {
            elementDocente = e;
        },
	};
}
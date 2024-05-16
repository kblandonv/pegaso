let storeElement = $state(null);
let StoreData = $state({
    facultad: null,
    carrera: null,
    codigo: null,
});

let elementRecomendado = $state(null);
let codigoRecomendado = $state({
    facultad: null,
    carrera: null,
    codigo: null,
});

let elementDocente = $state(null);
let codigoDocente = $state({
    facultad: null,
    carrera: null,
    codigo: null,
});

export function getStoreGrafico() {
	return {
		get data() {
			return StoreData;
		},
        set data(v) {
            StoreData = v;
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
		get data() {
			return codigoRecomendado;
		},
        set data(v) {
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
		get data() {
			return codigoDocente;
		},
        set data(v) {
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
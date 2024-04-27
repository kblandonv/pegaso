let storeElement = $state(null);
let StoreCodigo = $state(null);

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
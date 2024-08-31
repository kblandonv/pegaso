import { dbController } from '$db/mongo';

export async function load() {
	return {
		listado: dbController.getListado(),
		metadata: dbController.getMetadata()
	};
}

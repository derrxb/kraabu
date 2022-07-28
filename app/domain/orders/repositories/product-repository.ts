import { ProductEntity } from "../entities/product";

export default class ProductRepository {
   static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    return new ProductEntity({
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      currency: data.currency,
      coverImage: data.coverImage,
      thumbnailImage: data.thumbnailImage,
      published: data.published,
      publicUrl: data.publicUrl,
      userId: data.userId,
    })
  }
}
import * as DataLoader from "dataloader";
import { MethodAndPropDecorator } from "type-graphql/dist/decorators/types";
interface ResolverData {
    context: any;
}
declare type BatchLoadFn<K, V> = (keys: ReadonlyArray<K>, data: ResolverData) => PromiseLike<ArrayLike<V | Error>>;
export declare function Loader<K, V, C = K>(batchLoadFn: BatchLoadFn<K, V>, options?: DataLoader.Options<K, V, C>): MethodAndPropDecorator;
export {};

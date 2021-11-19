import {Document} from './document'

export * from './document'

// Stitch Client
export interface MongodbAtlasDataApiClient {
    document: Document;
}

export interface MongodbAtlasDataApiClientOptions {
    /**
     * Base URL for Mongodb Atlas Data API
     */
    baseUrl: string;
    /**
     * Api Key
     */
    token: string
}

export default function getMongodbAtlasDataApiClient(options: MongodbAtlasDataApiClientOptions): MongodbAtlasDataApiClient;
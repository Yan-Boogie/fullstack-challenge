import * as IPFSGateway from 'ipfs';
import type { IPFS } from 'ipfs'; 
import OrbitDB  from 'orbit-db';
import KeyValueStore from 'orbit-db-kvstore';

/**
 * @todos
 * - Decouple Article schema interface as different layers
 * - Add type-di for DI pattern
 * - Move the mock to the composition root
 */
import Article from '../models/Article/schema';
import { articles as mockArticles } from '../mock/articles';

class DbService {
    private ipfs: IPFS;
    private db: OrbitDB;
    private store: KeyValueStore<Article>;

    getArticleById = async (articleId: string)=> {
        return this.store.get(articleId);
    }

    getAllArticles = async ()=> {
        return Object.values(this.store.all);
    }

    upsertArticle = async (article: Article)=> {
        await this.store.put(article.id, article);
        return true;
    }

    removeArticle = async (articleId: string)=> {
        await this.store.del(articleId);
        return true;
    }

    init = async () => {
        this.ipfs = await IPFSGateway.create();
        this.db = await OrbitDB.createInstance(this.ipfs);
        this.store = await this.db.keyvalue("articleStore");

        await this.store.load();
    }
}

export default new DbService();

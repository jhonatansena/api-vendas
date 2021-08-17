import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';

export class RedisCache {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: any): Promise<void> {
    this.client.set(key, JSON.stringify(value));
  }

  // public async recover<T>(key: string): Promise<T | null> {

  // }

  // public async invalidate(key: string): Promise<void> {

  // }
}

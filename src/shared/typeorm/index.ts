import "reflect-metadata";
import { createConnection } from 'typeorm';

try {

createConnection();

} catch (error) {
  throw new Error("Falha na conexão");

}

import env_var from 'env-var'


export let db_name:string = env_var.get('DB_NAME');
export let db_url:string = env_var.get('DB_URL');
export let folder:string = env_var.get('ENTITIES_FOLDER');

export interface Db {
  host: string;
  user: string;
  password: string;
  port: number;
  database: string;
}

export const db:Db = {
  host: env_var.get('DB_HOST'),
  user: env_var.get('DB_USER'),
  password: env_var.get('DB_PASS'),
  port: env_var.get('DB_PORT'),
  database: 'postgres'
};



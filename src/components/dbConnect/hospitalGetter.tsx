/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Client } from "pg";

export default class HospitalGetter {
  private client!: Client;

  public async connect(
    host: string,
    user: string,
    password: string,
    database: string
  ) {
    this.client = new Client({
      host: host,
      user: user,
      password: password,
      database: database
    });
    await this.client.connect();
  }

  public async query(query: string, parameters: any[] = []) {
    return (await this.client.query(query, parameters)).rows;
  }

  public async end() {
    await this.client.end();
  }
}

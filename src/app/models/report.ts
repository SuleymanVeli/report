import { DatabaseReport, Database } from './database';

export class Report{
    Id: number;
    Title: string;
    Query: string;
    Database: DatabaseReport;
}

export class ReportInsert{
    Id: number;
    Title: string;
    Query: string;
    DatabaseId: number;
}

export class HomeReport{
    Id: number;
    Title: string;
    Type:string;
    Query: string;
    Database: Database;
}
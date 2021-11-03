import { Chartmodel, Series } from './chartmodel';
import { TableModel } from './TableModel';

export class homeResult {
    Title:string;
    Type:string;
    Data: Chartmodel[];
    TableData: TableModel;
}

export class homeChart {
    Title:string;
    Type:string;
    Data: Series[];
}

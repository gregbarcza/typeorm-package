import { IndexMetadata } from "../../metadata/IndexMetadata";
import { TableIndexOptions } from "../options/TableIndexOptions";
/**
 * Database's table index stored in this class.
 */
export declare class TableIndex {
    /**
     * Index name.
     */
    name?: string;
    /**
     * Columns included in this index.
     */
    columnNames: string[];
    /**
     * Indicates if this index is unique.
     */
    isUnique?: boolean;
    /**
     * The SPATIAL modifier indexes the entire column and does not allow indexed columns to contain NULL values.
     * Works only in MySQL.
     */
    isSpatial?: boolean;
    /**
     * The FULLTEXT modifier indexes the entire column and does not allow prefixing.
     * Works only in MySQL.
     */
    isFulltext?: boolean;
    /**
     * Index filter condition.
     */
    where?: string;
    constructor(options: TableIndexOptions);
    /**
     * Creates a new copy of this index with exactly same properties.
     */
    clone(): TableIndex;
    /**
     * Creates index from the index metadata object.
     */
    static create(indexMetadata: IndexMetadata): TableIndex;
}

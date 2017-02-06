import { Generatable } from '../ts-generation';
import { Clonable } from '../utilities';
import { Node } from './Node';

/**
 * Basic import interface. Defines an import in a document.
 * If no start and end points are given, the import is considered "new".
 * 
 * @export
 * @interface Import
 */
export interface Import extends Clonable, Node, Generatable {
    /**
     * Indicates if the given import is "new" or a parsed one.
     * 
     * @type {boolean}
     * @memberOf Import
     */
    readonly isNew: boolean;

    /**
     * The library name of the given import (This actually is the part after the import statement).
     *
     * @example "express"
     *
     * @type {string}
     * @memberOf Import
     */
    libraryName: string;
}
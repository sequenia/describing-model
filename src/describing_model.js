/**
 * Base class for objects, describing entity for displaying that on the frontend (draw tables, html-forms)
 *
 * When you create inheritance of DescribingModel, you must write code like that:
 * ```
 * class SomeModel extends DescribingModel {
 *   // Override base methods here
 * }
 *
 * const instance = new SomeModel();
 * export { instance as SomeModel };
 * ```
 * @name DescribingModel
 * @class
*/
export default class DescribingModel {

  constructor() {
  }

  /**
   * Method for creating list of model filters`
   * @returns {Array.<FormFieldDescription>}
   * @example
   * class SomeModel extends DescribingModel {
   *   listFilters() {
   *     return [
   *       {name: "status"},
   *       {name: "type"},
   *       {name: "provider"}
   *     ]
   *   }
   * }
   */
  listFilters() {
    return [];
  }

  /**
   * Method for creating list of cells for tables
   * @returns {Array.<ListCellDescription>}
   * @param {Object} [items = undefined] items for display in list
   * @param {Object} [params = {}] additional params for configure cells
   * @example
   * class SomeModel extends DescribingModel {
   *   listCells(items = undefined, {param1 = "param1"} = {}) {
   *     return [
   *      {name: "id"},
   *      {name: "name"},
   *      {name: "createdAt"}
   *    ]
   *   }
   * }
   */

  listCells(items = undefined, {} = {}) {
    return [];
  }

  /**
   * Method for creating list of fields for forms
   * @param {Object} [item = undefined] item for display in form
   * @param {Object} [params = {}] additional params for configure fields
   * @returns {Array.<FormFieldDescription>}
   * @example
   * // Fields for common case
   * class SomeModel extends DescribingModel {
   * formFields(item = undefined, {param1 = "param1"} = {}) {
   *  return [
   *    {name: "id"},
   *    {name: "name"},
   *    {name: "createdAt"}
   *  ]
   * }
   */
  formFields(item = undefined, {} = {}) {
    return [];
  }

  /**
   * Function for getting uniq value of item (id, slug, guid, etc.)
   * @param {Object} item item for getting value
   * @returns {*} uniq value of item
   */
  value(item) {
    if(!item) {
      return undefined;
    }
    return item.id;
  }

  /**
   * Function for getting display value of item (title, concatenated first name and last name etc.)
   * @param {Object} item item for getting value
   * @returns {String} display value
   */

  displayValue(item) {
    if(!item) {
      return "";
    }
    return item.name;
  }

  /**
   * Scope for translating field names
   * @returns {String} scope in format "some.path.to.model.in.yml"
  */
  i18nScope() {
    return "";
  }

  /**
   * Human readable field's name
   * @param {String} fieldName name of field
   * @returns {String} human readable field's name
   */
  fieldDisplayName(fieldName) {
    return `${this.i18nScope()}.${fieldName}`;
  }

}

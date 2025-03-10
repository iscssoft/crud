import { isUndefined, isArrayStrings, isStringFull, isObject, isEqual, isNumber, isNil, objKeys } from '@iscssoft/util';

import { RequestQueryException } from './exceptions';
import { ParamsOptions, ParamOption } from './interfaces';
import { QueryFields, QueryFilter, ComparisonOperator, QueryJoin, QuerySort, CondOperator } from './types';

export const deprecatedComparisonOperatorsList = [
  'eq',
  'ne',
  'gt',
  'lt',
  'gte',
  'lte',
  'starts',
  'ends',
  'cont',
  'excl',
  'in',
  'notin',
  'isnull',
  'notnull',
  'between',
];
export const comparisonOperatorsList = [
  ...deprecatedComparisonOperatorsList,
  ...objKeys(CondOperator).map((n) => CondOperator[n]),
];

export const sortOrdersList = ['ASC', 'DESC'];

const comparisonOperatorsListStr = comparisonOperatorsList.join();
const sortOrdersListStr = sortOrdersList.join();

export function validateFields(fields: QueryFields): void {
  if (!isArrayStrings(fields)) {
    throw new RequestQueryException('Invalid fields. Array of strings expected');
  }
}

export function validateCondition(val: QueryFilter, cond: 'filter' | 'or' | 'search'): void {
  if (!isObject(val) || !isStringFull(val.field)) {
    throw new RequestQueryException(`Invalid field type in ${cond} condition. String expected`);
  }
  validateComparisonOperator(val.operator);
}

export function validateComparisonOperator(operator: ComparisonOperator): void {
  if (!comparisonOperatorsList.includes(operator)) {
    throw new RequestQueryException(`Invalid comparison operator. ${comparisonOperatorsListStr} expected`);
  }
}

export function validateJoin(join: QueryJoin): void {
  if (!isObject(join) || !isStringFull(join.field)) {
    throw new RequestQueryException('Invalid join field. String expected');
  }
  if (!isUndefined(join.select) && !isArrayStrings(join.select)) {
    throw new RequestQueryException('Invalid join select. Array of strings expected');
  }
}

export function validateSort(sort: QuerySort): void {
  if (!isObject(sort) || !isStringFull(sort.field)) {
    throw new RequestQueryException('Invalid sort field. String expected');
  }
  if (!isEqual(sort.order, sortOrdersList[0]) && !isEqual(sort.order, sortOrdersList[1])) {
    throw new RequestQueryException(`Invalid sort order. ${sortOrdersListStr} expected`);
  }
}

export function validateNumeric(
  val: number,
  num: 'limit' | 'offset' | 'page' | 'cache' | 'include_deleted' | string,
): void {
  if (!isNumber(val)) {
    throw new RequestQueryException(`Invalid ${num}. Number expected`);
  }
}

export function validateParamOption(options: ParamsOptions, name: string) {
  if (!isObject(options)) {
    throw new RequestQueryException(`Invalid param ${name}. Invalid crud options`);
  }
  const option = options[name];
  if (option && option.disabled) {
    return;
  }
  if (!isObject(option) || isNil(option.field) || isNil(option.type)) {
    throw new RequestQueryException('Invalid param option in Crud');
  }
}

export function validateUUID(str: string, name: string) {
  const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const uuidV4 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidV4.test(str) && !uuid.test(str)) {
    throw new RequestQueryException(`Invalid param ${name}. UUID string expected`);
  }
}

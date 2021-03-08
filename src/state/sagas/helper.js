/**
 * Internal function to create async saga action types.
 *
 * @param  String type Type to create
 * @return Object      Containing ACTION|SUCCESS|FAILED properties
 */
export function createSagaAction(type) {
  return {
    REQUEST: `${type}.REQUEST`,
    SUCCESS: `${type}.SUCCESS`,
    FAILURE: `${type}.FAILURE`
  };
}

export function createActionsConstants(names) {
  return names.reduce((acc, name) => ({ ...acc, [name]: createSagaAction(name) }), {});
}

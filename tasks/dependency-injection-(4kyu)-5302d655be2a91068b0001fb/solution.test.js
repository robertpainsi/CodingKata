import {describe, it} from '@jest/globals';
import DI from './solution';

describe('Test suite', () => {
  it('Test', () => {
    var deps = {
      'dep1': function() {
        return 'this is dep1';
      },
      'dep2': function() {
        return 'this is dep2';
      },
      'dep3': function() {
        return 'this is dep3';
      },
      'dep4': function() {
        return 'this is dep4';
      },
    };

    var di = new DI(deps);

    var myFunc = di.inject(function(dep3, dep1, dep2) {
      return [dep1(), dep2(), dep3()].join(' -> ');
    });

    expect(myFunc()).toBe('this is dep1 -> this is dep2 -> this is dep3');
  });
});

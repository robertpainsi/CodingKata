/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function(dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function(func) {
  let args = [];
  const argumentsPart = func.toString().match(/\(([^)]*)\)/);
  if (argumentsPart) {
    args = argumentsPart[1].split(/,\s+/)
      .filter((argumentName) => this.dependency.hasOwnProperty(argumentName))
      .map((argumentName) => this.dependency[argumentName]);
  }
  return () => func.apply(null, args);
};

export default DI;

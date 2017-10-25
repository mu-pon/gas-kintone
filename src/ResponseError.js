var ResponseError = function ResponseError(response) {
  this.response = response;

  var body = response.getBody();
  if (body instanceof Object) {
    this.id = body.id;
    this.code = body.code;
    this.message = body.message;
  } else {
    this.message = body;
  }
};

ResponseError.prototype.toString = function toString() {
  return this.message;
};
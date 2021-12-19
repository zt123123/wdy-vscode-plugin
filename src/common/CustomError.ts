const enum ErrorLevel {
  Default,
  Low,
  Medium,
  High,
}

export default class CustomError extends Error {
  public level: ErrorLevel = ErrorLevel.Default;
  constructor(message?: string) {
    super(message);
    console.error(message);
  }
}

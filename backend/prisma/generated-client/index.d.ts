
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Expert
 * 
 */
export type Expert = $Result.DefaultSelection<Prisma.$ExpertPayload>
/**
 * Model ExpertVersion
 * 
 */
export type ExpertVersion = $Result.DefaultSelection<Prisma.$ExpertVersionPayload>
/**
 * Model ExpertDependency
 * 
 */
export type ExpertDependency = $Result.DefaultSelection<Prisma.$ExpertDependencyPayload>
/**
 * Model Debate
 * 
 */
export type Debate = $Result.DefaultSelection<Prisma.$DebatePayload>
/**
 * Model Argument
 * 
 */
export type Argument = $Result.DefaultSelection<Prisma.$ArgumentPayload>
/**
 * Model Evidence
 * 
 */
export type Evidence = $Result.DefaultSelection<Prisma.$EvidencePayload>
/**
 * Model ReputationScore
 * 
 */
export type ReputationScore = $Result.DefaultSelection<Prisma.$ReputationScorePayload>
/**
 * Model ReputationEvent
 * 
 */
export type ReputationEvent = $Result.DefaultSelection<Prisma.$ReputationEventPayload>
/**
 * Model AuditEvent
 * 
 */
export type AuditEvent = $Result.DefaultSelection<Prisma.$AuditEventPayload>
/**
 * Model SystemSetting
 * 
 */
export type SystemSetting = $Result.DefaultSelection<Prisma.$SystemSettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  REVIEWER: 'REVIEWER',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const ExpertStatus: {
  DRAFT: 'DRAFT',
  REVIEW: 'REVIEW',
  ACTIVE: 'ACTIVE',
  DEPRECATED: 'DEPRECATED',
  RETIRED: 'RETIRED'
};

export type ExpertStatus = (typeof ExpertStatus)[keyof typeof ExpertStatus]


export const DependencyType: {
  REQUIRES: 'REQUIRES',
  RECOMMENDS: 'RECOMMENDS',
  CONFLICTS: 'CONFLICTS'
};

export type DependencyType = (typeof DependencyType)[keyof typeof DependencyType]


export const DebateStatus: {
  OPEN: 'OPEN',
  VOTING: 'VOTING',
  RESOLVED: 'RESOLVED',
  STALE: 'STALE',
  CLOSED: 'CLOSED'
};

export type DebateStatus = (typeof DebateStatus)[keyof typeof DebateStatus]


export const ArgumentType: {
  CLAIM: 'CLAIM',
  SUPPORT: 'SUPPORT',
  COUNTER: 'COUNTER',
  QUESTION: 'QUESTION',
  SYNTHESIS: 'SYNTHESIS'
};

export type ArgumentType = (typeof ArgumentType)[keyof typeof ArgumentType]


export const ArgumentStatus: {
  ACTIVE: 'ACTIVE',
  WITHDRAWN: 'WITHDRAWN',
  SUPERSEDED: 'SUPERSEDED'
};

export type ArgumentStatus = (typeof ArgumentStatus)[keyof typeof ArgumentStatus]


export const ValidationStatus: {
  PENDING: 'PENDING',
  VALIDATED: 'VALIDATED',
  DISPUTED: 'DISPUTED',
  REFUTED: 'REFUTED'
};

export type ValidationStatus = (typeof ValidationStatus)[keyof typeof ValidationStatus]


export const EvidenceType: {
  CITATION: 'CITATION',
  DATA: 'DATA',
  EXPERT_OUTPUT: 'EXPERT_OUTPUT',
  EXTERNAL_LINK: 'EXTERNAL_LINK'
};

export type EvidenceType = (typeof EvidenceType)[keyof typeof EvidenceType]


export const VerificationStatus: {
  UNVERIFIED: 'UNVERIFIED',
  VERIFIED: 'VERIFIED',
  DISPUTED: 'DISPUTED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const ReputationRank: {
  NOVICE: 'NOVICE',
  CONTRIBUTOR: 'CONTRIBUTOR',
  EXPERT: 'EXPERT',
  AUTHORITY: 'AUTHORITY',
  STEWARD: 'STEWARD'
};

export type ReputationRank = (typeof ReputationRank)[keyof typeof ReputationRank]


export const ReputationEventType: {
  ARGUMENT_VALIDATED: 'ARGUMENT_VALIDATED',
  ARGUMENT_REFUTED: 'ARGUMENT_REFUTED',
  EXPERT_IMPROVED: 'EXPERT_IMPROVED',
  REVIEW_ACCEPTED: 'REVIEW_ACCEPTED',
  REVIEW_REJECTED: 'REVIEW_REJECTED',
  DECAY: 'DECAY',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT'
};

export type ReputationEventType = (typeof ReputationEventType)[keyof typeof ReputationEventType]


export const ActorType: {
  USER: 'USER',
  SYSTEM: 'SYSTEM',
  AUTOMATED_JOB: 'AUTOMATED_JOB'
};

export type ActorType = (typeof ActorType)[keyof typeof ActorType]


export const RetentionClass: {
  STANDARD: 'STANDARD',
  EXTENDED: 'EXTENDED',
  PERMANENT: 'PERMANENT'
};

export type RetentionClass = (typeof RetentionClass)[keyof typeof RetentionClass]


export const SensitivityLevel: {
  PUBLIC: 'PUBLIC',
  INTERNAL: 'INTERNAL',
  CONFIDENTIAL: 'CONFIDENTIAL'
};

export type SensitivityLevel = (typeof SensitivityLevel)[keyof typeof SensitivityLevel]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type ExpertStatus = $Enums.ExpertStatus

export const ExpertStatus: typeof $Enums.ExpertStatus

export type DependencyType = $Enums.DependencyType

export const DependencyType: typeof $Enums.DependencyType

export type DebateStatus = $Enums.DebateStatus

export const DebateStatus: typeof $Enums.DebateStatus

export type ArgumentType = $Enums.ArgumentType

export const ArgumentType: typeof $Enums.ArgumentType

export type ArgumentStatus = $Enums.ArgumentStatus

export const ArgumentStatus: typeof $Enums.ArgumentStatus

export type ValidationStatus = $Enums.ValidationStatus

export const ValidationStatus: typeof $Enums.ValidationStatus

export type EvidenceType = $Enums.EvidenceType

export const EvidenceType: typeof $Enums.EvidenceType

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type ReputationRank = $Enums.ReputationRank

export const ReputationRank: typeof $Enums.ReputationRank

export type ReputationEventType = $Enums.ReputationEventType

export const ReputationEventType: typeof $Enums.ReputationEventType

export type ActorType = $Enums.ActorType

export const ActorType: typeof $Enums.ActorType

export type RetentionClass = $Enums.RetentionClass

export const RetentionClass: typeof $Enums.RetentionClass

export type SensitivityLevel = $Enums.SensitivityLevel

export const SensitivityLevel: typeof $Enums.SensitivityLevel

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.expert`: Exposes CRUD operations for the **Expert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experts
    * const experts = await prisma.expert.findMany()
    * ```
    */
  get expert(): Prisma.ExpertDelegate<ExtArgs>;

  /**
   * `prisma.expertVersion`: Exposes CRUD operations for the **ExpertVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpertVersions
    * const expertVersions = await prisma.expertVersion.findMany()
    * ```
    */
  get expertVersion(): Prisma.ExpertVersionDelegate<ExtArgs>;

  /**
   * `prisma.expertDependency`: Exposes CRUD operations for the **ExpertDependency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpertDependencies
    * const expertDependencies = await prisma.expertDependency.findMany()
    * ```
    */
  get expertDependency(): Prisma.ExpertDependencyDelegate<ExtArgs>;

  /**
   * `prisma.debate`: Exposes CRUD operations for the **Debate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Debates
    * const debates = await prisma.debate.findMany()
    * ```
    */
  get debate(): Prisma.DebateDelegate<ExtArgs>;

  /**
   * `prisma.argument`: Exposes CRUD operations for the **Argument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arguments
    * const arguments = await prisma.argument.findMany()
    * ```
    */
  get argument(): Prisma.ArgumentDelegate<ExtArgs>;

  /**
   * `prisma.evidence`: Exposes CRUD operations for the **Evidence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evidences
    * const evidences = await prisma.evidence.findMany()
    * ```
    */
  get evidence(): Prisma.EvidenceDelegate<ExtArgs>;

  /**
   * `prisma.reputationScore`: Exposes CRUD operations for the **ReputationScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReputationScores
    * const reputationScores = await prisma.reputationScore.findMany()
    * ```
    */
  get reputationScore(): Prisma.ReputationScoreDelegate<ExtArgs>;

  /**
   * `prisma.reputationEvent`: Exposes CRUD operations for the **ReputationEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReputationEvents
    * const reputationEvents = await prisma.reputationEvent.findMany()
    * ```
    */
  get reputationEvent(): Prisma.ReputationEventDelegate<ExtArgs>;

  /**
   * `prisma.auditEvent`: Exposes CRUD operations for the **AuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditEvents
    * const auditEvents = await prisma.auditEvent.findMany()
    * ```
    */
  get auditEvent(): Prisma.AuditEventDelegate<ExtArgs>;

  /**
   * `prisma.systemSetting`: Exposes CRUD operations for the **SystemSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSetting.findMany()
    * ```
    */
  get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Expert: 'Expert',
    ExpertVersion: 'ExpertVersion',
    ExpertDependency: 'ExpertDependency',
    Debate: 'Debate',
    Argument: 'Argument',
    Evidence: 'Evidence',
    ReputationScore: 'ReputationScore',
    ReputationEvent: 'ReputationEvent',
    AuditEvent: 'AuditEvent',
    SystemSetting: 'SystemSetting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'session' | 'expert' | 'expertVersion' | 'expertDependency' | 'debate' | 'argument' | 'evidence' | 'reputationScore' | 'reputationEvent' | 'auditEvent' | 'systemSetting'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Expert: {
        payload: Prisma.$ExpertPayload<ExtArgs>
        fields: Prisma.ExpertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findFirst: {
            args: Prisma.ExpertFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findMany: {
            args: Prisma.ExpertFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          create: {
            args: Prisma.ExpertCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          createMany: {
            args: Prisma.ExpertCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExpertDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          update: {
            args: Prisma.ExpertUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          deleteMany: {
            args: Prisma.ExpertDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExpertUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          aggregate: {
            args: Prisma.ExpertAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExpert>
          }
          groupBy: {
            args: Prisma.ExpertGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExpertGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExpertFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExpertAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ExpertCountArgs<ExtArgs>,
            result: $Utils.Optional<ExpertCountAggregateOutputType> | number
          }
        }
      }
      ExpertVersion: {
        payload: Prisma.$ExpertVersionPayload<ExtArgs>
        fields: Prisma.ExpertVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertVersionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertVersionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertVersionPayload>
          }
          findFirst: {
            args: Prisma.ExpertVersionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertVersionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertVersionPayload>
          }
          findMany: {
            args: Prisma.ExpertVersionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertVersionPayload>[]
          }
          create: {
            args: Prisma.ExpertVersionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertVersionPayload>
          }
          createMany: {
            args: Prisma.ExpertVersionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExpertVersionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertVersionPayload>
          }
          update: {
            args: Prisma.ExpertVersionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertVersionPayload>
          }
          deleteMany: {
            args: Prisma.ExpertVersionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertVersionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExpertVersionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertVersionPayload>
          }
          aggregate: {
            args: Prisma.ExpertVersionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExpertVersion>
          }
          groupBy: {
            args: Prisma.ExpertVersionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExpertVersionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExpertVersionFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExpertVersionAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ExpertVersionCountArgs<ExtArgs>,
            result: $Utils.Optional<ExpertVersionCountAggregateOutputType> | number
          }
        }
      }
      ExpertDependency: {
        payload: Prisma.$ExpertDependencyPayload<ExtArgs>
        fields: Prisma.ExpertDependencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertDependencyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertDependencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertDependencyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertDependencyPayload>
          }
          findFirst: {
            args: Prisma.ExpertDependencyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertDependencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertDependencyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertDependencyPayload>
          }
          findMany: {
            args: Prisma.ExpertDependencyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertDependencyPayload>[]
          }
          create: {
            args: Prisma.ExpertDependencyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertDependencyPayload>
          }
          createMany: {
            args: Prisma.ExpertDependencyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExpertDependencyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertDependencyPayload>
          }
          update: {
            args: Prisma.ExpertDependencyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertDependencyPayload>
          }
          deleteMany: {
            args: Prisma.ExpertDependencyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertDependencyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExpertDependencyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpertDependencyPayload>
          }
          aggregate: {
            args: Prisma.ExpertDependencyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExpertDependency>
          }
          groupBy: {
            args: Prisma.ExpertDependencyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExpertDependencyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExpertDependencyFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExpertDependencyAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ExpertDependencyCountArgs<ExtArgs>,
            result: $Utils.Optional<ExpertDependencyCountAggregateOutputType> | number
          }
        }
      }
      Debate: {
        payload: Prisma.$DebatePayload<ExtArgs>
        fields: Prisma.DebateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebatePayload>
          }
          findFirst: {
            args: Prisma.DebateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebatePayload>
          }
          findMany: {
            args: Prisma.DebateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebatePayload>[]
          }
          create: {
            args: Prisma.DebateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebatePayload>
          }
          createMany: {
            args: Prisma.DebateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DebateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebatePayload>
          }
          update: {
            args: Prisma.DebateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebatePayload>
          }
          deleteMany: {
            args: Prisma.DebateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DebateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DebateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebatePayload>
          }
          aggregate: {
            args: Prisma.DebateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDebate>
          }
          groupBy: {
            args: Prisma.DebateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DebateGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DebateFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DebateAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DebateCountArgs<ExtArgs>,
            result: $Utils.Optional<DebateCountAggregateOutputType> | number
          }
        }
      }
      Argument: {
        payload: Prisma.$ArgumentPayload<ExtArgs>
        fields: Prisma.ArgumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArgumentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArgumentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          findFirst: {
            args: Prisma.ArgumentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArgumentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          findMany: {
            args: Prisma.ArgumentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>[]
          }
          create: {
            args: Prisma.ArgumentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          createMany: {
            args: Prisma.ArgumentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArgumentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          update: {
            args: Prisma.ArgumentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          deleteMany: {
            args: Prisma.ArgumentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArgumentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArgumentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          aggregate: {
            args: Prisma.ArgumentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArgument>
          }
          groupBy: {
            args: Prisma.ArgumentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArgumentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArgumentFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArgumentAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ArgumentCountArgs<ExtArgs>,
            result: $Utils.Optional<ArgumentCountAggregateOutputType> | number
          }
        }
      }
      Evidence: {
        payload: Prisma.$EvidencePayload<ExtArgs>
        fields: Prisma.EvidenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvidenceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvidenceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findFirst: {
            args: Prisma.EvidenceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvidenceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findMany: {
            args: Prisma.EvidenceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          create: {
            args: Prisma.EvidenceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          createMany: {
            args: Prisma.EvidenceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EvidenceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          update: {
            args: Prisma.EvidenceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          deleteMany: {
            args: Prisma.EvidenceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EvidenceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EvidenceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          aggregate: {
            args: Prisma.EvidenceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvidence>
          }
          groupBy: {
            args: Prisma.EvidenceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EvidenceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EvidenceFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.EvidenceAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.EvidenceCountArgs<ExtArgs>,
            result: $Utils.Optional<EvidenceCountAggregateOutputType> | number
          }
        }
      }
      ReputationScore: {
        payload: Prisma.$ReputationScorePayload<ExtArgs>
        fields: Prisma.ReputationScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReputationScoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReputationScoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationScorePayload>
          }
          findFirst: {
            args: Prisma.ReputationScoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReputationScoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationScorePayload>
          }
          findMany: {
            args: Prisma.ReputationScoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationScorePayload>[]
          }
          create: {
            args: Prisma.ReputationScoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationScorePayload>
          }
          createMany: {
            args: Prisma.ReputationScoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReputationScoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationScorePayload>
          }
          update: {
            args: Prisma.ReputationScoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationScorePayload>
          }
          deleteMany: {
            args: Prisma.ReputationScoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReputationScoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReputationScoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationScorePayload>
          }
          aggregate: {
            args: Prisma.ReputationScoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReputationScore>
          }
          groupBy: {
            args: Prisma.ReputationScoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReputationScoreGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReputationScoreFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReputationScoreAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ReputationScoreCountArgs<ExtArgs>,
            result: $Utils.Optional<ReputationScoreCountAggregateOutputType> | number
          }
        }
      }
      ReputationEvent: {
        payload: Prisma.$ReputationEventPayload<ExtArgs>
        fields: Prisma.ReputationEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReputationEventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReputationEventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationEventPayload>
          }
          findFirst: {
            args: Prisma.ReputationEventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReputationEventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationEventPayload>
          }
          findMany: {
            args: Prisma.ReputationEventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationEventPayload>[]
          }
          create: {
            args: Prisma.ReputationEventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationEventPayload>
          }
          createMany: {
            args: Prisma.ReputationEventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReputationEventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationEventPayload>
          }
          update: {
            args: Prisma.ReputationEventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationEventPayload>
          }
          deleteMany: {
            args: Prisma.ReputationEventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReputationEventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReputationEventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReputationEventPayload>
          }
          aggregate: {
            args: Prisma.ReputationEventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReputationEvent>
          }
          groupBy: {
            args: Prisma.ReputationEventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReputationEventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReputationEventFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReputationEventAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ReputationEventCountArgs<ExtArgs>,
            result: $Utils.Optional<ReputationEventCountAggregateOutputType> | number
          }
        }
      }
      AuditEvent: {
        payload: Prisma.$AuditEventPayload<ExtArgs>
        fields: Prisma.AuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditEventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditEventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findFirst: {
            args: Prisma.AuditEventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditEventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findMany: {
            args: Prisma.AuditEventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          create: {
            args: Prisma.AuditEventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          createMany: {
            args: Prisma.AuditEventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuditEventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          update: {
            args: Prisma.AuditEventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          deleteMany: {
            args: Prisma.AuditEventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuditEventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuditEventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          aggregate: {
            args: Prisma.AuditEventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuditEvent>
          }
          groupBy: {
            args: Prisma.AuditEventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuditEventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AuditEventFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AuditEventAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AuditEventCountArgs<ExtArgs>,
            result: $Utils.Optional<AuditEventCountAggregateOutputType> | number
          }
        }
      }
      SystemSetting: {
        payload: Prisma.$SystemSettingPayload<ExtArgs>
        fields: Prisma.SystemSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findMany: {
            args: Prisma.SystemSettingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          create: {
            args: Prisma.SystemSettingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          createMany: {
            args: Prisma.SystemSettingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemSettingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          update: {
            args: Prisma.SystemSettingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemSettingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemSetting>
          }
          groupBy: {
            args: Prisma.SystemSettingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemSettingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SystemSettingFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SystemSettingAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SystemSettingCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemSettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    experts: number
    expertVersions: number
    debates: number
    arguments: number
    reputationScores: number
    auditEvents: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experts?: boolean | UserCountOutputTypeCountExpertsArgs
    expertVersions?: boolean | UserCountOutputTypeCountExpertVersionsArgs
    debates?: boolean | UserCountOutputTypeCountDebatesArgs
    arguments?: boolean | UserCountOutputTypeCountArgumentsArgs
    reputationScores?: boolean | UserCountOutputTypeCountReputationScoresArgs
    auditEvents?: boolean | UserCountOutputTypeCountAuditEventsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpertVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertVersionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDebatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebateWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArgumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArgumentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReputationScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReputationScoreWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }



  /**
   * Count Type ExpertCountOutputType
   */

  export type ExpertCountOutputType = {
    versions: number
    debates: number
    dependencies: number
    dependents: number
  }

  export type ExpertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | ExpertCountOutputTypeCountVersionsArgs
    debates?: boolean | ExpertCountOutputTypeCountDebatesArgs
    dependencies?: boolean | ExpertCountOutputTypeCountDependenciesArgs
    dependents?: boolean | ExpertCountOutputTypeCountDependentsArgs
  }

  // Custom InputTypes

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertCountOutputType
     */
    select?: ExpertCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertVersionWhereInput
  }


  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountDebatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebateWhereInput
  }


  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountDependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertDependencyWhereInput
  }


  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountDependentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertDependencyWhereInput
  }



  /**
   * Count Type DebateCountOutputType
   */

  export type DebateCountOutputType = {
    arguments: number
  }

  export type DebateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arguments?: boolean | DebateCountOutputTypeCountArgumentsArgs
  }

  // Custom InputTypes

  /**
   * DebateCountOutputType without action
   */
  export type DebateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateCountOutputType
     */
    select?: DebateCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DebateCountOutputType without action
   */
  export type DebateCountOutputTypeCountArgumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArgumentWhereInput
  }



  /**
   * Count Type ArgumentCountOutputType
   */

  export type ArgumentCountOutputType = {
    childArguments: number
    evidence: number
  }

  export type ArgumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childArguments?: boolean | ArgumentCountOutputTypeCountChildArgumentsArgs
    evidence?: boolean | ArgumentCountOutputTypeCountEvidenceArgs
  }

  // Custom InputTypes

  /**
   * ArgumentCountOutputType without action
   */
  export type ArgumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArgumentCountOutputType
     */
    select?: ArgumentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArgumentCountOutputType without action
   */
  export type ArgumentCountOutputTypeCountChildArgumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArgumentWhereInput
  }


  /**
   * ArgumentCountOutputType without action
   */
  export type ArgumentCountOutputTypeCountEvidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
  }



  /**
   * Count Type ReputationScoreCountOutputType
   */

  export type ReputationScoreCountOutputType = {
    history: number
  }

  export type ReputationScoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | ReputationScoreCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes

  /**
   * ReputationScoreCountOutputType without action
   */
  export type ReputationScoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScoreCountOutputType
     */
    select?: ReputationScoreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ReputationScoreCountOutputType without action
   */
  export type ReputationScoreCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReputationEventWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    displayName: number
    avatarUrl: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    avatarUrl?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    avatarUrl?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    avatarUrl?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    experts?: boolean | User$expertsArgs<ExtArgs>
    expertVersions?: boolean | User$expertVersionsArgs<ExtArgs>
    debates?: boolean | User$debatesArgs<ExtArgs>
    arguments?: boolean | User$argumentsArgs<ExtArgs>
    reputationScores?: boolean | User$reputationScoresArgs<ExtArgs>
    auditEvents?: boolean | User$auditEventsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experts?: boolean | User$expertsArgs<ExtArgs>
    expertVersions?: boolean | User$expertVersionsArgs<ExtArgs>
    debates?: boolean | User$debatesArgs<ExtArgs>
    arguments?: boolean | User$argumentsArgs<ExtArgs>
    reputationScores?: boolean | User$reputationScoresArgs<ExtArgs>
    auditEvents?: boolean | User$auditEventsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      experts: Prisma.$ExpertPayload<ExtArgs>[]
      expertVersions: Prisma.$ExpertVersionPayload<ExtArgs>[]
      debates: Prisma.$DebatePayload<ExtArgs>[]
      arguments: Prisma.$ArgumentPayload<ExtArgs>[]
      reputationScores: Prisma.$ReputationScorePayload<ExtArgs>[]
      auditEvents: Prisma.$AuditEventPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      displayName: string
      avatarUrl: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    experts<T extends User$expertsArgs<ExtArgs> = {}>(args?: Subset<T, User$expertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findMany'> | Null>;

    expertVersions<T extends User$expertVersionsArgs<ExtArgs> = {}>(args?: Subset<T, User$expertVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'findMany'> | Null>;

    debates<T extends User$debatesArgs<ExtArgs> = {}>(args?: Subset<T, User$debatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'findMany'> | Null>;

    arguments<T extends User$argumentsArgs<ExtArgs> = {}>(args?: Subset<T, User$argumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findMany'> | Null>;

    reputationScores<T extends User$reputationScoresArgs<ExtArgs> = {}>(args?: Subset<T, User$reputationScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'findMany'> | Null>;

    auditEvents<T extends User$auditEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.experts
   */
  export type User$expertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    where?: ExpertWhereInput
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    cursor?: ExpertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }


  /**
   * User.expertVersions
   */
  export type User$expertVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    where?: ExpertVersionWhereInput
    orderBy?: ExpertVersionOrderByWithRelationInput | ExpertVersionOrderByWithRelationInput[]
    cursor?: ExpertVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertVersionScalarFieldEnum | ExpertVersionScalarFieldEnum[]
  }


  /**
   * User.debates
   */
  export type User$debatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    where?: DebateWhereInput
    orderBy?: DebateOrderByWithRelationInput | DebateOrderByWithRelationInput[]
    cursor?: DebateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebateScalarFieldEnum | DebateScalarFieldEnum[]
  }


  /**
   * User.arguments
   */
  export type User$argumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    where?: ArgumentWhereInput
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    cursor?: ArgumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }


  /**
   * User.reputationScores
   */
  export type User$reputationScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    where?: ReputationScoreWhereInput
    orderBy?: ReputationScoreOrderByWithRelationInput | ReputationScoreOrderByWithRelationInput[]
    cursor?: ReputationScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReputationScoreScalarFieldEnum | ReputationScoreScalarFieldEnum[]
  }


  /**
   * User.auditEvents
   */
  export type User$auditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    cursor?: AuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    ipAddress: number
    userAgent: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    ipAddress?: true
    userAgent?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    ipAddress: string | null
    userAgent: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
      ipAddress: string | null
      userAgent: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SessionFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SessionAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model Expert
   */

  export type AggregateExpert = {
    _count: ExpertCountAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  export type ExpertMinAggregateOutputType = {
    id: string | null
    slug: string | null
    currentVersionId: string | null
    status: $Enums.ExpertStatus | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpertMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    currentVersionId: string | null
    status: $Enums.ExpertStatus | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpertCountAggregateOutputType = {
    id: number
    slug: number
    currentVersionId: number
    status: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpertMinAggregateInputType = {
    id?: true
    slug?: true
    currentVersionId?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpertMaxAggregateInputType = {
    id?: true
    slug?: true
    currentVersionId?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpertCountAggregateInputType = {
    id?: true
    slug?: true
    currentVersionId?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expert to aggregate.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experts
    **/
    _count?: true | ExpertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertMaxAggregateInputType
  }

  export type GetExpertAggregateType<T extends ExpertAggregateArgs> = {
        [P in keyof T & keyof AggregateExpert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpert[P]>
      : GetScalarType<T[P], AggregateExpert[P]>
  }




  export type ExpertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertWhereInput
    orderBy?: ExpertOrderByWithAggregationInput | ExpertOrderByWithAggregationInput[]
    by: ExpertScalarFieldEnum[] | ExpertScalarFieldEnum
    having?: ExpertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertCountAggregateInputType | true
    _min?: ExpertMinAggregateInputType
    _max?: ExpertMaxAggregateInputType
  }

  export type ExpertGroupByOutputType = {
    id: string
    slug: string
    currentVersionId: string | null
    status: $Enums.ExpertStatus
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: ExpertCountAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  type GetExpertGroupByPayload<T extends ExpertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertGroupByOutputType[P]>
        }
      >
    >


  export type ExpertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    currentVersionId?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Expert$versionsArgs<ExtArgs>
    debates?: boolean | Expert$debatesArgs<ExtArgs>
    dependencies?: boolean | Expert$dependenciesArgs<ExtArgs>
    dependents?: boolean | Expert$dependentsArgs<ExtArgs>
    _count?: boolean | ExpertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expert"]>

  export type ExpertSelectScalar = {
    id?: boolean
    slug?: boolean
    currentVersionId?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Expert$versionsArgs<ExtArgs>
    debates?: boolean | Expert$debatesArgs<ExtArgs>
    dependencies?: boolean | Expert$dependenciesArgs<ExtArgs>
    dependents?: boolean | Expert$dependentsArgs<ExtArgs>
    _count?: boolean | ExpertCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ExpertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expert"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      versions: Prisma.$ExpertVersionPayload<ExtArgs>[]
      debates: Prisma.$DebatePayload<ExtArgs>[]
      dependencies: Prisma.$ExpertDependencyPayload<ExtArgs>[]
      dependents: Prisma.$ExpertDependencyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      currentVersionId: string | null
      status: $Enums.ExpertStatus
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expert"]>
    composites: {}
  }


  type ExpertGetPayload<S extends boolean | null | undefined | ExpertDefaultArgs> = $Result.GetResult<Prisma.$ExpertPayload, S>

  type ExpertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpertCountAggregateInputType | true
    }

  export interface ExpertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expert'], meta: { name: 'Expert' } }
    /**
     * Find zero or one Expert that matches the filter.
     * @param {ExpertFindUniqueArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExpertFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertFindUniqueArgs<ExtArgs>>
    ): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Expert that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExpertFindUniqueOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExpertFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Expert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExpertFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertFindFirstArgs<ExtArgs>>
    ): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Expert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExpertFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Experts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experts
     * const experts = await prisma.expert.findMany()
     * 
     * // Get first 10 Experts
     * const experts = await prisma.expert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertWithIdOnly = await prisma.expert.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExpertFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Expert.
     * @param {ExpertCreateArgs} args - Arguments to create a Expert.
     * @example
     * // Create one Expert
     * const Expert = await prisma.expert.create({
     *   data: {
     *     // ... data to create a Expert
     *   }
     * })
     * 
    **/
    create<T extends ExpertCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertCreateArgs<ExtArgs>>
    ): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Experts.
     *     @param {ExpertCreateManyArgs} args - Arguments to create many Experts.
     *     @example
     *     // Create many Experts
     *     const expert = await prisma.expert.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExpertCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expert.
     * @param {ExpertDeleteArgs} args - Arguments to delete one Expert.
     * @example
     * // Delete one Expert
     * const Expert = await prisma.expert.delete({
     *   where: {
     *     // ... filter to delete one Expert
     *   }
     * })
     * 
    **/
    delete<T extends ExpertDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertDeleteArgs<ExtArgs>>
    ): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Expert.
     * @param {ExpertUpdateArgs} args - Arguments to update one Expert.
     * @example
     * // Update one Expert
     * const expert = await prisma.expert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExpertUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertUpdateArgs<ExtArgs>>
    ): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Experts.
     * @param {ExpertDeleteManyArgs} args - Arguments to filter Experts to delete.
     * @example
     * // Delete a few Experts
     * const { count } = await prisma.expert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExpertDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experts
     * const expert = await prisma.expert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExpertUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expert.
     * @param {ExpertUpsertArgs} args - Arguments to update or create a Expert.
     * @example
     * // Update or create a Expert
     * const expert = await prisma.expert.upsert({
     *   create: {
     *     // ... data to create a Expert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expert we want to update
     *   }
     * })
    **/
    upsert<T extends ExpertUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertUpsertArgs<ExtArgs>>
    ): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Experts that matches the filter.
     * @param {ExpertFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const expert = await prisma.expert.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ExpertFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Expert.
     * @param {ExpertAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const expert = await prisma.expert.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ExpertAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertCountArgs} args - Arguments to filter Experts to count.
     * @example
     * // Count the number of Experts
     * const count = await prisma.expert.count({
     *   where: {
     *     // ... the filter for the Experts we want to count
     *   }
     * })
    **/
    count<T extends ExpertCountArgs>(
      args?: Subset<T, ExpertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpertAggregateArgs>(args: Subset<T, ExpertAggregateArgs>): Prisma.PrismaPromise<GetExpertAggregateType<T>>

    /**
     * Group by Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertGroupByArgs['orderBy'] }
        : { orderBy?: ExpertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expert model
   */
  readonly fields: ExpertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    versions<T extends Expert$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'findMany'> | Null>;

    debates<T extends Expert$debatesArgs<ExtArgs> = {}>(args?: Subset<T, Expert$debatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'findMany'> | Null>;

    dependencies<T extends Expert$dependenciesArgs<ExtArgs> = {}>(args?: Subset<T, Expert$dependenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'findMany'> | Null>;

    dependents<T extends Expert$dependentsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$dependentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Expert model
   */ 
  interface ExpertFieldRefs {
    readonly id: FieldRef<"Expert", 'String'>
    readonly slug: FieldRef<"Expert", 'String'>
    readonly currentVersionId: FieldRef<"Expert", 'String'>
    readonly status: FieldRef<"Expert", 'ExpertStatus'>
    readonly createdById: FieldRef<"Expert", 'String'>
    readonly createdAt: FieldRef<"Expert", 'DateTime'>
    readonly updatedAt: FieldRef<"Expert", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Expert findUnique
   */
  export type ExpertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }


  /**
   * Expert findUniqueOrThrow
   */
  export type ExpertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }


  /**
   * Expert findFirst
   */
  export type ExpertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }


  /**
   * Expert findFirstOrThrow
   */
  export type ExpertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }


  /**
   * Expert findMany
   */
  export type ExpertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Experts to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }


  /**
   * Expert create
   */
  export type ExpertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The data needed to create a Expert.
     */
    data: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
  }


  /**
   * Expert createMany
   */
  export type ExpertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experts.
     */
    data: ExpertCreateManyInput | ExpertCreateManyInput[]
  }


  /**
   * Expert update
   */
  export type ExpertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The data needed to update a Expert.
     */
    data: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
    /**
     * Choose, which Expert to update.
     */
    where: ExpertWhereUniqueInput
  }


  /**
   * Expert updateMany
   */
  export type ExpertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experts.
     */
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyInput>
    /**
     * Filter which Experts to update
     */
    where?: ExpertWhereInput
  }


  /**
   * Expert upsert
   */
  export type ExpertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The filter to search for the Expert to update in case it exists.
     */
    where: ExpertWhereUniqueInput
    /**
     * In case the Expert found by the `where` argument doesn't exist, create a new Expert with this data.
     */
    create: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
    /**
     * In case the Expert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
  }


  /**
   * Expert delete
   */
  export type ExpertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter which Expert to delete.
     */
    where: ExpertWhereUniqueInput
  }


  /**
   * Expert deleteMany
   */
  export type ExpertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experts to delete
     */
    where?: ExpertWhereInput
  }


  /**
   * Expert findRaw
   */
  export type ExpertFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Expert aggregateRaw
   */
  export type ExpertAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Expert.versions
   */
  export type Expert$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    where?: ExpertVersionWhereInput
    orderBy?: ExpertVersionOrderByWithRelationInput | ExpertVersionOrderByWithRelationInput[]
    cursor?: ExpertVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertVersionScalarFieldEnum | ExpertVersionScalarFieldEnum[]
  }


  /**
   * Expert.debates
   */
  export type Expert$debatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    where?: DebateWhereInput
    orderBy?: DebateOrderByWithRelationInput | DebateOrderByWithRelationInput[]
    cursor?: DebateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebateScalarFieldEnum | DebateScalarFieldEnum[]
  }


  /**
   * Expert.dependencies
   */
  export type Expert$dependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    where?: ExpertDependencyWhereInput
    orderBy?: ExpertDependencyOrderByWithRelationInput | ExpertDependencyOrderByWithRelationInput[]
    cursor?: ExpertDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertDependencyScalarFieldEnum | ExpertDependencyScalarFieldEnum[]
  }


  /**
   * Expert.dependents
   */
  export type Expert$dependentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    where?: ExpertDependencyWhereInput
    orderBy?: ExpertDependencyOrderByWithRelationInput | ExpertDependencyOrderByWithRelationInput[]
    cursor?: ExpertDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertDependencyScalarFieldEnum | ExpertDependencyScalarFieldEnum[]
  }


  /**
   * Expert without action
   */
  export type ExpertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertInclude<ExtArgs> | null
  }



  /**
   * Model ExpertVersion
   */

  export type AggregateExpertVersion = {
    _count: ExpertVersionCountAggregateOutputType | null
    _avg: ExpertVersionAvgAggregateOutputType | null
    _sum: ExpertVersionSumAggregateOutputType | null
    _min: ExpertVersionMinAggregateOutputType | null
    _max: ExpertVersionMaxAggregateOutputType | null
  }

  export type ExpertVersionAvgAggregateOutputType = {
    versionNumber: number | null
    accuracyScore: number | null
    usageCount: number | null
  }

  export type ExpertVersionSumAggregateOutputType = {
    versionNumber: number | null
    accuracyScore: number | null
    usageCount: number | null
  }

  export type ExpertVersionMinAggregateOutputType = {
    id: string | null
    expertId: string | null
    versionNumber: number | null
    changeReason: string | null
    createdById: string | null
    createdAt: Date | null
    accuracyScore: number | null
    usageCount: number | null
    lastInvokedAt: Date | null
  }

  export type ExpertVersionMaxAggregateOutputType = {
    id: string | null
    expertId: string | null
    versionNumber: number | null
    changeReason: string | null
    createdById: string | null
    createdAt: Date | null
    accuracyScore: number | null
    usageCount: number | null
    lastInvokedAt: Date | null
  }

  export type ExpertVersionCountAggregateOutputType = {
    id: number
    expertId: number
    versionNumber: number
    scope: number
    permissions: number
    logicDefinition: number
    changeReason: number
    createdById: number
    createdAt: number
    accuracyScore: number
    usageCount: number
    lastInvokedAt: number
    _all: number
  }


  export type ExpertVersionAvgAggregateInputType = {
    versionNumber?: true
    accuracyScore?: true
    usageCount?: true
  }

  export type ExpertVersionSumAggregateInputType = {
    versionNumber?: true
    accuracyScore?: true
    usageCount?: true
  }

  export type ExpertVersionMinAggregateInputType = {
    id?: true
    expertId?: true
    versionNumber?: true
    changeReason?: true
    createdById?: true
    createdAt?: true
    accuracyScore?: true
    usageCount?: true
    lastInvokedAt?: true
  }

  export type ExpertVersionMaxAggregateInputType = {
    id?: true
    expertId?: true
    versionNumber?: true
    changeReason?: true
    createdById?: true
    createdAt?: true
    accuracyScore?: true
    usageCount?: true
    lastInvokedAt?: true
  }

  export type ExpertVersionCountAggregateInputType = {
    id?: true
    expertId?: true
    versionNumber?: true
    scope?: true
    permissions?: true
    logicDefinition?: true
    changeReason?: true
    createdById?: true
    createdAt?: true
    accuracyScore?: true
    usageCount?: true
    lastInvokedAt?: true
    _all?: true
  }

  export type ExpertVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertVersion to aggregate.
     */
    where?: ExpertVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertVersions to fetch.
     */
    orderBy?: ExpertVersionOrderByWithRelationInput | ExpertVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpertVersions
    **/
    _count?: true | ExpertVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpertVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpertVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertVersionMaxAggregateInputType
  }

  export type GetExpertVersionAggregateType<T extends ExpertVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertVersion[P]>
      : GetScalarType<T[P], AggregateExpertVersion[P]>
  }




  export type ExpertVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertVersionWhereInput
    orderBy?: ExpertVersionOrderByWithAggregationInput | ExpertVersionOrderByWithAggregationInput[]
    by: ExpertVersionScalarFieldEnum[] | ExpertVersionScalarFieldEnum
    having?: ExpertVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertVersionCountAggregateInputType | true
    _avg?: ExpertVersionAvgAggregateInputType
    _sum?: ExpertVersionSumAggregateInputType
    _min?: ExpertVersionMinAggregateInputType
    _max?: ExpertVersionMaxAggregateInputType
  }

  export type ExpertVersionGroupByOutputType = {
    id: string
    expertId: string
    versionNumber: number
    scope: JsonValue
    permissions: JsonValue
    logicDefinition: JsonValue
    changeReason: string
    createdById: string
    createdAt: Date
    accuracyScore: number
    usageCount: number
    lastInvokedAt: Date | null
    _count: ExpertVersionCountAggregateOutputType | null
    _avg: ExpertVersionAvgAggregateOutputType | null
    _sum: ExpertVersionSumAggregateOutputType | null
    _min: ExpertVersionMinAggregateOutputType | null
    _max: ExpertVersionMaxAggregateOutputType | null
  }

  type GetExpertVersionGroupByPayload<T extends ExpertVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertVersionGroupByOutputType[P]>
        }
      >
    >


  export type ExpertVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expertId?: boolean
    versionNumber?: boolean
    scope?: boolean
    permissions?: boolean
    logicDefinition?: boolean
    changeReason?: boolean
    createdById?: boolean
    createdAt?: boolean
    accuracyScore?: boolean
    usageCount?: boolean
    lastInvokedAt?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertVersion"]>

  export type ExpertVersionSelectScalar = {
    id?: boolean
    expertId?: boolean
    versionNumber?: boolean
    scope?: boolean
    permissions?: boolean
    logicDefinition?: boolean
    changeReason?: boolean
    createdById?: boolean
    createdAt?: boolean
    accuracyScore?: boolean
    usageCount?: boolean
    lastInvokedAt?: boolean
  }

  export type ExpertVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ExpertVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpertVersion"
    objects: {
      expert: Prisma.$ExpertPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expertId: string
      versionNumber: number
      scope: Prisma.JsonValue
      permissions: Prisma.JsonValue
      logicDefinition: Prisma.JsonValue
      changeReason: string
      createdById: string
      createdAt: Date
      accuracyScore: number
      usageCount: number
      lastInvokedAt: Date | null
    }, ExtArgs["result"]["expertVersion"]>
    composites: {}
  }


  type ExpertVersionGetPayload<S extends boolean | null | undefined | ExpertVersionDefaultArgs> = $Result.GetResult<Prisma.$ExpertVersionPayload, S>

  type ExpertVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpertVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpertVersionCountAggregateInputType | true
    }

  export interface ExpertVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpertVersion'], meta: { name: 'ExpertVersion' } }
    /**
     * Find zero or one ExpertVersion that matches the filter.
     * @param {ExpertVersionFindUniqueArgs} args - Arguments to find a ExpertVersion
     * @example
     * // Get one ExpertVersion
     * const expertVersion = await prisma.expertVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExpertVersionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertVersionFindUniqueArgs<ExtArgs>>
    ): Prisma__ExpertVersionClient<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExpertVersion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExpertVersionFindUniqueOrThrowArgs} args - Arguments to find a ExpertVersion
     * @example
     * // Get one ExpertVersion
     * const expertVersion = await prisma.expertVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExpertVersionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertVersionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExpertVersionClient<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExpertVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertVersionFindFirstArgs} args - Arguments to find a ExpertVersion
     * @example
     * // Get one ExpertVersion
     * const expertVersion = await prisma.expertVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExpertVersionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertVersionFindFirstArgs<ExtArgs>>
    ): Prisma__ExpertVersionClient<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExpertVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertVersionFindFirstOrThrowArgs} args - Arguments to find a ExpertVersion
     * @example
     * // Get one ExpertVersion
     * const expertVersion = await prisma.expertVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExpertVersionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertVersionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExpertVersionClient<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExpertVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertVersionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpertVersions
     * const expertVersions = await prisma.expertVersion.findMany()
     * 
     * // Get first 10 ExpertVersions
     * const expertVersions = await prisma.expertVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertVersionWithIdOnly = await prisma.expertVersion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExpertVersionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertVersionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExpertVersion.
     * @param {ExpertVersionCreateArgs} args - Arguments to create a ExpertVersion.
     * @example
     * // Create one ExpertVersion
     * const ExpertVersion = await prisma.expertVersion.create({
     *   data: {
     *     // ... data to create a ExpertVersion
     *   }
     * })
     * 
    **/
    create<T extends ExpertVersionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertVersionCreateArgs<ExtArgs>>
    ): Prisma__ExpertVersionClient<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExpertVersions.
     *     @param {ExpertVersionCreateManyArgs} args - Arguments to create many ExpertVersions.
     *     @example
     *     // Create many ExpertVersions
     *     const expertVersion = await prisma.expertVersion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExpertVersionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertVersionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExpertVersion.
     * @param {ExpertVersionDeleteArgs} args - Arguments to delete one ExpertVersion.
     * @example
     * // Delete one ExpertVersion
     * const ExpertVersion = await prisma.expertVersion.delete({
     *   where: {
     *     // ... filter to delete one ExpertVersion
     *   }
     * })
     * 
    **/
    delete<T extends ExpertVersionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertVersionDeleteArgs<ExtArgs>>
    ): Prisma__ExpertVersionClient<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExpertVersion.
     * @param {ExpertVersionUpdateArgs} args - Arguments to update one ExpertVersion.
     * @example
     * // Update one ExpertVersion
     * const expertVersion = await prisma.expertVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExpertVersionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertVersionUpdateArgs<ExtArgs>>
    ): Prisma__ExpertVersionClient<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExpertVersions.
     * @param {ExpertVersionDeleteManyArgs} args - Arguments to filter ExpertVersions to delete.
     * @example
     * // Delete a few ExpertVersions
     * const { count } = await prisma.expertVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExpertVersionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertVersionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpertVersions
     * const expertVersion = await prisma.expertVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExpertVersionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertVersionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpertVersion.
     * @param {ExpertVersionUpsertArgs} args - Arguments to update or create a ExpertVersion.
     * @example
     * // Update or create a ExpertVersion
     * const expertVersion = await prisma.expertVersion.upsert({
     *   create: {
     *     // ... data to create a ExpertVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpertVersion we want to update
     *   }
     * })
    **/
    upsert<T extends ExpertVersionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertVersionUpsertArgs<ExtArgs>>
    ): Prisma__ExpertVersionClient<$Result.GetResult<Prisma.$ExpertVersionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ExpertVersions that matches the filter.
     * @param {ExpertVersionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const expertVersion = await prisma.expertVersion.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ExpertVersionFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ExpertVersion.
     * @param {ExpertVersionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const expertVersion = await prisma.expertVersion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ExpertVersionAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ExpertVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertVersionCountArgs} args - Arguments to filter ExpertVersions to count.
     * @example
     * // Count the number of ExpertVersions
     * const count = await prisma.expertVersion.count({
     *   where: {
     *     // ... the filter for the ExpertVersions we want to count
     *   }
     * })
    **/
    count<T extends ExpertVersionCountArgs>(
      args?: Subset<T, ExpertVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpertVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpertVersionAggregateArgs>(args: Subset<T, ExpertVersionAggregateArgs>): Prisma.PrismaPromise<GetExpertVersionAggregateType<T>>

    /**
     * Group by ExpertVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpertVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertVersionGroupByArgs['orderBy'] }
        : { orderBy?: ExpertVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpertVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpertVersion model
   */
  readonly fields: ExpertVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpertVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExpertVersion model
   */ 
  interface ExpertVersionFieldRefs {
    readonly id: FieldRef<"ExpertVersion", 'String'>
    readonly expertId: FieldRef<"ExpertVersion", 'String'>
    readonly versionNumber: FieldRef<"ExpertVersion", 'Int'>
    readonly scope: FieldRef<"ExpertVersion", 'Json'>
    readonly permissions: FieldRef<"ExpertVersion", 'Json'>
    readonly logicDefinition: FieldRef<"ExpertVersion", 'Json'>
    readonly changeReason: FieldRef<"ExpertVersion", 'String'>
    readonly createdById: FieldRef<"ExpertVersion", 'String'>
    readonly createdAt: FieldRef<"ExpertVersion", 'DateTime'>
    readonly accuracyScore: FieldRef<"ExpertVersion", 'Float'>
    readonly usageCount: FieldRef<"ExpertVersion", 'Int'>
    readonly lastInvokedAt: FieldRef<"ExpertVersion", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ExpertVersion findUnique
   */
  export type ExpertVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    /**
     * Filter, which ExpertVersion to fetch.
     */
    where: ExpertVersionWhereUniqueInput
  }


  /**
   * ExpertVersion findUniqueOrThrow
   */
  export type ExpertVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    /**
     * Filter, which ExpertVersion to fetch.
     */
    where: ExpertVersionWhereUniqueInput
  }


  /**
   * ExpertVersion findFirst
   */
  export type ExpertVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    /**
     * Filter, which ExpertVersion to fetch.
     */
    where?: ExpertVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertVersions to fetch.
     */
    orderBy?: ExpertVersionOrderByWithRelationInput | ExpertVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertVersions.
     */
    cursor?: ExpertVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertVersions.
     */
    distinct?: ExpertVersionScalarFieldEnum | ExpertVersionScalarFieldEnum[]
  }


  /**
   * ExpertVersion findFirstOrThrow
   */
  export type ExpertVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    /**
     * Filter, which ExpertVersion to fetch.
     */
    where?: ExpertVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertVersions to fetch.
     */
    orderBy?: ExpertVersionOrderByWithRelationInput | ExpertVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertVersions.
     */
    cursor?: ExpertVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertVersions.
     */
    distinct?: ExpertVersionScalarFieldEnum | ExpertVersionScalarFieldEnum[]
  }


  /**
   * ExpertVersion findMany
   */
  export type ExpertVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    /**
     * Filter, which ExpertVersions to fetch.
     */
    where?: ExpertVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertVersions to fetch.
     */
    orderBy?: ExpertVersionOrderByWithRelationInput | ExpertVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpertVersions.
     */
    cursor?: ExpertVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertVersions.
     */
    skip?: number
    distinct?: ExpertVersionScalarFieldEnum | ExpertVersionScalarFieldEnum[]
  }


  /**
   * ExpertVersion create
   */
  export type ExpertVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpertVersion.
     */
    data: XOR<ExpertVersionCreateInput, ExpertVersionUncheckedCreateInput>
  }


  /**
   * ExpertVersion createMany
   */
  export type ExpertVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpertVersions.
     */
    data: ExpertVersionCreateManyInput | ExpertVersionCreateManyInput[]
  }


  /**
   * ExpertVersion update
   */
  export type ExpertVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpertVersion.
     */
    data: XOR<ExpertVersionUpdateInput, ExpertVersionUncheckedUpdateInput>
    /**
     * Choose, which ExpertVersion to update.
     */
    where: ExpertVersionWhereUniqueInput
  }


  /**
   * ExpertVersion updateMany
   */
  export type ExpertVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpertVersions.
     */
    data: XOR<ExpertVersionUpdateManyMutationInput, ExpertVersionUncheckedUpdateManyInput>
    /**
     * Filter which ExpertVersions to update
     */
    where?: ExpertVersionWhereInput
  }


  /**
   * ExpertVersion upsert
   */
  export type ExpertVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpertVersion to update in case it exists.
     */
    where: ExpertVersionWhereUniqueInput
    /**
     * In case the ExpertVersion found by the `where` argument doesn't exist, create a new ExpertVersion with this data.
     */
    create: XOR<ExpertVersionCreateInput, ExpertVersionUncheckedCreateInput>
    /**
     * In case the ExpertVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertVersionUpdateInput, ExpertVersionUncheckedUpdateInput>
  }


  /**
   * ExpertVersion delete
   */
  export type ExpertVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
    /**
     * Filter which ExpertVersion to delete.
     */
    where: ExpertVersionWhereUniqueInput
  }


  /**
   * ExpertVersion deleteMany
   */
  export type ExpertVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertVersions to delete
     */
    where?: ExpertVersionWhereInput
  }


  /**
   * ExpertVersion findRaw
   */
  export type ExpertVersionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ExpertVersion aggregateRaw
   */
  export type ExpertVersionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ExpertVersion without action
   */
  export type ExpertVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertVersion
     */
    select?: ExpertVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertVersionInclude<ExtArgs> | null
  }



  /**
   * Model ExpertDependency
   */

  export type AggregateExpertDependency = {
    _count: ExpertDependencyCountAggregateOutputType | null
    _min: ExpertDependencyMinAggregateOutputType | null
    _max: ExpertDependencyMaxAggregateOutputType | null
  }

  export type ExpertDependencyMinAggregateOutputType = {
    id: string | null
    dependentExpertId: string | null
    requiredExpertId: string | null
    dependencyType: $Enums.DependencyType | null
    createdAt: Date | null
  }

  export type ExpertDependencyMaxAggregateOutputType = {
    id: string | null
    dependentExpertId: string | null
    requiredExpertId: string | null
    dependencyType: $Enums.DependencyType | null
    createdAt: Date | null
  }

  export type ExpertDependencyCountAggregateOutputType = {
    id: number
    dependentExpertId: number
    requiredExpertId: number
    dependencyType: number
    createdAt: number
    _all: number
  }


  export type ExpertDependencyMinAggregateInputType = {
    id?: true
    dependentExpertId?: true
    requiredExpertId?: true
    dependencyType?: true
    createdAt?: true
  }

  export type ExpertDependencyMaxAggregateInputType = {
    id?: true
    dependentExpertId?: true
    requiredExpertId?: true
    dependencyType?: true
    createdAt?: true
  }

  export type ExpertDependencyCountAggregateInputType = {
    id?: true
    dependentExpertId?: true
    requiredExpertId?: true
    dependencyType?: true
    createdAt?: true
    _all?: true
  }

  export type ExpertDependencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertDependency to aggregate.
     */
    where?: ExpertDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertDependencies to fetch.
     */
    orderBy?: ExpertDependencyOrderByWithRelationInput | ExpertDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpertDependencies
    **/
    _count?: true | ExpertDependencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertDependencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertDependencyMaxAggregateInputType
  }

  export type GetExpertDependencyAggregateType<T extends ExpertDependencyAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertDependency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertDependency[P]>
      : GetScalarType<T[P], AggregateExpertDependency[P]>
  }




  export type ExpertDependencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertDependencyWhereInput
    orderBy?: ExpertDependencyOrderByWithAggregationInput | ExpertDependencyOrderByWithAggregationInput[]
    by: ExpertDependencyScalarFieldEnum[] | ExpertDependencyScalarFieldEnum
    having?: ExpertDependencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertDependencyCountAggregateInputType | true
    _min?: ExpertDependencyMinAggregateInputType
    _max?: ExpertDependencyMaxAggregateInputType
  }

  export type ExpertDependencyGroupByOutputType = {
    id: string
    dependentExpertId: string
    requiredExpertId: string
    dependencyType: $Enums.DependencyType
    createdAt: Date
    _count: ExpertDependencyCountAggregateOutputType | null
    _min: ExpertDependencyMinAggregateOutputType | null
    _max: ExpertDependencyMaxAggregateOutputType | null
  }

  type GetExpertDependencyGroupByPayload<T extends ExpertDependencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertDependencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertDependencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertDependencyGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertDependencyGroupByOutputType[P]>
        }
      >
    >


  export type ExpertDependencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dependentExpertId?: boolean
    requiredExpertId?: boolean
    dependencyType?: boolean
    createdAt?: boolean
    dependentExpert?: boolean | ExpertDefaultArgs<ExtArgs>
    requiredExpert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertDependency"]>

  export type ExpertDependencySelectScalar = {
    id?: boolean
    dependentExpertId?: boolean
    requiredExpertId?: boolean
    dependencyType?: boolean
    createdAt?: boolean
  }

  export type ExpertDependencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependentExpert?: boolean | ExpertDefaultArgs<ExtArgs>
    requiredExpert?: boolean | ExpertDefaultArgs<ExtArgs>
  }


  export type $ExpertDependencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpertDependency"
    objects: {
      dependentExpert: Prisma.$ExpertPayload<ExtArgs>
      requiredExpert: Prisma.$ExpertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dependentExpertId: string
      requiredExpertId: string
      dependencyType: $Enums.DependencyType
      createdAt: Date
    }, ExtArgs["result"]["expertDependency"]>
    composites: {}
  }


  type ExpertDependencyGetPayload<S extends boolean | null | undefined | ExpertDependencyDefaultArgs> = $Result.GetResult<Prisma.$ExpertDependencyPayload, S>

  type ExpertDependencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpertDependencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpertDependencyCountAggregateInputType | true
    }

  export interface ExpertDependencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpertDependency'], meta: { name: 'ExpertDependency' } }
    /**
     * Find zero or one ExpertDependency that matches the filter.
     * @param {ExpertDependencyFindUniqueArgs} args - Arguments to find a ExpertDependency
     * @example
     * // Get one ExpertDependency
     * const expertDependency = await prisma.expertDependency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExpertDependencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertDependencyFindUniqueArgs<ExtArgs>>
    ): Prisma__ExpertDependencyClient<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExpertDependency that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExpertDependencyFindUniqueOrThrowArgs} args - Arguments to find a ExpertDependency
     * @example
     * // Get one ExpertDependency
     * const expertDependency = await prisma.expertDependency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExpertDependencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertDependencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExpertDependencyClient<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExpertDependency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertDependencyFindFirstArgs} args - Arguments to find a ExpertDependency
     * @example
     * // Get one ExpertDependency
     * const expertDependency = await prisma.expertDependency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExpertDependencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertDependencyFindFirstArgs<ExtArgs>>
    ): Prisma__ExpertDependencyClient<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExpertDependency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertDependencyFindFirstOrThrowArgs} args - Arguments to find a ExpertDependency
     * @example
     * // Get one ExpertDependency
     * const expertDependency = await prisma.expertDependency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExpertDependencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertDependencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExpertDependencyClient<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExpertDependencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertDependencyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpertDependencies
     * const expertDependencies = await prisma.expertDependency.findMany()
     * 
     * // Get first 10 ExpertDependencies
     * const expertDependencies = await prisma.expertDependency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertDependencyWithIdOnly = await prisma.expertDependency.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExpertDependencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertDependencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExpertDependency.
     * @param {ExpertDependencyCreateArgs} args - Arguments to create a ExpertDependency.
     * @example
     * // Create one ExpertDependency
     * const ExpertDependency = await prisma.expertDependency.create({
     *   data: {
     *     // ... data to create a ExpertDependency
     *   }
     * })
     * 
    **/
    create<T extends ExpertDependencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertDependencyCreateArgs<ExtArgs>>
    ): Prisma__ExpertDependencyClient<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExpertDependencies.
     *     @param {ExpertDependencyCreateManyArgs} args - Arguments to create many ExpertDependencies.
     *     @example
     *     // Create many ExpertDependencies
     *     const expertDependency = await prisma.expertDependency.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExpertDependencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertDependencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExpertDependency.
     * @param {ExpertDependencyDeleteArgs} args - Arguments to delete one ExpertDependency.
     * @example
     * // Delete one ExpertDependency
     * const ExpertDependency = await prisma.expertDependency.delete({
     *   where: {
     *     // ... filter to delete one ExpertDependency
     *   }
     * })
     * 
    **/
    delete<T extends ExpertDependencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertDependencyDeleteArgs<ExtArgs>>
    ): Prisma__ExpertDependencyClient<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExpertDependency.
     * @param {ExpertDependencyUpdateArgs} args - Arguments to update one ExpertDependency.
     * @example
     * // Update one ExpertDependency
     * const expertDependency = await prisma.expertDependency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExpertDependencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertDependencyUpdateArgs<ExtArgs>>
    ): Prisma__ExpertDependencyClient<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExpertDependencies.
     * @param {ExpertDependencyDeleteManyArgs} args - Arguments to filter ExpertDependencies to delete.
     * @example
     * // Delete a few ExpertDependencies
     * const { count } = await prisma.expertDependency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExpertDependencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpertDependencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertDependencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpertDependencies
     * const expertDependency = await prisma.expertDependency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExpertDependencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertDependencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpertDependency.
     * @param {ExpertDependencyUpsertArgs} args - Arguments to update or create a ExpertDependency.
     * @example
     * // Update or create a ExpertDependency
     * const expertDependency = await prisma.expertDependency.upsert({
     *   create: {
     *     // ... data to create a ExpertDependency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpertDependency we want to update
     *   }
     * })
    **/
    upsert<T extends ExpertDependencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExpertDependencyUpsertArgs<ExtArgs>>
    ): Prisma__ExpertDependencyClient<$Result.GetResult<Prisma.$ExpertDependencyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ExpertDependencies that matches the filter.
     * @param {ExpertDependencyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const expertDependency = await prisma.expertDependency.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ExpertDependencyFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ExpertDependency.
     * @param {ExpertDependencyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const expertDependency = await prisma.expertDependency.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ExpertDependencyAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ExpertDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertDependencyCountArgs} args - Arguments to filter ExpertDependencies to count.
     * @example
     * // Count the number of ExpertDependencies
     * const count = await prisma.expertDependency.count({
     *   where: {
     *     // ... the filter for the ExpertDependencies we want to count
     *   }
     * })
    **/
    count<T extends ExpertDependencyCountArgs>(
      args?: Subset<T, ExpertDependencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertDependencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpertDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertDependencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpertDependencyAggregateArgs>(args: Subset<T, ExpertDependencyAggregateArgs>): Prisma.PrismaPromise<GetExpertDependencyAggregateType<T>>

    /**
     * Group by ExpertDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertDependencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpertDependencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertDependencyGroupByArgs['orderBy'] }
        : { orderBy?: ExpertDependencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpertDependencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertDependencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpertDependency model
   */
  readonly fields: ExpertDependencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpertDependency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertDependencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dependentExpert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    requiredExpert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExpertDependency model
   */ 
  interface ExpertDependencyFieldRefs {
    readonly id: FieldRef<"ExpertDependency", 'String'>
    readonly dependentExpertId: FieldRef<"ExpertDependency", 'String'>
    readonly requiredExpertId: FieldRef<"ExpertDependency", 'String'>
    readonly dependencyType: FieldRef<"ExpertDependency", 'DependencyType'>
    readonly createdAt: FieldRef<"ExpertDependency", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ExpertDependency findUnique
   */
  export type ExpertDependencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ExpertDependency to fetch.
     */
    where: ExpertDependencyWhereUniqueInput
  }


  /**
   * ExpertDependency findUniqueOrThrow
   */
  export type ExpertDependencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ExpertDependency to fetch.
     */
    where: ExpertDependencyWhereUniqueInput
  }


  /**
   * ExpertDependency findFirst
   */
  export type ExpertDependencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ExpertDependency to fetch.
     */
    where?: ExpertDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertDependencies to fetch.
     */
    orderBy?: ExpertDependencyOrderByWithRelationInput | ExpertDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertDependencies.
     */
    cursor?: ExpertDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertDependencies.
     */
    distinct?: ExpertDependencyScalarFieldEnum | ExpertDependencyScalarFieldEnum[]
  }


  /**
   * ExpertDependency findFirstOrThrow
   */
  export type ExpertDependencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ExpertDependency to fetch.
     */
    where?: ExpertDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertDependencies to fetch.
     */
    orderBy?: ExpertDependencyOrderByWithRelationInput | ExpertDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertDependencies.
     */
    cursor?: ExpertDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertDependencies.
     */
    distinct?: ExpertDependencyScalarFieldEnum | ExpertDependencyScalarFieldEnum[]
  }


  /**
   * ExpertDependency findMany
   */
  export type ExpertDependencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ExpertDependencies to fetch.
     */
    where?: ExpertDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertDependencies to fetch.
     */
    orderBy?: ExpertDependencyOrderByWithRelationInput | ExpertDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpertDependencies.
     */
    cursor?: ExpertDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertDependencies.
     */
    skip?: number
    distinct?: ExpertDependencyScalarFieldEnum | ExpertDependencyScalarFieldEnum[]
  }


  /**
   * ExpertDependency create
   */
  export type ExpertDependencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpertDependency.
     */
    data: XOR<ExpertDependencyCreateInput, ExpertDependencyUncheckedCreateInput>
  }


  /**
   * ExpertDependency createMany
   */
  export type ExpertDependencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpertDependencies.
     */
    data: ExpertDependencyCreateManyInput | ExpertDependencyCreateManyInput[]
  }


  /**
   * ExpertDependency update
   */
  export type ExpertDependencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpertDependency.
     */
    data: XOR<ExpertDependencyUpdateInput, ExpertDependencyUncheckedUpdateInput>
    /**
     * Choose, which ExpertDependency to update.
     */
    where: ExpertDependencyWhereUniqueInput
  }


  /**
   * ExpertDependency updateMany
   */
  export type ExpertDependencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpertDependencies.
     */
    data: XOR<ExpertDependencyUpdateManyMutationInput, ExpertDependencyUncheckedUpdateManyInput>
    /**
     * Filter which ExpertDependencies to update
     */
    where?: ExpertDependencyWhereInput
  }


  /**
   * ExpertDependency upsert
   */
  export type ExpertDependencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpertDependency to update in case it exists.
     */
    where: ExpertDependencyWhereUniqueInput
    /**
     * In case the ExpertDependency found by the `where` argument doesn't exist, create a new ExpertDependency with this data.
     */
    create: XOR<ExpertDependencyCreateInput, ExpertDependencyUncheckedCreateInput>
    /**
     * In case the ExpertDependency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertDependencyUpdateInput, ExpertDependencyUncheckedUpdateInput>
  }


  /**
   * ExpertDependency delete
   */
  export type ExpertDependencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
    /**
     * Filter which ExpertDependency to delete.
     */
    where: ExpertDependencyWhereUniqueInput
  }


  /**
   * ExpertDependency deleteMany
   */
  export type ExpertDependencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertDependencies to delete
     */
    where?: ExpertDependencyWhereInput
  }


  /**
   * ExpertDependency findRaw
   */
  export type ExpertDependencyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ExpertDependency aggregateRaw
   */
  export type ExpertDependencyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ExpertDependency without action
   */
  export type ExpertDependencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertDependency
     */
    select?: ExpertDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertDependencyInclude<ExtArgs> | null
  }



  /**
   * Model Debate
   */

  export type AggregateDebate = {
    _count: DebateCountAggregateOutputType | null
    _min: DebateMinAggregateOutputType | null
    _max: DebateMaxAggregateOutputType | null
  }

  export type DebateMinAggregateOutputType = {
    id: string | null
    expertId: string | null
    topic: string | null
    description: string | null
    status: $Enums.DebateStatus | null
    resolutionCriteria: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type DebateMaxAggregateOutputType = {
    id: string | null
    expertId: string | null
    topic: string | null
    description: string | null
    status: $Enums.DebateStatus | null
    resolutionCriteria: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type DebateCountAggregateOutputType = {
    id: number
    expertId: number
    topic: number
    description: number
    status: number
    resolutionCriteria: number
    createdById: number
    createdAt: number
    updatedAt: number
    resolvedAt: number
    outcome: number
    _all: number
  }


  export type DebateMinAggregateInputType = {
    id?: true
    expertId?: true
    topic?: true
    description?: true
    status?: true
    resolutionCriteria?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type DebateMaxAggregateInputType = {
    id?: true
    expertId?: true
    topic?: true
    description?: true
    status?: true
    resolutionCriteria?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type DebateCountAggregateInputType = {
    id?: true
    expertId?: true
    topic?: true
    description?: true
    status?: true
    resolutionCriteria?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
    outcome?: true
    _all?: true
  }

  export type DebateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debate to aggregate.
     */
    where?: DebateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debates to fetch.
     */
    orderBy?: DebateOrderByWithRelationInput | DebateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Debates
    **/
    _count?: true | DebateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebateMaxAggregateInputType
  }

  export type GetDebateAggregateType<T extends DebateAggregateArgs> = {
        [P in keyof T & keyof AggregateDebate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebate[P]>
      : GetScalarType<T[P], AggregateDebate[P]>
  }




  export type DebateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebateWhereInput
    orderBy?: DebateOrderByWithAggregationInput | DebateOrderByWithAggregationInput[]
    by: DebateScalarFieldEnum[] | DebateScalarFieldEnum
    having?: DebateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebateCountAggregateInputType | true
    _min?: DebateMinAggregateInputType
    _max?: DebateMaxAggregateInputType
  }

  export type DebateGroupByOutputType = {
    id: string
    expertId: string
    topic: string
    description: string | null
    status: $Enums.DebateStatus
    resolutionCriteria: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    resolvedAt: Date | null
    outcome: JsonValue | null
    _count: DebateCountAggregateOutputType | null
    _min: DebateMinAggregateOutputType | null
    _max: DebateMaxAggregateOutputType | null
  }

  type GetDebateGroupByPayload<T extends DebateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebateGroupByOutputType[P]>
            : GetScalarType<T[P], DebateGroupByOutputType[P]>
        }
      >
    >


  export type DebateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expertId?: boolean
    topic?: boolean
    description?: boolean
    status?: boolean
    resolutionCriteria?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    outcome?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    arguments?: boolean | Debate$argumentsArgs<ExtArgs>
    _count?: boolean | DebateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debate"]>

  export type DebateSelectScalar = {
    id?: boolean
    expertId?: boolean
    topic?: boolean
    description?: boolean
    status?: boolean
    resolutionCriteria?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    outcome?: boolean
  }

  export type DebateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    arguments?: boolean | Debate$argumentsArgs<ExtArgs>
    _count?: boolean | DebateCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DebatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Debate"
    objects: {
      expert: Prisma.$ExpertPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      arguments: Prisma.$ArgumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expertId: string
      topic: string
      description: string | null
      status: $Enums.DebateStatus
      resolutionCriteria: string
      createdById: string
      createdAt: Date
      updatedAt: Date
      resolvedAt: Date | null
      outcome: Prisma.JsonValue | null
    }, ExtArgs["result"]["debate"]>
    composites: {}
  }


  type DebateGetPayload<S extends boolean | null | undefined | DebateDefaultArgs> = $Result.GetResult<Prisma.$DebatePayload, S>

  type DebateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DebateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DebateCountAggregateInputType | true
    }

  export interface DebateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Debate'], meta: { name: 'Debate' } }
    /**
     * Find zero or one Debate that matches the filter.
     * @param {DebateFindUniqueArgs} args - Arguments to find a Debate
     * @example
     * // Get one Debate
     * const debate = await prisma.debate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DebateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DebateFindUniqueArgs<ExtArgs>>
    ): Prisma__DebateClient<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Debate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DebateFindUniqueOrThrowArgs} args - Arguments to find a Debate
     * @example
     * // Get one Debate
     * const debate = await prisma.debate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DebateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DebateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DebateClient<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Debate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateFindFirstArgs} args - Arguments to find a Debate
     * @example
     * // Get one Debate
     * const debate = await prisma.debate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DebateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DebateFindFirstArgs<ExtArgs>>
    ): Prisma__DebateClient<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Debate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateFindFirstOrThrowArgs} args - Arguments to find a Debate
     * @example
     * // Get one Debate
     * const debate = await prisma.debate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DebateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DebateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DebateClient<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Debates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Debates
     * const debates = await prisma.debate.findMany()
     * 
     * // Get first 10 Debates
     * const debates = await prisma.debate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debateWithIdOnly = await prisma.debate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DebateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DebateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Debate.
     * @param {DebateCreateArgs} args - Arguments to create a Debate.
     * @example
     * // Create one Debate
     * const Debate = await prisma.debate.create({
     *   data: {
     *     // ... data to create a Debate
     *   }
     * })
     * 
    **/
    create<T extends DebateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DebateCreateArgs<ExtArgs>>
    ): Prisma__DebateClient<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Debates.
     *     @param {DebateCreateManyArgs} args - Arguments to create many Debates.
     *     @example
     *     // Create many Debates
     *     const debate = await prisma.debate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DebateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DebateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Debate.
     * @param {DebateDeleteArgs} args - Arguments to delete one Debate.
     * @example
     * // Delete one Debate
     * const Debate = await prisma.debate.delete({
     *   where: {
     *     // ... filter to delete one Debate
     *   }
     * })
     * 
    **/
    delete<T extends DebateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DebateDeleteArgs<ExtArgs>>
    ): Prisma__DebateClient<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Debate.
     * @param {DebateUpdateArgs} args - Arguments to update one Debate.
     * @example
     * // Update one Debate
     * const debate = await prisma.debate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DebateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DebateUpdateArgs<ExtArgs>>
    ): Prisma__DebateClient<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Debates.
     * @param {DebateDeleteManyArgs} args - Arguments to filter Debates to delete.
     * @example
     * // Delete a few Debates
     * const { count } = await prisma.debate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DebateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DebateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Debates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Debates
     * const debate = await prisma.debate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DebateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DebateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Debate.
     * @param {DebateUpsertArgs} args - Arguments to update or create a Debate.
     * @example
     * // Update or create a Debate
     * const debate = await prisma.debate.upsert({
     *   create: {
     *     // ... data to create a Debate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Debate we want to update
     *   }
     * })
    **/
    upsert<T extends DebateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DebateUpsertArgs<ExtArgs>>
    ): Prisma__DebateClient<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Debates that matches the filter.
     * @param {DebateFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const debate = await prisma.debate.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DebateFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Debate.
     * @param {DebateAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const debate = await prisma.debate.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DebateAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Debates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateCountArgs} args - Arguments to filter Debates to count.
     * @example
     * // Count the number of Debates
     * const count = await prisma.debate.count({
     *   where: {
     *     // ... the filter for the Debates we want to count
     *   }
     * })
    **/
    count<T extends DebateCountArgs>(
      args?: Subset<T, DebateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Debate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DebateAggregateArgs>(args: Subset<T, DebateAggregateArgs>): Prisma.PrismaPromise<GetDebateAggregateType<T>>

    /**
     * Group by Debate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DebateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebateGroupByArgs['orderBy'] }
        : { orderBy?: DebateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DebateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Debate model
   */
  readonly fields: DebateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Debate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    arguments<T extends Debate$argumentsArgs<ExtArgs> = {}>(args?: Subset<T, Debate$argumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Debate model
   */ 
  interface DebateFieldRefs {
    readonly id: FieldRef<"Debate", 'String'>
    readonly expertId: FieldRef<"Debate", 'String'>
    readonly topic: FieldRef<"Debate", 'String'>
    readonly description: FieldRef<"Debate", 'String'>
    readonly status: FieldRef<"Debate", 'DebateStatus'>
    readonly resolutionCriteria: FieldRef<"Debate", 'String'>
    readonly createdById: FieldRef<"Debate", 'String'>
    readonly createdAt: FieldRef<"Debate", 'DateTime'>
    readonly updatedAt: FieldRef<"Debate", 'DateTime'>
    readonly resolvedAt: FieldRef<"Debate", 'DateTime'>
    readonly outcome: FieldRef<"Debate", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Debate findUnique
   */
  export type DebateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    /**
     * Filter, which Debate to fetch.
     */
    where: DebateWhereUniqueInput
  }


  /**
   * Debate findUniqueOrThrow
   */
  export type DebateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    /**
     * Filter, which Debate to fetch.
     */
    where: DebateWhereUniqueInput
  }


  /**
   * Debate findFirst
   */
  export type DebateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    /**
     * Filter, which Debate to fetch.
     */
    where?: DebateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debates to fetch.
     */
    orderBy?: DebateOrderByWithRelationInput | DebateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debates.
     */
    cursor?: DebateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debates.
     */
    distinct?: DebateScalarFieldEnum | DebateScalarFieldEnum[]
  }


  /**
   * Debate findFirstOrThrow
   */
  export type DebateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    /**
     * Filter, which Debate to fetch.
     */
    where?: DebateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debates to fetch.
     */
    orderBy?: DebateOrderByWithRelationInput | DebateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debates.
     */
    cursor?: DebateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debates.
     */
    distinct?: DebateScalarFieldEnum | DebateScalarFieldEnum[]
  }


  /**
   * Debate findMany
   */
  export type DebateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    /**
     * Filter, which Debates to fetch.
     */
    where?: DebateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debates to fetch.
     */
    orderBy?: DebateOrderByWithRelationInput | DebateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Debates.
     */
    cursor?: DebateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debates.
     */
    skip?: number
    distinct?: DebateScalarFieldEnum | DebateScalarFieldEnum[]
  }


  /**
   * Debate create
   */
  export type DebateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    /**
     * The data needed to create a Debate.
     */
    data: XOR<DebateCreateInput, DebateUncheckedCreateInput>
  }


  /**
   * Debate createMany
   */
  export type DebateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Debates.
     */
    data: DebateCreateManyInput | DebateCreateManyInput[]
  }


  /**
   * Debate update
   */
  export type DebateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    /**
     * The data needed to update a Debate.
     */
    data: XOR<DebateUpdateInput, DebateUncheckedUpdateInput>
    /**
     * Choose, which Debate to update.
     */
    where: DebateWhereUniqueInput
  }


  /**
   * Debate updateMany
   */
  export type DebateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Debates.
     */
    data: XOR<DebateUpdateManyMutationInput, DebateUncheckedUpdateManyInput>
    /**
     * Filter which Debates to update
     */
    where?: DebateWhereInput
  }


  /**
   * Debate upsert
   */
  export type DebateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    /**
     * The filter to search for the Debate to update in case it exists.
     */
    where: DebateWhereUniqueInput
    /**
     * In case the Debate found by the `where` argument doesn't exist, create a new Debate with this data.
     */
    create: XOR<DebateCreateInput, DebateUncheckedCreateInput>
    /**
     * In case the Debate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebateUpdateInput, DebateUncheckedUpdateInput>
  }


  /**
   * Debate delete
   */
  export type DebateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
    /**
     * Filter which Debate to delete.
     */
    where: DebateWhereUniqueInput
  }


  /**
   * Debate deleteMany
   */
  export type DebateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debates to delete
     */
    where?: DebateWhereInput
  }


  /**
   * Debate findRaw
   */
  export type DebateFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Debate aggregateRaw
   */
  export type DebateAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Debate.arguments
   */
  export type Debate$argumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    where?: ArgumentWhereInput
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    cursor?: ArgumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }


  /**
   * Debate without action
   */
  export type DebateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debate
     */
    select?: DebateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebateInclude<ExtArgs> | null
  }



  /**
   * Model Argument
   */

  export type AggregateArgument = {
    _count: ArgumentCountAggregateOutputType | null
    _avg: ArgumentAvgAggregateOutputType | null
    _sum: ArgumentSumAggregateOutputType | null
    _min: ArgumentMinAggregateOutputType | null
    _max: ArgumentMaxAggregateOutputType | null
  }

  export type ArgumentAvgAggregateOutputType = {
    authorReputationAtTime: number | null
  }

  export type ArgumentSumAggregateOutputType = {
    authorReputationAtTime: number | null
  }

  export type ArgumentMinAggregateOutputType = {
    id: string | null
    debateId: string | null
    parentArgumentId: string | null
    type: $Enums.ArgumentType | null
    claim: string | null
    reasoning: string | null
    status: $Enums.ArgumentStatus | null
    validationStatus: $Enums.ValidationStatus | null
    validationReason: string | null
    authorReputationAtTime: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArgumentMaxAggregateOutputType = {
    id: string | null
    debateId: string | null
    parentArgumentId: string | null
    type: $Enums.ArgumentType | null
    claim: string | null
    reasoning: string | null
    status: $Enums.ArgumentStatus | null
    validationStatus: $Enums.ValidationStatus | null
    validationReason: string | null
    authorReputationAtTime: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArgumentCountAggregateOutputType = {
    id: number
    debateId: number
    parentArgumentId: number
    type: number
    claim: number
    reasoning: number
    status: number
    validationStatus: number
    validationReason: number
    authorReputationAtTime: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArgumentAvgAggregateInputType = {
    authorReputationAtTime?: true
  }

  export type ArgumentSumAggregateInputType = {
    authorReputationAtTime?: true
  }

  export type ArgumentMinAggregateInputType = {
    id?: true
    debateId?: true
    parentArgumentId?: true
    type?: true
    claim?: true
    reasoning?: true
    status?: true
    validationStatus?: true
    validationReason?: true
    authorReputationAtTime?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArgumentMaxAggregateInputType = {
    id?: true
    debateId?: true
    parentArgumentId?: true
    type?: true
    claim?: true
    reasoning?: true
    status?: true
    validationStatus?: true
    validationReason?: true
    authorReputationAtTime?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArgumentCountAggregateInputType = {
    id?: true
    debateId?: true
    parentArgumentId?: true
    type?: true
    claim?: true
    reasoning?: true
    status?: true
    validationStatus?: true
    validationReason?: true
    authorReputationAtTime?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArgumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Argument to aggregate.
     */
    where?: ArgumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arguments to fetch.
     */
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArgumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arguments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arguments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arguments
    **/
    _count?: true | ArgumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArgumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArgumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArgumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArgumentMaxAggregateInputType
  }

  export type GetArgumentAggregateType<T extends ArgumentAggregateArgs> = {
        [P in keyof T & keyof AggregateArgument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArgument[P]>
      : GetScalarType<T[P], AggregateArgument[P]>
  }




  export type ArgumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArgumentWhereInput
    orderBy?: ArgumentOrderByWithAggregationInput | ArgumentOrderByWithAggregationInput[]
    by: ArgumentScalarFieldEnum[] | ArgumentScalarFieldEnum
    having?: ArgumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArgumentCountAggregateInputType | true
    _avg?: ArgumentAvgAggregateInputType
    _sum?: ArgumentSumAggregateInputType
    _min?: ArgumentMinAggregateInputType
    _max?: ArgumentMaxAggregateInputType
  }

  export type ArgumentGroupByOutputType = {
    id: string
    debateId: string
    parentArgumentId: string | null
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status: $Enums.ArgumentStatus
    validationStatus: $Enums.ValidationStatus
    validationReason: string | null
    authorReputationAtTime: number
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: ArgumentCountAggregateOutputType | null
    _avg: ArgumentAvgAggregateOutputType | null
    _sum: ArgumentSumAggregateOutputType | null
    _min: ArgumentMinAggregateOutputType | null
    _max: ArgumentMaxAggregateOutputType | null
  }

  type GetArgumentGroupByPayload<T extends ArgumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArgumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArgumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArgumentGroupByOutputType[P]>
            : GetScalarType<T[P], ArgumentGroupByOutputType[P]>
        }
      >
    >


  export type ArgumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    debateId?: boolean
    parentArgumentId?: boolean
    type?: boolean
    claim?: boolean
    reasoning?: boolean
    status?: boolean
    validationStatus?: boolean
    validationReason?: boolean
    authorReputationAtTime?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    debate?: boolean | DebateDefaultArgs<ExtArgs>
    parentArgument?: boolean | Argument$parentArgumentArgs<ExtArgs>
    childArguments?: boolean | Argument$childArgumentsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    evidence?: boolean | Argument$evidenceArgs<ExtArgs>
    _count?: boolean | ArgumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["argument"]>

  export type ArgumentSelectScalar = {
    id?: boolean
    debateId?: boolean
    parentArgumentId?: boolean
    type?: boolean
    claim?: boolean
    reasoning?: boolean
    status?: boolean
    validationStatus?: boolean
    validationReason?: boolean
    authorReputationAtTime?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArgumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debate?: boolean | DebateDefaultArgs<ExtArgs>
    parentArgument?: boolean | Argument$parentArgumentArgs<ExtArgs>
    childArguments?: boolean | Argument$childArgumentsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    evidence?: boolean | Argument$evidenceArgs<ExtArgs>
    _count?: boolean | ArgumentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArgumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Argument"
    objects: {
      debate: Prisma.$DebatePayload<ExtArgs>
      parentArgument: Prisma.$ArgumentPayload<ExtArgs> | null
      childArguments: Prisma.$ArgumentPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
      evidence: Prisma.$EvidencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      debateId: string
      parentArgumentId: string | null
      type: $Enums.ArgumentType
      claim: string
      reasoning: string
      status: $Enums.ArgumentStatus
      validationStatus: $Enums.ValidationStatus
      validationReason: string | null
      authorReputationAtTime: number
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["argument"]>
    composites: {}
  }


  type ArgumentGetPayload<S extends boolean | null | undefined | ArgumentDefaultArgs> = $Result.GetResult<Prisma.$ArgumentPayload, S>

  type ArgumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArgumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArgumentCountAggregateInputType | true
    }

  export interface ArgumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Argument'], meta: { name: 'Argument' } }
    /**
     * Find zero or one Argument that matches the filter.
     * @param {ArgumentFindUniqueArgs} args - Arguments to find a Argument
     * @example
     * // Get one Argument
     * const argument = await prisma.argument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArgumentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArgumentFindUniqueArgs<ExtArgs>>
    ): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Argument that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArgumentFindUniqueOrThrowArgs} args - Arguments to find a Argument
     * @example
     * // Get one Argument
     * const argument = await prisma.argument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArgumentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArgumentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Argument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentFindFirstArgs} args - Arguments to find a Argument
     * @example
     * // Get one Argument
     * const argument = await prisma.argument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArgumentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArgumentFindFirstArgs<ExtArgs>>
    ): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Argument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentFindFirstOrThrowArgs} args - Arguments to find a Argument
     * @example
     * // Get one Argument
     * const argument = await prisma.argument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArgumentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArgumentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Arguments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arguments
     * const arguments = await prisma.argument.findMany()
     * 
     * // Get first 10 Arguments
     * const arguments = await prisma.argument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const argumentWithIdOnly = await prisma.argument.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArgumentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArgumentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Argument.
     * @param {ArgumentCreateArgs} args - Arguments to create a Argument.
     * @example
     * // Create one Argument
     * const Argument = await prisma.argument.create({
     *   data: {
     *     // ... data to create a Argument
     *   }
     * })
     * 
    **/
    create<T extends ArgumentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArgumentCreateArgs<ExtArgs>>
    ): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Arguments.
     *     @param {ArgumentCreateManyArgs} args - Arguments to create many Arguments.
     *     @example
     *     // Create many Arguments
     *     const argument = await prisma.argument.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArgumentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArgumentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Argument.
     * @param {ArgumentDeleteArgs} args - Arguments to delete one Argument.
     * @example
     * // Delete one Argument
     * const Argument = await prisma.argument.delete({
     *   where: {
     *     // ... filter to delete one Argument
     *   }
     * })
     * 
    **/
    delete<T extends ArgumentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArgumentDeleteArgs<ExtArgs>>
    ): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Argument.
     * @param {ArgumentUpdateArgs} args - Arguments to update one Argument.
     * @example
     * // Update one Argument
     * const argument = await prisma.argument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArgumentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArgumentUpdateArgs<ExtArgs>>
    ): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Arguments.
     * @param {ArgumentDeleteManyArgs} args - Arguments to filter Arguments to delete.
     * @example
     * // Delete a few Arguments
     * const { count } = await prisma.argument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArgumentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArgumentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arguments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arguments
     * const argument = await prisma.argument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArgumentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArgumentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Argument.
     * @param {ArgumentUpsertArgs} args - Arguments to update or create a Argument.
     * @example
     * // Update or create a Argument
     * const argument = await prisma.argument.upsert({
     *   create: {
     *     // ... data to create a Argument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Argument we want to update
     *   }
     * })
    **/
    upsert<T extends ArgumentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArgumentUpsertArgs<ExtArgs>>
    ): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Arguments that matches the filter.
     * @param {ArgumentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const argument = await prisma.argument.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ArgumentFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Argument.
     * @param {ArgumentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const argument = await prisma.argument.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ArgumentAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Arguments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentCountArgs} args - Arguments to filter Arguments to count.
     * @example
     * // Count the number of Arguments
     * const count = await prisma.argument.count({
     *   where: {
     *     // ... the filter for the Arguments we want to count
     *   }
     * })
    **/
    count<T extends ArgumentCountArgs>(
      args?: Subset<T, ArgumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArgumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Argument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArgumentAggregateArgs>(args: Subset<T, ArgumentAggregateArgs>): Prisma.PrismaPromise<GetArgumentAggregateType<T>>

    /**
     * Group by Argument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArgumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArgumentGroupByArgs['orderBy'] }
        : { orderBy?: ArgumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArgumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArgumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Argument model
   */
  readonly fields: ArgumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Argument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArgumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    debate<T extends DebateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DebateDefaultArgs<ExtArgs>>): Prisma__DebateClient<$Result.GetResult<Prisma.$DebatePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    parentArgument<T extends Argument$parentArgumentArgs<ExtArgs> = {}>(args?: Subset<T, Argument$parentArgumentArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    childArguments<T extends Argument$childArgumentsArgs<ExtArgs> = {}>(args?: Subset<T, Argument$childArgumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    evidence<T extends Argument$evidenceArgs<ExtArgs> = {}>(args?: Subset<T, Argument$evidenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Argument model
   */ 
  interface ArgumentFieldRefs {
    readonly id: FieldRef<"Argument", 'String'>
    readonly debateId: FieldRef<"Argument", 'String'>
    readonly parentArgumentId: FieldRef<"Argument", 'String'>
    readonly type: FieldRef<"Argument", 'ArgumentType'>
    readonly claim: FieldRef<"Argument", 'String'>
    readonly reasoning: FieldRef<"Argument", 'String'>
    readonly status: FieldRef<"Argument", 'ArgumentStatus'>
    readonly validationStatus: FieldRef<"Argument", 'ValidationStatus'>
    readonly validationReason: FieldRef<"Argument", 'String'>
    readonly authorReputationAtTime: FieldRef<"Argument", 'Float'>
    readonly createdById: FieldRef<"Argument", 'String'>
    readonly createdAt: FieldRef<"Argument", 'DateTime'>
    readonly updatedAt: FieldRef<"Argument", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Argument findUnique
   */
  export type ArgumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Argument to fetch.
     */
    where: ArgumentWhereUniqueInput
  }


  /**
   * Argument findUniqueOrThrow
   */
  export type ArgumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Argument to fetch.
     */
    where: ArgumentWhereUniqueInput
  }


  /**
   * Argument findFirst
   */
  export type ArgumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Argument to fetch.
     */
    where?: ArgumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arguments to fetch.
     */
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arguments.
     */
    cursor?: ArgumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arguments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arguments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arguments.
     */
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }


  /**
   * Argument findFirstOrThrow
   */
  export type ArgumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Argument to fetch.
     */
    where?: ArgumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arguments to fetch.
     */
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arguments.
     */
    cursor?: ArgumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arguments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arguments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arguments.
     */
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }


  /**
   * Argument findMany
   */
  export type ArgumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Arguments to fetch.
     */
    where?: ArgumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arguments to fetch.
     */
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arguments.
     */
    cursor?: ArgumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arguments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arguments.
     */
    skip?: number
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }


  /**
   * Argument create
   */
  export type ArgumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Argument.
     */
    data: XOR<ArgumentCreateInput, ArgumentUncheckedCreateInput>
  }


  /**
   * Argument createMany
   */
  export type ArgumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arguments.
     */
    data: ArgumentCreateManyInput | ArgumentCreateManyInput[]
  }


  /**
   * Argument update
   */
  export type ArgumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Argument.
     */
    data: XOR<ArgumentUpdateInput, ArgumentUncheckedUpdateInput>
    /**
     * Choose, which Argument to update.
     */
    where: ArgumentWhereUniqueInput
  }


  /**
   * Argument updateMany
   */
  export type ArgumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arguments.
     */
    data: XOR<ArgumentUpdateManyMutationInput, ArgumentUncheckedUpdateManyInput>
    /**
     * Filter which Arguments to update
     */
    where?: ArgumentWhereInput
  }


  /**
   * Argument upsert
   */
  export type ArgumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Argument to update in case it exists.
     */
    where: ArgumentWhereUniqueInput
    /**
     * In case the Argument found by the `where` argument doesn't exist, create a new Argument with this data.
     */
    create: XOR<ArgumentCreateInput, ArgumentUncheckedCreateInput>
    /**
     * In case the Argument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArgumentUpdateInput, ArgumentUncheckedUpdateInput>
  }


  /**
   * Argument delete
   */
  export type ArgumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter which Argument to delete.
     */
    where: ArgumentWhereUniqueInput
  }


  /**
   * Argument deleteMany
   */
  export type ArgumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arguments to delete
     */
    where?: ArgumentWhereInput
  }


  /**
   * Argument findRaw
   */
  export type ArgumentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Argument aggregateRaw
   */
  export type ArgumentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Argument.parentArgument
   */
  export type Argument$parentArgumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    where?: ArgumentWhereInput
  }


  /**
   * Argument.childArguments
   */
  export type Argument$childArgumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
    where?: ArgumentWhereInput
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    cursor?: ArgumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }


  /**
   * Argument.evidence
   */
  export type Argument$evidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    cursor?: EvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }


  /**
   * Argument without action
   */
  export type ArgumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArgumentInclude<ExtArgs> | null
  }



  /**
   * Model Evidence
   */

  export type AggregateEvidence = {
    _count: EvidenceCountAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  export type EvidenceMinAggregateOutputType = {
    id: string | null
    argumentId: string | null
    type: $Enums.EvidenceType | null
    content: string | null
    sourceUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    createdAt: Date | null
  }

  export type EvidenceMaxAggregateOutputType = {
    id: string | null
    argumentId: string | null
    type: $Enums.EvidenceType | null
    content: string | null
    sourceUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    createdAt: Date | null
  }

  export type EvidenceCountAggregateOutputType = {
    id: number
    argumentId: number
    type: number
    content: number
    sourceUrl: number
    verificationStatus: number
    createdAt: number
    _all: number
  }


  export type EvidenceMinAggregateInputType = {
    id?: true
    argumentId?: true
    type?: true
    content?: true
    sourceUrl?: true
    verificationStatus?: true
    createdAt?: true
  }

  export type EvidenceMaxAggregateInputType = {
    id?: true
    argumentId?: true
    type?: true
    content?: true
    sourceUrl?: true
    verificationStatus?: true
    createdAt?: true
  }

  export type EvidenceCountAggregateInputType = {
    id?: true
    argumentId?: true
    type?: true
    content?: true
    sourceUrl?: true
    verificationStatus?: true
    createdAt?: true
    _all?: true
  }

  export type EvidenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidence to aggregate.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evidences
    **/
    _count?: true | EvidenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvidenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvidenceMaxAggregateInputType
  }

  export type GetEvidenceAggregateType<T extends EvidenceAggregateArgs> = {
        [P in keyof T & keyof AggregateEvidence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvidence[P]>
      : GetScalarType<T[P], AggregateEvidence[P]>
  }




  export type EvidenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithAggregationInput | EvidenceOrderByWithAggregationInput[]
    by: EvidenceScalarFieldEnum[] | EvidenceScalarFieldEnum
    having?: EvidenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvidenceCountAggregateInputType | true
    _min?: EvidenceMinAggregateInputType
    _max?: EvidenceMaxAggregateInputType
  }

  export type EvidenceGroupByOutputType = {
    id: string
    argumentId: string
    type: $Enums.EvidenceType
    content: string
    sourceUrl: string | null
    verificationStatus: $Enums.VerificationStatus
    createdAt: Date
    _count: EvidenceCountAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  type GetEvidenceGroupByPayload<T extends EvidenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvidenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvidenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
            : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
        }
      >
    >


  export type EvidenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    argumentId?: boolean
    type?: boolean
    content?: boolean
    sourceUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    argument?: boolean | ArgumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectScalar = {
    id?: boolean
    argumentId?: boolean
    type?: boolean
    content?: boolean
    sourceUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
  }

  export type EvidenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    argument?: boolean | ArgumentDefaultArgs<ExtArgs>
  }


  export type $EvidencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evidence"
    objects: {
      argument: Prisma.$ArgumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      argumentId: string
      type: $Enums.EvidenceType
      content: string
      sourceUrl: string | null
      verificationStatus: $Enums.VerificationStatus
      createdAt: Date
    }, ExtArgs["result"]["evidence"]>
    composites: {}
  }


  type EvidenceGetPayload<S extends boolean | null | undefined | EvidenceDefaultArgs> = $Result.GetResult<Prisma.$EvidencePayload, S>

  type EvidenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EvidenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EvidenceCountAggregateInputType | true
    }

  export interface EvidenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evidence'], meta: { name: 'Evidence' } }
    /**
     * Find zero or one Evidence that matches the filter.
     * @param {EvidenceFindUniqueArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EvidenceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EvidenceFindUniqueArgs<ExtArgs>>
    ): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Evidence that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EvidenceFindUniqueOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EvidenceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EvidenceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Evidence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EvidenceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EvidenceFindFirstArgs<ExtArgs>>
    ): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Evidence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EvidenceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EvidenceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Evidences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evidences
     * const evidences = await prisma.evidence.findMany()
     * 
     * // Get first 10 Evidences
     * const evidences = await prisma.evidence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evidenceWithIdOnly = await prisma.evidence.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EvidenceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EvidenceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Evidence.
     * @param {EvidenceCreateArgs} args - Arguments to create a Evidence.
     * @example
     * // Create one Evidence
     * const Evidence = await prisma.evidence.create({
     *   data: {
     *     // ... data to create a Evidence
     *   }
     * })
     * 
    **/
    create<T extends EvidenceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EvidenceCreateArgs<ExtArgs>>
    ): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Evidences.
     *     @param {EvidenceCreateManyArgs} args - Arguments to create many Evidences.
     *     @example
     *     // Create many Evidences
     *     const evidence = await prisma.evidence.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EvidenceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EvidenceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evidence.
     * @param {EvidenceDeleteArgs} args - Arguments to delete one Evidence.
     * @example
     * // Delete one Evidence
     * const Evidence = await prisma.evidence.delete({
     *   where: {
     *     // ... filter to delete one Evidence
     *   }
     * })
     * 
    **/
    delete<T extends EvidenceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EvidenceDeleteArgs<ExtArgs>>
    ): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Evidence.
     * @param {EvidenceUpdateArgs} args - Arguments to update one Evidence.
     * @example
     * // Update one Evidence
     * const evidence = await prisma.evidence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EvidenceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EvidenceUpdateArgs<ExtArgs>>
    ): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Evidences.
     * @param {EvidenceDeleteManyArgs} args - Arguments to filter Evidences to delete.
     * @example
     * // Delete a few Evidences
     * const { count } = await prisma.evidence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EvidenceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EvidenceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evidences
     * const evidence = await prisma.evidence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EvidenceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EvidenceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evidence.
     * @param {EvidenceUpsertArgs} args - Arguments to update or create a Evidence.
     * @example
     * // Update or create a Evidence
     * const evidence = await prisma.evidence.upsert({
     *   create: {
     *     // ... data to create a Evidence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evidence we want to update
     *   }
     * })
    **/
    upsert<T extends EvidenceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EvidenceUpsertArgs<ExtArgs>>
    ): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Evidences that matches the filter.
     * @param {EvidenceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const evidence = await prisma.evidence.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: EvidenceFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Evidence.
     * @param {EvidenceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const evidence = await prisma.evidence.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: EvidenceAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceCountArgs} args - Arguments to filter Evidences to count.
     * @example
     * // Count the number of Evidences
     * const count = await prisma.evidence.count({
     *   where: {
     *     // ... the filter for the Evidences we want to count
     *   }
     * })
    **/
    count<T extends EvidenceCountArgs>(
      args?: Subset<T, EvidenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvidenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvidenceAggregateArgs>(args: Subset<T, EvidenceAggregateArgs>): Prisma.PrismaPromise<GetEvidenceAggregateType<T>>

    /**
     * Group by Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvidenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvidenceGroupByArgs['orderBy'] }
        : { orderBy?: EvidenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvidenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvidenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evidence model
   */
  readonly fields: EvidenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evidence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvidenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    argument<T extends ArgumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArgumentDefaultArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Evidence model
   */ 
  interface EvidenceFieldRefs {
    readonly id: FieldRef<"Evidence", 'String'>
    readonly argumentId: FieldRef<"Evidence", 'String'>
    readonly type: FieldRef<"Evidence", 'EvidenceType'>
    readonly content: FieldRef<"Evidence", 'String'>
    readonly sourceUrl: FieldRef<"Evidence", 'String'>
    readonly verificationStatus: FieldRef<"Evidence", 'VerificationStatus'>
    readonly createdAt: FieldRef<"Evidence", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Evidence findUnique
   */
  export type EvidenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }


  /**
   * Evidence findUniqueOrThrow
   */
  export type EvidenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }


  /**
   * Evidence findFirst
   */
  export type EvidenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }


  /**
   * Evidence findFirstOrThrow
   */
  export type EvidenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }


  /**
   * Evidence findMany
   */
  export type EvidenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidences to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }


  /**
   * Evidence create
   */
  export type EvidenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Evidence.
     */
    data: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
  }


  /**
   * Evidence createMany
   */
  export type EvidenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evidences.
     */
    data: EvidenceCreateManyInput | EvidenceCreateManyInput[]
  }


  /**
   * Evidence update
   */
  export type EvidenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Evidence.
     */
    data: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
    /**
     * Choose, which Evidence to update.
     */
    where: EvidenceWhereUniqueInput
  }


  /**
   * Evidence updateMany
   */
  export type EvidenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evidences.
     */
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyInput>
    /**
     * Filter which Evidences to update
     */
    where?: EvidenceWhereInput
  }


  /**
   * Evidence upsert
   */
  export type EvidenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Evidence to update in case it exists.
     */
    where: EvidenceWhereUniqueInput
    /**
     * In case the Evidence found by the `where` argument doesn't exist, create a new Evidence with this data.
     */
    create: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
    /**
     * In case the Evidence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
  }


  /**
   * Evidence delete
   */
  export type EvidenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter which Evidence to delete.
     */
    where: EvidenceWhereUniqueInput
  }


  /**
   * Evidence deleteMany
   */
  export type EvidenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidences to delete
     */
    where?: EvidenceWhereInput
  }


  /**
   * Evidence findRaw
   */
  export type EvidenceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Evidence aggregateRaw
   */
  export type EvidenceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Evidence without action
   */
  export type EvidenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvidenceInclude<ExtArgs> | null
  }



  /**
   * Model ReputationScore
   */

  export type AggregateReputationScore = {
    _count: ReputationScoreCountAggregateOutputType | null
    _avg: ReputationScoreAvgAggregateOutputType | null
    _sum: ReputationScoreSumAggregateOutputType | null
    _min: ReputationScoreMinAggregateOutputType | null
    _max: ReputationScoreMaxAggregateOutputType | null
  }

  export type ReputationScoreAvgAggregateOutputType = {
    score: number | null
    evidenceCount: number | null
    accuracyRate: number | null
  }

  export type ReputationScoreSumAggregateOutputType = {
    score: number | null
    evidenceCount: number | null
    accuracyRate: number | null
  }

  export type ReputationScoreMinAggregateOutputType = {
    id: string | null
    userId: string | null
    domain: string | null
    score: number | null
    rank: $Enums.ReputationRank | null
    evidenceCount: number | null
    accuracyRate: number | null
    lastActiveAt: Date | null
    lastCalculatedAt: Date | null
  }

  export type ReputationScoreMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    domain: string | null
    score: number | null
    rank: $Enums.ReputationRank | null
    evidenceCount: number | null
    accuracyRate: number | null
    lastActiveAt: Date | null
    lastCalculatedAt: Date | null
  }

  export type ReputationScoreCountAggregateOutputType = {
    id: number
    userId: number
    domain: number
    score: number
    rank: number
    evidenceCount: number
    accuracyRate: number
    lastActiveAt: number
    lastCalculatedAt: number
    _all: number
  }


  export type ReputationScoreAvgAggregateInputType = {
    score?: true
    evidenceCount?: true
    accuracyRate?: true
  }

  export type ReputationScoreSumAggregateInputType = {
    score?: true
    evidenceCount?: true
    accuracyRate?: true
  }

  export type ReputationScoreMinAggregateInputType = {
    id?: true
    userId?: true
    domain?: true
    score?: true
    rank?: true
    evidenceCount?: true
    accuracyRate?: true
    lastActiveAt?: true
    lastCalculatedAt?: true
  }

  export type ReputationScoreMaxAggregateInputType = {
    id?: true
    userId?: true
    domain?: true
    score?: true
    rank?: true
    evidenceCount?: true
    accuracyRate?: true
    lastActiveAt?: true
    lastCalculatedAt?: true
  }

  export type ReputationScoreCountAggregateInputType = {
    id?: true
    userId?: true
    domain?: true
    score?: true
    rank?: true
    evidenceCount?: true
    accuracyRate?: true
    lastActiveAt?: true
    lastCalculatedAt?: true
    _all?: true
  }

  export type ReputationScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReputationScore to aggregate.
     */
    where?: ReputationScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationScores to fetch.
     */
    orderBy?: ReputationScoreOrderByWithRelationInput | ReputationScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReputationScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReputationScores
    **/
    _count?: true | ReputationScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReputationScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReputationScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReputationScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReputationScoreMaxAggregateInputType
  }

  export type GetReputationScoreAggregateType<T extends ReputationScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateReputationScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReputationScore[P]>
      : GetScalarType<T[P], AggregateReputationScore[P]>
  }




  export type ReputationScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReputationScoreWhereInput
    orderBy?: ReputationScoreOrderByWithAggregationInput | ReputationScoreOrderByWithAggregationInput[]
    by: ReputationScoreScalarFieldEnum[] | ReputationScoreScalarFieldEnum
    having?: ReputationScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReputationScoreCountAggregateInputType | true
    _avg?: ReputationScoreAvgAggregateInputType
    _sum?: ReputationScoreSumAggregateInputType
    _min?: ReputationScoreMinAggregateInputType
    _max?: ReputationScoreMaxAggregateInputType
  }

  export type ReputationScoreGroupByOutputType = {
    id: string
    userId: string
    domain: string
    score: number
    rank: $Enums.ReputationRank
    evidenceCount: number
    accuracyRate: number
    lastActiveAt: Date
    lastCalculatedAt: Date
    _count: ReputationScoreCountAggregateOutputType | null
    _avg: ReputationScoreAvgAggregateOutputType | null
    _sum: ReputationScoreSumAggregateOutputType | null
    _min: ReputationScoreMinAggregateOutputType | null
    _max: ReputationScoreMaxAggregateOutputType | null
  }

  type GetReputationScoreGroupByPayload<T extends ReputationScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReputationScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReputationScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReputationScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ReputationScoreGroupByOutputType[P]>
        }
      >
    >


  export type ReputationScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    domain?: boolean
    score?: boolean
    rank?: boolean
    evidenceCount?: boolean
    accuracyRate?: boolean
    lastActiveAt?: boolean
    lastCalculatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | ReputationScore$historyArgs<ExtArgs>
    _count?: boolean | ReputationScoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reputationScore"]>

  export type ReputationScoreSelectScalar = {
    id?: boolean
    userId?: boolean
    domain?: boolean
    score?: boolean
    rank?: boolean
    evidenceCount?: boolean
    accuracyRate?: boolean
    lastActiveAt?: boolean
    lastCalculatedAt?: boolean
  }

  export type ReputationScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | ReputationScore$historyArgs<ExtArgs>
    _count?: boolean | ReputationScoreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ReputationScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReputationScore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      history: Prisma.$ReputationEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      domain: string
      score: number
      rank: $Enums.ReputationRank
      evidenceCount: number
      accuracyRate: number
      lastActiveAt: Date
      lastCalculatedAt: Date
    }, ExtArgs["result"]["reputationScore"]>
    composites: {}
  }


  type ReputationScoreGetPayload<S extends boolean | null | undefined | ReputationScoreDefaultArgs> = $Result.GetResult<Prisma.$ReputationScorePayload, S>

  type ReputationScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReputationScoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReputationScoreCountAggregateInputType | true
    }

  export interface ReputationScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReputationScore'], meta: { name: 'ReputationScore' } }
    /**
     * Find zero or one ReputationScore that matches the filter.
     * @param {ReputationScoreFindUniqueArgs} args - Arguments to find a ReputationScore
     * @example
     * // Get one ReputationScore
     * const reputationScore = await prisma.reputationScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReputationScoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationScoreFindUniqueArgs<ExtArgs>>
    ): Prisma__ReputationScoreClient<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ReputationScore that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReputationScoreFindUniqueOrThrowArgs} args - Arguments to find a ReputationScore
     * @example
     * // Get one ReputationScore
     * const reputationScore = await prisma.reputationScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReputationScoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationScoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReputationScoreClient<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ReputationScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationScoreFindFirstArgs} args - Arguments to find a ReputationScore
     * @example
     * // Get one ReputationScore
     * const reputationScore = await prisma.reputationScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReputationScoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationScoreFindFirstArgs<ExtArgs>>
    ): Prisma__ReputationScoreClient<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ReputationScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationScoreFindFirstOrThrowArgs} args - Arguments to find a ReputationScore
     * @example
     * // Get one ReputationScore
     * const reputationScore = await prisma.reputationScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReputationScoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationScoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReputationScoreClient<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ReputationScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationScoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReputationScores
     * const reputationScores = await prisma.reputationScore.findMany()
     * 
     * // Get first 10 ReputationScores
     * const reputationScores = await prisma.reputationScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reputationScoreWithIdOnly = await prisma.reputationScore.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReputationScoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationScoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ReputationScore.
     * @param {ReputationScoreCreateArgs} args - Arguments to create a ReputationScore.
     * @example
     * // Create one ReputationScore
     * const ReputationScore = await prisma.reputationScore.create({
     *   data: {
     *     // ... data to create a ReputationScore
     *   }
     * })
     * 
    **/
    create<T extends ReputationScoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationScoreCreateArgs<ExtArgs>>
    ): Prisma__ReputationScoreClient<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ReputationScores.
     *     @param {ReputationScoreCreateManyArgs} args - Arguments to create many ReputationScores.
     *     @example
     *     // Create many ReputationScores
     *     const reputationScore = await prisma.reputationScore.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReputationScoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationScoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReputationScore.
     * @param {ReputationScoreDeleteArgs} args - Arguments to delete one ReputationScore.
     * @example
     * // Delete one ReputationScore
     * const ReputationScore = await prisma.reputationScore.delete({
     *   where: {
     *     // ... filter to delete one ReputationScore
     *   }
     * })
     * 
    **/
    delete<T extends ReputationScoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationScoreDeleteArgs<ExtArgs>>
    ): Prisma__ReputationScoreClient<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ReputationScore.
     * @param {ReputationScoreUpdateArgs} args - Arguments to update one ReputationScore.
     * @example
     * // Update one ReputationScore
     * const reputationScore = await prisma.reputationScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReputationScoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationScoreUpdateArgs<ExtArgs>>
    ): Prisma__ReputationScoreClient<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ReputationScores.
     * @param {ReputationScoreDeleteManyArgs} args - Arguments to filter ReputationScores to delete.
     * @example
     * // Delete a few ReputationScores
     * const { count } = await prisma.reputationScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReputationScoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationScoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReputationScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReputationScores
     * const reputationScore = await prisma.reputationScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReputationScoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationScoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReputationScore.
     * @param {ReputationScoreUpsertArgs} args - Arguments to update or create a ReputationScore.
     * @example
     * // Update or create a ReputationScore
     * const reputationScore = await prisma.reputationScore.upsert({
     *   create: {
     *     // ... data to create a ReputationScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReputationScore we want to update
     *   }
     * })
    **/
    upsert<T extends ReputationScoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationScoreUpsertArgs<ExtArgs>>
    ): Prisma__ReputationScoreClient<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ReputationScores that matches the filter.
     * @param {ReputationScoreFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const reputationScore = await prisma.reputationScore.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ReputationScoreFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ReputationScore.
     * @param {ReputationScoreAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const reputationScore = await prisma.reputationScore.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ReputationScoreAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ReputationScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationScoreCountArgs} args - Arguments to filter ReputationScores to count.
     * @example
     * // Count the number of ReputationScores
     * const count = await prisma.reputationScore.count({
     *   where: {
     *     // ... the filter for the ReputationScores we want to count
     *   }
     * })
    **/
    count<T extends ReputationScoreCountArgs>(
      args?: Subset<T, ReputationScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReputationScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReputationScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReputationScoreAggregateArgs>(args: Subset<T, ReputationScoreAggregateArgs>): Prisma.PrismaPromise<GetReputationScoreAggregateType<T>>

    /**
     * Group by ReputationScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReputationScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReputationScoreGroupByArgs['orderBy'] }
        : { orderBy?: ReputationScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReputationScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReputationScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReputationScore model
   */
  readonly fields: ReputationScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReputationScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReputationScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    history<T extends ReputationScore$historyArgs<ExtArgs> = {}>(args?: Subset<T, ReputationScore$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ReputationScore model
   */ 
  interface ReputationScoreFieldRefs {
    readonly id: FieldRef<"ReputationScore", 'String'>
    readonly userId: FieldRef<"ReputationScore", 'String'>
    readonly domain: FieldRef<"ReputationScore", 'String'>
    readonly score: FieldRef<"ReputationScore", 'Float'>
    readonly rank: FieldRef<"ReputationScore", 'ReputationRank'>
    readonly evidenceCount: FieldRef<"ReputationScore", 'Int'>
    readonly accuracyRate: FieldRef<"ReputationScore", 'Float'>
    readonly lastActiveAt: FieldRef<"ReputationScore", 'DateTime'>
    readonly lastCalculatedAt: FieldRef<"ReputationScore", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ReputationScore findUnique
   */
  export type ReputationScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReputationScore to fetch.
     */
    where: ReputationScoreWhereUniqueInput
  }


  /**
   * ReputationScore findUniqueOrThrow
   */
  export type ReputationScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReputationScore to fetch.
     */
    where: ReputationScoreWhereUniqueInput
  }


  /**
   * ReputationScore findFirst
   */
  export type ReputationScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReputationScore to fetch.
     */
    where?: ReputationScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationScores to fetch.
     */
    orderBy?: ReputationScoreOrderByWithRelationInput | ReputationScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReputationScores.
     */
    cursor?: ReputationScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReputationScores.
     */
    distinct?: ReputationScoreScalarFieldEnum | ReputationScoreScalarFieldEnum[]
  }


  /**
   * ReputationScore findFirstOrThrow
   */
  export type ReputationScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReputationScore to fetch.
     */
    where?: ReputationScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationScores to fetch.
     */
    orderBy?: ReputationScoreOrderByWithRelationInput | ReputationScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReputationScores.
     */
    cursor?: ReputationScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReputationScores.
     */
    distinct?: ReputationScoreScalarFieldEnum | ReputationScoreScalarFieldEnum[]
  }


  /**
   * ReputationScore findMany
   */
  export type ReputationScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReputationScores to fetch.
     */
    where?: ReputationScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationScores to fetch.
     */
    orderBy?: ReputationScoreOrderByWithRelationInput | ReputationScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReputationScores.
     */
    cursor?: ReputationScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationScores.
     */
    skip?: number
    distinct?: ReputationScoreScalarFieldEnum | ReputationScoreScalarFieldEnum[]
  }


  /**
   * ReputationScore create
   */
  export type ReputationScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a ReputationScore.
     */
    data: XOR<ReputationScoreCreateInput, ReputationScoreUncheckedCreateInput>
  }


  /**
   * ReputationScore createMany
   */
  export type ReputationScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReputationScores.
     */
    data: ReputationScoreCreateManyInput | ReputationScoreCreateManyInput[]
  }


  /**
   * ReputationScore update
   */
  export type ReputationScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a ReputationScore.
     */
    data: XOR<ReputationScoreUpdateInput, ReputationScoreUncheckedUpdateInput>
    /**
     * Choose, which ReputationScore to update.
     */
    where: ReputationScoreWhereUniqueInput
  }


  /**
   * ReputationScore updateMany
   */
  export type ReputationScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReputationScores.
     */
    data: XOR<ReputationScoreUpdateManyMutationInput, ReputationScoreUncheckedUpdateManyInput>
    /**
     * Filter which ReputationScores to update
     */
    where?: ReputationScoreWhereInput
  }


  /**
   * ReputationScore upsert
   */
  export type ReputationScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the ReputationScore to update in case it exists.
     */
    where: ReputationScoreWhereUniqueInput
    /**
     * In case the ReputationScore found by the `where` argument doesn't exist, create a new ReputationScore with this data.
     */
    create: XOR<ReputationScoreCreateInput, ReputationScoreUncheckedCreateInput>
    /**
     * In case the ReputationScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReputationScoreUpdateInput, ReputationScoreUncheckedUpdateInput>
  }


  /**
   * ReputationScore delete
   */
  export type ReputationScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
    /**
     * Filter which ReputationScore to delete.
     */
    where: ReputationScoreWhereUniqueInput
  }


  /**
   * ReputationScore deleteMany
   */
  export type ReputationScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReputationScores to delete
     */
    where?: ReputationScoreWhereInput
  }


  /**
   * ReputationScore findRaw
   */
  export type ReputationScoreFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ReputationScore aggregateRaw
   */
  export type ReputationScoreAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ReputationScore.history
   */
  export type ReputationScore$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    where?: ReputationEventWhereInput
    orderBy?: ReputationEventOrderByWithRelationInput | ReputationEventOrderByWithRelationInput[]
    cursor?: ReputationEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReputationEventScalarFieldEnum | ReputationEventScalarFieldEnum[]
  }


  /**
   * ReputationScore without action
   */
  export type ReputationScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationScore
     */
    select?: ReputationScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationScoreInclude<ExtArgs> | null
  }



  /**
   * Model ReputationEvent
   */

  export type AggregateReputationEvent = {
    _count: ReputationEventCountAggregateOutputType | null
    _avg: ReputationEventAvgAggregateOutputType | null
    _sum: ReputationEventSumAggregateOutputType | null
    _min: ReputationEventMinAggregateOutputType | null
    _max: ReputationEventMaxAggregateOutputType | null
  }

  export type ReputationEventAvgAggregateOutputType = {
    delta: number | null
  }

  export type ReputationEventSumAggregateOutputType = {
    delta: number | null
  }

  export type ReputationEventMinAggregateOutputType = {
    id: string | null
    reputationScoreId: string | null
    type: $Enums.ReputationEventType | null
    delta: number | null
    reason: string | null
    relatedEntityType: string | null
    relatedEntityId: string | null
    createdAt: Date | null
  }

  export type ReputationEventMaxAggregateOutputType = {
    id: string | null
    reputationScoreId: string | null
    type: $Enums.ReputationEventType | null
    delta: number | null
    reason: string | null
    relatedEntityType: string | null
    relatedEntityId: string | null
    createdAt: Date | null
  }

  export type ReputationEventCountAggregateOutputType = {
    id: number
    reputationScoreId: number
    type: number
    delta: number
    reason: number
    relatedEntityType: number
    relatedEntityId: number
    createdAt: number
    _all: number
  }


  export type ReputationEventAvgAggregateInputType = {
    delta?: true
  }

  export type ReputationEventSumAggregateInputType = {
    delta?: true
  }

  export type ReputationEventMinAggregateInputType = {
    id?: true
    reputationScoreId?: true
    type?: true
    delta?: true
    reason?: true
    relatedEntityType?: true
    relatedEntityId?: true
    createdAt?: true
  }

  export type ReputationEventMaxAggregateInputType = {
    id?: true
    reputationScoreId?: true
    type?: true
    delta?: true
    reason?: true
    relatedEntityType?: true
    relatedEntityId?: true
    createdAt?: true
  }

  export type ReputationEventCountAggregateInputType = {
    id?: true
    reputationScoreId?: true
    type?: true
    delta?: true
    reason?: true
    relatedEntityType?: true
    relatedEntityId?: true
    createdAt?: true
    _all?: true
  }

  export type ReputationEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReputationEvent to aggregate.
     */
    where?: ReputationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationEvents to fetch.
     */
    orderBy?: ReputationEventOrderByWithRelationInput | ReputationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReputationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReputationEvents
    **/
    _count?: true | ReputationEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReputationEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReputationEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReputationEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReputationEventMaxAggregateInputType
  }

  export type GetReputationEventAggregateType<T extends ReputationEventAggregateArgs> = {
        [P in keyof T & keyof AggregateReputationEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReputationEvent[P]>
      : GetScalarType<T[P], AggregateReputationEvent[P]>
  }




  export type ReputationEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReputationEventWhereInput
    orderBy?: ReputationEventOrderByWithAggregationInput | ReputationEventOrderByWithAggregationInput[]
    by: ReputationEventScalarFieldEnum[] | ReputationEventScalarFieldEnum
    having?: ReputationEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReputationEventCountAggregateInputType | true
    _avg?: ReputationEventAvgAggregateInputType
    _sum?: ReputationEventSumAggregateInputType
    _min?: ReputationEventMinAggregateInputType
    _max?: ReputationEventMaxAggregateInputType
  }

  export type ReputationEventGroupByOutputType = {
    id: string
    reputationScoreId: string
    type: $Enums.ReputationEventType
    delta: number
    reason: string
    relatedEntityType: string | null
    relatedEntityId: string | null
    createdAt: Date
    _count: ReputationEventCountAggregateOutputType | null
    _avg: ReputationEventAvgAggregateOutputType | null
    _sum: ReputationEventSumAggregateOutputType | null
    _min: ReputationEventMinAggregateOutputType | null
    _max: ReputationEventMaxAggregateOutputType | null
  }

  type GetReputationEventGroupByPayload<T extends ReputationEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReputationEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReputationEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReputationEventGroupByOutputType[P]>
            : GetScalarType<T[P], ReputationEventGroupByOutputType[P]>
        }
      >
    >


  export type ReputationEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reputationScoreId?: boolean
    type?: boolean
    delta?: boolean
    reason?: boolean
    relatedEntityType?: boolean
    relatedEntityId?: boolean
    createdAt?: boolean
    reputationScore?: boolean | ReputationScoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reputationEvent"]>

  export type ReputationEventSelectScalar = {
    id?: boolean
    reputationScoreId?: boolean
    type?: boolean
    delta?: boolean
    reason?: boolean
    relatedEntityType?: boolean
    relatedEntityId?: boolean
    createdAt?: boolean
  }

  export type ReputationEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reputationScore?: boolean | ReputationScoreDefaultArgs<ExtArgs>
  }


  export type $ReputationEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReputationEvent"
    objects: {
      reputationScore: Prisma.$ReputationScorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reputationScoreId: string
      type: $Enums.ReputationEventType
      delta: number
      reason: string
      relatedEntityType: string | null
      relatedEntityId: string | null
      createdAt: Date
    }, ExtArgs["result"]["reputationEvent"]>
    composites: {}
  }


  type ReputationEventGetPayload<S extends boolean | null | undefined | ReputationEventDefaultArgs> = $Result.GetResult<Prisma.$ReputationEventPayload, S>

  type ReputationEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReputationEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReputationEventCountAggregateInputType | true
    }

  export interface ReputationEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReputationEvent'], meta: { name: 'ReputationEvent' } }
    /**
     * Find zero or one ReputationEvent that matches the filter.
     * @param {ReputationEventFindUniqueArgs} args - Arguments to find a ReputationEvent
     * @example
     * // Get one ReputationEvent
     * const reputationEvent = await prisma.reputationEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReputationEventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationEventFindUniqueArgs<ExtArgs>>
    ): Prisma__ReputationEventClient<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ReputationEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReputationEventFindUniqueOrThrowArgs} args - Arguments to find a ReputationEvent
     * @example
     * // Get one ReputationEvent
     * const reputationEvent = await prisma.reputationEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReputationEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReputationEventClient<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ReputationEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationEventFindFirstArgs} args - Arguments to find a ReputationEvent
     * @example
     * // Get one ReputationEvent
     * const reputationEvent = await prisma.reputationEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReputationEventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationEventFindFirstArgs<ExtArgs>>
    ): Prisma__ReputationEventClient<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ReputationEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationEventFindFirstOrThrowArgs} args - Arguments to find a ReputationEvent
     * @example
     * // Get one ReputationEvent
     * const reputationEvent = await prisma.reputationEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReputationEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReputationEventClient<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ReputationEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReputationEvents
     * const reputationEvents = await prisma.reputationEvent.findMany()
     * 
     * // Get first 10 ReputationEvents
     * const reputationEvents = await prisma.reputationEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reputationEventWithIdOnly = await prisma.reputationEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReputationEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ReputationEvent.
     * @param {ReputationEventCreateArgs} args - Arguments to create a ReputationEvent.
     * @example
     * // Create one ReputationEvent
     * const ReputationEvent = await prisma.reputationEvent.create({
     *   data: {
     *     // ... data to create a ReputationEvent
     *   }
     * })
     * 
    **/
    create<T extends ReputationEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationEventCreateArgs<ExtArgs>>
    ): Prisma__ReputationEventClient<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ReputationEvents.
     *     @param {ReputationEventCreateManyArgs} args - Arguments to create many ReputationEvents.
     *     @example
     *     // Create many ReputationEvents
     *     const reputationEvent = await prisma.reputationEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReputationEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReputationEvent.
     * @param {ReputationEventDeleteArgs} args - Arguments to delete one ReputationEvent.
     * @example
     * // Delete one ReputationEvent
     * const ReputationEvent = await prisma.reputationEvent.delete({
     *   where: {
     *     // ... filter to delete one ReputationEvent
     *   }
     * })
     * 
    **/
    delete<T extends ReputationEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationEventDeleteArgs<ExtArgs>>
    ): Prisma__ReputationEventClient<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ReputationEvent.
     * @param {ReputationEventUpdateArgs} args - Arguments to update one ReputationEvent.
     * @example
     * // Update one ReputationEvent
     * const reputationEvent = await prisma.reputationEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReputationEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationEventUpdateArgs<ExtArgs>>
    ): Prisma__ReputationEventClient<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ReputationEvents.
     * @param {ReputationEventDeleteManyArgs} args - Arguments to filter ReputationEvents to delete.
     * @example
     * // Delete a few ReputationEvents
     * const { count } = await prisma.reputationEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReputationEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReputationEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReputationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReputationEvents
     * const reputationEvent = await prisma.reputationEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReputationEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReputationEvent.
     * @param {ReputationEventUpsertArgs} args - Arguments to update or create a ReputationEvent.
     * @example
     * // Update or create a ReputationEvent
     * const reputationEvent = await prisma.reputationEvent.upsert({
     *   create: {
     *     // ... data to create a ReputationEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReputationEvent we want to update
     *   }
     * })
    **/
    upsert<T extends ReputationEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReputationEventUpsertArgs<ExtArgs>>
    ): Prisma__ReputationEventClient<$Result.GetResult<Prisma.$ReputationEventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ReputationEvents that matches the filter.
     * @param {ReputationEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const reputationEvent = await prisma.reputationEvent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ReputationEventFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ReputationEvent.
     * @param {ReputationEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const reputationEvent = await prisma.reputationEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ReputationEventAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ReputationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationEventCountArgs} args - Arguments to filter ReputationEvents to count.
     * @example
     * // Count the number of ReputationEvents
     * const count = await prisma.reputationEvent.count({
     *   where: {
     *     // ... the filter for the ReputationEvents we want to count
     *   }
     * })
    **/
    count<T extends ReputationEventCountArgs>(
      args?: Subset<T, ReputationEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReputationEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReputationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReputationEventAggregateArgs>(args: Subset<T, ReputationEventAggregateArgs>): Prisma.PrismaPromise<GetReputationEventAggregateType<T>>

    /**
     * Group by ReputationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReputationEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReputationEventGroupByArgs['orderBy'] }
        : { orderBy?: ReputationEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReputationEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReputationEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReputationEvent model
   */
  readonly fields: ReputationEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReputationEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReputationEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reputationScore<T extends ReputationScoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReputationScoreDefaultArgs<ExtArgs>>): Prisma__ReputationScoreClient<$Result.GetResult<Prisma.$ReputationScorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ReputationEvent model
   */ 
  interface ReputationEventFieldRefs {
    readonly id: FieldRef<"ReputationEvent", 'String'>
    readonly reputationScoreId: FieldRef<"ReputationEvent", 'String'>
    readonly type: FieldRef<"ReputationEvent", 'ReputationEventType'>
    readonly delta: FieldRef<"ReputationEvent", 'Float'>
    readonly reason: FieldRef<"ReputationEvent", 'String'>
    readonly relatedEntityType: FieldRef<"ReputationEvent", 'String'>
    readonly relatedEntityId: FieldRef<"ReputationEvent", 'String'>
    readonly createdAt: FieldRef<"ReputationEvent", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ReputationEvent findUnique
   */
  export type ReputationEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    /**
     * Filter, which ReputationEvent to fetch.
     */
    where: ReputationEventWhereUniqueInput
  }


  /**
   * ReputationEvent findUniqueOrThrow
   */
  export type ReputationEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    /**
     * Filter, which ReputationEvent to fetch.
     */
    where: ReputationEventWhereUniqueInput
  }


  /**
   * ReputationEvent findFirst
   */
  export type ReputationEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    /**
     * Filter, which ReputationEvent to fetch.
     */
    where?: ReputationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationEvents to fetch.
     */
    orderBy?: ReputationEventOrderByWithRelationInput | ReputationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReputationEvents.
     */
    cursor?: ReputationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReputationEvents.
     */
    distinct?: ReputationEventScalarFieldEnum | ReputationEventScalarFieldEnum[]
  }


  /**
   * ReputationEvent findFirstOrThrow
   */
  export type ReputationEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    /**
     * Filter, which ReputationEvent to fetch.
     */
    where?: ReputationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationEvents to fetch.
     */
    orderBy?: ReputationEventOrderByWithRelationInput | ReputationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReputationEvents.
     */
    cursor?: ReputationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReputationEvents.
     */
    distinct?: ReputationEventScalarFieldEnum | ReputationEventScalarFieldEnum[]
  }


  /**
   * ReputationEvent findMany
   */
  export type ReputationEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    /**
     * Filter, which ReputationEvents to fetch.
     */
    where?: ReputationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationEvents to fetch.
     */
    orderBy?: ReputationEventOrderByWithRelationInput | ReputationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReputationEvents.
     */
    cursor?: ReputationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationEvents.
     */
    skip?: number
    distinct?: ReputationEventScalarFieldEnum | ReputationEventScalarFieldEnum[]
  }


  /**
   * ReputationEvent create
   */
  export type ReputationEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ReputationEvent.
     */
    data: XOR<ReputationEventCreateInput, ReputationEventUncheckedCreateInput>
  }


  /**
   * ReputationEvent createMany
   */
  export type ReputationEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReputationEvents.
     */
    data: ReputationEventCreateManyInput | ReputationEventCreateManyInput[]
  }


  /**
   * ReputationEvent update
   */
  export type ReputationEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ReputationEvent.
     */
    data: XOR<ReputationEventUpdateInput, ReputationEventUncheckedUpdateInput>
    /**
     * Choose, which ReputationEvent to update.
     */
    where: ReputationEventWhereUniqueInput
  }


  /**
   * ReputationEvent updateMany
   */
  export type ReputationEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReputationEvents.
     */
    data: XOR<ReputationEventUpdateManyMutationInput, ReputationEventUncheckedUpdateManyInput>
    /**
     * Filter which ReputationEvents to update
     */
    where?: ReputationEventWhereInput
  }


  /**
   * ReputationEvent upsert
   */
  export type ReputationEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ReputationEvent to update in case it exists.
     */
    where: ReputationEventWhereUniqueInput
    /**
     * In case the ReputationEvent found by the `where` argument doesn't exist, create a new ReputationEvent with this data.
     */
    create: XOR<ReputationEventCreateInput, ReputationEventUncheckedCreateInput>
    /**
     * In case the ReputationEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReputationEventUpdateInput, ReputationEventUncheckedUpdateInput>
  }


  /**
   * ReputationEvent delete
   */
  export type ReputationEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
    /**
     * Filter which ReputationEvent to delete.
     */
    where: ReputationEventWhereUniqueInput
  }


  /**
   * ReputationEvent deleteMany
   */
  export type ReputationEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReputationEvents to delete
     */
    where?: ReputationEventWhereInput
  }


  /**
   * ReputationEvent findRaw
   */
  export type ReputationEventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ReputationEvent aggregateRaw
   */
  export type ReputationEventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ReputationEvent without action
   */
  export type ReputationEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationEvent
     */
    select?: ReputationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReputationEventInclude<ExtArgs> | null
  }



  /**
   * Model AuditEvent
   */

  export type AggregateAuditEvent = {
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  export type AuditEventMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    actorId: string | null
    actorType: $Enums.ActorType | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    ipAddressHash: string | null
    retentionClass: $Enums.RetentionClass | null
    sensitivityLevel: $Enums.SensitivityLevel | null
  }

  export type AuditEventMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    actorId: string | null
    actorType: $Enums.ActorType | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    ipAddressHash: string | null
    retentionClass: $Enums.RetentionClass | null
    sensitivityLevel: $Enums.SensitivityLevel | null
  }

  export type AuditEventCountAggregateOutputType = {
    id: number
    timestamp: number
    actorId: number
    actorType: number
    action: number
    resourceType: number
    resourceId: number
    previousState: number
    newState: number
    metadata: number
    ipAddressHash: number
    retentionClass: number
    sensitivityLevel: number
    _all: number
  }


  export type AuditEventMinAggregateInputType = {
    id?: true
    timestamp?: true
    actorId?: true
    actorType?: true
    action?: true
    resourceType?: true
    resourceId?: true
    ipAddressHash?: true
    retentionClass?: true
    sensitivityLevel?: true
  }

  export type AuditEventMaxAggregateInputType = {
    id?: true
    timestamp?: true
    actorId?: true
    actorType?: true
    action?: true
    resourceType?: true
    resourceId?: true
    ipAddressHash?: true
    retentionClass?: true
    sensitivityLevel?: true
  }

  export type AuditEventCountAggregateInputType = {
    id?: true
    timestamp?: true
    actorId?: true
    actorType?: true
    action?: true
    resourceType?: true
    resourceId?: true
    previousState?: true
    newState?: true
    metadata?: true
    ipAddressHash?: true
    retentionClass?: true
    sensitivityLevel?: true
    _all?: true
  }

  export type AuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvent to aggregate.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditEvents
    **/
    _count?: true | AuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditEventMaxAggregateInputType
  }

  export type GetAuditEventAggregateType<T extends AuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditEvent[P]>
      : GetScalarType<T[P], AggregateAuditEvent[P]>
  }




  export type AuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithAggregationInput | AuditEventOrderByWithAggregationInput[]
    by: AuditEventScalarFieldEnum[] | AuditEventScalarFieldEnum
    having?: AuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditEventCountAggregateInputType | true
    _min?: AuditEventMinAggregateInputType
    _max?: AuditEventMaxAggregateInputType
  }

  export type AuditEventGroupByOutputType = {
    id: string
    timestamp: Date
    actorId: string | null
    actorType: $Enums.ActorType
    action: string
    resourceType: string
    resourceId: string | null
    previousState: JsonValue | null
    newState: JsonValue | null
    metadata: JsonValue | null
    ipAddressHash: string | null
    retentionClass: $Enums.RetentionClass
    sensitivityLevel: $Enums.SensitivityLevel
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  type GetAuditEventGroupByPayload<T extends AuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
        }
      >
    >


  export type AuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    actorId?: boolean
    actorType?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    previousState?: boolean
    newState?: boolean
    metadata?: boolean
    ipAddressHash?: boolean
    retentionClass?: boolean
    sensitivityLevel?: boolean
    actor?: boolean | AuditEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectScalar = {
    id?: boolean
    timestamp?: boolean
    actorId?: boolean
    actorType?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    previousState?: boolean
    newState?: boolean
    metadata?: boolean
    ipAddressHash?: boolean
    retentionClass?: boolean
    sensitivityLevel?: boolean
  }

  export type AuditEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditEvent$actorArgs<ExtArgs>
  }


  export type $AuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditEvent"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      actorId: string | null
      actorType: $Enums.ActorType
      action: string
      resourceType: string
      resourceId: string | null
      previousState: Prisma.JsonValue | null
      newState: Prisma.JsonValue | null
      metadata: Prisma.JsonValue | null
      ipAddressHash: string | null
      retentionClass: $Enums.RetentionClass
      sensitivityLevel: $Enums.SensitivityLevel
    }, ExtArgs["result"]["auditEvent"]>
    composites: {}
  }


  type AuditEventGetPayload<S extends boolean | null | undefined | AuditEventDefaultArgs> = $Result.GetResult<Prisma.$AuditEventPayload, S>

  type AuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditEventCountAggregateInputType | true
    }

  export interface AuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditEvent'], meta: { name: 'AuditEvent' } }
    /**
     * Find zero or one AuditEvent that matches the filter.
     * @param {AuditEventFindUniqueArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuditEventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuditEventFindUniqueArgs<ExtArgs>>
    ): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AuditEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuditEventFindUniqueOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuditEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuditEventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditEventFindFirstArgs<ExtArgs>>
    ): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuditEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany()
     * 
     * // Get first 10 AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuditEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AuditEvent.
     * @param {AuditEventCreateArgs} args - Arguments to create a AuditEvent.
     * @example
     * // Create one AuditEvent
     * const AuditEvent = await prisma.auditEvent.create({
     *   data: {
     *     // ... data to create a AuditEvent
     *   }
     * })
     * 
    **/
    create<T extends AuditEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditEventCreateArgs<ExtArgs>>
    ): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AuditEvents.
     *     @param {AuditEventCreateManyArgs} args - Arguments to create many AuditEvents.
     *     @example
     *     // Create many AuditEvents
     *     const auditEvent = await prisma.auditEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuditEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditEvent.
     * @param {AuditEventDeleteArgs} args - Arguments to delete one AuditEvent.
     * @example
     * // Delete one AuditEvent
     * const AuditEvent = await prisma.auditEvent.delete({
     *   where: {
     *     // ... filter to delete one AuditEvent
     *   }
     * })
     * 
    **/
    delete<T extends AuditEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuditEventDeleteArgs<ExtArgs>>
    ): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AuditEvent.
     * @param {AuditEventUpdateArgs} args - Arguments to update one AuditEvent.
     * @example
     * // Update one AuditEvent
     * const auditEvent = await prisma.auditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuditEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditEventUpdateArgs<ExtArgs>>
    ): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AuditEvents.
     * @param {AuditEventDeleteManyArgs} args - Arguments to filter AuditEvents to delete.
     * @example
     * // Delete a few AuditEvents
     * const { count } = await prisma.auditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuditEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuditEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuditEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditEvent.
     * @param {AuditEventUpsertArgs} args - Arguments to update or create a AuditEvent.
     * @example
     * // Update or create a AuditEvent
     * const auditEvent = await prisma.auditEvent.upsert({
     *   create: {
     *     // ... data to create a AuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditEvent we want to update
     *   }
     * })
    **/
    upsert<T extends AuditEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuditEventUpsertArgs<ExtArgs>>
    ): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * @param {AuditEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const auditEvent = await prisma.auditEvent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AuditEventFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AuditEvent.
     * @param {AuditEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const auditEvent = await prisma.auditEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AuditEventAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventCountArgs} args - Arguments to filter AuditEvents to count.
     * @example
     * // Count the number of AuditEvents
     * const count = await prisma.auditEvent.count({
     *   where: {
     *     // ... the filter for the AuditEvents we want to count
     *   }
     * })
    **/
    count<T extends AuditEventCountArgs>(
      args?: Subset<T, AuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditEventAggregateArgs>(args: Subset<T, AuditEventAggregateArgs>): Prisma.PrismaPromise<GetAuditEventAggregateType<T>>

    /**
     * Group by AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditEventGroupByArgs['orderBy'] }
        : { orderBy?: AuditEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditEvent model
   */
  readonly fields: AuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    actor<T extends AuditEvent$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditEvent$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AuditEvent model
   */ 
  interface AuditEventFieldRefs {
    readonly id: FieldRef<"AuditEvent", 'String'>
    readonly timestamp: FieldRef<"AuditEvent", 'DateTime'>
    readonly actorId: FieldRef<"AuditEvent", 'String'>
    readonly actorType: FieldRef<"AuditEvent", 'ActorType'>
    readonly action: FieldRef<"AuditEvent", 'String'>
    readonly resourceType: FieldRef<"AuditEvent", 'String'>
    readonly resourceId: FieldRef<"AuditEvent", 'String'>
    readonly previousState: FieldRef<"AuditEvent", 'Json'>
    readonly newState: FieldRef<"AuditEvent", 'Json'>
    readonly metadata: FieldRef<"AuditEvent", 'Json'>
    readonly ipAddressHash: FieldRef<"AuditEvent", 'String'>
    readonly retentionClass: FieldRef<"AuditEvent", 'RetentionClass'>
    readonly sensitivityLevel: FieldRef<"AuditEvent", 'SensitivityLevel'>
  }
    

  // Custom InputTypes

  /**
   * AuditEvent findUnique
   */
  export type AuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }


  /**
   * AuditEvent findUniqueOrThrow
   */
  export type AuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }


  /**
   * AuditEvent findFirst
   */
  export type AuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }


  /**
   * AuditEvent findFirstOrThrow
   */
  export type AuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }


  /**
   * AuditEvent findMany
   */
  export type AuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvents to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }


  /**
   * AuditEvent create
   */
  export type AuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditEvent.
     */
    data: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
  }


  /**
   * AuditEvent createMany
   */
  export type AuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
  }


  /**
   * AuditEvent update
   */
  export type AuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditEvent.
     */
    data: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
    /**
     * Choose, which AuditEvent to update.
     */
    where: AuditEventWhereUniqueInput
  }


  /**
   * AuditEvent updateMany
   */
  export type AuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
  }


  /**
   * AuditEvent upsert
   */
  export type AuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditEvent to update in case it exists.
     */
    where: AuditEventWhereUniqueInput
    /**
     * In case the AuditEvent found by the `where` argument doesn't exist, create a new AuditEvent with this data.
     */
    create: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
    /**
     * In case the AuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
  }


  /**
   * AuditEvent delete
   */
  export type AuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter which AuditEvent to delete.
     */
    where: AuditEventWhereUniqueInput
  }


  /**
   * AuditEvent deleteMany
   */
  export type AuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvents to delete
     */
    where?: AuditEventWhereInput
  }


  /**
   * AuditEvent findRaw
   */
  export type AuditEventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AuditEvent aggregateRaw
   */
  export type AuditEventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AuditEvent.actor
   */
  export type AuditEvent$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * AuditEvent without action
   */
  export type AuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditEventInclude<ExtArgs> | null
  }



  /**
   * Model SystemSetting
   */

  export type AggregateSystemSetting = {
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  export type SystemSettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type SystemSettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type SystemSettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type SystemSettingMinAggregateInputType = {
    id?: true
    key?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type SystemSettingMaxAggregateInputType = {
    id?: true
    key?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type SystemSettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type SystemSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSetting to aggregate.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingMaxAggregateInputType
  }

  export type GetSystemSettingAggregateType<T extends SystemSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSetting[P]>
      : GetScalarType<T[P], AggregateSystemSetting[P]>
  }




  export type SystemSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingWhereInput
    orderBy?: SystemSettingOrderByWithAggregationInput | SystemSettingOrderByWithAggregationInput[]
    by: SystemSettingScalarFieldEnum[] | SystemSettingScalarFieldEnum
    having?: SystemSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingCountAggregateInputType | true
    _min?: SystemSettingMinAggregateInputType
    _max?: SystemSettingMaxAggregateInputType
  }

  export type SystemSettingGroupByOutputType = {
    id: string
    key: string
    value: JsonValue
    updatedAt: Date
    updatedBy: string | null
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  type GetSystemSettingGroupByPayload<T extends SystemSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }


  export type $SystemSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: Prisma.JsonValue
      updatedAt: Date
      updatedBy: string | null
    }, ExtArgs["result"]["systemSetting"]>
    composites: {}
  }


  type SystemSettingGetPayload<S extends boolean | null | undefined | SystemSettingDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingPayload, S>

  type SystemSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemSettingCountAggregateInputType | true
    }

  export interface SystemSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSetting'], meta: { name: 'SystemSetting' } }
    /**
     * Find zero or one SystemSetting that matches the filter.
     * @param {SystemSettingFindUniqueArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemSettingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemSetting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SystemSettingFindUniqueOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemSettingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemSettingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingFindFirstArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemSettingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SystemSettingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemSetting.
     * @param {SystemSettingCreateArgs} args - Arguments to create a SystemSetting.
     * @example
     * // Create one SystemSetting
     * const SystemSetting = await prisma.systemSetting.create({
     *   data: {
     *     // ... data to create a SystemSetting
     *   }
     * })
     * 
    **/
    create<T extends SystemSettingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingCreateArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemSettings.
     *     @param {SystemSettingCreateManyArgs} args - Arguments to create many SystemSettings.
     *     @example
     *     // Create many SystemSettings
     *     const systemSetting = await prisma.systemSetting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SystemSettingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemSetting.
     * @param {SystemSettingDeleteArgs} args - Arguments to delete one SystemSetting.
     * @example
     * // Delete one SystemSetting
     * const SystemSetting = await prisma.systemSetting.delete({
     *   where: {
     *     // ... filter to delete one SystemSetting
     *   }
     * })
     * 
    **/
    delete<T extends SystemSettingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingDeleteArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemSetting.
     * @param {SystemSettingUpdateArgs} args - Arguments to update one SystemSetting.
     * @example
     * // Update one SystemSetting
     * const systemSetting = await prisma.systemSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemSettingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingUpdateArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemSettingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemSettingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemSetting.
     * @param {SystemSettingUpsertArgs} args - Arguments to update or create a SystemSetting.
     * @example
     * // Update or create a SystemSetting
     * const systemSetting = await prisma.systemSetting.upsert({
     *   create: {
     *     // ... data to create a SystemSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSetting we want to update
     *   }
     * })
    **/
    upsert<T extends SystemSettingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingUpsertArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * @param {SystemSettingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const systemSetting = await prisma.systemSetting.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SystemSettingFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SystemSetting.
     * @param {SystemSettingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const systemSetting = await prisma.systemSetting.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SystemSettingAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSetting.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingCountArgs>(
      args?: Subset<T, SystemSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingAggregateArgs>(args: Subset<T, SystemSettingAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingAggregateType<T>>

    /**
     * Group by SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSetting model
   */
  readonly fields: SystemSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemSetting model
   */ 
  interface SystemSettingFieldRefs {
    readonly id: FieldRef<"SystemSetting", 'String'>
    readonly key: FieldRef<"SystemSetting", 'String'>
    readonly value: FieldRef<"SystemSetting", 'Json'>
    readonly updatedAt: FieldRef<"SystemSetting", 'DateTime'>
    readonly updatedBy: FieldRef<"SystemSetting", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SystemSetting findUnique
   */
  export type SystemSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }


  /**
   * SystemSetting findUniqueOrThrow
   */
  export type SystemSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }


  /**
   * SystemSetting findFirst
   */
  export type SystemSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }


  /**
   * SystemSetting findFirstOrThrow
   */
  export type SystemSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }


  /**
   * SystemSetting findMany
   */
  export type SystemSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }


  /**
   * SystemSetting create
   */
  export type SystemSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemSetting.
     */
    data: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
  }


  /**
   * SystemSetting createMany
   */
  export type SystemSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
  }


  /**
   * SystemSetting update
   */
  export type SystemSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemSetting.
     */
    data: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
    /**
     * Choose, which SystemSetting to update.
     */
    where: SystemSettingWhereUniqueInput
  }


  /**
   * SystemSetting updateMany
   */
  export type SystemSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
  }


  /**
   * SystemSetting upsert
   */
  export type SystemSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemSetting to update in case it exists.
     */
    where: SystemSettingWhereUniqueInput
    /**
     * In case the SystemSetting found by the `where` argument doesn't exist, create a new SystemSetting with this data.
     */
    create: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
    /**
     * In case the SystemSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
  }


  /**
   * SystemSetting delete
   */
  export type SystemSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter which SystemSetting to delete.
     */
    where: SystemSettingWhereUniqueInput
  }


  /**
   * SystemSetting deleteMany
   */
  export type SystemSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingWhereInput
  }


  /**
   * SystemSetting findRaw
   */
  export type SystemSettingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SystemSetting aggregateRaw
   */
  export type SystemSettingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SystemSetting without action
   */
  export type SystemSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ExpertScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    currentVersionId: 'currentVersionId',
    status: 'status',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpertScalarFieldEnum = (typeof ExpertScalarFieldEnum)[keyof typeof ExpertScalarFieldEnum]


  export const ExpertVersionScalarFieldEnum: {
    id: 'id',
    expertId: 'expertId',
    versionNumber: 'versionNumber',
    scope: 'scope',
    permissions: 'permissions',
    logicDefinition: 'logicDefinition',
    changeReason: 'changeReason',
    createdById: 'createdById',
    createdAt: 'createdAt',
    accuracyScore: 'accuracyScore',
    usageCount: 'usageCount',
    lastInvokedAt: 'lastInvokedAt'
  };

  export type ExpertVersionScalarFieldEnum = (typeof ExpertVersionScalarFieldEnum)[keyof typeof ExpertVersionScalarFieldEnum]


  export const ExpertDependencyScalarFieldEnum: {
    id: 'id',
    dependentExpertId: 'dependentExpertId',
    requiredExpertId: 'requiredExpertId',
    dependencyType: 'dependencyType',
    createdAt: 'createdAt'
  };

  export type ExpertDependencyScalarFieldEnum = (typeof ExpertDependencyScalarFieldEnum)[keyof typeof ExpertDependencyScalarFieldEnum]


  export const DebateScalarFieldEnum: {
    id: 'id',
    expertId: 'expertId',
    topic: 'topic',
    description: 'description',
    status: 'status',
    resolutionCriteria: 'resolutionCriteria',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resolvedAt: 'resolvedAt',
    outcome: 'outcome'
  };

  export type DebateScalarFieldEnum = (typeof DebateScalarFieldEnum)[keyof typeof DebateScalarFieldEnum]


  export const ArgumentScalarFieldEnum: {
    id: 'id',
    debateId: 'debateId',
    parentArgumentId: 'parentArgumentId',
    type: 'type',
    claim: 'claim',
    reasoning: 'reasoning',
    status: 'status',
    validationStatus: 'validationStatus',
    validationReason: 'validationReason',
    authorReputationAtTime: 'authorReputationAtTime',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArgumentScalarFieldEnum = (typeof ArgumentScalarFieldEnum)[keyof typeof ArgumentScalarFieldEnum]


  export const EvidenceScalarFieldEnum: {
    id: 'id',
    argumentId: 'argumentId',
    type: 'type',
    content: 'content',
    sourceUrl: 'sourceUrl',
    verificationStatus: 'verificationStatus',
    createdAt: 'createdAt'
  };

  export type EvidenceScalarFieldEnum = (typeof EvidenceScalarFieldEnum)[keyof typeof EvidenceScalarFieldEnum]


  export const ReputationScoreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    domain: 'domain',
    score: 'score',
    rank: 'rank',
    evidenceCount: 'evidenceCount',
    accuracyRate: 'accuracyRate',
    lastActiveAt: 'lastActiveAt',
    lastCalculatedAt: 'lastCalculatedAt'
  };

  export type ReputationScoreScalarFieldEnum = (typeof ReputationScoreScalarFieldEnum)[keyof typeof ReputationScoreScalarFieldEnum]


  export const ReputationEventScalarFieldEnum: {
    id: 'id',
    reputationScoreId: 'reputationScoreId',
    type: 'type',
    delta: 'delta',
    reason: 'reason',
    relatedEntityType: 'relatedEntityType',
    relatedEntityId: 'relatedEntityId',
    createdAt: 'createdAt'
  };

  export type ReputationEventScalarFieldEnum = (typeof ReputationEventScalarFieldEnum)[keyof typeof ReputationEventScalarFieldEnum]


  export const AuditEventScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    actorId: 'actorId',
    actorType: 'actorType',
    action: 'action',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    previousState: 'previousState',
    newState: 'newState',
    metadata: 'metadata',
    ipAddressHash: 'ipAddressHash',
    retentionClass: 'retentionClass',
    sensitivityLevel: 'sensitivityLevel'
  };

  export type AuditEventScalarFieldEnum = (typeof AuditEventScalarFieldEnum)[keyof typeof AuditEventScalarFieldEnum]


  export const SystemSettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type SystemSettingScalarFieldEnum = (typeof SystemSettingScalarFieldEnum)[keyof typeof SystemSettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ExpertStatus'
   */
  export type EnumExpertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpertStatus'>
    


  /**
   * Reference to a field of type 'ExpertStatus[]'
   */
  export type ListEnumExpertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpertStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DependencyType'
   */
  export type EnumDependencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DependencyType'>
    


  /**
   * Reference to a field of type 'DependencyType[]'
   */
  export type ListEnumDependencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DependencyType[]'>
    


  /**
   * Reference to a field of type 'DebateStatus'
   */
  export type EnumDebateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DebateStatus'>
    


  /**
   * Reference to a field of type 'DebateStatus[]'
   */
  export type ListEnumDebateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DebateStatus[]'>
    


  /**
   * Reference to a field of type 'ArgumentType'
   */
  export type EnumArgumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArgumentType'>
    


  /**
   * Reference to a field of type 'ArgumentType[]'
   */
  export type ListEnumArgumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArgumentType[]'>
    


  /**
   * Reference to a field of type 'ArgumentStatus'
   */
  export type EnumArgumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArgumentStatus'>
    


  /**
   * Reference to a field of type 'ArgumentStatus[]'
   */
  export type ListEnumArgumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArgumentStatus[]'>
    


  /**
   * Reference to a field of type 'ValidationStatus'
   */
  export type EnumValidationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ValidationStatus'>
    


  /**
   * Reference to a field of type 'ValidationStatus[]'
   */
  export type ListEnumValidationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ValidationStatus[]'>
    


  /**
   * Reference to a field of type 'EvidenceType'
   */
  export type EnumEvidenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvidenceType'>
    


  /**
   * Reference to a field of type 'EvidenceType[]'
   */
  export type ListEnumEvidenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvidenceType[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'ReputationRank'
   */
  export type EnumReputationRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReputationRank'>
    


  /**
   * Reference to a field of type 'ReputationRank[]'
   */
  export type ListEnumReputationRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReputationRank[]'>
    


  /**
   * Reference to a field of type 'ReputationEventType'
   */
  export type EnumReputationEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReputationEventType'>
    


  /**
   * Reference to a field of type 'ReputationEventType[]'
   */
  export type ListEnumReputationEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReputationEventType[]'>
    


  /**
   * Reference to a field of type 'ActorType'
   */
  export type EnumActorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActorType'>
    


  /**
   * Reference to a field of type 'ActorType[]'
   */
  export type ListEnumActorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActorType[]'>
    


  /**
   * Reference to a field of type 'RetentionClass'
   */
  export type EnumRetentionClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RetentionClass'>
    


  /**
   * Reference to a field of type 'RetentionClass[]'
   */
  export type ListEnumRetentionClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RetentionClass[]'>
    


  /**
   * Reference to a field of type 'SensitivityLevel'
   */
  export type EnumSensitivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SensitivityLevel'>
    


  /**
   * Reference to a field of type 'SensitivityLevel[]'
   */
  export type ListEnumSensitivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SensitivityLevel[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    experts?: ExpertListRelationFilter
    expertVersions?: ExpertVersionListRelationFilter
    debates?: DebateListRelationFilter
    arguments?: ArgumentListRelationFilter
    reputationScores?: ReputationScoreListRelationFilter
    auditEvents?: AuditEventListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
    experts?: ExpertOrderByRelationAggregateInput
    expertVersions?: ExpertVersionOrderByRelationAggregateInput
    debates?: DebateOrderByRelationAggregateInput
    arguments?: ArgumentOrderByRelationAggregateInput
    reputationScores?: ReputationScoreOrderByRelationAggregateInput
    auditEvents?: AuditEventOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    experts?: ExpertListRelationFilter
    expertVersions?: ExpertVersionListRelationFilter
    debates?: DebateListRelationFilter
    arguments?: ArgumentListRelationFilter
    reputationScores?: ReputationScoreListRelationFilter
    auditEvents?: AuditEventListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type ExpertWhereInput = {
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    id?: StringFilter<"Expert"> | string
    slug?: StringFilter<"Expert"> | string
    currentVersionId?: StringNullableFilter<"Expert"> | string | null
    status?: EnumExpertStatusFilter<"Expert"> | $Enums.ExpertStatus
    createdById?: StringFilter<"Expert"> | string
    createdAt?: DateTimeFilter<"Expert"> | Date | string
    updatedAt?: DateTimeFilter<"Expert"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    versions?: ExpertVersionListRelationFilter
    debates?: DebateListRelationFilter
    dependencies?: ExpertDependencyListRelationFilter
    dependents?: ExpertDependencyListRelationFilter
  }

  export type ExpertOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    currentVersionId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    versions?: ExpertVersionOrderByRelationAggregateInput
    debates?: DebateOrderByRelationAggregateInput
    dependencies?: ExpertDependencyOrderByRelationAggregateInput
    dependents?: ExpertDependencyOrderByRelationAggregateInput
  }

  export type ExpertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    currentVersionId?: StringNullableFilter<"Expert"> | string | null
    status?: EnumExpertStatusFilter<"Expert"> | $Enums.ExpertStatus
    createdById?: StringFilter<"Expert"> | string
    createdAt?: DateTimeFilter<"Expert"> | Date | string
    updatedAt?: DateTimeFilter<"Expert"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    versions?: ExpertVersionListRelationFilter
    debates?: DebateListRelationFilter
    dependencies?: ExpertDependencyListRelationFilter
    dependents?: ExpertDependencyListRelationFilter
  }, "id" | "slug">

  export type ExpertOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    currentVersionId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpertCountOrderByAggregateInput
    _max?: ExpertMaxOrderByAggregateInput
    _min?: ExpertMinOrderByAggregateInput
  }

  export type ExpertScalarWhereWithAggregatesInput = {
    AND?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    OR?: ExpertScalarWhereWithAggregatesInput[]
    NOT?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expert"> | string
    slug?: StringWithAggregatesFilter<"Expert"> | string
    currentVersionId?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    status?: EnumExpertStatusWithAggregatesFilter<"Expert"> | $Enums.ExpertStatus
    createdById?: StringWithAggregatesFilter<"Expert"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Expert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Expert"> | Date | string
  }

  export type ExpertVersionWhereInput = {
    AND?: ExpertVersionWhereInput | ExpertVersionWhereInput[]
    OR?: ExpertVersionWhereInput[]
    NOT?: ExpertVersionWhereInput | ExpertVersionWhereInput[]
    id?: StringFilter<"ExpertVersion"> | string
    expertId?: StringFilter<"ExpertVersion"> | string
    versionNumber?: IntFilter<"ExpertVersion"> | number
    scope?: JsonFilter<"ExpertVersion">
    permissions?: JsonFilter<"ExpertVersion">
    logicDefinition?: JsonFilter<"ExpertVersion">
    changeReason?: StringFilter<"ExpertVersion"> | string
    createdById?: StringFilter<"ExpertVersion"> | string
    createdAt?: DateTimeFilter<"ExpertVersion"> | Date | string
    accuracyScore?: FloatFilter<"ExpertVersion"> | number
    usageCount?: IntFilter<"ExpertVersion"> | number
    lastInvokedAt?: DateTimeNullableFilter<"ExpertVersion"> | Date | string | null
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ExpertVersionOrderByWithRelationInput = {
    id?: SortOrder
    expertId?: SortOrder
    versionNumber?: SortOrder
    scope?: SortOrder
    permissions?: SortOrder
    logicDefinition?: SortOrder
    changeReason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    accuracyScore?: SortOrder
    usageCount?: SortOrder
    lastInvokedAt?: SortOrder
    expert?: ExpertOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type ExpertVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    expertId_versionNumber?: ExpertVersionExpertIdVersionNumberCompoundUniqueInput
    AND?: ExpertVersionWhereInput | ExpertVersionWhereInput[]
    OR?: ExpertVersionWhereInput[]
    NOT?: ExpertVersionWhereInput | ExpertVersionWhereInput[]
    expertId?: StringFilter<"ExpertVersion"> | string
    versionNumber?: IntFilter<"ExpertVersion"> | number
    scope?: JsonFilter<"ExpertVersion">
    permissions?: JsonFilter<"ExpertVersion">
    logicDefinition?: JsonFilter<"ExpertVersion">
    changeReason?: StringFilter<"ExpertVersion"> | string
    createdById?: StringFilter<"ExpertVersion"> | string
    createdAt?: DateTimeFilter<"ExpertVersion"> | Date | string
    accuracyScore?: FloatFilter<"ExpertVersion"> | number
    usageCount?: IntFilter<"ExpertVersion"> | number
    lastInvokedAt?: DateTimeNullableFilter<"ExpertVersion"> | Date | string | null
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "expertId_versionNumber">

  export type ExpertVersionOrderByWithAggregationInput = {
    id?: SortOrder
    expertId?: SortOrder
    versionNumber?: SortOrder
    scope?: SortOrder
    permissions?: SortOrder
    logicDefinition?: SortOrder
    changeReason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    accuracyScore?: SortOrder
    usageCount?: SortOrder
    lastInvokedAt?: SortOrder
    _count?: ExpertVersionCountOrderByAggregateInput
    _avg?: ExpertVersionAvgOrderByAggregateInput
    _max?: ExpertVersionMaxOrderByAggregateInput
    _min?: ExpertVersionMinOrderByAggregateInput
    _sum?: ExpertVersionSumOrderByAggregateInput
  }

  export type ExpertVersionScalarWhereWithAggregatesInput = {
    AND?: ExpertVersionScalarWhereWithAggregatesInput | ExpertVersionScalarWhereWithAggregatesInput[]
    OR?: ExpertVersionScalarWhereWithAggregatesInput[]
    NOT?: ExpertVersionScalarWhereWithAggregatesInput | ExpertVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpertVersion"> | string
    expertId?: StringWithAggregatesFilter<"ExpertVersion"> | string
    versionNumber?: IntWithAggregatesFilter<"ExpertVersion"> | number
    scope?: JsonWithAggregatesFilter<"ExpertVersion">
    permissions?: JsonWithAggregatesFilter<"ExpertVersion">
    logicDefinition?: JsonWithAggregatesFilter<"ExpertVersion">
    changeReason?: StringWithAggregatesFilter<"ExpertVersion"> | string
    createdById?: StringWithAggregatesFilter<"ExpertVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExpertVersion"> | Date | string
    accuracyScore?: FloatWithAggregatesFilter<"ExpertVersion"> | number
    usageCount?: IntWithAggregatesFilter<"ExpertVersion"> | number
    lastInvokedAt?: DateTimeNullableWithAggregatesFilter<"ExpertVersion"> | Date | string | null
  }

  export type ExpertDependencyWhereInput = {
    AND?: ExpertDependencyWhereInput | ExpertDependencyWhereInput[]
    OR?: ExpertDependencyWhereInput[]
    NOT?: ExpertDependencyWhereInput | ExpertDependencyWhereInput[]
    id?: StringFilter<"ExpertDependency"> | string
    dependentExpertId?: StringFilter<"ExpertDependency"> | string
    requiredExpertId?: StringFilter<"ExpertDependency"> | string
    dependencyType?: EnumDependencyTypeFilter<"ExpertDependency"> | $Enums.DependencyType
    createdAt?: DateTimeFilter<"ExpertDependency"> | Date | string
    dependentExpert?: XOR<ExpertRelationFilter, ExpertWhereInput>
    requiredExpert?: XOR<ExpertRelationFilter, ExpertWhereInput>
  }

  export type ExpertDependencyOrderByWithRelationInput = {
    id?: SortOrder
    dependentExpertId?: SortOrder
    requiredExpertId?: SortOrder
    dependencyType?: SortOrder
    createdAt?: SortOrder
    dependentExpert?: ExpertOrderByWithRelationInput
    requiredExpert?: ExpertOrderByWithRelationInput
  }

  export type ExpertDependencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dependentExpertId_requiredExpertId?: ExpertDependencyDependentExpertIdRequiredExpertIdCompoundUniqueInput
    AND?: ExpertDependencyWhereInput | ExpertDependencyWhereInput[]
    OR?: ExpertDependencyWhereInput[]
    NOT?: ExpertDependencyWhereInput | ExpertDependencyWhereInput[]
    dependentExpertId?: StringFilter<"ExpertDependency"> | string
    requiredExpertId?: StringFilter<"ExpertDependency"> | string
    dependencyType?: EnumDependencyTypeFilter<"ExpertDependency"> | $Enums.DependencyType
    createdAt?: DateTimeFilter<"ExpertDependency"> | Date | string
    dependentExpert?: XOR<ExpertRelationFilter, ExpertWhereInput>
    requiredExpert?: XOR<ExpertRelationFilter, ExpertWhereInput>
  }, "id" | "dependentExpertId_requiredExpertId">

  export type ExpertDependencyOrderByWithAggregationInput = {
    id?: SortOrder
    dependentExpertId?: SortOrder
    requiredExpertId?: SortOrder
    dependencyType?: SortOrder
    createdAt?: SortOrder
    _count?: ExpertDependencyCountOrderByAggregateInput
    _max?: ExpertDependencyMaxOrderByAggregateInput
    _min?: ExpertDependencyMinOrderByAggregateInput
  }

  export type ExpertDependencyScalarWhereWithAggregatesInput = {
    AND?: ExpertDependencyScalarWhereWithAggregatesInput | ExpertDependencyScalarWhereWithAggregatesInput[]
    OR?: ExpertDependencyScalarWhereWithAggregatesInput[]
    NOT?: ExpertDependencyScalarWhereWithAggregatesInput | ExpertDependencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpertDependency"> | string
    dependentExpertId?: StringWithAggregatesFilter<"ExpertDependency"> | string
    requiredExpertId?: StringWithAggregatesFilter<"ExpertDependency"> | string
    dependencyType?: EnumDependencyTypeWithAggregatesFilter<"ExpertDependency"> | $Enums.DependencyType
    createdAt?: DateTimeWithAggregatesFilter<"ExpertDependency"> | Date | string
  }

  export type DebateWhereInput = {
    AND?: DebateWhereInput | DebateWhereInput[]
    OR?: DebateWhereInput[]
    NOT?: DebateWhereInput | DebateWhereInput[]
    id?: StringFilter<"Debate"> | string
    expertId?: StringFilter<"Debate"> | string
    topic?: StringFilter<"Debate"> | string
    description?: StringNullableFilter<"Debate"> | string | null
    status?: EnumDebateStatusFilter<"Debate"> | $Enums.DebateStatus
    resolutionCriteria?: StringFilter<"Debate"> | string
    createdById?: StringFilter<"Debate"> | string
    createdAt?: DateTimeFilter<"Debate"> | Date | string
    updatedAt?: DateTimeFilter<"Debate"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Debate"> | Date | string | null
    outcome?: JsonNullableFilter<"Debate">
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    arguments?: ArgumentListRelationFilter
  }

  export type DebateOrderByWithRelationInput = {
    id?: SortOrder
    expertId?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolutionCriteria?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
    outcome?: SortOrder
    expert?: ExpertOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    arguments?: ArgumentOrderByRelationAggregateInput
  }

  export type DebateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DebateWhereInput | DebateWhereInput[]
    OR?: DebateWhereInput[]
    NOT?: DebateWhereInput | DebateWhereInput[]
    expertId?: StringFilter<"Debate"> | string
    topic?: StringFilter<"Debate"> | string
    description?: StringNullableFilter<"Debate"> | string | null
    status?: EnumDebateStatusFilter<"Debate"> | $Enums.DebateStatus
    resolutionCriteria?: StringFilter<"Debate"> | string
    createdById?: StringFilter<"Debate"> | string
    createdAt?: DateTimeFilter<"Debate"> | Date | string
    updatedAt?: DateTimeFilter<"Debate"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Debate"> | Date | string | null
    outcome?: JsonNullableFilter<"Debate">
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    arguments?: ArgumentListRelationFilter
  }, "id">

  export type DebateOrderByWithAggregationInput = {
    id?: SortOrder
    expertId?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolutionCriteria?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
    outcome?: SortOrder
    _count?: DebateCountOrderByAggregateInput
    _max?: DebateMaxOrderByAggregateInput
    _min?: DebateMinOrderByAggregateInput
  }

  export type DebateScalarWhereWithAggregatesInput = {
    AND?: DebateScalarWhereWithAggregatesInput | DebateScalarWhereWithAggregatesInput[]
    OR?: DebateScalarWhereWithAggregatesInput[]
    NOT?: DebateScalarWhereWithAggregatesInput | DebateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Debate"> | string
    expertId?: StringWithAggregatesFilter<"Debate"> | string
    topic?: StringWithAggregatesFilter<"Debate"> | string
    description?: StringNullableWithAggregatesFilter<"Debate"> | string | null
    status?: EnumDebateStatusWithAggregatesFilter<"Debate"> | $Enums.DebateStatus
    resolutionCriteria?: StringWithAggregatesFilter<"Debate"> | string
    createdById?: StringWithAggregatesFilter<"Debate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Debate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Debate"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Debate"> | Date | string | null
    outcome?: JsonNullableWithAggregatesFilter<"Debate">
  }

  export type ArgumentWhereInput = {
    AND?: ArgumentWhereInput | ArgumentWhereInput[]
    OR?: ArgumentWhereInput[]
    NOT?: ArgumentWhereInput | ArgumentWhereInput[]
    id?: StringFilter<"Argument"> | string
    debateId?: StringFilter<"Argument"> | string
    parentArgumentId?: StringNullableFilter<"Argument"> | string | null
    type?: EnumArgumentTypeFilter<"Argument"> | $Enums.ArgumentType
    claim?: StringFilter<"Argument"> | string
    reasoning?: StringFilter<"Argument"> | string
    status?: EnumArgumentStatusFilter<"Argument"> | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFilter<"Argument"> | $Enums.ValidationStatus
    validationReason?: StringNullableFilter<"Argument"> | string | null
    authorReputationAtTime?: FloatFilter<"Argument"> | number
    createdById?: StringFilter<"Argument"> | string
    createdAt?: DateTimeFilter<"Argument"> | Date | string
    updatedAt?: DateTimeFilter<"Argument"> | Date | string
    debate?: XOR<DebateRelationFilter, DebateWhereInput>
    parentArgument?: XOR<ArgumentNullableRelationFilter, ArgumentWhereInput> | null
    childArguments?: ArgumentListRelationFilter
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    evidence?: EvidenceListRelationFilter
  }

  export type ArgumentOrderByWithRelationInput = {
    id?: SortOrder
    debateId?: SortOrder
    parentArgumentId?: SortOrder
    type?: SortOrder
    claim?: SortOrder
    reasoning?: SortOrder
    status?: SortOrder
    validationStatus?: SortOrder
    validationReason?: SortOrder
    authorReputationAtTime?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    debate?: DebateOrderByWithRelationInput
    parentArgument?: ArgumentOrderByWithRelationInput
    childArguments?: ArgumentOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
    evidence?: EvidenceOrderByRelationAggregateInput
  }

  export type ArgumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArgumentWhereInput | ArgumentWhereInput[]
    OR?: ArgumentWhereInput[]
    NOT?: ArgumentWhereInput | ArgumentWhereInput[]
    debateId?: StringFilter<"Argument"> | string
    parentArgumentId?: StringNullableFilter<"Argument"> | string | null
    type?: EnumArgumentTypeFilter<"Argument"> | $Enums.ArgumentType
    claim?: StringFilter<"Argument"> | string
    reasoning?: StringFilter<"Argument"> | string
    status?: EnumArgumentStatusFilter<"Argument"> | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFilter<"Argument"> | $Enums.ValidationStatus
    validationReason?: StringNullableFilter<"Argument"> | string | null
    authorReputationAtTime?: FloatFilter<"Argument"> | number
    createdById?: StringFilter<"Argument"> | string
    createdAt?: DateTimeFilter<"Argument"> | Date | string
    updatedAt?: DateTimeFilter<"Argument"> | Date | string
    debate?: XOR<DebateRelationFilter, DebateWhereInput>
    parentArgument?: XOR<ArgumentNullableRelationFilter, ArgumentWhereInput> | null
    childArguments?: ArgumentListRelationFilter
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    evidence?: EvidenceListRelationFilter
  }, "id">

  export type ArgumentOrderByWithAggregationInput = {
    id?: SortOrder
    debateId?: SortOrder
    parentArgumentId?: SortOrder
    type?: SortOrder
    claim?: SortOrder
    reasoning?: SortOrder
    status?: SortOrder
    validationStatus?: SortOrder
    validationReason?: SortOrder
    authorReputationAtTime?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArgumentCountOrderByAggregateInput
    _avg?: ArgumentAvgOrderByAggregateInput
    _max?: ArgumentMaxOrderByAggregateInput
    _min?: ArgumentMinOrderByAggregateInput
    _sum?: ArgumentSumOrderByAggregateInput
  }

  export type ArgumentScalarWhereWithAggregatesInput = {
    AND?: ArgumentScalarWhereWithAggregatesInput | ArgumentScalarWhereWithAggregatesInput[]
    OR?: ArgumentScalarWhereWithAggregatesInput[]
    NOT?: ArgumentScalarWhereWithAggregatesInput | ArgumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Argument"> | string
    debateId?: StringWithAggregatesFilter<"Argument"> | string
    parentArgumentId?: StringNullableWithAggregatesFilter<"Argument"> | string | null
    type?: EnumArgumentTypeWithAggregatesFilter<"Argument"> | $Enums.ArgumentType
    claim?: StringWithAggregatesFilter<"Argument"> | string
    reasoning?: StringWithAggregatesFilter<"Argument"> | string
    status?: EnumArgumentStatusWithAggregatesFilter<"Argument"> | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusWithAggregatesFilter<"Argument"> | $Enums.ValidationStatus
    validationReason?: StringNullableWithAggregatesFilter<"Argument"> | string | null
    authorReputationAtTime?: FloatWithAggregatesFilter<"Argument"> | number
    createdById?: StringWithAggregatesFilter<"Argument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Argument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Argument"> | Date | string
  }

  export type EvidenceWhereInput = {
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    id?: StringFilter<"Evidence"> | string
    argumentId?: StringFilter<"Evidence"> | string
    type?: EnumEvidenceTypeFilter<"Evidence"> | $Enums.EvidenceType
    content?: StringFilter<"Evidence"> | string
    sourceUrl?: StringNullableFilter<"Evidence"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"Evidence"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"Evidence"> | Date | string
    argument?: XOR<ArgumentRelationFilter, ArgumentWhereInput>
  }

  export type EvidenceOrderByWithRelationInput = {
    id?: SortOrder
    argumentId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sourceUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    argument?: ArgumentOrderByWithRelationInput
  }

  export type EvidenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    argumentId?: StringFilter<"Evidence"> | string
    type?: EnumEvidenceTypeFilter<"Evidence"> | $Enums.EvidenceType
    content?: StringFilter<"Evidence"> | string
    sourceUrl?: StringNullableFilter<"Evidence"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"Evidence"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"Evidence"> | Date | string
    argument?: XOR<ArgumentRelationFilter, ArgumentWhereInput>
  }, "id">

  export type EvidenceOrderByWithAggregationInput = {
    id?: SortOrder
    argumentId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sourceUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    _count?: EvidenceCountOrderByAggregateInput
    _max?: EvidenceMaxOrderByAggregateInput
    _min?: EvidenceMinOrderByAggregateInput
  }

  export type EvidenceScalarWhereWithAggregatesInput = {
    AND?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    OR?: EvidenceScalarWhereWithAggregatesInput[]
    NOT?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evidence"> | string
    argumentId?: StringWithAggregatesFilter<"Evidence"> | string
    type?: EnumEvidenceTypeWithAggregatesFilter<"Evidence"> | $Enums.EvidenceType
    content?: StringWithAggregatesFilter<"Evidence"> | string
    sourceUrl?: StringNullableWithAggregatesFilter<"Evidence"> | string | null
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"Evidence"> | $Enums.VerificationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Evidence"> | Date | string
  }

  export type ReputationScoreWhereInput = {
    AND?: ReputationScoreWhereInput | ReputationScoreWhereInput[]
    OR?: ReputationScoreWhereInput[]
    NOT?: ReputationScoreWhereInput | ReputationScoreWhereInput[]
    id?: StringFilter<"ReputationScore"> | string
    userId?: StringFilter<"ReputationScore"> | string
    domain?: StringFilter<"ReputationScore"> | string
    score?: FloatFilter<"ReputationScore"> | number
    rank?: EnumReputationRankFilter<"ReputationScore"> | $Enums.ReputationRank
    evidenceCount?: IntFilter<"ReputationScore"> | number
    accuracyRate?: FloatFilter<"ReputationScore"> | number
    lastActiveAt?: DateTimeFilter<"ReputationScore"> | Date | string
    lastCalculatedAt?: DateTimeFilter<"ReputationScore"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    history?: ReputationEventListRelationFilter
  }

  export type ReputationScoreOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    evidenceCount?: SortOrder
    accuracyRate?: SortOrder
    lastActiveAt?: SortOrder
    lastCalculatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    history?: ReputationEventOrderByRelationAggregateInput
  }

  export type ReputationScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_domain?: ReputationScoreUserIdDomainCompoundUniqueInput
    AND?: ReputationScoreWhereInput | ReputationScoreWhereInput[]
    OR?: ReputationScoreWhereInput[]
    NOT?: ReputationScoreWhereInput | ReputationScoreWhereInput[]
    userId?: StringFilter<"ReputationScore"> | string
    domain?: StringFilter<"ReputationScore"> | string
    score?: FloatFilter<"ReputationScore"> | number
    rank?: EnumReputationRankFilter<"ReputationScore"> | $Enums.ReputationRank
    evidenceCount?: IntFilter<"ReputationScore"> | number
    accuracyRate?: FloatFilter<"ReputationScore"> | number
    lastActiveAt?: DateTimeFilter<"ReputationScore"> | Date | string
    lastCalculatedAt?: DateTimeFilter<"ReputationScore"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    history?: ReputationEventListRelationFilter
  }, "id" | "userId_domain">

  export type ReputationScoreOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    evidenceCount?: SortOrder
    accuracyRate?: SortOrder
    lastActiveAt?: SortOrder
    lastCalculatedAt?: SortOrder
    _count?: ReputationScoreCountOrderByAggregateInput
    _avg?: ReputationScoreAvgOrderByAggregateInput
    _max?: ReputationScoreMaxOrderByAggregateInput
    _min?: ReputationScoreMinOrderByAggregateInput
    _sum?: ReputationScoreSumOrderByAggregateInput
  }

  export type ReputationScoreScalarWhereWithAggregatesInput = {
    AND?: ReputationScoreScalarWhereWithAggregatesInput | ReputationScoreScalarWhereWithAggregatesInput[]
    OR?: ReputationScoreScalarWhereWithAggregatesInput[]
    NOT?: ReputationScoreScalarWhereWithAggregatesInput | ReputationScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReputationScore"> | string
    userId?: StringWithAggregatesFilter<"ReputationScore"> | string
    domain?: StringWithAggregatesFilter<"ReputationScore"> | string
    score?: FloatWithAggregatesFilter<"ReputationScore"> | number
    rank?: EnumReputationRankWithAggregatesFilter<"ReputationScore"> | $Enums.ReputationRank
    evidenceCount?: IntWithAggregatesFilter<"ReputationScore"> | number
    accuracyRate?: FloatWithAggregatesFilter<"ReputationScore"> | number
    lastActiveAt?: DateTimeWithAggregatesFilter<"ReputationScore"> | Date | string
    lastCalculatedAt?: DateTimeWithAggregatesFilter<"ReputationScore"> | Date | string
  }

  export type ReputationEventWhereInput = {
    AND?: ReputationEventWhereInput | ReputationEventWhereInput[]
    OR?: ReputationEventWhereInput[]
    NOT?: ReputationEventWhereInput | ReputationEventWhereInput[]
    id?: StringFilter<"ReputationEvent"> | string
    reputationScoreId?: StringFilter<"ReputationEvent"> | string
    type?: EnumReputationEventTypeFilter<"ReputationEvent"> | $Enums.ReputationEventType
    delta?: FloatFilter<"ReputationEvent"> | number
    reason?: StringFilter<"ReputationEvent"> | string
    relatedEntityType?: StringNullableFilter<"ReputationEvent"> | string | null
    relatedEntityId?: StringNullableFilter<"ReputationEvent"> | string | null
    createdAt?: DateTimeFilter<"ReputationEvent"> | Date | string
    reputationScore?: XOR<ReputationScoreRelationFilter, ReputationScoreWhereInput>
  }

  export type ReputationEventOrderByWithRelationInput = {
    id?: SortOrder
    reputationScoreId?: SortOrder
    type?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    relatedEntityType?: SortOrder
    relatedEntityId?: SortOrder
    createdAt?: SortOrder
    reputationScore?: ReputationScoreOrderByWithRelationInput
  }

  export type ReputationEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReputationEventWhereInput | ReputationEventWhereInput[]
    OR?: ReputationEventWhereInput[]
    NOT?: ReputationEventWhereInput | ReputationEventWhereInput[]
    reputationScoreId?: StringFilter<"ReputationEvent"> | string
    type?: EnumReputationEventTypeFilter<"ReputationEvent"> | $Enums.ReputationEventType
    delta?: FloatFilter<"ReputationEvent"> | number
    reason?: StringFilter<"ReputationEvent"> | string
    relatedEntityType?: StringNullableFilter<"ReputationEvent"> | string | null
    relatedEntityId?: StringNullableFilter<"ReputationEvent"> | string | null
    createdAt?: DateTimeFilter<"ReputationEvent"> | Date | string
    reputationScore?: XOR<ReputationScoreRelationFilter, ReputationScoreWhereInput>
  }, "id">

  export type ReputationEventOrderByWithAggregationInput = {
    id?: SortOrder
    reputationScoreId?: SortOrder
    type?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    relatedEntityType?: SortOrder
    relatedEntityId?: SortOrder
    createdAt?: SortOrder
    _count?: ReputationEventCountOrderByAggregateInput
    _avg?: ReputationEventAvgOrderByAggregateInput
    _max?: ReputationEventMaxOrderByAggregateInput
    _min?: ReputationEventMinOrderByAggregateInput
    _sum?: ReputationEventSumOrderByAggregateInput
  }

  export type ReputationEventScalarWhereWithAggregatesInput = {
    AND?: ReputationEventScalarWhereWithAggregatesInput | ReputationEventScalarWhereWithAggregatesInput[]
    OR?: ReputationEventScalarWhereWithAggregatesInput[]
    NOT?: ReputationEventScalarWhereWithAggregatesInput | ReputationEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReputationEvent"> | string
    reputationScoreId?: StringWithAggregatesFilter<"ReputationEvent"> | string
    type?: EnumReputationEventTypeWithAggregatesFilter<"ReputationEvent"> | $Enums.ReputationEventType
    delta?: FloatWithAggregatesFilter<"ReputationEvent"> | number
    reason?: StringWithAggregatesFilter<"ReputationEvent"> | string
    relatedEntityType?: StringNullableWithAggregatesFilter<"ReputationEvent"> | string | null
    relatedEntityId?: StringNullableWithAggregatesFilter<"ReputationEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReputationEvent"> | Date | string
  }

  export type AuditEventWhereInput = {
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    timestamp?: DateTimeFilter<"AuditEvent"> | Date | string
    actorId?: StringNullableFilter<"AuditEvent"> | string | null
    actorType?: EnumActorTypeFilter<"AuditEvent"> | $Enums.ActorType
    action?: StringFilter<"AuditEvent"> | string
    resourceType?: StringFilter<"AuditEvent"> | string
    resourceId?: StringNullableFilter<"AuditEvent"> | string | null
    previousState?: JsonNullableFilter<"AuditEvent">
    newState?: JsonNullableFilter<"AuditEvent">
    metadata?: JsonNullableFilter<"AuditEvent">
    ipAddressHash?: StringNullableFilter<"AuditEvent"> | string | null
    retentionClass?: EnumRetentionClassFilter<"AuditEvent"> | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFilter<"AuditEvent"> | $Enums.SensitivityLevel
    actor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AuditEventOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    previousState?: SortOrder
    newState?: SortOrder
    metadata?: SortOrder
    ipAddressHash?: SortOrder
    retentionClass?: SortOrder
    sensitivityLevel?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    timestamp?: DateTimeFilter<"AuditEvent"> | Date | string
    actorId?: StringNullableFilter<"AuditEvent"> | string | null
    actorType?: EnumActorTypeFilter<"AuditEvent"> | $Enums.ActorType
    action?: StringFilter<"AuditEvent"> | string
    resourceType?: StringFilter<"AuditEvent"> | string
    resourceId?: StringNullableFilter<"AuditEvent"> | string | null
    previousState?: JsonNullableFilter<"AuditEvent">
    newState?: JsonNullableFilter<"AuditEvent">
    metadata?: JsonNullableFilter<"AuditEvent">
    ipAddressHash?: StringNullableFilter<"AuditEvent"> | string | null
    retentionClass?: EnumRetentionClassFilter<"AuditEvent"> | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFilter<"AuditEvent"> | $Enums.SensitivityLevel
    actor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    previousState?: SortOrder
    newState?: SortOrder
    metadata?: SortOrder
    ipAddressHash?: SortOrder
    retentionClass?: SortOrder
    sensitivityLevel?: SortOrder
    _count?: AuditEventCountOrderByAggregateInput
    _max?: AuditEventMaxOrderByAggregateInput
    _min?: AuditEventMinOrderByAggregateInput
  }

  export type AuditEventScalarWhereWithAggregatesInput = {
    AND?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    OR?: AuditEventScalarWhereWithAggregatesInput[]
    NOT?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AuditEvent"> | Date | string
    actorId?: StringNullableWithAggregatesFilter<"AuditEvent"> | string | null
    actorType?: EnumActorTypeWithAggregatesFilter<"AuditEvent"> | $Enums.ActorType
    action?: StringWithAggregatesFilter<"AuditEvent"> | string
    resourceType?: StringWithAggregatesFilter<"AuditEvent"> | string
    resourceId?: StringNullableWithAggregatesFilter<"AuditEvent"> | string | null
    previousState?: JsonNullableWithAggregatesFilter<"AuditEvent">
    newState?: JsonNullableWithAggregatesFilter<"AuditEvent">
    metadata?: JsonNullableWithAggregatesFilter<"AuditEvent">
    ipAddressHash?: StringNullableWithAggregatesFilter<"AuditEvent"> | string | null
    retentionClass?: EnumRetentionClassWithAggregatesFilter<"AuditEvent"> | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelWithAggregatesFilter<"AuditEvent"> | $Enums.SensitivityLevel
  }

  export type SystemSettingWhereInput = {
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    id?: StringFilter<"SystemSetting"> | string
    key?: StringFilter<"SystemSetting"> | string
    value?: JsonFilter<"SystemSetting">
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
    updatedBy?: StringNullableFilter<"SystemSetting"> | string | null
  }

  export type SystemSettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type SystemSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    value?: JsonFilter<"SystemSetting">
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
    updatedBy?: StringNullableFilter<"SystemSetting"> | string | null
  }, "id" | "key">

  export type SystemSettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: SystemSettingCountOrderByAggregateInput
    _max?: SystemSettingMaxOrderByAggregateInput
    _min?: SystemSettingMinOrderByAggregateInput
  }

  export type SystemSettingScalarWhereWithAggregatesInput = {
    AND?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    OR?: SystemSettingScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSetting"> | string
    key?: StringWithAggregatesFilter<"SystemSetting"> | string
    value?: JsonWithAggregatesFilter<"SystemSetting">
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSetting"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"SystemSetting"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionCreateNestedManyWithoutCreatedByInput
    debates?: DebateCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertUncheckedCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionUncheckedCreateNestedManyWithoutCreatedByInput
    debates?: DebateUncheckedCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreUncheckedCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUncheckedUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUncheckedUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUncheckedUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUncheckedUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpertCreateInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutExpertsInput
    versions?: ExpertVersionCreateNestedManyWithoutExpertInput
    debates?: DebateCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyCreateNestedManyWithoutDependentExpertInput
    dependents?: ExpertDependencyCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertUncheckedCreateInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ExpertVersionUncheckedCreateNestedManyWithoutExpertInput
    debates?: DebateUncheckedCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyUncheckedCreateNestedManyWithoutDependentExpertInput
    dependents?: ExpertDependencyUncheckedCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutExpertsNestedInput
    versions?: ExpertVersionUpdateManyWithoutExpertNestedInput
    debates?: DebateUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUpdateManyWithoutDependentExpertNestedInput
    dependents?: ExpertDependencyUpdateManyWithoutRequiredExpertNestedInput
  }

  export type ExpertUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ExpertVersionUncheckedUpdateManyWithoutExpertNestedInput
    debates?: DebateUncheckedUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUncheckedUpdateManyWithoutDependentExpertNestedInput
    dependents?: ExpertDependencyUncheckedUpdateManyWithoutRequiredExpertNestedInput
  }

  export type ExpertCreateManyInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpertUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertVersionCreateInput = {
    id?: string
    versionNumber: number
    scope: InputJsonValue
    permissions: InputJsonValue
    logicDefinition: InputJsonValue
    changeReason: string
    createdAt?: Date | string
    accuracyScore?: number
    usageCount?: number
    lastInvokedAt?: Date | string | null
    expert: ExpertCreateNestedOneWithoutVersionsInput
    createdBy: UserCreateNestedOneWithoutExpertVersionsInput
  }

  export type ExpertVersionUncheckedCreateInput = {
    id?: string
    expertId: string
    versionNumber: number
    scope: InputJsonValue
    permissions: InputJsonValue
    logicDefinition: InputJsonValue
    changeReason: string
    createdById: string
    createdAt?: Date | string
    accuracyScore?: number
    usageCount?: number
    lastInvokedAt?: Date | string | null
  }

  export type ExpertVersionUpdateInput = {
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expert?: ExpertUpdateOneRequiredWithoutVersionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutExpertVersionsNestedInput
  }

  export type ExpertVersionUncheckedUpdateInput = {
    expertId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpertVersionCreateManyInput = {
    id?: string
    expertId: string
    versionNumber: number
    scope: InputJsonValue
    permissions: InputJsonValue
    logicDefinition: InputJsonValue
    changeReason: string
    createdById: string
    createdAt?: Date | string
    accuracyScore?: number
    usageCount?: number
    lastInvokedAt?: Date | string | null
  }

  export type ExpertVersionUpdateManyMutationInput = {
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpertVersionUncheckedUpdateManyInput = {
    expertId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpertDependencyCreateInput = {
    id?: string
    dependencyType?: $Enums.DependencyType
    createdAt?: Date | string
    dependentExpert: ExpertCreateNestedOneWithoutDependenciesInput
    requiredExpert: ExpertCreateNestedOneWithoutDependentsInput
  }

  export type ExpertDependencyUncheckedCreateInput = {
    id?: string
    dependentExpertId: string
    requiredExpertId: string
    dependencyType?: $Enums.DependencyType
    createdAt?: Date | string
  }

  export type ExpertDependencyUpdateInput = {
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependentExpert?: ExpertUpdateOneRequiredWithoutDependenciesNestedInput
    requiredExpert?: ExpertUpdateOneRequiredWithoutDependentsNestedInput
  }

  export type ExpertDependencyUncheckedUpdateInput = {
    dependentExpertId?: StringFieldUpdateOperationsInput | string
    requiredExpertId?: StringFieldUpdateOperationsInput | string
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertDependencyCreateManyInput = {
    id?: string
    dependentExpertId: string
    requiredExpertId: string
    dependencyType?: $Enums.DependencyType
    createdAt?: Date | string
  }

  export type ExpertDependencyUpdateManyMutationInput = {
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertDependencyUncheckedUpdateManyInput = {
    dependentExpertId?: StringFieldUpdateOperationsInput | string
    requiredExpertId?: StringFieldUpdateOperationsInput | string
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebateCreateInput = {
    id?: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
    expert: ExpertCreateNestedOneWithoutDebatesInput
    createdBy: UserCreateNestedOneWithoutDebatesInput
    arguments?: ArgumentCreateNestedManyWithoutDebateInput
  }

  export type DebateUncheckedCreateInput = {
    id?: string
    expertId: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
    arguments?: ArgumentUncheckedCreateNestedManyWithoutDebateInput
  }

  export type DebateUpdateInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
    expert?: ExpertUpdateOneRequiredWithoutDebatesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDebatesNestedInput
    arguments?: ArgumentUpdateManyWithoutDebateNestedInput
  }

  export type DebateUncheckedUpdateInput = {
    expertId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
    arguments?: ArgumentUncheckedUpdateManyWithoutDebateNestedInput
  }

  export type DebateCreateManyInput = {
    id?: string
    expertId: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
  }

  export type DebateUpdateManyMutationInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
  }

  export type DebateUncheckedUpdateManyInput = {
    expertId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
  }

  export type ArgumentCreateInput = {
    id?: string
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    debate: DebateCreateNestedOneWithoutArgumentsInput
    parentArgument?: ArgumentCreateNestedOneWithoutChildArgumentsInput
    childArguments?: ArgumentCreateNestedManyWithoutParentArgumentInput
    createdBy: UserCreateNestedOneWithoutArgumentsInput
    evidence?: EvidenceCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentUncheckedCreateInput = {
    id?: string
    debateId: string
    parentArgumentId?: string | null
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    childArguments?: ArgumentUncheckedCreateNestedManyWithoutParentArgumentInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentUpdateInput = {
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debate?: DebateUpdateOneRequiredWithoutArgumentsNestedInput
    parentArgument?: ArgumentUpdateOneWithoutChildArgumentsNestedInput
    childArguments?: ArgumentUpdateManyWithoutParentArgumentNestedInput
    createdBy?: UserUpdateOneRequiredWithoutArgumentsNestedInput
    evidence?: EvidenceUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentUncheckedUpdateInput = {
    debateId?: StringFieldUpdateOperationsInput | string
    parentArgumentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childArguments?: ArgumentUncheckedUpdateManyWithoutParentArgumentNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentCreateManyInput = {
    id?: string
    debateId: string
    parentArgumentId?: string | null
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArgumentUpdateManyMutationInput = {
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArgumentUncheckedUpdateManyInput = {
    debateId?: StringFieldUpdateOperationsInput | string
    parentArgumentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceCreateInput = {
    id?: string
    type: $Enums.EvidenceType
    content: string
    sourceUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    argument: ArgumentCreateNestedOneWithoutEvidenceInput
  }

  export type EvidenceUncheckedCreateInput = {
    id?: string
    argumentId: string
    type: $Enums.EvidenceType
    content: string
    sourceUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
  }

  export type EvidenceUpdateInput = {
    type?: EnumEvidenceTypeFieldUpdateOperationsInput | $Enums.EvidenceType
    content?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    argument?: ArgumentUpdateOneRequiredWithoutEvidenceNestedInput
  }

  export type EvidenceUncheckedUpdateInput = {
    argumentId?: StringFieldUpdateOperationsInput | string
    type?: EnumEvidenceTypeFieldUpdateOperationsInput | $Enums.EvidenceType
    content?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceCreateManyInput = {
    id?: string
    argumentId: string
    type: $Enums.EvidenceType
    content: string
    sourceUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
  }

  export type EvidenceUpdateManyMutationInput = {
    type?: EnumEvidenceTypeFieldUpdateOperationsInput | $Enums.EvidenceType
    content?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyInput = {
    argumentId?: StringFieldUpdateOperationsInput | string
    type?: EnumEvidenceTypeFieldUpdateOperationsInput | $Enums.EvidenceType
    content?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationScoreCreateInput = {
    id?: string
    domain: string
    score?: number
    rank?: $Enums.ReputationRank
    evidenceCount?: number
    accuracyRate?: number
    lastActiveAt?: Date | string
    lastCalculatedAt?: Date | string
    user: UserCreateNestedOneWithoutReputationScoresInput
    history?: ReputationEventCreateNestedManyWithoutReputationScoreInput
  }

  export type ReputationScoreUncheckedCreateInput = {
    id?: string
    userId: string
    domain: string
    score?: number
    rank?: $Enums.ReputationRank
    evidenceCount?: number
    accuracyRate?: number
    lastActiveAt?: Date | string
    lastCalculatedAt?: Date | string
    history?: ReputationEventUncheckedCreateNestedManyWithoutReputationScoreInput
  }

  export type ReputationScoreUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    rank?: EnumReputationRankFieldUpdateOperationsInput | $Enums.ReputationRank
    evidenceCount?: IntFieldUpdateOperationsInput | number
    accuracyRate?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReputationScoresNestedInput
    history?: ReputationEventUpdateManyWithoutReputationScoreNestedInput
  }

  export type ReputationScoreUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    rank?: EnumReputationRankFieldUpdateOperationsInput | $Enums.ReputationRank
    evidenceCount?: IntFieldUpdateOperationsInput | number
    accuracyRate?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ReputationEventUncheckedUpdateManyWithoutReputationScoreNestedInput
  }

  export type ReputationScoreCreateManyInput = {
    id?: string
    userId: string
    domain: string
    score?: number
    rank?: $Enums.ReputationRank
    evidenceCount?: number
    accuracyRate?: number
    lastActiveAt?: Date | string
    lastCalculatedAt?: Date | string
  }

  export type ReputationScoreUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    rank?: EnumReputationRankFieldUpdateOperationsInput | $Enums.ReputationRank
    evidenceCount?: IntFieldUpdateOperationsInput | number
    accuracyRate?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationScoreUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    rank?: EnumReputationRankFieldUpdateOperationsInput | $Enums.ReputationRank
    evidenceCount?: IntFieldUpdateOperationsInput | number
    accuracyRate?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationEventCreateInput = {
    id?: string
    type: $Enums.ReputationEventType
    delta: number
    reason: string
    relatedEntityType?: string | null
    relatedEntityId?: string | null
    createdAt?: Date | string
    reputationScore: ReputationScoreCreateNestedOneWithoutHistoryInput
  }

  export type ReputationEventUncheckedCreateInput = {
    id?: string
    reputationScoreId: string
    type: $Enums.ReputationEventType
    delta: number
    reason: string
    relatedEntityType?: string | null
    relatedEntityId?: string | null
    createdAt?: Date | string
  }

  export type ReputationEventUpdateInput = {
    type?: EnumReputationEventTypeFieldUpdateOperationsInput | $Enums.ReputationEventType
    delta?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reputationScore?: ReputationScoreUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type ReputationEventUncheckedUpdateInput = {
    reputationScoreId?: StringFieldUpdateOperationsInput | string
    type?: EnumReputationEventTypeFieldUpdateOperationsInput | $Enums.ReputationEventType
    delta?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationEventCreateManyInput = {
    id?: string
    reputationScoreId: string
    type: $Enums.ReputationEventType
    delta: number
    reason: string
    relatedEntityType?: string | null
    relatedEntityId?: string | null
    createdAt?: Date | string
  }

  export type ReputationEventUpdateManyMutationInput = {
    type?: EnumReputationEventTypeFieldUpdateOperationsInput | $Enums.ReputationEventType
    delta?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationEventUncheckedUpdateManyInput = {
    reputationScoreId?: StringFieldUpdateOperationsInput | string
    type?: EnumReputationEventTypeFieldUpdateOperationsInput | $Enums.ReputationEventType
    delta?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateInput = {
    id?: string
    timestamp?: Date | string
    actorType: $Enums.ActorType
    action: string
    resourceType: string
    resourceId?: string | null
    previousState?: InputJsonValue | null
    newState?: InputJsonValue | null
    metadata?: InputJsonValue | null
    ipAddressHash?: string | null
    retentionClass?: $Enums.RetentionClass
    sensitivityLevel?: $Enums.SensitivityLevel
    actor?: UserCreateNestedOneWithoutAuditEventsInput
  }

  export type AuditEventUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    actorId?: string | null
    actorType: $Enums.ActorType
    action: string
    resourceType: string
    resourceId?: string | null
    previousState?: InputJsonValue | null
    newState?: InputJsonValue | null
    metadata?: InputJsonValue | null
    ipAddressHash?: string | null
    retentionClass?: $Enums.RetentionClass
    sensitivityLevel?: $Enums.SensitivityLevel
  }

  export type AuditEventUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    previousState?: InputJsonValue | InputJsonValue | null
    newState?: InputJsonValue | InputJsonValue | null
    metadata?: InputJsonValue | InputJsonValue | null
    ipAddressHash?: NullableStringFieldUpdateOperationsInput | string | null
    retentionClass?: EnumRetentionClassFieldUpdateOperationsInput | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFieldUpdateOperationsInput | $Enums.SensitivityLevel
    actor?: UserUpdateOneWithoutAuditEventsNestedInput
  }

  export type AuditEventUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    previousState?: InputJsonValue | InputJsonValue | null
    newState?: InputJsonValue | InputJsonValue | null
    metadata?: InputJsonValue | InputJsonValue | null
    ipAddressHash?: NullableStringFieldUpdateOperationsInput | string | null
    retentionClass?: EnumRetentionClassFieldUpdateOperationsInput | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFieldUpdateOperationsInput | $Enums.SensitivityLevel
  }

  export type AuditEventCreateManyInput = {
    id?: string
    timestamp?: Date | string
    actorId?: string | null
    actorType: $Enums.ActorType
    action: string
    resourceType: string
    resourceId?: string | null
    previousState?: InputJsonValue | null
    newState?: InputJsonValue | null
    metadata?: InputJsonValue | null
    ipAddressHash?: string | null
    retentionClass?: $Enums.RetentionClass
    sensitivityLevel?: $Enums.SensitivityLevel
  }

  export type AuditEventUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    previousState?: InputJsonValue | InputJsonValue | null
    newState?: InputJsonValue | InputJsonValue | null
    metadata?: InputJsonValue | InputJsonValue | null
    ipAddressHash?: NullableStringFieldUpdateOperationsInput | string | null
    retentionClass?: EnumRetentionClassFieldUpdateOperationsInput | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFieldUpdateOperationsInput | $Enums.SensitivityLevel
  }

  export type AuditEventUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    previousState?: InputJsonValue | InputJsonValue | null
    newState?: InputJsonValue | InputJsonValue | null
    metadata?: InputJsonValue | InputJsonValue | null
    ipAddressHash?: NullableStringFieldUpdateOperationsInput | string | null
    retentionClass?: EnumRetentionClassFieldUpdateOperationsInput | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFieldUpdateOperationsInput | $Enums.SensitivityLevel
  }

  export type SystemSettingCreateInput = {
    id?: string
    key: string
    value: InputJsonValue
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type SystemSettingUncheckedCreateInput = {
    id?: string
    key: string
    value: InputJsonValue
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type SystemSettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: InputJsonValue | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemSettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: InputJsonValue | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemSettingCreateManyInput = {
    id?: string
    key: string
    value: InputJsonValue
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type SystemSettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: InputJsonValue | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemSettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: InputJsonValue | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type ExpertListRelationFilter = {
    every?: ExpertWhereInput
    some?: ExpertWhereInput
    none?: ExpertWhereInput
  }

  export type ExpertVersionListRelationFilter = {
    every?: ExpertVersionWhereInput
    some?: ExpertVersionWhereInput
    none?: ExpertVersionWhereInput
  }

  export type DebateListRelationFilter = {
    every?: DebateWhereInput
    some?: DebateWhereInput
    none?: DebateWhereInput
  }

  export type ArgumentListRelationFilter = {
    every?: ArgumentWhereInput
    some?: ArgumentWhereInput
    none?: ArgumentWhereInput
  }

  export type ReputationScoreListRelationFilter = {
    every?: ReputationScoreWhereInput
    some?: ReputationScoreWhereInput
    none?: ReputationScoreWhereInput
  }

  export type AuditEventListRelationFilter = {
    every?: AuditEventWhereInput
    some?: AuditEventWhereInput
    none?: AuditEventWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ExpertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpertVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArgumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReputationScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type EnumExpertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpertStatus | EnumExpertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpertStatus[] | ListEnumExpertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpertStatus[] | ListEnumExpertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpertStatusFilter<$PrismaModel> | $Enums.ExpertStatus
  }

  export type ExpertDependencyListRelationFilter = {
    every?: ExpertDependencyWhereInput
    some?: ExpertDependencyWhereInput
    none?: ExpertDependencyWhereInput
  }

  export type ExpertDependencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpertCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    currentVersionId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpertMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    currentVersionId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpertMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    currentVersionId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumExpertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpertStatus | EnumExpertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpertStatus[] | ListEnumExpertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpertStatus[] | ListEnumExpertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpertStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExpertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpertStatusFilter<$PrismaModel>
    _max?: NestedEnumExpertStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExpertRelationFilter = {
    is?: ExpertWhereInput
    isNot?: ExpertWhereInput
  }

  export type ExpertVersionExpertIdVersionNumberCompoundUniqueInput = {
    expertId: string
    versionNumber: number
  }

  export type ExpertVersionCountOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
    versionNumber?: SortOrder
    scope?: SortOrder
    permissions?: SortOrder
    logicDefinition?: SortOrder
    changeReason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    accuracyScore?: SortOrder
    usageCount?: SortOrder
    lastInvokedAt?: SortOrder
  }

  export type ExpertVersionAvgOrderByAggregateInput = {
    versionNumber?: SortOrder
    accuracyScore?: SortOrder
    usageCount?: SortOrder
  }

  export type ExpertVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
    versionNumber?: SortOrder
    changeReason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    accuracyScore?: SortOrder
    usageCount?: SortOrder
    lastInvokedAt?: SortOrder
  }

  export type ExpertVersionMinOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
    versionNumber?: SortOrder
    changeReason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    accuracyScore?: SortOrder
    usageCount?: SortOrder
    lastInvokedAt?: SortOrder
  }

  export type ExpertVersionSumOrderByAggregateInput = {
    versionNumber?: SortOrder
    accuracyScore?: SortOrder
    usageCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDependencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DependencyType | EnumDependencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDependencyTypeFilter<$PrismaModel> | $Enums.DependencyType
  }

  export type ExpertDependencyDependentExpertIdRequiredExpertIdCompoundUniqueInput = {
    dependentExpertId: string
    requiredExpertId: string
  }

  export type ExpertDependencyCountOrderByAggregateInput = {
    id?: SortOrder
    dependentExpertId?: SortOrder
    requiredExpertId?: SortOrder
    dependencyType?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpertDependencyMaxOrderByAggregateInput = {
    id?: SortOrder
    dependentExpertId?: SortOrder
    requiredExpertId?: SortOrder
    dependencyType?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpertDependencyMinOrderByAggregateInput = {
    id?: SortOrder
    dependentExpertId?: SortOrder
    requiredExpertId?: SortOrder
    dependencyType?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDependencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DependencyType | EnumDependencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDependencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.DependencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDependencyTypeFilter<$PrismaModel>
    _max?: NestedEnumDependencyTypeFilter<$PrismaModel>
  }

  export type EnumDebateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DebateStatus | EnumDebateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebateStatus[] | ListEnumDebateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebateStatus[] | ListEnumDebateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDebateStatusFilter<$PrismaModel> | $Enums.DebateStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type DebateCountOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolutionCriteria?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
    outcome?: SortOrder
  }

  export type DebateMaxOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolutionCriteria?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type DebateMinOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolutionCriteria?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EnumDebateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebateStatus | EnumDebateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebateStatus[] | ListEnumDebateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebateStatus[] | ListEnumDebateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDebateStatusWithAggregatesFilter<$PrismaModel> | $Enums.DebateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebateStatusFilter<$PrismaModel>
    _max?: NestedEnumDebateStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumArgumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArgumentType | EnumArgumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArgumentType[] | ListEnumArgumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArgumentType[] | ListEnumArgumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArgumentTypeFilter<$PrismaModel> | $Enums.ArgumentType
  }

  export type EnumArgumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArgumentStatus | EnumArgumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArgumentStatus[] | ListEnumArgumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArgumentStatus[] | ListEnumArgumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArgumentStatusFilter<$PrismaModel> | $Enums.ArgumentStatus
  }

  export type EnumValidationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ValidationStatus | EnumValidationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumValidationStatusFilter<$PrismaModel> | $Enums.ValidationStatus
  }

  export type DebateRelationFilter = {
    is?: DebateWhereInput
    isNot?: DebateWhereInput
  }

  export type ArgumentNullableRelationFilter = {
    is?: ArgumentWhereInput | null
    isNot?: ArgumentWhereInput | null
  }

  export type EvidenceListRelationFilter = {
    every?: EvidenceWhereInput
    some?: EvidenceWhereInput
    none?: EvidenceWhereInput
  }

  export type EvidenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArgumentCountOrderByAggregateInput = {
    id?: SortOrder
    debateId?: SortOrder
    parentArgumentId?: SortOrder
    type?: SortOrder
    claim?: SortOrder
    reasoning?: SortOrder
    status?: SortOrder
    validationStatus?: SortOrder
    validationReason?: SortOrder
    authorReputationAtTime?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArgumentAvgOrderByAggregateInput = {
    authorReputationAtTime?: SortOrder
  }

  export type ArgumentMaxOrderByAggregateInput = {
    id?: SortOrder
    debateId?: SortOrder
    parentArgumentId?: SortOrder
    type?: SortOrder
    claim?: SortOrder
    reasoning?: SortOrder
    status?: SortOrder
    validationStatus?: SortOrder
    validationReason?: SortOrder
    authorReputationAtTime?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArgumentMinOrderByAggregateInput = {
    id?: SortOrder
    debateId?: SortOrder
    parentArgumentId?: SortOrder
    type?: SortOrder
    claim?: SortOrder
    reasoning?: SortOrder
    status?: SortOrder
    validationStatus?: SortOrder
    validationReason?: SortOrder
    authorReputationAtTime?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArgumentSumOrderByAggregateInput = {
    authorReputationAtTime?: SortOrder
  }

  export type EnumArgumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArgumentType | EnumArgumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArgumentType[] | ListEnumArgumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArgumentType[] | ListEnumArgumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArgumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArgumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArgumentTypeFilter<$PrismaModel>
    _max?: NestedEnumArgumentTypeFilter<$PrismaModel>
  }

  export type EnumArgumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArgumentStatus | EnumArgumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArgumentStatus[] | ListEnumArgumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArgumentStatus[] | ListEnumArgumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArgumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArgumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArgumentStatusFilter<$PrismaModel>
    _max?: NestedEnumArgumentStatusFilter<$PrismaModel>
  }

  export type EnumValidationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ValidationStatus | EnumValidationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumValidationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ValidationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumValidationStatusFilter<$PrismaModel>
    _max?: NestedEnumValidationStatusFilter<$PrismaModel>
  }

  export type EnumEvidenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EvidenceType | EnumEvidenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EvidenceType[] | ListEnumEvidenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvidenceType[] | ListEnumEvidenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEvidenceTypeFilter<$PrismaModel> | $Enums.EvidenceType
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type ArgumentRelationFilter = {
    is?: ArgumentWhereInput
    isNot?: ArgumentWhereInput
  }

  export type EvidenceCountOrderByAggregateInput = {
    id?: SortOrder
    argumentId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sourceUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceMaxOrderByAggregateInput = {
    id?: SortOrder
    argumentId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sourceUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceMinOrderByAggregateInput = {
    id?: SortOrder
    argumentId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sourceUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEvidenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvidenceType | EnumEvidenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EvidenceType[] | ListEnumEvidenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvidenceType[] | ListEnumEvidenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEvidenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.EvidenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvidenceTypeFilter<$PrismaModel>
    _max?: NestedEnumEvidenceTypeFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type EnumReputationRankFilter<$PrismaModel = never> = {
    equals?: $Enums.ReputationRank | EnumReputationRankFieldRefInput<$PrismaModel>
    in?: $Enums.ReputationRank[] | ListEnumReputationRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReputationRank[] | ListEnumReputationRankFieldRefInput<$PrismaModel>
    not?: NestedEnumReputationRankFilter<$PrismaModel> | $Enums.ReputationRank
  }

  export type ReputationEventListRelationFilter = {
    every?: ReputationEventWhereInput
    some?: ReputationEventWhereInput
    none?: ReputationEventWhereInput
  }

  export type ReputationEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReputationScoreUserIdDomainCompoundUniqueInput = {
    userId: string
    domain: string
  }

  export type ReputationScoreCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    evidenceCount?: SortOrder
    accuracyRate?: SortOrder
    lastActiveAt?: SortOrder
    lastCalculatedAt?: SortOrder
  }

  export type ReputationScoreAvgOrderByAggregateInput = {
    score?: SortOrder
    evidenceCount?: SortOrder
    accuracyRate?: SortOrder
  }

  export type ReputationScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    evidenceCount?: SortOrder
    accuracyRate?: SortOrder
    lastActiveAt?: SortOrder
    lastCalculatedAt?: SortOrder
  }

  export type ReputationScoreMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    evidenceCount?: SortOrder
    accuracyRate?: SortOrder
    lastActiveAt?: SortOrder
    lastCalculatedAt?: SortOrder
  }

  export type ReputationScoreSumOrderByAggregateInput = {
    score?: SortOrder
    evidenceCount?: SortOrder
    accuracyRate?: SortOrder
  }

  export type EnumReputationRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReputationRank | EnumReputationRankFieldRefInput<$PrismaModel>
    in?: $Enums.ReputationRank[] | ListEnumReputationRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReputationRank[] | ListEnumReputationRankFieldRefInput<$PrismaModel>
    not?: NestedEnumReputationRankWithAggregatesFilter<$PrismaModel> | $Enums.ReputationRank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReputationRankFilter<$PrismaModel>
    _max?: NestedEnumReputationRankFilter<$PrismaModel>
  }

  export type EnumReputationEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReputationEventType | EnumReputationEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReputationEventType[] | ListEnumReputationEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReputationEventType[] | ListEnumReputationEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReputationEventTypeFilter<$PrismaModel> | $Enums.ReputationEventType
  }

  export type ReputationScoreRelationFilter = {
    is?: ReputationScoreWhereInput
    isNot?: ReputationScoreWhereInput
  }

  export type ReputationEventCountOrderByAggregateInput = {
    id?: SortOrder
    reputationScoreId?: SortOrder
    type?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    relatedEntityType?: SortOrder
    relatedEntityId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReputationEventAvgOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type ReputationEventMaxOrderByAggregateInput = {
    id?: SortOrder
    reputationScoreId?: SortOrder
    type?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    relatedEntityType?: SortOrder
    relatedEntityId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReputationEventMinOrderByAggregateInput = {
    id?: SortOrder
    reputationScoreId?: SortOrder
    type?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    relatedEntityType?: SortOrder
    relatedEntityId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReputationEventSumOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type EnumReputationEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReputationEventType | EnumReputationEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReputationEventType[] | ListEnumReputationEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReputationEventType[] | ListEnumReputationEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReputationEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReputationEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReputationEventTypeFilter<$PrismaModel>
    _max?: NestedEnumReputationEventTypeFilter<$PrismaModel>
  }

  export type EnumActorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeFilter<$PrismaModel> | $Enums.ActorType
  }

  export type EnumRetentionClassFilter<$PrismaModel = never> = {
    equals?: $Enums.RetentionClass | EnumRetentionClassFieldRefInput<$PrismaModel>
    in?: $Enums.RetentionClass[] | ListEnumRetentionClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.RetentionClass[] | ListEnumRetentionClassFieldRefInput<$PrismaModel>
    not?: NestedEnumRetentionClassFilter<$PrismaModel> | $Enums.RetentionClass
  }

  export type EnumSensitivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SensitivityLevel | EnumSensitivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SensitivityLevel[] | ListEnumSensitivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SensitivityLevel[] | ListEnumSensitivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSensitivityLevelFilter<$PrismaModel> | $Enums.SensitivityLevel
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    previousState?: SortOrder
    newState?: SortOrder
    metadata?: SortOrder
    ipAddressHash?: SortOrder
    retentionClass?: SortOrder
    sensitivityLevel?: SortOrder
  }

  export type AuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    ipAddressHash?: SortOrder
    retentionClass?: SortOrder
    sensitivityLevel?: SortOrder
  }

  export type AuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    ipAddressHash?: SortOrder
    retentionClass?: SortOrder
    sensitivityLevel?: SortOrder
  }

  export type EnumActorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActorTypeFilter<$PrismaModel>
    _max?: NestedEnumActorTypeFilter<$PrismaModel>
  }

  export type EnumRetentionClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RetentionClass | EnumRetentionClassFieldRefInput<$PrismaModel>
    in?: $Enums.RetentionClass[] | ListEnumRetentionClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.RetentionClass[] | ListEnumRetentionClassFieldRefInput<$PrismaModel>
    not?: NestedEnumRetentionClassWithAggregatesFilter<$PrismaModel> | $Enums.RetentionClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRetentionClassFilter<$PrismaModel>
    _max?: NestedEnumRetentionClassFilter<$PrismaModel>
  }

  export type EnumSensitivityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SensitivityLevel | EnumSensitivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SensitivityLevel[] | ListEnumSensitivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SensitivityLevel[] | ListEnumSensitivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSensitivityLevelWithAggregatesFilter<$PrismaModel> | $Enums.SensitivityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSensitivityLevelFilter<$PrismaModel>
    _max?: NestedEnumSensitivityLevelFilter<$PrismaModel>
  }

  export type SystemSettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type SystemSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type SystemSettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ExpertCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ExpertCreateWithoutCreatedByInput, ExpertUncheckedCreateWithoutCreatedByInput> | ExpertCreateWithoutCreatedByInput[] | ExpertUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutCreatedByInput | ExpertCreateOrConnectWithoutCreatedByInput[]
    createMany?: ExpertCreateManyCreatedByInputEnvelope
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
  }

  export type ExpertVersionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ExpertVersionCreateWithoutCreatedByInput, ExpertVersionUncheckedCreateWithoutCreatedByInput> | ExpertVersionCreateWithoutCreatedByInput[] | ExpertVersionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpertVersionCreateOrConnectWithoutCreatedByInput | ExpertVersionCreateOrConnectWithoutCreatedByInput[]
    createMany?: ExpertVersionCreateManyCreatedByInputEnvelope
    connect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
  }

  export type DebateCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DebateCreateWithoutCreatedByInput, DebateUncheckedCreateWithoutCreatedByInput> | DebateCreateWithoutCreatedByInput[] | DebateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DebateCreateOrConnectWithoutCreatedByInput | DebateCreateOrConnectWithoutCreatedByInput[]
    createMany?: DebateCreateManyCreatedByInputEnvelope
    connect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
  }

  export type ArgumentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ArgumentCreateWithoutCreatedByInput, ArgumentUncheckedCreateWithoutCreatedByInput> | ArgumentCreateWithoutCreatedByInput[] | ArgumentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutCreatedByInput | ArgumentCreateOrConnectWithoutCreatedByInput[]
    createMany?: ArgumentCreateManyCreatedByInputEnvelope
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
  }

  export type ReputationScoreCreateNestedManyWithoutUserInput = {
    create?: XOR<ReputationScoreCreateWithoutUserInput, ReputationScoreUncheckedCreateWithoutUserInput> | ReputationScoreCreateWithoutUserInput[] | ReputationScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReputationScoreCreateOrConnectWithoutUserInput | ReputationScoreCreateOrConnectWithoutUserInput[]
    createMany?: ReputationScoreCreateManyUserInputEnvelope
    connect?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
  }

  export type AuditEventCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput> | AuditEventCreateWithoutActorInput[] | AuditEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActorInput | AuditEventCreateOrConnectWithoutActorInput[]
    createMany?: AuditEventCreateManyActorInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ExpertUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ExpertCreateWithoutCreatedByInput, ExpertUncheckedCreateWithoutCreatedByInput> | ExpertCreateWithoutCreatedByInput[] | ExpertUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutCreatedByInput | ExpertCreateOrConnectWithoutCreatedByInput[]
    createMany?: ExpertCreateManyCreatedByInputEnvelope
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
  }

  export type ExpertVersionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ExpertVersionCreateWithoutCreatedByInput, ExpertVersionUncheckedCreateWithoutCreatedByInput> | ExpertVersionCreateWithoutCreatedByInput[] | ExpertVersionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpertVersionCreateOrConnectWithoutCreatedByInput | ExpertVersionCreateOrConnectWithoutCreatedByInput[]
    createMany?: ExpertVersionCreateManyCreatedByInputEnvelope
    connect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
  }

  export type DebateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DebateCreateWithoutCreatedByInput, DebateUncheckedCreateWithoutCreatedByInput> | DebateCreateWithoutCreatedByInput[] | DebateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DebateCreateOrConnectWithoutCreatedByInput | DebateCreateOrConnectWithoutCreatedByInput[]
    createMany?: DebateCreateManyCreatedByInputEnvelope
    connect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
  }

  export type ArgumentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ArgumentCreateWithoutCreatedByInput, ArgumentUncheckedCreateWithoutCreatedByInput> | ArgumentCreateWithoutCreatedByInput[] | ArgumentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutCreatedByInput | ArgumentCreateOrConnectWithoutCreatedByInput[]
    createMany?: ArgumentCreateManyCreatedByInputEnvelope
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
  }

  export type ReputationScoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReputationScoreCreateWithoutUserInput, ReputationScoreUncheckedCreateWithoutUserInput> | ReputationScoreCreateWithoutUserInput[] | ReputationScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReputationScoreCreateOrConnectWithoutUserInput | ReputationScoreCreateOrConnectWithoutUserInput[]
    createMany?: ReputationScoreCreateManyUserInputEnvelope
    connect?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
  }

  export type AuditEventUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput> | AuditEventCreateWithoutActorInput[] | AuditEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActorInput | AuditEventCreateOrConnectWithoutActorInput[]
    createMany?: AuditEventCreateManyActorInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type ExpertUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ExpertCreateWithoutCreatedByInput, ExpertUncheckedCreateWithoutCreatedByInput> | ExpertCreateWithoutCreatedByInput[] | ExpertUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutCreatedByInput | ExpertCreateOrConnectWithoutCreatedByInput[]
    upsert?: ExpertUpsertWithWhereUniqueWithoutCreatedByInput | ExpertUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ExpertCreateManyCreatedByInputEnvelope
    set?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    disconnect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    delete?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    update?: ExpertUpdateWithWhereUniqueWithoutCreatedByInput | ExpertUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ExpertUpdateManyWithWhereWithoutCreatedByInput | ExpertUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
  }

  export type ExpertVersionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ExpertVersionCreateWithoutCreatedByInput, ExpertVersionUncheckedCreateWithoutCreatedByInput> | ExpertVersionCreateWithoutCreatedByInput[] | ExpertVersionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpertVersionCreateOrConnectWithoutCreatedByInput | ExpertVersionCreateOrConnectWithoutCreatedByInput[]
    upsert?: ExpertVersionUpsertWithWhereUniqueWithoutCreatedByInput | ExpertVersionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ExpertVersionCreateManyCreatedByInputEnvelope
    set?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    disconnect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    delete?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    connect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    update?: ExpertVersionUpdateWithWhereUniqueWithoutCreatedByInput | ExpertVersionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ExpertVersionUpdateManyWithWhereWithoutCreatedByInput | ExpertVersionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ExpertVersionScalarWhereInput | ExpertVersionScalarWhereInput[]
  }

  export type DebateUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DebateCreateWithoutCreatedByInput, DebateUncheckedCreateWithoutCreatedByInput> | DebateCreateWithoutCreatedByInput[] | DebateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DebateCreateOrConnectWithoutCreatedByInput | DebateCreateOrConnectWithoutCreatedByInput[]
    upsert?: DebateUpsertWithWhereUniqueWithoutCreatedByInput | DebateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DebateCreateManyCreatedByInputEnvelope
    set?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    disconnect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    delete?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    connect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    update?: DebateUpdateWithWhereUniqueWithoutCreatedByInput | DebateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DebateUpdateManyWithWhereWithoutCreatedByInput | DebateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DebateScalarWhereInput | DebateScalarWhereInput[]
  }

  export type ArgumentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ArgumentCreateWithoutCreatedByInput, ArgumentUncheckedCreateWithoutCreatedByInput> | ArgumentCreateWithoutCreatedByInput[] | ArgumentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutCreatedByInput | ArgumentCreateOrConnectWithoutCreatedByInput[]
    upsert?: ArgumentUpsertWithWhereUniqueWithoutCreatedByInput | ArgumentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ArgumentCreateManyCreatedByInputEnvelope
    set?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    disconnect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    delete?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    update?: ArgumentUpdateWithWhereUniqueWithoutCreatedByInput | ArgumentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ArgumentUpdateManyWithWhereWithoutCreatedByInput | ArgumentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
  }

  export type ReputationScoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReputationScoreCreateWithoutUserInput, ReputationScoreUncheckedCreateWithoutUserInput> | ReputationScoreCreateWithoutUserInput[] | ReputationScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReputationScoreCreateOrConnectWithoutUserInput | ReputationScoreCreateOrConnectWithoutUserInput[]
    upsert?: ReputationScoreUpsertWithWhereUniqueWithoutUserInput | ReputationScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReputationScoreCreateManyUserInputEnvelope
    set?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
    disconnect?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
    delete?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
    connect?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
    update?: ReputationScoreUpdateWithWhereUniqueWithoutUserInput | ReputationScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReputationScoreUpdateManyWithWhereWithoutUserInput | ReputationScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReputationScoreScalarWhereInput | ReputationScoreScalarWhereInput[]
  }

  export type AuditEventUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput> | AuditEventCreateWithoutActorInput[] | AuditEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActorInput | AuditEventCreateOrConnectWithoutActorInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutActorInput | AuditEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditEventCreateManyActorInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutActorInput | AuditEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutActorInput | AuditEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ExpertUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ExpertCreateWithoutCreatedByInput, ExpertUncheckedCreateWithoutCreatedByInput> | ExpertCreateWithoutCreatedByInput[] | ExpertUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutCreatedByInput | ExpertCreateOrConnectWithoutCreatedByInput[]
    upsert?: ExpertUpsertWithWhereUniqueWithoutCreatedByInput | ExpertUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ExpertCreateManyCreatedByInputEnvelope
    set?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    disconnect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    delete?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    update?: ExpertUpdateWithWhereUniqueWithoutCreatedByInput | ExpertUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ExpertUpdateManyWithWhereWithoutCreatedByInput | ExpertUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
  }

  export type ExpertVersionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ExpertVersionCreateWithoutCreatedByInput, ExpertVersionUncheckedCreateWithoutCreatedByInput> | ExpertVersionCreateWithoutCreatedByInput[] | ExpertVersionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpertVersionCreateOrConnectWithoutCreatedByInput | ExpertVersionCreateOrConnectWithoutCreatedByInput[]
    upsert?: ExpertVersionUpsertWithWhereUniqueWithoutCreatedByInput | ExpertVersionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ExpertVersionCreateManyCreatedByInputEnvelope
    set?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    disconnect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    delete?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    connect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    update?: ExpertVersionUpdateWithWhereUniqueWithoutCreatedByInput | ExpertVersionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ExpertVersionUpdateManyWithWhereWithoutCreatedByInput | ExpertVersionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ExpertVersionScalarWhereInput | ExpertVersionScalarWhereInput[]
  }

  export type DebateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DebateCreateWithoutCreatedByInput, DebateUncheckedCreateWithoutCreatedByInput> | DebateCreateWithoutCreatedByInput[] | DebateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DebateCreateOrConnectWithoutCreatedByInput | DebateCreateOrConnectWithoutCreatedByInput[]
    upsert?: DebateUpsertWithWhereUniqueWithoutCreatedByInput | DebateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DebateCreateManyCreatedByInputEnvelope
    set?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    disconnect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    delete?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    connect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    update?: DebateUpdateWithWhereUniqueWithoutCreatedByInput | DebateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DebateUpdateManyWithWhereWithoutCreatedByInput | DebateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DebateScalarWhereInput | DebateScalarWhereInput[]
  }

  export type ArgumentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ArgumentCreateWithoutCreatedByInput, ArgumentUncheckedCreateWithoutCreatedByInput> | ArgumentCreateWithoutCreatedByInput[] | ArgumentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutCreatedByInput | ArgumentCreateOrConnectWithoutCreatedByInput[]
    upsert?: ArgumentUpsertWithWhereUniqueWithoutCreatedByInput | ArgumentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ArgumentCreateManyCreatedByInputEnvelope
    set?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    disconnect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    delete?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    update?: ArgumentUpdateWithWhereUniqueWithoutCreatedByInput | ArgumentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ArgumentUpdateManyWithWhereWithoutCreatedByInput | ArgumentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
  }

  export type ReputationScoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReputationScoreCreateWithoutUserInput, ReputationScoreUncheckedCreateWithoutUserInput> | ReputationScoreCreateWithoutUserInput[] | ReputationScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReputationScoreCreateOrConnectWithoutUserInput | ReputationScoreCreateOrConnectWithoutUserInput[]
    upsert?: ReputationScoreUpsertWithWhereUniqueWithoutUserInput | ReputationScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReputationScoreCreateManyUserInputEnvelope
    set?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
    disconnect?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
    delete?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
    connect?: ReputationScoreWhereUniqueInput | ReputationScoreWhereUniqueInput[]
    update?: ReputationScoreUpdateWithWhereUniqueWithoutUserInput | ReputationScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReputationScoreUpdateManyWithWhereWithoutUserInput | ReputationScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReputationScoreScalarWhereInput | ReputationScoreScalarWhereInput[]
  }

  export type AuditEventUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput> | AuditEventCreateWithoutActorInput[] | AuditEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActorInput | AuditEventCreateOrConnectWithoutActorInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutActorInput | AuditEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditEventCreateManyActorInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutActorInput | AuditEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutActorInput | AuditEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutExpertsInput = {
    create?: XOR<UserCreateWithoutExpertsInput, UserUncheckedCreateWithoutExpertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpertsInput
    connect?: UserWhereUniqueInput
  }

  export type ExpertVersionCreateNestedManyWithoutExpertInput = {
    create?: XOR<ExpertVersionCreateWithoutExpertInput, ExpertVersionUncheckedCreateWithoutExpertInput> | ExpertVersionCreateWithoutExpertInput[] | ExpertVersionUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExpertVersionCreateOrConnectWithoutExpertInput | ExpertVersionCreateOrConnectWithoutExpertInput[]
    createMany?: ExpertVersionCreateManyExpertInputEnvelope
    connect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
  }

  export type DebateCreateNestedManyWithoutExpertInput = {
    create?: XOR<DebateCreateWithoutExpertInput, DebateUncheckedCreateWithoutExpertInput> | DebateCreateWithoutExpertInput[] | DebateUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: DebateCreateOrConnectWithoutExpertInput | DebateCreateOrConnectWithoutExpertInput[]
    createMany?: DebateCreateManyExpertInputEnvelope
    connect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
  }

  export type ExpertDependencyCreateNestedManyWithoutDependentExpertInput = {
    create?: XOR<ExpertDependencyCreateWithoutDependentExpertInput, ExpertDependencyUncheckedCreateWithoutDependentExpertInput> | ExpertDependencyCreateWithoutDependentExpertInput[] | ExpertDependencyUncheckedCreateWithoutDependentExpertInput[]
    connectOrCreate?: ExpertDependencyCreateOrConnectWithoutDependentExpertInput | ExpertDependencyCreateOrConnectWithoutDependentExpertInput[]
    createMany?: ExpertDependencyCreateManyDependentExpertInputEnvelope
    connect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
  }

  export type ExpertDependencyCreateNestedManyWithoutRequiredExpertInput = {
    create?: XOR<ExpertDependencyCreateWithoutRequiredExpertInput, ExpertDependencyUncheckedCreateWithoutRequiredExpertInput> | ExpertDependencyCreateWithoutRequiredExpertInput[] | ExpertDependencyUncheckedCreateWithoutRequiredExpertInput[]
    connectOrCreate?: ExpertDependencyCreateOrConnectWithoutRequiredExpertInput | ExpertDependencyCreateOrConnectWithoutRequiredExpertInput[]
    createMany?: ExpertDependencyCreateManyRequiredExpertInputEnvelope
    connect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
  }

  export type ExpertVersionUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<ExpertVersionCreateWithoutExpertInput, ExpertVersionUncheckedCreateWithoutExpertInput> | ExpertVersionCreateWithoutExpertInput[] | ExpertVersionUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExpertVersionCreateOrConnectWithoutExpertInput | ExpertVersionCreateOrConnectWithoutExpertInput[]
    createMany?: ExpertVersionCreateManyExpertInputEnvelope
    connect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
  }

  export type DebateUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<DebateCreateWithoutExpertInput, DebateUncheckedCreateWithoutExpertInput> | DebateCreateWithoutExpertInput[] | DebateUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: DebateCreateOrConnectWithoutExpertInput | DebateCreateOrConnectWithoutExpertInput[]
    createMany?: DebateCreateManyExpertInputEnvelope
    connect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
  }

  export type ExpertDependencyUncheckedCreateNestedManyWithoutDependentExpertInput = {
    create?: XOR<ExpertDependencyCreateWithoutDependentExpertInput, ExpertDependencyUncheckedCreateWithoutDependentExpertInput> | ExpertDependencyCreateWithoutDependentExpertInput[] | ExpertDependencyUncheckedCreateWithoutDependentExpertInput[]
    connectOrCreate?: ExpertDependencyCreateOrConnectWithoutDependentExpertInput | ExpertDependencyCreateOrConnectWithoutDependentExpertInput[]
    createMany?: ExpertDependencyCreateManyDependentExpertInputEnvelope
    connect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
  }

  export type ExpertDependencyUncheckedCreateNestedManyWithoutRequiredExpertInput = {
    create?: XOR<ExpertDependencyCreateWithoutRequiredExpertInput, ExpertDependencyUncheckedCreateWithoutRequiredExpertInput> | ExpertDependencyCreateWithoutRequiredExpertInput[] | ExpertDependencyUncheckedCreateWithoutRequiredExpertInput[]
    connectOrCreate?: ExpertDependencyCreateOrConnectWithoutRequiredExpertInput | ExpertDependencyCreateOrConnectWithoutRequiredExpertInput[]
    createMany?: ExpertDependencyCreateManyRequiredExpertInputEnvelope
    connect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
  }

  export type EnumExpertStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExpertStatus
  }

  export type UserUpdateOneRequiredWithoutExpertsNestedInput = {
    create?: XOR<UserCreateWithoutExpertsInput, UserUncheckedCreateWithoutExpertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpertsInput
    upsert?: UserUpsertWithoutExpertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpertsInput, UserUpdateWithoutExpertsInput>, UserUncheckedUpdateWithoutExpertsInput>
  }

  export type ExpertVersionUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ExpertVersionCreateWithoutExpertInput, ExpertVersionUncheckedCreateWithoutExpertInput> | ExpertVersionCreateWithoutExpertInput[] | ExpertVersionUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExpertVersionCreateOrConnectWithoutExpertInput | ExpertVersionCreateOrConnectWithoutExpertInput[]
    upsert?: ExpertVersionUpsertWithWhereUniqueWithoutExpertInput | ExpertVersionUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ExpertVersionCreateManyExpertInputEnvelope
    set?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    disconnect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    delete?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    connect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    update?: ExpertVersionUpdateWithWhereUniqueWithoutExpertInput | ExpertVersionUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ExpertVersionUpdateManyWithWhereWithoutExpertInput | ExpertVersionUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ExpertVersionScalarWhereInput | ExpertVersionScalarWhereInput[]
  }

  export type DebateUpdateManyWithoutExpertNestedInput = {
    create?: XOR<DebateCreateWithoutExpertInput, DebateUncheckedCreateWithoutExpertInput> | DebateCreateWithoutExpertInput[] | DebateUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: DebateCreateOrConnectWithoutExpertInput | DebateCreateOrConnectWithoutExpertInput[]
    upsert?: DebateUpsertWithWhereUniqueWithoutExpertInput | DebateUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: DebateCreateManyExpertInputEnvelope
    set?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    disconnect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    delete?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    connect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    update?: DebateUpdateWithWhereUniqueWithoutExpertInput | DebateUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: DebateUpdateManyWithWhereWithoutExpertInput | DebateUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: DebateScalarWhereInput | DebateScalarWhereInput[]
  }

  export type ExpertDependencyUpdateManyWithoutDependentExpertNestedInput = {
    create?: XOR<ExpertDependencyCreateWithoutDependentExpertInput, ExpertDependencyUncheckedCreateWithoutDependentExpertInput> | ExpertDependencyCreateWithoutDependentExpertInput[] | ExpertDependencyUncheckedCreateWithoutDependentExpertInput[]
    connectOrCreate?: ExpertDependencyCreateOrConnectWithoutDependentExpertInput | ExpertDependencyCreateOrConnectWithoutDependentExpertInput[]
    upsert?: ExpertDependencyUpsertWithWhereUniqueWithoutDependentExpertInput | ExpertDependencyUpsertWithWhereUniqueWithoutDependentExpertInput[]
    createMany?: ExpertDependencyCreateManyDependentExpertInputEnvelope
    set?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    disconnect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    delete?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    connect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    update?: ExpertDependencyUpdateWithWhereUniqueWithoutDependentExpertInput | ExpertDependencyUpdateWithWhereUniqueWithoutDependentExpertInput[]
    updateMany?: ExpertDependencyUpdateManyWithWhereWithoutDependentExpertInput | ExpertDependencyUpdateManyWithWhereWithoutDependentExpertInput[]
    deleteMany?: ExpertDependencyScalarWhereInput | ExpertDependencyScalarWhereInput[]
  }

  export type ExpertDependencyUpdateManyWithoutRequiredExpertNestedInput = {
    create?: XOR<ExpertDependencyCreateWithoutRequiredExpertInput, ExpertDependencyUncheckedCreateWithoutRequiredExpertInput> | ExpertDependencyCreateWithoutRequiredExpertInput[] | ExpertDependencyUncheckedCreateWithoutRequiredExpertInput[]
    connectOrCreate?: ExpertDependencyCreateOrConnectWithoutRequiredExpertInput | ExpertDependencyCreateOrConnectWithoutRequiredExpertInput[]
    upsert?: ExpertDependencyUpsertWithWhereUniqueWithoutRequiredExpertInput | ExpertDependencyUpsertWithWhereUniqueWithoutRequiredExpertInput[]
    createMany?: ExpertDependencyCreateManyRequiredExpertInputEnvelope
    set?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    disconnect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    delete?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    connect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    update?: ExpertDependencyUpdateWithWhereUniqueWithoutRequiredExpertInput | ExpertDependencyUpdateWithWhereUniqueWithoutRequiredExpertInput[]
    updateMany?: ExpertDependencyUpdateManyWithWhereWithoutRequiredExpertInput | ExpertDependencyUpdateManyWithWhereWithoutRequiredExpertInput[]
    deleteMany?: ExpertDependencyScalarWhereInput | ExpertDependencyScalarWhereInput[]
  }

  export type ExpertVersionUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ExpertVersionCreateWithoutExpertInput, ExpertVersionUncheckedCreateWithoutExpertInput> | ExpertVersionCreateWithoutExpertInput[] | ExpertVersionUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExpertVersionCreateOrConnectWithoutExpertInput | ExpertVersionCreateOrConnectWithoutExpertInput[]
    upsert?: ExpertVersionUpsertWithWhereUniqueWithoutExpertInput | ExpertVersionUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ExpertVersionCreateManyExpertInputEnvelope
    set?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    disconnect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    delete?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    connect?: ExpertVersionWhereUniqueInput | ExpertVersionWhereUniqueInput[]
    update?: ExpertVersionUpdateWithWhereUniqueWithoutExpertInput | ExpertVersionUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ExpertVersionUpdateManyWithWhereWithoutExpertInput | ExpertVersionUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ExpertVersionScalarWhereInput | ExpertVersionScalarWhereInput[]
  }

  export type DebateUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<DebateCreateWithoutExpertInput, DebateUncheckedCreateWithoutExpertInput> | DebateCreateWithoutExpertInput[] | DebateUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: DebateCreateOrConnectWithoutExpertInput | DebateCreateOrConnectWithoutExpertInput[]
    upsert?: DebateUpsertWithWhereUniqueWithoutExpertInput | DebateUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: DebateCreateManyExpertInputEnvelope
    set?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    disconnect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    delete?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    connect?: DebateWhereUniqueInput | DebateWhereUniqueInput[]
    update?: DebateUpdateWithWhereUniqueWithoutExpertInput | DebateUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: DebateUpdateManyWithWhereWithoutExpertInput | DebateUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: DebateScalarWhereInput | DebateScalarWhereInput[]
  }

  export type ExpertDependencyUncheckedUpdateManyWithoutDependentExpertNestedInput = {
    create?: XOR<ExpertDependencyCreateWithoutDependentExpertInput, ExpertDependencyUncheckedCreateWithoutDependentExpertInput> | ExpertDependencyCreateWithoutDependentExpertInput[] | ExpertDependencyUncheckedCreateWithoutDependentExpertInput[]
    connectOrCreate?: ExpertDependencyCreateOrConnectWithoutDependentExpertInput | ExpertDependencyCreateOrConnectWithoutDependentExpertInput[]
    upsert?: ExpertDependencyUpsertWithWhereUniqueWithoutDependentExpertInput | ExpertDependencyUpsertWithWhereUniqueWithoutDependentExpertInput[]
    createMany?: ExpertDependencyCreateManyDependentExpertInputEnvelope
    set?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    disconnect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    delete?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    connect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    update?: ExpertDependencyUpdateWithWhereUniqueWithoutDependentExpertInput | ExpertDependencyUpdateWithWhereUniqueWithoutDependentExpertInput[]
    updateMany?: ExpertDependencyUpdateManyWithWhereWithoutDependentExpertInput | ExpertDependencyUpdateManyWithWhereWithoutDependentExpertInput[]
    deleteMany?: ExpertDependencyScalarWhereInput | ExpertDependencyScalarWhereInput[]
  }

  export type ExpertDependencyUncheckedUpdateManyWithoutRequiredExpertNestedInput = {
    create?: XOR<ExpertDependencyCreateWithoutRequiredExpertInput, ExpertDependencyUncheckedCreateWithoutRequiredExpertInput> | ExpertDependencyCreateWithoutRequiredExpertInput[] | ExpertDependencyUncheckedCreateWithoutRequiredExpertInput[]
    connectOrCreate?: ExpertDependencyCreateOrConnectWithoutRequiredExpertInput | ExpertDependencyCreateOrConnectWithoutRequiredExpertInput[]
    upsert?: ExpertDependencyUpsertWithWhereUniqueWithoutRequiredExpertInput | ExpertDependencyUpsertWithWhereUniqueWithoutRequiredExpertInput[]
    createMany?: ExpertDependencyCreateManyRequiredExpertInputEnvelope
    set?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    disconnect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    delete?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    connect?: ExpertDependencyWhereUniqueInput | ExpertDependencyWhereUniqueInput[]
    update?: ExpertDependencyUpdateWithWhereUniqueWithoutRequiredExpertInput | ExpertDependencyUpdateWithWhereUniqueWithoutRequiredExpertInput[]
    updateMany?: ExpertDependencyUpdateManyWithWhereWithoutRequiredExpertInput | ExpertDependencyUpdateManyWithWhereWithoutRequiredExpertInput[]
    deleteMany?: ExpertDependencyScalarWhereInput | ExpertDependencyScalarWhereInput[]
  }

  export type ExpertCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ExpertCreateWithoutVersionsInput, ExpertUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutVersionsInput
    connect?: ExpertWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExpertVersionsInput = {
    create?: XOR<UserCreateWithoutExpertVersionsInput, UserUncheckedCreateWithoutExpertVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpertVersionsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpertUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ExpertCreateWithoutVersionsInput, ExpertUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutVersionsInput
    upsert?: ExpertUpsertWithoutVersionsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutVersionsInput, ExpertUpdateWithoutVersionsInput>, ExpertUncheckedUpdateWithoutVersionsInput>
  }

  export type UserUpdateOneRequiredWithoutExpertVersionsNestedInput = {
    create?: XOR<UserCreateWithoutExpertVersionsInput, UserUncheckedCreateWithoutExpertVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpertVersionsInput
    upsert?: UserUpsertWithoutExpertVersionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpertVersionsInput, UserUpdateWithoutExpertVersionsInput>, UserUncheckedUpdateWithoutExpertVersionsInput>
  }

  export type ExpertCreateNestedOneWithoutDependenciesInput = {
    create?: XOR<ExpertCreateWithoutDependenciesInput, ExpertUncheckedCreateWithoutDependenciesInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutDependenciesInput
    connect?: ExpertWhereUniqueInput
  }

  export type ExpertCreateNestedOneWithoutDependentsInput = {
    create?: XOR<ExpertCreateWithoutDependentsInput, ExpertUncheckedCreateWithoutDependentsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutDependentsInput
    connect?: ExpertWhereUniqueInput
  }

  export type EnumDependencyTypeFieldUpdateOperationsInput = {
    set?: $Enums.DependencyType
  }

  export type ExpertUpdateOneRequiredWithoutDependenciesNestedInput = {
    create?: XOR<ExpertCreateWithoutDependenciesInput, ExpertUncheckedCreateWithoutDependenciesInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutDependenciesInput
    upsert?: ExpertUpsertWithoutDependenciesInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutDependenciesInput, ExpertUpdateWithoutDependenciesInput>, ExpertUncheckedUpdateWithoutDependenciesInput>
  }

  export type ExpertUpdateOneRequiredWithoutDependentsNestedInput = {
    create?: XOR<ExpertCreateWithoutDependentsInput, ExpertUncheckedCreateWithoutDependentsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutDependentsInput
    upsert?: ExpertUpsertWithoutDependentsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutDependentsInput, ExpertUpdateWithoutDependentsInput>, ExpertUncheckedUpdateWithoutDependentsInput>
  }

  export type ExpertCreateNestedOneWithoutDebatesInput = {
    create?: XOR<ExpertCreateWithoutDebatesInput, ExpertUncheckedCreateWithoutDebatesInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutDebatesInput
    connect?: ExpertWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDebatesInput = {
    create?: XOR<UserCreateWithoutDebatesInput, UserUncheckedCreateWithoutDebatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebatesInput
    connect?: UserWhereUniqueInput
  }

  export type ArgumentCreateNestedManyWithoutDebateInput = {
    create?: XOR<ArgumentCreateWithoutDebateInput, ArgumentUncheckedCreateWithoutDebateInput> | ArgumentCreateWithoutDebateInput[] | ArgumentUncheckedCreateWithoutDebateInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutDebateInput | ArgumentCreateOrConnectWithoutDebateInput[]
    createMany?: ArgumentCreateManyDebateInputEnvelope
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
  }

  export type ArgumentUncheckedCreateNestedManyWithoutDebateInput = {
    create?: XOR<ArgumentCreateWithoutDebateInput, ArgumentUncheckedCreateWithoutDebateInput> | ArgumentCreateWithoutDebateInput[] | ArgumentUncheckedCreateWithoutDebateInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutDebateInput | ArgumentCreateOrConnectWithoutDebateInput[]
    createMany?: ArgumentCreateManyDebateInputEnvelope
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
  }

  export type EnumDebateStatusFieldUpdateOperationsInput = {
    set?: $Enums.DebateStatus
  }

  export type ExpertUpdateOneRequiredWithoutDebatesNestedInput = {
    create?: XOR<ExpertCreateWithoutDebatesInput, ExpertUncheckedCreateWithoutDebatesInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutDebatesInput
    upsert?: ExpertUpsertWithoutDebatesInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutDebatesInput, ExpertUpdateWithoutDebatesInput>, ExpertUncheckedUpdateWithoutDebatesInput>
  }

  export type UserUpdateOneRequiredWithoutDebatesNestedInput = {
    create?: XOR<UserCreateWithoutDebatesInput, UserUncheckedCreateWithoutDebatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebatesInput
    upsert?: UserUpsertWithoutDebatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDebatesInput, UserUpdateWithoutDebatesInput>, UserUncheckedUpdateWithoutDebatesInput>
  }

  export type ArgumentUpdateManyWithoutDebateNestedInput = {
    create?: XOR<ArgumentCreateWithoutDebateInput, ArgumentUncheckedCreateWithoutDebateInput> | ArgumentCreateWithoutDebateInput[] | ArgumentUncheckedCreateWithoutDebateInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutDebateInput | ArgumentCreateOrConnectWithoutDebateInput[]
    upsert?: ArgumentUpsertWithWhereUniqueWithoutDebateInput | ArgumentUpsertWithWhereUniqueWithoutDebateInput[]
    createMany?: ArgumentCreateManyDebateInputEnvelope
    set?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    disconnect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    delete?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    update?: ArgumentUpdateWithWhereUniqueWithoutDebateInput | ArgumentUpdateWithWhereUniqueWithoutDebateInput[]
    updateMany?: ArgumentUpdateManyWithWhereWithoutDebateInput | ArgumentUpdateManyWithWhereWithoutDebateInput[]
    deleteMany?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
  }

  export type ArgumentUncheckedUpdateManyWithoutDebateNestedInput = {
    create?: XOR<ArgumentCreateWithoutDebateInput, ArgumentUncheckedCreateWithoutDebateInput> | ArgumentCreateWithoutDebateInput[] | ArgumentUncheckedCreateWithoutDebateInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutDebateInput | ArgumentCreateOrConnectWithoutDebateInput[]
    upsert?: ArgumentUpsertWithWhereUniqueWithoutDebateInput | ArgumentUpsertWithWhereUniqueWithoutDebateInput[]
    createMany?: ArgumentCreateManyDebateInputEnvelope
    set?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    disconnect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    delete?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    update?: ArgumentUpdateWithWhereUniqueWithoutDebateInput | ArgumentUpdateWithWhereUniqueWithoutDebateInput[]
    updateMany?: ArgumentUpdateManyWithWhereWithoutDebateInput | ArgumentUpdateManyWithWhereWithoutDebateInput[]
    deleteMany?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
  }

  export type DebateCreateNestedOneWithoutArgumentsInput = {
    create?: XOR<DebateCreateWithoutArgumentsInput, DebateUncheckedCreateWithoutArgumentsInput>
    connectOrCreate?: DebateCreateOrConnectWithoutArgumentsInput
    connect?: DebateWhereUniqueInput
  }

  export type ArgumentCreateNestedOneWithoutChildArgumentsInput = {
    create?: XOR<ArgumentCreateWithoutChildArgumentsInput, ArgumentUncheckedCreateWithoutChildArgumentsInput>
    connectOrCreate?: ArgumentCreateOrConnectWithoutChildArgumentsInput
    connect?: ArgumentWhereUniqueInput
  }

  export type ArgumentCreateNestedManyWithoutParentArgumentInput = {
    create?: XOR<ArgumentCreateWithoutParentArgumentInput, ArgumentUncheckedCreateWithoutParentArgumentInput> | ArgumentCreateWithoutParentArgumentInput[] | ArgumentUncheckedCreateWithoutParentArgumentInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutParentArgumentInput | ArgumentCreateOrConnectWithoutParentArgumentInput[]
    createMany?: ArgumentCreateManyParentArgumentInputEnvelope
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutArgumentsInput = {
    create?: XOR<UserCreateWithoutArgumentsInput, UserUncheckedCreateWithoutArgumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArgumentsInput
    connect?: UserWhereUniqueInput
  }

  export type EvidenceCreateNestedManyWithoutArgumentInput = {
    create?: XOR<EvidenceCreateWithoutArgumentInput, EvidenceUncheckedCreateWithoutArgumentInput> | EvidenceCreateWithoutArgumentInput[] | EvidenceUncheckedCreateWithoutArgumentInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutArgumentInput | EvidenceCreateOrConnectWithoutArgumentInput[]
    createMany?: EvidenceCreateManyArgumentInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type ArgumentUncheckedCreateNestedManyWithoutParentArgumentInput = {
    create?: XOR<ArgumentCreateWithoutParentArgumentInput, ArgumentUncheckedCreateWithoutParentArgumentInput> | ArgumentCreateWithoutParentArgumentInput[] | ArgumentUncheckedCreateWithoutParentArgumentInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutParentArgumentInput | ArgumentCreateOrConnectWithoutParentArgumentInput[]
    createMany?: ArgumentCreateManyParentArgumentInputEnvelope
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
  }

  export type EvidenceUncheckedCreateNestedManyWithoutArgumentInput = {
    create?: XOR<EvidenceCreateWithoutArgumentInput, EvidenceUncheckedCreateWithoutArgumentInput> | EvidenceCreateWithoutArgumentInput[] | EvidenceUncheckedCreateWithoutArgumentInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutArgumentInput | EvidenceCreateOrConnectWithoutArgumentInput[]
    createMany?: EvidenceCreateManyArgumentInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type EnumArgumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ArgumentType
  }

  export type EnumArgumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ArgumentStatus
  }

  export type EnumValidationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ValidationStatus
  }

  export type DebateUpdateOneRequiredWithoutArgumentsNestedInput = {
    create?: XOR<DebateCreateWithoutArgumentsInput, DebateUncheckedCreateWithoutArgumentsInput>
    connectOrCreate?: DebateCreateOrConnectWithoutArgumentsInput
    upsert?: DebateUpsertWithoutArgumentsInput
    connect?: DebateWhereUniqueInput
    update?: XOR<XOR<DebateUpdateToOneWithWhereWithoutArgumentsInput, DebateUpdateWithoutArgumentsInput>, DebateUncheckedUpdateWithoutArgumentsInput>
  }

  export type ArgumentUpdateOneWithoutChildArgumentsNestedInput = {
    create?: XOR<ArgumentCreateWithoutChildArgumentsInput, ArgumentUncheckedCreateWithoutChildArgumentsInput>
    connectOrCreate?: ArgumentCreateOrConnectWithoutChildArgumentsInput
    upsert?: ArgumentUpsertWithoutChildArgumentsInput
    disconnect?: boolean
    delete?: ArgumentWhereInput | boolean
    connect?: ArgumentWhereUniqueInput
    update?: XOR<XOR<ArgumentUpdateToOneWithWhereWithoutChildArgumentsInput, ArgumentUpdateWithoutChildArgumentsInput>, ArgumentUncheckedUpdateWithoutChildArgumentsInput>
  }

  export type ArgumentUpdateManyWithoutParentArgumentNestedInput = {
    create?: XOR<ArgumentCreateWithoutParentArgumentInput, ArgumentUncheckedCreateWithoutParentArgumentInput> | ArgumentCreateWithoutParentArgumentInput[] | ArgumentUncheckedCreateWithoutParentArgumentInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutParentArgumentInput | ArgumentCreateOrConnectWithoutParentArgumentInput[]
    upsert?: ArgumentUpsertWithWhereUniqueWithoutParentArgumentInput | ArgumentUpsertWithWhereUniqueWithoutParentArgumentInput[]
    createMany?: ArgumentCreateManyParentArgumentInputEnvelope
    set?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    disconnect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    delete?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    update?: ArgumentUpdateWithWhereUniqueWithoutParentArgumentInput | ArgumentUpdateWithWhereUniqueWithoutParentArgumentInput[]
    updateMany?: ArgumentUpdateManyWithWhereWithoutParentArgumentInput | ArgumentUpdateManyWithWhereWithoutParentArgumentInput[]
    deleteMany?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutArgumentsNestedInput = {
    create?: XOR<UserCreateWithoutArgumentsInput, UserUncheckedCreateWithoutArgumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArgumentsInput
    upsert?: UserUpsertWithoutArgumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArgumentsInput, UserUpdateWithoutArgumentsInput>, UserUncheckedUpdateWithoutArgumentsInput>
  }

  export type EvidenceUpdateManyWithoutArgumentNestedInput = {
    create?: XOR<EvidenceCreateWithoutArgumentInput, EvidenceUncheckedCreateWithoutArgumentInput> | EvidenceCreateWithoutArgumentInput[] | EvidenceUncheckedCreateWithoutArgumentInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutArgumentInput | EvidenceCreateOrConnectWithoutArgumentInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutArgumentInput | EvidenceUpsertWithWhereUniqueWithoutArgumentInput[]
    createMany?: EvidenceCreateManyArgumentInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutArgumentInput | EvidenceUpdateWithWhereUniqueWithoutArgumentInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutArgumentInput | EvidenceUpdateManyWithWhereWithoutArgumentInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type ArgumentUncheckedUpdateManyWithoutParentArgumentNestedInput = {
    create?: XOR<ArgumentCreateWithoutParentArgumentInput, ArgumentUncheckedCreateWithoutParentArgumentInput> | ArgumentCreateWithoutParentArgumentInput[] | ArgumentUncheckedCreateWithoutParentArgumentInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutParentArgumentInput | ArgumentCreateOrConnectWithoutParentArgumentInput[]
    upsert?: ArgumentUpsertWithWhereUniqueWithoutParentArgumentInput | ArgumentUpsertWithWhereUniqueWithoutParentArgumentInput[]
    createMany?: ArgumentCreateManyParentArgumentInputEnvelope
    set?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    disconnect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    delete?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    update?: ArgumentUpdateWithWhereUniqueWithoutParentArgumentInput | ArgumentUpdateWithWhereUniqueWithoutParentArgumentInput[]
    updateMany?: ArgumentUpdateManyWithWhereWithoutParentArgumentInput | ArgumentUpdateManyWithWhereWithoutParentArgumentInput[]
    deleteMany?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
  }

  export type EvidenceUncheckedUpdateManyWithoutArgumentNestedInput = {
    create?: XOR<EvidenceCreateWithoutArgumentInput, EvidenceUncheckedCreateWithoutArgumentInput> | EvidenceCreateWithoutArgumentInput[] | EvidenceUncheckedCreateWithoutArgumentInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutArgumentInput | EvidenceCreateOrConnectWithoutArgumentInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutArgumentInput | EvidenceUpsertWithWhereUniqueWithoutArgumentInput[]
    createMany?: EvidenceCreateManyArgumentInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutArgumentInput | EvidenceUpdateWithWhereUniqueWithoutArgumentInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutArgumentInput | EvidenceUpdateManyWithWhereWithoutArgumentInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type ArgumentCreateNestedOneWithoutEvidenceInput = {
    create?: XOR<ArgumentCreateWithoutEvidenceInput, ArgumentUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: ArgumentCreateOrConnectWithoutEvidenceInput
    connect?: ArgumentWhereUniqueInput
  }

  export type EnumEvidenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.EvidenceType
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type ArgumentUpdateOneRequiredWithoutEvidenceNestedInput = {
    create?: XOR<ArgumentCreateWithoutEvidenceInput, ArgumentUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: ArgumentCreateOrConnectWithoutEvidenceInput
    upsert?: ArgumentUpsertWithoutEvidenceInput
    connect?: ArgumentWhereUniqueInput
    update?: XOR<XOR<ArgumentUpdateToOneWithWhereWithoutEvidenceInput, ArgumentUpdateWithoutEvidenceInput>, ArgumentUncheckedUpdateWithoutEvidenceInput>
  }

  export type UserCreateNestedOneWithoutReputationScoresInput = {
    create?: XOR<UserCreateWithoutReputationScoresInput, UserUncheckedCreateWithoutReputationScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutReputationScoresInput
    connect?: UserWhereUniqueInput
  }

  export type ReputationEventCreateNestedManyWithoutReputationScoreInput = {
    create?: XOR<ReputationEventCreateWithoutReputationScoreInput, ReputationEventUncheckedCreateWithoutReputationScoreInput> | ReputationEventCreateWithoutReputationScoreInput[] | ReputationEventUncheckedCreateWithoutReputationScoreInput[]
    connectOrCreate?: ReputationEventCreateOrConnectWithoutReputationScoreInput | ReputationEventCreateOrConnectWithoutReputationScoreInput[]
    createMany?: ReputationEventCreateManyReputationScoreInputEnvelope
    connect?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
  }

  export type ReputationEventUncheckedCreateNestedManyWithoutReputationScoreInput = {
    create?: XOR<ReputationEventCreateWithoutReputationScoreInput, ReputationEventUncheckedCreateWithoutReputationScoreInput> | ReputationEventCreateWithoutReputationScoreInput[] | ReputationEventUncheckedCreateWithoutReputationScoreInput[]
    connectOrCreate?: ReputationEventCreateOrConnectWithoutReputationScoreInput | ReputationEventCreateOrConnectWithoutReputationScoreInput[]
    createMany?: ReputationEventCreateManyReputationScoreInputEnvelope
    connect?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
  }

  export type EnumReputationRankFieldUpdateOperationsInput = {
    set?: $Enums.ReputationRank
  }

  export type UserUpdateOneRequiredWithoutReputationScoresNestedInput = {
    create?: XOR<UserCreateWithoutReputationScoresInput, UserUncheckedCreateWithoutReputationScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutReputationScoresInput
    upsert?: UserUpsertWithoutReputationScoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReputationScoresInput, UserUpdateWithoutReputationScoresInput>, UserUncheckedUpdateWithoutReputationScoresInput>
  }

  export type ReputationEventUpdateManyWithoutReputationScoreNestedInput = {
    create?: XOR<ReputationEventCreateWithoutReputationScoreInput, ReputationEventUncheckedCreateWithoutReputationScoreInput> | ReputationEventCreateWithoutReputationScoreInput[] | ReputationEventUncheckedCreateWithoutReputationScoreInput[]
    connectOrCreate?: ReputationEventCreateOrConnectWithoutReputationScoreInput | ReputationEventCreateOrConnectWithoutReputationScoreInput[]
    upsert?: ReputationEventUpsertWithWhereUniqueWithoutReputationScoreInput | ReputationEventUpsertWithWhereUniqueWithoutReputationScoreInput[]
    createMany?: ReputationEventCreateManyReputationScoreInputEnvelope
    set?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
    disconnect?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
    delete?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
    connect?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
    update?: ReputationEventUpdateWithWhereUniqueWithoutReputationScoreInput | ReputationEventUpdateWithWhereUniqueWithoutReputationScoreInput[]
    updateMany?: ReputationEventUpdateManyWithWhereWithoutReputationScoreInput | ReputationEventUpdateManyWithWhereWithoutReputationScoreInput[]
    deleteMany?: ReputationEventScalarWhereInput | ReputationEventScalarWhereInput[]
  }

  export type ReputationEventUncheckedUpdateManyWithoutReputationScoreNestedInput = {
    create?: XOR<ReputationEventCreateWithoutReputationScoreInput, ReputationEventUncheckedCreateWithoutReputationScoreInput> | ReputationEventCreateWithoutReputationScoreInput[] | ReputationEventUncheckedCreateWithoutReputationScoreInput[]
    connectOrCreate?: ReputationEventCreateOrConnectWithoutReputationScoreInput | ReputationEventCreateOrConnectWithoutReputationScoreInput[]
    upsert?: ReputationEventUpsertWithWhereUniqueWithoutReputationScoreInput | ReputationEventUpsertWithWhereUniqueWithoutReputationScoreInput[]
    createMany?: ReputationEventCreateManyReputationScoreInputEnvelope
    set?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
    disconnect?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
    delete?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
    connect?: ReputationEventWhereUniqueInput | ReputationEventWhereUniqueInput[]
    update?: ReputationEventUpdateWithWhereUniqueWithoutReputationScoreInput | ReputationEventUpdateWithWhereUniqueWithoutReputationScoreInput[]
    updateMany?: ReputationEventUpdateManyWithWhereWithoutReputationScoreInput | ReputationEventUpdateManyWithWhereWithoutReputationScoreInput[]
    deleteMany?: ReputationEventScalarWhereInput | ReputationEventScalarWhereInput[]
  }

  export type ReputationScoreCreateNestedOneWithoutHistoryInput = {
    create?: XOR<ReputationScoreCreateWithoutHistoryInput, ReputationScoreUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ReputationScoreCreateOrConnectWithoutHistoryInput
    connect?: ReputationScoreWhereUniqueInput
  }

  export type EnumReputationEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReputationEventType
  }

  export type ReputationScoreUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<ReputationScoreCreateWithoutHistoryInput, ReputationScoreUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ReputationScoreCreateOrConnectWithoutHistoryInput
    upsert?: ReputationScoreUpsertWithoutHistoryInput
    connect?: ReputationScoreWhereUniqueInput
    update?: XOR<XOR<ReputationScoreUpdateToOneWithWhereWithoutHistoryInput, ReputationScoreUpdateWithoutHistoryInput>, ReputationScoreUncheckedUpdateWithoutHistoryInput>
  }

  export type UserCreateNestedOneWithoutAuditEventsInput = {
    create?: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActorTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActorType
  }

  export type EnumRetentionClassFieldUpdateOperationsInput = {
    set?: $Enums.RetentionClass
  }

  export type EnumSensitivityLevelFieldUpdateOperationsInput = {
    set?: $Enums.SensitivityLevel
  }

  export type UserUpdateOneWithoutAuditEventsNestedInput = {
    create?: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditEventsInput
    upsert?: UserUpsertWithoutAuditEventsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditEventsInput, UserUpdateWithoutAuditEventsInput>, UserUncheckedUpdateWithoutAuditEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumExpertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpertStatus | EnumExpertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpertStatus[] | ListEnumExpertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpertStatus[] | ListEnumExpertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpertStatusFilter<$PrismaModel> | $Enums.ExpertStatus
  }

  export type NestedEnumExpertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpertStatus | EnumExpertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpertStatus[] | ListEnumExpertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpertStatus[] | ListEnumExpertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpertStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExpertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpertStatusFilter<$PrismaModel>
    _max?: NestedEnumExpertStatusFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDependencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DependencyType | EnumDependencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDependencyTypeFilter<$PrismaModel> | $Enums.DependencyType
  }

  export type NestedEnumDependencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DependencyType | EnumDependencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDependencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.DependencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDependencyTypeFilter<$PrismaModel>
    _max?: NestedEnumDependencyTypeFilter<$PrismaModel>
  }

  export type NestedEnumDebateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DebateStatus | EnumDebateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebateStatus[] | ListEnumDebateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebateStatus[] | ListEnumDebateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDebateStatusFilter<$PrismaModel> | $Enums.DebateStatus
  }

  export type NestedEnumDebateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebateStatus | EnumDebateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebateStatus[] | ListEnumDebateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebateStatus[] | ListEnumDebateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDebateStatusWithAggregatesFilter<$PrismaModel> | $Enums.DebateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebateStatusFilter<$PrismaModel>
    _max?: NestedEnumDebateStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedEnumArgumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArgumentType | EnumArgumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArgumentType[] | ListEnumArgumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArgumentType[] | ListEnumArgumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArgumentTypeFilter<$PrismaModel> | $Enums.ArgumentType
  }

  export type NestedEnumArgumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArgumentStatus | EnumArgumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArgumentStatus[] | ListEnumArgumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArgumentStatus[] | ListEnumArgumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArgumentStatusFilter<$PrismaModel> | $Enums.ArgumentStatus
  }

  export type NestedEnumValidationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ValidationStatus | EnumValidationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumValidationStatusFilter<$PrismaModel> | $Enums.ValidationStatus
  }

  export type NestedEnumArgumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArgumentType | EnumArgumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArgumentType[] | ListEnumArgumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArgumentType[] | ListEnumArgumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArgumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArgumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArgumentTypeFilter<$PrismaModel>
    _max?: NestedEnumArgumentTypeFilter<$PrismaModel>
  }

  export type NestedEnumArgumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArgumentStatus | EnumArgumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArgumentStatus[] | ListEnumArgumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArgumentStatus[] | ListEnumArgumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArgumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArgumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArgumentStatusFilter<$PrismaModel>
    _max?: NestedEnumArgumentStatusFilter<$PrismaModel>
  }

  export type NestedEnumValidationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ValidationStatus | EnumValidationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumValidationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ValidationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumValidationStatusFilter<$PrismaModel>
    _max?: NestedEnumValidationStatusFilter<$PrismaModel>
  }

  export type NestedEnumEvidenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EvidenceType | EnumEvidenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EvidenceType[] | ListEnumEvidenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvidenceType[] | ListEnumEvidenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEvidenceTypeFilter<$PrismaModel> | $Enums.EvidenceType
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedEnumEvidenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvidenceType | EnumEvidenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EvidenceType[] | ListEnumEvidenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvidenceType[] | ListEnumEvidenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEvidenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.EvidenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvidenceTypeFilter<$PrismaModel>
    _max?: NestedEnumEvidenceTypeFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumReputationRankFilter<$PrismaModel = never> = {
    equals?: $Enums.ReputationRank | EnumReputationRankFieldRefInput<$PrismaModel>
    in?: $Enums.ReputationRank[] | ListEnumReputationRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReputationRank[] | ListEnumReputationRankFieldRefInput<$PrismaModel>
    not?: NestedEnumReputationRankFilter<$PrismaModel> | $Enums.ReputationRank
  }

  export type NestedEnumReputationRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReputationRank | EnumReputationRankFieldRefInput<$PrismaModel>
    in?: $Enums.ReputationRank[] | ListEnumReputationRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReputationRank[] | ListEnumReputationRankFieldRefInput<$PrismaModel>
    not?: NestedEnumReputationRankWithAggregatesFilter<$PrismaModel> | $Enums.ReputationRank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReputationRankFilter<$PrismaModel>
    _max?: NestedEnumReputationRankFilter<$PrismaModel>
  }

  export type NestedEnumReputationEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReputationEventType | EnumReputationEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReputationEventType[] | ListEnumReputationEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReputationEventType[] | ListEnumReputationEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReputationEventTypeFilter<$PrismaModel> | $Enums.ReputationEventType
  }

  export type NestedEnumReputationEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReputationEventType | EnumReputationEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReputationEventType[] | ListEnumReputationEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReputationEventType[] | ListEnumReputationEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReputationEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReputationEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReputationEventTypeFilter<$PrismaModel>
    _max?: NestedEnumReputationEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumActorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeFilter<$PrismaModel> | $Enums.ActorType
  }

  export type NestedEnumRetentionClassFilter<$PrismaModel = never> = {
    equals?: $Enums.RetentionClass | EnumRetentionClassFieldRefInput<$PrismaModel>
    in?: $Enums.RetentionClass[] | ListEnumRetentionClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.RetentionClass[] | ListEnumRetentionClassFieldRefInput<$PrismaModel>
    not?: NestedEnumRetentionClassFilter<$PrismaModel> | $Enums.RetentionClass
  }

  export type NestedEnumSensitivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SensitivityLevel | EnumSensitivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SensitivityLevel[] | ListEnumSensitivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SensitivityLevel[] | ListEnumSensitivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSensitivityLevelFilter<$PrismaModel> | $Enums.SensitivityLevel
  }

  export type NestedEnumActorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActorTypeFilter<$PrismaModel>
    _max?: NestedEnumActorTypeFilter<$PrismaModel>
  }

  export type NestedEnumRetentionClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RetentionClass | EnumRetentionClassFieldRefInput<$PrismaModel>
    in?: $Enums.RetentionClass[] | ListEnumRetentionClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.RetentionClass[] | ListEnumRetentionClassFieldRefInput<$PrismaModel>
    not?: NestedEnumRetentionClassWithAggregatesFilter<$PrismaModel> | $Enums.RetentionClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRetentionClassFilter<$PrismaModel>
    _max?: NestedEnumRetentionClassFilter<$PrismaModel>
  }

  export type NestedEnumSensitivityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SensitivityLevel | EnumSensitivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SensitivityLevel[] | ListEnumSensitivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SensitivityLevel[] | ListEnumSensitivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSensitivityLevelWithAggregatesFilter<$PrismaModel> | $Enums.SensitivityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSensitivityLevelFilter<$PrismaModel>
    _max?: NestedEnumSensitivityLevelFilter<$PrismaModel>
  }

  export type ExpertCreateWithoutCreatedByInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ExpertVersionCreateNestedManyWithoutExpertInput
    debates?: DebateCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyCreateNestedManyWithoutDependentExpertInput
    dependents?: ExpertDependencyCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertUncheckedCreateWithoutCreatedByInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ExpertVersionUncheckedCreateNestedManyWithoutExpertInput
    debates?: DebateUncheckedCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyUncheckedCreateNestedManyWithoutDependentExpertInput
    dependents?: ExpertDependencyUncheckedCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertCreateOrConnectWithoutCreatedByInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutCreatedByInput, ExpertUncheckedCreateWithoutCreatedByInput>
  }

  export type ExpertCreateManyCreatedByInputEnvelope = {
    data: ExpertCreateManyCreatedByInput | ExpertCreateManyCreatedByInput[]
  }

  export type ExpertVersionCreateWithoutCreatedByInput = {
    id?: string
    versionNumber: number
    scope: InputJsonValue
    permissions: InputJsonValue
    logicDefinition: InputJsonValue
    changeReason: string
    createdAt?: Date | string
    accuracyScore?: number
    usageCount?: number
    lastInvokedAt?: Date | string | null
    expert: ExpertCreateNestedOneWithoutVersionsInput
  }

  export type ExpertVersionUncheckedCreateWithoutCreatedByInput = {
    id?: string
    expertId: string
    versionNumber: number
    scope: InputJsonValue
    permissions: InputJsonValue
    logicDefinition: InputJsonValue
    changeReason: string
    createdAt?: Date | string
    accuracyScore?: number
    usageCount?: number
    lastInvokedAt?: Date | string | null
  }

  export type ExpertVersionCreateOrConnectWithoutCreatedByInput = {
    where: ExpertVersionWhereUniqueInput
    create: XOR<ExpertVersionCreateWithoutCreatedByInput, ExpertVersionUncheckedCreateWithoutCreatedByInput>
  }

  export type ExpertVersionCreateManyCreatedByInputEnvelope = {
    data: ExpertVersionCreateManyCreatedByInput | ExpertVersionCreateManyCreatedByInput[]
  }

  export type DebateCreateWithoutCreatedByInput = {
    id?: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
    expert: ExpertCreateNestedOneWithoutDebatesInput
    arguments?: ArgumentCreateNestedManyWithoutDebateInput
  }

  export type DebateUncheckedCreateWithoutCreatedByInput = {
    id?: string
    expertId: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
    arguments?: ArgumentUncheckedCreateNestedManyWithoutDebateInput
  }

  export type DebateCreateOrConnectWithoutCreatedByInput = {
    where: DebateWhereUniqueInput
    create: XOR<DebateCreateWithoutCreatedByInput, DebateUncheckedCreateWithoutCreatedByInput>
  }

  export type DebateCreateManyCreatedByInputEnvelope = {
    data: DebateCreateManyCreatedByInput | DebateCreateManyCreatedByInput[]
  }

  export type ArgumentCreateWithoutCreatedByInput = {
    id?: string
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    debate: DebateCreateNestedOneWithoutArgumentsInput
    parentArgument?: ArgumentCreateNestedOneWithoutChildArgumentsInput
    childArguments?: ArgumentCreateNestedManyWithoutParentArgumentInput
    evidence?: EvidenceCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentUncheckedCreateWithoutCreatedByInput = {
    id?: string
    debateId: string
    parentArgumentId?: string | null
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childArguments?: ArgumentUncheckedCreateNestedManyWithoutParentArgumentInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentCreateOrConnectWithoutCreatedByInput = {
    where: ArgumentWhereUniqueInput
    create: XOR<ArgumentCreateWithoutCreatedByInput, ArgumentUncheckedCreateWithoutCreatedByInput>
  }

  export type ArgumentCreateManyCreatedByInputEnvelope = {
    data: ArgumentCreateManyCreatedByInput | ArgumentCreateManyCreatedByInput[]
  }

  export type ReputationScoreCreateWithoutUserInput = {
    id?: string
    domain: string
    score?: number
    rank?: $Enums.ReputationRank
    evidenceCount?: number
    accuracyRate?: number
    lastActiveAt?: Date | string
    lastCalculatedAt?: Date | string
    history?: ReputationEventCreateNestedManyWithoutReputationScoreInput
  }

  export type ReputationScoreUncheckedCreateWithoutUserInput = {
    id?: string
    domain: string
    score?: number
    rank?: $Enums.ReputationRank
    evidenceCount?: number
    accuracyRate?: number
    lastActiveAt?: Date | string
    lastCalculatedAt?: Date | string
    history?: ReputationEventUncheckedCreateNestedManyWithoutReputationScoreInput
  }

  export type ReputationScoreCreateOrConnectWithoutUserInput = {
    where: ReputationScoreWhereUniqueInput
    create: XOR<ReputationScoreCreateWithoutUserInput, ReputationScoreUncheckedCreateWithoutUserInput>
  }

  export type ReputationScoreCreateManyUserInputEnvelope = {
    data: ReputationScoreCreateManyUserInput | ReputationScoreCreateManyUserInput[]
  }

  export type AuditEventCreateWithoutActorInput = {
    id?: string
    timestamp?: Date | string
    actorType: $Enums.ActorType
    action: string
    resourceType: string
    resourceId?: string | null
    previousState?: InputJsonValue | null
    newState?: InputJsonValue | null
    metadata?: InputJsonValue | null
    ipAddressHash?: string | null
    retentionClass?: $Enums.RetentionClass
    sensitivityLevel?: $Enums.SensitivityLevel
  }

  export type AuditEventUncheckedCreateWithoutActorInput = {
    id?: string
    timestamp?: Date | string
    actorType: $Enums.ActorType
    action: string
    resourceType: string
    resourceId?: string | null
    previousState?: InputJsonValue | null
    newState?: InputJsonValue | null
    metadata?: InputJsonValue | null
    ipAddressHash?: string | null
    retentionClass?: $Enums.RetentionClass
    sensitivityLevel?: $Enums.SensitivityLevel
  }

  export type AuditEventCreateOrConnectWithoutActorInput = {
    where: AuditEventWhereUniqueInput
    create: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput>
  }

  export type AuditEventCreateManyActorInputEnvelope = {
    data: AuditEventCreateManyActorInput | AuditEventCreateManyActorInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type ExpertUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ExpertWhereUniqueInput
    update: XOR<ExpertUpdateWithoutCreatedByInput, ExpertUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ExpertCreateWithoutCreatedByInput, ExpertUncheckedCreateWithoutCreatedByInput>
  }

  export type ExpertUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ExpertWhereUniqueInput
    data: XOR<ExpertUpdateWithoutCreatedByInput, ExpertUncheckedUpdateWithoutCreatedByInput>
  }

  export type ExpertUpdateManyWithWhereWithoutCreatedByInput = {
    where: ExpertScalarWhereInput
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ExpertScalarWhereInput = {
    AND?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
    OR?: ExpertScalarWhereInput[]
    NOT?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
    id?: StringFilter<"Expert"> | string
    slug?: StringFilter<"Expert"> | string
    currentVersionId?: StringNullableFilter<"Expert"> | string | null
    status?: EnumExpertStatusFilter<"Expert"> | $Enums.ExpertStatus
    createdById?: StringFilter<"Expert"> | string
    createdAt?: DateTimeFilter<"Expert"> | Date | string
    updatedAt?: DateTimeFilter<"Expert"> | Date | string
  }

  export type ExpertVersionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ExpertVersionWhereUniqueInput
    update: XOR<ExpertVersionUpdateWithoutCreatedByInput, ExpertVersionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ExpertVersionCreateWithoutCreatedByInput, ExpertVersionUncheckedCreateWithoutCreatedByInput>
  }

  export type ExpertVersionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ExpertVersionWhereUniqueInput
    data: XOR<ExpertVersionUpdateWithoutCreatedByInput, ExpertVersionUncheckedUpdateWithoutCreatedByInput>
  }

  export type ExpertVersionUpdateManyWithWhereWithoutCreatedByInput = {
    where: ExpertVersionScalarWhereInput
    data: XOR<ExpertVersionUpdateManyMutationInput, ExpertVersionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ExpertVersionScalarWhereInput = {
    AND?: ExpertVersionScalarWhereInput | ExpertVersionScalarWhereInput[]
    OR?: ExpertVersionScalarWhereInput[]
    NOT?: ExpertVersionScalarWhereInput | ExpertVersionScalarWhereInput[]
    id?: StringFilter<"ExpertVersion"> | string
    expertId?: StringFilter<"ExpertVersion"> | string
    versionNumber?: IntFilter<"ExpertVersion"> | number
    scope?: JsonFilter<"ExpertVersion">
    permissions?: JsonFilter<"ExpertVersion">
    logicDefinition?: JsonFilter<"ExpertVersion">
    changeReason?: StringFilter<"ExpertVersion"> | string
    createdById?: StringFilter<"ExpertVersion"> | string
    createdAt?: DateTimeFilter<"ExpertVersion"> | Date | string
    accuracyScore?: FloatFilter<"ExpertVersion"> | number
    usageCount?: IntFilter<"ExpertVersion"> | number
    lastInvokedAt?: DateTimeNullableFilter<"ExpertVersion"> | Date | string | null
  }

  export type DebateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DebateWhereUniqueInput
    update: XOR<DebateUpdateWithoutCreatedByInput, DebateUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DebateCreateWithoutCreatedByInput, DebateUncheckedCreateWithoutCreatedByInput>
  }

  export type DebateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DebateWhereUniqueInput
    data: XOR<DebateUpdateWithoutCreatedByInput, DebateUncheckedUpdateWithoutCreatedByInput>
  }

  export type DebateUpdateManyWithWhereWithoutCreatedByInput = {
    where: DebateScalarWhereInput
    data: XOR<DebateUpdateManyMutationInput, DebateUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DebateScalarWhereInput = {
    AND?: DebateScalarWhereInput | DebateScalarWhereInput[]
    OR?: DebateScalarWhereInput[]
    NOT?: DebateScalarWhereInput | DebateScalarWhereInput[]
    id?: StringFilter<"Debate"> | string
    expertId?: StringFilter<"Debate"> | string
    topic?: StringFilter<"Debate"> | string
    description?: StringNullableFilter<"Debate"> | string | null
    status?: EnumDebateStatusFilter<"Debate"> | $Enums.DebateStatus
    resolutionCriteria?: StringFilter<"Debate"> | string
    createdById?: StringFilter<"Debate"> | string
    createdAt?: DateTimeFilter<"Debate"> | Date | string
    updatedAt?: DateTimeFilter<"Debate"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Debate"> | Date | string | null
    outcome?: JsonNullableFilter<"Debate">
  }

  export type ArgumentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ArgumentWhereUniqueInput
    update: XOR<ArgumentUpdateWithoutCreatedByInput, ArgumentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ArgumentCreateWithoutCreatedByInput, ArgumentUncheckedCreateWithoutCreatedByInput>
  }

  export type ArgumentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ArgumentWhereUniqueInput
    data: XOR<ArgumentUpdateWithoutCreatedByInput, ArgumentUncheckedUpdateWithoutCreatedByInput>
  }

  export type ArgumentUpdateManyWithWhereWithoutCreatedByInput = {
    where: ArgumentScalarWhereInput
    data: XOR<ArgumentUpdateManyMutationInput, ArgumentUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ArgumentScalarWhereInput = {
    AND?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
    OR?: ArgumentScalarWhereInput[]
    NOT?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
    id?: StringFilter<"Argument"> | string
    debateId?: StringFilter<"Argument"> | string
    parentArgumentId?: StringNullableFilter<"Argument"> | string | null
    type?: EnumArgumentTypeFilter<"Argument"> | $Enums.ArgumentType
    claim?: StringFilter<"Argument"> | string
    reasoning?: StringFilter<"Argument"> | string
    status?: EnumArgumentStatusFilter<"Argument"> | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFilter<"Argument"> | $Enums.ValidationStatus
    validationReason?: StringNullableFilter<"Argument"> | string | null
    authorReputationAtTime?: FloatFilter<"Argument"> | number
    createdById?: StringFilter<"Argument"> | string
    createdAt?: DateTimeFilter<"Argument"> | Date | string
    updatedAt?: DateTimeFilter<"Argument"> | Date | string
  }

  export type ReputationScoreUpsertWithWhereUniqueWithoutUserInput = {
    where: ReputationScoreWhereUniqueInput
    update: XOR<ReputationScoreUpdateWithoutUserInput, ReputationScoreUncheckedUpdateWithoutUserInput>
    create: XOR<ReputationScoreCreateWithoutUserInput, ReputationScoreUncheckedCreateWithoutUserInput>
  }

  export type ReputationScoreUpdateWithWhereUniqueWithoutUserInput = {
    where: ReputationScoreWhereUniqueInput
    data: XOR<ReputationScoreUpdateWithoutUserInput, ReputationScoreUncheckedUpdateWithoutUserInput>
  }

  export type ReputationScoreUpdateManyWithWhereWithoutUserInput = {
    where: ReputationScoreScalarWhereInput
    data: XOR<ReputationScoreUpdateManyMutationInput, ReputationScoreUncheckedUpdateManyWithoutUserInput>
  }

  export type ReputationScoreScalarWhereInput = {
    AND?: ReputationScoreScalarWhereInput | ReputationScoreScalarWhereInput[]
    OR?: ReputationScoreScalarWhereInput[]
    NOT?: ReputationScoreScalarWhereInput | ReputationScoreScalarWhereInput[]
    id?: StringFilter<"ReputationScore"> | string
    userId?: StringFilter<"ReputationScore"> | string
    domain?: StringFilter<"ReputationScore"> | string
    score?: FloatFilter<"ReputationScore"> | number
    rank?: EnumReputationRankFilter<"ReputationScore"> | $Enums.ReputationRank
    evidenceCount?: IntFilter<"ReputationScore"> | number
    accuracyRate?: FloatFilter<"ReputationScore"> | number
    lastActiveAt?: DateTimeFilter<"ReputationScore"> | Date | string
    lastCalculatedAt?: DateTimeFilter<"ReputationScore"> | Date | string
  }

  export type AuditEventUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditEventWhereUniqueInput
    update: XOR<AuditEventUpdateWithoutActorInput, AuditEventUncheckedUpdateWithoutActorInput>
    create: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput>
  }

  export type AuditEventUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditEventWhereUniqueInput
    data: XOR<AuditEventUpdateWithoutActorInput, AuditEventUncheckedUpdateWithoutActorInput>
  }

  export type AuditEventUpdateManyWithWhereWithoutActorInput = {
    where: AuditEventScalarWhereInput
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditEventScalarWhereInput = {
    AND?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    OR?: AuditEventScalarWhereInput[]
    NOT?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    timestamp?: DateTimeFilter<"AuditEvent"> | Date | string
    actorId?: StringNullableFilter<"AuditEvent"> | string | null
    actorType?: EnumActorTypeFilter<"AuditEvent"> | $Enums.ActorType
    action?: StringFilter<"AuditEvent"> | string
    resourceType?: StringFilter<"AuditEvent"> | string
    resourceId?: StringNullableFilter<"AuditEvent"> | string | null
    previousState?: JsonNullableFilter<"AuditEvent">
    newState?: JsonNullableFilter<"AuditEvent">
    metadata?: JsonNullableFilter<"AuditEvent">
    ipAddressHash?: StringNullableFilter<"AuditEvent"> | string | null
    retentionClass?: EnumRetentionClassFilter<"AuditEvent"> | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFilter<"AuditEvent"> | $Enums.SensitivityLevel
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionCreateNestedManyWithoutCreatedByInput
    debates?: DebateCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertUncheckedCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionUncheckedCreateNestedManyWithoutCreatedByInput
    debates?: DebateUncheckedCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreUncheckedCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUncheckedUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUncheckedUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUncheckedUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUncheckedUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutExpertsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    expertVersions?: ExpertVersionCreateNestedManyWithoutCreatedByInput
    debates?: DebateCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExpertsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    expertVersions?: ExpertVersionUncheckedCreateNestedManyWithoutCreatedByInput
    debates?: DebateUncheckedCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreUncheckedCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpertsInput, UserUncheckedCreateWithoutExpertsInput>
  }

  export type ExpertVersionCreateWithoutExpertInput = {
    id?: string
    versionNumber: number
    scope: InputJsonValue
    permissions: InputJsonValue
    logicDefinition: InputJsonValue
    changeReason: string
    createdAt?: Date | string
    accuracyScore?: number
    usageCount?: number
    lastInvokedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutExpertVersionsInput
  }

  export type ExpertVersionUncheckedCreateWithoutExpertInput = {
    id?: string
    versionNumber: number
    scope: InputJsonValue
    permissions: InputJsonValue
    logicDefinition: InputJsonValue
    changeReason: string
    createdById: string
    createdAt?: Date | string
    accuracyScore?: number
    usageCount?: number
    lastInvokedAt?: Date | string | null
  }

  export type ExpertVersionCreateOrConnectWithoutExpertInput = {
    where: ExpertVersionWhereUniqueInput
    create: XOR<ExpertVersionCreateWithoutExpertInput, ExpertVersionUncheckedCreateWithoutExpertInput>
  }

  export type ExpertVersionCreateManyExpertInputEnvelope = {
    data: ExpertVersionCreateManyExpertInput | ExpertVersionCreateManyExpertInput[]
  }

  export type DebateCreateWithoutExpertInput = {
    id?: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
    createdBy: UserCreateNestedOneWithoutDebatesInput
    arguments?: ArgumentCreateNestedManyWithoutDebateInput
  }

  export type DebateUncheckedCreateWithoutExpertInput = {
    id?: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
    arguments?: ArgumentUncheckedCreateNestedManyWithoutDebateInput
  }

  export type DebateCreateOrConnectWithoutExpertInput = {
    where: DebateWhereUniqueInput
    create: XOR<DebateCreateWithoutExpertInput, DebateUncheckedCreateWithoutExpertInput>
  }

  export type DebateCreateManyExpertInputEnvelope = {
    data: DebateCreateManyExpertInput | DebateCreateManyExpertInput[]
  }

  export type ExpertDependencyCreateWithoutDependentExpertInput = {
    id?: string
    dependencyType?: $Enums.DependencyType
    createdAt?: Date | string
    requiredExpert: ExpertCreateNestedOneWithoutDependentsInput
  }

  export type ExpertDependencyUncheckedCreateWithoutDependentExpertInput = {
    id?: string
    requiredExpertId: string
    dependencyType?: $Enums.DependencyType
    createdAt?: Date | string
  }

  export type ExpertDependencyCreateOrConnectWithoutDependentExpertInput = {
    where: ExpertDependencyWhereUniqueInput
    create: XOR<ExpertDependencyCreateWithoutDependentExpertInput, ExpertDependencyUncheckedCreateWithoutDependentExpertInput>
  }

  export type ExpertDependencyCreateManyDependentExpertInputEnvelope = {
    data: ExpertDependencyCreateManyDependentExpertInput | ExpertDependencyCreateManyDependentExpertInput[]
  }

  export type ExpertDependencyCreateWithoutRequiredExpertInput = {
    id?: string
    dependencyType?: $Enums.DependencyType
    createdAt?: Date | string
    dependentExpert: ExpertCreateNestedOneWithoutDependenciesInput
  }

  export type ExpertDependencyUncheckedCreateWithoutRequiredExpertInput = {
    id?: string
    dependentExpertId: string
    dependencyType?: $Enums.DependencyType
    createdAt?: Date | string
  }

  export type ExpertDependencyCreateOrConnectWithoutRequiredExpertInput = {
    where: ExpertDependencyWhereUniqueInput
    create: XOR<ExpertDependencyCreateWithoutRequiredExpertInput, ExpertDependencyUncheckedCreateWithoutRequiredExpertInput>
  }

  export type ExpertDependencyCreateManyRequiredExpertInputEnvelope = {
    data: ExpertDependencyCreateManyRequiredExpertInput | ExpertDependencyCreateManyRequiredExpertInput[]
  }

  export type UserUpsertWithoutExpertsInput = {
    update: XOR<UserUpdateWithoutExpertsInput, UserUncheckedUpdateWithoutExpertsInput>
    create: XOR<UserCreateWithoutExpertsInput, UserUncheckedCreateWithoutExpertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpertsInput, UserUncheckedUpdateWithoutExpertsInput>
  }

  export type UserUpdateWithoutExpertsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expertVersions?: ExpertVersionUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpertsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expertVersions?: ExpertVersionUncheckedUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUncheckedUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUncheckedUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpertVersionUpsertWithWhereUniqueWithoutExpertInput = {
    where: ExpertVersionWhereUniqueInput
    update: XOR<ExpertVersionUpdateWithoutExpertInput, ExpertVersionUncheckedUpdateWithoutExpertInput>
    create: XOR<ExpertVersionCreateWithoutExpertInput, ExpertVersionUncheckedCreateWithoutExpertInput>
  }

  export type ExpertVersionUpdateWithWhereUniqueWithoutExpertInput = {
    where: ExpertVersionWhereUniqueInput
    data: XOR<ExpertVersionUpdateWithoutExpertInput, ExpertVersionUncheckedUpdateWithoutExpertInput>
  }

  export type ExpertVersionUpdateManyWithWhereWithoutExpertInput = {
    where: ExpertVersionScalarWhereInput
    data: XOR<ExpertVersionUpdateManyMutationInput, ExpertVersionUncheckedUpdateManyWithoutExpertInput>
  }

  export type DebateUpsertWithWhereUniqueWithoutExpertInput = {
    where: DebateWhereUniqueInput
    update: XOR<DebateUpdateWithoutExpertInput, DebateUncheckedUpdateWithoutExpertInput>
    create: XOR<DebateCreateWithoutExpertInput, DebateUncheckedCreateWithoutExpertInput>
  }

  export type DebateUpdateWithWhereUniqueWithoutExpertInput = {
    where: DebateWhereUniqueInput
    data: XOR<DebateUpdateWithoutExpertInput, DebateUncheckedUpdateWithoutExpertInput>
  }

  export type DebateUpdateManyWithWhereWithoutExpertInput = {
    where: DebateScalarWhereInput
    data: XOR<DebateUpdateManyMutationInput, DebateUncheckedUpdateManyWithoutExpertInput>
  }

  export type ExpertDependencyUpsertWithWhereUniqueWithoutDependentExpertInput = {
    where: ExpertDependencyWhereUniqueInput
    update: XOR<ExpertDependencyUpdateWithoutDependentExpertInput, ExpertDependencyUncheckedUpdateWithoutDependentExpertInput>
    create: XOR<ExpertDependencyCreateWithoutDependentExpertInput, ExpertDependencyUncheckedCreateWithoutDependentExpertInput>
  }

  export type ExpertDependencyUpdateWithWhereUniqueWithoutDependentExpertInput = {
    where: ExpertDependencyWhereUniqueInput
    data: XOR<ExpertDependencyUpdateWithoutDependentExpertInput, ExpertDependencyUncheckedUpdateWithoutDependentExpertInput>
  }

  export type ExpertDependencyUpdateManyWithWhereWithoutDependentExpertInput = {
    where: ExpertDependencyScalarWhereInput
    data: XOR<ExpertDependencyUpdateManyMutationInput, ExpertDependencyUncheckedUpdateManyWithoutDependentExpertInput>
  }

  export type ExpertDependencyScalarWhereInput = {
    AND?: ExpertDependencyScalarWhereInput | ExpertDependencyScalarWhereInput[]
    OR?: ExpertDependencyScalarWhereInput[]
    NOT?: ExpertDependencyScalarWhereInput | ExpertDependencyScalarWhereInput[]
    id?: StringFilter<"ExpertDependency"> | string
    dependentExpertId?: StringFilter<"ExpertDependency"> | string
    requiredExpertId?: StringFilter<"ExpertDependency"> | string
    dependencyType?: EnumDependencyTypeFilter<"ExpertDependency"> | $Enums.DependencyType
    createdAt?: DateTimeFilter<"ExpertDependency"> | Date | string
  }

  export type ExpertDependencyUpsertWithWhereUniqueWithoutRequiredExpertInput = {
    where: ExpertDependencyWhereUniqueInput
    update: XOR<ExpertDependencyUpdateWithoutRequiredExpertInput, ExpertDependencyUncheckedUpdateWithoutRequiredExpertInput>
    create: XOR<ExpertDependencyCreateWithoutRequiredExpertInput, ExpertDependencyUncheckedCreateWithoutRequiredExpertInput>
  }

  export type ExpertDependencyUpdateWithWhereUniqueWithoutRequiredExpertInput = {
    where: ExpertDependencyWhereUniqueInput
    data: XOR<ExpertDependencyUpdateWithoutRequiredExpertInput, ExpertDependencyUncheckedUpdateWithoutRequiredExpertInput>
  }

  export type ExpertDependencyUpdateManyWithWhereWithoutRequiredExpertInput = {
    where: ExpertDependencyScalarWhereInput
    data: XOR<ExpertDependencyUpdateManyMutationInput, ExpertDependencyUncheckedUpdateManyWithoutRequiredExpertInput>
  }

  export type ExpertCreateWithoutVersionsInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutExpertsInput
    debates?: DebateCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyCreateNestedManyWithoutDependentExpertInput
    dependents?: ExpertDependencyCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertUncheckedCreateWithoutVersionsInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    debates?: DebateUncheckedCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyUncheckedCreateNestedManyWithoutDependentExpertInput
    dependents?: ExpertDependencyUncheckedCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertCreateOrConnectWithoutVersionsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutVersionsInput, ExpertUncheckedCreateWithoutVersionsInput>
  }

  export type UserCreateWithoutExpertVersionsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertCreateNestedManyWithoutCreatedByInput
    debates?: DebateCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExpertVersionsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertUncheckedCreateNestedManyWithoutCreatedByInput
    debates?: DebateUncheckedCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreUncheckedCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpertVersionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpertVersionsInput, UserUncheckedCreateWithoutExpertVersionsInput>
  }

  export type ExpertUpsertWithoutVersionsInput = {
    update: XOR<ExpertUpdateWithoutVersionsInput, ExpertUncheckedUpdateWithoutVersionsInput>
    create: XOR<ExpertCreateWithoutVersionsInput, ExpertUncheckedCreateWithoutVersionsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutVersionsInput, ExpertUncheckedUpdateWithoutVersionsInput>
  }

  export type ExpertUpdateWithoutVersionsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutExpertsNestedInput
    debates?: DebateUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUpdateManyWithoutDependentExpertNestedInput
    dependents?: ExpertDependencyUpdateManyWithoutRequiredExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutVersionsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debates?: DebateUncheckedUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUncheckedUpdateManyWithoutDependentExpertNestedInput
    dependents?: ExpertDependencyUncheckedUpdateManyWithoutRequiredExpertNestedInput
  }

  export type UserUpsertWithoutExpertVersionsInput = {
    update: XOR<UserUpdateWithoutExpertVersionsInput, UserUncheckedUpdateWithoutExpertVersionsInput>
    create: XOR<UserCreateWithoutExpertVersionsInput, UserUncheckedCreateWithoutExpertVersionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpertVersionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpertVersionsInput, UserUncheckedUpdateWithoutExpertVersionsInput>
  }

  export type UserUpdateWithoutExpertVersionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpertVersionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUncheckedUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUncheckedUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUncheckedUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpertCreateWithoutDependenciesInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutExpertsInput
    versions?: ExpertVersionCreateNestedManyWithoutExpertInput
    debates?: DebateCreateNestedManyWithoutExpertInput
    dependents?: ExpertDependencyCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertUncheckedCreateWithoutDependenciesInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ExpertVersionUncheckedCreateNestedManyWithoutExpertInput
    debates?: DebateUncheckedCreateNestedManyWithoutExpertInput
    dependents?: ExpertDependencyUncheckedCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertCreateOrConnectWithoutDependenciesInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutDependenciesInput, ExpertUncheckedCreateWithoutDependenciesInput>
  }

  export type ExpertCreateWithoutDependentsInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutExpertsInput
    versions?: ExpertVersionCreateNestedManyWithoutExpertInput
    debates?: DebateCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyCreateNestedManyWithoutDependentExpertInput
  }

  export type ExpertUncheckedCreateWithoutDependentsInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ExpertVersionUncheckedCreateNestedManyWithoutExpertInput
    debates?: DebateUncheckedCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyUncheckedCreateNestedManyWithoutDependentExpertInput
  }

  export type ExpertCreateOrConnectWithoutDependentsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutDependentsInput, ExpertUncheckedCreateWithoutDependentsInput>
  }

  export type ExpertUpsertWithoutDependenciesInput = {
    update: XOR<ExpertUpdateWithoutDependenciesInput, ExpertUncheckedUpdateWithoutDependenciesInput>
    create: XOR<ExpertCreateWithoutDependenciesInput, ExpertUncheckedCreateWithoutDependenciesInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutDependenciesInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutDependenciesInput, ExpertUncheckedUpdateWithoutDependenciesInput>
  }

  export type ExpertUpdateWithoutDependenciesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutExpertsNestedInput
    versions?: ExpertVersionUpdateManyWithoutExpertNestedInput
    debates?: DebateUpdateManyWithoutExpertNestedInput
    dependents?: ExpertDependencyUpdateManyWithoutRequiredExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutDependenciesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ExpertVersionUncheckedUpdateManyWithoutExpertNestedInput
    debates?: DebateUncheckedUpdateManyWithoutExpertNestedInput
    dependents?: ExpertDependencyUncheckedUpdateManyWithoutRequiredExpertNestedInput
  }

  export type ExpertUpsertWithoutDependentsInput = {
    update: XOR<ExpertUpdateWithoutDependentsInput, ExpertUncheckedUpdateWithoutDependentsInput>
    create: XOR<ExpertCreateWithoutDependentsInput, ExpertUncheckedCreateWithoutDependentsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutDependentsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutDependentsInput, ExpertUncheckedUpdateWithoutDependentsInput>
  }

  export type ExpertUpdateWithoutDependentsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutExpertsNestedInput
    versions?: ExpertVersionUpdateManyWithoutExpertNestedInput
    debates?: DebateUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUpdateManyWithoutDependentExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutDependentsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ExpertVersionUncheckedUpdateManyWithoutExpertNestedInput
    debates?: DebateUncheckedUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUncheckedUpdateManyWithoutDependentExpertNestedInput
  }

  export type ExpertCreateWithoutDebatesInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutExpertsInput
    versions?: ExpertVersionCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyCreateNestedManyWithoutDependentExpertInput
    dependents?: ExpertDependencyCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertUncheckedCreateWithoutDebatesInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ExpertVersionUncheckedCreateNestedManyWithoutExpertInput
    dependencies?: ExpertDependencyUncheckedCreateNestedManyWithoutDependentExpertInput
    dependents?: ExpertDependencyUncheckedCreateNestedManyWithoutRequiredExpertInput
  }

  export type ExpertCreateOrConnectWithoutDebatesInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutDebatesInput, ExpertUncheckedCreateWithoutDebatesInput>
  }

  export type UserCreateWithoutDebatesInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDebatesInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertUncheckedCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionUncheckedCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreUncheckedCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDebatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDebatesInput, UserUncheckedCreateWithoutDebatesInput>
  }

  export type ArgumentCreateWithoutDebateInput = {
    id?: string
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentArgument?: ArgumentCreateNestedOneWithoutChildArgumentsInput
    childArguments?: ArgumentCreateNestedManyWithoutParentArgumentInput
    createdBy: UserCreateNestedOneWithoutArgumentsInput
    evidence?: EvidenceCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentUncheckedCreateWithoutDebateInput = {
    id?: string
    parentArgumentId?: string | null
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    childArguments?: ArgumentUncheckedCreateNestedManyWithoutParentArgumentInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentCreateOrConnectWithoutDebateInput = {
    where: ArgumentWhereUniqueInput
    create: XOR<ArgumentCreateWithoutDebateInput, ArgumentUncheckedCreateWithoutDebateInput>
  }

  export type ArgumentCreateManyDebateInputEnvelope = {
    data: ArgumentCreateManyDebateInput | ArgumentCreateManyDebateInput[]
  }

  export type ExpertUpsertWithoutDebatesInput = {
    update: XOR<ExpertUpdateWithoutDebatesInput, ExpertUncheckedUpdateWithoutDebatesInput>
    create: XOR<ExpertCreateWithoutDebatesInput, ExpertUncheckedCreateWithoutDebatesInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutDebatesInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutDebatesInput, ExpertUncheckedUpdateWithoutDebatesInput>
  }

  export type ExpertUpdateWithoutDebatesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutExpertsNestedInput
    versions?: ExpertVersionUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUpdateManyWithoutDependentExpertNestedInput
    dependents?: ExpertDependencyUpdateManyWithoutRequiredExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutDebatesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ExpertVersionUncheckedUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUncheckedUpdateManyWithoutDependentExpertNestedInput
    dependents?: ExpertDependencyUncheckedUpdateManyWithoutRequiredExpertNestedInput
  }

  export type UserUpsertWithoutDebatesInput = {
    update: XOR<UserUpdateWithoutDebatesInput, UserUncheckedUpdateWithoutDebatesInput>
    create: XOR<UserCreateWithoutDebatesInput, UserUncheckedCreateWithoutDebatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDebatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDebatesInput, UserUncheckedUpdateWithoutDebatesInput>
  }

  export type UserUpdateWithoutDebatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDebatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUncheckedUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUncheckedUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUncheckedUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArgumentUpsertWithWhereUniqueWithoutDebateInput = {
    where: ArgumentWhereUniqueInput
    update: XOR<ArgumentUpdateWithoutDebateInput, ArgumentUncheckedUpdateWithoutDebateInput>
    create: XOR<ArgumentCreateWithoutDebateInput, ArgumentUncheckedCreateWithoutDebateInput>
  }

  export type ArgumentUpdateWithWhereUniqueWithoutDebateInput = {
    where: ArgumentWhereUniqueInput
    data: XOR<ArgumentUpdateWithoutDebateInput, ArgumentUncheckedUpdateWithoutDebateInput>
  }

  export type ArgumentUpdateManyWithWhereWithoutDebateInput = {
    where: ArgumentScalarWhereInput
    data: XOR<ArgumentUpdateManyMutationInput, ArgumentUncheckedUpdateManyWithoutDebateInput>
  }

  export type DebateCreateWithoutArgumentsInput = {
    id?: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
    expert: ExpertCreateNestedOneWithoutDebatesInput
    createdBy: UserCreateNestedOneWithoutDebatesInput
  }

  export type DebateUncheckedCreateWithoutArgumentsInput = {
    id?: string
    expertId: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
  }

  export type DebateCreateOrConnectWithoutArgumentsInput = {
    where: DebateWhereUniqueInput
    create: XOR<DebateCreateWithoutArgumentsInput, DebateUncheckedCreateWithoutArgumentsInput>
  }

  export type ArgumentCreateWithoutChildArgumentsInput = {
    id?: string
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    debate: DebateCreateNestedOneWithoutArgumentsInput
    parentArgument?: ArgumentCreateNestedOneWithoutChildArgumentsInput
    createdBy: UserCreateNestedOneWithoutArgumentsInput
    evidence?: EvidenceCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentUncheckedCreateWithoutChildArgumentsInput = {
    id?: string
    debateId: string
    parentArgumentId?: string | null
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: EvidenceUncheckedCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentCreateOrConnectWithoutChildArgumentsInput = {
    where: ArgumentWhereUniqueInput
    create: XOR<ArgumentCreateWithoutChildArgumentsInput, ArgumentUncheckedCreateWithoutChildArgumentsInput>
  }

  export type ArgumentCreateWithoutParentArgumentInput = {
    id?: string
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    debate: DebateCreateNestedOneWithoutArgumentsInput
    childArguments?: ArgumentCreateNestedManyWithoutParentArgumentInput
    createdBy: UserCreateNestedOneWithoutArgumentsInput
    evidence?: EvidenceCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentUncheckedCreateWithoutParentArgumentInput = {
    id?: string
    debateId: string
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    childArguments?: ArgumentUncheckedCreateNestedManyWithoutParentArgumentInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutArgumentInput
  }

  export type ArgumentCreateOrConnectWithoutParentArgumentInput = {
    where: ArgumentWhereUniqueInput
    create: XOR<ArgumentCreateWithoutParentArgumentInput, ArgumentUncheckedCreateWithoutParentArgumentInput>
  }

  export type ArgumentCreateManyParentArgumentInputEnvelope = {
    data: ArgumentCreateManyParentArgumentInput | ArgumentCreateManyParentArgumentInput[]
  }

  export type UserCreateWithoutArgumentsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionCreateNestedManyWithoutCreatedByInput
    debates?: DebateCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArgumentsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertUncheckedCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionUncheckedCreateNestedManyWithoutCreatedByInput
    debates?: DebateUncheckedCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreUncheckedCreateNestedManyWithoutUserInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArgumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArgumentsInput, UserUncheckedCreateWithoutArgumentsInput>
  }

  export type EvidenceCreateWithoutArgumentInput = {
    id?: string
    type: $Enums.EvidenceType
    content: string
    sourceUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
  }

  export type EvidenceUncheckedCreateWithoutArgumentInput = {
    id?: string
    type: $Enums.EvidenceType
    content: string
    sourceUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
  }

  export type EvidenceCreateOrConnectWithoutArgumentInput = {
    where: EvidenceWhereUniqueInput
    create: XOR<EvidenceCreateWithoutArgumentInput, EvidenceUncheckedCreateWithoutArgumentInput>
  }

  export type EvidenceCreateManyArgumentInputEnvelope = {
    data: EvidenceCreateManyArgumentInput | EvidenceCreateManyArgumentInput[]
  }

  export type DebateUpsertWithoutArgumentsInput = {
    update: XOR<DebateUpdateWithoutArgumentsInput, DebateUncheckedUpdateWithoutArgumentsInput>
    create: XOR<DebateCreateWithoutArgumentsInput, DebateUncheckedCreateWithoutArgumentsInput>
    where?: DebateWhereInput
  }

  export type DebateUpdateToOneWithWhereWithoutArgumentsInput = {
    where?: DebateWhereInput
    data: XOR<DebateUpdateWithoutArgumentsInput, DebateUncheckedUpdateWithoutArgumentsInput>
  }

  export type DebateUpdateWithoutArgumentsInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
    expert?: ExpertUpdateOneRequiredWithoutDebatesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDebatesNestedInput
  }

  export type DebateUncheckedUpdateWithoutArgumentsInput = {
    expertId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
  }

  export type ArgumentUpsertWithoutChildArgumentsInput = {
    update: XOR<ArgumentUpdateWithoutChildArgumentsInput, ArgumentUncheckedUpdateWithoutChildArgumentsInput>
    create: XOR<ArgumentCreateWithoutChildArgumentsInput, ArgumentUncheckedCreateWithoutChildArgumentsInput>
    where?: ArgumentWhereInput
  }

  export type ArgumentUpdateToOneWithWhereWithoutChildArgumentsInput = {
    where?: ArgumentWhereInput
    data: XOR<ArgumentUpdateWithoutChildArgumentsInput, ArgumentUncheckedUpdateWithoutChildArgumentsInput>
  }

  export type ArgumentUpdateWithoutChildArgumentsInput = {
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debate?: DebateUpdateOneRequiredWithoutArgumentsNestedInput
    parentArgument?: ArgumentUpdateOneWithoutChildArgumentsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutArgumentsNestedInput
    evidence?: EvidenceUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentUncheckedUpdateWithoutChildArgumentsInput = {
    debateId?: StringFieldUpdateOperationsInput | string
    parentArgumentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: EvidenceUncheckedUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentUpsertWithWhereUniqueWithoutParentArgumentInput = {
    where: ArgumentWhereUniqueInput
    update: XOR<ArgumentUpdateWithoutParentArgumentInput, ArgumentUncheckedUpdateWithoutParentArgumentInput>
    create: XOR<ArgumentCreateWithoutParentArgumentInput, ArgumentUncheckedCreateWithoutParentArgumentInput>
  }

  export type ArgumentUpdateWithWhereUniqueWithoutParentArgumentInput = {
    where: ArgumentWhereUniqueInput
    data: XOR<ArgumentUpdateWithoutParentArgumentInput, ArgumentUncheckedUpdateWithoutParentArgumentInput>
  }

  export type ArgumentUpdateManyWithWhereWithoutParentArgumentInput = {
    where: ArgumentScalarWhereInput
    data: XOR<ArgumentUpdateManyMutationInput, ArgumentUncheckedUpdateManyWithoutParentArgumentInput>
  }

  export type UserUpsertWithoutArgumentsInput = {
    update: XOR<UserUpdateWithoutArgumentsInput, UserUncheckedUpdateWithoutArgumentsInput>
    create: XOR<UserCreateWithoutArgumentsInput, UserUncheckedCreateWithoutArgumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArgumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArgumentsInput, UserUncheckedUpdateWithoutArgumentsInput>
  }

  export type UserUpdateWithoutArgumentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArgumentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUncheckedUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUncheckedUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUncheckedUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUncheckedUpdateManyWithoutUserNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EvidenceUpsertWithWhereUniqueWithoutArgumentInput = {
    where: EvidenceWhereUniqueInput
    update: XOR<EvidenceUpdateWithoutArgumentInput, EvidenceUncheckedUpdateWithoutArgumentInput>
    create: XOR<EvidenceCreateWithoutArgumentInput, EvidenceUncheckedCreateWithoutArgumentInput>
  }

  export type EvidenceUpdateWithWhereUniqueWithoutArgumentInput = {
    where: EvidenceWhereUniqueInput
    data: XOR<EvidenceUpdateWithoutArgumentInput, EvidenceUncheckedUpdateWithoutArgumentInput>
  }

  export type EvidenceUpdateManyWithWhereWithoutArgumentInput = {
    where: EvidenceScalarWhereInput
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyWithoutArgumentInput>
  }

  export type EvidenceScalarWhereInput = {
    AND?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    OR?: EvidenceScalarWhereInput[]
    NOT?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    id?: StringFilter<"Evidence"> | string
    argumentId?: StringFilter<"Evidence"> | string
    type?: EnumEvidenceTypeFilter<"Evidence"> | $Enums.EvidenceType
    content?: StringFilter<"Evidence"> | string
    sourceUrl?: StringNullableFilter<"Evidence"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"Evidence"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"Evidence"> | Date | string
  }

  export type ArgumentCreateWithoutEvidenceInput = {
    id?: string
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    debate: DebateCreateNestedOneWithoutArgumentsInput
    parentArgument?: ArgumentCreateNestedOneWithoutChildArgumentsInput
    childArguments?: ArgumentCreateNestedManyWithoutParentArgumentInput
    createdBy: UserCreateNestedOneWithoutArgumentsInput
  }

  export type ArgumentUncheckedCreateWithoutEvidenceInput = {
    id?: string
    debateId: string
    parentArgumentId?: string | null
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    childArguments?: ArgumentUncheckedCreateNestedManyWithoutParentArgumentInput
  }

  export type ArgumentCreateOrConnectWithoutEvidenceInput = {
    where: ArgumentWhereUniqueInput
    create: XOR<ArgumentCreateWithoutEvidenceInput, ArgumentUncheckedCreateWithoutEvidenceInput>
  }

  export type ArgumentUpsertWithoutEvidenceInput = {
    update: XOR<ArgumentUpdateWithoutEvidenceInput, ArgumentUncheckedUpdateWithoutEvidenceInput>
    create: XOR<ArgumentCreateWithoutEvidenceInput, ArgumentUncheckedCreateWithoutEvidenceInput>
    where?: ArgumentWhereInput
  }

  export type ArgumentUpdateToOneWithWhereWithoutEvidenceInput = {
    where?: ArgumentWhereInput
    data: XOR<ArgumentUpdateWithoutEvidenceInput, ArgumentUncheckedUpdateWithoutEvidenceInput>
  }

  export type ArgumentUpdateWithoutEvidenceInput = {
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debate?: DebateUpdateOneRequiredWithoutArgumentsNestedInput
    parentArgument?: ArgumentUpdateOneWithoutChildArgumentsNestedInput
    childArguments?: ArgumentUpdateManyWithoutParentArgumentNestedInput
    createdBy?: UserUpdateOneRequiredWithoutArgumentsNestedInput
  }

  export type ArgumentUncheckedUpdateWithoutEvidenceInput = {
    debateId?: StringFieldUpdateOperationsInput | string
    parentArgumentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childArguments?: ArgumentUncheckedUpdateManyWithoutParentArgumentNestedInput
  }

  export type UserCreateWithoutReputationScoresInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionCreateNestedManyWithoutCreatedByInput
    debates?: DebateCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentCreateNestedManyWithoutCreatedByInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReputationScoresInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertUncheckedCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionUncheckedCreateNestedManyWithoutCreatedByInput
    debates?: DebateUncheckedCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutCreatedByInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReputationScoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReputationScoresInput, UserUncheckedCreateWithoutReputationScoresInput>
  }

  export type ReputationEventCreateWithoutReputationScoreInput = {
    id?: string
    type: $Enums.ReputationEventType
    delta: number
    reason: string
    relatedEntityType?: string | null
    relatedEntityId?: string | null
    createdAt?: Date | string
  }

  export type ReputationEventUncheckedCreateWithoutReputationScoreInput = {
    id?: string
    type: $Enums.ReputationEventType
    delta: number
    reason: string
    relatedEntityType?: string | null
    relatedEntityId?: string | null
    createdAt?: Date | string
  }

  export type ReputationEventCreateOrConnectWithoutReputationScoreInput = {
    where: ReputationEventWhereUniqueInput
    create: XOR<ReputationEventCreateWithoutReputationScoreInput, ReputationEventUncheckedCreateWithoutReputationScoreInput>
  }

  export type ReputationEventCreateManyReputationScoreInputEnvelope = {
    data: ReputationEventCreateManyReputationScoreInput | ReputationEventCreateManyReputationScoreInput[]
  }

  export type UserUpsertWithoutReputationScoresInput = {
    update: XOR<UserUpdateWithoutReputationScoresInput, UserUncheckedUpdateWithoutReputationScoresInput>
    create: XOR<UserCreateWithoutReputationScoresInput, UserUncheckedCreateWithoutReputationScoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReputationScoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReputationScoresInput, UserUncheckedUpdateWithoutReputationScoresInput>
  }

  export type UserUpdateWithoutReputationScoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUpdateManyWithoutCreatedByNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReputationScoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUncheckedUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUncheckedUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUncheckedUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutCreatedByNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReputationEventUpsertWithWhereUniqueWithoutReputationScoreInput = {
    where: ReputationEventWhereUniqueInput
    update: XOR<ReputationEventUpdateWithoutReputationScoreInput, ReputationEventUncheckedUpdateWithoutReputationScoreInput>
    create: XOR<ReputationEventCreateWithoutReputationScoreInput, ReputationEventUncheckedCreateWithoutReputationScoreInput>
  }

  export type ReputationEventUpdateWithWhereUniqueWithoutReputationScoreInput = {
    where: ReputationEventWhereUniqueInput
    data: XOR<ReputationEventUpdateWithoutReputationScoreInput, ReputationEventUncheckedUpdateWithoutReputationScoreInput>
  }

  export type ReputationEventUpdateManyWithWhereWithoutReputationScoreInput = {
    where: ReputationEventScalarWhereInput
    data: XOR<ReputationEventUpdateManyMutationInput, ReputationEventUncheckedUpdateManyWithoutReputationScoreInput>
  }

  export type ReputationEventScalarWhereInput = {
    AND?: ReputationEventScalarWhereInput | ReputationEventScalarWhereInput[]
    OR?: ReputationEventScalarWhereInput[]
    NOT?: ReputationEventScalarWhereInput | ReputationEventScalarWhereInput[]
    id?: StringFilter<"ReputationEvent"> | string
    reputationScoreId?: StringFilter<"ReputationEvent"> | string
    type?: EnumReputationEventTypeFilter<"ReputationEvent"> | $Enums.ReputationEventType
    delta?: FloatFilter<"ReputationEvent"> | number
    reason?: StringFilter<"ReputationEvent"> | string
    relatedEntityType?: StringNullableFilter<"ReputationEvent"> | string | null
    relatedEntityId?: StringNullableFilter<"ReputationEvent"> | string | null
    createdAt?: DateTimeFilter<"ReputationEvent"> | Date | string
  }

  export type ReputationScoreCreateWithoutHistoryInput = {
    id?: string
    domain: string
    score?: number
    rank?: $Enums.ReputationRank
    evidenceCount?: number
    accuracyRate?: number
    lastActiveAt?: Date | string
    lastCalculatedAt?: Date | string
    user: UserCreateNestedOneWithoutReputationScoresInput
  }

  export type ReputationScoreUncheckedCreateWithoutHistoryInput = {
    id?: string
    userId: string
    domain: string
    score?: number
    rank?: $Enums.ReputationRank
    evidenceCount?: number
    accuracyRate?: number
    lastActiveAt?: Date | string
    lastCalculatedAt?: Date | string
  }

  export type ReputationScoreCreateOrConnectWithoutHistoryInput = {
    where: ReputationScoreWhereUniqueInput
    create: XOR<ReputationScoreCreateWithoutHistoryInput, ReputationScoreUncheckedCreateWithoutHistoryInput>
  }

  export type ReputationScoreUpsertWithoutHistoryInput = {
    update: XOR<ReputationScoreUpdateWithoutHistoryInput, ReputationScoreUncheckedUpdateWithoutHistoryInput>
    create: XOR<ReputationScoreCreateWithoutHistoryInput, ReputationScoreUncheckedCreateWithoutHistoryInput>
    where?: ReputationScoreWhereInput
  }

  export type ReputationScoreUpdateToOneWithWhereWithoutHistoryInput = {
    where?: ReputationScoreWhereInput
    data: XOR<ReputationScoreUpdateWithoutHistoryInput, ReputationScoreUncheckedUpdateWithoutHistoryInput>
  }

  export type ReputationScoreUpdateWithoutHistoryInput = {
    domain?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    rank?: EnumReputationRankFieldUpdateOperationsInput | $Enums.ReputationRank
    evidenceCount?: IntFieldUpdateOperationsInput | number
    accuracyRate?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReputationScoresNestedInput
  }

  export type ReputationScoreUncheckedUpdateWithoutHistoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    rank?: EnumReputationRankFieldUpdateOperationsInput | $Enums.ReputationRank
    evidenceCount?: IntFieldUpdateOperationsInput | number
    accuracyRate?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAuditEventsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionCreateNestedManyWithoutCreatedByInput
    debates?: DebateCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditEventsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName: string
    avatarUrl?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    experts?: ExpertUncheckedCreateNestedManyWithoutCreatedByInput
    expertVersions?: ExpertVersionUncheckedCreateNestedManyWithoutCreatedByInput
    debates?: DebateUncheckedCreateNestedManyWithoutCreatedByInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutCreatedByInput
    reputationScores?: ReputationScoreUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
  }

  export type UserUpsertWithoutAuditEventsInput = {
    update: XOR<UserUpdateWithoutAuditEventsInput, UserUncheckedUpdateWithoutAuditEventsInput>
    create: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditEventsInput, UserUncheckedUpdateWithoutAuditEventsInput>
  }

  export type UserUpdateWithoutAuditEventsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditEventsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experts?: ExpertUncheckedUpdateManyWithoutCreatedByNestedInput
    expertVersions?: ExpertVersionUncheckedUpdateManyWithoutCreatedByNestedInput
    debates?: DebateUncheckedUpdateManyWithoutCreatedByNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutCreatedByNestedInput
    reputationScores?: ReputationScoreUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpertCreateManyCreatedByInput = {
    id?: string
    slug: string
    currentVersionId?: string | null
    status?: $Enums.ExpertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpertVersionCreateManyCreatedByInput = {
    id?: string
    expertId: string
    versionNumber: number
    scope: InputJsonValue
    permissions: InputJsonValue
    logicDefinition: InputJsonValue
    changeReason: string
    createdAt?: Date | string
    accuracyScore?: number
    usageCount?: number
    lastInvokedAt?: Date | string | null
  }

  export type DebateCreateManyCreatedByInput = {
    id?: string
    expertId: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
  }

  export type ArgumentCreateManyCreatedByInput = {
    id?: string
    debateId: string
    parentArgumentId?: string | null
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReputationScoreCreateManyUserInput = {
    id?: string
    domain: string
    score?: number
    rank?: $Enums.ReputationRank
    evidenceCount?: number
    accuracyRate?: number
    lastActiveAt?: Date | string
    lastCalculatedAt?: Date | string
  }

  export type AuditEventCreateManyActorInput = {
    id?: string
    timestamp?: Date | string
    actorType: $Enums.ActorType
    action: string
    resourceType: string
    resourceId?: string | null
    previousState?: InputJsonValue | null
    newState?: InputJsonValue | null
    metadata?: InputJsonValue | null
    ipAddressHash?: string | null
    retentionClass?: $Enums.RetentionClass
    sensitivityLevel?: $Enums.SensitivityLevel
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type ExpertUpdateWithoutCreatedByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ExpertVersionUpdateManyWithoutExpertNestedInput
    debates?: DebateUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUpdateManyWithoutDependentExpertNestedInput
    dependents?: ExpertDependencyUpdateManyWithoutRequiredExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutCreatedByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ExpertVersionUncheckedUpdateManyWithoutExpertNestedInput
    debates?: DebateUncheckedUpdateManyWithoutExpertNestedInput
    dependencies?: ExpertDependencyUncheckedUpdateManyWithoutDependentExpertNestedInput
    dependents?: ExpertDependencyUncheckedUpdateManyWithoutRequiredExpertNestedInput
  }

  export type ExpertUncheckedUpdateManyWithoutCreatedByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpertStatusFieldUpdateOperationsInput | $Enums.ExpertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertVersionUpdateWithoutCreatedByInput = {
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expert?: ExpertUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type ExpertVersionUncheckedUpdateWithoutCreatedByInput = {
    expertId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpertVersionUncheckedUpdateManyWithoutCreatedByInput = {
    expertId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DebateUpdateWithoutCreatedByInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
    expert?: ExpertUpdateOneRequiredWithoutDebatesNestedInput
    arguments?: ArgumentUpdateManyWithoutDebateNestedInput
  }

  export type DebateUncheckedUpdateWithoutCreatedByInput = {
    expertId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
    arguments?: ArgumentUncheckedUpdateManyWithoutDebateNestedInput
  }

  export type DebateUncheckedUpdateManyWithoutCreatedByInput = {
    expertId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
  }

  export type ArgumentUpdateWithoutCreatedByInput = {
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debate?: DebateUpdateOneRequiredWithoutArgumentsNestedInput
    parentArgument?: ArgumentUpdateOneWithoutChildArgumentsNestedInput
    childArguments?: ArgumentUpdateManyWithoutParentArgumentNestedInput
    evidence?: EvidenceUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentUncheckedUpdateWithoutCreatedByInput = {
    debateId?: StringFieldUpdateOperationsInput | string
    parentArgumentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childArguments?: ArgumentUncheckedUpdateManyWithoutParentArgumentNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentUncheckedUpdateManyWithoutCreatedByInput = {
    debateId?: StringFieldUpdateOperationsInput | string
    parentArgumentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationScoreUpdateWithoutUserInput = {
    domain?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    rank?: EnumReputationRankFieldUpdateOperationsInput | $Enums.ReputationRank
    evidenceCount?: IntFieldUpdateOperationsInput | number
    accuracyRate?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ReputationEventUpdateManyWithoutReputationScoreNestedInput
  }

  export type ReputationScoreUncheckedUpdateWithoutUserInput = {
    domain?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    rank?: EnumReputationRankFieldUpdateOperationsInput | $Enums.ReputationRank
    evidenceCount?: IntFieldUpdateOperationsInput | number
    accuracyRate?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ReputationEventUncheckedUpdateManyWithoutReputationScoreNestedInput
  }

  export type ReputationScoreUncheckedUpdateManyWithoutUserInput = {
    domain?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    rank?: EnumReputationRankFieldUpdateOperationsInput | $Enums.ReputationRank
    evidenceCount?: IntFieldUpdateOperationsInput | number
    accuracyRate?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUpdateWithoutActorInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    previousState?: InputJsonValue | InputJsonValue | null
    newState?: InputJsonValue | InputJsonValue | null
    metadata?: InputJsonValue | InputJsonValue | null
    ipAddressHash?: NullableStringFieldUpdateOperationsInput | string | null
    retentionClass?: EnumRetentionClassFieldUpdateOperationsInput | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFieldUpdateOperationsInput | $Enums.SensitivityLevel
  }

  export type AuditEventUncheckedUpdateWithoutActorInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    previousState?: InputJsonValue | InputJsonValue | null
    newState?: InputJsonValue | InputJsonValue | null
    metadata?: InputJsonValue | InputJsonValue | null
    ipAddressHash?: NullableStringFieldUpdateOperationsInput | string | null
    retentionClass?: EnumRetentionClassFieldUpdateOperationsInput | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFieldUpdateOperationsInput | $Enums.SensitivityLevel
  }

  export type AuditEventUncheckedUpdateManyWithoutActorInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    previousState?: InputJsonValue | InputJsonValue | null
    newState?: InputJsonValue | InputJsonValue | null
    metadata?: InputJsonValue | InputJsonValue | null
    ipAddressHash?: NullableStringFieldUpdateOperationsInput | string | null
    retentionClass?: EnumRetentionClassFieldUpdateOperationsInput | $Enums.RetentionClass
    sensitivityLevel?: EnumSensitivityLevelFieldUpdateOperationsInput | $Enums.SensitivityLevel
  }

  export type SessionUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpertVersionCreateManyExpertInput = {
    id?: string
    versionNumber: number
    scope: InputJsonValue
    permissions: InputJsonValue
    logicDefinition: InputJsonValue
    changeReason: string
    createdById: string
    createdAt?: Date | string
    accuracyScore?: number
    usageCount?: number
    lastInvokedAt?: Date | string | null
  }

  export type DebateCreateManyExpertInput = {
    id?: string
    topic: string
    description?: string | null
    status?: $Enums.DebateStatus
    resolutionCriteria: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    outcome?: InputJsonValue | null
  }

  export type ExpertDependencyCreateManyDependentExpertInput = {
    id?: string
    requiredExpertId: string
    dependencyType?: $Enums.DependencyType
    createdAt?: Date | string
  }

  export type ExpertDependencyCreateManyRequiredExpertInput = {
    id?: string
    dependentExpertId: string
    dependencyType?: $Enums.DependencyType
    createdAt?: Date | string
  }

  export type ExpertVersionUpdateWithoutExpertInput = {
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutExpertVersionsNestedInput
  }

  export type ExpertVersionUncheckedUpdateWithoutExpertInput = {
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpertVersionUncheckedUpdateManyWithoutExpertInput = {
    versionNumber?: IntFieldUpdateOperationsInput | number
    scope?: InputJsonValue | InputJsonValue
    permissions?: InputJsonValue | InputJsonValue
    logicDefinition?: InputJsonValue | InputJsonValue
    changeReason?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accuracyScore?: FloatFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastInvokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DebateUpdateWithoutExpertInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
    createdBy?: UserUpdateOneRequiredWithoutDebatesNestedInput
    arguments?: ArgumentUpdateManyWithoutDebateNestedInput
  }

  export type DebateUncheckedUpdateWithoutExpertInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
    arguments?: ArgumentUncheckedUpdateManyWithoutDebateNestedInput
  }

  export type DebateUncheckedUpdateManyWithoutExpertInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDebateStatusFieldUpdateOperationsInput | $Enums.DebateStatus
    resolutionCriteria?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: InputJsonValue | InputJsonValue | null
  }

  export type ExpertDependencyUpdateWithoutDependentExpertInput = {
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredExpert?: ExpertUpdateOneRequiredWithoutDependentsNestedInput
  }

  export type ExpertDependencyUncheckedUpdateWithoutDependentExpertInput = {
    requiredExpertId?: StringFieldUpdateOperationsInput | string
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertDependencyUncheckedUpdateManyWithoutDependentExpertInput = {
    requiredExpertId?: StringFieldUpdateOperationsInput | string
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertDependencyUpdateWithoutRequiredExpertInput = {
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependentExpert?: ExpertUpdateOneRequiredWithoutDependenciesNestedInput
  }

  export type ExpertDependencyUncheckedUpdateWithoutRequiredExpertInput = {
    dependentExpertId?: StringFieldUpdateOperationsInput | string
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertDependencyUncheckedUpdateManyWithoutRequiredExpertInput = {
    dependentExpertId?: StringFieldUpdateOperationsInput | string
    dependencyType?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArgumentCreateManyDebateInput = {
    id?: string
    parentArgumentId?: string | null
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArgumentUpdateWithoutDebateInput = {
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentArgument?: ArgumentUpdateOneWithoutChildArgumentsNestedInput
    childArguments?: ArgumentUpdateManyWithoutParentArgumentNestedInput
    createdBy?: UserUpdateOneRequiredWithoutArgumentsNestedInput
    evidence?: EvidenceUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentUncheckedUpdateWithoutDebateInput = {
    parentArgumentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childArguments?: ArgumentUncheckedUpdateManyWithoutParentArgumentNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentUncheckedUpdateManyWithoutDebateInput = {
    parentArgumentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArgumentCreateManyParentArgumentInput = {
    id?: string
    debateId: string
    type: $Enums.ArgumentType
    claim: string
    reasoning: string
    status?: $Enums.ArgumentStatus
    validationStatus?: $Enums.ValidationStatus
    validationReason?: string | null
    authorReputationAtTime: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvidenceCreateManyArgumentInput = {
    id?: string
    type: $Enums.EvidenceType
    content: string
    sourceUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
  }

  export type ArgumentUpdateWithoutParentArgumentInput = {
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debate?: DebateUpdateOneRequiredWithoutArgumentsNestedInput
    childArguments?: ArgumentUpdateManyWithoutParentArgumentNestedInput
    createdBy?: UserUpdateOneRequiredWithoutArgumentsNestedInput
    evidence?: EvidenceUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentUncheckedUpdateWithoutParentArgumentInput = {
    debateId?: StringFieldUpdateOperationsInput | string
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childArguments?: ArgumentUncheckedUpdateManyWithoutParentArgumentNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutArgumentNestedInput
  }

  export type ArgumentUncheckedUpdateManyWithoutParentArgumentInput = {
    debateId?: StringFieldUpdateOperationsInput | string
    type?: EnumArgumentTypeFieldUpdateOperationsInput | $Enums.ArgumentType
    claim?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    status?: EnumArgumentStatusFieldUpdateOperationsInput | $Enums.ArgumentStatus
    validationStatus?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    validationReason?: NullableStringFieldUpdateOperationsInput | string | null
    authorReputationAtTime?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUpdateWithoutArgumentInput = {
    type?: EnumEvidenceTypeFieldUpdateOperationsInput | $Enums.EvidenceType
    content?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateWithoutArgumentInput = {
    type?: EnumEvidenceTypeFieldUpdateOperationsInput | $Enums.EvidenceType
    content?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyWithoutArgumentInput = {
    type?: EnumEvidenceTypeFieldUpdateOperationsInput | $Enums.EvidenceType
    content?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationEventCreateManyReputationScoreInput = {
    id?: string
    type: $Enums.ReputationEventType
    delta: number
    reason: string
    relatedEntityType?: string | null
    relatedEntityId?: string | null
    createdAt?: Date | string
  }

  export type ReputationEventUpdateWithoutReputationScoreInput = {
    type?: EnumReputationEventTypeFieldUpdateOperationsInput | $Enums.ReputationEventType
    delta?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationEventUncheckedUpdateWithoutReputationScoreInput = {
    type?: EnumReputationEventTypeFieldUpdateOperationsInput | $Enums.ReputationEventType
    delta?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationEventUncheckedUpdateManyWithoutReputationScoreInput = {
    type?: EnumReputationEventTypeFieldUpdateOperationsInput | $Enums.ReputationEventType
    delta?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpertCountOutputTypeDefaultArgs instead
     */
    export type ExpertCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpertCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DebateCountOutputTypeDefaultArgs instead
     */
    export type DebateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DebateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArgumentCountOutputTypeDefaultArgs instead
     */
    export type ArgumentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArgumentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReputationScoreCountOutputTypeDefaultArgs instead
     */
    export type ReputationScoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReputationScoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpertDefaultArgs instead
     */
    export type ExpertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpertVersionDefaultArgs instead
     */
    export type ExpertVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpertVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpertDependencyDefaultArgs instead
     */
    export type ExpertDependencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpertDependencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DebateDefaultArgs instead
     */
    export type DebateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DebateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArgumentDefaultArgs instead
     */
    export type ArgumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArgumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EvidenceDefaultArgs instead
     */
    export type EvidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EvidenceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReputationScoreDefaultArgs instead
     */
    export type ReputationScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReputationScoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReputationEventDefaultArgs instead
     */
    export type ReputationEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReputationEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditEventDefaultArgs instead
     */
    export type AuditEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemSettingDefaultArgs instead
     */
    export type SystemSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemSettingDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
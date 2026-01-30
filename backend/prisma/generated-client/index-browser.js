
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent'
};

exports.Prisma.ExpertScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  currentVersionId: 'currentVersionId',
  status: 'status',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ExpertVersionScalarFieldEnum = {
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

exports.Prisma.ExpertDependencyScalarFieldEnum = {
  id: 'id',
  dependentExpertId: 'dependentExpertId',
  requiredExpertId: 'requiredExpertId',
  dependencyType: 'dependencyType',
  createdAt: 'createdAt'
};

exports.Prisma.DebateScalarFieldEnum = {
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

exports.Prisma.ArgumentScalarFieldEnum = {
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

exports.Prisma.EvidenceScalarFieldEnum = {
  id: 'id',
  argumentId: 'argumentId',
  type: 'type',
  content: 'content',
  sourceUrl: 'sourceUrl',
  verificationStatus: 'verificationStatus',
  createdAt: 'createdAt'
};

exports.Prisma.ReputationScoreScalarFieldEnum = {
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

exports.Prisma.ReputationEventScalarFieldEnum = {
  id: 'id',
  reputationScoreId: 'reputationScoreId',
  type: 'type',
  delta: 'delta',
  reason: 'reason',
  relatedEntityType: 'relatedEntityType',
  relatedEntityId: 'relatedEntityId',
  createdAt: 'createdAt'
};

exports.Prisma.AuditEventScalarFieldEnum = {
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

exports.Prisma.SystemSettingScalarFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.UserRole = exports.$Enums.UserRole = {
  USER: 'USER',
  REVIEWER: 'REVIEWER',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

exports.ExpertStatus = exports.$Enums.ExpertStatus = {
  DRAFT: 'DRAFT',
  REVIEW: 'REVIEW',
  ACTIVE: 'ACTIVE',
  DEPRECATED: 'DEPRECATED',
  RETIRED: 'RETIRED'
};

exports.DependencyType = exports.$Enums.DependencyType = {
  REQUIRES: 'REQUIRES',
  RECOMMENDS: 'RECOMMENDS',
  CONFLICTS: 'CONFLICTS'
};

exports.DebateStatus = exports.$Enums.DebateStatus = {
  OPEN: 'OPEN',
  VOTING: 'VOTING',
  RESOLVED: 'RESOLVED',
  STALE: 'STALE',
  CLOSED: 'CLOSED'
};

exports.ArgumentType = exports.$Enums.ArgumentType = {
  CLAIM: 'CLAIM',
  SUPPORT: 'SUPPORT',
  COUNTER: 'COUNTER',
  QUESTION: 'QUESTION',
  SYNTHESIS: 'SYNTHESIS'
};

exports.ArgumentStatus = exports.$Enums.ArgumentStatus = {
  ACTIVE: 'ACTIVE',
  WITHDRAWN: 'WITHDRAWN',
  SUPERSEDED: 'SUPERSEDED'
};

exports.ValidationStatus = exports.$Enums.ValidationStatus = {
  PENDING: 'PENDING',
  VALIDATED: 'VALIDATED',
  DISPUTED: 'DISPUTED',
  REFUTED: 'REFUTED'
};

exports.EvidenceType = exports.$Enums.EvidenceType = {
  CITATION: 'CITATION',
  DATA: 'DATA',
  EXPERT_OUTPUT: 'EXPERT_OUTPUT',
  EXTERNAL_LINK: 'EXTERNAL_LINK'
};

exports.VerificationStatus = exports.$Enums.VerificationStatus = {
  UNVERIFIED: 'UNVERIFIED',
  VERIFIED: 'VERIFIED',
  DISPUTED: 'DISPUTED'
};

exports.ReputationRank = exports.$Enums.ReputationRank = {
  NOVICE: 'NOVICE',
  CONTRIBUTOR: 'CONTRIBUTOR',
  EXPERT: 'EXPERT',
  AUTHORITY: 'AUTHORITY',
  STEWARD: 'STEWARD'
};

exports.ReputationEventType = exports.$Enums.ReputationEventType = {
  ARGUMENT_VALIDATED: 'ARGUMENT_VALIDATED',
  ARGUMENT_REFUTED: 'ARGUMENT_REFUTED',
  EXPERT_IMPROVED: 'EXPERT_IMPROVED',
  REVIEW_ACCEPTED: 'REVIEW_ACCEPTED',
  REVIEW_REJECTED: 'REVIEW_REJECTED',
  DECAY: 'DECAY',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT'
};

exports.ActorType = exports.$Enums.ActorType = {
  USER: 'USER',
  SYSTEM: 'SYSTEM',
  AUTOMATED_JOB: 'AUTOMATED_JOB'
};

exports.RetentionClass = exports.$Enums.RetentionClass = {
  STANDARD: 'STANDARD',
  EXTENDED: 'EXTENDED',
  PERMANENT: 'PERMANENT'
};

exports.SensitivityLevel = exports.$Enums.SensitivityLevel = {
  PUBLIC: 'PUBLIC',
  INTERNAL: 'INTERNAL',
  CONFIDENTIAL: 'CONFIDENTIAL'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

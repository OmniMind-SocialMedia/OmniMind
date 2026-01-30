
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\BALAJI\\Desktop\\omnimind\\backend\\prisma\\generated-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.10.2",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// OmniMind Database Schema\n// Cognitive Governance Platform\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated-client\"\n}\n\ndatasource db {\n  provider = \"mongodb\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// ============================================\n// USER & IDENTITY\n// ============================================\n\nmodel User {\n  id            String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  email         String   @unique\n  passwordHash  String\n  displayName   String\n  avatarUrl     String?\n  role          UserRole @default(USER)\n  status        UserStatus @default(ACTIVE)\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n  lastLoginAt   DateTime?\n  \n  // Relations\n  experts           Expert[]\n  expertVersions    ExpertVersion[]\n  debates           Debate[]\n  arguments         Argument[]\n  reputationScores  ReputationScore[]\n  auditEvents       AuditEvent[]\n  sessions          Session[]\n  \n  @@index([status])\n}\n\nmodel Session {\n  id           String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId       String   @db.ObjectId\n  token        String   @unique\n  expiresAt    DateTime\n  createdAt    DateTime @default(now())\n  ipAddress    String?\n  userAgent    String?\n  \n  user         User     @relation(fields: [userId], references: [id], onDelete: NoAction)\n  \n  @@index([userId])\n}\n\nenum UserRole {\n  USER\n  REVIEWER\n  MODERATOR\n  ADMIN\n  SUPER_ADMIN\n}\n\nenum UserStatus {\n  ACTIVE\n  SUSPENDED\n  DELETED\n}\n\n// ============================================\n// EXPERT SYSTEM\n// ============================================\n\nmodel Expert {\n  id               String       @id @default(auto()) @map(\"_id\") @db.ObjectId\n  slug             String       @unique\n  currentVersionId String?      @db.ObjectId\n  status           ExpertStatus @default(DRAFT)\n  createdById      String       @db.ObjectId\n  createdAt        DateTime     @default(now())\n  updatedAt        DateTime     @updatedAt\n  \n  // Relations\n  createdBy        User           @relation(fields: [createdById], references: [id])\n  versions         ExpertVersion[]\n  debates          Debate[]\n  \n  // Custom M:N relation for dependencies\n  // In MongoDB, we model this differently or use an explicit join collection properly mapped\n  dependencies     ExpertDependency[] @relation(\"DependentExpert\")\n  dependents       ExpertDependency[] @relation(\"RequiredExpert\")\n  \n  @@index([status])\n  @@index([createdById])\n}\n\nmodel ExpertVersion {\n  id              String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  expertId        String   @db.ObjectId\n  versionNumber   Int\n  scope           Json     // { domain, subdomains, inputTypes, outputTypes, limitations }\n  permissions     Json     // { invokeRoles, editRoles, approveRoles, viewRoles }\n  logicDefinition Json     // The actual expert logic/rules\n  changeReason    String\n  createdById     String   @db.ObjectId\n  createdAt       DateTime @default(now())\n  \n  // Metrics (updated periodically)\n  accuracyScore   Float    @default(0)\n  usageCount      Int      @default(0)\n  lastInvokedAt   DateTime?\n  \n  // Relations\n  expert          Expert   @relation(fields: [expertId], references: [id], onDelete: NoAction)\n  createdBy       User     @relation(fields: [createdById], references: [id])\n  \n  @@unique([expertId, versionNumber])\n  @@index([expertId])\n  @@index([createdById])\n}\n\nmodel ExpertDependency {\n  id                String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  dependentExpertId String   @db.ObjectId\n  requiredExpertId  String   @db.ObjectId\n  dependencyType    DependencyType @default(REQUIRES)\n  createdAt         DateTime @default(now())\n  \n  dependentExpert   Expert   @relation(\"DependentExpert\", fields: [dependentExpertId], references: [id], onDelete: NoAction)\n  requiredExpert    Expert   @relation(\"RequiredExpert\", fields: [requiredExpertId], references: [id], onDelete: NoAction)\n  \n  @@unique([dependentExpertId, requiredExpertId])\n  @@index([dependentExpertId])\n  @@index([requiredExpertId])\n}\n\nenum ExpertStatus {\n  DRAFT\n  REVIEW\n  ACTIVE\n  DEPRECATED\n  RETIRED\n}\n\nenum DependencyType {\n  REQUIRES\n  RECOMMENDS\n  CONFLICTS\n}\n\n// ============================================\n// DEBATE & ARGUMENT SYSTEM\n// ============================================\n\nmodel Debate {\n  id                  String       @id @default(auto()) @map(\"_id\") @db.ObjectId\n  expertId            String       @db.ObjectId\n  topic               String\n  description         String?\n  status              DebateStatus @default(OPEN)\n  resolutionCriteria  String\n  createdById         String       @db.ObjectId\n  createdAt           DateTime     @default(now())\n  updatedAt           DateTime     @updatedAt\n  resolvedAt          DateTime?\n  outcome             Json?        // Resolution details\n  \n  // Relations\n  expert              Expert       @relation(fields: [expertId], references: [id])\n  createdBy           User         @relation(fields: [createdById], references: [id])\n  arguments           Argument[]\n  \n  @@index([expertId])\n  @@index([status])\n  @@index([createdById])\n}\n\nmodel Argument {\n  id                    String         @id @default(auto()) @map(\"_id\") @db.ObjectId\n  debateId              String         @db.ObjectId\n  parentArgumentId      String?        @db.ObjectId\n  type                  ArgumentType\n  claim                 String\n  reasoning             String\n  status                ArgumentStatus @default(ACTIVE)\n  validationStatus      ValidationStatus @default(PENDING)\n  validationReason      String?\n  authorReputationAtTime Float\n  createdById           String         @db.ObjectId\n  createdAt             DateTime       @default(now())\n  updatedAt             DateTime       @updatedAt\n  \n  // Relations\n  debate                Debate         @relation(fields: [debateId], references: [id], onDelete: NoAction)\n  parentArgument        Argument?      @relation(\"ArgumentReplies\", fields: [parentArgumentId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  childArguments        Argument[]     @relation(\"ArgumentReplies\")\n  createdBy             User           @relation(fields: [createdById], references: [id])\n  evidence              Evidence[]\n  \n  @@index([debateId])\n  @@index([parentArgumentId])\n  @@index([createdById])\n  @@index([type])\n}\n\nmodel Evidence {\n  id                 String             @id @default(auto()) @map(\"_id\") @db.ObjectId\n  argumentId         String             @db.ObjectId\n  type               EvidenceType\n  content            String\n  sourceUrl          String?\n  verificationStatus VerificationStatus @default(UNVERIFIED)\n  createdAt          DateTime           @default(now())\n  \n  argument           Argument           @relation(fields: [argumentId], references: [id], onDelete: NoAction)\n  \n  @@index([argumentId])\n}\n\nenum DebateStatus {\n  OPEN\n  VOTING\n  RESOLVED\n  STALE\n  CLOSED\n}\n\nenum ArgumentType {\n  CLAIM\n  SUPPORT\n  COUNTER\n  QUESTION\n  SYNTHESIS\n}\n\nenum ArgumentStatus {\n  ACTIVE\n  WITHDRAWN\n  SUPERSEDED\n}\n\nenum ValidationStatus {\n  PENDING\n  VALIDATED\n  DISPUTED\n  REFUTED\n}\n\nenum EvidenceType {\n  CITATION\n  DATA\n  EXPERT_OUTPUT\n  EXTERNAL_LINK\n}\n\nenum VerificationStatus {\n  UNVERIFIED\n  VERIFIED\n  DISPUTED\n}\n\n// ============================================\n// REPUTATION SYSTEM\n// ============================================\n\nmodel ReputationScore {\n  id               String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId           String   @db.ObjectId\n  domain           String\n  score            Float    @default(0)\n  rank             ReputationRank @default(NOVICE)\n  evidenceCount    Int      @default(0)\n  accuracyRate     Float    @default(0)\n  lastActiveAt     DateTime @default(now())\n  lastCalculatedAt DateTime @default(now())\n  \n  user             User     @relation(fields: [userId], references: [id], onDelete: NoAction)\n  history          ReputationEvent[]\n  \n  @@unique([userId, domain])\n  @@index([userId])\n  @@index([domain])\n  @@index([score])\n}\n\nmodel ReputationEvent {\n  id                String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  reputationScoreId String   @db.ObjectId\n  type              ReputationEventType\n  delta             Float\n  reason            String\n  relatedEntityType String?\n  relatedEntityId   String?  @db.ObjectId\n  createdAt         DateTime @default(now())\n  \n  reputationScore   ReputationScore @relation(fields: [reputationScoreId], references: [id], onDelete: NoAction)\n  \n  @@index([reputationScoreId])\n  @@index([createdAt])\n}\n\nenum ReputationRank {\n  NOVICE\n  CONTRIBUTOR\n  EXPERT\n  AUTHORITY\n  STEWARD\n}\n\nenum ReputationEventType {\n  ARGUMENT_VALIDATED\n  ARGUMENT_REFUTED\n  EXPERT_IMPROVED\n  REVIEW_ACCEPTED\n  REVIEW_REJECTED\n  DECAY\n  MANUAL_ADJUSTMENT\n}\n\n// ============================================\n// AUDIT & GOVERNANCE\n// ============================================\n\nmodel AuditEvent {\n  id               String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  timestamp        DateTime @default(now())\n  actorId          String?  @db.ObjectId\n  actorType        ActorType\n  action           String\n  resourceType     String\n  resourceId       String?  @db.ObjectId\n  previousState    Json?\n  newState         Json?\n  metadata         Json?\n  ipAddressHash    String?\n  retentionClass   RetentionClass @default(STANDARD)\n  sensitivityLevel SensitivityLevel @default(INTERNAL)\n  \n  actor            User?    @relation(fields: [actorId], references: [id])\n  \n  @@index([actorId])\n  @@index([timestamp])\n  @@index([action])\n  @@index([resourceType, resourceId])\n}\n\nmodel SystemSetting {\n  id        String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  key       String   @unique\n  value     Json\n  updatedAt DateTime @updatedAt\n  updatedBy String?  @db.ObjectId\n}\n\nenum ActorType {\n  USER\n  SYSTEM\n  AUTOMATED_JOB\n}\n\nenum RetentionClass {\n  STANDARD\n  EXTENDED\n  PERMANENT\n}\n\nenum SensitivityLevel {\n  PUBLIC\n  INTERNAL\n  CONFIDENTIAL\n}\n",
  "inlineSchemaHash": "36bc90c219bb8939f82a8b4a41e8abe5bcafe1eb4b21720c7e3a311c17651b10",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displayName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatarUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserRole\",\"default\":\"USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"lastLoginAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"experts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expert\",\"relationName\":\"ExpertToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expertVersions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpertVersion\",\"relationName\":\"ExpertVersionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"debates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Debate\",\"relationName\":\"DebateToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arguments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Argument\",\"relationName\":\"ArgumentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reputationScores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReputationScore\",\"relationName\":\"ReputationScoreToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auditEvents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AuditEvent\",\"relationName\":\"AuditEventToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Session\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Expert\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentVersionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ExpertStatus\",\"default\":\"DRAFT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ExpertToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpertVersion\",\"relationName\":\"ExpertToExpertVersion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"debates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Debate\",\"relationName\":\"DebateToExpert\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpertDependency\",\"relationName\":\"DependentExpert\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpertDependency\",\"relationName\":\"RequiredExpert\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ExpertVersion\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expertId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versionNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logicDefinition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changeReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accuracyScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usageCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastInvokedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expert\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expert\",\"relationName\":\"ExpertToExpertVersion\",\"relationFromFields\":[\"expertId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ExpertVersionToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"expertId\",\"versionNumber\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"expertId\",\"versionNumber\"]}],\"isGenerated\":false},\"ExpertDependency\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependentExpertId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requiredExpertId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencyType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DependencyType\",\"default\":\"REQUIRES\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependentExpert\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expert\",\"relationName\":\"DependentExpert\",\"relationFromFields\":[\"dependentExpertId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requiredExpert\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expert\",\"relationName\":\"RequiredExpert\",\"relationFromFields\":[\"requiredExpertId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"dependentExpertId\",\"requiredExpertId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"dependentExpertId\",\"requiredExpertId\"]}],\"isGenerated\":false},\"Debate\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expertId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"topic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DebateStatus\",\"default\":\"OPEN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resolutionCriteria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"resolvedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"outcome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expert\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expert\",\"relationName\":\"DebateToExpert\",\"relationFromFields\":[\"expertId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DebateToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arguments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Argument\",\"relationName\":\"ArgumentToDebate\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Argument\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"debateId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentArgumentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArgumentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reasoning\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ArgumentStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validationStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ValidationStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validationReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorReputationAtTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"debate\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Debate\",\"relationName\":\"ArgumentToDebate\",\"relationFromFields\":[\"debateId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentArgument\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Argument\",\"relationName\":\"ArgumentReplies\",\"relationFromFields\":[\"parentArgumentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"childArguments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Argument\",\"relationName\":\"ArgumentReplies\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ArgumentToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evidence\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Evidence\",\"relationName\":\"ArgumentToEvidence\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Evidence\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"argumentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EvidenceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sourceUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"VerificationStatus\",\"default\":\"UNVERIFIED\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"argument\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Argument\",\"relationName\":\"ArgumentToEvidence\",\"relationFromFields\":[\"argumentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ReputationScore\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rank\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ReputationRank\",\"default\":\"NOVICE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evidenceCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accuracyRate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastActiveAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastCalculatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ReputationScoreToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReputationEvent\",\"relationName\":\"ReputationEventToReputationScore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"domain\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"domain\"]}],\"isGenerated\":false},\"ReputationEvent\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reputationScoreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReputationEventType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relatedEntityType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relatedEntityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reputationScore\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReputationScore\",\"relationName\":\"ReputationEventToReputationScore\",\"relationFromFields\":[\"reputationScoreId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AuditEvent\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actorType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActorType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resourceType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resourceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddressHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retentionClass\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RetentionClass\",\"default\":\"STANDARD\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sensitivityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SensitivityLevel\",\"default\":\"INTERNAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AuditEventToUser\",\"relationFromFields\":[\"actorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SystemSetting\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"UserRole\":{\"values\":[{\"name\":\"USER\",\"dbName\":null},{\"name\":\"REVIEWER\",\"dbName\":null},{\"name\":\"MODERATOR\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"SUPER_ADMIN\",\"dbName\":null}],\"dbName\":null},\"UserStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"SUSPENDED\",\"dbName\":null},{\"name\":\"DELETED\",\"dbName\":null}],\"dbName\":null},\"ExpertStatus\":{\"values\":[{\"name\":\"DRAFT\",\"dbName\":null},{\"name\":\"REVIEW\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"DEPRECATED\",\"dbName\":null},{\"name\":\"RETIRED\",\"dbName\":null}],\"dbName\":null},\"DependencyType\":{\"values\":[{\"name\":\"REQUIRES\",\"dbName\":null},{\"name\":\"RECOMMENDS\",\"dbName\":null},{\"name\":\"CONFLICTS\",\"dbName\":null}],\"dbName\":null},\"DebateStatus\":{\"values\":[{\"name\":\"OPEN\",\"dbName\":null},{\"name\":\"VOTING\",\"dbName\":null},{\"name\":\"RESOLVED\",\"dbName\":null},{\"name\":\"STALE\",\"dbName\":null},{\"name\":\"CLOSED\",\"dbName\":null}],\"dbName\":null},\"ArgumentType\":{\"values\":[{\"name\":\"CLAIM\",\"dbName\":null},{\"name\":\"SUPPORT\",\"dbName\":null},{\"name\":\"COUNTER\",\"dbName\":null},{\"name\":\"QUESTION\",\"dbName\":null},{\"name\":\"SYNTHESIS\",\"dbName\":null}],\"dbName\":null},\"ArgumentStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"WITHDRAWN\",\"dbName\":null},{\"name\":\"SUPERSEDED\",\"dbName\":null}],\"dbName\":null},\"ValidationStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"VALIDATED\",\"dbName\":null},{\"name\":\"DISPUTED\",\"dbName\":null},{\"name\":\"REFUTED\",\"dbName\":null}],\"dbName\":null},\"EvidenceType\":{\"values\":[{\"name\":\"CITATION\",\"dbName\":null},{\"name\":\"DATA\",\"dbName\":null},{\"name\":\"EXPERT_OUTPUT\",\"dbName\":null},{\"name\":\"EXTERNAL_LINK\",\"dbName\":null}],\"dbName\":null},\"VerificationStatus\":{\"values\":[{\"name\":\"UNVERIFIED\",\"dbName\":null},{\"name\":\"VERIFIED\",\"dbName\":null},{\"name\":\"DISPUTED\",\"dbName\":null}],\"dbName\":null},\"ReputationRank\":{\"values\":[{\"name\":\"NOVICE\",\"dbName\":null},{\"name\":\"CONTRIBUTOR\",\"dbName\":null},{\"name\":\"EXPERT\",\"dbName\":null},{\"name\":\"AUTHORITY\",\"dbName\":null},{\"name\":\"STEWARD\",\"dbName\":null}],\"dbName\":null},\"ReputationEventType\":{\"values\":[{\"name\":\"ARGUMENT_VALIDATED\",\"dbName\":null},{\"name\":\"ARGUMENT_REFUTED\",\"dbName\":null},{\"name\":\"EXPERT_IMPROVED\",\"dbName\":null},{\"name\":\"REVIEW_ACCEPTED\",\"dbName\":null},{\"name\":\"REVIEW_REJECTED\",\"dbName\":null},{\"name\":\"DECAY\",\"dbName\":null},{\"name\":\"MANUAL_ADJUSTMENT\",\"dbName\":null}],\"dbName\":null},\"ActorType\":{\"values\":[{\"name\":\"USER\",\"dbName\":null},{\"name\":\"SYSTEM\",\"dbName\":null},{\"name\":\"AUTOMATED_JOB\",\"dbName\":null}],\"dbName\":null},\"RetentionClass\":{\"values\":[{\"name\":\"STANDARD\",\"dbName\":null},{\"name\":\"EXTENDED\",\"dbName\":null},{\"name\":\"PERMANENT\",\"dbName\":null}],\"dbName\":null},\"SensitivityLevel\":{\"values\":[{\"name\":\"PUBLIC\",\"dbName\":null},{\"name\":\"INTERNAL\",\"dbName\":null},{\"name\":\"CONFIDENTIAL\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)


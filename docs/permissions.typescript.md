# `permissions` Submodule <a name="`permissions` Submodule" id="@cdktf/provider-databricks.permissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Permissions <a name="Permissions" id="@cdktf/provider-databricks.permissions.Permissions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions databricks_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissions.Permissions.Initializer"></a>

```typescript
import { permissions } from '@cdktf/provider-databricks'

new permissions.Permissions(scope: Construct, id: string, config: PermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig">PermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.permissions.PermissionsConfig">PermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.putAccessControl">putAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetClusterPolicyId">resetClusterPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetDirectoryPath">resetDirectoryPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetExperimentId">resetExperimentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetInstancePoolId">resetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetNotebookId">resetNotebookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetNotebookPath">resetNotebookPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetPipelineId">resetPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetRegisteredModelId">resetRegisteredModelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetRepoId">resetRepoId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetRepoPath">resetRepoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetServingEndpointId">resetServingEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlAlertId">resetSqlAlertId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlDashboardId">resetSqlDashboardId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlEndpointId">resetSqlEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlQueryId">resetSqlQueryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFileId">resetWorkspaceFileId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFilePath">resetWorkspaceFilePath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.permissions.Permissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.permissions.Permissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.permissions.Permissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.permissions.Permissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.permissions.Permissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.permissions.Permissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.permissions.Permissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.permissions.Permissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.permissions.Permissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.permissions.Permissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.permissions.Permissions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.permissions.Permissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.permissions.Permissions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.permissions.Permissions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.permissions.Permissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.permissions.Permissions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.permissions.Permissions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.permissions.Permissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.permissions.Permissions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.permissions.Permissions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessControl` <a name="putAccessControl" id="@cdktf/provider-databricks.permissions.Permissions.putAccessControl"></a>

```typescript
public putAccessControl(value: IResolvable | PermissionsAccessControl[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.permissions.Permissions.putAccessControl.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]

---

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-databricks.permissions.Permissions.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.permissions.Permissions.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetClusterPolicyId` <a name="resetClusterPolicyId" id="@cdktf/provider-databricks.permissions.Permissions.resetClusterPolicyId"></a>

```typescript
public resetClusterPolicyId(): void
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/provider-databricks.permissions.Permissions.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetDirectoryPath` <a name="resetDirectoryPath" id="@cdktf/provider-databricks.permissions.Permissions.resetDirectoryPath"></a>

```typescript
public resetDirectoryPath(): void
```

##### `resetExperimentId` <a name="resetExperimentId" id="@cdktf/provider-databricks.permissions.Permissions.resetExperimentId"></a>

```typescript
public resetExperimentId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.permissions.Permissions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstancePoolId` <a name="resetInstancePoolId" id="@cdktf/provider-databricks.permissions.Permissions.resetInstancePoolId"></a>

```typescript
public resetInstancePoolId(): void
```

##### `resetJobId` <a name="resetJobId" id="@cdktf/provider-databricks.permissions.Permissions.resetJobId"></a>

```typescript
public resetJobId(): void
```

##### `resetNotebookId` <a name="resetNotebookId" id="@cdktf/provider-databricks.permissions.Permissions.resetNotebookId"></a>

```typescript
public resetNotebookId(): void
```

##### `resetNotebookPath` <a name="resetNotebookPath" id="@cdktf/provider-databricks.permissions.Permissions.resetNotebookPath"></a>

```typescript
public resetNotebookPath(): void
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-databricks.permissions.Permissions.resetObjectType"></a>

```typescript
public resetObjectType(): void
```

##### `resetPipelineId` <a name="resetPipelineId" id="@cdktf/provider-databricks.permissions.Permissions.resetPipelineId"></a>

```typescript
public resetPipelineId(): void
```

##### `resetRegisteredModelId` <a name="resetRegisteredModelId" id="@cdktf/provider-databricks.permissions.Permissions.resetRegisteredModelId"></a>

```typescript
public resetRegisteredModelId(): void
```

##### `resetRepoId` <a name="resetRepoId" id="@cdktf/provider-databricks.permissions.Permissions.resetRepoId"></a>

```typescript
public resetRepoId(): void
```

##### `resetRepoPath` <a name="resetRepoPath" id="@cdktf/provider-databricks.permissions.Permissions.resetRepoPath"></a>

```typescript
public resetRepoPath(): void
```

##### `resetServingEndpointId` <a name="resetServingEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.resetServingEndpointId"></a>

```typescript
public resetServingEndpointId(): void
```

##### `resetSqlAlertId` <a name="resetSqlAlertId" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlAlertId"></a>

```typescript
public resetSqlAlertId(): void
```

##### `resetSqlDashboardId` <a name="resetSqlDashboardId" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlDashboardId"></a>

```typescript
public resetSqlDashboardId(): void
```

##### `resetSqlEndpointId` <a name="resetSqlEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlEndpointId"></a>

```typescript
public resetSqlEndpointId(): void
```

##### `resetSqlQueryId` <a name="resetSqlQueryId" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlQueryId"></a>

```typescript
public resetSqlQueryId(): void
```

##### `resetWorkspaceFileId` <a name="resetWorkspaceFileId" id="@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFileId"></a>

```typescript
public resetWorkspaceFileId(): void
```

##### `resetWorkspaceFilePath` <a name="resetWorkspaceFilePath" id="@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFilePath"></a>

```typescript
public resetWorkspaceFilePath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Permissions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.permissions.Permissions.isConstruct"></a>

```typescript
import { permissions } from '@cdktf/provider-databricks'

permissions.Permissions.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissions.Permissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformElement"></a>

```typescript
import { permissions } from '@cdktf/provider-databricks'

permissions.Permissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformResource"></a>

```typescript
import { permissions } from '@cdktf/provider-databricks'

permissions.Permissions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport"></a>

```typescript
import { permissions } from '@cdktf/provider-databricks'

permissions.Permissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Permissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Permissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Permissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Permissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.accessControl">accessControl</a></code> | <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.accessControlInput">accessControlInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput">clusterPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryPathInput">directoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.experimentIdInput">experimentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookIdInput">notebookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookPathInput">notebookPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.registeredModelIdInput">registeredModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoIdInput">repoIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoPathInput">repoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointIdInput">servingEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertIdInput">sqlAlertIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput">sqlDashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput">sqlEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryIdInput">sqlQueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileIdInput">workspaceFileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePathInput">workspaceFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyId">clusterPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryPath">directoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.experimentId">experimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.instancePoolId">instancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookId">notebookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookPath">notebookPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.registeredModelId">registeredModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoId">repoId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoPath">repoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointId">servingEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertId">sqlAlertId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardId">sqlDashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointId">sqlEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryId">sqlQueryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileId">workspaceFileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePath">workspaceFilePath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.permissions.Permissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.permissions.Permissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissions.Permissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.permissions.Permissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.permissions.Permissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.permissions.Permissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissions.Permissions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissions.Permissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.permissions.Permissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.permissions.Permissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissions.Permissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissions.Permissions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessControl`<sup>Required</sup> <a name="accessControl" id="@cdktf/provider-databricks.permissions.Permissions.property.accessControl"></a>

```typescript
public readonly accessControl: PermissionsAccessControlList;
```

- *Type:* <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a>

---

##### `accessControlInput`<sup>Optional</sup> <a name="accessControlInput" id="@cdktf/provider-databricks.permissions.Permissions.property.accessControlInput"></a>

```typescript
public readonly accessControlInput: IResolvable | PermissionsAccessControl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-databricks.permissions.Permissions.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `clusterPolicyIdInput`<sup>Optional</sup> <a name="clusterPolicyIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput"></a>

```typescript
public readonly clusterPolicyIdInput: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `directoryPathInput`<sup>Optional</sup> <a name="directoryPathInput" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryPathInput"></a>

```typescript
public readonly directoryPathInput: string;
```

- *Type:* string

---

##### `experimentIdInput`<sup>Optional</sup> <a name="experimentIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.experimentIdInput"></a>

```typescript
public readonly experimentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.permissions.Permissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.instancePoolIdInput"></a>

```typescript
public readonly instancePoolIdInput: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `notebookIdInput`<sup>Optional</sup> <a name="notebookIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookIdInput"></a>

```typescript
public readonly notebookIdInput: string;
```

- *Type:* string

---

##### `notebookPathInput`<sup>Optional</sup> <a name="notebookPathInput" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookPathInput"></a>

```typescript
public readonly notebookPathInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-databricks.permissions.Permissions.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `registeredModelIdInput`<sup>Optional</sup> <a name="registeredModelIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.registeredModelIdInput"></a>

```typescript
public readonly registeredModelIdInput: string;
```

- *Type:* string

---

##### `repoIdInput`<sup>Optional</sup> <a name="repoIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.repoIdInput"></a>

```typescript
public readonly repoIdInput: string;
```

- *Type:* string

---

##### `repoPathInput`<sup>Optional</sup> <a name="repoPathInput" id="@cdktf/provider-databricks.permissions.Permissions.property.repoPathInput"></a>

```typescript
public readonly repoPathInput: string;
```

- *Type:* string

---

##### `servingEndpointIdInput`<sup>Optional</sup> <a name="servingEndpointIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointIdInput"></a>

```typescript
public readonly servingEndpointIdInput: string;
```

- *Type:* string

---

##### `sqlAlertIdInput`<sup>Optional</sup> <a name="sqlAlertIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertIdInput"></a>

```typescript
public readonly sqlAlertIdInput: string;
```

- *Type:* string

---

##### `sqlDashboardIdInput`<sup>Optional</sup> <a name="sqlDashboardIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput"></a>

```typescript
public readonly sqlDashboardIdInput: string;
```

- *Type:* string

---

##### `sqlEndpointIdInput`<sup>Optional</sup> <a name="sqlEndpointIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput"></a>

```typescript
public readonly sqlEndpointIdInput: string;
```

- *Type:* string

---

##### `sqlQueryIdInput`<sup>Optional</sup> <a name="sqlQueryIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryIdInput"></a>

```typescript
public readonly sqlQueryIdInput: string;
```

- *Type:* string

---

##### `workspaceFileIdInput`<sup>Optional</sup> <a name="workspaceFileIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileIdInput"></a>

```typescript
public readonly workspaceFileIdInput: string;
```

- *Type:* string

---

##### `workspaceFilePathInput`<sup>Optional</sup> <a name="workspaceFilePathInput" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePathInput"></a>

```typescript
public readonly workspaceFilePathInput: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-databricks.permissions.Permissions.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterPolicyId`<sup>Required</sup> <a name="clusterPolicyId" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyId"></a>

```typescript
public readonly clusterPolicyId: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `directoryPath`<sup>Required</sup> <a name="directoryPath" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryPath"></a>

```typescript
public readonly directoryPath: string;
```

- *Type:* string

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktf/provider-databricks.permissions.Permissions.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.permissions.Permissions.property.instancePoolId"></a>

```typescript
public readonly instancePoolId: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-databricks.permissions.Permissions.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `notebookId`<sup>Required</sup> <a name="notebookId" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookId"></a>

```typescript
public readonly notebookId: string;
```

- *Type:* string

---

##### `notebookPath`<sup>Required</sup> <a name="notebookPath" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookPath"></a>

```typescript
public readonly notebookPath: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.permissions.Permissions.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-databricks.permissions.Permissions.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `registeredModelId`<sup>Required</sup> <a name="registeredModelId" id="@cdktf/provider-databricks.permissions.Permissions.property.registeredModelId"></a>

```typescript
public readonly registeredModelId: string;
```

- *Type:* string

---

##### `repoId`<sup>Required</sup> <a name="repoId" id="@cdktf/provider-databricks.permissions.Permissions.property.repoId"></a>

```typescript
public readonly repoId: string;
```

- *Type:* string

---

##### `repoPath`<sup>Required</sup> <a name="repoPath" id="@cdktf/provider-databricks.permissions.Permissions.property.repoPath"></a>

```typescript
public readonly repoPath: string;
```

- *Type:* string

---

##### `servingEndpointId`<sup>Required</sup> <a name="servingEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointId"></a>

```typescript
public readonly servingEndpointId: string;
```

- *Type:* string

---

##### `sqlAlertId`<sup>Required</sup> <a name="sqlAlertId" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertId"></a>

```typescript
public readonly sqlAlertId: string;
```

- *Type:* string

---

##### `sqlDashboardId`<sup>Required</sup> <a name="sqlDashboardId" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardId"></a>

```typescript
public readonly sqlDashboardId: string;
```

- *Type:* string

---

##### `sqlEndpointId`<sup>Required</sup> <a name="sqlEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointId"></a>

```typescript
public readonly sqlEndpointId: string;
```

- *Type:* string

---

##### `sqlQueryId`<sup>Required</sup> <a name="sqlQueryId" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryId"></a>

```typescript
public readonly sqlQueryId: string;
```

- *Type:* string

---

##### `workspaceFileId`<sup>Required</sup> <a name="workspaceFileId" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileId"></a>

```typescript
public readonly workspaceFileId: string;
```

- *Type:* string

---

##### `workspaceFilePath`<sup>Required</sup> <a name="workspaceFilePath" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePath"></a>

```typescript
public readonly workspaceFilePath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.permissions.Permissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PermissionsAccessControl <a name="PermissionsAccessControl" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.Initializer"></a>

```typescript
import { permissions } from '@cdktf/provider-databricks'

const permissionsAccessControl: permissions.PermissionsAccessControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel">permissionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#permission_level Permissions#permission_level}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#group_name Permissions#group_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#service_principal_name Permissions#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#user_name Permissions#user_name}. |

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel"></a>

```typescript
public readonly permissionLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#permission_level Permissions#permission_level}.

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#group_name Permissions#group_name}.

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#service_principal_name Permissions#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#user_name Permissions#user_name}.

---

### PermissionsConfig <a name="PermissionsConfig" id="@cdktf/provider-databricks.permissions.PermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.permissions.PermissionsConfig.Initializer"></a>

```typescript
import { permissions } from '@cdktf/provider-databricks'

const permissionsConfig: permissions.PermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.accessControl">accessControl</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]</code> | access_control block. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#authorization Permissions#authorization}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#cluster_id Permissions#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId">clusterPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#directory_id Permissions#directory_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryPath">directoryPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#directory_path Permissions#directory_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.experimentId">experimentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#experiment_id Permissions#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#id Permissions#id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.instancePoolId">instancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.jobId">jobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#job_id Permissions#job_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookId">notebookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#notebook_id Permissions#notebook_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookPath">notebookPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#notebook_path Permissions#notebook_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#object_type Permissions#object_type}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#pipeline_id Permissions#pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.registeredModelId">registeredModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#registered_model_id Permissions#registered_model_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoId">repoId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#repo_id Permissions#repo_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoPath">repoPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#repo_path Permissions#repo_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId">servingEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId">sqlAlertId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId">sqlDashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId">sqlEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId">sqlQueryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#sql_query_id Permissions#sql_query_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId">workspaceFileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath">workspaceFilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessControl`<sup>Required</sup> <a name="accessControl" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.accessControl"></a>

```typescript
public readonly accessControl: IResolvable | PermissionsAccessControl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#access_control Permissions#access_control}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#authorization Permissions#authorization}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#cluster_id Permissions#cluster_id}.

---

##### `clusterPolicyId`<sup>Optional</sup> <a name="clusterPolicyId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId"></a>

```typescript
public readonly clusterPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#directory_id Permissions#directory_id}.

---

##### `directoryPath`<sup>Optional</sup> <a name="directoryPath" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryPath"></a>

```typescript
public readonly directoryPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#directory_path Permissions#directory_path}.

---

##### `experimentId`<sup>Optional</sup> <a name="experimentId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#experiment_id Permissions#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#id Permissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.instancePoolId"></a>

```typescript
public readonly instancePoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#job_id Permissions#job_id}.

---

##### `notebookId`<sup>Optional</sup> <a name="notebookId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookId"></a>

```typescript
public readonly notebookId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#notebook_id Permissions#notebook_id}.

---

##### `notebookPath`<sup>Optional</sup> <a name="notebookPath" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookPath"></a>

```typescript
public readonly notebookPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#notebook_path Permissions#notebook_path}.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#object_type Permissions#object_type}.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#pipeline_id Permissions#pipeline_id}.

---

##### `registeredModelId`<sup>Optional</sup> <a name="registeredModelId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.registeredModelId"></a>

```typescript
public readonly registeredModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#registered_model_id Permissions#registered_model_id}.

---

##### `repoId`<sup>Optional</sup> <a name="repoId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoId"></a>

```typescript
public readonly repoId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#repo_id Permissions#repo_id}.

---

##### `repoPath`<sup>Optional</sup> <a name="repoPath" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoPath"></a>

```typescript
public readonly repoPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#repo_path Permissions#repo_path}.

---

##### `servingEndpointId`<sup>Optional</sup> <a name="servingEndpointId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId"></a>

```typescript
public readonly servingEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}.

---

##### `sqlAlertId`<sup>Optional</sup> <a name="sqlAlertId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId"></a>

```typescript
public readonly sqlAlertId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}.

---

##### `sqlDashboardId`<sup>Optional</sup> <a name="sqlDashboardId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId"></a>

```typescript
public readonly sqlDashboardId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}.

---

##### `sqlEndpointId`<sup>Optional</sup> <a name="sqlEndpointId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId"></a>

```typescript
public readonly sqlEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}.

---

##### `sqlQueryId`<sup>Optional</sup> <a name="sqlQueryId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId"></a>

```typescript
public readonly sqlQueryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#sql_query_id Permissions#sql_query_id}.

---

##### `workspaceFileId`<sup>Optional</sup> <a name="workspaceFileId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId"></a>

```typescript
public readonly workspaceFileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}.

---

##### `workspaceFilePath`<sup>Optional</sup> <a name="workspaceFilePath" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath"></a>

```typescript
public readonly workspaceFilePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### PermissionsAccessControlList <a name="PermissionsAccessControlList" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer"></a>

```typescript
import { permissions } from '@cdktf/provider-databricks'

new permissions.PermissionsAccessControlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.get"></a>

```typescript
public get(index: number): PermissionsAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PermissionsAccessControl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]

---


### PermissionsAccessControlOutputReference <a name="PermissionsAccessControlOutputReference" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer"></a>

```typescript
import { permissions } from '@cdktf/provider-databricks'

new permissions.PermissionsAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupName` <a name="resetGroupName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetServicePrincipalName"></a>

```typescript
public resetServicePrincipalName(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput">permissionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel">permissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `permissionLevelInput`<sup>Optional</sup> <a name="permissionLevelInput" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput"></a>

```typescript
public readonly permissionLevelInput: string;
```

- *Type:* string

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput"></a>

```typescript
public readonly servicePrincipalNameInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel"></a>

```typescript
public readonly permissionLevel: string;
```

- *Type:* string

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PermissionsAccessControl;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>

---




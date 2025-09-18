# `databaseInstance` Submodule <a name="`databaseInstance` Submodule" id="@cdktf/provider-databricks.databaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseInstance <a name="DatabaseInstance" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance databricks_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

new databaseInstance.DatabaseInstance(scope: Construct, id: string, config: DatabaseInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig">DatabaseInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig">DatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef">putParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnablePgNativeLogin">resetEnablePgNativeLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnableReadableSecondaries">resetEnableReadableSecondaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetParentInstanceRef">resetParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetPurgeOnDelete">resetPurgeOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetRetentionWindowInDays">resetRetentionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetStopped">resetStopped</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParentInstanceRef` <a name="putParentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef"></a>

```typescript
public putParentInstanceRef(value: DatabaseInstanceParentInstanceRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

---

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetCapacity"></a>

```typescript
public resetCapacity(): void
```

##### `resetEnablePgNativeLogin` <a name="resetEnablePgNativeLogin" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnablePgNativeLogin"></a>

```typescript
public resetEnablePgNativeLogin(): void
```

##### `resetEnableReadableSecondaries` <a name="resetEnableReadableSecondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnableReadableSecondaries"></a>

```typescript
public resetEnableReadableSecondaries(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetParentInstanceRef` <a name="resetParentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetParentInstanceRef"></a>

```typescript
public resetParentInstanceRef(): void
```

##### `resetPurgeOnDelete` <a name="resetPurgeOnDelete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetPurgeOnDelete"></a>

```typescript
public resetPurgeOnDelete(): void
```

##### `resetRetentionWindowInDays` <a name="resetRetentionWindowInDays" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetRetentionWindowInDays"></a>

```typescript
public resetRetentionWindowInDays(): void
```

##### `resetStopped` <a name="resetStopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetStopped"></a>

```typescript
public resetStopped(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isConstruct"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

databaseInstance.DatabaseInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformElement"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

databaseInstance.DatabaseInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformResource"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

databaseInstance.DatabaseInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

databaseInstance.DatabaseInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.childInstanceRefs">childInstanceRefs</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList">DatabaseInstanceChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnablePgNativeLogin">effectiveEnablePgNativeLogin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnableReadableSecondaries">effectiveEnableReadableSecondaries</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveNodeCount">effectiveNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveRetentionWindowInDays">effectiveRetentionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveStopped">effectiveStopped</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRef">parentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference">DatabaseInstanceParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.pgVersion">pgVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readOnlyDns">readOnlyDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readWriteDns">readWriteDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacityInput">capacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enablePgNativeLoginInput">enablePgNativeLoginInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondariesInput">enableReadableSecondariesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRefInput">parentInstanceRefInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDeleteInput">purgeOnDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDaysInput">retentionWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stoppedInput">stoppedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacity">capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDelete">purgeOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDays">retentionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stopped">stopped</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `childInstanceRefs`<sup>Required</sup> <a name="childInstanceRefs" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.childInstanceRefs"></a>

```typescript
public readonly childInstanceRefs: DatabaseInstanceChildInstanceRefsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList">DatabaseInstanceChildInstanceRefsList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `effectiveEnablePgNativeLogin`<sup>Required</sup> <a name="effectiveEnablePgNativeLogin" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnablePgNativeLogin"></a>

```typescript
public readonly effectiveEnablePgNativeLogin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `effectiveEnableReadableSecondaries`<sup>Required</sup> <a name="effectiveEnableReadableSecondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnableReadableSecondaries"></a>

```typescript
public readonly effectiveEnableReadableSecondaries: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `effectiveNodeCount`<sup>Required</sup> <a name="effectiveNodeCount" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveNodeCount"></a>

```typescript
public readonly effectiveNodeCount: number;
```

- *Type:* number

---

##### `effectiveRetentionWindowInDays`<sup>Required</sup> <a name="effectiveRetentionWindowInDays" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveRetentionWindowInDays"></a>

```typescript
public readonly effectiveRetentionWindowInDays: number;
```

- *Type:* number

---

##### `effectiveStopped`<sup>Required</sup> <a name="effectiveStopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveStopped"></a>

```typescript
public readonly effectiveStopped: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `parentInstanceRef`<sup>Required</sup> <a name="parentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRef"></a>

```typescript
public readonly parentInstanceRef: DatabaseInstanceParentInstanceRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference">DatabaseInstanceParentInstanceRefOutputReference</a>

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.pgVersion"></a>

```typescript
public readonly pgVersion: string;
```

- *Type:* string

---

##### `readOnlyDns`<sup>Required</sup> <a name="readOnlyDns" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readOnlyDns"></a>

```typescript
public readonly readOnlyDns: string;
```

- *Type:* string

---

##### `readWriteDns`<sup>Required</sup> <a name="readWriteDns" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readWriteDns"></a>

```typescript
public readonly readWriteDns: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacityInput"></a>

```typescript
public readonly capacityInput: string;
```

- *Type:* string

---

##### `enablePgNativeLoginInput`<sup>Optional</sup> <a name="enablePgNativeLoginInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enablePgNativeLoginInput"></a>

```typescript
public readonly enablePgNativeLoginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableReadableSecondariesInput`<sup>Optional</sup> <a name="enableReadableSecondariesInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondariesInput"></a>

```typescript
public readonly enableReadableSecondariesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `parentInstanceRefInput`<sup>Optional</sup> <a name="parentInstanceRefInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRefInput"></a>

```typescript
public readonly parentInstanceRefInput: IResolvable | DatabaseInstanceParentInstanceRef;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

---

##### `purgeOnDeleteInput`<sup>Optional</sup> <a name="purgeOnDeleteInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDeleteInput"></a>

```typescript
public readonly purgeOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionWindowInDaysInput`<sup>Optional</sup> <a name="retentionWindowInDaysInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDaysInput"></a>

```typescript
public readonly retentionWindowInDaysInput: number;
```

- *Type:* number

---

##### `stoppedInput`<sup>Optional</sup> <a name="stoppedInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stoppedInput"></a>

```typescript
public readonly stoppedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enablePgNativeLogin"></a>

```typescript
public readonly enablePgNativeLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `purgeOnDelete`<sup>Required</sup> <a name="purgeOnDelete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDelete"></a>

```typescript
public readonly purgeOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionWindowInDays`<sup>Required</sup> <a name="retentionWindowInDays" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDays"></a>

```typescript
public readonly retentionWindowInDays: number;
```

- *Type:* number

---

##### `stopped`<sup>Required</sup> <a name="stopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stopped"></a>

```typescript
public readonly stopped: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseInstanceChildInstanceRefs <a name="DatabaseInstanceChildInstanceRefs" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.Initializer"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

const databaseInstanceChildInstanceRefs: databaseInstance.DatabaseInstanceChildInstanceRefs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.branchTime">branchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.lsn">lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#name DatabaseInstance#name}. |

---

##### `branchTime`<sup>Optional</sup> <a name="branchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

### DatabaseInstanceConfig <a name="DatabaseInstanceConfig" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.Initializer"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

const databaseInstanceConfig: databaseInstance.DatabaseInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#name DatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.capacity">capacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#capacity DatabaseInstance#capacity}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#enable_pg_native_login DatabaseInstance#enable_pg_native_login}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#enable_readable_secondaries DatabaseInstance#enable_readable_secondaries}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#node_count DatabaseInstance#node_count}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.parentInstanceRef">parentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#parent_instance_ref DatabaseInstance#parent_instance_ref}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.purgeOnDelete">purgeOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#purge_on_delete DatabaseInstance#purge_on_delete}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.retentionWindowInDays">retentionWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#retention_window_in_days DatabaseInstance#retention_window_in_days}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.stopped">stopped</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#stopped DatabaseInstance#stopped}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#workspace_id DatabaseInstance#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#capacity DatabaseInstance#capacity}.

---

##### `enablePgNativeLogin`<sup>Optional</sup> <a name="enablePgNativeLogin" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enablePgNativeLogin"></a>

```typescript
public readonly enablePgNativeLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#enable_pg_native_login DatabaseInstance#enable_pg_native_login}.

---

##### `enableReadableSecondaries`<sup>Optional</sup> <a name="enableReadableSecondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#enable_readable_secondaries DatabaseInstance#enable_readable_secondaries}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#node_count DatabaseInstance#node_count}.

---

##### `parentInstanceRef`<sup>Optional</sup> <a name="parentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.parentInstanceRef"></a>

```typescript
public readonly parentInstanceRef: DatabaseInstanceParentInstanceRef;
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#parent_instance_ref DatabaseInstance#parent_instance_ref}.

---

##### `purgeOnDelete`<sup>Optional</sup> <a name="purgeOnDelete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.purgeOnDelete"></a>

```typescript
public readonly purgeOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#purge_on_delete DatabaseInstance#purge_on_delete}.

---

##### `retentionWindowInDays`<sup>Optional</sup> <a name="retentionWindowInDays" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.retentionWindowInDays"></a>

```typescript
public readonly retentionWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#retention_window_in_days DatabaseInstance#retention_window_in_days}.

---

##### `stopped`<sup>Optional</sup> <a name="stopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.stopped"></a>

```typescript
public readonly stopped: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#stopped DatabaseInstance#stopped}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#workspace_id DatabaseInstance#workspace_id}.

---

### DatabaseInstanceParentInstanceRef <a name="DatabaseInstanceParentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.Initializer"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

const databaseInstanceParentInstanceRef: databaseInstance.DatabaseInstanceParentInstanceRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.branchTime">branchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.lsn">lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#name DatabaseInstance#name}. |

---

##### `branchTime`<sup>Optional</sup> <a name="branchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseInstanceChildInstanceRefsList <a name="DatabaseInstanceChildInstanceRefsList" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

new databaseInstance.DatabaseInstanceChildInstanceRefsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.get"></a>

```typescript
public get(index: number): DatabaseInstanceChildInstanceRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseInstanceChildInstanceRefs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a>[]

---


### DatabaseInstanceChildInstanceRefsOutputReference <a name="DatabaseInstanceChildInstanceRefsOutputReference" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

new databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime">resetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetLsn">resetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchTime` <a name="resetBranchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime"></a>

```typescript
public resetBranchTime(): void
```

##### `resetLsn` <a name="resetLsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetLsn"></a>

```typescript
public resetLsn(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn">effectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput">branchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput">lsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTime">branchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsn">lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveLsn`<sup>Required</sup> <a name="effectiveLsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```typescript
public readonly effectiveLsn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `branchTimeInput`<sup>Optional</sup> <a name="branchTimeInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```typescript
public readonly branchTimeInput: string;
```

- *Type:* string

---

##### `lsnInput`<sup>Optional</sup> <a name="lsnInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput"></a>

```typescript
public readonly lsnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `branchTime`<sup>Required</sup> <a name="branchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseInstanceChildInstanceRefs;
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a>

---


### DatabaseInstanceParentInstanceRefOutputReference <a name="DatabaseInstanceParentInstanceRefOutputReference" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer"></a>

```typescript
import { databaseInstance } from '@cdktf/provider-databricks'

new databaseInstance.DatabaseInstanceParentInstanceRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetBranchTime">resetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetLsn">resetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchTime` <a name="resetBranchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetBranchTime"></a>

```typescript
public resetBranchTime(): void
```

##### `resetLsn` <a name="resetLsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetLsn"></a>

```typescript
public resetLsn(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn">effectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput">branchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsnInput">lsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTime">branchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsn">lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveLsn`<sup>Required</sup> <a name="effectiveLsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn"></a>

```typescript
public readonly effectiveLsn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `branchTimeInput`<sup>Optional</sup> <a name="branchTimeInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput"></a>

```typescript
public readonly branchTimeInput: string;
```

- *Type:* string

---

##### `lsnInput`<sup>Optional</sup> <a name="lsnInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsnInput"></a>

```typescript
public readonly lsnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `branchTime`<sup>Required</sup> <a name="branchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseInstanceParentInstanceRef;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

---




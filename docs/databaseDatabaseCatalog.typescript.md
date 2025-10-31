# `databaseDatabaseCatalog` Submodule <a name="`databaseDatabaseCatalog` Submodule" id="@cdktf/provider-databricks.databaseDatabaseCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabaseCatalog <a name="DatabaseDatabaseCatalog" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog databricks_database_database_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer"></a>

```typescript
import { databaseDatabaseCatalog } from '@cdktf/provider-databricks'

new databaseDatabaseCatalog.DatabaseDatabaseCatalog(scope: Construct, id: string, config: DatabaseDatabaseCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig">DatabaseDatabaseCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig">DatabaseDatabaseCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetCreateDatabaseIfNotExists">resetCreateDatabaseIfNotExists</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCreateDatabaseIfNotExists` <a name="resetCreateDatabaseIfNotExists" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetCreateDatabaseIfNotExists"></a>

```typescript
public resetCreateDatabaseIfNotExists(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDatabaseCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct"></a>

```typescript
import { databaseDatabaseCatalog } from '@cdktf/provider-databricks'

databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement"></a>

```typescript
import { databaseDatabaseCatalog } from '@cdktf/provider-databricks'

databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource"></a>

```typescript
import { databaseDatabaseCatalog } from '@cdktf/provider-databricks'

databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport"></a>

```typescript
import { databaseDatabaseCatalog } from '@cdktf/provider-databricks'

databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseDatabaseCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDatabaseCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDatabaseCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDatabaseCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExistsInput">createDatabaseIfNotExistsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceNameInput">databaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExists">createDatabaseIfNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceName">databaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `createDatabaseIfNotExistsInput`<sup>Optional</sup> <a name="createDatabaseIfNotExistsInput" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExistsInput"></a>

```typescript
public readonly createDatabaseIfNotExistsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseInstanceNameInput`<sup>Optional</sup> <a name="databaseInstanceNameInput" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceNameInput"></a>

```typescript
public readonly databaseInstanceNameInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `createDatabaseIfNotExists`<sup>Required</sup> <a name="createDatabaseIfNotExists" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExists"></a>

```typescript
public readonly createDatabaseIfNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseInstanceName`<sup>Required</sup> <a name="databaseInstanceName" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceName"></a>

```typescript
public readonly databaseInstanceName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseCatalogConfig <a name="DatabaseDatabaseCatalogConfig" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.Initializer"></a>

```typescript
import { databaseDatabaseCatalog } from '@cdktf/provider-databricks'

const databaseDatabaseCatalogConfig: databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseInstanceName">databaseInstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.createDatabaseIfNotExists">createDatabaseIfNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseInstanceName`<sup>Required</sup> <a name="databaseInstanceName" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseInstanceName"></a>

```typescript
public readonly databaseInstanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}.

---

##### `createDatabaseIfNotExists`<sup>Optional</sup> <a name="createDatabaseIfNotExists" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.createDatabaseIfNotExists"></a>

```typescript
public readonly createDatabaseIfNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}.

---




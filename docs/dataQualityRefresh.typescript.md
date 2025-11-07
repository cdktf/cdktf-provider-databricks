# `dataQualityRefresh` Submodule <a name="`dataQualityRefresh` Submodule" id="@cdktf/provider-databricks.dataQualityRefresh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataQualityRefresh <a name="DataQualityRefresh" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/data_quality_refresh databricks_data_quality_refresh}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer"></a>

```typescript
import { dataQualityRefresh } from '@cdktf/provider-databricks'

new dataQualityRefresh.DataQualityRefresh(scope: Construct, id: string, config: DataQualityRefreshConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig">DataQualityRefreshConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig">DataQualityRefreshConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataQualityRefresh resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.isConstruct"></a>

```typescript
import { dataQualityRefresh } from '@cdktf/provider-databricks'

dataQualityRefresh.DataQualityRefresh.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformElement"></a>

```typescript
import { dataQualityRefresh } from '@cdktf/provider-databricks'

dataQualityRefresh.DataQualityRefresh.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformResource"></a>

```typescript
import { dataQualityRefresh } from '@cdktf/provider-databricks'

dataQualityRefresh.DataQualityRefresh.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport"></a>

```typescript
import { dataQualityRefresh } from '@cdktf/provider-databricks'

dataQualityRefresh.DataQualityRefresh.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataQualityRefresh resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataQualityRefresh to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataQualityRefresh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/data_quality_refresh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataQualityRefresh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.endTimeMs">endTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.refreshId">refreshId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.startTimeMs">startTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.trigger">trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endTimeMs`<sup>Required</sup> <a name="endTimeMs" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.endTimeMs"></a>

```typescript
public readonly endTimeMs: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `refreshId`<sup>Required</sup> <a name="refreshId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.refreshId"></a>

```typescript
public readonly refreshId: number;
```

- *Type:* number

---

##### `startTimeMs`<sup>Required</sup> <a name="startTimeMs" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.startTimeMs"></a>

```typescript
public readonly startTimeMs: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataQualityRefreshConfig <a name="DataQualityRefreshConfig" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.Initializer"></a>

```typescript
import { dataQualityRefresh } from '@cdktf/provider-databricks'

const dataQualityRefreshConfig: dataQualityRefresh.DataQualityRefreshConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/data_quality_refresh#object_id DataQualityRefresh#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/data_quality_refresh#object_type DataQualityRefresh#object_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/data_quality_refresh#object_id DataQualityRefresh#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/data_quality_refresh#object_type DataQualityRefresh#object_type}.

---




# `onlineTable` Submodule <a name="`onlineTable` Submodule" id="@cdktf/provider-databricks.onlineTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnlineTable <a name="OnlineTable" id="@cdktf/provider-databricks.onlineTable.OnlineTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table databricks_online_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTable(scope: Construct, id: string, config: OnlineTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig">OnlineTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig">OnlineTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.onlineTable.OnlineTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec"></a>

```typescript
public putSpec(value: OnlineTableSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts"></a>

```typescript
public putTimeouts(value: OnlineTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetSpec"></a>

```typescript
public resetSpec(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OnlineTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

onlineTable.OnlineTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

onlineTable.OnlineTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

onlineTable.OnlineTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

onlineTable.OnlineTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OnlineTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnlineTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnlineTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OnlineTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference">OnlineTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.status">status</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList">OnlineTableStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference">OnlineTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.spec"></a>

```typescript
public readonly spec: OnlineTableSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference">OnlineTableSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.status"></a>

```typescript
public readonly status: OnlineTableStatusList;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList">OnlineTableStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeouts"></a>

```typescript
public readonly timeouts: OnlineTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference">OnlineTableTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.specInput"></a>

```typescript
public readonly specInput: OnlineTableSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OnlineTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnlineTableConfig <a name="OnlineTableConfig" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableConfig: onlineTable.OnlineTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#name OnlineTable#name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#id OnlineTable#id}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#name OnlineTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#id OnlineTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.spec"></a>

```typescript
public readonly spec: OnlineTableSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#spec OnlineTable#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OnlineTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#timeouts OnlineTable#timeouts}

---

### OnlineTableSpec <a name="OnlineTableSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableSpec: onlineTable.OnlineTableSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.performFullCopy">performFullCopy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#perform_full_copy OnlineTable#perform_full_copy}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#primary_key_columns OnlineTable#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runContinuously">runContinuously</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | run_continuously block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runTriggered">runTriggered</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | run_triggered block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.sourceTableFullName">sourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#source_table_full_name OnlineTable#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.timeseriesKey">timeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#timeseries_key OnlineTable#timeseries_key}. |

---

##### `performFullCopy`<sup>Optional</sup> <a name="performFullCopy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.performFullCopy"></a>

```typescript
public readonly performFullCopy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#perform_full_copy OnlineTable#perform_full_copy}.

---

##### `primaryKeyColumns`<sup>Optional</sup> <a name="primaryKeyColumns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.primaryKeyColumns"></a>

```typescript
public readonly primaryKeyColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#primary_key_columns OnlineTable#primary_key_columns}.

---

##### `runContinuously`<sup>Optional</sup> <a name="runContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runContinuously"></a>

```typescript
public readonly runContinuously: OnlineTableSpecRunContinuously;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

run_continuously block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#run_continuously OnlineTable#run_continuously}

---

##### `runTriggered`<sup>Optional</sup> <a name="runTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runTriggered"></a>

```typescript
public readonly runTriggered: OnlineTableSpecRunTriggered;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

run_triggered block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#run_triggered OnlineTable#run_triggered}

---

##### `sourceTableFullName`<sup>Optional</sup> <a name="sourceTableFullName" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.sourceTableFullName"></a>

```typescript
public readonly sourceTableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#source_table_full_name OnlineTable#source_table_full_name}.

---

##### `timeseriesKey`<sup>Optional</sup> <a name="timeseriesKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.timeseriesKey"></a>

```typescript
public readonly timeseriesKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#timeseries_key OnlineTable#timeseries_key}.

---

### OnlineTableSpecRunContinuously <a name="OnlineTableSpecRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableSpecRunContinuously: onlineTable.OnlineTableSpecRunContinuously = { ... }
```


### OnlineTableSpecRunTriggered <a name="OnlineTableSpecRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableSpecRunTriggered: onlineTable.OnlineTableSpecRunTriggered = { ... }
```


### OnlineTableStatus <a name="OnlineTableStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatus.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableStatus: onlineTable.OnlineTableStatus = { ... }
```


### OnlineTableStatusContinuousUpdateStatus <a name="OnlineTableStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableStatusContinuousUpdateStatus: onlineTable.OnlineTableStatusContinuousUpdateStatus = { ... }
```


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress: onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress = { ... }
```


### OnlineTableStatusFailedStatus <a name="OnlineTableStatusFailedStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableStatusFailedStatus: onlineTable.OnlineTableStatusFailedStatus = { ... }
```


### OnlineTableStatusProvisioningStatus <a name="OnlineTableStatusProvisioningStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableStatusProvisioningStatus: onlineTable.OnlineTableStatusProvisioningStatus = { ... }
```


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableStatusProvisioningStatusInitialPipelineSyncProgress: onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress = { ... }
```


### OnlineTableStatusTriggeredUpdateStatus <a name="OnlineTableStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableStatusTriggeredUpdateStatus: onlineTable.OnlineTableStatusTriggeredUpdateStatus = { ... }
```


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress: onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress = { ... }
```


### OnlineTableTimeouts <a name="OnlineTableTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

const onlineTableTimeouts: onlineTable.OnlineTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#create OnlineTable#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/online_table#create OnlineTable#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OnlineTableSpecOutputReference <a name="OnlineTableSpecOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously">putRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered">putRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPerformFullCopy">resetPerformFullCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPrimaryKeyColumns">resetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunContinuously">resetRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunTriggered">resetRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetSourceTableFullName">resetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetTimeseriesKey">resetTimeseriesKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRunContinuously` <a name="putRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously"></a>

```typescript
public putRunContinuously(value: OnlineTableSpecRunContinuously): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---

##### `putRunTriggered` <a name="putRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered"></a>

```typescript
public putRunTriggered(value: OnlineTableSpecRunTriggered): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---

##### `resetPerformFullCopy` <a name="resetPerformFullCopy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPerformFullCopy"></a>

```typescript
public resetPerformFullCopy(): void
```

##### `resetPrimaryKeyColumns` <a name="resetPrimaryKeyColumns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```typescript
public resetPrimaryKeyColumns(): void
```

##### `resetRunContinuously` <a name="resetRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunContinuously"></a>

```typescript
public resetRunContinuously(): void
```

##### `resetRunTriggered` <a name="resetRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunTriggered"></a>

```typescript
public resetRunTriggered(): void
```

##### `resetSourceTableFullName` <a name="resetSourceTableFullName" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetSourceTableFullName"></a>

```typescript
public resetSourceTableFullName(): void
```

##### `resetTimeseriesKey` <a name="resetTimeseriesKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetTimeseriesKey"></a>

```typescript
public resetTimeseriesKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuously">runContinuously</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference">OnlineTableSpecRunContinuouslyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggered">runTriggered</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference">OnlineTableSpecRunTriggeredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopyInput">performFullCopyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumnsInput">primaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuouslyInput">runContinuouslyInput</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggeredInput">runTriggeredInput</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullNameInput">sourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKeyInput">timeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopy">performFullCopy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullName">sourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKey">timeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `runContinuously`<sup>Required</sup> <a name="runContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuously"></a>

```typescript
public readonly runContinuously: OnlineTableSpecRunContinuouslyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference">OnlineTableSpecRunContinuouslyOutputReference</a>

---

##### `runTriggered`<sup>Required</sup> <a name="runTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggered"></a>

```typescript
public readonly runTriggered: OnlineTableSpecRunTriggeredOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference">OnlineTableSpecRunTriggeredOutputReference</a>

---

##### `performFullCopyInput`<sup>Optional</sup> <a name="performFullCopyInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopyInput"></a>

```typescript
public readonly performFullCopyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `primaryKeyColumnsInput`<sup>Optional</sup> <a name="primaryKeyColumnsInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```typescript
public readonly primaryKeyColumnsInput: string[];
```

- *Type:* string[]

---

##### `runContinuouslyInput`<sup>Optional</sup> <a name="runContinuouslyInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuouslyInput"></a>

```typescript
public readonly runContinuouslyInput: OnlineTableSpecRunContinuously;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---

##### `runTriggeredInput`<sup>Optional</sup> <a name="runTriggeredInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggeredInput"></a>

```typescript
public readonly runTriggeredInput: OnlineTableSpecRunTriggered;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---

##### `sourceTableFullNameInput`<sup>Optional</sup> <a name="sourceTableFullNameInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```typescript
public readonly sourceTableFullNameInput: string;
```

- *Type:* string

---

##### `timeseriesKeyInput`<sup>Optional</sup> <a name="timeseriesKeyInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKeyInput"></a>

```typescript
public readonly timeseriesKeyInput: string;
```

- *Type:* string

---

##### `performFullCopy`<sup>Required</sup> <a name="performFullCopy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopy"></a>

```typescript
public readonly performFullCopy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `primaryKeyColumns`<sup>Required</sup> <a name="primaryKeyColumns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumns"></a>

```typescript
public readonly primaryKeyColumns: string[];
```

- *Type:* string[]

---

##### `sourceTableFullName`<sup>Required</sup> <a name="sourceTableFullName" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullName"></a>

```typescript
public readonly sourceTableFullName: string;
```

- *Type:* string

---

##### `timeseriesKey`<sup>Required</sup> <a name="timeseriesKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKey"></a>

```typescript
public readonly timeseriesKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---


### OnlineTableSpecRunContinuouslyOutputReference <a name="OnlineTableSpecRunContinuouslyOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableSpecRunContinuouslyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableSpecRunContinuously;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---


### OnlineTableSpecRunTriggeredOutputReference <a name="OnlineTableSpecRunTriggeredOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableSpecRunTriggeredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableSpecRunTriggered;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get"></a>

```typescript
public get(index: number): OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```typescript
public readonly estimatedCompletionTimeSeconds: number;
```

- *Type:* number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```typescript
public readonly latestVersionCurrentlyProcessing: number;
```

- *Type:* number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```typescript
public readonly syncedRowCount: number;
```

- *Type:* number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```typescript
public readonly syncProgressCompletion: number;
```

- *Type:* number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```typescript
public readonly totalRowCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### OnlineTableStatusContinuousUpdateStatusList <a name="OnlineTableStatusContinuousUpdateStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusContinuousUpdateStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get"></a>

```typescript
public get(index: number): OnlineTableStatusContinuousUpdateStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OnlineTableStatusContinuousUpdateStatusOutputReference <a name="OnlineTableStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">initialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus">OnlineTableStatusContinuousUpdateStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialPipelineSyncProgress`<sup>Required</sup> <a name="initialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```typescript
public readonly initialPipelineSyncProgress: OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList</a>

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```typescript
public readonly lastProcessedCommitVersion: number;
```

- *Type:* number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableStatusContinuousUpdateStatus;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus">OnlineTableStatusContinuousUpdateStatus</a>

---


### OnlineTableStatusFailedStatusList <a name="OnlineTableStatusFailedStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusFailedStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get"></a>

```typescript
public get(index: number): OnlineTableStatusFailedStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OnlineTableStatusFailedStatusOutputReference <a name="OnlineTableStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusFailedStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus">OnlineTableStatusFailedStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```typescript
public readonly lastProcessedCommitVersion: number;
```

- *Type:* number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableStatusFailedStatus;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus">OnlineTableStatusFailedStatus</a>

---


### OnlineTableStatusList <a name="OnlineTableStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get"></a>

```typescript
public get(index: number): OnlineTableStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OnlineTableStatusOutputReference <a name="OnlineTableStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.continuousUpdateStatus">continuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList">OnlineTableStatusContinuousUpdateStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.detailedState">detailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.failedStatus">failedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList">OnlineTableStatusFailedStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.provisioningStatus">provisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList">OnlineTableStatusProvisioningStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.triggeredUpdateStatus">triggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList">OnlineTableStatusTriggeredUpdateStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatus">OnlineTableStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuousUpdateStatus`<sup>Required</sup> <a name="continuousUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.continuousUpdateStatus"></a>

```typescript
public readonly continuousUpdateStatus: OnlineTableStatusContinuousUpdateStatusList;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList">OnlineTableStatusContinuousUpdateStatusList</a>

---

##### `detailedState`<sup>Required</sup> <a name="detailedState" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.detailedState"></a>

```typescript
public readonly detailedState: string;
```

- *Type:* string

---

##### `failedStatus`<sup>Required</sup> <a name="failedStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.failedStatus"></a>

```typescript
public readonly failedStatus: OnlineTableStatusFailedStatusList;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList">OnlineTableStatusFailedStatusList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `provisioningStatus`<sup>Required</sup> <a name="provisioningStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.provisioningStatus"></a>

```typescript
public readonly provisioningStatus: OnlineTableStatusProvisioningStatusList;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList">OnlineTableStatusProvisioningStatusList</a>

---

##### `triggeredUpdateStatus`<sup>Required</sup> <a name="triggeredUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.triggeredUpdateStatus"></a>

```typescript
public readonly triggeredUpdateStatus: OnlineTableStatusTriggeredUpdateStatusList;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList">OnlineTableStatusTriggeredUpdateStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableStatus;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatus">OnlineTableStatus</a>

---


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get"></a>

```typescript
public get(index: number): OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```typescript
public readonly estimatedCompletionTimeSeconds: number;
```

- *Type:* number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```typescript
public readonly latestVersionCurrentlyProcessing: number;
```

- *Type:* number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```typescript
public readonly syncedRowCount: number;
```

- *Type:* number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```typescript
public readonly syncProgressCompletion: number;
```

- *Type:* number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```typescript
public readonly totalRowCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### OnlineTableStatusProvisioningStatusList <a name="OnlineTableStatusProvisioningStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusProvisioningStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get"></a>

```typescript
public get(index: number): OnlineTableStatusProvisioningStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OnlineTableStatusProvisioningStatusOutputReference <a name="OnlineTableStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusProvisioningStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">initialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus">OnlineTableStatusProvisioningStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialPipelineSyncProgress`<sup>Required</sup> <a name="initialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```typescript
public readonly initialPipelineSyncProgress: OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableStatusProvisioningStatus;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus">OnlineTableStatusProvisioningStatus</a>

---


### OnlineTableStatusTriggeredUpdateStatusList <a name="OnlineTableStatusTriggeredUpdateStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusTriggeredUpdateStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get"></a>

```typescript
public get(index: number): OnlineTableStatusTriggeredUpdateStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OnlineTableStatusTriggeredUpdateStatusOutputReference <a name="OnlineTableStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">triggeredUpdateProgress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus">OnlineTableStatusTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```typescript
public readonly lastProcessedCommitVersion: number;
```

- *Type:* number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `triggeredUpdateProgress`<sup>Required</sup> <a name="triggeredUpdateProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```typescript
public readonly triggeredUpdateProgress: OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableStatusTriggeredUpdateStatus;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus">OnlineTableStatusTriggeredUpdateStatus</a>

---


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get"></a>

```typescript
public get(index: number): OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```typescript
public readonly estimatedCompletionTimeSeconds: number;
```

- *Type:* number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```typescript
public readonly latestVersionCurrentlyProcessing: number;
```

- *Type:* number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```typescript
public readonly syncedRowCount: number;
```

- *Type:* number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```typescript
public readonly syncProgressCompletion: number;
```

- *Type:* number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```typescript
public readonly totalRowCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress;
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### OnlineTableTimeoutsOutputReference <a name="OnlineTableTimeoutsOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { onlineTable } from '@cdktf/provider-databricks'

new onlineTable.OnlineTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnlineTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

---




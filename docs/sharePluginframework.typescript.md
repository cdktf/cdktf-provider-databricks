# `sharePluginframework` Submodule <a name="`sharePluginframework` Submodule" id="@cdktf/provider-databricks.sharePluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharePluginframework <a name="SharePluginframework" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework databricks_share_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

new sharePluginframework.SharePluginframework(scope: Construct, id: string, config: SharePluginframeworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig">SharePluginframeworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig">SharePluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.putObject">putObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putObject` <a name="putObject" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.putObject"></a>

```typescript
public putObject(value: IResolvable | SharePluginframeworkObject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.putObject.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>[]

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetStorageRoot"></a>

```typescript
public resetStorageRoot(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SharePluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isConstruct"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

sharePluginframework.SharePluginframework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformElement"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

sharePluginframework.SharePluginframework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformResource"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

sharePluginframework.SharePluginframework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

sharePluginframework.SharePluginframework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SharePluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SharePluginframework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SharePluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharePluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.effectiveOwner">effectiveOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.object">object</a></code> | <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList">SharePluginframeworkObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.objectInput">objectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageRootInput">storageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageRoot">storageRoot</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `effectiveOwner`<sup>Required</sup> <a name="effectiveOwner" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.effectiveOwner"></a>

```typescript
public readonly effectiveOwner: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.object"></a>

```typescript
public readonly object: SharePluginframeworkObjectList;
```

- *Type:* <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList">SharePluginframeworkObjectList</a>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.objectInput"></a>

```typescript
public readonly objectInput: IResolvable | SharePluginframeworkObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>[]

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageRootInput"></a>

```typescript
public readonly storageRootInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SharePluginframeworkConfig <a name="SharePluginframeworkConfig" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

const sharePluginframeworkConfig: sharePluginframework.SharePluginframeworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#name SharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.object">object</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>[]</code> | object block. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#owner SharePluginframework#owner}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.storageRoot">storageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#storage_root SharePluginframework#storage_root}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#name SharePluginframework#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.object"></a>

```typescript
public readonly object: IResolvable | SharePluginframeworkObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>[]

object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#object SharePluginframework#object}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#owner SharePluginframework#owner}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#storage_root SharePluginframework#storage_root}.

---

### SharePluginframeworkObject <a name="SharePluginframeworkObject" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

const sharePluginframeworkObject: sharePluginframework.SharePluginframeworkObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.dataObjectType">dataObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#data_object_type SharePluginframework#data_object_type}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#name SharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.cdfEnabled">cdfEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#cdf_enabled SharePluginframework#cdf_enabled}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#content SharePluginframework#content}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.historyDataSharingStatus">historyDataSharingStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#history_data_sharing_status SharePluginframework#history_data_sharing_status}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.partition">partition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>[]</code> | partition block. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.sharedAs">sharedAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#shared_as SharePluginframework#shared_as}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.startVersion">startVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#start_version SharePluginframework#start_version}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.stringSharedAs">stringSharedAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#string_shared_as SharePluginframework#string_shared_as}. |

---

##### `dataObjectType`<sup>Required</sup> <a name="dataObjectType" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.dataObjectType"></a>

```typescript
public readonly dataObjectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#data_object_type SharePluginframework#data_object_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#name SharePluginframework#name}.

---

##### `cdfEnabled`<sup>Optional</sup> <a name="cdfEnabled" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.cdfEnabled"></a>

```typescript
public readonly cdfEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#cdf_enabled SharePluginframework#cdf_enabled}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#content SharePluginframework#content}.

---

##### `historyDataSharingStatus`<sup>Optional</sup> <a name="historyDataSharingStatus" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.historyDataSharingStatus"></a>

```typescript
public readonly historyDataSharingStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#history_data_sharing_status SharePluginframework#history_data_sharing_status}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.partition"></a>

```typescript
public readonly partition: IResolvable | SharePluginframeworkObjectPartition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>[]

partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#partition SharePluginframework#partition}

---

##### `sharedAs`<sup>Optional</sup> <a name="sharedAs" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.sharedAs"></a>

```typescript
public readonly sharedAs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#shared_as SharePluginframework#shared_as}.

---

##### `startVersion`<sup>Optional</sup> <a name="startVersion" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.startVersion"></a>

```typescript
public readonly startVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#start_version SharePluginframework#start_version}.

---

##### `stringSharedAs`<sup>Optional</sup> <a name="stringSharedAs" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.stringSharedAs"></a>

```typescript
public readonly stringSharedAs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#string_shared_as SharePluginframework#string_shared_as}.

---

### SharePluginframeworkObjectPartition <a name="SharePluginframeworkObjectPartition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

const sharePluginframeworkObjectPartition: sharePluginframework.SharePluginframeworkObjectPartition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition.property.value">value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>[]</code> | value block. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition.property.value"></a>

```typescript
public readonly value: IResolvable | SharePluginframeworkObjectPartitionValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>[]

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#value SharePluginframework#value}

---

### SharePluginframeworkObjectPartitionValue <a name="SharePluginframeworkObjectPartitionValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

const sharePluginframeworkObjectPartitionValue: sharePluginframework.SharePluginframeworkObjectPartitionValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#name SharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.op">op</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#op SharePluginframework#op}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#recipient_property_key SharePluginframework#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#value SharePluginframework#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#name SharePluginframework#name}.

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.op"></a>

```typescript
public readonly op: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#op SharePluginframework#op}.

---

##### `recipientPropertyKey`<sup>Optional</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.recipientPropertyKey"></a>

```typescript
public readonly recipientPropertyKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#recipient_property_key SharePluginframework#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/share_pluginframework#value SharePluginframework#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharePluginframeworkObjectList <a name="SharePluginframeworkObjectList" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

new sharePluginframework.SharePluginframeworkObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.get"></a>

```typescript
public get(index: number): SharePluginframeworkObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharePluginframeworkObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>[]

---


### SharePluginframeworkObjectOutputReference <a name="SharePluginframeworkObjectOutputReference" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

new sharePluginframework.SharePluginframeworkObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.putPartition">putPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetCdfEnabled">resetCdfEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus">resetHistoryDataSharingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetSharedAs">resetSharedAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetStartVersion">resetStartVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetStringSharedAs">resetStringSharedAs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartition` <a name="putPartition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.putPartition"></a>

```typescript
public putPartition(value: IResolvable | SharePluginframeworkObjectPartition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.putPartition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>[]

---

##### `resetCdfEnabled` <a name="resetCdfEnabled" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetCdfEnabled"></a>

```typescript
public resetCdfEnabled(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetHistoryDataSharingStatus` <a name="resetHistoryDataSharingStatus" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus"></a>

```typescript
public resetHistoryDataSharingStatus(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetSharedAs` <a name="resetSharedAs" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetSharedAs"></a>

```typescript
public resetSharedAs(): void
```

##### `resetStartVersion` <a name="resetStartVersion" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetStartVersion"></a>

```typescript
public resetStartVersion(): void
```

##### `resetStringSharedAs` <a name="resetStringSharedAs" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetStringSharedAs"></a>

```typescript
public resetStringSharedAs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.addedAt">addedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.addedBy">addedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled">effectiveCdfEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus">effectiveHistoryDataSharingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveSharedAs">effectiveSharedAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveStartVersion">effectiveStartVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.partition">partition</a></code> | <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList">SharePluginframeworkObjectPartitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.cdfEnabledInput">cdfEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.dataObjectTypeInput">dataObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput">historyDataSharingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.partitionInput">partitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.sharedAsInput">sharedAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.startVersionInput">startVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.stringSharedAsInput">stringSharedAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.cdfEnabled">cdfEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.dataObjectType">dataObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.historyDataSharingStatus">historyDataSharingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.sharedAs">sharedAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.startVersion">startVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.stringSharedAs">stringSharedAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addedAt`<sup>Required</sup> <a name="addedAt" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.addedAt"></a>

```typescript
public readonly addedAt: number;
```

- *Type:* number

---

##### `addedBy`<sup>Required</sup> <a name="addedBy" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.addedBy"></a>

```typescript
public readonly addedBy: string;
```

- *Type:* string

---

##### `effectiveCdfEnabled`<sup>Required</sup> <a name="effectiveCdfEnabled" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled"></a>

```typescript
public readonly effectiveCdfEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `effectiveHistoryDataSharingStatus`<sup>Required</sup> <a name="effectiveHistoryDataSharingStatus" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus"></a>

```typescript
public readonly effectiveHistoryDataSharingStatus: string;
```

- *Type:* string

---

##### `effectiveSharedAs`<sup>Required</sup> <a name="effectiveSharedAs" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveSharedAs"></a>

```typescript
public readonly effectiveSharedAs: string;
```

- *Type:* string

---

##### `effectiveStartVersion`<sup>Required</sup> <a name="effectiveStartVersion" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveStartVersion"></a>

```typescript
public readonly effectiveStartVersion: number;
```

- *Type:* number

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.partition"></a>

```typescript
public readonly partition: SharePluginframeworkObjectPartitionList;
```

- *Type:* <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList">SharePluginframeworkObjectPartitionList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `cdfEnabledInput`<sup>Optional</sup> <a name="cdfEnabledInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.cdfEnabledInput"></a>

```typescript
public readonly cdfEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `dataObjectTypeInput`<sup>Optional</sup> <a name="dataObjectTypeInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.dataObjectTypeInput"></a>

```typescript
public readonly dataObjectTypeInput: string;
```

- *Type:* string

---

##### `historyDataSharingStatusInput`<sup>Optional</sup> <a name="historyDataSharingStatusInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput"></a>

```typescript
public readonly historyDataSharingStatusInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: IResolvable | SharePluginframeworkObjectPartition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>[]

---

##### `sharedAsInput`<sup>Optional</sup> <a name="sharedAsInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.sharedAsInput"></a>

```typescript
public readonly sharedAsInput: string;
```

- *Type:* string

---

##### `startVersionInput`<sup>Optional</sup> <a name="startVersionInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.startVersionInput"></a>

```typescript
public readonly startVersionInput: number;
```

- *Type:* number

---

##### `stringSharedAsInput`<sup>Optional</sup> <a name="stringSharedAsInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.stringSharedAsInput"></a>

```typescript
public readonly stringSharedAsInput: string;
```

- *Type:* string

---

##### `cdfEnabled`<sup>Required</sup> <a name="cdfEnabled" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.cdfEnabled"></a>

```typescript
public readonly cdfEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `dataObjectType`<sup>Required</sup> <a name="dataObjectType" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.dataObjectType"></a>

```typescript
public readonly dataObjectType: string;
```

- *Type:* string

---

##### `historyDataSharingStatus`<sup>Required</sup> <a name="historyDataSharingStatus" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.historyDataSharingStatus"></a>

```typescript
public readonly historyDataSharingStatus: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sharedAs`<sup>Required</sup> <a name="sharedAs" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.sharedAs"></a>

```typescript
public readonly sharedAs: string;
```

- *Type:* string

---

##### `startVersion`<sup>Required</sup> <a name="startVersion" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.startVersion"></a>

```typescript
public readonly startVersion: number;
```

- *Type:* number

---

##### `stringSharedAs`<sup>Required</sup> <a name="stringSharedAs" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.stringSharedAs"></a>

```typescript
public readonly stringSharedAs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharePluginframeworkObject;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>

---


### SharePluginframeworkObjectPartitionList <a name="SharePluginframeworkObjectPartitionList" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

new sharePluginframework.SharePluginframeworkObjectPartitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.get"></a>

```typescript
public get(index: number): SharePluginframeworkObjectPartitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharePluginframeworkObjectPartition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>[]

---


### SharePluginframeworkObjectPartitionOutputReference <a name="SharePluginframeworkObjectPartitionOutputReference" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

new sharePluginframework.SharePluginframeworkObjectPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.putValue"></a>

```typescript
public putValue(value: IResolvable | SharePluginframeworkObjectPartitionValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.putValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>[]

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList">SharePluginframeworkObjectPartitionValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.valueInput">valueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.value"></a>

```typescript
public readonly value: SharePluginframeworkObjectPartitionValueList;
```

- *Type:* <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList">SharePluginframeworkObjectPartitionValueList</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | SharePluginframeworkObjectPartitionValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharePluginframeworkObjectPartition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>

---


### SharePluginframeworkObjectPartitionValueList <a name="SharePluginframeworkObjectPartitionValueList" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

new sharePluginframework.SharePluginframeworkObjectPartitionValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.get"></a>

```typescript
public get(index: number): SharePluginframeworkObjectPartitionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharePluginframeworkObjectPartitionValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>[]

---


### SharePluginframeworkObjectPartitionValueOutputReference <a name="SharePluginframeworkObjectPartitionValueOutputReference" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer"></a>

```typescript
import { sharePluginframework } from '@cdktf/provider-databricks'

new sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey">resetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecipientPropertyKey` <a name="resetRecipientPropertyKey" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey"></a>

```typescript
public resetRecipientPropertyKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.opInput">opInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput">recipientPropertyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.op">op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.opInput"></a>

```typescript
public readonly opInput: string;
```

- *Type:* string

---

##### `recipientPropertyKeyInput`<sup>Optional</sup> <a name="recipientPropertyKeyInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput"></a>

```typescript
public readonly recipientPropertyKeyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.op"></a>

```typescript
public readonly op: string;
```

- *Type:* string

---

##### `recipientPropertyKey`<sup>Required</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey"></a>

```typescript
public readonly recipientPropertyKey: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharePluginframeworkObjectPartitionValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>

---




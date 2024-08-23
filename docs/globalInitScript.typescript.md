# `globalInitScript` Submodule <a name="`globalInitScript` Submodule" id="@cdktf/provider-databricks.globalInitScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalInitScript <a name="GlobalInitScript" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script databricks_global_init_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktf/provider-databricks'

new globalInitScript.GlobalInitScript(scope: Construct, id: string, config: GlobalInitScriptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig">GlobalInitScriptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig">GlobalInitScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetMd5">resetMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts"></a>

```typescript
public putTimeouts(value: GlobalInitScriptTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

---

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetContentBase64"></a>

```typescript
public resetContentBase64(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMd5` <a name="resetMd5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetMd5"></a>

```typescript
public resetMd5(): void
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalInitScript resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isConstruct"></a>

```typescript
import { globalInitScript } from '@cdktf/provider-databricks'

globalInitScript.GlobalInitScript.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement"></a>

```typescript
import { globalInitScript } from '@cdktf/provider-databricks'

globalInitScript.GlobalInitScript.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource"></a>

```typescript
import { globalInitScript } from '@cdktf/provider-databricks'

globalInitScript.GlobalInitScript.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport"></a>

```typescript
import { globalInitScript } from '@cdktf/provider-databricks'

globalInitScript.GlobalInitScript.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlobalInitScript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalInitScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalInitScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlobalInitScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference">GlobalInitScriptTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64Input">contentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5Input">md5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5">md5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalInitScriptTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference">GlobalInitScriptTimeoutsOutputReference</a>

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64Input"></a>

```typescript
public readonly contentBase64Input: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `md5Input`<sup>Optional</sup> <a name="md5Input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5Input"></a>

```typescript
public readonly md5Input: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GlobalInitScriptTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `md5`<sup>Required</sup> <a name="md5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5"></a>

```typescript
public readonly md5: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalInitScriptConfig <a name="GlobalInitScriptConfig" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktf/provider-databricks'

const globalInitScriptConfig: globalInitScript.GlobalInitScriptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#name GlobalInitScript#name}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.contentBase64">contentBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#enabled GlobalInitScript#enabled}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#id GlobalInitScript#id}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.md5">md5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#md5 GlobalInitScript#md5}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#position GlobalInitScript#position}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#source GlobalInitScript#source}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#name GlobalInitScript#name}.

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#enabled GlobalInitScript#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#id GlobalInitScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `md5`<sup>Optional</sup> <a name="md5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.md5"></a>

```typescript
public readonly md5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#md5 GlobalInitScript#md5}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#position GlobalInitScript#position}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#source GlobalInitScript#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalInitScriptTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/global_init_script#timeouts GlobalInitScript#timeouts}

---

### GlobalInitScriptTimeouts <a name="GlobalInitScriptTimeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktf/provider-databricks'

const globalInitScriptTimeouts: globalInitScript.GlobalInitScriptTimeouts = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GlobalInitScriptTimeoutsOutputReference <a name="GlobalInitScriptTimeoutsOutputReference" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktf/provider-databricks'

new globalInitScript.GlobalInitScriptTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalInitScriptTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

---




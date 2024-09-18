# `mount` Submodule <a name="`mount` Submodule" id="@cdktf/provider-databricks.mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mount <a name="Mount" id="@cdktf/provider-databricks.mount.Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount databricks_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.Mount.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

new mount.Mount(scope: Construct, id: string, config?: MountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountConfig">MountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mount.Mount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mount.Mount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.mount.Mount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountConfig">MountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putAbfs">putAbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putAdl">putAdl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putGs">putGs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putWasb">putWasb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetAbfs">resetAbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetAdl">resetAdl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetExtraConfigs">resetExtraConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetGs">resetGs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetUri">resetUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetWasb">resetWasb</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mount.Mount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mount.Mount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mount.Mount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mount.Mount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mount.Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mount.Mount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.mount.Mount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mount.Mount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mount.Mount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mount.Mount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mount.Mount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mount.Mount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mount.Mount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mount.Mount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mount.Mount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mount.Mount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mount.Mount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.mount.Mount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mount.Mount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mount.Mount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mount.Mount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mount.Mount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.mount.Mount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mount.Mount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mount.Mount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mount.Mount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mount.Mount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.mount.Mount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mount.Mount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAbfs` <a name="putAbfs" id="@cdktf/provider-databricks.mount.Mount.putAbfs"></a>

```typescript
public putAbfs(value: MountAbfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putAbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a>

---

##### `putAdl` <a name="putAdl" id="@cdktf/provider-databricks.mount.Mount.putAdl"></a>

```typescript
public putAdl(value: MountAdl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putAdl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a>

---

##### `putGs` <a name="putGs" id="@cdktf/provider-databricks.mount.Mount.putGs"></a>

```typescript
public putGs(value: MountGs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putGs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-databricks.mount.Mount.putS3"></a>

```typescript
public putS3(value: MountS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.mount.Mount.putTimeouts"></a>

```typescript
public putTimeouts(value: MountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

---

##### `putWasb` <a name="putWasb" id="@cdktf/provider-databricks.mount.Mount.putWasb"></a>

```typescript
public putWasb(value: MountWasb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putWasb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a>

---

##### `resetAbfs` <a name="resetAbfs" id="@cdktf/provider-databricks.mount.Mount.resetAbfs"></a>

```typescript
public resetAbfs(): void
```

##### `resetAdl` <a name="resetAdl" id="@cdktf/provider-databricks.mount.Mount.resetAdl"></a>

```typescript
public resetAdl(): void
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.mount.Mount.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-databricks.mount.Mount.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetExtraConfigs` <a name="resetExtraConfigs" id="@cdktf/provider-databricks.mount.Mount.resetExtraConfigs"></a>

```typescript
public resetExtraConfigs(): void
```

##### `resetGs` <a name="resetGs" id="@cdktf/provider-databricks.mount.Mount.resetGs"></a>

```typescript
public resetGs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mount.Mount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.mount.Mount.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-databricks.mount.Mount.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-databricks.mount.Mount.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.mount.Mount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-databricks.mount.Mount.resetUri"></a>

```typescript
public resetUri(): void
```

##### `resetWasb` <a name="resetWasb" id="@cdktf/provider-databricks.mount.Mount.resetWasb"></a>

```typescript
public resetWasb(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Mount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mount.Mount.isConstruct"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

mount.Mount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mount.Mount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mount.Mount.isTerraformElement"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

mount.Mount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mount.Mount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mount.Mount.isTerraformResource"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

mount.Mount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mount.Mount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mount.Mount.generateConfigForImport"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

mount.Mount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Mount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mount.Mount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mount.Mount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Mount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mount.Mount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Mount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mount.Mount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Mount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.abfs">abfs</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference">MountAbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.adl">adl</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference">MountAdlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.gs">gs</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference">MountGsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference">MountS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference">MountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.wasb">wasb</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference">MountWasbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.abfsInput">abfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.adlInput">adlInput</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.extraConfigsInput">extraConfigsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.gsInput">gsInput</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.wasbInput">wasbInput</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.extraConfigs">extraConfigs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.uri">uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mount.Mount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mount.Mount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mount.Mount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mount.Mount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mount.Mount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mount.Mount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mount.Mount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mount.Mount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mount.Mount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mount.Mount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mount.Mount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mount.Mount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mount.Mount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mount.Mount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `abfs`<sup>Required</sup> <a name="abfs" id="@cdktf/provider-databricks.mount.Mount.property.abfs"></a>

```typescript
public readonly abfs: MountAbfsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference">MountAbfsOutputReference</a>

---

##### `adl`<sup>Required</sup> <a name="adl" id="@cdktf/provider-databricks.mount.Mount.property.adl"></a>

```typescript
public readonly adl: MountAdlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference">MountAdlOutputReference</a>

---

##### `gs`<sup>Required</sup> <a name="gs" id="@cdktf/provider-databricks.mount.Mount.property.gs"></a>

```typescript
public readonly gs: MountGsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGsOutputReference">MountGsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.mount.Mount.property.s3"></a>

```typescript
public readonly s3: MountS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3OutputReference">MountS3OutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.mount.Mount.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.mount.Mount.property.timeouts"></a>

```typescript
public readonly timeouts: MountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference">MountTimeoutsOutputReference</a>

---

##### `wasb`<sup>Required</sup> <a name="wasb" id="@cdktf/provider-databricks.mount.Mount.property.wasb"></a>

```typescript
public readonly wasb: MountWasbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference">MountWasbOutputReference</a>

---

##### `abfsInput`<sup>Optional</sup> <a name="abfsInput" id="@cdktf/provider-databricks.mount.Mount.property.abfsInput"></a>

```typescript
public readonly abfsInput: MountAbfs;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a>

---

##### `adlInput`<sup>Optional</sup> <a name="adlInput" id="@cdktf/provider-databricks.mount.Mount.property.adlInput"></a>

```typescript
public readonly adlInput: MountAdl;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.mount.Mount.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-databricks.mount.Mount.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `extraConfigsInput`<sup>Optional</sup> <a name="extraConfigsInput" id="@cdktf/provider-databricks.mount.Mount.property.extraConfigsInput"></a>

```typescript
public readonly extraConfigsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gsInput`<sup>Optional</sup> <a name="gsInput" id="@cdktf/provider-databricks.mount.Mount.property.gsInput"></a>

```typescript
public readonly gsInput: MountGs;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mount.Mount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.mount.Mount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-databricks.mount.Mount.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-databricks.mount.Mount.property.s3Input"></a>

```typescript
public readonly s3Input: MountS3;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.mount.Mount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-databricks.mount.Mount.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `wasbInput`<sup>Optional</sup> <a name="wasbInput" id="@cdktf/provider-databricks.mount.Mount.property.wasbInput"></a>

```typescript
public readonly wasbInput: MountWasb;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.mount.Mount.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-databricks.mount.Mount.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `extraConfigs`<sup>Required</sup> <a name="extraConfigs" id="@cdktf/provider-databricks.mount.Mount.property.extraConfigs"></a>

```typescript
public readonly extraConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mount.Mount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.mount.Mount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-databricks.mount.Mount.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-databricks.mount.Mount.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mount.Mount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MountAbfs <a name="MountAbfs" id="@cdktf/provider-databricks.mount.MountAbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountAbfs.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

const mountAbfs: mount.MountAbfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_id Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_secret_key Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_secret_scope Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.initializeFileSystem">initializeFileSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#initialize_file_system Mount#initialize_file_system}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#container_name Mount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#directory Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#storage_account_name Mount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#tenant_id Mount#tenant_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.mount.MountAbfs.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_id Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.mount.MountAbfs.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_secret_key Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.mount.MountAbfs.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_secret_scope Mount#client_secret_scope}.

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktf/provider-databricks.mount.MountAbfs.property.initializeFileSystem"></a>

```typescript
public readonly initializeFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#initialize_file_system Mount#initialize_file_system}.

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktf/provider-databricks.mount.MountAbfs.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#container_name Mount#container_name}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.mount.MountAbfs.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#directory Mount#directory}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.mount.MountAbfs.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#storage_account_name Mount#storage_account_name}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-databricks.mount.MountAbfs.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#tenant_id Mount#tenant_id}.

---

### MountAdl <a name="MountAdl" id="@cdktf/provider-databricks.mount.MountAdl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountAdl.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

const mountAdl: mount.MountAdl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_id Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_secret_key Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_secret_scope Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#directory Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.sparkConfPrefix">sparkConfPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#spark_conf_prefix Mount#spark_conf_prefix}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.storageResourceName">storageResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#storage_resource_name Mount#storage_resource_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#tenant_id Mount#tenant_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.mount.MountAdl.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_id Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.mount.MountAdl.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_secret_key Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.mount.MountAdl.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#client_secret_scope Mount#client_secret_scope}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.mount.MountAdl.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#directory Mount#directory}.

---

##### `sparkConfPrefix`<sup>Optional</sup> <a name="sparkConfPrefix" id="@cdktf/provider-databricks.mount.MountAdl.property.sparkConfPrefix"></a>

```typescript
public readonly sparkConfPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#spark_conf_prefix Mount#spark_conf_prefix}.

---

##### `storageResourceName`<sup>Optional</sup> <a name="storageResourceName" id="@cdktf/provider-databricks.mount.MountAdl.property.storageResourceName"></a>

```typescript
public readonly storageResourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#storage_resource_name Mount#storage_resource_name}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-databricks.mount.MountAdl.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#tenant_id Mount#tenant_id}.

---

### MountConfig <a name="MountConfig" id="@cdktf/provider-databricks.mount.MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountConfig.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

const mountConfig: mount.MountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.abfs">abfs</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | abfs block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.adl">adl</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a></code> | adl block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#cluster_id Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.encryptionType">encryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#encryption_type Mount#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.extraConfigs">extraConfigs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#extra_configs Mount#extra_configs}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.gs">gs</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a></code> | gs block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#id Mount#id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#name Mount#name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#resource_id Mount#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#uri Mount#uri}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.wasb">wasb</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a></code> | wasb block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mount.MountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mount.MountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mount.MountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mount.MountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mount.MountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mount.MountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mount.MountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `abfs`<sup>Optional</sup> <a name="abfs" id="@cdktf/provider-databricks.mount.MountConfig.property.abfs"></a>

```typescript
public readonly abfs: MountAbfs;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a>

abfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#abfs Mount#abfs}

---

##### `adl`<sup>Optional</sup> <a name="adl" id="@cdktf/provider-databricks.mount.MountConfig.property.adl"></a>

```typescript
public readonly adl: MountAdl;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a>

adl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#adl Mount#adl}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.mount.MountConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#cluster_id Mount#cluster_id}.

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-databricks.mount.MountConfig.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#encryption_type Mount#encryption_type}.

---

##### `extraConfigs`<sup>Optional</sup> <a name="extraConfigs" id="@cdktf/provider-databricks.mount.MountConfig.property.extraConfigs"></a>

```typescript
public readonly extraConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#extra_configs Mount#extra_configs}.

---

##### `gs`<sup>Optional</sup> <a name="gs" id="@cdktf/provider-databricks.mount.MountConfig.property.gs"></a>

```typescript
public readonly gs: MountGs;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a>

gs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#gs Mount#gs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mount.MountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#id Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.mount.MountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#name Mount#name}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-databricks.mount.MountConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#resource_id Mount#resource_id}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.mount.MountConfig.property.s3"></a>

```typescript
public readonly s3: MountS3;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#s3 Mount#s3}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mount.MountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#timeouts Mount#timeouts}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-databricks.mount.MountConfig.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#uri Mount#uri}.

---

##### `wasb`<sup>Optional</sup> <a name="wasb" id="@cdktf/provider-databricks.mount.MountConfig.property.wasb"></a>

```typescript
public readonly wasb: MountWasb;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a>

wasb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#wasb Mount#wasb}

---

### MountGs <a name="MountGs" id="@cdktf/provider-databricks.mount.MountGs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountGs.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

const mountGs: mount.MountGs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountGs.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#bucket_name Mount#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGs.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#service_account Mount#service_account}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.mount.MountGs.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#bucket_name Mount#bucket_name}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-databricks.mount.MountGs.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#service_account Mount#service_account}.

---

### MountS3 <a name="MountS3" id="@cdktf/provider-databricks.mount.MountS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountS3.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

const mountS3: mount.MountS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#bucket_name Mount#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3.property.instanceProfile">instanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#instance_profile Mount#instance_profile}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.mount.MountS3.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#bucket_name Mount#bucket_name}.

---

##### `instanceProfile`<sup>Optional</sup> <a name="instanceProfile" id="@cdktf/provider-databricks.mount.MountS3.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#instance_profile Mount#instance_profile}.

---

### MountTimeouts <a name="MountTimeouts" id="@cdktf/provider-databricks.mount.MountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountTimeouts.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

const mountTimeouts: mount.MountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#default Mount#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-databricks.mount.MountTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#default Mount#default}.

---

### MountWasb <a name="MountWasb" id="@cdktf/provider-databricks.mount.MountWasb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountWasb.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

const mountWasb: mount.MountWasb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#auth_type Mount#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.tokenSecretKey">tokenSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#token_secret_key Mount#token_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.tokenSecretScope">tokenSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#token_secret_scope Mount#token_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#container_name Mount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#directory Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#storage_account_name Mount#storage_account_name}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-databricks.mount.MountWasb.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#auth_type Mount#auth_type}.

---

##### `tokenSecretKey`<sup>Required</sup> <a name="tokenSecretKey" id="@cdktf/provider-databricks.mount.MountWasb.property.tokenSecretKey"></a>

```typescript
public readonly tokenSecretKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#token_secret_key Mount#token_secret_key}.

---

##### `tokenSecretScope`<sup>Required</sup> <a name="tokenSecretScope" id="@cdktf/provider-databricks.mount.MountWasb.property.tokenSecretScope"></a>

```typescript
public readonly tokenSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#token_secret_scope Mount#token_secret_scope}.

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktf/provider-databricks.mount.MountWasb.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#container_name Mount#container_name}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.mount.MountWasb.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#directory Mount#directory}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.mount.MountWasb.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mount#storage_account_name Mount#storage_account_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### MountAbfsOutputReference <a name="MountAbfsOutputReference" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

new mount.MountAbfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetContainerName"></a>

```typescript
public resetContainerName(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetStorageAccountName"></a>

```typescript
public resetStorageAccountName(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKeyInput">clientSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScopeInput">clientSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystemInput">initializeFileSystemInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystem">initializeFileSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretKeyInput`<sup>Optional</sup> <a name="clientSecretKeyInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKeyInput"></a>

```typescript
public readonly clientSecretKeyInput: string;
```

- *Type:* string

---

##### `clientSecretScopeInput`<sup>Optional</sup> <a name="clientSecretScopeInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScopeInput"></a>

```typescript
public readonly clientSecretScopeInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `initializeFileSystemInput`<sup>Optional</sup> <a name="initializeFileSystemInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystemInput"></a>

```typescript
public readonly initializeFileSystemInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystem"></a>

```typescript
public readonly initializeFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MountAbfs;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a>

---


### MountAdlOutputReference <a name="MountAdlOutputReference" id="@cdktf/provider-databricks.mount.MountAdlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

new mount.MountAdlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resetSparkConfPrefix">resetSparkConfPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resetStorageResourceName">resetStorageResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetSparkConfPrefix` <a name="resetSparkConfPrefix" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resetSparkConfPrefix"></a>

```typescript
public resetSparkConfPrefix(): void
```

##### `resetStorageResourceName` <a name="resetStorageResourceName" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resetStorageResourceName"></a>

```typescript
public resetStorageResourceName(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKeyInput">clientSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScopeInput">clientSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefixInput">sparkConfPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.storageResourceNameInput">storageResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefix">sparkConfPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.storageResourceName">storageResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretKeyInput`<sup>Optional</sup> <a name="clientSecretKeyInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKeyInput"></a>

```typescript
public readonly clientSecretKeyInput: string;
```

- *Type:* string

---

##### `clientSecretScopeInput`<sup>Optional</sup> <a name="clientSecretScopeInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScopeInput"></a>

```typescript
public readonly clientSecretScopeInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `sparkConfPrefixInput`<sup>Optional</sup> <a name="sparkConfPrefixInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefixInput"></a>

```typescript
public readonly sparkConfPrefixInput: string;
```

- *Type:* string

---

##### `storageResourceNameInput`<sup>Optional</sup> <a name="storageResourceNameInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.storageResourceNameInput"></a>

```typescript
public readonly storageResourceNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `sparkConfPrefix`<sup>Required</sup> <a name="sparkConfPrefix" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefix"></a>

```typescript
public readonly sparkConfPrefix: string;
```

- *Type:* string

---

##### `storageResourceName`<sup>Required</sup> <a name="storageResourceName" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.storageResourceName"></a>

```typescript
public readonly storageResourceName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MountAdl;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a>

---


### MountGsOutputReference <a name="MountGsOutputReference" id="@cdktf/provider-databricks.mount.MountGsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

new mount.MountGsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mount.MountGsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountGsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mount.MountGsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountGsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mount.MountGsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-databricks.mount.MountGsOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MountGs;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a>

---


### MountS3OutputReference <a name="MountS3OutputReference" id="@cdktf/provider-databricks.mount.MountS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

new mount.MountS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.resetInstanceProfile">resetInstanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mount.MountS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mount.MountS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mount.MountS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceProfile` <a name="resetInstanceProfile" id="@cdktf/provider-databricks.mount.MountS3OutputReference.resetInstanceProfile"></a>

```typescript
public resetInstanceProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.instanceProfileInput">instanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.instanceProfile">instanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `instanceProfileInput`<sup>Optional</sup> <a name="instanceProfileInput" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.instanceProfileInput"></a>

```typescript
public readonly instanceProfileInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `instanceProfile`<sup>Required</sup> <a name="instanceProfile" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MountS3;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a>

---


### MountTimeoutsOutputReference <a name="MountTimeoutsOutputReference" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

new mount.MountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

---


### MountWasbOutputReference <a name="MountWasbOutputReference" id="@cdktf/provider-databricks.mount.MountWasbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer"></a>

```typescript
import { mount } from '@cdktf/provider-databricks'

new mount.MountWasbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resetContainerName"></a>

```typescript
public resetContainerName(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resetStorageAccountName"></a>

```typescript
public resetStorageAccountName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKeyInput">tokenSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScopeInput">tokenSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKey">tokenSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScope">tokenSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `tokenSecretKeyInput`<sup>Optional</sup> <a name="tokenSecretKeyInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKeyInput"></a>

```typescript
public readonly tokenSecretKeyInput: string;
```

- *Type:* string

---

##### `tokenSecretScopeInput`<sup>Optional</sup> <a name="tokenSecretScopeInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScopeInput"></a>

```typescript
public readonly tokenSecretScopeInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `tokenSecretKey`<sup>Required</sup> <a name="tokenSecretKey" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKey"></a>

```typescript
public readonly tokenSecretKey: string;
```

- *Type:* string

---

##### `tokenSecretScope`<sup>Required</sup> <a name="tokenSecretScope" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScope"></a>

```typescript
public readonly tokenSecretScope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MountWasb;
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a>

---




# `externalLocation` Submodule <a name="`externalLocation` Submodule" id="@cdktf/provider-databricks.externalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalLocation <a name="ExternalLocation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location databricks_external_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocation(scope: Construct, id: string, config: ExternalLocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig">ExternalLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig">ExternalLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails">putEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue">putFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEnableFileEvents">resetEnableFileEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEncryptionDetails">resetEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetFallback">resetFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetFileEventQueue">resetFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetIsolationMode">resetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation">resetSkipValidation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionDetails` <a name="putEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails"></a>

```typescript
public putEncryptionDetails(value: ExternalLocationEncryptionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---

##### `putFileEventQueue` <a name="putFileEventQueue" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue"></a>

```typescript
public putFileEventQueue(value: ExternalLocationFileEventQueue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetEnableFileEvents` <a name="resetEnableFileEvents" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEnableFileEvents"></a>

```typescript
public resetEnableFileEvents(): void
```

##### `resetEncryptionDetails` <a name="resetEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEncryptionDetails"></a>

```typescript
public resetEncryptionDetails(): void
```

##### `resetFallback` <a name="resetFallback" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetFallback"></a>

```typescript
public resetFallback(): void
```

##### `resetFileEventQueue` <a name="resetFileEventQueue" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetFileEventQueue"></a>

```typescript
public resetFileEventQueue(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceUpdate"></a>

```typescript
public resetForceUpdate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsolationMode` <a name="resetIsolationMode" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetIsolationMode"></a>

```typescript
public resetIsolationMode(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSkipValidation` <a name="resetSkipValidation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation"></a>

```typescript
public resetSkipValidation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

externalLocation.ExternalLocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

externalLocation.ExternalLocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

externalLocation.ExternalLocation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

externalLocation.ExternalLocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ExternalLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExternalLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExternalLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExternalLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.browseOnly">browseOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialId">credentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetails">encryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueue">fileEventQueue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference">ExternalLocationFileEventQueueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput">credentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.enableFileEventsInput">enableFileEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetailsInput">encryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fallbackInput">fallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueueInput">fileEventQueueInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdateInput">forceUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationModeInput">isolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput">skipValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.enableFileEvents">enableFileEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fallback">fallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationMode">isolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation">skipValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.browseOnly"></a>

```typescript
public readonly browseOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

---

##### `encryptionDetails`<sup>Required</sup> <a name="encryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetails"></a>

```typescript
public readonly encryptionDetails: ExternalLocationEncryptionDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsOutputReference</a>

---

##### `fileEventQueue`<sup>Required</sup> <a name="fileEventQueue" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueue"></a>

```typescript
public readonly fileEventQueue: ExternalLocationFileEventQueueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference">ExternalLocationFileEventQueueOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput"></a>

```typescript
public readonly credentialNameInput: string;
```

- *Type:* string

---

##### `enableFileEventsInput`<sup>Optional</sup> <a name="enableFileEventsInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.enableFileEventsInput"></a>

```typescript
public readonly enableFileEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionDetailsInput`<sup>Optional</sup> <a name="encryptionDetailsInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetailsInput"></a>

```typescript
public readonly encryptionDetailsInput: ExternalLocationEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---

##### `fallbackInput`<sup>Optional</sup> <a name="fallbackInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fallbackInput"></a>

```typescript
public readonly fallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileEventQueueInput`<sup>Optional</sup> <a name="fileEventQueueInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueueInput"></a>

```typescript
public readonly fileEventQueueInput: ExternalLocationFileEventQueue;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdateInput"></a>

```typescript
public readonly forceUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isolationModeInput`<sup>Optional</sup> <a name="isolationModeInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationModeInput"></a>

```typescript
public readonly isolationModeInput: string;
```

- *Type:* string

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipValidationInput`<sup>Optional</sup> <a name="skipValidationInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput"></a>

```typescript
public readonly skipValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `enableFileEvents`<sup>Required</sup> <a name="enableFileEvents" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.enableFileEvents"></a>

```typescript
public readonly enableFileEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fallback"></a>

```typescript
public readonly fallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isolationMode`<sup>Required</sup> <a name="isolationMode" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationMode"></a>

```typescript
public readonly isolationMode: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipValidation`<sup>Required</sup> <a name="skipValidation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation"></a>

```typescript
public readonly skipValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalLocationConfig <a name="ExternalLocationConfig" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationConfig: externalLocation.ExternalLocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName">credentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#name ExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#url ExternalLocation#url}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#comment ExternalLocation#comment}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.enableFileEvents">enableFileEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.encryptionDetails">encryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.fallback">fallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#fallback ExternalLocation#fallback}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.fileEventQueue">fileEventQueue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | file_event_queue block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#force_update ExternalLocation#force_update}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#id ExternalLocation#id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.isolationMode">isolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#owner ExternalLocation#owner}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#read_only ExternalLocation#read_only}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation">skipValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#name ExternalLocation#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#url ExternalLocation#url}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#comment ExternalLocation#comment}.

---

##### `enableFileEvents`<sup>Optional</sup> <a name="enableFileEvents" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.enableFileEvents"></a>

```typescript
public readonly enableFileEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}.

---

##### `encryptionDetails`<sup>Optional</sup> <a name="encryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.encryptionDetails"></a>

```typescript
public readonly encryptionDetails: ExternalLocationEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#encryption_details ExternalLocation#encryption_details}

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.fallback"></a>

```typescript
public readonly fallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#fallback ExternalLocation#fallback}.

---

##### `fileEventQueue`<sup>Optional</sup> <a name="fileEventQueue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.fileEventQueue"></a>

```typescript
public readonly fileEventQueue: ExternalLocationFileEventQueue;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#file_event_queue ExternalLocation#file_event_queue}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#force_update ExternalLocation#force_update}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#id ExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationMode`<sup>Optional</sup> <a name="isolationMode" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.isolationMode"></a>

```typescript
public readonly isolationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#owner ExternalLocation#owner}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#read_only ExternalLocation#read_only}.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation"></a>

```typescript
public readonly skipValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}.

---

### ExternalLocationEncryptionDetails <a name="ExternalLocationEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationEncryptionDetails: externalLocation.ExternalLocationEncryptionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.property.sseEncryptionDetails">sseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `sseEncryptionDetails`<sup>Optional</sup> <a name="sseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.property.sseEncryptionDetails"></a>

```typescript
public readonly sseEncryptionDetails: ExternalLocationEncryptionDetailsSseEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#sse_encryption_details ExternalLocation#sse_encryption_details}

---

### ExternalLocationEncryptionDetailsSseEncryptionDetails <a name="ExternalLocationEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationEncryptionDetailsSseEncryptionDetails: externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}.

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="awsKmsKeyArn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```typescript
public readonly awsKmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}.

---

### ExternalLocationFileEventQueue <a name="ExternalLocationFileEventQueue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationFileEventQueue: externalLocation.ExternalLocationFileEventQueue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedAqs">managedAqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a></code> | managed_aqs block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedPubsub">managedPubsub</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a></code> | managed_pubsub block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedSqs">managedSqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a></code> | managed_sqs block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedAqs">providedAqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a></code> | provided_aqs block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedPubsub">providedPubsub</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a></code> | provided_pubsub block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedSqs">providedSqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a></code> | provided_sqs block. |

---

##### `managedAqs`<sup>Optional</sup> <a name="managedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedAqs"></a>

```typescript
public readonly managedAqs: ExternalLocationFileEventQueueManagedAqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

managed_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#managed_aqs ExternalLocation#managed_aqs}

---

##### `managedPubsub`<sup>Optional</sup> <a name="managedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedPubsub"></a>

```typescript
public readonly managedPubsub: ExternalLocationFileEventQueueManagedPubsub;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

managed_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#managed_pubsub ExternalLocation#managed_pubsub}

---

##### `managedSqs`<sup>Optional</sup> <a name="managedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedSqs"></a>

```typescript
public readonly managedSqs: ExternalLocationFileEventQueueManagedSqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

managed_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#managed_sqs ExternalLocation#managed_sqs}

---

##### `providedAqs`<sup>Optional</sup> <a name="providedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedAqs"></a>

```typescript
public readonly providedAqs: ExternalLocationFileEventQueueProvidedAqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

provided_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#provided_aqs ExternalLocation#provided_aqs}

---

##### `providedPubsub`<sup>Optional</sup> <a name="providedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedPubsub"></a>

```typescript
public readonly providedPubsub: ExternalLocationFileEventQueueProvidedPubsub;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

provided_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#provided_pubsub ExternalLocation#provided_pubsub}

---

##### `providedSqs`<sup>Optional</sup> <a name="providedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedSqs"></a>

```typescript
public readonly providedSqs: ExternalLocationFileEventQueueProvidedSqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

provided_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#provided_sqs ExternalLocation#provided_sqs}

---

### ExternalLocationFileEventQueueManagedAqs <a name="ExternalLocationFileEventQueueManagedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationFileEventQueueManagedAqs: externalLocation.ExternalLocationFileEventQueueManagedAqs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

### ExternalLocationFileEventQueueManagedPubsub <a name="ExternalLocationFileEventQueueManagedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationFileEventQueueManagedPubsub: externalLocation.ExternalLocationFileEventQueueManagedPubsub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}. |

---

##### `subscriptionName`<sup>Optional</sup> <a name="subscriptionName" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

### ExternalLocationFileEventQueueManagedSqs <a name="ExternalLocationFileEventQueueManagedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationFileEventQueueManagedSqs: externalLocation.ExternalLocationFileEventQueueManagedSqs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

### ExternalLocationFileEventQueueProvidedAqs <a name="ExternalLocationFileEventQueueProvidedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationFileEventQueueProvidedAqs: externalLocation.ExternalLocationFileEventQueueProvidedAqs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}. |

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

### ExternalLocationFileEventQueueProvidedPubsub <a name="ExternalLocationFileEventQueueProvidedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationFileEventQueueProvidedPubsub: externalLocation.ExternalLocationFileEventQueueProvidedPubsub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}. |

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

### ExternalLocationFileEventQueueProvidedSqs <a name="ExternalLocationFileEventQueueProvidedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

const externalLocationFileEventQueueProvidedSqs: externalLocation.ExternalLocationFileEventQueueProvidedSqs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalLocationEncryptionDetailsOutputReference <a name="ExternalLocationEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocationEncryptionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails">putSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resetSseEncryptionDetails">resetSseEncryptionDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSseEncryptionDetails` <a name="putSseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```typescript
public putSseEncryptionDetails(value: ExternalLocationEncryptionDetailsSseEncryptionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---

##### `resetSseEncryptionDetails` <a name="resetSseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```typescript
public resetSseEncryptionDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetails">sseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">sseEncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sseEncryptionDetails`<sup>Required</sup> <a name="sseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```typescript
public readonly sseEncryptionDetails: ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `sseEncryptionDetailsInput`<sup>Optional</sup> <a name="sseEncryptionDetailsInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```typescript
public readonly sseEncryptionDetailsInput: ExternalLocationEncryptionDetailsSseEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalLocationEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---


### ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference <a name="ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">resetAwsKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetAwsKmsKeyArn` <a name="resetAwsKmsKeyArn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```typescript
public resetAwsKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">awsKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `awsKmsKeyArnInput`<sup>Optional</sup> <a name="awsKmsKeyArnInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```typescript
public readonly awsKmsKeyArnInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="awsKmsKeyArn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```typescript
public readonly awsKmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalLocationEncryptionDetailsSseEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---


### ExternalLocationFileEventQueueManagedAqsOutputReference <a name="ExternalLocationFileEventQueueManagedAqsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resetQueueUrl"></a>

```typescript
public resetQueueUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.managedResourceId"></a>

```typescript
public readonly managedResourceId: string;
```

- *Type:* string

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroupInput"></a>

```typescript
public readonly resourceGroupInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalLocationFileEventQueueManagedAqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

---


### ExternalLocationFileEventQueueManagedPubsubOutputReference <a name="ExternalLocationFileEventQueueManagedPubsubOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resetSubscriptionName">resetSubscriptionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriptionName` <a name="resetSubscriptionName" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resetSubscriptionName"></a>

```typescript
public resetSubscriptionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.managedResourceId"></a>

```typescript
public readonly managedResourceId: string;
```

- *Type:* string

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput"></a>

```typescript
public readonly subscriptionNameInput: string;
```

- *Type:* string

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalLocationFileEventQueueManagedPubsub;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

---


### ExternalLocationFileEventQueueManagedSqsOutputReference <a name="ExternalLocationFileEventQueueManagedSqsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resetQueueUrl"></a>

```typescript
public resetQueueUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.managedResourceId"></a>

```typescript
public readonly managedResourceId: string;
```

- *Type:* string

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalLocationFileEventQueueManagedSqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

---


### ExternalLocationFileEventQueueOutputReference <a name="ExternalLocationFileEventQueueOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocationFileEventQueueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs">putManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedPubsub">putManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedSqs">putManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs">putProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedPubsub">putProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedSqs">putProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedAqs">resetManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedPubsub">resetManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedSqs">resetManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedAqs">resetProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedPubsub">resetProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedSqs">resetProvidedSqs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedAqs` <a name="putManagedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs"></a>

```typescript
public putManagedAqs(value: ExternalLocationFileEventQueueManagedAqs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

---

##### `putManagedPubsub` <a name="putManagedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedPubsub"></a>

```typescript
public putManagedPubsub(value: ExternalLocationFileEventQueueManagedPubsub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

---

##### `putManagedSqs` <a name="putManagedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedSqs"></a>

```typescript
public putManagedSqs(value: ExternalLocationFileEventQueueManagedSqs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedSqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

---

##### `putProvidedAqs` <a name="putProvidedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs"></a>

```typescript
public putProvidedAqs(value: ExternalLocationFileEventQueueProvidedAqs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

---

##### `putProvidedPubsub` <a name="putProvidedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedPubsub"></a>

```typescript
public putProvidedPubsub(value: ExternalLocationFileEventQueueProvidedPubsub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

---

##### `putProvidedSqs` <a name="putProvidedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedSqs"></a>

```typescript
public putProvidedSqs(value: ExternalLocationFileEventQueueProvidedSqs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedSqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

---

##### `resetManagedAqs` <a name="resetManagedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedAqs"></a>

```typescript
public resetManagedAqs(): void
```

##### `resetManagedPubsub` <a name="resetManagedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedPubsub"></a>

```typescript
public resetManagedPubsub(): void
```

##### `resetManagedSqs` <a name="resetManagedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedSqs"></a>

```typescript
public resetManagedSqs(): void
```

##### `resetProvidedAqs` <a name="resetProvidedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedAqs"></a>

```typescript
public resetProvidedAqs(): void
```

##### `resetProvidedPubsub` <a name="resetProvidedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedPubsub"></a>

```typescript
public resetProvidedPubsub(): void
```

##### `resetProvidedSqs` <a name="resetProvidedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedSqs"></a>

```typescript
public resetProvidedSqs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqs">managedAqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference">ExternalLocationFileEventQueueManagedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsub">managedPubsub</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference">ExternalLocationFileEventQueueManagedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqs">managedSqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference">ExternalLocationFileEventQueueManagedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqs">providedAqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference">ExternalLocationFileEventQueueProvidedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsub">providedPubsub</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference">ExternalLocationFileEventQueueProvidedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqs">providedSqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference">ExternalLocationFileEventQueueProvidedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqsInput">managedAqsInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsubInput">managedPubsubInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqsInput">managedSqsInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqsInput">providedAqsInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsubInput">providedPubsubInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqsInput">providedSqsInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedAqs`<sup>Required</sup> <a name="managedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqs"></a>

```typescript
public readonly managedAqs: ExternalLocationFileEventQueueManagedAqsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference">ExternalLocationFileEventQueueManagedAqsOutputReference</a>

---

##### `managedPubsub`<sup>Required</sup> <a name="managedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsub"></a>

```typescript
public readonly managedPubsub: ExternalLocationFileEventQueueManagedPubsubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference">ExternalLocationFileEventQueueManagedPubsubOutputReference</a>

---

##### `managedSqs`<sup>Required</sup> <a name="managedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqs"></a>

```typescript
public readonly managedSqs: ExternalLocationFileEventQueueManagedSqsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference">ExternalLocationFileEventQueueManagedSqsOutputReference</a>

---

##### `providedAqs`<sup>Required</sup> <a name="providedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqs"></a>

```typescript
public readonly providedAqs: ExternalLocationFileEventQueueProvidedAqsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference">ExternalLocationFileEventQueueProvidedAqsOutputReference</a>

---

##### `providedPubsub`<sup>Required</sup> <a name="providedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsub"></a>

```typescript
public readonly providedPubsub: ExternalLocationFileEventQueueProvidedPubsubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference">ExternalLocationFileEventQueueProvidedPubsubOutputReference</a>

---

##### `providedSqs`<sup>Required</sup> <a name="providedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqs"></a>

```typescript
public readonly providedSqs: ExternalLocationFileEventQueueProvidedSqsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference">ExternalLocationFileEventQueueProvidedSqsOutputReference</a>

---

##### `managedAqsInput`<sup>Optional</sup> <a name="managedAqsInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqsInput"></a>

```typescript
public readonly managedAqsInput: ExternalLocationFileEventQueueManagedAqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

---

##### `managedPubsubInput`<sup>Optional</sup> <a name="managedPubsubInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsubInput"></a>

```typescript
public readonly managedPubsubInput: ExternalLocationFileEventQueueManagedPubsub;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

---

##### `managedSqsInput`<sup>Optional</sup> <a name="managedSqsInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqsInput"></a>

```typescript
public readonly managedSqsInput: ExternalLocationFileEventQueueManagedSqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

---

##### `providedAqsInput`<sup>Optional</sup> <a name="providedAqsInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqsInput"></a>

```typescript
public readonly providedAqsInput: ExternalLocationFileEventQueueProvidedAqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

---

##### `providedPubsubInput`<sup>Optional</sup> <a name="providedPubsubInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsubInput"></a>

```typescript
public readonly providedPubsubInput: ExternalLocationFileEventQueueProvidedPubsub;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

---

##### `providedSqsInput`<sup>Optional</sup> <a name="providedSqsInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqsInput"></a>

```typescript
public readonly providedSqsInput: ExternalLocationFileEventQueueProvidedSqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalLocationFileEventQueue;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

---


### ExternalLocationFileEventQueueProvidedAqsOutputReference <a name="ExternalLocationFileEventQueueProvidedAqsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetResourceGroup"></a>

```typescript
public resetResourceGroup(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.managedResourceId"></a>

```typescript
public readonly managedResourceId: string;
```

- *Type:* string

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput"></a>

```typescript
public readonly resourceGroupInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalLocationFileEventQueueProvidedAqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

---


### ExternalLocationFileEventQueueProvidedPubsubOutputReference <a name="ExternalLocationFileEventQueueProvidedPubsubOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.managedResourceId"></a>

```typescript
public readonly managedResourceId: string;
```

- *Type:* string

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput"></a>

```typescript
public readonly subscriptionNameInput: string;
```

- *Type:* string

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalLocationFileEventQueueProvidedPubsub;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

---


### ExternalLocationFileEventQueueProvidedSqsOutputReference <a name="ExternalLocationFileEventQueueProvidedSqsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer"></a>

```typescript
import { externalLocation } from '@cdktf/provider-databricks'

new externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.managedResourceId"></a>

```typescript
public readonly managedResourceId: string;
```

- *Type:* string

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalLocationFileEventQueueProvidedSqs;
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

---




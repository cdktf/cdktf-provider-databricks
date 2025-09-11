# `catalog` Submodule <a name="`catalog` Submodule" id="@cdktf/provider-databricks.catalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Catalog <a name="Catalog" id="@cdktf/provider-databricks.catalog.Catalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog databricks_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.catalog.Catalog.Initializer"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

new catalog.Catalog(scope: Construct, id: string, config?: CatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig">CatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogConfig">CatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag">putEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.putProvisioningInfo">putProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetEffectivePredictiveOptimizationFlag">resetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetEnablePredictiveOptimization">resetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetIsolationMode">resetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetProvisioningInfo">resetProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.catalog.Catalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.catalog.Catalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.catalog.Catalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalog.Catalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.catalog.Catalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.catalog.Catalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.catalog.Catalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.catalog.Catalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.catalog.Catalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.catalog.Catalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.catalog.Catalog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.catalog.Catalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.catalog.Catalog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.catalog.Catalog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalog.Catalog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.catalog.Catalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.Catalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.catalog.Catalog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.catalog.Catalog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.catalog.Catalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.catalog.Catalog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.catalog.Catalog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEffectivePredictiveOptimizationFlag` <a name="putEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag"></a>

```typescript
public putEffectivePredictiveOptimizationFlag(value: CatalogEffectivePredictiveOptimizationFlag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---

##### `putProvisioningInfo` <a name="putProvisioningInfo" id="@cdktf/provider-databricks.catalog.Catalog.putProvisioningInfo"></a>

```typescript
public putProvisioningInfo(value: CatalogProvisioningInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalog.Catalog.putProvisioningInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktf/provider-databricks.catalog.Catalog.resetBrowseOnly"></a>

```typescript
public resetBrowseOnly(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.catalog.Catalog.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-databricks.catalog.Catalog.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```

##### `resetEffectivePredictiveOptimizationFlag` <a name="resetEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.catalog.Catalog.resetEffectivePredictiveOptimizationFlag"></a>

```typescript
public resetEffectivePredictiveOptimizationFlag(): void
```

##### `resetEnablePredictiveOptimization` <a name="resetEnablePredictiveOptimization" id="@cdktf/provider-databricks.catalog.Catalog.resetEnablePredictiveOptimization"></a>

```typescript
public resetEnablePredictiveOptimization(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-databricks.catalog.Catalog.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.catalog.Catalog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsolationMode` <a name="resetIsolationMode" id="@cdktf/provider-databricks.catalog.Catalog.resetIsolationMode"></a>

```typescript
public resetIsolationMode(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.catalog.Catalog.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.catalog.Catalog.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-databricks.catalog.Catalog.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.catalog.Catalog.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-databricks.catalog.Catalog.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktf/provider-databricks.catalog.Catalog.resetProviderName"></a>

```typescript
public resetProviderName(): void
```

##### `resetProvisioningInfo` <a name="resetProvisioningInfo" id="@cdktf/provider-databricks.catalog.Catalog.resetProvisioningInfo"></a>

```typescript
public resetProvisioningInfo(): void
```

##### `resetShareName` <a name="resetShareName" id="@cdktf/provider-databricks.catalog.Catalog.resetShareName"></a>

```typescript
public resetShareName(): void
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktf/provider-databricks.catalog.Catalog.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktf/provider-databricks.catalog.Catalog.resetStorageRoot"></a>

```typescript
public resetStorageRoot(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Catalog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.catalog.Catalog.isConstruct"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

catalog.Catalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalog.Catalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.catalog.Catalog.isTerraformElement"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

catalog.Catalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalog.Catalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.catalog.Catalog.isTerraformResource"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

catalog.Catalog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalog.Catalog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

catalog.Catalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Catalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Catalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Catalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Catalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.catalogType">catalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference">CatalogEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.provisioningInfo">provisioningInfo</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference">CatalogProvisioningInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.browseOnlyInput">browseOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlagInput">effectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.enablePredictiveOptimizationInput">enablePredictiveOptimizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.isolationModeInput">isolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.provisioningInfoInput">provisioningInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.storageLocationInput">storageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.storageRootInput">storageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.isolationMode">isolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.storageRoot">storageRoot</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.catalog.Catalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.catalog.Catalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.catalog.Catalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.catalog.Catalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.catalog.Catalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.catalog.Catalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.catalog.Catalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalog.Catalog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalog.Catalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.catalog.Catalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.catalog.Catalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalog.Catalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalog.Catalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalog.Catalog.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktf/provider-databricks.catalog.Catalog.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.catalog.Catalog.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.catalog.Catalog.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `effectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlag"></a>

```typescript
public readonly effectivePredictiveOptimizationFlag: CatalogEffectivePredictiveOptimizationFlagOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference">CatalogEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.catalog.Catalog.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `provisioningInfo`<sup>Required</sup> <a name="provisioningInfo" id="@cdktf/provider-databricks.catalog.Catalog.property.provisioningInfo"></a>

```typescript
public readonly provisioningInfo: CatalogProvisioningInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference">CatalogProvisioningInfoOutputReference</a>

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktf/provider-databricks.catalog.Catalog.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.catalog.Catalog.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.catalog.Catalog.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktf/provider-databricks.catalog.Catalog.property.browseOnlyInput"></a>

```typescript
public readonly browseOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.catalog.Catalog.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-databricks.catalog.Catalog.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `effectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlagInput" id="@cdktf/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlagInput"></a>

```typescript
public readonly effectivePredictiveOptimizationFlagInput: CatalogEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---

##### `enablePredictiveOptimizationInput`<sup>Optional</sup> <a name="enablePredictiveOptimizationInput" id="@cdktf/provider-databricks.catalog.Catalog.property.enablePredictiveOptimizationInput"></a>

```typescript
public readonly enablePredictiveOptimizationInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-databricks.catalog.Catalog.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.catalog.Catalog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isolationModeInput`<sup>Optional</sup> <a name="isolationModeInput" id="@cdktf/provider-databricks.catalog.Catalog.property.isolationModeInput"></a>

```typescript
public readonly isolationModeInput: string;
```

- *Type:* string

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.catalog.Catalog.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.catalog.Catalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-databricks.catalog.Catalog.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.catalog.Catalog.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-databricks.catalog.Catalog.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-databricks.catalog.Catalog.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `provisioningInfoInput`<sup>Optional</sup> <a name="provisioningInfoInput" id="@cdktf/provider-databricks.catalog.Catalog.property.provisioningInfoInput"></a>

```typescript
public readonly provisioningInfoInput: CatalogProvisioningInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-databricks.catalog.Catalog.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-databricks.catalog.Catalog.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: string;
```

- *Type:* string

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktf/provider-databricks.catalog.Catalog.property.storageRootInput"></a>

```typescript
public readonly storageRootInput: string;
```

- *Type:* string

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.catalog.Catalog.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.catalog.Catalog.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-databricks.catalog.Catalog.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `enablePredictiveOptimization`<sup>Required</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.catalog.Catalog.property.enablePredictiveOptimization"></a>

```typescript
public readonly enablePredictiveOptimization: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-databricks.catalog.Catalog.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isolationMode`<sup>Required</sup> <a name="isolationMode" id="@cdktf/provider-databricks.catalog.Catalog.property.isolationMode"></a>

```typescript
public readonly isolationMode: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.catalog.Catalog.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.catalog.Catalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.catalog.Catalog.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.catalog.Catalog.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.catalog.Catalog.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-databricks.catalog.Catalog.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-databricks.catalog.Catalog.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-databricks.catalog.Catalog.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktf/provider-databricks.catalog.Catalog.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.catalog.Catalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogConfig <a name="CatalogConfig" id="@cdktf/provider-databricks.catalog.CatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.catalog.CatalogConfig.Initializer"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

const catalogConfig: catalog.CatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#browse_only Catalog#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#comment Catalog#comment}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#connection_name Catalog#connection_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#force_destroy Catalog#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#id Catalog#id}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.isolationMode">isolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#metastore_id Catalog#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#name Catalog#name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#options Catalog#options}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#owner Catalog#owner}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#properties Catalog#properties}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#provider_name Catalog#provider_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.provisioningInfo">provisioningInfo</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#share_name Catalog#share_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.storageLocation">storageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#storage_location Catalog#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.storageRoot">storageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#storage_root Catalog#storage_root}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#browse_only Catalog#browse_only}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#comment Catalog#comment}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#connection_name Catalog#connection_name}.

---

##### `effectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.effectivePredictiveOptimizationFlag"></a>

```typescript
public readonly effectivePredictiveOptimizationFlag: CatalogEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#effective_predictive_optimization_flag Catalog#effective_predictive_optimization_flag}

---

##### `enablePredictiveOptimization`<sup>Optional</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.enablePredictiveOptimization"></a>

```typescript
public readonly enablePredictiveOptimization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#force_destroy Catalog#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#id Catalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationMode`<sup>Optional</sup> <a name="isolationMode" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.isolationMode"></a>

```typescript
public readonly isolationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#metastore_id Catalog#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#name Catalog#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#options Catalog#options}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#owner Catalog#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#properties Catalog#properties}.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#provider_name Catalog#provider_name}.

---

##### `provisioningInfo`<sup>Optional</sup> <a name="provisioningInfo" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.provisioningInfo"></a>

```typescript
public readonly provisioningInfo: CatalogProvisioningInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#provisioning_info Catalog#provisioning_info}

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#share_name Catalog#share_name}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#storage_location Catalog#storage_location}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#storage_root Catalog#storage_root}.

---

### CatalogEffectivePredictiveOptimizationFlag <a name="CatalogEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.Initializer"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

const catalogEffectivePredictiveOptimizationFlag: catalog.CatalogEffectivePredictiveOptimizationFlag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#value Catalog#value}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromName">inheritedFromName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromType">inheritedFromType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#value Catalog#value}.

---

##### `inheritedFromName`<sup>Optional</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```typescript
public readonly inheritedFromName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}.

---

##### `inheritedFromType`<sup>Optional</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```typescript
public readonly inheritedFromType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}.

---

### CatalogProvisioningInfo <a name="CatalogProvisioningInfo" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfo.Initializer"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

const catalogProvisioningInfo: catalog.CatalogProvisioningInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#state Catalog#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfo.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/catalog#state Catalog#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogEffectivePredictiveOptimizationFlagOutputReference <a name="CatalogEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

new catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">resetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">resetInheritedFromType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInheritedFromName` <a name="resetInheritedFromName" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```typescript
public resetInheritedFromName(): void
```

##### `resetInheritedFromType` <a name="resetInheritedFromType" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```typescript
public resetInheritedFromType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">inheritedFromNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">inheritedFromTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">inheritedFromName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">inheritedFromType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inheritedFromNameInput`<sup>Optional</sup> <a name="inheritedFromNameInput" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```typescript
public readonly inheritedFromNameInput: string;
```

- *Type:* string

---

##### `inheritedFromTypeInput`<sup>Optional</sup> <a name="inheritedFromTypeInput" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```typescript
public readonly inheritedFromTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `inheritedFromName`<sup>Required</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```typescript
public readonly inheritedFromName: string;
```

- *Type:* string

---

##### `inheritedFromType`<sup>Required</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```typescript
public readonly inheritedFromType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---


### CatalogProvisioningInfoOutputReference <a name="CatalogProvisioningInfoOutputReference" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer"></a>

```typescript
import { catalog } from '@cdktf/provider-databricks'

new catalog.CatalogProvisioningInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogProvisioningInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---




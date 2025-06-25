# `azureAdlsGen1Mount` Submodule <a name="`azureAdlsGen1Mount` Submodule" id="@cdktf/provider-databricks.azureAdlsGen1Mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAdlsGen1Mount <a name="AzureAdlsGen1Mount" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount databricks_azure_adls_gen1_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer"></a>

```typescript
import { azureAdlsGen1Mount } from '@cdktf/provider-databricks'

new azureAdlsGen1Mount.AzureAdlsGen1Mount(scope: Construct, id: string, config: AzureAdlsGen1MountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig">AzureAdlsGen1MountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig">AzureAdlsGen1MountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix">resetSparkConfPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSparkConfPrefix` <a name="resetSparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix"></a>

```typescript
public resetSparkConfPrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureAdlsGen1Mount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct"></a>

```typescript
import { azureAdlsGen1Mount } from '@cdktf/provider-databricks'

azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement"></a>

```typescript
import { azureAdlsGen1Mount } from '@cdktf/provider-databricks'

azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource"></a>

```typescript
import { azureAdlsGen1Mount } from '@cdktf/provider-databricks'

azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport"></a>

```typescript
import { azureAdlsGen1Mount } from '@cdktf/provider-databricks'

azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AzureAdlsGen1Mount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureAdlsGen1Mount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureAdlsGen1Mount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzureAdlsGen1Mount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput">clientSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput">clientSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput">mountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput">sparkConfPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput">storageResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName">mountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix">sparkConfPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName">storageResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretKeyInput`<sup>Optional</sup> <a name="clientSecretKeyInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput"></a>

```typescript
public readonly clientSecretKeyInput: string;
```

- *Type:* string

---

##### `clientSecretScopeInput`<sup>Optional</sup> <a name="clientSecretScopeInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput"></a>

```typescript
public readonly clientSecretScopeInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountNameInput`<sup>Optional</sup> <a name="mountNameInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput"></a>

```typescript
public readonly mountNameInput: string;
```

- *Type:* string

---

##### `sparkConfPrefixInput`<sup>Optional</sup> <a name="sparkConfPrefixInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput"></a>

```typescript
public readonly sparkConfPrefixInput: string;
```

- *Type:* string

---

##### `storageResourceNameInput`<sup>Optional</sup> <a name="storageResourceNameInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput"></a>

```typescript
public readonly storageResourceNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

---

##### `sparkConfPrefix`<sup>Required</sup> <a name="sparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix"></a>

```typescript
public readonly sparkConfPrefix: string;
```

- *Type:* string

---

##### `storageResourceName`<sup>Required</sup> <a name="storageResourceName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName"></a>

```typescript
public readonly storageResourceName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAdlsGen1MountConfig <a name="AzureAdlsGen1MountConfig" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.Initializer"></a>

```typescript
import { azureAdlsGen1Mount } from '@cdktf/provider-databricks'

const azureAdlsGen1MountConfig: azureAdlsGen1Mount.AzureAdlsGen1MountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName">mountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName">storageResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix">sparkConfPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}.

---

##### `storageResourceName`<sup>Required</sup> <a name="storageResourceName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName"></a>

```typescript
public readonly storageResourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sparkConfPrefix`<sup>Optional</sup> <a name="sparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix"></a>

```typescript
public readonly sparkConfPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}.

---




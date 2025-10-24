# `materializedFeaturesFeatureTag` Submodule <a name="`materializedFeaturesFeatureTag` Submodule" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaterializedFeaturesFeatureTag <a name="MaterializedFeaturesFeatureTag" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag databricks_materialized_features_feature_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktf/provider-databricks'

new materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag(scope: Construct, id: string, config: MaterializedFeaturesFeatureTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig">MaterializedFeaturesFeatureTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig">MaterializedFeaturesFeatureTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktf/provider-databricks'

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktf/provider-databricks'

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktf/provider-databricks'

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktf/provider-databricks'

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MaterializedFeaturesFeatureTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MaterializedFeaturesFeatureTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MaterializedFeaturesFeatureTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaterializedFeaturesFeatureTagConfig <a name="MaterializedFeaturesFeatureTagConfig" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.Initializer"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktf/provider-databricks'

const materializedFeaturesFeatureTagConfig: materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}.

---




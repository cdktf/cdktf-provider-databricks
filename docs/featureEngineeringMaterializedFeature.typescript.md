# `featureEngineeringMaterializedFeature` Submodule <a name="`featureEngineeringMaterializedFeature` Submodule" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringMaterializedFeature <a name="FeatureEngineeringMaterializedFeature" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

new featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature(scope: Construct, id: string, config: FeatureEngineeringMaterializedFeatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig">FeatureEngineeringMaterializedFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig">FeatureEngineeringMaterializedFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig">putOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig">putOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOfflineStoreConfig">resetOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOnlineStoreConfig">resetOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetPipelineScheduleState">resetPipelineScheduleState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOfflineStoreConfig` <a name="putOfflineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig"></a>

```typescript
public putOfflineStoreConfig(value: FeatureEngineeringMaterializedFeatureOfflineStoreConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---

##### `putOnlineStoreConfig` <a name="putOnlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig"></a>

```typescript
public putOnlineStoreConfig(value: FeatureEngineeringMaterializedFeatureOnlineStoreConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---

##### `resetOfflineStoreConfig` <a name="resetOfflineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOfflineStoreConfig"></a>

```typescript
public resetOfflineStoreConfig(): void
```

##### `resetOnlineStoreConfig` <a name="resetOnlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOnlineStoreConfig"></a>

```typescript
public resetOnlineStoreConfig(): void
```

##### `resetPipelineScheduleState` <a name="resetPipelineScheduleState" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetPipelineScheduleState"></a>

```typescript
public resetPipelineScheduleState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FeatureEngineeringMaterializedFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FeatureEngineeringMaterializedFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringMaterializedFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lastMaterializationTime">lastMaterializationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.materializedFeatureId">materializedFeatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfig">offlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfig">onlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureNameInput">featureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfigInput">offlineStoreConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfigInput">onlineStoreConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleStateInput">pipelineScheduleStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureName">featureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleState">pipelineScheduleState</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lastMaterializationTime`<sup>Required</sup> <a name="lastMaterializationTime" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lastMaterializationTime"></a>

```typescript
public readonly lastMaterializationTime: string;
```

- *Type:* string

---

##### `materializedFeatureId`<sup>Required</sup> <a name="materializedFeatureId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.materializedFeatureId"></a>

```typescript
public readonly materializedFeatureId: string;
```

- *Type:* string

---

##### `offlineStoreConfig`<sup>Required</sup> <a name="offlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfig"></a>

```typescript
public readonly offlineStoreConfig: FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a>

---

##### `onlineStoreConfig`<sup>Required</sup> <a name="onlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfig"></a>

```typescript
public readonly onlineStoreConfig: FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureNameInput"></a>

```typescript
public readonly featureNameInput: string;
```

- *Type:* string

---

##### `offlineStoreConfigInput`<sup>Optional</sup> <a name="offlineStoreConfigInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfigInput"></a>

```typescript
public readonly offlineStoreConfigInput: IResolvable | FeatureEngineeringMaterializedFeatureOfflineStoreConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---

##### `onlineStoreConfigInput`<sup>Optional</sup> <a name="onlineStoreConfigInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfigInput"></a>

```typescript
public readonly onlineStoreConfigInput: IResolvable | FeatureEngineeringMaterializedFeatureOnlineStoreConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---

##### `pipelineScheduleStateInput`<sup>Optional</sup> <a name="pipelineScheduleStateInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleStateInput"></a>

```typescript
public readonly pipelineScheduleStateInput: string;
```

- *Type:* string

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

---

##### `pipelineScheduleState`<sup>Required</sup> <a name="pipelineScheduleState" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleState"></a>

```typescript
public readonly pipelineScheduleState: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringMaterializedFeatureConfig <a name="FeatureEngineeringMaterializedFeatureConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.Initializer"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

const featureEngineeringMaterializedFeatureConfig: featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.featureName">featureName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.offlineStoreConfig">offlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.onlineStoreConfig">onlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.pipelineScheduleState">pipelineScheduleState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}.

---

##### `offlineStoreConfig`<sup>Optional</sup> <a name="offlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.offlineStoreConfig"></a>

```typescript
public readonly offlineStoreConfig: FeatureEngineeringMaterializedFeatureOfflineStoreConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}.

---

##### `onlineStoreConfig`<sup>Optional</sup> <a name="onlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.onlineStoreConfig"></a>

```typescript
public readonly onlineStoreConfig: FeatureEngineeringMaterializedFeatureOnlineStoreConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}.

---

##### `pipelineScheduleState`<sup>Optional</sup> <a name="pipelineScheduleState" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.pipelineScheduleState"></a>

```typescript
public readonly pipelineScheduleState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}.

---

### FeatureEngineeringMaterializedFeatureOfflineStoreConfig <a name="FeatureEngineeringMaterializedFeatureOfflineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.Initializer"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

const featureEngineeringMaterializedFeatureOfflineStoreConfig: featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}.

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### FeatureEngineeringMaterializedFeatureOnlineStoreConfig <a name="FeatureEngineeringMaterializedFeatureOnlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.Initializer"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

const featureEngineeringMaterializedFeatureOnlineStoreConfig: featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.capacity">capacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#capacity FeatureEngineeringMaterializedFeature#capacity}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#name FeatureEngineeringMaterializedFeature#name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.readReplicaCount">readReplicaCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#read_replica_count FeatureEngineeringMaterializedFeature#read_replica_count}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#capacity FeatureEngineeringMaterializedFeature#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#name FeatureEngineeringMaterializedFeature#name}.

---

##### `readReplicaCount`<sup>Optional</sup> <a name="readReplicaCount" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.readReplicaCount"></a>

```typescript
public readonly readReplicaCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_materialized_feature#read_replica_count FeatureEngineeringMaterializedFeature#read_replica_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference <a name="FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

new featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```typescript
public readonly tableNamePrefixInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringMaterializedFeatureOfflineStoreConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---


### FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference <a name="FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer"></a>

```typescript
import { featureEngineeringMaterializedFeature } from '@cdktf/provider-databricks'

new featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resetReadReplicaCount">resetReadReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadReplicaCount` <a name="resetReadReplicaCount" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resetReadReplicaCount"></a>

```typescript
public resetReadReplicaCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacityInput">capacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCountInput">readReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacity">capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCount">readReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readReplicaCountInput`<sup>Optional</sup> <a name="readReplicaCountInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCountInput"></a>

```typescript
public readonly readReplicaCountInput: number;
```

- *Type:* number

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readReplicaCount`<sup>Required</sup> <a name="readReplicaCount" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCount"></a>

```typescript
public readonly readReplicaCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringMaterializedFeatureOnlineStoreConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---




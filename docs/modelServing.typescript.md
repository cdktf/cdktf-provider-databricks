# `modelServing` Submodule <a name="`modelServing` Submodule" id="@cdktf/provider-databricks.modelServing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelServing <a name="ModelServing" id="@cdktf/provider-databricks.modelServing.ModelServing"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving databricks_model_serving}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServing(scope: Construct, id: string, config: ModelServingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig">ModelServingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig">ModelServingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putAiGateway">putAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetAiGateway">resetAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetRouteOptimized">resetRouteOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServing.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.modelServing.ModelServing.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.modelServing.ModelServing.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.modelServing.ModelServing.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.modelServing.ModelServing.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.modelServing.ModelServing.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAiGateway` <a name="putAiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.putAiGateway"></a>

```typescript
public putAiGateway(value: ModelServingAiGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putAiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig"></a>

```typescript
public putConfig(value: ModelServingConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits"></a>

```typescript
public putRateLimits(value: IResolvable | ModelServingRateLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.modelServing.ModelServing.putTags"></a>

```typescript
public putTags(value: IResolvable | ModelServingTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts"></a>

```typescript
public putTimeouts(value: ModelServingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---

##### `resetAiGateway` <a name="resetAiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.resetAiGateway"></a>

```typescript
public resetAiGateway(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.resetRateLimits"></a>

```typescript
public resetRateLimits(): void
```

##### `resetRouteOptimized` <a name="resetRouteOptimized" id="@cdktf/provider-databricks.modelServing.ModelServing.resetRouteOptimized"></a>

```typescript
public resetRouteOptimized(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ModelServing resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

modelServing.ModelServing.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

modelServing.ModelServing.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

modelServing.ModelServing.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

modelServing.ModelServing.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ModelServing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ModelServing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ModelServing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ModelServing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.aiGateway">aiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference">ModelServingAiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList">ModelServingRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId">servingEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList">ModelServingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.aiGatewayInput">aiGatewayInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimitsInput">rateLimitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimizedInput">routeOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimized">routeOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.modelServing.ModelServing.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServing.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServing.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServing.ModelServing.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aiGateway`<sup>Required</sup> <a name="aiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.property.aiGateway"></a>

```typescript
public readonly aiGateway: ModelServingAiGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference">ModelServingAiGatewayOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.property.config"></a>

```typescript
public readonly config: ModelServingConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimits"></a>

```typescript
public readonly rateLimits: ModelServingRateLimitsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList">ModelServingRateLimitsList</a>

---

##### `servingEndpointId`<sup>Required</sup> <a name="servingEndpointId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId"></a>

```typescript
public readonly servingEndpointId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tags"></a>

```typescript
public readonly tags: ModelServingTagsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList">ModelServingTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts"></a>

```typescript
public readonly timeouts: ModelServingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a>

---

##### `aiGatewayInput`<sup>Optional</sup> <a name="aiGatewayInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.aiGatewayInput"></a>

```typescript
public readonly aiGatewayInput: ModelServingAiGateway;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.configInput"></a>

```typescript
public readonly configInput: ModelServingConfigA;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimitsInput"></a>

```typescript
public readonly rateLimitsInput: IResolvable | ModelServingRateLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>[]

---

##### `routeOptimizedInput`<sup>Optional</sup> <a name="routeOptimizedInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimizedInput"></a>

```typescript
public readonly routeOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ModelServingTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ModelServingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServing.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routeOptimized`<sup>Required</sup> <a name="routeOptimized" id="@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimized"></a>

```typescript
public readonly routeOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ModelServingAiGateway <a name="ModelServingAiGateway" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingAiGateway: modelServing.ModelServingAiGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.guardrails">guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a></code> | guardrails block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.inferenceTableConfig">inferenceTableConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a></code> | inference_table_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.rateLimits">rateLimits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>[]</code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.usageTrackingConfig">usageTrackingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a></code> | usage_tracking_config block. |

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.guardrails"></a>

```typescript
public readonly guardrails: ModelServingAiGatewayGuardrails;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

guardrails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#guardrails ModelServing#guardrails}

---

##### `inferenceTableConfig`<sup>Optional</sup> <a name="inferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.inferenceTableConfig"></a>

```typescript
public readonly inferenceTableConfig: ModelServingAiGatewayInferenceTableConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

inference_table_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#inference_table_config ModelServing#inference_table_config}

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.rateLimits"></a>

```typescript
public readonly rateLimits: IResolvable | ModelServingAiGatewayRateLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>[]

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}

---

##### `usageTrackingConfig`<sup>Optional</sup> <a name="usageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.usageTrackingConfig"></a>

```typescript
public readonly usageTrackingConfig: ModelServingAiGatewayUsageTrackingConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

usage_tracking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#usage_tracking_config ModelServing#usage_tracking_config}

---

### ModelServingAiGatewayGuardrails <a name="ModelServingAiGatewayGuardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingAiGatewayGuardrails: modelServing.ModelServingAiGatewayGuardrails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.input">input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.output">output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a></code> | output block. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.input"></a>

```typescript
public readonly input: ModelServingAiGatewayGuardrailsInput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#input ModelServing#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.output"></a>

```typescript
public readonly output: ModelServingAiGatewayGuardrailsOutput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#output ModelServing#output}

---

### ModelServingAiGatewayGuardrailsInput <a name="ModelServingAiGatewayGuardrailsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingAiGatewayGuardrailsInput: modelServing.ModelServingAiGatewayGuardrailsInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.invalidKeywords">invalidKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.safety">safety</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#safety ModelServing#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.validTopics">validTopics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}. |

---

##### `invalidKeywords`<sup>Optional</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.invalidKeywords"></a>

```typescript
public readonly invalidKeywords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}.

---

##### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.pii"></a>

```typescript
public readonly pii: ModelServingAiGatewayGuardrailsInputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#pii ModelServing#pii}

---

##### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.safety"></a>

```typescript
public readonly safety: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#safety ModelServing#safety}.

---

##### `validTopics`<sup>Optional</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.validTopics"></a>

```typescript
public readonly validTopics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}.

---

### ModelServingAiGatewayGuardrailsInputPii <a name="ModelServingAiGatewayGuardrailsInputPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingAiGatewayGuardrailsInputPii: modelServing.ModelServingAiGatewayGuardrailsInputPii = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii.property.behavior">behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#behavior ModelServing#behavior}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#behavior ModelServing#behavior}.

---

### ModelServingAiGatewayGuardrailsOutput <a name="ModelServingAiGatewayGuardrailsOutput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingAiGatewayGuardrailsOutput: modelServing.ModelServingAiGatewayGuardrailsOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.invalidKeywords">invalidKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.safety">safety</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#safety ModelServing#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.validTopics">validTopics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}. |

---

##### `invalidKeywords`<sup>Optional</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.invalidKeywords"></a>

```typescript
public readonly invalidKeywords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}.

---

##### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.pii"></a>

```typescript
public readonly pii: ModelServingAiGatewayGuardrailsOutputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#pii ModelServing#pii}

---

##### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.safety"></a>

```typescript
public readonly safety: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#safety ModelServing#safety}.

---

##### `validTopics`<sup>Optional</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.validTopics"></a>

```typescript
public readonly validTopics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}.

---

### ModelServingAiGatewayGuardrailsOutputPii <a name="ModelServingAiGatewayGuardrailsOutputPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingAiGatewayGuardrailsOutputPii: modelServing.ModelServingAiGatewayGuardrailsOutputPii = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii.property.behavior">behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#behavior ModelServing#behavior}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#behavior ModelServing#behavior}.

---

### ModelServingAiGatewayInferenceTableConfig <a name="ModelServingAiGatewayInferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingAiGatewayInferenceTableConfig: modelServing.ModelServingAiGatewayInferenceTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#enabled ModelServing#enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#schema_name ModelServing#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}. |

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#schema_name ModelServing#schema_name}.

---

##### `tableNamePrefix`<sup>Optional</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}.

---

### ModelServingAiGatewayRateLimits <a name="ModelServingAiGatewayRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingAiGatewayRateLimits: modelServing.ModelServingAiGatewayRateLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.calls">calls</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#calls ModelServing#calls}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#key ModelServing#key}. |

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.calls"></a>

```typescript
public readonly calls: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#calls ModelServing#calls}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#key ModelServing#key}.

---

### ModelServingAiGatewayUsageTrackingConfig <a name="ModelServingAiGatewayUsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingAiGatewayUsageTrackingConfig: modelServing.ModelServingAiGatewayUsageTrackingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#enabled ModelServing#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

### ModelServingConfig <a name="ModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfig: modelServing.ModelServingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.aiGateway">aiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | ai_gateway block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#id ModelServing#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.rateLimits">rateLimits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>[]</code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.routeOptimized">routeOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#route_optimized ModelServing#route_optimized}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config"></a>

```typescript
public readonly config: ModelServingConfigA;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#config ModelServing#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `aiGateway`<sup>Optional</sup> <a name="aiGateway" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.aiGateway"></a>

```typescript
public readonly aiGateway: ModelServingAiGateway;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

ai_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#ai_gateway ModelServing#ai_gateway}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#id ModelServing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.rateLimits"></a>

```typescript
public readonly rateLimits: IResolvable | ModelServingRateLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>[]

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}

---

##### `routeOptimized`<sup>Optional</sup> <a name="routeOptimized" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.routeOptimized"></a>

```typescript
public readonly routeOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#route_optimized ModelServing#route_optimized}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ModelServingTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#tags ModelServing#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ModelServingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#timeouts ModelServing#timeouts}

---

### ModelServingConfigA <a name="ModelServingConfigA" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigA: modelServing.ModelServingConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.autoCaptureConfig">autoCaptureConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | auto_capture_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedEntities">servedEntities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>[]</code> | served_entities block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels">servedModels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>[]</code> | served_models block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | traffic_config block. |

---

##### `autoCaptureConfig`<sup>Optional</sup> <a name="autoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.autoCaptureConfig"></a>

```typescript
public readonly autoCaptureConfig: ModelServingConfigAutoCaptureConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

auto_capture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#auto_capture_config ModelServing#auto_capture_config}

---

##### `servedEntities`<sup>Optional</sup> <a name="servedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedEntities"></a>

```typescript
public readonly servedEntities: IResolvable | ModelServingConfigServedEntities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>[]

served_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#served_entities ModelServing#served_entities}

---

##### `servedModels`<sup>Optional</sup> <a name="servedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels"></a>

```typescript
public readonly servedModels: IResolvable | ModelServingConfigServedModels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>[]

served_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#served_models ModelServing#served_models}

---

##### `trafficConfig`<sup>Optional</sup> <a name="trafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig"></a>

```typescript
public readonly trafficConfig: ModelServingConfigTrafficConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#traffic_config ModelServing#traffic_config}

---

### ModelServingConfigAutoCaptureConfig <a name="ModelServingConfigAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigAutoCaptureConfig: modelServing.ModelServingConfigAutoCaptureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#enabled ModelServing#enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#schema_name ModelServing#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}. |

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#schema_name ModelServing#schema_name}.

---

##### `tableNamePrefix`<sup>Optional</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}.

---

### ModelServingConfigServedEntities <a name="ModelServingConfigServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntities: modelServing.ModelServingConfigServedEntities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityName">entityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#entity_name ModelServing#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityVersion">entityVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#entity_version ModelServing#entity_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.environmentVars">environmentVars</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.externalModel">externalModel</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a></code> | external_model block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedThroughput">maxProvisionedThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedThroughput">minProvisionedThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadSize">workloadSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#workload_size ModelServing#workload_size}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadType">workloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#workload_type ModelServing#workload_type}. |

---

##### `entityName`<sup>Optional</sup> <a name="entityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#entity_name ModelServing#entity_name}.

---

##### `entityVersion`<sup>Optional</sup> <a name="entityVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityVersion"></a>

```typescript
public readonly entityVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#entity_version ModelServing#entity_version}.

---

##### `environmentVars`<sup>Optional</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.environmentVars"></a>

```typescript
public readonly environmentVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}.

---

##### `externalModel`<sup>Optional</sup> <a name="externalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.externalModel"></a>

```typescript
public readonly externalModel: ModelServingConfigServedEntitiesExternalModel;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

external_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#external_model ModelServing#external_model}

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

##### `maxProvisionedThroughput`<sup>Optional</sup> <a name="maxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedThroughput"></a>

```typescript
public readonly maxProvisionedThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}.

---

##### `minProvisionedThroughput`<sup>Optional</sup> <a name="minProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedThroughput"></a>

```typescript
public readonly minProvisionedThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `scaleToZeroEnabled`<sup>Optional</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.scaleToZeroEnabled"></a>

```typescript
public readonly scaleToZeroEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}.

---

##### `workloadSize`<sup>Optional</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadSize"></a>

```typescript
public readonly workloadSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#workload_size ModelServing#workload_size}.

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#workload_type ModelServing#workload_type}.

---

### ModelServingConfigServedEntitiesExternalModel <a name="ModelServingConfigServedEntitiesExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntitiesExternalModel: modelServing.ModelServingConfigServedEntitiesExternalModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#provider ModelServing#provider}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.task">task</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#task ModelServing#task}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.ai21LabsConfig">ai21LabsConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a></code> | ai21labs_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.amazonBedrockConfig">amazonBedrockConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a></code> | amazon_bedrock_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.anthropicConfig">anthropicConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a></code> | anthropic_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.cohereConfig">cohereConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a></code> | cohere_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.databricksModelServingConfig">databricksModelServingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a></code> | databricks_model_serving_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.googleCloudVertexAiConfig">googleCloudVertexAiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a></code> | google_cloud_vertex_ai_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.openaiConfig">openaiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a></code> | openai_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.palmConfig">palmConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a></code> | palm_config block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#provider ModelServing#provider}.

---

##### `task`<sup>Required</sup> <a name="task" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.task"></a>

```typescript
public readonly task: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#task ModelServing#task}.

---

##### `ai21LabsConfig`<sup>Optional</sup> <a name="ai21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.ai21LabsConfig"></a>

```typescript
public readonly ai21LabsConfig: ModelServingConfigServedEntitiesExternalModelAi21LabsConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

ai21labs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#ai21labs_config ModelServing#ai21labs_config}

---

##### `amazonBedrockConfig`<sup>Optional</sup> <a name="amazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.amazonBedrockConfig"></a>

```typescript
public readonly amazonBedrockConfig: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

amazon_bedrock_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#amazon_bedrock_config ModelServing#amazon_bedrock_config}

---

##### `anthropicConfig`<sup>Optional</sup> <a name="anthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.anthropicConfig"></a>

```typescript
public readonly anthropicConfig: ModelServingConfigServedEntitiesExternalModelAnthropicConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

anthropic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#anthropic_config ModelServing#anthropic_config}

---

##### `cohereConfig`<sup>Optional</sup> <a name="cohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.cohereConfig"></a>

```typescript
public readonly cohereConfig: ModelServingConfigServedEntitiesExternalModelCohereConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

cohere_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#cohere_config ModelServing#cohere_config}

---

##### `databricksModelServingConfig`<sup>Optional</sup> <a name="databricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.databricksModelServingConfig"></a>

```typescript
public readonly databricksModelServingConfig: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

databricks_model_serving_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#databricks_model_serving_config ModelServing#databricks_model_serving_config}

---

##### `googleCloudVertexAiConfig`<sup>Optional</sup> <a name="googleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.googleCloudVertexAiConfig"></a>

```typescript
public readonly googleCloudVertexAiConfig: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

google_cloud_vertex_ai_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#google_cloud_vertex_ai_config ModelServing#google_cloud_vertex_ai_config}

---

##### `openaiConfig`<sup>Optional</sup> <a name="openaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.openaiConfig"></a>

```typescript
public readonly openaiConfig: ModelServingConfigServedEntitiesExternalModelOpenaiConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

openai_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_config ModelServing#openai_config}

---

##### `palmConfig`<sup>Optional</sup> <a name="palmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.palmConfig"></a>

```typescript
public readonly palmConfig: ModelServingConfigServedEntitiesExternalModelPalmConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

palm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#palm_config ModelServing#palm_config}

---

### ModelServingConfigServedEntitiesExternalModelAi21LabsConfig <a name="ModelServingConfigServedEntitiesExternalModelAi21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntitiesExternalModelAi21LabsConfig: modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKey">ai21LabsApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#ai21labs_api_key ModelServing#ai21labs_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKeyPlaintext">ai21LabsApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#ai21labs_api_key_plaintext ModelServing#ai21labs_api_key_plaintext}. |

---

##### `ai21LabsApiKey`<sup>Optional</sup> <a name="ai21LabsApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKey"></a>

```typescript
public readonly ai21LabsApiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#ai21labs_api_key ModelServing#ai21labs_api_key}.

---

##### `ai21LabsApiKeyPlaintext`<sup>Optional</sup> <a name="ai21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKeyPlaintext"></a>

```typescript
public readonly ai21LabsApiKeyPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#ai21labs_api_key_plaintext ModelServing#ai21labs_api_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig <a name="ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntitiesExternalModelAmazonBedrockConfig: modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_region ModelServing#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.bedrockProvider">bedrockProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#bedrock_provider ModelServing#bedrock_provider}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_access_key_id ModelServing#aws_access_key_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyIdPlaintext">awsAccessKeyIdPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_access_key_id_plaintext ModelServing#aws_access_key_id_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_secret_access_key ModelServing#aws_secret_access_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKeyPlaintext">awsSecretAccessKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_secret_access_key_plaintext ModelServing#aws_secret_access_key_plaintext}. |

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_region ModelServing#aws_region}.

---

##### `bedrockProvider`<sup>Required</sup> <a name="bedrockProvider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.bedrockProvider"></a>

```typescript
public readonly bedrockProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#bedrock_provider ModelServing#bedrock_provider}.

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyId"></a>

```typescript
public readonly awsAccessKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_access_key_id ModelServing#aws_access_key_id}.

---

##### `awsAccessKeyIdPlaintext`<sup>Optional</sup> <a name="awsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyIdPlaintext"></a>

```typescript
public readonly awsAccessKeyIdPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_access_key_id_plaintext ModelServing#aws_access_key_id_plaintext}.

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKey"></a>

```typescript
public readonly awsSecretAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_secret_access_key ModelServing#aws_secret_access_key}.

---

##### `awsSecretAccessKeyPlaintext`<sup>Optional</sup> <a name="awsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKeyPlaintext"></a>

```typescript
public readonly awsSecretAccessKeyPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#aws_secret_access_key_plaintext ModelServing#aws_secret_access_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelAnthropicConfig <a name="ModelServingConfigServedEntitiesExternalModelAnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntitiesExternalModelAnthropicConfig: modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKey">anthropicApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#anthropic_api_key ModelServing#anthropic_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKeyPlaintext">anthropicApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#anthropic_api_key_plaintext ModelServing#anthropic_api_key_plaintext}. |

---

##### `anthropicApiKey`<sup>Optional</sup> <a name="anthropicApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKey"></a>

```typescript
public readonly anthropicApiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#anthropic_api_key ModelServing#anthropic_api_key}.

---

##### `anthropicApiKeyPlaintext`<sup>Optional</sup> <a name="anthropicApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKeyPlaintext"></a>

```typescript
public readonly anthropicApiKeyPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#anthropic_api_key_plaintext ModelServing#anthropic_api_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelCohereConfig <a name="ModelServingConfigServedEntitiesExternalModelCohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntitiesExternalModelCohereConfig: modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiBase">cohereApiBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#cohere_api_base ModelServing#cohere_api_base}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKey">cohereApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#cohere_api_key ModelServing#cohere_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKeyPlaintext">cohereApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#cohere_api_key_plaintext ModelServing#cohere_api_key_plaintext}. |

---

##### `cohereApiBase`<sup>Optional</sup> <a name="cohereApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiBase"></a>

```typescript
public readonly cohereApiBase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#cohere_api_base ModelServing#cohere_api_base}.

---

##### `cohereApiKey`<sup>Optional</sup> <a name="cohereApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKey"></a>

```typescript
public readonly cohereApiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#cohere_api_key ModelServing#cohere_api_key}.

---

##### `cohereApiKeyPlaintext`<sup>Optional</sup> <a name="cohereApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKeyPlaintext"></a>

```typescript
public readonly cohereApiKeyPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#cohere_api_key_plaintext ModelServing#cohere_api_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig <a name="ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig: modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksWorkspaceUrl">databricksWorkspaceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#databricks_workspace_url ModelServing#databricks_workspace_url}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiToken">databricksApiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#databricks_api_token ModelServing#databricks_api_token}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiTokenPlaintext">databricksApiTokenPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#databricks_api_token_plaintext ModelServing#databricks_api_token_plaintext}. |

---

##### `databricksWorkspaceUrl`<sup>Required</sup> <a name="databricksWorkspaceUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksWorkspaceUrl"></a>

```typescript
public readonly databricksWorkspaceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#databricks_workspace_url ModelServing#databricks_workspace_url}.

---

##### `databricksApiToken`<sup>Optional</sup> <a name="databricksApiToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiToken"></a>

```typescript
public readonly databricksApiToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#databricks_api_token ModelServing#databricks_api_token}.

---

##### `databricksApiTokenPlaintext`<sup>Optional</sup> <a name="databricksApiTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiTokenPlaintext"></a>

```typescript
public readonly databricksApiTokenPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#databricks_api_token_plaintext ModelServing#databricks_api_token_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig <a name="ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig: modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#private_key ModelServing#private_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKeyPlaintext">privateKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#private_key_plaintext ModelServing#private_key_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#project_id ModelServing#project_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#region ModelServing#region}. |

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#private_key ModelServing#private_key}.

---

##### `privateKeyPlaintext`<sup>Optional</sup> <a name="privateKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKeyPlaintext"></a>

```typescript
public readonly privateKeyPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#private_key_plaintext ModelServing#private_key_plaintext}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#project_id ModelServing#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#region ModelServing#region}.

---

### ModelServingConfigServedEntitiesExternalModelOpenaiConfig <a name="ModelServingConfigServedEntitiesExternalModelOpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntitiesExternalModelOpenaiConfig: modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientId">microsoftEntraClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#microsoft_entra_client_id ModelServing#microsoft_entra_client_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecret">microsoftEntraClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#microsoft_entra_client_secret ModelServing#microsoft_entra_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecretPlaintext">microsoftEntraClientSecretPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#microsoft_entra_client_secret_plaintext ModelServing#microsoft_entra_client_secret_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraTenantId">microsoftEntraTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#microsoft_entra_tenant_id ModelServing#microsoft_entra_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiBase">openaiApiBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_base ModelServing#openai_api_base}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKey">openaiApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_key ModelServing#openai_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKeyPlaintext">openaiApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_key_plaintext ModelServing#openai_api_key_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiType">openaiApiType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_type ModelServing#openai_api_type}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiVersion">openaiApiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_version ModelServing#openai_api_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiDeploymentName">openaiDeploymentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_deployment_name ModelServing#openai_deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiOrganization">openaiOrganization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_organization ModelServing#openai_organization}. |

---

##### `microsoftEntraClientId`<sup>Optional</sup> <a name="microsoftEntraClientId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientId"></a>

```typescript
public readonly microsoftEntraClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#microsoft_entra_client_id ModelServing#microsoft_entra_client_id}.

---

##### `microsoftEntraClientSecret`<sup>Optional</sup> <a name="microsoftEntraClientSecret" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecret"></a>

```typescript
public readonly microsoftEntraClientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#microsoft_entra_client_secret ModelServing#microsoft_entra_client_secret}.

---

##### `microsoftEntraClientSecretPlaintext`<sup>Optional</sup> <a name="microsoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecretPlaintext"></a>

```typescript
public readonly microsoftEntraClientSecretPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#microsoft_entra_client_secret_plaintext ModelServing#microsoft_entra_client_secret_plaintext}.

---

##### `microsoftEntraTenantId`<sup>Optional</sup> <a name="microsoftEntraTenantId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraTenantId"></a>

```typescript
public readonly microsoftEntraTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#microsoft_entra_tenant_id ModelServing#microsoft_entra_tenant_id}.

---

##### `openaiApiBase`<sup>Optional</sup> <a name="openaiApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiBase"></a>

```typescript
public readonly openaiApiBase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_base ModelServing#openai_api_base}.

---

##### `openaiApiKey`<sup>Optional</sup> <a name="openaiApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKey"></a>

```typescript
public readonly openaiApiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_key ModelServing#openai_api_key}.

---

##### `openaiApiKeyPlaintext`<sup>Optional</sup> <a name="openaiApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKeyPlaintext"></a>

```typescript
public readonly openaiApiKeyPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_key_plaintext ModelServing#openai_api_key_plaintext}.

---

##### `openaiApiType`<sup>Optional</sup> <a name="openaiApiType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiType"></a>

```typescript
public readonly openaiApiType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_type ModelServing#openai_api_type}.

---

##### `openaiApiVersion`<sup>Optional</sup> <a name="openaiApiVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiVersion"></a>

```typescript
public readonly openaiApiVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_api_version ModelServing#openai_api_version}.

---

##### `openaiDeploymentName`<sup>Optional</sup> <a name="openaiDeploymentName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiDeploymentName"></a>

```typescript
public readonly openaiDeploymentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_deployment_name ModelServing#openai_deployment_name}.

---

##### `openaiOrganization`<sup>Optional</sup> <a name="openaiOrganization" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiOrganization"></a>

```typescript
public readonly openaiOrganization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#openai_organization ModelServing#openai_organization}.

---

### ModelServingConfigServedEntitiesExternalModelPalmConfig <a name="ModelServingConfigServedEntitiesExternalModelPalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedEntitiesExternalModelPalmConfig: modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKey">palmApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#palm_api_key ModelServing#palm_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKeyPlaintext">palmApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#palm_api_key_plaintext ModelServing#palm_api_key_plaintext}. |

---

##### `palmApiKey`<sup>Optional</sup> <a name="palmApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKey"></a>

```typescript
public readonly palmApiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#palm_api_key ModelServing#palm_api_key}.

---

##### `palmApiKeyPlaintext`<sup>Optional</sup> <a name="palmApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKeyPlaintext"></a>

```typescript
public readonly palmApiKeyPlaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#palm_api_key_plaintext ModelServing#palm_api_key_plaintext}.

---

### ModelServingConfigServedModels <a name="ModelServingConfigServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigServedModels: modelServing.ModelServingConfigServedModels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName">modelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#model_name ModelServing#model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion">modelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#model_version ModelServing#model_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars">environmentVars</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedThroughput">maxProvisionedThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedThroughput">minProvisionedThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize">workloadSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#workload_size ModelServing#workload_size}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadType">workloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#workload_type ModelServing#workload_type}. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#model_name ModelServing#model_name}.

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#model_version ModelServing#model_version}.

---

##### `environmentVars`<sup>Optional</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars"></a>

```typescript
public readonly environmentVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

##### `maxProvisionedThroughput`<sup>Optional</sup> <a name="maxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedThroughput"></a>

```typescript
public readonly maxProvisionedThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}.

---

##### `minProvisionedThroughput`<sup>Optional</sup> <a name="minProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedThroughput"></a>

```typescript
public readonly minProvisionedThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `scaleToZeroEnabled`<sup>Optional</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled"></a>

```typescript
public readonly scaleToZeroEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}.

---

##### `workloadSize`<sup>Optional</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize"></a>

```typescript
public readonly workloadSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#workload_size ModelServing#workload_size}.

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#workload_type ModelServing#workload_type}.

---

### ModelServingConfigTrafficConfig <a name="ModelServingConfigTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigTrafficConfig: modelServing.ModelServingConfigTrafficConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes">routes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>[]</code> | routes block. |

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes"></a>

```typescript
public readonly routes: IResolvable | ModelServingConfigTrafficConfigRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>[]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#routes ModelServing#routes}

---

### ModelServingConfigTrafficConfigRoutes <a name="ModelServingConfigTrafficConfigRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingConfigTrafficConfigRoutes: modelServing.ModelServingConfigTrafficConfigRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName">servedModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}. |

---

##### `servedModelName`<sup>Required</sup> <a name="servedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName"></a>

```typescript
public readonly servedModelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}.

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}.

---

### ModelServingRateLimits <a name="ModelServingRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingRateLimits: modelServing.ModelServingRateLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.calls">calls</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#calls ModelServing#calls}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#key ModelServing#key}. |

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.calls"></a>

```typescript
public readonly calls: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#calls ModelServing#calls}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#key ModelServing#key}.

---

### ModelServingTags <a name="ModelServingTags" id="@cdktf/provider-databricks.modelServing.ModelServingTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTags.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingTags: modelServing.ModelServingTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#key ModelServing#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#value ModelServing#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#key ModelServing#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#value ModelServing#value}.

---

### ModelServingTimeouts <a name="ModelServingTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

const modelServingTimeouts: modelServing.ModelServingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#create ModelServing#create}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#update ModelServing#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#create ModelServing#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/model_serving#update ModelServing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelServingAiGatewayGuardrailsInputOutputReference <a name="ModelServingAiGatewayGuardrailsInputOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayGuardrailsInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.putPii">putPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords">resetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetPii">resetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetSafety">resetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetValidTopics">resetValidTopics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPii` <a name="putPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.putPii"></a>

```typescript
public putPii(value: ModelServingAiGatewayGuardrailsInputPii): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.putPii.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

---

##### `resetInvalidKeywords` <a name="resetInvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords"></a>

```typescript
public resetInvalidKeywords(): void
```

##### `resetPii` <a name="resetPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetPii"></a>

```typescript
public resetPii(): void
```

##### `resetSafety` <a name="resetSafety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetSafety"></a>

```typescript
public resetSafety(): void
```

##### `resetValidTopics` <a name="resetValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetValidTopics"></a>

```typescript
public resetValidTopics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference">ModelServingAiGatewayGuardrailsInputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput">invalidKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.piiInput">piiInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safetyInput">safetyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopicsInput">validTopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywords">invalidKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safety">safety</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopics">validTopics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pii`<sup>Required</sup> <a name="pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.pii"></a>

```typescript
public readonly pii: ModelServingAiGatewayGuardrailsInputPiiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference">ModelServingAiGatewayGuardrailsInputPiiOutputReference</a>

---

##### `invalidKeywordsInput`<sup>Optional</sup> <a name="invalidKeywordsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput"></a>

```typescript
public readonly invalidKeywordsInput: string[];
```

- *Type:* string[]

---

##### `piiInput`<sup>Optional</sup> <a name="piiInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.piiInput"></a>

```typescript
public readonly piiInput: ModelServingAiGatewayGuardrailsInputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

---

##### `safetyInput`<sup>Optional</sup> <a name="safetyInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safetyInput"></a>

```typescript
public readonly safetyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validTopicsInput`<sup>Optional</sup> <a name="validTopicsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopicsInput"></a>

```typescript
public readonly validTopicsInput: string[];
```

- *Type:* string[]

---

##### `invalidKeywords`<sup>Required</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywords"></a>

```typescript
public readonly invalidKeywords: string[];
```

- *Type:* string[]

---

##### `safety`<sup>Required</sup> <a name="safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safety"></a>

```typescript
public readonly safety: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validTopics`<sup>Required</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopics"></a>

```typescript
public readonly validTopics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingAiGatewayGuardrailsInput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

---


### ModelServingAiGatewayGuardrailsInputPiiOutputReference <a name="ModelServingAiGatewayGuardrailsInputPiiOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingAiGatewayGuardrailsInputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

---


### ModelServingAiGatewayGuardrailsOutputOutputReference <a name="ModelServingAiGatewayGuardrailsOutputOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.putPii">putPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords">resetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetPii">resetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetSafety">resetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetValidTopics">resetValidTopics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPii` <a name="putPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.putPii"></a>

```typescript
public putPii(value: ModelServingAiGatewayGuardrailsOutputPii): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.putPii.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

---

##### `resetInvalidKeywords` <a name="resetInvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords"></a>

```typescript
public resetInvalidKeywords(): void
```

##### `resetPii` <a name="resetPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetPii"></a>

```typescript
public resetPii(): void
```

##### `resetSafety` <a name="resetSafety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetSafety"></a>

```typescript
public resetSafety(): void
```

##### `resetValidTopics` <a name="resetValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetValidTopics"></a>

```typescript
public resetValidTopics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference">ModelServingAiGatewayGuardrailsOutputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput">invalidKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.piiInput">piiInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safetyInput">safetyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput">validTopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords">invalidKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safety">safety</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopics">validTopics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pii`<sup>Required</sup> <a name="pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.pii"></a>

```typescript
public readonly pii: ModelServingAiGatewayGuardrailsOutputPiiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference">ModelServingAiGatewayGuardrailsOutputPiiOutputReference</a>

---

##### `invalidKeywordsInput`<sup>Optional</sup> <a name="invalidKeywordsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput"></a>

```typescript
public readonly invalidKeywordsInput: string[];
```

- *Type:* string[]

---

##### `piiInput`<sup>Optional</sup> <a name="piiInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.piiInput"></a>

```typescript
public readonly piiInput: ModelServingAiGatewayGuardrailsOutputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

---

##### `safetyInput`<sup>Optional</sup> <a name="safetyInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safetyInput"></a>

```typescript
public readonly safetyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validTopicsInput`<sup>Optional</sup> <a name="validTopicsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput"></a>

```typescript
public readonly validTopicsInput: string[];
```

- *Type:* string[]

---

##### `invalidKeywords`<sup>Required</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords"></a>

```typescript
public readonly invalidKeywords: string[];
```

- *Type:* string[]

---

##### `safety`<sup>Required</sup> <a name="safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safety"></a>

```typescript
public readonly safety: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validTopics`<sup>Required</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopics"></a>

```typescript
public readonly validTopics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingAiGatewayGuardrailsOutput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

---


### ModelServingAiGatewayGuardrailsOutputPiiOutputReference <a name="ModelServingAiGatewayGuardrailsOutputPiiOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingAiGatewayGuardrailsOutputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

---


### ModelServingAiGatewayGuardrailsOutputReference <a name="ModelServingAiGatewayGuardrailsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayGuardrailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetOutput">resetOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putInput"></a>

```typescript
public putInput(value: ModelServingAiGatewayGuardrailsInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putOutput"></a>

```typescript
public putOutput(value: ModelServingAiGatewayGuardrailsOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

---

##### `resetInput` <a name="resetInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetOutput"></a>

```typescript
public resetOutput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference">ModelServingAiGatewayGuardrailsInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference">ModelServingAiGatewayGuardrailsOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.inputInput">inputInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.outputInput">outputInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.input"></a>

```typescript
public readonly input: ModelServingAiGatewayGuardrailsInputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference">ModelServingAiGatewayGuardrailsInputOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.output"></a>

```typescript
public readonly output: ModelServingAiGatewayGuardrailsOutputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference">ModelServingAiGatewayGuardrailsOutputOutputReference</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: ModelServingAiGatewayGuardrailsInput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.outputInput"></a>

```typescript
public readonly outputInput: ModelServingAiGatewayGuardrailsOutput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingAiGatewayGuardrails;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

---


### ModelServingAiGatewayInferenceTableConfigOutputReference <a name="ModelServingAiGatewayInferenceTableConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix">resetTableNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetTableNamePrefix` <a name="resetTableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix"></a>

```typescript
public resetTableNamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput"></a>

```typescript
public readonly tableNamePrefixInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingAiGatewayInferenceTableConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

---


### ModelServingAiGatewayOutputReference <a name="ModelServingAiGatewayOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putGuardrails">putGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putInferenceTableConfig">putInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putUsageTrackingConfig">putUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetInferenceTableConfig">resetInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetUsageTrackingConfig">resetUsageTrackingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuardrails` <a name="putGuardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putGuardrails"></a>

```typescript
public putGuardrails(value: ModelServingAiGatewayGuardrails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putGuardrails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

---

##### `putInferenceTableConfig` <a name="putInferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putInferenceTableConfig"></a>

```typescript
public putInferenceTableConfig(value: ModelServingAiGatewayInferenceTableConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putInferenceTableConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putRateLimits"></a>

```typescript
public putRateLimits(value: IResolvable | ModelServingAiGatewayRateLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>[]

---

##### `putUsageTrackingConfig` <a name="putUsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putUsageTrackingConfig"></a>

```typescript
public putUsageTrackingConfig(value: ModelServingAiGatewayUsageTrackingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putUsageTrackingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

---

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetGuardrails"></a>

```typescript
public resetGuardrails(): void
```

##### `resetInferenceTableConfig` <a name="resetInferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetInferenceTableConfig"></a>

```typescript
public resetInferenceTableConfig(): void
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetRateLimits"></a>

```typescript
public resetRateLimits(): void
```

##### `resetUsageTrackingConfig` <a name="resetUsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetUsageTrackingConfig"></a>

```typescript
public resetUsageTrackingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrails">guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference">ModelServingAiGatewayGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfig">inferenceTableConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference">ModelServingAiGatewayInferenceTableConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList">ModelServingAiGatewayRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfig">usageTrackingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference">ModelServingAiGatewayUsageTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrailsInput">guardrailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfigInput">inferenceTableConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimitsInput">rateLimitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfigInput">usageTrackingConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrails"></a>

```typescript
public readonly guardrails: ModelServingAiGatewayGuardrailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference">ModelServingAiGatewayGuardrailsOutputReference</a>

---

##### `inferenceTableConfig`<sup>Required</sup> <a name="inferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfig"></a>

```typescript
public readonly inferenceTableConfig: ModelServingAiGatewayInferenceTableConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference">ModelServingAiGatewayInferenceTableConfigOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimits"></a>

```typescript
public readonly rateLimits: ModelServingAiGatewayRateLimitsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList">ModelServingAiGatewayRateLimitsList</a>

---

##### `usageTrackingConfig`<sup>Required</sup> <a name="usageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfig"></a>

```typescript
public readonly usageTrackingConfig: ModelServingAiGatewayUsageTrackingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference">ModelServingAiGatewayUsageTrackingConfigOutputReference</a>

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrailsInput"></a>

```typescript
public readonly guardrailsInput: ModelServingAiGatewayGuardrails;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

---

##### `inferenceTableConfigInput`<sup>Optional</sup> <a name="inferenceTableConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfigInput"></a>

```typescript
public readonly inferenceTableConfigInput: ModelServingAiGatewayInferenceTableConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimitsInput"></a>

```typescript
public readonly rateLimitsInput: IResolvable | ModelServingAiGatewayRateLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>[]

---

##### `usageTrackingConfigInput`<sup>Optional</sup> <a name="usageTrackingConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfigInput"></a>

```typescript
public readonly usageTrackingConfigInput: ModelServingAiGatewayUsageTrackingConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingAiGateway;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

---


### ModelServingAiGatewayRateLimitsList <a name="ModelServingAiGatewayRateLimitsList" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayRateLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.get"></a>

```typescript
public get(index: number): ModelServingAiGatewayRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingAiGatewayRateLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>[]

---


### ModelServingAiGatewayRateLimitsOutputReference <a name="ModelServingAiGatewayRateLimitsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayRateLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.callsInput">callsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.calls">calls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callsInput`<sup>Optional</sup> <a name="callsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.callsInput"></a>

```typescript
public readonly callsInput: number;
```

- *Type:* number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriodInput"></a>

```typescript
public readonly renewalPeriodInput: string;
```

- *Type:* string

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.calls"></a>

```typescript
public readonly calls: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingAiGatewayRateLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>

---


### ModelServingAiGatewayUsageTrackingConfigOutputReference <a name="ModelServingAiGatewayUsageTrackingConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingAiGatewayUsageTrackingConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

---


### ModelServingConfigAOutputReference <a name="ModelServingConfigAOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig">putAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedEntities">putServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels">putServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig">putTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetAutoCaptureConfig">resetAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedEntities">resetServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedModels">resetServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig">resetTrafficConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoCaptureConfig` <a name="putAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig"></a>

```typescript
public putAutoCaptureConfig(value: ModelServingConfigAutoCaptureConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---

##### `putServedEntities` <a name="putServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedEntities"></a>

```typescript
public putServedEntities(value: IResolvable | ModelServingConfigServedEntities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedEntities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>[]

---

##### `putServedModels` <a name="putServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels"></a>

```typescript
public putServedModels(value: IResolvable | ModelServingConfigServedModels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>[]

---

##### `putTrafficConfig` <a name="putTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig"></a>

```typescript
public putTrafficConfig(value: ModelServingConfigTrafficConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `resetAutoCaptureConfig` <a name="resetAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetAutoCaptureConfig"></a>

```typescript
public resetAutoCaptureConfig(): void
```

##### `resetServedEntities` <a name="resetServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedEntities"></a>

```typescript
public resetServedEntities(): void
```

##### `resetServedModels` <a name="resetServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedModels"></a>

```typescript
public resetServedModels(): void
```

##### `resetTrafficConfig` <a name="resetTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig"></a>

```typescript
public resetTrafficConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfig">autoCaptureConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference">ModelServingConfigAutoCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntities">servedEntities</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList">ModelServingConfigServedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels">servedModels</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfigInput">autoCaptureConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntitiesInput">servedEntitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput">servedModelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput">trafficConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoCaptureConfig`<sup>Required</sup> <a name="autoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfig"></a>

```typescript
public readonly autoCaptureConfig: ModelServingConfigAutoCaptureConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference">ModelServingConfigAutoCaptureConfigOutputReference</a>

---

##### `servedEntities`<sup>Required</sup> <a name="servedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntities"></a>

```typescript
public readonly servedEntities: ModelServingConfigServedEntitiesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList">ModelServingConfigServedEntitiesList</a>

---

##### `servedModels`<sup>Required</sup> <a name="servedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels"></a>

```typescript
public readonly servedModels: ModelServingConfigServedModelsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a>

---

##### `trafficConfig`<sup>Required</sup> <a name="trafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig"></a>

```typescript
public readonly trafficConfig: ModelServingConfigTrafficConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a>

---

##### `autoCaptureConfigInput`<sup>Optional</sup> <a name="autoCaptureConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfigInput"></a>

```typescript
public readonly autoCaptureConfigInput: ModelServingConfigAutoCaptureConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---

##### `servedEntitiesInput`<sup>Optional</sup> <a name="servedEntitiesInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntitiesInput"></a>

```typescript
public readonly servedEntitiesInput: IResolvable | ModelServingConfigServedEntities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>[]

---

##### `servedModelsInput`<sup>Optional</sup> <a name="servedModelsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput"></a>

```typescript
public readonly servedModelsInput: IResolvable | ModelServingConfigServedModels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>[]

---

##### `trafficConfigInput`<sup>Optional</sup> <a name="trafficConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput"></a>

```typescript
public readonly trafficConfigInput: ModelServingConfigTrafficConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigA;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---


### ModelServingConfigAutoCaptureConfigOutputReference <a name="ModelServingConfigAutoCaptureConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigAutoCaptureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetTableNamePrefix">resetTableNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetTableNamePrefix` <a name="resetTableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetTableNamePrefix"></a>

```typescript
public resetTableNamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefixInput"></a>

```typescript
public readonly tableNamePrefixInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigAutoCaptureConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKey">resetAi21LabsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKeyPlaintext">resetAi21LabsApiKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAi21LabsApiKey` <a name="resetAi21LabsApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKey"></a>

```typescript
public resetAi21LabsApiKey(): void
```

##### `resetAi21LabsApiKeyPlaintext` <a name="resetAi21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKeyPlaintext"></a>

```typescript
public resetAi21LabsApiKeyPlaintext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyInput">ai21LabsApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintextInput">ai21LabsApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKey">ai21LabsApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintext">ai21LabsApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ai21LabsApiKeyInput`<sup>Optional</sup> <a name="ai21LabsApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyInput"></a>

```typescript
public readonly ai21LabsApiKeyInput: string;
```

- *Type:* string

---

##### `ai21LabsApiKeyPlaintextInput`<sup>Optional</sup> <a name="ai21LabsApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintextInput"></a>

```typescript
public readonly ai21LabsApiKeyPlaintextInput: string;
```

- *Type:* string

---

##### `ai21LabsApiKey`<sup>Required</sup> <a name="ai21LabsApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKey"></a>

```typescript
public readonly ai21LabsApiKey: string;
```

- *Type:* string

---

##### `ai21LabsApiKeyPlaintext`<sup>Required</sup> <a name="ai21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintext"></a>

```typescript
public readonly ai21LabsApiKeyPlaintext: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigServedEntitiesExternalModelAi21LabsConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyId">resetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyIdPlaintext">resetAwsAccessKeyIdPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKey">resetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKeyPlaintext">resetAwsSecretAccessKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsAccessKeyId` <a name="resetAwsAccessKeyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyId"></a>

```typescript
public resetAwsAccessKeyId(): void
```

##### `resetAwsAccessKeyIdPlaintext` <a name="resetAwsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyIdPlaintext"></a>

```typescript
public resetAwsAccessKeyIdPlaintext(): void
```

##### `resetAwsSecretAccessKey` <a name="resetAwsSecretAccessKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKey"></a>

```typescript
public resetAwsSecretAccessKey(): void
```

##### `resetAwsSecretAccessKeyPlaintext` <a name="resetAwsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKeyPlaintext"></a>

```typescript
public resetAwsSecretAccessKeyPlaintext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdInput">awsAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintextInput">awsAccessKeyIdPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyInput">awsSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintextInput">awsSecretAccessKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProviderInput">bedrockProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintext">awsAccessKeyIdPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintext">awsSecretAccessKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProvider">bedrockProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccessKeyIdInput`<sup>Optional</sup> <a name="awsAccessKeyIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdInput"></a>

```typescript
public readonly awsAccessKeyIdInput: string;
```

- *Type:* string

---

##### `awsAccessKeyIdPlaintextInput`<sup>Optional</sup> <a name="awsAccessKeyIdPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintextInput"></a>

```typescript
public readonly awsAccessKeyIdPlaintextInput: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `awsSecretAccessKeyInput`<sup>Optional</sup> <a name="awsSecretAccessKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyInput"></a>

```typescript
public readonly awsSecretAccessKeyInput: string;
```

- *Type:* string

---

##### `awsSecretAccessKeyPlaintextInput`<sup>Optional</sup> <a name="awsSecretAccessKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintextInput"></a>

```typescript
public readonly awsSecretAccessKeyPlaintextInput: string;
```

- *Type:* string

---

##### `bedrockProviderInput`<sup>Optional</sup> <a name="bedrockProviderInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProviderInput"></a>

```typescript
public readonly bedrockProviderInput: string;
```

- *Type:* string

---

##### `awsAccessKeyId`<sup>Required</sup> <a name="awsAccessKeyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyId"></a>

```typescript
public readonly awsAccessKeyId: string;
```

- *Type:* string

---

##### `awsAccessKeyIdPlaintext`<sup>Required</sup> <a name="awsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintext"></a>

```typescript
public readonly awsAccessKeyIdPlaintext: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `awsSecretAccessKey`<sup>Required</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKey"></a>

```typescript
public readonly awsSecretAccessKey: string;
```

- *Type:* string

---

##### `awsSecretAccessKeyPlaintext`<sup>Required</sup> <a name="awsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintext"></a>

```typescript
public readonly awsSecretAccessKeyPlaintext: string;
```

- *Type:* string

---

##### `bedrockProvider`<sup>Required</sup> <a name="bedrockProvider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProvider"></a>

```typescript
public readonly bedrockProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKey">resetAnthropicApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKeyPlaintext">resetAnthropicApiKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnthropicApiKey` <a name="resetAnthropicApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKey"></a>

```typescript
public resetAnthropicApiKey(): void
```

##### `resetAnthropicApiKeyPlaintext` <a name="resetAnthropicApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKeyPlaintext"></a>

```typescript
public resetAnthropicApiKeyPlaintext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyInput">anthropicApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintextInput">anthropicApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKey">anthropicApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintext">anthropicApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anthropicApiKeyInput`<sup>Optional</sup> <a name="anthropicApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyInput"></a>

```typescript
public readonly anthropicApiKeyInput: string;
```

- *Type:* string

---

##### `anthropicApiKeyPlaintextInput`<sup>Optional</sup> <a name="anthropicApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintextInput"></a>

```typescript
public readonly anthropicApiKeyPlaintextInput: string;
```

- *Type:* string

---

##### `anthropicApiKey`<sup>Required</sup> <a name="anthropicApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKey"></a>

```typescript
public readonly anthropicApiKey: string;
```

- *Type:* string

---

##### `anthropicApiKeyPlaintext`<sup>Required</sup> <a name="anthropicApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintext"></a>

```typescript
public readonly anthropicApiKeyPlaintext: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigServedEntitiesExternalModelAnthropicConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiBase">resetCohereApiBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKey">resetCohereApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKeyPlaintext">resetCohereApiKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCohereApiBase` <a name="resetCohereApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiBase"></a>

```typescript
public resetCohereApiBase(): void
```

##### `resetCohereApiKey` <a name="resetCohereApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKey"></a>

```typescript
public resetCohereApiKey(): void
```

##### `resetCohereApiKeyPlaintext` <a name="resetCohereApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKeyPlaintext"></a>

```typescript
public resetCohereApiKeyPlaintext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBaseInput">cohereApiBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyInput">cohereApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintextInput">cohereApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBase">cohereApiBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKey">cohereApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintext">cohereApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cohereApiBaseInput`<sup>Optional</sup> <a name="cohereApiBaseInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBaseInput"></a>

```typescript
public readonly cohereApiBaseInput: string;
```

- *Type:* string

---

##### `cohereApiKeyInput`<sup>Optional</sup> <a name="cohereApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyInput"></a>

```typescript
public readonly cohereApiKeyInput: string;
```

- *Type:* string

---

##### `cohereApiKeyPlaintextInput`<sup>Optional</sup> <a name="cohereApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintextInput"></a>

```typescript
public readonly cohereApiKeyPlaintextInput: string;
```

- *Type:* string

---

##### `cohereApiBase`<sup>Required</sup> <a name="cohereApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBase"></a>

```typescript
public readonly cohereApiBase: string;
```

- *Type:* string

---

##### `cohereApiKey`<sup>Required</sup> <a name="cohereApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKey"></a>

```typescript
public readonly cohereApiKey: string;
```

- *Type:* string

---

##### `cohereApiKeyPlaintext`<sup>Required</sup> <a name="cohereApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintext"></a>

```typescript
public readonly cohereApiKeyPlaintext: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigServedEntitiesExternalModelCohereConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiToken">resetDatabricksApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiTokenPlaintext">resetDatabricksApiTokenPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabricksApiToken` <a name="resetDatabricksApiToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiToken"></a>

```typescript
public resetDatabricksApiToken(): void
```

##### `resetDatabricksApiTokenPlaintext` <a name="resetDatabricksApiTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiTokenPlaintext"></a>

```typescript
public resetDatabricksApiTokenPlaintext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenInput">databricksApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintextInput">databricksApiTokenPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrlInput">databricksWorkspaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiToken">databricksApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintext">databricksApiTokenPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrl">databricksWorkspaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databricksApiTokenInput`<sup>Optional</sup> <a name="databricksApiTokenInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenInput"></a>

```typescript
public readonly databricksApiTokenInput: string;
```

- *Type:* string

---

##### `databricksApiTokenPlaintextInput`<sup>Optional</sup> <a name="databricksApiTokenPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintextInput"></a>

```typescript
public readonly databricksApiTokenPlaintextInput: string;
```

- *Type:* string

---

##### `databricksWorkspaceUrlInput`<sup>Optional</sup> <a name="databricksWorkspaceUrlInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrlInput"></a>

```typescript
public readonly databricksWorkspaceUrlInput: string;
```

- *Type:* string

---

##### `databricksApiToken`<sup>Required</sup> <a name="databricksApiToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiToken"></a>

```typescript
public readonly databricksApiToken: string;
```

- *Type:* string

---

##### `databricksApiTokenPlaintext`<sup>Required</sup> <a name="databricksApiTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintext"></a>

```typescript
public readonly databricksApiTokenPlaintext: string;
```

- *Type:* string

---

##### `databricksWorkspaceUrl`<sup>Required</sup> <a name="databricksWorkspaceUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrl"></a>

```typescript
public readonly databricksWorkspaceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKeyPlaintext">resetPrivateKeyPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetPrivateKeyPlaintext` <a name="resetPrivateKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKeyPlaintext"></a>

```typescript
public resetPrivateKeyPlaintext(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintextInput">privateKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintext">privateKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `privateKeyPlaintextInput`<sup>Optional</sup> <a name="privateKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintextInput"></a>

```typescript
public readonly privateKeyPlaintextInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyPlaintext`<sup>Required</sup> <a name="privateKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintext"></a>

```typescript
public readonly privateKeyPlaintext: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientId">resetMicrosoftEntraClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecret">resetMicrosoftEntraClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecretPlaintext">resetMicrosoftEntraClientSecretPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraTenantId">resetMicrosoftEntraTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiBase">resetOpenaiApiBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKey">resetOpenaiApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKeyPlaintext">resetOpenaiApiKeyPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiType">resetOpenaiApiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiVersion">resetOpenaiApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiDeploymentName">resetOpenaiDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiOrganization">resetOpenaiOrganization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMicrosoftEntraClientId` <a name="resetMicrosoftEntraClientId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientId"></a>

```typescript
public resetMicrosoftEntraClientId(): void
```

##### `resetMicrosoftEntraClientSecret` <a name="resetMicrosoftEntraClientSecret" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecret"></a>

```typescript
public resetMicrosoftEntraClientSecret(): void
```

##### `resetMicrosoftEntraClientSecretPlaintext` <a name="resetMicrosoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecretPlaintext"></a>

```typescript
public resetMicrosoftEntraClientSecretPlaintext(): void
```

##### `resetMicrosoftEntraTenantId` <a name="resetMicrosoftEntraTenantId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraTenantId"></a>

```typescript
public resetMicrosoftEntraTenantId(): void
```

##### `resetOpenaiApiBase` <a name="resetOpenaiApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiBase"></a>

```typescript
public resetOpenaiApiBase(): void
```

##### `resetOpenaiApiKey` <a name="resetOpenaiApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKey"></a>

```typescript
public resetOpenaiApiKey(): void
```

##### `resetOpenaiApiKeyPlaintext` <a name="resetOpenaiApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKeyPlaintext"></a>

```typescript
public resetOpenaiApiKeyPlaintext(): void
```

##### `resetOpenaiApiType` <a name="resetOpenaiApiType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiType"></a>

```typescript
public resetOpenaiApiType(): void
```

##### `resetOpenaiApiVersion` <a name="resetOpenaiApiVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiVersion"></a>

```typescript
public resetOpenaiApiVersion(): void
```

##### `resetOpenaiDeploymentName` <a name="resetOpenaiDeploymentName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiDeploymentName"></a>

```typescript
public resetOpenaiDeploymentName(): void
```

##### `resetOpenaiOrganization` <a name="resetOpenaiOrganization" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiOrganization"></a>

```typescript
public resetOpenaiOrganization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientIdInput">microsoftEntraClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretInput">microsoftEntraClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintextInput">microsoftEntraClientSecretPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantIdInput">microsoftEntraTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBaseInput">openaiApiBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyInput">openaiApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintextInput">openaiApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiTypeInput">openaiApiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersionInput">openaiApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentNameInput">openaiDeploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganizationInput">openaiOrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientId">microsoftEntraClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecret">microsoftEntraClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintext">microsoftEntraClientSecretPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantId">microsoftEntraTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBase">openaiApiBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKey">openaiApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintext">openaiApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiType">openaiApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersion">openaiApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentName">openaiDeploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganization">openaiOrganization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `microsoftEntraClientIdInput`<sup>Optional</sup> <a name="microsoftEntraClientIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientIdInput"></a>

```typescript
public readonly microsoftEntraClientIdInput: string;
```

- *Type:* string

---

##### `microsoftEntraClientSecretInput`<sup>Optional</sup> <a name="microsoftEntraClientSecretInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretInput"></a>

```typescript
public readonly microsoftEntraClientSecretInput: string;
```

- *Type:* string

---

##### `microsoftEntraClientSecretPlaintextInput`<sup>Optional</sup> <a name="microsoftEntraClientSecretPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintextInput"></a>

```typescript
public readonly microsoftEntraClientSecretPlaintextInput: string;
```

- *Type:* string

---

##### `microsoftEntraTenantIdInput`<sup>Optional</sup> <a name="microsoftEntraTenantIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantIdInput"></a>

```typescript
public readonly microsoftEntraTenantIdInput: string;
```

- *Type:* string

---

##### `openaiApiBaseInput`<sup>Optional</sup> <a name="openaiApiBaseInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBaseInput"></a>

```typescript
public readonly openaiApiBaseInput: string;
```

- *Type:* string

---

##### `openaiApiKeyInput`<sup>Optional</sup> <a name="openaiApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyInput"></a>

```typescript
public readonly openaiApiKeyInput: string;
```

- *Type:* string

---

##### `openaiApiKeyPlaintextInput`<sup>Optional</sup> <a name="openaiApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintextInput"></a>

```typescript
public readonly openaiApiKeyPlaintextInput: string;
```

- *Type:* string

---

##### `openaiApiTypeInput`<sup>Optional</sup> <a name="openaiApiTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiTypeInput"></a>

```typescript
public readonly openaiApiTypeInput: string;
```

- *Type:* string

---

##### `openaiApiVersionInput`<sup>Optional</sup> <a name="openaiApiVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersionInput"></a>

```typescript
public readonly openaiApiVersionInput: string;
```

- *Type:* string

---

##### `openaiDeploymentNameInput`<sup>Optional</sup> <a name="openaiDeploymentNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentNameInput"></a>

```typescript
public readonly openaiDeploymentNameInput: string;
```

- *Type:* string

---

##### `openaiOrganizationInput`<sup>Optional</sup> <a name="openaiOrganizationInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganizationInput"></a>

```typescript
public readonly openaiOrganizationInput: string;
```

- *Type:* string

---

##### `microsoftEntraClientId`<sup>Required</sup> <a name="microsoftEntraClientId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientId"></a>

```typescript
public readonly microsoftEntraClientId: string;
```

- *Type:* string

---

##### `microsoftEntraClientSecret`<sup>Required</sup> <a name="microsoftEntraClientSecret" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecret"></a>

```typescript
public readonly microsoftEntraClientSecret: string;
```

- *Type:* string

---

##### `microsoftEntraClientSecretPlaintext`<sup>Required</sup> <a name="microsoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintext"></a>

```typescript
public readonly microsoftEntraClientSecretPlaintext: string;
```

- *Type:* string

---

##### `microsoftEntraTenantId`<sup>Required</sup> <a name="microsoftEntraTenantId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantId"></a>

```typescript
public readonly microsoftEntraTenantId: string;
```

- *Type:* string

---

##### `openaiApiBase`<sup>Required</sup> <a name="openaiApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBase"></a>

```typescript
public readonly openaiApiBase: string;
```

- *Type:* string

---

##### `openaiApiKey`<sup>Required</sup> <a name="openaiApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKey"></a>

```typescript
public readonly openaiApiKey: string;
```

- *Type:* string

---

##### `openaiApiKeyPlaintext`<sup>Required</sup> <a name="openaiApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintext"></a>

```typescript
public readonly openaiApiKeyPlaintext: string;
```

- *Type:* string

---

##### `openaiApiType`<sup>Required</sup> <a name="openaiApiType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiType"></a>

```typescript
public readonly openaiApiType: string;
```

- *Type:* string

---

##### `openaiApiVersion`<sup>Required</sup> <a name="openaiApiVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersion"></a>

```typescript
public readonly openaiApiVersion: string;
```

- *Type:* string

---

##### `openaiDeploymentName`<sup>Required</sup> <a name="openaiDeploymentName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentName"></a>

```typescript
public readonly openaiDeploymentName: string;
```

- *Type:* string

---

##### `openaiOrganization`<sup>Required</sup> <a name="openaiOrganization" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganization"></a>

```typescript
public readonly openaiOrganization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigServedEntitiesExternalModelOpenaiConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelOutputReference <a name="ModelServingConfigServedEntitiesExternalModelOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig">putAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig">putAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig">putAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCohereConfig">putCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig">putDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig">putGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig">putOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putPalmConfig">putPalmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAi21LabsConfig">resetAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAmazonBedrockConfig">resetAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAnthropicConfig">resetAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCohereConfig">resetCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetDatabricksModelServingConfig">resetDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetGoogleCloudVertexAiConfig">resetGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetOpenaiConfig">resetOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetPalmConfig">resetPalmConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAi21LabsConfig` <a name="putAi21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig"></a>

```typescript
public putAi21LabsConfig(value: ModelServingConfigServedEntitiesExternalModelAi21LabsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

---

##### `putAmazonBedrockConfig` <a name="putAmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig"></a>

```typescript
public putAmazonBedrockConfig(value: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

---

##### `putAnthropicConfig` <a name="putAnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig"></a>

```typescript
public putAnthropicConfig(value: ModelServingConfigServedEntitiesExternalModelAnthropicConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

---

##### `putCohereConfig` <a name="putCohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCohereConfig"></a>

```typescript
public putCohereConfig(value: ModelServingConfigServedEntitiesExternalModelCohereConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCohereConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

---

##### `putDatabricksModelServingConfig` <a name="putDatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig"></a>

```typescript
public putDatabricksModelServingConfig(value: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

---

##### `putGoogleCloudVertexAiConfig` <a name="putGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig"></a>

```typescript
public putGoogleCloudVertexAiConfig(value: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

---

##### `putOpenaiConfig` <a name="putOpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig"></a>

```typescript
public putOpenaiConfig(value: ModelServingConfigServedEntitiesExternalModelOpenaiConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

---

##### `putPalmConfig` <a name="putPalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putPalmConfig"></a>

```typescript
public putPalmConfig(value: ModelServingConfigServedEntitiesExternalModelPalmConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putPalmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

---

##### `resetAi21LabsConfig` <a name="resetAi21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAi21LabsConfig"></a>

```typescript
public resetAi21LabsConfig(): void
```

##### `resetAmazonBedrockConfig` <a name="resetAmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAmazonBedrockConfig"></a>

```typescript
public resetAmazonBedrockConfig(): void
```

##### `resetAnthropicConfig` <a name="resetAnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAnthropicConfig"></a>

```typescript
public resetAnthropicConfig(): void
```

##### `resetCohereConfig` <a name="resetCohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCohereConfig"></a>

```typescript
public resetCohereConfig(): void
```

##### `resetDatabricksModelServingConfig` <a name="resetDatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetDatabricksModelServingConfig"></a>

```typescript
public resetDatabricksModelServingConfig(): void
```

##### `resetGoogleCloudVertexAiConfig` <a name="resetGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetGoogleCloudVertexAiConfig"></a>

```typescript
public resetGoogleCloudVertexAiConfig(): void
```

##### `resetOpenaiConfig` <a name="resetOpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetOpenaiConfig"></a>

```typescript
public resetOpenaiConfig(): void
```

##### `resetPalmConfig` <a name="resetPalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetPalmConfig"></a>

```typescript
public resetPalmConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfig">ai21LabsConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfig">amazonBedrockConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfig">anthropicConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfig">cohereConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfig">databricksModelServingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfig">googleCloudVertexAiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfig">openaiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfig">palmConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference">ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfigInput">ai21LabsConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfigInput">amazonBedrockConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfigInput">anthropicConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfigInput">cohereConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfigInput">databricksModelServingConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfigInput">googleCloudVertexAiConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfigInput">openaiConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfigInput">palmConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.taskInput">taskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.task">task</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ai21LabsConfig`<sup>Required</sup> <a name="ai21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfig"></a>

```typescript
public readonly ai21LabsConfig: ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference</a>

---

##### `amazonBedrockConfig`<sup>Required</sup> <a name="amazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfig"></a>

```typescript
public readonly amazonBedrockConfig: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference</a>

---

##### `anthropicConfig`<sup>Required</sup> <a name="anthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfig"></a>

```typescript
public readonly anthropicConfig: ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference</a>

---

##### `cohereConfig`<sup>Required</sup> <a name="cohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfig"></a>

```typescript
public readonly cohereConfig: ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference</a>

---

##### `databricksModelServingConfig`<sup>Required</sup> <a name="databricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfig"></a>

```typescript
public readonly databricksModelServingConfig: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference</a>

---

##### `googleCloudVertexAiConfig`<sup>Required</sup> <a name="googleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfig"></a>

```typescript
public readonly googleCloudVertexAiConfig: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference</a>

---

##### `openaiConfig`<sup>Required</sup> <a name="openaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfig"></a>

```typescript
public readonly openaiConfig: ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference</a>

---

##### `palmConfig`<sup>Required</sup> <a name="palmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfig"></a>

```typescript
public readonly palmConfig: ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference">ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference</a>

---

##### `ai21LabsConfigInput`<sup>Optional</sup> <a name="ai21LabsConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfigInput"></a>

```typescript
public readonly ai21LabsConfigInput: ModelServingConfigServedEntitiesExternalModelAi21LabsConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

---

##### `amazonBedrockConfigInput`<sup>Optional</sup> <a name="amazonBedrockConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfigInput"></a>

```typescript
public readonly amazonBedrockConfigInput: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

---

##### `anthropicConfigInput`<sup>Optional</sup> <a name="anthropicConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfigInput"></a>

```typescript
public readonly anthropicConfigInput: ModelServingConfigServedEntitiesExternalModelAnthropicConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

---

##### `cohereConfigInput`<sup>Optional</sup> <a name="cohereConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfigInput"></a>

```typescript
public readonly cohereConfigInput: ModelServingConfigServedEntitiesExternalModelCohereConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

---

##### `databricksModelServingConfigInput`<sup>Optional</sup> <a name="databricksModelServingConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfigInput"></a>

```typescript
public readonly databricksModelServingConfigInput: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

---

##### `googleCloudVertexAiConfigInput`<sup>Optional</sup> <a name="googleCloudVertexAiConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfigInput"></a>

```typescript
public readonly googleCloudVertexAiConfigInput: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `openaiConfigInput`<sup>Optional</sup> <a name="openaiConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfigInput"></a>

```typescript
public readonly openaiConfigInput: ModelServingConfigServedEntitiesExternalModelOpenaiConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

---

##### `palmConfigInput`<sup>Optional</sup> <a name="palmConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfigInput"></a>

```typescript
public readonly palmConfigInput: ModelServingConfigServedEntitiesExternalModelPalmConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `taskInput`<sup>Optional</sup> <a name="taskInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.taskInput"></a>

```typescript
public readonly taskInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `task`<sup>Required</sup> <a name="task" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.task"></a>

```typescript
public readonly task: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigServedEntitiesExternalModel;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

---


### ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKey">resetPalmApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKeyPlaintext">resetPalmApiKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPalmApiKey` <a name="resetPalmApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKey"></a>

```typescript
public resetPalmApiKey(): void
```

##### `resetPalmApiKeyPlaintext` <a name="resetPalmApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKeyPlaintext"></a>

```typescript
public resetPalmApiKeyPlaintext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyInput">palmApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintextInput">palmApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKey">palmApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintext">palmApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `palmApiKeyInput`<sup>Optional</sup> <a name="palmApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyInput"></a>

```typescript
public readonly palmApiKeyInput: string;
```

- *Type:* string

---

##### `palmApiKeyPlaintextInput`<sup>Optional</sup> <a name="palmApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintextInput"></a>

```typescript
public readonly palmApiKeyPlaintextInput: string;
```

- *Type:* string

---

##### `palmApiKey`<sup>Required</sup> <a name="palmApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKey"></a>

```typescript
public readonly palmApiKey: string;
```

- *Type:* string

---

##### `palmApiKeyPlaintext`<sup>Required</sup> <a name="palmApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintext"></a>

```typescript
public readonly palmApiKeyPlaintext: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigServedEntitiesExternalModelPalmConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

---


### ModelServingConfigServedEntitiesList <a name="ModelServingConfigServedEntitiesList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.get"></a>

```typescript
public get(index: number): ModelServingConfigServedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingConfigServedEntities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>[]

---


### ModelServingConfigServedEntitiesOutputReference <a name="ModelServingConfigServedEntitiesOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.putExternalModel">putExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityName">resetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityVersion">resetEntityVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEnvironmentVars">resetEnvironmentVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetExternalModel">resetExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedThroughput">resetMaxProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedThroughput">resetMinProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetScaleToZeroEnabled">resetScaleToZeroEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadSize">resetWorkloadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalModel` <a name="putExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.putExternalModel"></a>

```typescript
public putExternalModel(value: ModelServingConfigServedEntitiesExternalModel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.putExternalModel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

---

##### `resetEntityName` <a name="resetEntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityName"></a>

```typescript
public resetEntityName(): void
```

##### `resetEntityVersion` <a name="resetEntityVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityVersion"></a>

```typescript
public resetEntityVersion(): void
```

##### `resetEnvironmentVars` <a name="resetEnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEnvironmentVars"></a>

```typescript
public resetEnvironmentVars(): void
```

##### `resetExternalModel` <a name="resetExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetExternalModel"></a>

```typescript
public resetExternalModel(): void
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetInstanceProfileArn"></a>

```typescript
public resetInstanceProfileArn(): void
```

##### `resetMaxProvisionedThroughput` <a name="resetMaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedThroughput"></a>

```typescript
public resetMaxProvisionedThroughput(): void
```

##### `resetMinProvisionedThroughput` <a name="resetMinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedThroughput"></a>

```typescript
public resetMinProvisionedThroughput(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetScaleToZeroEnabled` <a name="resetScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetScaleToZeroEnabled"></a>

```typescript
public resetScaleToZeroEnabled(): void
```

##### `resetWorkloadSize` <a name="resetWorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadSize"></a>

```typescript
public resetWorkloadSize(): void
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadType"></a>

```typescript
public resetWorkloadType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModel">externalModel</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference">ModelServingConfigServedEntitiesExternalModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityNameInput">entityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersionInput">entityVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVarsInput">environmentVarsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModelInput">externalModelInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughputInput">maxProvisionedThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughputInput">minProvisionedThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabledInput">scaleToZeroEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSizeInput">workloadSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityName">entityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersion">entityVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVars">environmentVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughput">maxProvisionedThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughput">minProvisionedThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSize">workloadSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalModel`<sup>Required</sup> <a name="externalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModel"></a>

```typescript
public readonly externalModel: ModelServingConfigServedEntitiesExternalModelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference">ModelServingConfigServedEntitiesExternalModelOutputReference</a>

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityNameInput"></a>

```typescript
public readonly entityNameInput: string;
```

- *Type:* string

---

##### `entityVersionInput`<sup>Optional</sup> <a name="entityVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersionInput"></a>

```typescript
public readonly entityVersionInput: string;
```

- *Type:* string

---

##### `environmentVarsInput`<sup>Optional</sup> <a name="environmentVarsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVarsInput"></a>

```typescript
public readonly environmentVarsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalModelInput`<sup>Optional</sup> <a name="externalModelInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModelInput"></a>

```typescript
public readonly externalModelInput: ModelServingConfigServedEntitiesExternalModel;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `maxProvisionedThroughputInput`<sup>Optional</sup> <a name="maxProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughputInput"></a>

```typescript
public readonly maxProvisionedThroughputInput: number;
```

- *Type:* number

---

##### `minProvisionedThroughputInput`<sup>Optional</sup> <a name="minProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughputInput"></a>

```typescript
public readonly minProvisionedThroughputInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scaleToZeroEnabledInput`<sup>Optional</sup> <a name="scaleToZeroEnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabledInput"></a>

```typescript
public readonly scaleToZeroEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workloadSizeInput`<sup>Optional</sup> <a name="workloadSizeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSizeInput"></a>

```typescript
public readonly workloadSizeInput: string;
```

- *Type:* string

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadTypeInput"></a>

```typescript
public readonly workloadTypeInput: string;
```

- *Type:* string

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

---

##### `entityVersion`<sup>Required</sup> <a name="entityVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersion"></a>

```typescript
public readonly entityVersion: string;
```

- *Type:* string

---

##### `environmentVars`<sup>Required</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVars"></a>

```typescript
public readonly environmentVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `maxProvisionedThroughput`<sup>Required</sup> <a name="maxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughput"></a>

```typescript
public readonly maxProvisionedThroughput: number;
```

- *Type:* number

---

##### `minProvisionedThroughput`<sup>Required</sup> <a name="minProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughput"></a>

```typescript
public readonly minProvisionedThroughput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scaleToZeroEnabled`<sup>Required</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabled"></a>

```typescript
public readonly scaleToZeroEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workloadSize`<sup>Required</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSize"></a>

```typescript
public readonly workloadSize: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingConfigServedEntities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>

---


### ModelServingConfigServedModelsList <a name="ModelServingConfigServedModelsList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get"></a>

```typescript
public get(index: number): ModelServingConfigServedModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingConfigServedModels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>[]

---


### ModelServingConfigServedModelsOutputReference <a name="ModelServingConfigServedModelsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigServedModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars">resetEnvironmentVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedThroughput">resetMaxProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedThroughput">resetMinProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled">resetScaleToZeroEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadSize">resetWorkloadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironmentVars` <a name="resetEnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars"></a>

```typescript
public resetEnvironmentVars(): void
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn"></a>

```typescript
public resetInstanceProfileArn(): void
```

##### `resetMaxProvisionedThroughput` <a name="resetMaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedThroughput"></a>

```typescript
public resetMaxProvisionedThroughput(): void
```

##### `resetMinProvisionedThroughput` <a name="resetMinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedThroughput"></a>

```typescript
public resetMinProvisionedThroughput(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetScaleToZeroEnabled` <a name="resetScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled"></a>

```typescript
public resetScaleToZeroEnabled(): void
```

##### `resetWorkloadSize` <a name="resetWorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadSize"></a>

```typescript
public resetWorkloadSize(): void
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadType"></a>

```typescript
public resetWorkloadType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput">environmentVarsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughputInput">maxProvisionedThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughputInput">minProvisionedThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput">modelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput">scaleToZeroEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput">workloadSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars">environmentVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughput">maxProvisionedThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughput">minProvisionedThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion">modelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize">workloadSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentVarsInput`<sup>Optional</sup> <a name="environmentVarsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput"></a>

```typescript
public readonly environmentVarsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `maxProvisionedThroughputInput`<sup>Optional</sup> <a name="maxProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughputInput"></a>

```typescript
public readonly maxProvisionedThroughputInput: number;
```

- *Type:* number

---

##### `minProvisionedThroughputInput`<sup>Optional</sup> <a name="minProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughputInput"></a>

```typescript
public readonly minProvisionedThroughputInput: number;
```

- *Type:* number

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput"></a>

```typescript
public readonly modelVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scaleToZeroEnabledInput`<sup>Optional</sup> <a name="scaleToZeroEnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput"></a>

```typescript
public readonly scaleToZeroEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workloadSizeInput`<sup>Optional</sup> <a name="workloadSizeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput"></a>

```typescript
public readonly workloadSizeInput: string;
```

- *Type:* string

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadTypeInput"></a>

```typescript
public readonly workloadTypeInput: string;
```

- *Type:* string

---

##### `environmentVars`<sup>Required</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars"></a>

```typescript
public readonly environmentVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `maxProvisionedThroughput`<sup>Required</sup> <a name="maxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughput"></a>

```typescript
public readonly maxProvisionedThroughput: number;
```

- *Type:* number

---

##### `minProvisionedThroughput`<sup>Required</sup> <a name="minProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughput"></a>

```typescript
public readonly minProvisionedThroughput: number;
```

- *Type:* number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scaleToZeroEnabled`<sup>Required</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled"></a>

```typescript
public readonly scaleToZeroEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workloadSize`<sup>Required</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize"></a>

```typescript
public readonly workloadSize: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingConfigServedModels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>

---


### ModelServingConfigTrafficConfigOutputReference <a name="ModelServingConfigTrafficConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigTrafficConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes">putRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes">resetRoutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoutes` <a name="putRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes"></a>

```typescript
public putRoutes(value: IResolvable | ModelServingConfigTrafficConfigRoutes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>[]

---

##### `resetRoutes` <a name="resetRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes"></a>

```typescript
public resetRoutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput">routesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes"></a>

```typescript
public readonly routes: ModelServingConfigTrafficConfigRoutesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a>

---

##### `routesInput`<sup>Optional</sup> <a name="routesInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput"></a>

```typescript
public readonly routesInput: IResolvable | ModelServingConfigTrafficConfigRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingConfigTrafficConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---


### ModelServingConfigTrafficConfigRoutesList <a name="ModelServingConfigTrafficConfigRoutesList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigTrafficConfigRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get"></a>

```typescript
public get(index: number): ModelServingConfigTrafficConfigRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingConfigTrafficConfigRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>[]

---


### ModelServingConfigTrafficConfigRoutesOutputReference <a name="ModelServingConfigTrafficConfigRoutesOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingConfigTrafficConfigRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput">servedModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput">trafficPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName">servedModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servedModelNameInput`<sup>Optional</sup> <a name="servedModelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput"></a>

```typescript
public readonly servedModelNameInput: string;
```

- *Type:* string

---

##### `trafficPercentageInput`<sup>Optional</sup> <a name="trafficPercentageInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput"></a>

```typescript
public readonly trafficPercentageInput: number;
```

- *Type:* number

---

##### `servedModelName`<sup>Required</sup> <a name="servedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName"></a>

```typescript
public readonly servedModelName: string;
```

- *Type:* string

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingConfigTrafficConfigRoutes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>

---


### ModelServingRateLimitsList <a name="ModelServingRateLimitsList" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingRateLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get"></a>

```typescript
public get(index: number): ModelServingRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingRateLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>[]

---


### ModelServingRateLimitsOutputReference <a name="ModelServingRateLimitsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingRateLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.callsInput">callsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.calls">calls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callsInput`<sup>Optional</sup> <a name="callsInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.callsInput"></a>

```typescript
public readonly callsInput: number;
```

- *Type:* number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriodInput"></a>

```typescript
public readonly renewalPeriodInput: string;
```

- *Type:* string

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.calls"></a>

```typescript
public readonly calls: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingRateLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>

---


### ModelServingTagsList <a name="ModelServingTagsList" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.get"></a>

```typescript
public get(index: number): ModelServingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>[]

---


### ModelServingTagsOutputReference <a name="ModelServingTagsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>

---


### ModelServingTimeoutsOutputReference <a name="ModelServingTimeoutsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer"></a>

```typescript
import { modelServing } from '@cdktf/provider-databricks'

new modelServing.ModelServingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---




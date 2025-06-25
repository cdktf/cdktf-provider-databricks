# `modelServingProvisionedThroughput` Submodule <a name="`modelServingProvisionedThroughput` Submodule" id="@cdktf/provider-databricks.modelServingProvisionedThroughput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelServingProvisionedThroughput <a name="ModelServingProvisionedThroughput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput databricks_model_serving_provisioned_throughput}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughput(scope: Construct, id: string, config: ModelServingProvisionedThroughputConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig">ModelServingProvisionedThroughputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig">ModelServingProvisionedThroughputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway">putAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetAiGateway">resetAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAiGateway` <a name="putAiGateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway"></a>

```typescript
public putAiGateway(value: ModelServingProvisionedThroughputAiGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a>

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putConfig"></a>

```typescript
public putConfig(value: ModelServingProvisionedThroughputConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTags"></a>

```typescript
public putTags(value: IResolvable | ModelServingProvisionedThroughputTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTimeouts"></a>

```typescript
public putTimeouts(value: ModelServingProvisionedThroughputTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>

---

##### `resetAiGateway` <a name="resetAiGateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetAiGateway"></a>

```typescript
public resetAiGateway(): void
```

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetBudgetPolicyId"></a>

```typescript
public resetBudgetPolicyId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ModelServingProvisionedThroughput resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isConstruct"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformElement"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformResource"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ModelServingProvisionedThroughput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ModelServingProvisionedThroughput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ModelServingProvisionedThroughput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ModelServingProvisionedThroughput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.aiGateway">aiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference">ModelServingProvisionedThroughputAiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference">ModelServingProvisionedThroughputConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.servingEndpointId">servingEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList">ModelServingProvisionedThroughputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference">ModelServingProvisionedThroughputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.aiGatewayInput">aiGatewayInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aiGateway`<sup>Required</sup> <a name="aiGateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.aiGateway"></a>

```typescript
public readonly aiGateway: ModelServingProvisionedThroughputAiGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference">ModelServingProvisionedThroughputAiGatewayOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.config"></a>

```typescript
public readonly config: ModelServingProvisionedThroughputConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference">ModelServingProvisionedThroughputConfigAOutputReference</a>

---

##### `servingEndpointId`<sup>Required</sup> <a name="servingEndpointId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.servingEndpointId"></a>

```typescript
public readonly servingEndpointId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tags"></a>

```typescript
public readonly tags: ModelServingProvisionedThroughputTagsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList">ModelServingProvisionedThroughputTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.timeouts"></a>

```typescript
public readonly timeouts: ModelServingProvisionedThroughputTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference">ModelServingProvisionedThroughputTimeoutsOutputReference</a>

---

##### `aiGatewayInput`<sup>Optional</sup> <a name="aiGatewayInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.aiGatewayInput"></a>

```typescript
public readonly aiGatewayInput: ModelServingProvisionedThroughputAiGateway;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a>

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.budgetPolicyIdInput"></a>

```typescript
public readonly budgetPolicyIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.configInput"></a>

```typescript
public readonly configInput: ModelServingProvisionedThroughputConfigA;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ModelServingProvisionedThroughputTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ModelServingProvisionedThroughputTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ModelServingProvisionedThroughputAiGateway <a name="ModelServingProvisionedThroughputAiGateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGateway: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.fallbackConfig">fallbackConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a></code> | fallback_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.guardrails">guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a></code> | guardrails block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.inferenceTableConfig">inferenceTableConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a></code> | inference_table_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.rateLimits">rateLimits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>[]</code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.usageTrackingConfig">usageTrackingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a></code> | usage_tracking_config block. |

---

##### `fallbackConfig`<sup>Optional</sup> <a name="fallbackConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.fallbackConfig"></a>

```typescript
public readonly fallbackConfig: ModelServingProvisionedThroughputAiGatewayFallbackConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a>

fallback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#fallback_config ModelServingProvisionedThroughput#fallback_config}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.guardrails"></a>

```typescript
public readonly guardrails: ModelServingProvisionedThroughputAiGatewayGuardrails;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a>

guardrails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#guardrails ModelServingProvisionedThroughput#guardrails}

---

##### `inferenceTableConfig`<sup>Optional</sup> <a name="inferenceTableConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.inferenceTableConfig"></a>

```typescript
public readonly inferenceTableConfig: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a>

inference_table_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#inference_table_config ModelServingProvisionedThroughput#inference_table_config}

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.rateLimits"></a>

```typescript
public readonly rateLimits: IResolvable | ModelServingProvisionedThroughputAiGatewayRateLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>[]

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#rate_limits ModelServingProvisionedThroughput#rate_limits}

---

##### `usageTrackingConfig`<sup>Optional</sup> <a name="usageTrackingConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.usageTrackingConfig"></a>

```typescript
public readonly usageTrackingConfig: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a>

usage_tracking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#usage_tracking_config ModelServingProvisionedThroughput#usage_tracking_config}

---

### ModelServingProvisionedThroughputAiGatewayFallbackConfig <a name="ModelServingProvisionedThroughputAiGatewayFallbackConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGatewayFallbackConfig: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}.

---

### ModelServingProvisionedThroughputAiGatewayGuardrails <a name="ModelServingProvisionedThroughputAiGatewayGuardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGatewayGuardrails: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.property.input">input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.property.output">output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a></code> | output block. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.property.input"></a>

```typescript
public readonly input: ModelServingProvisionedThroughputAiGatewayGuardrailsInput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#input ModelServingProvisionedThroughput#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.property.output"></a>

```typescript
public readonly output: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#output ModelServingProvisionedThroughput#output}

---

### ModelServingProvisionedThroughputAiGatewayGuardrailsInput <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGatewayGuardrailsInput: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.invalidKeywords">invalidKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.safety">safety</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.validTopics">validTopics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}. |

---

##### `invalidKeywords`<sup>Optional</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.invalidKeywords"></a>

```typescript
public readonly invalidKeywords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}.

---

##### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.pii"></a>

```typescript
public readonly pii: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#pii ModelServingProvisionedThroughput#pii}

---

##### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.safety"></a>

```typescript
public readonly safety: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}.

---

##### `validTopics`<sup>Optional</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.validTopics"></a>

```typescript
public readonly validTopics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}.

---

### ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGatewayGuardrailsInputPii: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii.property.behavior">behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}.

---

### ModelServingProvisionedThroughputAiGatewayGuardrailsOutput <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGatewayGuardrailsOutput: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.invalidKeywords">invalidKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.safety">safety</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.validTopics">validTopics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}. |

---

##### `invalidKeywords`<sup>Optional</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.invalidKeywords"></a>

```typescript
public readonly invalidKeywords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}.

---

##### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.pii"></a>

```typescript
public readonly pii: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#pii ModelServingProvisionedThroughput#pii}

---

##### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.safety"></a>

```typescript
public readonly safety: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}.

---

##### `validTopics`<sup>Optional</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.validTopics"></a>

```typescript
public readonly validTopics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}.

---

### ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGatewayGuardrailsOutputPii: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii.property.behavior">behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}.

---

### ModelServingProvisionedThroughputAiGatewayInferenceTableConfig <a name="ModelServingProvisionedThroughputAiGatewayInferenceTableConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGatewayInferenceTableConfig: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#catalog_name ModelServingProvisionedThroughput#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#schema_name ModelServingProvisionedThroughput#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#table_name_prefix ModelServingProvisionedThroughput#table_name_prefix}. |

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#catalog_name ModelServingProvisionedThroughput#catalog_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#schema_name ModelServingProvisionedThroughput#schema_name}.

---

##### `tableNamePrefix`<sup>Optional</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#table_name_prefix ModelServingProvisionedThroughput#table_name_prefix}.

---

### ModelServingProvisionedThroughputAiGatewayRateLimits <a name="ModelServingProvisionedThroughputAiGatewayRateLimits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGatewayRateLimits: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.calls">calls</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#calls ModelServingProvisionedThroughput#calls}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#renewal_period ModelServingProvisionedThroughput#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}. |

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.calls"></a>

```typescript
public readonly calls: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#calls ModelServingProvisionedThroughput#calls}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#renewal_period ModelServingProvisionedThroughput#renewal_period}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}.

---

### ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig <a name="ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputAiGatewayUsageTrackingConfig: modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}.

---

### ModelServingProvisionedThroughputConfig <a name="ModelServingProvisionedThroughputConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputConfig: modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.aiGateway">aiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a></code> | ai_gateway block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#budget_policy_id ModelServingProvisionedThroughput#budget_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#id ModelServingProvisionedThroughput#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.config"></a>

```typescript
public readonly config: ModelServingProvisionedThroughputConfigA;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#config ModelServingProvisionedThroughput#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}.

---

##### `aiGateway`<sup>Optional</sup> <a name="aiGateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.aiGateway"></a>

```typescript
public readonly aiGateway: ModelServingProvisionedThroughputAiGateway;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a>

ai_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#ai_gateway ModelServingProvisionedThroughput#ai_gateway}

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#budget_policy_id ModelServingProvisionedThroughput#budget_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#id ModelServingProvisionedThroughput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ModelServingProvisionedThroughputTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#tags ModelServingProvisionedThroughput#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ModelServingProvisionedThroughputTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#timeouts ModelServingProvisionedThroughput#timeouts}

---

### ModelServingProvisionedThroughputConfigA <a name="ModelServingProvisionedThroughputConfigA" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputConfigA: modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.property.servedEntities">servedEntities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>[]</code> | served_entities block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a></code> | traffic_config block. |

---

##### `servedEntities`<sup>Optional</sup> <a name="servedEntities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.property.servedEntities"></a>

```typescript
public readonly servedEntities: IResolvable | ModelServingProvisionedThroughputConfigServedEntities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>[]

served_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#served_entities ModelServingProvisionedThroughput#served_entities}

---

##### `trafficConfig`<sup>Optional</sup> <a name="trafficConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.property.trafficConfig"></a>

```typescript
public readonly trafficConfig: ModelServingProvisionedThroughputConfigTrafficConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#traffic_config ModelServingProvisionedThroughput#traffic_config}

---

### ModelServingProvisionedThroughputConfigServedEntities <a name="ModelServingProvisionedThroughputConfigServedEntities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputConfigServedEntities: modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.entityName">entityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#entity_name ModelServingProvisionedThroughput#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.entityVersion">entityVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#entity_version ModelServingProvisionedThroughput#entity_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.provisionedModelUnits">provisionedModelUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#provisioned_model_units ModelServingProvisionedThroughput#provisioned_model_units}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}. |

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#entity_name ModelServingProvisionedThroughput#entity_name}.

---

##### `entityVersion`<sup>Required</sup> <a name="entityVersion" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.entityVersion"></a>

```typescript
public readonly entityVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#entity_version ModelServingProvisionedThroughput#entity_version}.

---

##### `provisionedModelUnits`<sup>Required</sup> <a name="provisionedModelUnits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.provisionedModelUnits"></a>

```typescript
public readonly provisionedModelUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#provisioned_model_units ModelServingProvisionedThroughput#provisioned_model_units}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}.

---

### ModelServingProvisionedThroughputConfigTrafficConfig <a name="ModelServingProvisionedThroughputConfigTrafficConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputConfigTrafficConfig: modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig.property.routes">routes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>[]</code> | routes block. |

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig.property.routes"></a>

```typescript
public readonly routes: IResolvable | ModelServingProvisionedThroughputConfigTrafficConfigRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>[]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#routes ModelServingProvisionedThroughput#routes}

---

### ModelServingProvisionedThroughputConfigTrafficConfigRoutes <a name="ModelServingProvisionedThroughputConfigTrafficConfigRoutes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputConfigTrafficConfigRoutes: modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.servedModelName">servedModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#served_model_name ModelServingProvisionedThroughput#served_model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#traffic_percentage ModelServingProvisionedThroughput#traffic_percentage}. |

---

##### `servedModelName`<sup>Required</sup> <a name="servedModelName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.servedModelName"></a>

```typescript
public readonly servedModelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#served_model_name ModelServingProvisionedThroughput#served_model_name}.

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#traffic_percentage ModelServingProvisionedThroughput#traffic_percentage}.

---

### ModelServingProvisionedThroughputTags <a name="ModelServingProvisionedThroughputTags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputTags: modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#value ModelServingProvisionedThroughput#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#value ModelServingProvisionedThroughput#value}.

---

### ModelServingProvisionedThroughputTimeouts <a name="ModelServingProvisionedThroughputTimeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

const modelServingProvisionedThroughputTimeouts: modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#create ModelServingProvisionedThroughput#create}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#update ModelServingProvisionedThroughput#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#create ModelServingProvisionedThroughput#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/model_serving_provisioned_throughput#update ModelServingProvisionedThroughput#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference <a name="ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputAiGatewayFallbackConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.putPii">putPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords">resetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetPii">resetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetSafety">resetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetValidTopics">resetValidTopics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPii` <a name="putPii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.putPii"></a>

```typescript
public putPii(value: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.putPii.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a>

---

##### `resetInvalidKeywords` <a name="resetInvalidKeywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords"></a>

```typescript
public resetInvalidKeywords(): void
```

##### `resetPii` <a name="resetPii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetPii"></a>

```typescript
public resetPii(): void
```

##### `resetSafety` <a name="resetSafety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetSafety"></a>

```typescript
public resetSafety(): void
```

##### `resetValidTopics` <a name="resetValidTopics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetValidTopics"></a>

```typescript
public resetValidTopics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput">invalidKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.piiInput">piiInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.safetyInput">safetyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.validTopicsInput">validTopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.invalidKeywords">invalidKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.safety">safety</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.validTopics">validTopics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pii`<sup>Required</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.pii"></a>

```typescript
public readonly pii: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference</a>

---

##### `invalidKeywordsInput`<sup>Optional</sup> <a name="invalidKeywordsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput"></a>

```typescript
public readonly invalidKeywordsInput: string[];
```

- *Type:* string[]

---

##### `piiInput`<sup>Optional</sup> <a name="piiInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.piiInput"></a>

```typescript
public readonly piiInput: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a>

---

##### `safetyInput`<sup>Optional</sup> <a name="safetyInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.safetyInput"></a>

```typescript
public readonly safetyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validTopicsInput`<sup>Optional</sup> <a name="validTopicsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.validTopicsInput"></a>

```typescript
public readonly validTopicsInput: string[];
```

- *Type:* string[]

---

##### `invalidKeywords`<sup>Required</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.invalidKeywords"></a>

```typescript
public readonly invalidKeywords: string[];
```

- *Type:* string[]

---

##### `safety`<sup>Required</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.safety"></a>

```typescript
public readonly safety: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validTopics`<sup>Required</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.validTopics"></a>

```typescript
public readonly validTopics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputAiGatewayGuardrailsInput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehavior` <a name="resetBehavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resetBehavior"></a>

```typescript
public resetBehavior(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.putPii">putPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords">resetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetPii">resetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetSafety">resetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetValidTopics">resetValidTopics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPii` <a name="putPii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.putPii"></a>

```typescript
public putPii(value: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.putPii.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a>

---

##### `resetInvalidKeywords` <a name="resetInvalidKeywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords"></a>

```typescript
public resetInvalidKeywords(): void
```

##### `resetPii` <a name="resetPii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetPii"></a>

```typescript
public resetPii(): void
```

##### `resetSafety` <a name="resetSafety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetSafety"></a>

```typescript
public resetSafety(): void
```

##### `resetValidTopics` <a name="resetValidTopics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetValidTopics"></a>

```typescript
public resetValidTopics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput">invalidKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.piiInput">piiInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.safetyInput">safetyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput">validTopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords">invalidKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.safety">safety</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.validTopics">validTopics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pii`<sup>Required</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.pii"></a>

```typescript
public readonly pii: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference</a>

---

##### `invalidKeywordsInput`<sup>Optional</sup> <a name="invalidKeywordsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput"></a>

```typescript
public readonly invalidKeywordsInput: string[];
```

- *Type:* string[]

---

##### `piiInput`<sup>Optional</sup> <a name="piiInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.piiInput"></a>

```typescript
public readonly piiInput: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a>

---

##### `safetyInput`<sup>Optional</sup> <a name="safetyInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.safetyInput"></a>

```typescript
public readonly safetyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validTopicsInput`<sup>Optional</sup> <a name="validTopicsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput"></a>

```typescript
public readonly validTopicsInput: string[];
```

- *Type:* string[]

---

##### `invalidKeywords`<sup>Required</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords"></a>

```typescript
public readonly invalidKeywords: string[];
```

- *Type:* string[]

---

##### `safety`<sup>Required</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.safety"></a>

```typescript
public readonly safety: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validTopics`<sup>Required</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.validTopics"></a>

```typescript
public readonly validTopics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehavior` <a name="resetBehavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior"></a>

```typescript
public resetBehavior(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resetOutput">resetOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putInput"></a>

```typescript
public putInput(value: ModelServingProvisionedThroughputAiGatewayGuardrailsInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a>

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putOutput"></a>

```typescript
public putOutput(value: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a>

---

##### `resetInput` <a name="resetInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resetOutput"></a>

```typescript
public resetOutput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.inputInput">inputInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.outputInput">outputInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.input"></a>

```typescript
public readonly input: ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.output"></a>

```typescript
public readonly output: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: ModelServingProvisionedThroughputAiGatewayGuardrailsInput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a>

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.outputInput"></a>

```typescript
public readonly outputInput: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputAiGatewayGuardrails;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a>

---


### ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference <a name="ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix">resetTableNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetTableNamePrefix` <a name="resetTableNamePrefix" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix"></a>

```typescript
public resetTableNamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput"></a>

```typescript
public readonly tableNamePrefixInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a>

---


### ModelServingProvisionedThroughputAiGatewayOutputReference <a name="ModelServingProvisionedThroughputAiGatewayOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putFallbackConfig">putFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putGuardrails">putGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putInferenceTableConfig">putInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putUsageTrackingConfig">putUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetFallbackConfig">resetFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetInferenceTableConfig">resetInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetUsageTrackingConfig">resetUsageTrackingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFallbackConfig` <a name="putFallbackConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putFallbackConfig"></a>

```typescript
public putFallbackConfig(value: ModelServingProvisionedThroughputAiGatewayFallbackConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putFallbackConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a>

---

##### `putGuardrails` <a name="putGuardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putGuardrails"></a>

```typescript
public putGuardrails(value: ModelServingProvisionedThroughputAiGatewayGuardrails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putGuardrails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a>

---

##### `putInferenceTableConfig` <a name="putInferenceTableConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putInferenceTableConfig"></a>

```typescript
public putInferenceTableConfig(value: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putInferenceTableConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putRateLimits"></a>

```typescript
public putRateLimits(value: IResolvable | ModelServingProvisionedThroughputAiGatewayRateLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>[]

---

##### `putUsageTrackingConfig` <a name="putUsageTrackingConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putUsageTrackingConfig"></a>

```typescript
public putUsageTrackingConfig(value: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putUsageTrackingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a>

---

##### `resetFallbackConfig` <a name="resetFallbackConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetFallbackConfig"></a>

```typescript
public resetFallbackConfig(): void
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetGuardrails"></a>

```typescript
public resetGuardrails(): void
```

##### `resetInferenceTableConfig` <a name="resetInferenceTableConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetInferenceTableConfig"></a>

```typescript
public resetInferenceTableConfig(): void
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetRateLimits"></a>

```typescript
public resetRateLimits(): void
```

##### `resetUsageTrackingConfig` <a name="resetUsageTrackingConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetUsageTrackingConfig"></a>

```typescript
public resetUsageTrackingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fallbackConfig">fallbackConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference">ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.guardrails">guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.inferenceTableConfig">inferenceTableConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference">ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList">ModelServingProvisionedThroughputAiGatewayRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.usageTrackingConfig">usageTrackingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fallbackConfigInput">fallbackConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.guardrailsInput">guardrailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.inferenceTableConfigInput">inferenceTableConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.rateLimitsInput">rateLimitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.usageTrackingConfigInput">usageTrackingConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fallbackConfig`<sup>Required</sup> <a name="fallbackConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fallbackConfig"></a>

```typescript
public readonly fallbackConfig: ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference">ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference</a>

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.guardrails"></a>

```typescript
public readonly guardrails: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference</a>

---

##### `inferenceTableConfig`<sup>Required</sup> <a name="inferenceTableConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.inferenceTableConfig"></a>

```typescript
public readonly inferenceTableConfig: ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference">ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.rateLimits"></a>

```typescript
public readonly rateLimits: ModelServingProvisionedThroughputAiGatewayRateLimitsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList">ModelServingProvisionedThroughputAiGatewayRateLimitsList</a>

---

##### `usageTrackingConfig`<sup>Required</sup> <a name="usageTrackingConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.usageTrackingConfig"></a>

```typescript
public readonly usageTrackingConfig: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference</a>

---

##### `fallbackConfigInput`<sup>Optional</sup> <a name="fallbackConfigInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fallbackConfigInput"></a>

```typescript
public readonly fallbackConfigInput: ModelServingProvisionedThroughputAiGatewayFallbackConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a>

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.guardrailsInput"></a>

```typescript
public readonly guardrailsInput: ModelServingProvisionedThroughputAiGatewayGuardrails;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a>

---

##### `inferenceTableConfigInput`<sup>Optional</sup> <a name="inferenceTableConfigInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.inferenceTableConfigInput"></a>

```typescript
public readonly inferenceTableConfigInput: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a>

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.rateLimitsInput"></a>

```typescript
public readonly rateLimitsInput: IResolvable | ModelServingProvisionedThroughputAiGatewayRateLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>[]

---

##### `usageTrackingConfigInput`<sup>Optional</sup> <a name="usageTrackingConfigInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.usageTrackingConfigInput"></a>

```typescript
public readonly usageTrackingConfigInput: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputAiGateway;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a>

---


### ModelServingProvisionedThroughputAiGatewayRateLimitsList <a name="ModelServingProvisionedThroughputAiGatewayRateLimitsList" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.get"></a>

```typescript
public get(index: number): ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingProvisionedThroughputAiGatewayRateLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>[]

---


### ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference <a name="ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.callsInput">callsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.calls">calls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callsInput`<sup>Optional</sup> <a name="callsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.callsInput"></a>

```typescript
public readonly callsInput: number;
```

- *Type:* number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.renewalPeriodInput"></a>

```typescript
public readonly renewalPeriodInput: string;
```

- *Type:* string

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.calls"></a>

```typescript
public readonly calls: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingProvisionedThroughputAiGatewayRateLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>

---


### ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference <a name="ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a>

---


### ModelServingProvisionedThroughputConfigAOutputReference <a name="ModelServingProvisionedThroughputConfigAOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putServedEntities">putServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putTrafficConfig">putTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resetServedEntities">resetServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resetTrafficConfig">resetTrafficConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServedEntities` <a name="putServedEntities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putServedEntities"></a>

```typescript
public putServedEntities(value: IResolvable | ModelServingProvisionedThroughputConfigServedEntities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putServedEntities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>[]

---

##### `putTrafficConfig` <a name="putTrafficConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putTrafficConfig"></a>

```typescript
public putTrafficConfig(value: ModelServingProvisionedThroughputConfigTrafficConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putTrafficConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a>

---

##### `resetServedEntities` <a name="resetServedEntities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resetServedEntities"></a>

```typescript
public resetServedEntities(): void
```

##### `resetTrafficConfig` <a name="resetTrafficConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resetTrafficConfig"></a>

```typescript
public resetTrafficConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.servedEntities">servedEntities</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList">ModelServingProvisionedThroughputConfigServedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference">ModelServingProvisionedThroughputConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.servedEntitiesInput">servedEntitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.trafficConfigInput">trafficConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servedEntities`<sup>Required</sup> <a name="servedEntities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.servedEntities"></a>

```typescript
public readonly servedEntities: ModelServingProvisionedThroughputConfigServedEntitiesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList">ModelServingProvisionedThroughputConfigServedEntitiesList</a>

---

##### `trafficConfig`<sup>Required</sup> <a name="trafficConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.trafficConfig"></a>

```typescript
public readonly trafficConfig: ModelServingProvisionedThroughputConfigTrafficConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference">ModelServingProvisionedThroughputConfigTrafficConfigOutputReference</a>

---

##### `servedEntitiesInput`<sup>Optional</sup> <a name="servedEntitiesInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.servedEntitiesInput"></a>

```typescript
public readonly servedEntitiesInput: IResolvable | ModelServingProvisionedThroughputConfigServedEntities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>[]

---

##### `trafficConfigInput`<sup>Optional</sup> <a name="trafficConfigInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.trafficConfigInput"></a>

```typescript
public readonly trafficConfigInput: ModelServingProvisionedThroughputConfigTrafficConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputConfigA;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a>

---


### ModelServingProvisionedThroughputConfigServedEntitiesList <a name="ModelServingProvisionedThroughputConfigServedEntitiesList" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.get"></a>

```typescript
public get(index: number): ModelServingProvisionedThroughputConfigServedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingProvisionedThroughputConfigServedEntities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>[]

---


### ModelServingProvisionedThroughputConfigServedEntitiesOutputReference <a name="ModelServingProvisionedThroughputConfigServedEntitiesOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityNameInput">entityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityVersionInput">entityVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.provisionedModelUnitsInput">provisionedModelUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityName">entityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityVersion">entityVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.provisionedModelUnits">provisionedModelUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityNameInput"></a>

```typescript
public readonly entityNameInput: string;
```

- *Type:* string

---

##### `entityVersionInput`<sup>Optional</sup> <a name="entityVersionInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityVersionInput"></a>

```typescript
public readonly entityVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `provisionedModelUnitsInput`<sup>Optional</sup> <a name="provisionedModelUnitsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.provisionedModelUnitsInput"></a>

```typescript
public readonly provisionedModelUnitsInput: number;
```

- *Type:* number

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

---

##### `entityVersion`<sup>Required</sup> <a name="entityVersion" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityVersion"></a>

```typescript
public readonly entityVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provisionedModelUnits`<sup>Required</sup> <a name="provisionedModelUnits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.provisionedModelUnits"></a>

```typescript
public readonly provisionedModelUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingProvisionedThroughputConfigServedEntities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>

---


### ModelServingProvisionedThroughputConfigTrafficConfigOutputReference <a name="ModelServingProvisionedThroughputConfigTrafficConfigOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.putRoutes">putRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resetRoutes">resetRoutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoutes` <a name="putRoutes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.putRoutes"></a>

```typescript
public putRoutes(value: IResolvable | ModelServingProvisionedThroughputConfigTrafficConfigRoutes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.putRoutes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>[]

---

##### `resetRoutes` <a name="resetRoutes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resetRoutes"></a>

```typescript
public resetRoutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList">ModelServingProvisionedThroughputConfigTrafficConfigRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.routesInput">routesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.routes"></a>

```typescript
public readonly routes: ModelServingProvisionedThroughputConfigTrafficConfigRoutesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList">ModelServingProvisionedThroughputConfigTrafficConfigRoutesList</a>

---

##### `routesInput`<sup>Optional</sup> <a name="routesInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.routesInput"></a>

```typescript
public readonly routesInput: IResolvable | ModelServingProvisionedThroughputConfigTrafficConfigRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelServingProvisionedThroughputConfigTrafficConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a>

---


### ModelServingProvisionedThroughputConfigTrafficConfigRoutesList <a name="ModelServingProvisionedThroughputConfigTrafficConfigRoutesList" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.get"></a>

```typescript
public get(index: number): ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingProvisionedThroughputConfigTrafficConfigRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>[]

---


### ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference <a name="ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput">servedModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput">trafficPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedModelName">servedModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servedModelNameInput`<sup>Optional</sup> <a name="servedModelNameInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput"></a>

```typescript
public readonly servedModelNameInput: string;
```

- *Type:* string

---

##### `trafficPercentageInput`<sup>Optional</sup> <a name="trafficPercentageInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput"></a>

```typescript
public readonly trafficPercentageInput: number;
```

- *Type:* number

---

##### `servedModelName`<sup>Required</sup> <a name="servedModelName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedModelName"></a>

```typescript
public readonly servedModelName: string;
```

- *Type:* string

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingProvisionedThroughputConfigTrafficConfigRoutes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>

---


### ModelServingProvisionedThroughputTagsList <a name="ModelServingProvisionedThroughputTagsList" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.get"></a>

```typescript
public get(index: number): ModelServingProvisionedThroughputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingProvisionedThroughputTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>[]

---


### ModelServingProvisionedThroughputTagsOutputReference <a name="ModelServingProvisionedThroughputTagsOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingProvisionedThroughputTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>

---


### ModelServingProvisionedThroughputTimeoutsOutputReference <a name="ModelServingProvisionedThroughputTimeoutsOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer"></a>

```typescript
import { modelServingProvisionedThroughput } from '@cdktf/provider-databricks'

new modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelServingProvisionedThroughputTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>

---




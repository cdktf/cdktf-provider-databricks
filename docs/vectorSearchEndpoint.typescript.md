# `vectorSearchEndpoint` Submodule <a name="`vectorSearchEndpoint` Submodule" id="@cdktf/provider-databricks.vectorSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchEndpoint <a name="VectorSearchEndpoint" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint databricks_vector_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

new vectorSearchEndpoint.VectorSearchEndpoint(scope: Construct, id: string, config: VectorSearchEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig">VectorSearchEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig">VectorSearchEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putCustomTags">putCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetEffectiveBudgetPolicyId">resetEffectiveBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomTags` <a name="putCustomTags" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putCustomTags"></a>

```typescript
public putCustomTags(value: IResolvable | VectorSearchEndpointCustomTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putCustomTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags">VectorSearchEndpointCustomTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: VectorSearchEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

---

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetEffectiveBudgetPolicyId` <a name="resetEffectiveBudgetPolicyId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetEffectiveBudgetPolicyId"></a>

```typescript
public resetEffectiveBudgetPolicyId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VectorSearchEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

vectorSearchEndpoint.VectorSearchEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VectorSearchEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VectorSearchEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VectorSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VectorSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creationTimestamp">creationTimestamp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.customTags">customTags</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList">VectorSearchEndpointCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointStatus">endpointStatus</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList">VectorSearchEndpointEndpointStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedUser">lastUpdatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.numIndexes">numIndexes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference">VectorSearchEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.customTagsInput">customTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags">VectorSearchEndpointCustomTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyIdInput">effectiveBudgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyId">effectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: number;
```

- *Type:* number

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.customTags"></a>

```typescript
public readonly customTags: VectorSearchEndpointCustomTagsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList">VectorSearchEndpointCustomTagsList</a>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointStatus"></a>

```typescript
public readonly endpointStatus: VectorSearchEndpointEndpointStatusList;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList">VectorSearchEndpointEndpointStatusList</a>

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: number;
```

- *Type:* number

---

##### `lastUpdatedUser`<sup>Required</sup> <a name="lastUpdatedUser" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedUser"></a>

```typescript
public readonly lastUpdatedUser: string;
```

- *Type:* string

---

##### `numIndexes`<sup>Required</sup> <a name="numIndexes" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.numIndexes"></a>

```typescript
public readonly numIndexes: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: VectorSearchEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference">VectorSearchEndpointTimeoutsOutputReference</a>

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: IResolvable | VectorSearchEndpointCustomTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags">VectorSearchEndpointCustomTags</a>[]

---

##### `effectiveBudgetPolicyIdInput`<sup>Optional</sup> <a name="effectiveBudgetPolicyIdInput" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyIdInput"></a>

```typescript
public readonly effectiveBudgetPolicyIdInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VectorSearchEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

---

##### `effectiveBudgetPolicyId`<sup>Required</sup> <a name="effectiveBudgetPolicyId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```typescript
public readonly effectiveBudgetPolicyId: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchEndpointConfig <a name="VectorSearchEndpointConfig" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

const vectorSearchEndpointConfig: vectorSearchEndpoint.VectorSearchEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.customTags">customTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags">VectorSearchEndpointCustomTags</a>[]</code> | custom_tags block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.effectiveBudgetPolicyId">effectiveBudgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#effective_budget_policy_id VectorSearchEndpoint#effective_budget_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.customTags"></a>

```typescript
public readonly customTags: IResolvable | VectorSearchEndpointCustomTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags">VectorSearchEndpointCustomTags</a>[]

custom_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#custom_tags VectorSearchEndpoint#custom_tags}

---

##### `effectiveBudgetPolicyId`<sup>Optional</sup> <a name="effectiveBudgetPolicyId" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.effectiveBudgetPolicyId"></a>

```typescript
public readonly effectiveBudgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#effective_budget_policy_id VectorSearchEndpoint#effective_budget_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VectorSearchEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#timeouts VectorSearchEndpoint#timeouts}

---

### VectorSearchEndpointCustomTags <a name="VectorSearchEndpointCustomTags" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

const vectorSearchEndpointCustomTags: vectorSearchEndpoint.VectorSearchEndpointCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#key VectorSearchEndpoint#key}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#value VectorSearchEndpoint#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#key VectorSearchEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#value VectorSearchEndpoint#value}.

---

### VectorSearchEndpointEndpointStatus <a name="VectorSearchEndpointEndpointStatus" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

const vectorSearchEndpointEndpointStatus: vectorSearchEndpoint.VectorSearchEndpointEndpointStatus = { ... }
```


### VectorSearchEndpointTimeouts <a name="VectorSearchEndpointTimeouts" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

const vectorSearchEndpointTimeouts: vectorSearchEndpoint.VectorSearchEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#create VectorSearchEndpoint#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/vector_search_endpoint#create VectorSearchEndpoint#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchEndpointCustomTagsList <a name="VectorSearchEndpointCustomTagsList" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

new vectorSearchEndpoint.VectorSearchEndpointCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.get"></a>

```typescript
public get(index: number): VectorSearchEndpointCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags">VectorSearchEndpointCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchEndpointCustomTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags">VectorSearchEndpointCustomTags</a>[]

---


### VectorSearchEndpointCustomTagsOutputReference <a name="VectorSearchEndpointCustomTagsOutputReference" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

new vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags">VectorSearchEndpointCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchEndpointCustomTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointCustomTags">VectorSearchEndpointCustomTags</a>

---


### VectorSearchEndpointEndpointStatusList <a name="VectorSearchEndpointEndpointStatusList" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

new vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get"></a>

```typescript
public get(index: number): VectorSearchEndpointEndpointStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VectorSearchEndpointEndpointStatusOutputReference <a name="VectorSearchEndpointEndpointStatusOutputReference" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

new vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus">VectorSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VectorSearchEndpointEndpointStatus;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus">VectorSearchEndpointEndpointStatus</a>

---


### VectorSearchEndpointTimeoutsOutputReference <a name="VectorSearchEndpointTimeoutsOutputReference" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { vectorSearchEndpoint } from '@cdktf/provider-databricks'

new vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

---




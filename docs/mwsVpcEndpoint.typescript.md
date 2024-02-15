# `mwsVpcEndpoint` Submodule <a name="`mwsVpcEndpoint` Submodule" id="@cdktf/provider-databricks.mwsVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsVpcEndpoint <a name="MwsVpcEndpoint" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint databricks_mws_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer"></a>

```typescript
import { mwsVpcEndpoint } from '@cdktf/provider-databricks'

new mwsVpcEndpoint.MwsVpcEndpoint(scope: Construct, id: string, config: MwsVpcEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig">MwsVpcEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig">MwsVpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.putGcpVpcEndpointInfo">putGcpVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsEndpointServiceId">resetAwsEndpointServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsVpcEndpointId">resetAwsVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetGcpVpcEndpointInfo">resetGcpVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetUseCase">resetUseCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGcpVpcEndpointInfo` <a name="putGcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.putGcpVpcEndpointInfo"></a>

```typescript
public putGcpVpcEndpointInfo(value: MwsVpcEndpointGcpVpcEndpointInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.putGcpVpcEndpointInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetAwsEndpointServiceId` <a name="resetAwsEndpointServiceId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsEndpointServiceId"></a>

```typescript
public resetAwsEndpointServiceId(): void
```

##### `resetAwsVpcEndpointId` <a name="resetAwsVpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsVpcEndpointId"></a>

```typescript
public resetAwsVpcEndpointId(): void
```

##### `resetGcpVpcEndpointInfo` <a name="resetGcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetGcpVpcEndpointInfo"></a>

```typescript
public resetGcpVpcEndpointInfo(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetState"></a>

```typescript
public resetState(): void
```

##### `resetUseCase` <a name="resetUseCase" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetUseCase"></a>

```typescript
public resetUseCase(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsVpcEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct"></a>

```typescript
import { mwsVpcEndpoint } from '@cdktf/provider-databricks'

mwsVpcEndpoint.MwsVpcEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement"></a>

```typescript
import { mwsVpcEndpoint } from '@cdktf/provider-databricks'

mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource"></a>

```typescript
import { mwsVpcEndpoint } from '@cdktf/provider-databricks'

mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport"></a>

```typescript
import { mwsVpcEndpoint } from '@cdktf/provider-databricks'

mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MwsVpcEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsVpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MwsVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfo">gcpVpcEndpointInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference">MwsVpcEndpointGcpVpcEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceIdInput">awsEndpointServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointIdInput">awsVpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfoInput">gcpVpcEndpointInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCaseInput">useCaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointNameInput">vpcEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceId">awsEndpointServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointId">awsVpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCase">useCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointName">vpcEndpointName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gcpVpcEndpointInfo`<sup>Required</sup> <a name="gcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfo"></a>

```typescript
public readonly gcpVpcEndpointInfo: MwsVpcEndpointGcpVpcEndpointInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference">MwsVpcEndpointGcpVpcEndpointInfoOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `awsEndpointServiceIdInput`<sup>Optional</sup> <a name="awsEndpointServiceIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceIdInput"></a>

```typescript
public readonly awsEndpointServiceIdInput: string;
```

- *Type:* string

---

##### `awsVpcEndpointIdInput`<sup>Optional</sup> <a name="awsVpcEndpointIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointIdInput"></a>

```typescript
public readonly awsVpcEndpointIdInput: string;
```

- *Type:* string

---

##### `gcpVpcEndpointInfoInput`<sup>Optional</sup> <a name="gcpVpcEndpointInfoInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfoInput"></a>

```typescript
public readonly gcpVpcEndpointInfoInput: MwsVpcEndpointGcpVpcEndpointInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `useCaseInput`<sup>Optional</sup> <a name="useCaseInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCaseInput"></a>

```typescript
public readonly useCaseInput: string;
```

- *Type:* string

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcEndpointNameInput`<sup>Optional</sup> <a name="vpcEndpointNameInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointNameInput"></a>

```typescript
public readonly vpcEndpointNameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsEndpointServiceId`<sup>Required</sup> <a name="awsEndpointServiceId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceId"></a>

```typescript
public readonly awsEndpointServiceId: string;
```

- *Type:* string

---

##### `awsVpcEndpointId`<sup>Required</sup> <a name="awsVpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointId"></a>

```typescript
public readonly awsVpcEndpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCase"></a>

```typescript
public readonly useCase: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcEndpointName`<sup>Required</sup> <a name="vpcEndpointName" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointName"></a>

```typescript
public readonly vpcEndpointName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsVpcEndpointConfig <a name="MwsVpcEndpointConfig" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.Initializer"></a>

```typescript
import { mwsVpcEndpoint } from '@cdktf/provider-databricks'

const mwsVpcEndpointConfig: mwsVpcEndpoint.MwsVpcEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointName">vpcEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsEndpointServiceId">awsEndpointServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsVpcEndpointId">awsVpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.gcpVpcEndpointInfo">gcpVpcEndpointInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | gcp_vpc_endpoint_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#id MwsVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#region MwsVpcEndpoint#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#state MwsVpcEndpoint#state}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.useCase">useCase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcEndpointName`<sup>Required</sup> <a name="vpcEndpointName" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointName"></a>

```typescript
public readonly vpcEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}.

---

##### `awsEndpointServiceId`<sup>Optional</sup> <a name="awsEndpointServiceId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsEndpointServiceId"></a>

```typescript
public readonly awsEndpointServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}.

---

##### `awsVpcEndpointId`<sup>Optional</sup> <a name="awsVpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsVpcEndpointId"></a>

```typescript
public readonly awsVpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}.

---

##### `gcpVpcEndpointInfo`<sup>Optional</sup> <a name="gcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.gcpVpcEndpointInfo"></a>

```typescript
public readonly gcpVpcEndpointInfo: MwsVpcEndpointGcpVpcEndpointInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

gcp_vpc_endpoint_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#gcp_vpc_endpoint_info MwsVpcEndpoint#gcp_vpc_endpoint_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#id MwsVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#region MwsVpcEndpoint#region}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#state MwsVpcEndpoint#state}.

---

##### `useCase`<sup>Optional</sup> <a name="useCase" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.useCase"></a>

```typescript
public readonly useCase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}.

---

### MwsVpcEndpointGcpVpcEndpointInfo <a name="MwsVpcEndpointGcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.Initializer"></a>

```typescript
import { mwsVpcEndpoint } from '@cdktf/provider-databricks'

const mwsVpcEndpointGcpVpcEndpointInfo: mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.endpointRegion">endpointRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#endpoint_region MwsVpcEndpoint#endpoint_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#project_id MwsVpcEndpoint#project_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscEndpointName">pscEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#psc_endpoint_name MwsVpcEndpoint#psc_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#psc_connection_id MwsVpcEndpoint#psc_connection_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.serviceAttachmentId">serviceAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#service_attachment_id MwsVpcEndpoint#service_attachment_id}. |

---

##### `endpointRegion`<sup>Required</sup> <a name="endpointRegion" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.endpointRegion"></a>

```typescript
public readonly endpointRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#endpoint_region MwsVpcEndpoint#endpoint_region}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#project_id MwsVpcEndpoint#project_id}.

---

##### `pscEndpointName`<sup>Required</sup> <a name="pscEndpointName" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscEndpointName"></a>

```typescript
public readonly pscEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#psc_endpoint_name MwsVpcEndpoint#psc_endpoint_name}.

---

##### `pscConnectionId`<sup>Optional</sup> <a name="pscConnectionId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#psc_connection_id MwsVpcEndpoint#psc_connection_id}.

---

##### `serviceAttachmentId`<sup>Optional</sup> <a name="serviceAttachmentId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.serviceAttachmentId"></a>

```typescript
public readonly serviceAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mws_vpc_endpoint#service_attachment_id MwsVpcEndpoint#service_attachment_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsVpcEndpointGcpVpcEndpointInfoOutputReference <a name="MwsVpcEndpointGcpVpcEndpointInfoOutputReference" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer"></a>

```typescript
import { mwsVpcEndpoint } from '@cdktf/provider-databricks'

new mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetPscConnectionId">resetPscConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetServiceAttachmentId">resetServiceAttachmentId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPscConnectionId` <a name="resetPscConnectionId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetPscConnectionId"></a>

```typescript
public resetPscConnectionId(): void
```

##### `resetServiceAttachmentId` <a name="resetServiceAttachmentId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetServiceAttachmentId"></a>

```typescript
public resetServiceAttachmentId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegionInput">endpointRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionIdInput">pscConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointNameInput">pscEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentIdInput">serviceAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegion">endpointRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointName">pscEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentId">serviceAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointRegionInput`<sup>Optional</sup> <a name="endpointRegionInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegionInput"></a>

```typescript
public readonly endpointRegionInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `pscConnectionIdInput`<sup>Optional</sup> <a name="pscConnectionIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionIdInput"></a>

```typescript
public readonly pscConnectionIdInput: string;
```

- *Type:* string

---

##### `pscEndpointNameInput`<sup>Optional</sup> <a name="pscEndpointNameInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointNameInput"></a>

```typescript
public readonly pscEndpointNameInput: string;
```

- *Type:* string

---

##### `serviceAttachmentIdInput`<sup>Optional</sup> <a name="serviceAttachmentIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentIdInput"></a>

```typescript
public readonly serviceAttachmentIdInput: string;
```

- *Type:* string

---

##### `endpointRegion`<sup>Required</sup> <a name="endpointRegion" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegion"></a>

```typescript
public readonly endpointRegion: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `pscEndpointName`<sup>Required</sup> <a name="pscEndpointName" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointName"></a>

```typescript
public readonly pscEndpointName: string;
```

- *Type:* string

---

##### `serviceAttachmentId`<sup>Required</sup> <a name="serviceAttachmentId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentId"></a>

```typescript
public readonly serviceAttachmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwsVpcEndpointGcpVpcEndpointInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

---




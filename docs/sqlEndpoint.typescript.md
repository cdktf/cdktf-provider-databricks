# `sqlEndpoint` Submodule <a name="`sqlEndpoint` Submodule" id="@cdktf/provider-databricks.sqlEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlEndpoint <a name="SqlEndpoint" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint databricks_sql_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpoint(scope: Construct, id: string, config: SqlEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig">SqlEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig">SqlEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel">putChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetAutoStopMins">resetAutoStopMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetDataSourceId">resetDataSourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnablePhoton">resetEnablePhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnableServerlessCompute">resetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMaxNumClusters">resetMaxNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMinNumClusters">resetMinNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetSpotInstancePolicy">resetSpotInstancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetWarehouseType">resetWarehouseType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChannel` <a name="putChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel"></a>

```typescript
public putChannel(value: SqlEndpointChannel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags"></a>

```typescript
public putTags(value: SqlEndpointTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: SqlEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

---

##### `resetAutoStopMins` <a name="resetAutoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetAutoStopMins"></a>

```typescript
public resetAutoStopMins(): void
```

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetDataSourceId` <a name="resetDataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetDataSourceId"></a>

```typescript
public resetDataSourceId(): void
```

##### `resetEnablePhoton` <a name="resetEnablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnablePhoton"></a>

```typescript
public resetEnablePhoton(): void
```

##### `resetEnableServerlessCompute` <a name="resetEnableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnableServerlessCompute"></a>

```typescript
public resetEnableServerlessCompute(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetInstanceProfileArn"></a>

```typescript
public resetInstanceProfileArn(): void
```

##### `resetMaxNumClusters` <a name="resetMaxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMaxNumClusters"></a>

```typescript
public resetMaxNumClusters(): void
```

##### `resetMinNumClusters` <a name="resetMinNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMinNumClusters"></a>

```typescript
public resetMinNumClusters(): void
```

##### `resetSpotInstancePolicy` <a name="resetSpotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetSpotInstancePolicy"></a>

```typescript
public resetSpotInstancePolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWarehouseType` <a name="resetWarehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetWarehouseType"></a>

```typescript
public resetWarehouseType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

sqlEndpoint.SqlEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

sqlEndpoint.SqlEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

sqlEndpoint.SqlEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

sqlEndpoint.SqlEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqlEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference">SqlEndpointChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.creatorName">creatorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.health">health</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList">SqlEndpointHealthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrl">jdbcUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numActiveSessions">numActiveSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClusters">numClusters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParams">odbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList">SqlEndpointOdbcParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference">SqlEndpointTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference">SqlEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMinsInput">autoStopMinsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channelInput">channelInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSizeInput">clusterSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhotonInput">enablePhotonInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessComputeInput">enableServerlessComputeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClustersInput">maxNumClustersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClustersInput">minNumClustersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicyInput">spotInstancePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseTypeInput">warehouseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMins">autoStopMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSize">clusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhoton">enablePhoton</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClusters">maxNumClusters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClusters">minNumClusters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicy">spotInstancePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseType">warehouseType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channel"></a>

```typescript
public readonly channel: SqlEndpointChannelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference">SqlEndpointChannelOutputReference</a>

---

##### `creatorName`<sup>Required</sup> <a name="creatorName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.creatorName"></a>

```typescript
public readonly creatorName: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.health"></a>

```typescript
public readonly health: SqlEndpointHealthList;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList">SqlEndpointHealthList</a>

---

##### `jdbcUrl`<sup>Required</sup> <a name="jdbcUrl" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrl"></a>

```typescript
public readonly jdbcUrl: string;
```

- *Type:* string

---

##### `numActiveSessions`<sup>Required</sup> <a name="numActiveSessions" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numActiveSessions"></a>

```typescript
public readonly numActiveSessions: number;
```

- *Type:* number

---

##### `numClusters`<sup>Required</sup> <a name="numClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClusters"></a>

```typescript
public readonly numClusters: number;
```

- *Type:* number

---

##### `odbcParams`<sup>Required</sup> <a name="odbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParams"></a>

```typescript
public readonly odbcParams: SqlEndpointOdbcParamsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList">SqlEndpointOdbcParamsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tags"></a>

```typescript
public readonly tags: SqlEndpointTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference">SqlEndpointTagsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: SqlEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference">SqlEndpointTimeoutsOutputReference</a>

---

##### `autoStopMinsInput`<sup>Optional</sup> <a name="autoStopMinsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMinsInput"></a>

```typescript
public readonly autoStopMinsInput: number;
```

- *Type:* number

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channelInput"></a>

```typescript
public readonly channelInput: SqlEndpointChannel;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---

##### `clusterSizeInput`<sup>Optional</sup> <a name="clusterSizeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSizeInput"></a>

```typescript
public readonly clusterSizeInput: string;
```

- *Type:* string

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `enablePhotonInput`<sup>Optional</sup> <a name="enablePhotonInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhotonInput"></a>

```typescript
public readonly enablePhotonInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableServerlessComputeInput`<sup>Optional</sup> <a name="enableServerlessComputeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessComputeInput"></a>

```typescript
public readonly enableServerlessComputeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `maxNumClustersInput`<sup>Optional</sup> <a name="maxNumClustersInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClustersInput"></a>

```typescript
public readonly maxNumClustersInput: number;
```

- *Type:* number

---

##### `minNumClustersInput`<sup>Optional</sup> <a name="minNumClustersInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClustersInput"></a>

```typescript
public readonly minNumClustersInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `spotInstancePolicyInput`<sup>Optional</sup> <a name="spotInstancePolicyInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicyInput"></a>

```typescript
public readonly spotInstancePolicyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: SqlEndpointTags;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SqlEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

---

##### `warehouseTypeInput`<sup>Optional</sup> <a name="warehouseTypeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseTypeInput"></a>

```typescript
public readonly warehouseTypeInput: string;
```

- *Type:* string

---

##### `autoStopMins`<sup>Required</sup> <a name="autoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMins"></a>

```typescript
public readonly autoStopMins: number;
```

- *Type:* number

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSize"></a>

```typescript
public readonly clusterSize: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `enablePhoton`<sup>Required</sup> <a name="enablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhoton"></a>

```typescript
public readonly enablePhoton: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableServerlessCompute`<sup>Required</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessCompute"></a>

```typescript
public readonly enableServerlessCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `maxNumClusters`<sup>Required</sup> <a name="maxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClusters"></a>

```typescript
public readonly maxNumClusters: number;
```

- *Type:* number

---

##### `minNumClusters`<sup>Required</sup> <a name="minNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClusters"></a>

```typescript
public readonly minNumClusters: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `spotInstancePolicy`<sup>Required</sup> <a name="spotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicy"></a>

```typescript
public readonly spotInstancePolicy: string;
```

- *Type:* string

---

##### `warehouseType`<sup>Required</sup> <a name="warehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseType"></a>

```typescript
public readonly warehouseType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlEndpointChannel <a name="SqlEndpointChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

const sqlEndpointChannel: sqlEndpoint.SqlEndpointChannel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.dbsqlVersion">dbsqlVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#dbsql_version SqlEndpoint#dbsql_version}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#name SqlEndpoint#name}. |

---

##### `dbsqlVersion`<sup>Optional</sup> <a name="dbsqlVersion" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.dbsqlVersion"></a>

```typescript
public readonly dbsqlVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#dbsql_version SqlEndpoint#dbsql_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#name SqlEndpoint#name}.

---

### SqlEndpointConfig <a name="SqlEndpointConfig" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

const sqlEndpointConfig: sqlEndpoint.SqlEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.clusterSize">clusterSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#name SqlEndpoint#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.autoStopMins">autoStopMins</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enablePhoton">enablePhoton</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#id SqlEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.maxNumClusters">maxNumClusters</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.minNumClusters">minNumClusters</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.spotInstancePolicy">spotInstancePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.warehouseType">warehouseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.clusterSize"></a>

```typescript
public readonly clusterSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#name SqlEndpoint#name}.

---

##### `autoStopMins`<sup>Optional</sup> <a name="autoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.autoStopMins"></a>

```typescript
public readonly autoStopMins: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.channel"></a>

```typescript
public readonly channel: SqlEndpointChannel;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#channel SqlEndpoint#channel}

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}.

---

##### `enablePhoton`<sup>Optional</sup> <a name="enablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enablePhoton"></a>

```typescript
public readonly enablePhoton: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enableServerlessCompute"></a>

```typescript
public readonly enableServerlessCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#id SqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}.

---

##### `maxNumClusters`<sup>Optional</sup> <a name="maxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.maxNumClusters"></a>

```typescript
public readonly maxNumClusters: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}.

---

##### `minNumClusters`<sup>Optional</sup> <a name="minNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.minNumClusters"></a>

```typescript
public readonly minNumClusters: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}.

---

##### `spotInstancePolicy`<sup>Optional</sup> <a name="spotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.spotInstancePolicy"></a>

```typescript
public readonly spotInstancePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.tags"></a>

```typescript
public readonly tags: SqlEndpointTags;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#tags SqlEndpoint#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqlEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#timeouts SqlEndpoint#timeouts}

---

##### `warehouseType`<sup>Optional</sup> <a name="warehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.warehouseType"></a>

```typescript
public readonly warehouseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}.

---

### SqlEndpointHealth <a name="SqlEndpointHealth" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

const sqlEndpointHealth: sqlEndpoint.SqlEndpointHealth = { ... }
```


### SqlEndpointHealthFailureReason <a name="SqlEndpointHealthFailureReason" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

const sqlEndpointHealthFailureReason: sqlEndpoint.SqlEndpointHealthFailureReason = { ... }
```


### SqlEndpointOdbcParams <a name="SqlEndpointOdbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

const sqlEndpointOdbcParams: sqlEndpoint.SqlEndpointOdbcParams = { ... }
```


### SqlEndpointTags <a name="SqlEndpointTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

const sqlEndpointTags: sqlEndpoint.SqlEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.property.customTags">customTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>[]</code> | custom_tags block. |

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.property.customTags"></a>

```typescript
public readonly customTags: IResolvable | SqlEndpointTagsCustomTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>[]

custom_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#custom_tags SqlEndpoint#custom_tags}

---

### SqlEndpointTagsCustomTags <a name="SqlEndpointTagsCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

const sqlEndpointTagsCustomTags: sqlEndpoint.SqlEndpointTagsCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#key SqlEndpoint#key}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#value SqlEndpoint#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#key SqlEndpoint#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#value SqlEndpoint#value}.

---

### SqlEndpointTimeouts <a name="SqlEndpointTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

const sqlEndpointTimeouts: sqlEndpoint.SqlEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#create SqlEndpoint#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_endpoint#create SqlEndpoint#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlEndpointChannelOutputReference <a name="SqlEndpointChannelOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetDbsqlVersion">resetDbsqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbsqlVersion` <a name="resetDbsqlVersion" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetDbsqlVersion"></a>

```typescript
public resetDbsqlVersion(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersionInput">dbsqlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersion">dbsqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbsqlVersionInput`<sup>Optional</sup> <a name="dbsqlVersionInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersionInput"></a>

```typescript
public readonly dbsqlVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dbsqlVersion`<sup>Required</sup> <a name="dbsqlVersion" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersion"></a>

```typescript
public readonly dbsqlVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlEndpointChannel;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---


### SqlEndpointHealthFailureReasonList <a name="SqlEndpointHealthFailureReasonList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointHealthFailureReasonList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.get"></a>

```typescript
public get(index: number): SqlEndpointHealthFailureReasonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SqlEndpointHealthFailureReasonOutputReference <a name="SqlEndpointHealthFailureReasonOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.parameters">parameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason">SqlEndpointHealthFailureReason</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.parameters"></a>

```typescript
public readonly parameters: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlEndpointHealthFailureReason;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason">SqlEndpointHealthFailureReason</a>

---


### SqlEndpointHealthList <a name="SqlEndpointHealthList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointHealthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.get"></a>

```typescript
public get(index: number): SqlEndpointHealthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SqlEndpointHealthOutputReference <a name="SqlEndpointHealthOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointHealthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.failureReason">failureReason</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList">SqlEndpointHealthFailureReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth">SqlEndpointHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.failureReason"></a>

```typescript
public readonly failureReason: SqlEndpointHealthFailureReasonList;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList">SqlEndpointHealthFailureReasonList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlEndpointHealth;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth">SqlEndpointHealth</a>

---


### SqlEndpointOdbcParamsList <a name="SqlEndpointOdbcParamsList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointOdbcParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.get"></a>

```typescript
public get(index: number): SqlEndpointOdbcParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SqlEndpointOdbcParamsOutputReference <a name="SqlEndpointOdbcParamsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointOdbcParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlEndpointOdbcParams;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a>

---


### SqlEndpointTagsCustomTagsList <a name="SqlEndpointTagsCustomTagsList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointTagsCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get"></a>

```typescript
public get(index: number): SqlEndpointTagsCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlEndpointTagsCustomTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>[]

---


### SqlEndpointTagsCustomTagsOutputReference <a name="SqlEndpointTagsCustomTagsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlEndpointTagsCustomTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>

---


### SqlEndpointTagsOutputReference <a name="SqlEndpointTagsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags">putCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resetCustomTags">resetCustomTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomTags` <a name="putCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags"></a>

```typescript
public putCustomTags(value: IResolvable | SqlEndpointTagsCustomTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>[]

---

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList">SqlEndpointTagsCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTagsInput">customTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTags"></a>

```typescript
public readonly customTags: SqlEndpointTagsCustomTagsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList">SqlEndpointTagsCustomTagsList</a>

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: IResolvable | SqlEndpointTagsCustomTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlEndpointTags;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---


### SqlEndpointTimeoutsOutputReference <a name="SqlEndpointTimeoutsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqlEndpoint } from '@cdktf/provider-databricks'

new sqlEndpoint.SqlEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

---




# `rfaAccessRequestDestinations` Submodule <a name="`rfaAccessRequestDestinations` Submodule" id="@cdktf/provider-databricks.rfaAccessRequestDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RfaAccessRequestDestinations <a name="RfaAccessRequestDestinations" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations databricks_rfa_access_request_destinations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinations(scope: Construct, id: string, config: RfaAccessRequestDestinationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig">RfaAccessRequestDestinationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig">RfaAccessRequestDestinationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable">putSecurable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | RfaAccessRequestDestinationsDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

---

##### `putSecurable` <a name="putSecurable" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable"></a>

```typescript
public putSecurable(value: RfaAccessRequestDestinationsSecurable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RfaAccessRequestDestinations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RfaAccessRequestDestinations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RfaAccessRequestDestinations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RfaAccessRequestDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RfaAccessRequestDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.areAnyDestinationsHidden">areAnyDestinationsHidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList">RfaAccessRequestDestinationsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securable">securable</a></code> | <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference">RfaAccessRequestDestinationsSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationsInput">destinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableInput">securableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `areAnyDestinationsHidden`<sup>Required</sup> <a name="areAnyDestinationsHidden" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.areAnyDestinationsHidden"></a>

```typescript
public readonly areAnyDestinationsHidden: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinations"></a>

```typescript
public readonly destinations: RfaAccessRequestDestinationsDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList">RfaAccessRequestDestinationsDestinationsList</a>

---

##### `securable`<sup>Required</sup> <a name="securable" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securable"></a>

```typescript
public readonly securable: RfaAccessRequestDestinationsSecurableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference">RfaAccessRequestDestinationsSecurableOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | RfaAccessRequestDestinationsDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

---

##### `securableInput`<sup>Optional</sup> <a name="securableInput" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableInput"></a>

```typescript
public readonly securableInput: IResolvable | RfaAccessRequestDestinationsSecurable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RfaAccessRequestDestinationsConfig <a name="RfaAccessRequestDestinationsConfig" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

const rfaAccessRequestDestinationsConfig: rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.destinations">destinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.securable">securable</a></code> | <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | RfaAccessRequestDestinationsDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}.

---

##### `securable`<sup>Required</sup> <a name="securable" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.securable"></a>

```typescript
public readonly securable: RfaAccessRequestDestinationsSecurable;
```

- *Type:* <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}.

---

### RfaAccessRequestDestinationsDestinations <a name="RfaAccessRequestDestinationsDestinations" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

const rfaAccessRequestDestinationsDestinations: rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationId">destinationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#destination_id RfaAccessRequestDestinations#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#destination_type RfaAccessRequestDestinations#destination_type}. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.specialDestination">specialDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#special_destination RfaAccessRequestDestinations#special_destination}. |

---

##### `destinationId`<sup>Optional</sup> <a name="destinationId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#destination_id RfaAccessRequestDestinations#destination_id}.

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#destination_type RfaAccessRequestDestinations#destination_type}.

---

##### `specialDestination`<sup>Optional</sup> <a name="specialDestination" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.specialDestination"></a>

```typescript
public readonly specialDestination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#special_destination RfaAccessRequestDestinations#special_destination}.

---

### RfaAccessRequestDestinationsSecurable <a name="RfaAccessRequestDestinationsSecurable" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

const rfaAccessRequestDestinationsSecurable: rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.providerShare">providerShare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}. |

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}.

---

##### `providerShare`<sup>Optional</sup> <a name="providerShare" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.providerShare"></a>

```typescript
public readonly providerShare: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### RfaAccessRequestDestinationsDestinationsList <a name="RfaAccessRequestDestinationsDestinationsList" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get"></a>

```typescript
public get(index: number): RfaAccessRequestDestinationsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RfaAccessRequestDestinationsDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

---


### RfaAccessRequestDestinationsDestinationsOutputReference <a name="RfaAccessRequestDestinationsDestinationsOutputReference" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId">resetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination">resetSpecialDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationId` <a name="resetDestinationId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId"></a>

```typescript
public resetDestinationId(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```

##### `resetSpecialDestination` <a name="resetSpecialDestination" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination"></a>

```typescript
public resetSpecialDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput">destinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput">specialDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId">destinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination">specialDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationIdInput`<sup>Optional</sup> <a name="destinationIdInput" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput"></a>

```typescript
public readonly destinationIdInput: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `specialDestinationInput`<sup>Optional</sup> <a name="specialDestinationInput" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput"></a>

```typescript
public readonly specialDestinationInput: string;
```

- *Type:* string

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `specialDestination`<sup>Required</sup> <a name="specialDestination" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination"></a>

```typescript
public readonly specialDestination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RfaAccessRequestDestinationsDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>

---


### RfaAccessRequestDestinationsSecurableOutputReference <a name="RfaAccessRequestDestinationsSecurableOutputReference" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktf/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare">resetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetFullName"></a>

```typescript
public resetFullName(): void
```

##### `resetProviderShare` <a name="resetProviderShare" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare"></a>

```typescript
public resetProviderShare(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput">providerShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShare">providerShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `providerShareInput`<sup>Optional</sup> <a name="providerShareInput" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput"></a>

```typescript
public readonly providerShareInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `providerShare`<sup>Required</sup> <a name="providerShare" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShare"></a>

```typescript
public readonly providerShare: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RfaAccessRequestDestinationsSecurable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---




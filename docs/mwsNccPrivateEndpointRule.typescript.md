# `mwsNccPrivateEndpointRule` Submodule <a name="`mwsNccPrivateEndpointRule` Submodule" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNccPrivateEndpointRule <a name="MwsNccPrivateEndpointRule" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer"></a>

```typescript
import { mwsNccPrivateEndpointRule } from '@cdktf/provider-databricks'

new mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule(scope: Construct, id: string, config: MwsNccPrivateEndpointRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetConnectionState">resetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivated">resetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivatedAt">resetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointName">resetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetUpdatedTime">resetUpdatedTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConnectionState` <a name="resetConnectionState" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetConnectionState"></a>

```typescript
public resetConnectionState(): void
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetDeactivated` <a name="resetDeactivated" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivated"></a>

```typescript
public resetDeactivated(): void
```

##### `resetDeactivatedAt` <a name="resetDeactivatedAt" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivatedAt"></a>

```typescript
public resetDeactivatedAt(): void
```

##### `resetEndpointName` <a name="resetEndpointName" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointName"></a>

```typescript
public resetEndpointName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetRuleId"></a>

```typescript
public resetRuleId(): void
```

##### `resetUpdatedTime` <a name="resetUpdatedTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetUpdatedTime"></a>

```typescript
public resetUpdatedTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsNccPrivateEndpointRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct"></a>

```typescript
import { mwsNccPrivateEndpointRule } from '@cdktf/provider-databricks'

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement"></a>

```typescript
import { mwsNccPrivateEndpointRule } from '@cdktf/provider-databricks'

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource"></a>

```typescript
import { mwsNccPrivateEndpointRule } from '@cdktf/provider-databricks'

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport"></a>

```typescript
import { mwsNccPrivateEndpointRule } from '@cdktf/provider-databricks'

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MwsNccPrivateEndpointRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsNccPrivateEndpointRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsNccPrivateEndpointRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MwsNccPrivateEndpointRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionStateInput">connectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTimeInput">creationTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAtInput">deactivatedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedInput">deactivatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput">networkConnectivityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTimeInput">updatedTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState">connectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated">deactivated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt">deactivatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime">updatedTime</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionStateInput`<sup>Optional</sup> <a name="connectionStateInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionStateInput"></a>

```typescript
public readonly connectionStateInput: string;
```

- *Type:* string

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: number;
```

- *Type:* number

---

##### `deactivatedAtInput`<sup>Optional</sup> <a name="deactivatedAtInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAtInput"></a>

```typescript
public readonly deactivatedAtInput: number;
```

- *Type:* number

---

##### `deactivatedInput`<sup>Optional</sup> <a name="deactivatedInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedInput"></a>

```typescript
public readonly deactivatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkConnectivityConfigIdInput`<sup>Optional</sup> <a name="networkConnectivityConfigIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput"></a>

```typescript
public readonly networkConnectivityConfigIdInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `updatedTimeInput`<sup>Optional</sup> <a name="updatedTimeInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTimeInput"></a>

```typescript
public readonly updatedTimeInput: number;
```

- *Type:* number

---

##### `connectionState`<sup>Required</sup> <a name="connectionState" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState"></a>

```typescript
public readonly connectionState: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `deactivated`<sup>Required</sup> <a name="deactivated" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated"></a>

```typescript
public readonly deactivated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deactivatedAt`<sup>Required</sup> <a name="deactivatedAt" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt"></a>

```typescript
public readonly deactivatedAt: number;
```

- *Type:* number

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkConnectivityConfigId`<sup>Required</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId"></a>

```typescript
public readonly networkConnectivityConfigId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime"></a>

```typescript
public readonly updatedTime: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNccPrivateEndpointRuleConfig <a name="MwsNccPrivateEndpointRuleConfig" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.Initializer"></a>

```typescript
import { mwsNccPrivateEndpointRule } from '@cdktf/provider-databricks'

const mwsNccPrivateEndpointRuleConfig: mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connectionState">connectionState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#connection_state MwsNccPrivateEndpointRule#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.creationTime">creationTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#creation_time MwsNccPrivateEndpointRule#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivated">deactivated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated MwsNccPrivateEndpointRule#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivatedAt">deactivatedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated_at MwsNccPrivateEndpointRule#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointName">endpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_name MwsNccPrivateEndpointRule#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#rule_id MwsNccPrivateEndpointRule#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.updatedTime">updatedTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#updated_time MwsNccPrivateEndpointRule#updated_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}.

---

##### `networkConnectivityConfigId`<sup>Required</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId"></a>

```typescript
public readonly networkConnectivityConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}.

---

##### `connectionState`<sup>Optional</sup> <a name="connectionState" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connectionState"></a>

```typescript
public readonly connectionState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#connection_state MwsNccPrivateEndpointRule#connection_state}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#creation_time MwsNccPrivateEndpointRule#creation_time}.

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivated"></a>

```typescript
public readonly deactivated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated MwsNccPrivateEndpointRule#deactivated}.

---

##### `deactivatedAt`<sup>Optional</sup> <a name="deactivatedAt" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivatedAt"></a>

```typescript
public readonly deactivatedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated_at MwsNccPrivateEndpointRule#deactivated_at}.

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_name MwsNccPrivateEndpointRule#endpoint_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#rule_id MwsNccPrivateEndpointRule#rule_id}.

---

##### `updatedTime`<sup>Optional</sup> <a name="updatedTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.updatedTime"></a>

```typescript
public readonly updatedTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/mws_ncc_private_endpoint_rule#updated_time MwsNccPrivateEndpointRule#updated_time}.

---




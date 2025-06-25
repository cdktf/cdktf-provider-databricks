# `mwsPrivateAccessSettings` Submodule <a name="`mwsPrivateAccessSettings` Submodule" id="@cdktf/provider-databricks.mwsPrivateAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsPrivateAccessSettings <a name="MwsPrivateAccessSettings" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings databricks_mws_private_access_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer"></a>

```typescript
import { mwsPrivateAccessSettings } from '@cdktf/provider-databricks'

new mwsPrivateAccessSettings.MwsPrivateAccessSettings(scope: Construct, id: string, config: MwsPrivateAccessSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig">MwsPrivateAccessSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig">MwsPrivateAccessSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds">resetAllowedVpcEndpointIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel">resetPrivateAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId">resetPrivateAccessSettingsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled">resetPublicAccessEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAllowedVpcEndpointIds` <a name="resetAllowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds"></a>

```typescript
public resetAllowedVpcEndpointIds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateAccessLevel` <a name="resetPrivateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel"></a>

```typescript
public resetPrivateAccessLevel(): void
```

##### `resetPrivateAccessSettingsId` <a name="resetPrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId"></a>

```typescript
public resetPrivateAccessSettingsId(): void
```

##### `resetPublicAccessEnabled` <a name="resetPublicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled"></a>

```typescript
public resetPublicAccessEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsPrivateAccessSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct"></a>

```typescript
import { mwsPrivateAccessSettings } from '@cdktf/provider-databricks'

mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement"></a>

```typescript
import { mwsPrivateAccessSettings } from '@cdktf/provider-databricks'

mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource"></a>

```typescript
import { mwsPrivateAccessSettings } from '@cdktf/provider-databricks'

mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport"></a>

```typescript
import { mwsPrivateAccessSettings } from '@cdktf/provider-databricks'

mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MwsPrivateAccessSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsPrivateAccessSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsPrivateAccessSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MwsPrivateAccessSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput">allowedVpcEndpointIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput">privateAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput">privateAccessSettingsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput">privateAccessSettingsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput">publicAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds">allowedVpcEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel">privateAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName">privateAccessSettingsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled">publicAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowedVpcEndpointIdsInput`<sup>Optional</sup> <a name="allowedVpcEndpointIdsInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput"></a>

```typescript
public readonly allowedVpcEndpointIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateAccessLevelInput`<sup>Optional</sup> <a name="privateAccessLevelInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput"></a>

```typescript
public readonly privateAccessLevelInput: string;
```

- *Type:* string

---

##### `privateAccessSettingsIdInput`<sup>Optional</sup> <a name="privateAccessSettingsIdInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput"></a>

```typescript
public readonly privateAccessSettingsIdInput: string;
```

- *Type:* string

---

##### `privateAccessSettingsNameInput`<sup>Optional</sup> <a name="privateAccessSettingsNameInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput"></a>

```typescript
public readonly privateAccessSettingsNameInput: string;
```

- *Type:* string

---

##### `publicAccessEnabledInput`<sup>Optional</sup> <a name="publicAccessEnabledInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput"></a>

```typescript
public readonly publicAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowedVpcEndpointIds`<sup>Required</sup> <a name="allowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds"></a>

```typescript
public readonly allowedVpcEndpointIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateAccessLevel`<sup>Required</sup> <a name="privateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel"></a>

```typescript
public readonly privateAccessLevel: string;
```

- *Type:* string

---

##### `privateAccessSettingsId`<sup>Required</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId"></a>

```typescript
public readonly privateAccessSettingsId: string;
```

- *Type:* string

---

##### `privateAccessSettingsName`<sup>Required</sup> <a name="privateAccessSettingsName" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName"></a>

```typescript
public readonly privateAccessSettingsName: string;
```

- *Type:* string

---

##### `publicAccessEnabled`<sup>Required</sup> <a name="publicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled"></a>

```typescript
public readonly publicAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsPrivateAccessSettingsConfig <a name="MwsPrivateAccessSettingsConfig" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.Initializer"></a>

```typescript
import { mwsPrivateAccessSettings } from '@cdktf/provider-databricks'

const mwsPrivateAccessSettingsConfig: mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName">privateAccessSettingsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds">allowedVpcEndpointIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel">privateAccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled">publicAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateAccessSettingsName`<sup>Required</sup> <a name="privateAccessSettingsName" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName"></a>

```typescript
public readonly privateAccessSettingsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}.

---

##### `allowedVpcEndpointIds`<sup>Optional</sup> <a name="allowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds"></a>

```typescript
public readonly allowedVpcEndpointIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateAccessLevel`<sup>Optional</sup> <a name="privateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel"></a>

```typescript
public readonly privateAccessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}.

---

##### `privateAccessSettingsId`<sup>Optional</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId"></a>

```typescript
public readonly privateAccessSettingsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}.

---

##### `publicAccessEnabled`<sup>Optional</sup> <a name="publicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled"></a>

```typescript
public readonly publicAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}.

---



